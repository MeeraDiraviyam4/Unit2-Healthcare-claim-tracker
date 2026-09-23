# Healthcare Claim Tracker

## Project Description

Healthcare Claim Tracker is a full-stack web application developed as a LaunchCode software development project.

The application provides a simple way for healthcare insurance members and staff to manage healthcare claims in one place.

Members can create an account, log in, submit healthcare claims, and track the status of their claims. Staff users can review submitted claims, approve or deny claims, and manage payments for approved claims.

The application demonstrates communication between a **React frontend**, a **Java Spring Boot backend**, and a **MySQL database**.

-----------------------------------------------------------------------------------------------------------------------------------------------------------

## Features

### Member Features

Members can:

- Register for an account
- Log in
- View the member dashboard
- Submit healthcare claims
- View submitted claims
- Filter claims by status
- View claim details
- Track claim status
- View claim submission dates
- View denial information
- View payment information
- Log out

### Staff Features

Staff members can:

- Log in as staff
- View the staff dashboard
- View submitted claims
- Review claim details
- Approve pending claims
- Deny pending claims
- Manage approved claims
- View payment information
- Mark approved claims as paid
- View payment dates
- Log out

-----------------------------------------------------------------------------------------------------------------------------------------------------------

# Application Workflow

The main claim workflow is:


Member Registration
        |
        v
Member Login
        |
        v
Submit Claim
        |
        v
     PENDING
        |
        v
Staff Reviews Claim
        |
      /   \
     /     \
    v       v
APPROVED  DENIED
    |
    v
Payment Processing
    |
    v
   PAID

### Member Workflow

1. Member creates an account.
2. Member logs in.
3. Member submits a healthcare claim.
4. The claim is saved with a `PENDING` status.
5. Member can view and track the claim.
6. Staff reviews the claim.
7. Staff approves or denies the claim.
8. If approved, the claim can move to payment processing.
9. Staff can mark the approved claim as paid.
10. Member can view the updated payment information.

### Staff Workflow

1. Staff logs in.
2. Staff opens the Staff Dashboard.
3. Staff views submitted claims.
4. Staff reviews claim details.
5. Staff approves or denies pending claims.
6. Staff opens Manage Payments for approved claims.
7. Staff can view payment status.
8. Staff can mark an approved claim as paid.
9. The payment date is recorded and displayed.

-----------------------------------------------------------------------------------------------------------------------------------------------------------

# Technologies Used

## Frontend

- React
- JavaScript
- Vite
- React Router
- HTML
- CSS

## Backend

- Java
- Spring Boot
- Spring MVC / REST API
- Maven

## Database

- MySQL

## Development and Testing Tools

- IntelliJ IDEA
- Postman
- Git
- GitHub

---------------------------------------------------------------------------------------------------------------------------------------------------------

# Application Architecture

The application uses a frontend, backend, and database architecture.

+-----------------------------+
|       React Frontend        |
|                             |
| Pages / Components / CSS    |
| React Router / API Service  |
+--------------+--------------+
               |
               | HTTP Requests
               v
+-----------------------------+
|     Spring Boot Backend     |
|                             |
| REST Controllers            |
| Business Logic              |
| Database Access             |
+--------------+--------------+
               |
               | Database Queries
               v
+-----------------------------+
|        MySQL Database       |
|                             |
| Users / Claims / Payments   |
+-----------------------------+

The React frontend sends HTTP requests to the Spring Boot REST API.

The Spring Boot backend processes the requests and communicates with the MySQL database.

The response from the backend is then displayed by the React frontend.

-----------------------------------------------------------------------------------------------------------------------------------------------------------

# Project Structure

The project contains separate frontend and backend areas.


Unit2-Healthcare-claim-tracker/
│
├── frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── src/
│   └── main/
│       ├── java/
│       │   └── ...
│       │
│       └── resources/
│           └── application.properties
│
├── pom.xml
├── mvnw
├── mvnw.cmd
└── README.md


--------------------------------------------------------------------------------------------------------------------------------------------------------

# Prerequisites

Before running the application locally, make sure the following are installed:

- Java JDK
- Node.js
- npm
- MySQL
- Git
- IntelliJ IDEA or another Java IDE

Postman is recommended for testing the backend API.

You can verify the installations with:

### Java

java -version

### Node.js

node -v

### npm

npm -v

### Git

git --version

---------------------------------------------------------------------------------------------------------------------------------------------------------

# Installation and Setup

## 1. Clone the Repository

Open a terminal and run:

git clone https://github.com/MeeraDiraviyam4/Unit2-Healthcare-claim-tracker.git

Navigate into the project directory:

cd Unit2-Healthcare-claim-tracker

--------------------------------------------------------------------------------------------------------------------------------------------------------
## 2. Set Up the MySQL Database

Create the database in MySQL.

For example:

sql
CREATE DATABASE healthcare_claim_tracker;

