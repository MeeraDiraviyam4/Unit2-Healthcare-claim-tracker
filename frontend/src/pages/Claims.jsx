import {useState, useEffect} from "react";
import Navbar from "../components/Navbar";
import ClaimCard from "../components/ClaimCard";
import {getAllClaims} from "../services/api";

function Claims() {

    const [claims, setClaims] = useState([]);

    useEffect(() => {

        loadClaims();
    }, []);

    async function loadClaims() {

        try {

            const data  = await getAllClaims();

            setClaims(data);

        } catch (error) {

            alert(" Could not load claims. ");

        }
    }

    return (
        <div>

            <Navbar />

            <div className="claims-container">

                <h1>Claims</h1>
                {claims.length > 0 ? (
                  
                  <p>No claims found.</p>

                ) : (
                    
                    claims.map((claim) => (

                        <ClaimCard key={claim.id} claim={claim} />

                    ))
                )}
            </div>
        </div>
    );
}
export default Claims;
            