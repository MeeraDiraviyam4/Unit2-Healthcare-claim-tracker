import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { getAllClaims, getClaimById, updateClaim, deleteClaim} from "../services/api";

function StaffClaims() {

    const [claims, setClaims] = useState([]);
    const [claimId, setClaimId] = useState("");
    const [selectedClaim, setSelectedClaim] = useState(null);
    const [statusFilter, setStatusFilter] = useState("ALL");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [deleteId, setDeleteId] = useState(null);

    useEffect(() => {
        loadClaims();
    }, [])

     // get all  the claims from the backend
    async function loadClaims() {

        try {
               setError("");  
               const data = await getAllClaims();
        
                    setClaims(data);
        
            } catch (error) {
        
                    setError("Could not load claims. Please try again");
                    
                }
        
    }
    
    // search for one claim
    async function handleSearch(event) {
        event.preventDefault();
        setError("");
        setMessage("");

        if (!claimId || Number(claimId) <= 0) {
            setError("Please enter a valid Claim Id")
        }
        
        try{

            const data = await getClaimById(claimId);

            setSelectedClaim(data);
        
        } catch (error) {

            setSelectedClaim(null);

            setError("Claim not found");
        }
        
    }

     //show all the claims again
     function showAllClaims() {

        setSelectedClaim(null);

        setClaimId("");
        setError("");
        setMessage("");
     
    }

    //converting status to uppercase
    function getStatus(status) {
        return status?.toUpperCase();
    
    }

    // Ask the user to confirm deletion
    function requestDelete(claimIdToDelete) {
        setDeleteId(claimIdToDelete);
        setError("");
        setMessage("");
    }

    //delete the selected claim
    async function handleDelete() {
        if(!deleteId) {
            return;
        }
               
    try {
        await deleteClaim(deleteId); 

        setMessage("Claim deleted successfully");
        setDeleteId(null);
        

        // If the deleted claim was being viewed, // go back to the claim list
        if (selectedClaim?.id === deleteId) {
                setSelectedClaim(null);
            }

            await loadClaims(); //laods tha claims again and deleted claim disappears

    } catch (error) {

        setError("Could not delete claim.Please try again");
        setDeleteId(null);
      }
        
    }

    //cancel delete confirmation
    function cancelDelete() {
        setDeleteId(null);
    }

      //Approve or Deny a claim
      async function handleStatusChange(claim, newStatus) {

        try {
             setError("");   
             setMessage("");

             await updateClaim(claim.id, {
                ...claim,
                status: newStatus
            });

            setMessage(`Claim #${claim.id} was updated to ${newStatus}`);

           await loadClaims();

        } catch (error) {

            setError("Could not update the claim status");
        }
                
      }

    //filter the claims
    const filteredClaims = claims.filter((claim) => {

            if (statusFilter === "ALL") {

                return true;
            }

            return (
                getStatus(claim.status) === statusFilter
            );
        }
    );

    return(
        <div>

            <Navbar />

            <main className="app-page">

            <div className="claims-container">

              <header className="page-header">

                <h1>All Claims</h1>

                <p>Review and manage member healthcare claims.</p>
            </header>    

            {message && ( <p className="success-message"> {message} </p> )}

            {error && ( <p className="error-message" role="alert"> {error} </p>)}
               
            {/* Search section */}
                <section className="search-box" aria-labelledby="search-heading">
                    <h2 id="search-heading">Find a Claim</h2>

                    <form onSubmit={handleSearch}>

                        <input 
                           id="claimId"
                           type="number"
                           min="1"
                           value={claimId}
                           onChange={(event) => setClaimId(event.target.value)}
                           placeholder="Enter Claim Id"
                           required>
                        </input>

                           <button type="submit"> search </button>

                           <button type="button"
                                   onClick={showAllClaims}>
                                    show ALL
                            </button>
                            
                    </form>
                </section>

        {/*selected claim details*/}
            {selectedClaim && (
                    
               <section className="claim-details"
                        aria-labelledby="claim-details-heading">

                    <h2 id="claim-details-heading"> Claim Details </h2>

                        <p> <strong> Claim ID: </strong>{" "} {selectedClaim.id} </p>

                        <p> <strong> Provider: </strong>{" "} {selectedClaim.providerName} </p>

                        <p> <strong> Service: </strong>{" "} {selectedClaim.service} </p>

                        <p> <strong> Date: </strong>{" "} {selectedClaim.dateOfService} </p>

                        <p> <strong> Amount: </strong>{" "} ${selectedClaim.amount} </p>

                        <p> <strong> Description: </strong>{" "} {selectedClaim.description} </p>

                        <p> <strong> Status: </strong>{" "} {getStatus(selectedClaim.status)} </p>

                        <p> <strong> Submitted: </strong>{" "} {selectedClaim.submittedDate} </p>

                        <button  type="button" onClick={showAllClaims}>
                                 Back to All Claims
                        </button>

                </section>    
                 )}
                  
        {/*claim list when no cliam is selected */}
            {!selectedClaim && (
                 <section>
                        <div className="filter-box">
                            <h2> Claim List </h2>

                            <label htmlFor="statusFilter"> Filter by Status:</label>

                        <select  id="statusFilter"
                                 value={statusFilter}
                                 onChange={(event) => setStatusFilter(event.target.value)}>
                               
                                <option value="ALL"> All Claims </option>
                                                              
                                <option value="PENDING"> Pending </option>
                                       
                                <option value="APPROVED"> Approved </option>
                                     
                                <option value="DENIED"> Denied </option>
                                 
                        </select>         
                    </div>

                    {/* Message when there are no claims */}
                    {filteredClaims.length === 0 && (
                            <p className="empty-message">
                                No claims found for this filter.
                            </p>
                        )}                           

                    {/* Display claims*/}
                    {filteredClaims.map((claim) => (
                               
                       <div className="claim-card"
                            key={claim.id}
                        >
                            <h3> Claim #{claim.id}</h3>
                            
                            <p> <strong>Provider:</strong>{" "}
                                  {claim.providerName}
                            </p>

                            <p> <strong>Service:</strong>{" "}
                                  {claim.service}
                            </p>   

                            <p> <strong>Amount:</strong>{" "}
                                    ${claim.amount}
                            </p> 

                            <p> <strong>Status:</strong>{" "}
                                         
                                     <span className={" status " + getStatus(claim.status)}>
                                            {getStatus(claim.status)}
                                     </span>
                            </p>

                            {/* view details button*/}

                                <button type ="button" 
                                        onClick={() => setSelectedClaim(claim)}> 
                                        
                                        View Details 
                                </button>

                                {/*approve and deny buttons */}

                                    {getStatus(claim.status) === "PENDING" && (
                                           
                                        <div>
                                          <button type ="button"
                                                  onClick={() => handleStatusChange(claim, "APPROVED")
                                              }>
                                                  Approve
                                           </button>

                                           <button type ="button"
                                                   onClick={() => handleStatusChange(claim, "DENIED")
                                              }>
                                                Deny
                                           </button>

                                            </div>

                                        )}   

                                {/* Delete button */}

                                {/*<button type ="button"
                                        onClick={() => requestDelete(claim.id)

                                        }>
                                            Delete
                                </button> 8/}

                                {/* Delete confiramtion*/}

                                {deleteId === claim.id && (
                                    <div>
                                        <p> Are you sure you want to delete this claim?</p>

                                        <button type ="button"
                                            onClick={handleDelete}>
                                               Yes, Delete
                                        </button>

                                        <button type ="button"
                                            onClick={cancelDelete}>
                                               Cancel
                                        </button>
                                    </div>
                                )}
                                                                              
                           </div>  
                        ))}
                        </section>    
                    )}
              </div>
            </main>   
        </div> 
   );
}  

export default StaffClaims;