Make sure the database name matches the database configured in the Spring Boot application.

-----------------------------------------------------------------------------------------------------------------------------------------------------

## 3. Configure the Backend Database Connection

Open:

src/main/resources/application.properties

Update the MySQL configuration with your local MySQL username, password, and database name.

Example:

properties
spring.datasource.url=jdbc:mysql://localhost:3306/healthcare_claim_tracker
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD


Replace the example values with your own local MySQL credentials.

### Important

Do not commit database passwords or other sensitive information to GitHub.

------------------------------------------------------------------------------------------------------------------------------------------------------

# 4. Start the Backend

From the project root directory, start the Spring Boot application.

### Git Bash

./mvnw spring-boot:run

### Windows Command Prompt / PowerShell

powershell
.\mvnw.cmd spring-boot:run

The backend normally runs at:

http://localhost:8080

Keep this terminal running.

--------------------------------------------------------------------------------------------------------------------------------------------------------

# 5. Install Frontend Dependencies

Open a **second terminal**.

Move into the frontend directory:

cd frontend

Install the required packages:

npm install

-------------------------------------------------------------------------------------------------------------------------------------------------------

# 6. Start the Frontend

From the 'frontend' directory, run:

npm run dev

Vite will provide a local development URL.

Normally:

http://localhost:5173/

Open the URL in a web browser.

---------------------------------------------------------------------------------------------------------------------------------------------------------

# Running the Full Application

The backend and frontend need to run at the same time.

### Terminal 1 — Backend

From the project root:

powershell
.\mvnw.cmd spring-boot:run

### Terminal 2 — Frontend

cd frontend
npm run dev

Then open:

http://localhost:5173/

-----------------------------------------------------------------------------------------------------------------------------------------------------------

# Using the Application

## Member

### Register

Create a new member account through the registration page.

### Login

Log in using the registered email and password.

### Submit a Claim

Navigate to the **Submit Claim** page and enter the required claim information.

### View Claims

After submitting a claim, members can view their claims from the Claims page.

### Filter Claims

Members can filter their claims based on claim status.

### Track Claim Status

A submitted claim begins with a 'PENDING' status.

The status can later change based on staff review.

### View Payment Information

For approved claims that have been processed, members can view available payment information.

------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Staff

### Staff Login

Staff members log in using a staff account.

### Staff Dashboard

The Staff Dashboard provides access to claim and payment management.

### Review Claims

Staff can view submitted claims and open individual claim details.

### Approve Claims

Staff can approve pending claims.

### Deny Claims

Staff can deny pending claims.

### Manage Payments

Staff can view approved claims and manage their payment status.

### Mark Claims as Paid

Staff can mark an approved claim as paid.

The payment date is recorded when the payment is processed.

----------------------------------------------------------------------------------------------------------------------------------------------------------------

# API Overview

The Spring Boot backend provides REST API endpoints used by the React frontend.

The backend handles:

- User registration
- User login
- Claim creation
- Claim retrieval
- Claim retrieval by ID
- Claim retrieval by member
- Claim updates
- Claim deletion
- Claim status management
- Payment management
- Database communication

## Claim Endpoints

The claim API includes endpoints such as:

GET     /api/claims
GET     /api/claims/{id}
GET     /api/claims/user/{userId}
POST    /api/claims
PUT     /api/claims/{id}
DELETE  /api/claims/{id}

The frontend API service layer organizes the HTTP requests used to communicate with the backend.

-------------------------------------------------------------------------------------------------------------------------------------------------------------

# Frontend Pages

The React frontend includes the following pages.

## General Pages

- Home
- Login
- Registration

## Member Pages

- Member Dashboard
- Claims
- Submit Claim
- Payment

## Staff Pages

- Staff Dashboard
- Staff Claims
- Staff Payments

React Router is used to navigate between these pages.

-----------------------------------------------------------------------------------------------------------------------------------------------------------

# Backend

The Spring Boot backend provides the REST API used by the frontend.

The backend is responsible for:

- Receiving API requests
- Processing application data
- Managing users
- Managing claims
- Managing claim status
- Managing payments
- Communicating with MySQL

The backend follows a Spring Boot REST architecture using controllers, entities, repositories, and database operations.

--------------------------------------------------------------------------------------------------------------------------------------------------------

# Database

MySQL is used as the application's relational database.

The application stores information related to:

- Users
- Claims
- Payments

The general relationship is:

Users
  |
  v
Claims
  |
  v
Payments

The complete database relationships are shown in the ER Diagram.

-------------------------------------------------------------------------------------------------------------------------------------------------------------

# Testing

Backend API functionality was tested using **Postman** during development.

Frontend functionality was tested through the browser while running the React frontend and Spring Boot backend together.

## Tested Workflows

The following workflows were tested:

