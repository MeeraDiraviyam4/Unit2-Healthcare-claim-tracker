import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { createClaim } from "../services/api";
import Footer from "../components/Footer";

function SubmitClaim() {
    const [providerName, setProviderName] = useState("");
    const [service, setService] = useState("");
    const [description, setDescription] = useState("");
    const [dateOfService, setDateOfService] = useState("");
    const [amount, setAmount] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    //check the form before submitting
    function validateForm() {
        if (providerName.trim().length < 2) {
            return "Please enter a valid provider name";
        }

        if (service.trim().length < 2) {
            return "Please enter a valid service";
        }

        if (description.trim().length < 5) {
            return "Description must contain at least 5 characters.";
        }

        if (!dateOfService) {
            return "Please select the date of service.";
        }

        //checks the date is not the future one
        const selectedDate = new Date(dateOfService);
        const today = new Date();

        today.setHours(0, 0, 0, 0);

        if (selectedDate > today) {
            return "Date of service cannot be in the future.";
        }

        //check the amount
        if (!amount || Number(amount) <= 0) {
            return "Amount must be greater than $0.";
        }

        return "";
    }

    //submit the claim
    async function handleSubmit(event) {
        event.preventDefault();

        //clear the old messages
        setError("");
        setMessage("");

        //validate the form
        const validationError = validateForm();

        if (validationError) {
            setError(validationError);
            return;
        }

        //get the loggedin user
        const user = JSON.parse(
            localStorage.getItem("user")
        );

        if (!user) {
            setError("Please log in before submitting a claim.");
            return;
        }

        //create the claim
        const claim = {
            userId: user.id,
            providerName: providerName.trim(),
            service: service.trim(),
            description: description.trim(),
            dateOfService: dateOfService,
            amount: Number(amount)
        };

        try {
            //send the claim to the backend
            await createClaim(claim);

            setMessage("Claim submitted successfully.");

            //go to claims page
            setTimeout(() => {
                navigate("/claims");
            }, 800);

        } catch (error) {
            setError("Could not submit claim. Please try again.");
        }
    }

    return (
        <div>
         <Navbar />

           <main className="app-page">

            <div className="form-container">
               
                <h1> Submit Claim </h1>
                  
                  {/* show error message*/}
                  {error && (
                     <p className="error-message" role="alert">
                         {error}
                     </p>
                  )}

                  {/* show success message*/}  
                  {message && (
                        <p className="success-message" role="status">
                            {message}
                        </p>
                  )}

                    <form onSubmit={handleSubmit}>
                        <label>
                            Provider Name
                        </label>

                        <input
                            type="text"
                            value={providerName}
                            onChange={(event) =>
                                setProviderName(event.target.value)
                            }
                            placeholder="Enter Provider Name"
                        />

                        <label>
                            Service
                        </label>

                        <input
                            type="text"
                            value={service}
                            onChange={(event) =>
                                setService(event.target.value)
                            }
                            placeholder="Enter Service"
                        />

                        <label>
                            Description
                        </label>

                        <textarea
                            value={description}
                            onChange={(event) =>
                                setDescription(event.target.value)
                            }
                            placeholder="Enter description"
                            rows="4"
                        />

                        <label>
                            Date of Service
                        </label>

                        <input
                            id="dateOfService"
                            type="date"
                            value={dateOfService}
                            onChange={(event) =>
                                setDateOfService(event.target.value)
                            }
                        />

                        <label>
                            Amount
                        </label>

                        <input
                            type="number"
                            min="0.01"
                            step="0.01"
                            value={amount}
                            onChange={(event) =>
                                setAmount(event.target.value)
                            }
                            placeholder="Enter Amount"
                        />

                        <button type="submit">
                            Submit Claim
                        </button>
                    </form>
                </div>
            </main> 
          <Footer/>     
        </div>
    );
}

export default SubmitClaim;