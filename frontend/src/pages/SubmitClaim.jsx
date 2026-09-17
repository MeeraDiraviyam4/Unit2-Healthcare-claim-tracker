import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { createClaim } from "../services/api";
import { useNavigate } from "react-router-dom";

function SubmitClaim() {

    const [providerName, setProviderName] = useState("");
    const [service, setService] = useState("");
    const [description, setDescription] = useState("");
    const [dateOfService, setDateOfService] = useState("");
    const [amount, setAmount] = useState("");
    
    const navigate = useNavigate();

    async function handleSubmit(event) {

        event.preventDefault();

        const claim = {
            providerName: providerName,
            service: service,
            description: description,
            dateOfService: dateOfService,
            amount: Number(amount)
        };

        try {
            await createClaim(claim);

            alert("Claim submitted successfully!");

            navigate("/claims");

        } catch (error) {

            alert("Could not submit claim");
            
        }
    }  

    return (
        <div>

            <Navbar />

            <div className="form-container">

                <h1>Submit Claim</h1>

                <form onSubmit={handleSubmit}>

                    <label>Provider Name:</label>

                    <input
                       type="text"
                       value={providerName}
                       onChange={(event) => setProviderName(event.target.value)}
                       placeholder="Enter Provider Name"
                       required
                    />

                    <label>Service:</label>

                    <input
                       type="text"
                       value={service}
                       onChange={(event) => setService(event.target.value)}
                       placeholder="Enter Service"
                       required
                    />

                    <label>Description:</label>

                    <input
                       type="text"
                       value={description}
                       onChange={(event) => setDescription(event.target.value)}
                       placeholder="Enter description"
                       rows="4"
                       required
                    />

                   <label>Date of Service:</label>

                    <input
                       type="date"
                       value={dateOfService}
                       onChange={(event) => setDateOfService(event.target.value)}
                       placeholder="Enter Service Date"
                       required
                    /> 

                    <label>Amount:</label>

                    <input
                       type="number"
                       step="0.01"
                       value={amount}
                       onChange={(event) => setAmount(event.target.value)}
                       placeholder="Enter Amount"
                       required
                    />

                     <button type="submit">
                        Submit Claim
                        </button>    
                </form>
            </div>
        </div>
    )
}   
export default SubmitClaim;