- User registration
- User login
- Member dashboard
- Claim submission
- Claim retrieval
- Claim filtering
- Claim detail viewing
- Staff claim review
- Claim approval
- Claim denial
- Payment processing
- Payment status updates
- Payment date display
- Logout

------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Wireframes

The wireframes were created to plan the application's user interface and page layout.

**View the Healthcare Claim Tracker Wireframes:**

[Google Drive - Wireframes](https://drive.google.com/file/d/1ffaMU9z9R_l8x7f_qpUqPxjS-H5ChD6a/view?usp=sharing)

-------------------------------------------------------------------------------------------------------------------------------------------------------------

# ER Diagram

The ER Diagram shows the database entities and their relationships.

**View the Healthcare Claim Tracker ER Diagram:**

[Google Drive - ER Diagram](https://drive.google.com/file/d/1FQO2BSH-fMa8JQORlD96eRORK1LsmYHE/view?usp=sharing)

------------------------------------------------------------------------------------------------------------------------------------------------------------

# Responsive Design

The frontend was designed to provide a responsive user experience across different screen sizes.

The application includes responsive styling for:

- Desktop
- Tablet
- Mobile

CSS media queries are used to adjust the layout for smaller screens.

----------------------------------------------------------------------------------------------------------------------------------------------------------------

# Current MVP

The current MVP includes the core functionality required for the healthcare claim tracking workflow.

### Implemented Features

- Member registration
- Member login
- Staff login
- Member dashboard
- Staff dashboard
- Healthcare claim submission
- Claim retrieval
- Claim filtering
- Claim detail viewing
- Claim status tracking
- Claim approval
- Claim denial
- Payment management
- Payment status tracking
- Payment date tracking
- Logout
- Responsive frontend
- React frontend
- Spring Boot REST API
- MySQL database
- Postman API testing

--------------------------------------------------------------------------------------------------------------------------------------------------------

# Future Improvements

The following features could be added in future versions of the application.

## Backend Future Features

### 1. More Detailed Denial Reasons

Staff could select or enter a specific reason when denying a claim.

Examples include:

- Service not covered
- Missing information
- Duplicate claim
- Invalid claim information

The denial reason could be stored in the database and displayed to the member.

### 2. Improved Authentication and Authorization

Future versions could implement stronger authentication and authorization, including:

- Secure password hashing
- Token-based authentication
- JWT authentication
- More detailed role-based access control
- Protected API endpoints

### 3. Automated Testing

Additional unit and integration tests could be added to verify:

- Controllers
- Services
- Repositories
- API behavior
- Database interactions

### 4. Advanced Claim Search

Staff could search claims using:

- Claim ID
- Member
- Provider
- Status
- Date
- Amount

### 5. Claim History

The application could maintain a complete history of claim status changes.

For example:

Submitted
    |
    v
Pending
    |
    v
Reviewed
    |
    +------> Denied
    |
    v
Approved
    |
    v
Paid

This would allow members and staff to see when important claim events occurred.

-------------------------------------------------------------------------------------------------------------------------------------------------------

## Frontend Future Features

### 1. Improved Form Validation

Additional validation could provide more specific feedback when users enter incomplete or invalid information.

### 2. Better Error Handling

The application could provide more user-friendly messages when:

- The backend is unavailable
- An API request fails
- Login credentials are invalid
- A claim cannot be submitted
- A payment request fails

### 3. Pagination

Pagination could be added to claim lists when the application contains a large number of claims.

### 4. Advanced Filtering and Sorting

Claims could be filtered or sorted by:

- Status
- Date
- Provider
- Amount
- Claim ID

### 5. Improved Accessibility

Future versions could include:

- Improved keyboard navigation
- ARIA labels
- Better color contrast
- Improved focus states
- Additional screen-reader support

### 6. Notifications

Members could receive notifications when:

- A claim is submitted
- A claim is approved
- A claim is denied
- A claim is paid

-------------------------------------------------------------------------------------------------------------------------------------------------------------

# Project Status

**MVP Complete**

Healthcare Claim Tracker currently demonstrates a complete full-stack claim management workflow:


Registration
     |
     v
  Login
     |
     v
Submit Claim
     |
     v
 Pending
     |
     v
Staff Review
   /     \
  /       \
Approved  Denied
   |
   v
Payment
   |
   v
Paid


The project demonstrates full-stack development using:

- React
- JavaScript
- React Router
- Java Spring Boot
- REST APIs
- MySQL
- Git/GitHub
- Postman

---------------------------------------------------------------------------------------------------------------------------------------------------------

# Repository

GitHub Repository:

[Healthcare Claim Tracker - GitHub](https://github.com/MeeraDiraviyam4/Unit2-Healthcare-claim-tracker)

---------------------------------------------------------------------------------------------------------------------------------------------------------

# Author

**Meera Jayapal**

Developed as a **LaunchCode Software Development Project**.

### Healthcare Claim Tracker

**React + Java Spring Boot + MySQL**
