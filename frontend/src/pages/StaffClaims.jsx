import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { getAllClaims, getClaimById, deleteClaim} from "../services/api";

function StaffClaims() {

    const [claims, SetClaims] = useState([]);
    const [claimId, setClaimId] = useState("");
    const [selectedClaim, setSelectedClaim] = useState(null);
    const [statusFilter, setStatusFilter] = useState("ALL");

    useEffect(() => {
        loadClaims();
    }, [])

     // search for all claims
    async function loadClaims() {

        try {
                   const data = await getAllClaims();
        
                    SetClaims(data);
        
                } catch (error) {
        
                    alert("Could not load claims");
                    
                }
        
    }
    
    // search for one claim
    async function handleSearch(event) {
        event.preventDefault();
        
        try{

            const data = await getClaimById(claimId);

            setSelectedClaim(data);
        
        } catch (error) {

            setSelectedClaim(null);

            alert("Claim not found");
        }
        
    }

     //show all the claims again
     function showAllClaims() {

        setSelectedClaim(null);

        setClaimId("");
     
    }

    //converting status to uppercase
    function getStatus(status) {
        return status?.toUpperCase();
    
    }

    //Delete a claim
    async function handleDelete(id) {

        const answer = window.confirm(
            "Are you sure to delete this claim?"
        );

        if (!answer) {
            return;
        }
          
    try {
        await deleteClaim(id); //calling backend delete api

        alert("Claim deleted successfully");

        loadClaims(); //laods tha claims again and deleted claim disappears

    } catch (error) {

        alert("could not delete claim");

      }
        
    }

    //filter the claims
    const filteredClaims = claims.filter(
        (claim) => {

            if (statusFilter === "ALL") {

                return true;
            }

            return (

                getStatus(claim.status) ===
                statusFilter
            );
        }
    );

    return(
        <div>

            <Navbar />

            <div className="claims-container">

                <h1>All Claims</h1>

                 {/*search by claim id */}

                 <div className="search-box">

                    <h3> Find a Claim </h3>

                    <form onSubmit={handleSearch}>

                        <input 
                           type="number"
                           value={claimId}
                           onChange={(event) => setClaimId(event.target.value)}

                           placeholder="Enter Claim Id"
                           required
                           />

                           <button type="submit">
                              search
                           </button>

                           <button type="button"
                                   onClick={showAllClaims}>
                                    show ALL
                                   </button>
                            
                    </form>
                 </div>

                 {/*search for particular claim */}
                 {selectedClaim && (
                    
                    <div className="claim-details">

                        <h2> Claim Details </h2>

                        <p> <strong> Claim ID: </strong>{" "} {selectedClaim.id} </p>

                        <p> <strong> Provider: </strong>{" "} {selectedClaim.providerName} </p>

                        <p> <strong> Service: </strong>{" "} {selectedClaim.service} </p>

                        <p> <strong> Date: </strong>{" "} {selectedClaim.dateOfService} </p>

                        <p> <strong> Amount: </strong>{" "} ${selectedClaim.amount} </p>

                        <p> <strong> Description: </strong>{" "} {selectedClaim.description} </p>

                        <p> <strong> Status: </strong>{" "} {selectedClaim.status} </p>

                        <p> <strong> Submitted: </strong>{" "} {selectedClaim.submittedDate} </p>

                        <button onClick={showAllClaims}>
                            Back to All Claims
                        </button>

                    </div>    
                 )}
                  
                  {/*status filter */}
                  {!selectedClaim && (
                    <div>
                      <div className="filter-box">

                        <label> Filter by Status:</label>

                        <select value={statusFilter}
                                onChange={(event) => setStatusFilter(event.target.value)}>

                                    <option value="ALL">
                                       All Claims 
                                    </option>

                                    <option value="PENDING">
                                       Pending 
                                    </option>   

                                    <option value="APPROVED">
                                       Approved 
                                    </option>   

                                    <option value="DENIED">
                                       Denied 
                                    </option>  

                        </select>         

                        </div>

                        {/*claim list */}
                        {filteredClaims.map(
                            (claim) => (
                               
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
                                         
                                         <span className={"status " + getStatus(claim.status)}>
                                            {getStatus(claim.status)}
                                         </span>

                                    </p>

                                       <button onClick={() =>
                                                   setSelectedClaim(claim)}> View Details </button>

                                       {/*Delete */}

                                        <button onClick={() => 
                                                  handleDelete(claim.id)
                                        }> Delete </button>

                                    </div>  
                                     )
                                     )}
                        </div>    
                                )}
                   </div>
        </div>   


    );
}  

export default StaffClaims;
