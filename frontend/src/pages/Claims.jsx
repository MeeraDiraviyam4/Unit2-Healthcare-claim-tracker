import {useState, useEffect} from "react";
import Navbar from "../components/Navbar";
import ClaimCard from "../components/ClaimCard";
import {getAllClaims} from "../services/api";

function Claims() {

    const [claims, setClaims] = useState([]);
    const [loading, SetLoading] = useState(true);
    
    useEffect(() => {

        loadClaims();
    }, []);

    async function loadClaims() {

        try {

            const data  = await getAllClaims();

            setClaims(data);

        } catch (error) {

            alert(" Could not load claims. ");

        } finally {

            SetLoading(false);
        }
    }

    return (
        <div>

            <Navbar />

            <div className="claims-container">

                <h1>Claims</h1>

                {loading && claims.length === 0 && (
                  
                  <p>No claims found.</p>

                )}

                {loading && claims.length > 0 && (

                    claims.map((claim) => (

                        <ClaimCard key={claim.id} claim={claim} />

                    ))
                )}
            </div>
        </div>
    );
}
export default Claims;
            