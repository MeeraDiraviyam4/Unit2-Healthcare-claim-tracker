import {useState, useEffect} from "react";
import Navbar from "../components/Navbar";
import {getClaimsByUser} from "../services/api";
import ClaimCard from "../components/ClaimCard";

function Claims() {

    const [claims, setClaims] = useState([]); // stores all claims
    const [loading, setLoading] = useState(true); // track loading
    const [statusFilter, setStatusFilter] = useState("ALL"); // store selected filter

    
    useEffect(() => {

        loadClaims();
    }, []);

    async function loadClaims() {

        try {

            const user  = JSON.parse(
                localStorage.getItem("user")
            );

            //make sure if the user is logged in
            if (!user){

                alert("Please login first");

                return;
            }

            const data = await getClaimsByUser(user.id);// get claims from backend

            setClaims(data);//save claims in state

        } catch (error) {

            alert(" Could not load claims. ");

        } finally {

            setLoading(false); //loading done
        }
    }
    
    //convert to uppercase
    function getStatus(status) {
        return status?.toUpperCase();
    }

    //filter claims based on selected status
    const filteredClaims = claims.filter((claim) => {
        
        //if ALL is selected, it shows everything
        if (statusFilter === "ALL") {
           
            return true;
        }
        
        //else show matching status
        return getStatus(claim.status) === statusFilter;

    });

    return (
        <div>

            <Navbar />

            <div className="claims-container">

                <h1>My Claims</h1>

                {/*status filter */}
                <div className="filter-box">

                    <label>Filter by Status:</label>

                    <select
                       value={statusFilter}
                       onChange={(event) => setStatusFilter(event.target.value)}>

                        <option value="ALL"> All Claims </option>
                        <option value="PENDING"> Pending </option>
                        <option value="APPROVED">Approved</option>
                        <option value="DENIED"> Denied </option>
                       </select>

                </div>

                {loading && (

                    <p> Loading claims...</p>
                )}

                {loading && filteredClaims.length === 0 && (
                  
                  <p>No claims found.</p>

                )}
                   

                 {/*Display claims*/}  

                {!loading && filteredClaims.map((claim) => (
                    <ClaimCard key={claim.id} claim={claim} />

                ))}

            </div>

        </div>
    );
}

export default Claims;
            