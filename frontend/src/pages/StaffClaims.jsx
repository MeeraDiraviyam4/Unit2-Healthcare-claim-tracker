import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ClaimCard from "../components/ClaimCard";
//import { getAllClaims, deleteClaim} from "../services/api";

function StaffClaims() {

    const [claims, SetClaims] = useState([]);

    useEffect(() => {
        loadClaims();
    }, [])

    async function loadClaims() {

        try {
                   const data = await getAllClaims();
        
                    SetClaims(data);
        
                } catch (error) {
        
                    alert("Could not load claims");
                    
                }
        
    }
    
    async function handleDelete(id) {

        try {
                    await deleeClaim(id);
        
                    alert("Claim deleted!");
        
                    loadClaims();
        
                } catch (error) {
        
                    alert("Could not delete claim");
                    
                }
        
    }

    return(
        <div>

            <Navbar />

            <div className="claims-container">

                <h1>All Claims</h1>

                {claims.length === 0 && (
                    <p>No Claims Found</p>
                )}

                {claims.map ((claim) =>
                  
                  <div key={claim.id}> 

                    <ClaimCard claim={claim} />  
                    <button onClick={() => handleDelete(claim.id)}> 
                        Delete 
                    </button> </div>
                )}
            </div>
        </div>
    );

}

export default StaffClaims;
