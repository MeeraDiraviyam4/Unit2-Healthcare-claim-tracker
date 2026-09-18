const API_URL = "/api";

//Register a new user
export async function registerUser(user) {

    const response = await fetch(`${API_URL}/users/register`, 
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }
    );

    if (!response.ok) {
        throw new Error("Registration Failed");
    }
    
    return  response.json();

}

// Login a user
export async function loginUser(user) {
    const response = await fetch(`${API_URL}/users/login`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }
    );

    if (!response.ok) {
        throw new Error("Login Failed");
    }
 
      return response.json();
    }

    //Get all claims
    export async function getAllClaims() {
    const response = await fetch(`${API_URL}/claims`,
        );

        if (!response.ok) {
            throw new Error("Could not get claims");
        }

       return response.json();
    }   

    //Get one claim by ID
    export async function getClaimById(id) {
    const response = await fetch(`${API_URL}/claims/${id}`,
        );

        if (!response.ok) {
            throw new Error("Could not get claim");
        }

        return response.json();
    }    

    //Get claims for one member
     export async function getClaimsByUser(userId) {
    const response = await fetch(`${API_URL}/claims/user/${userId}`,
        );

        if (!response.ok) {
            throw new Error("Could not get member claims");
        }

        return response.json();
    }

    //create a claim
    export async function createClaim (claim) {
    const response = await fetch(`${API_URL}/claims`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(claim)
        }
    );

    if (!response.ok) {
        throw new Error("Could not create claim");
    }
 
       return response.json();
       
    }

    //update a claim
    export async function updateClaim(id, claim) {
    const response = await fetch(`${API_URL}/claims/${id}`,
        {
            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(claim)
        }
    );

    if (!response.ok) {
        throw new Error("Could not update claim");
    }
 
       return response.json();

    }

    
    //Payments
    //Get payment for a claim
    export async function getPayment(claimId) {
    const response = await fetch(`${API_URL}/payments/claim/${claimId}`,
    );

    if (!response.ok) {
        throw new Error("Could not get payment");
    }
 
       return response.json();

    }

    //update a payment
    export async function updatePayment(claimId, payment) {
    const response = await fetch(`${API_URL}/payments/${claimId}`,
        {
            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payment)
        }
    );

    if (!response.ok) {
        throw new Error("Could not update payment");
    }
 
       return response.json();

    }

    

