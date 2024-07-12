Express API Application Documentation
Overview
This documentation provides an overview of an Express API application built with MongoDB and Node.js. The application is organized into several folders, each serving a specific purpose. It includes models for the database structure, controllers for handling business logic, routes for API endpoints, and middleware for authentication.

Folder Structure
1. Models
The models folder contains Mongoose schema definitions for the application's MongoDB collections. The following models are defined:

user.js: Defines the structure for user documents, including fields like username, password, email, and other relevant user information.
pharmacy.js: Defines the structure for pharmacy documents, including fields like name, location, contactInfo, and other relevant pharmacy information.
medicine.js: Defines the structure for medicine documents, including fields like name, brand, price, quantity, and other relevant medicine information.
2. Controllers
The controllers folder contains logic for handling requests and interacting with the models. The following controllers are defined:

authController.js: Handles user registration and login, including password hashing and JWT token generation.
pharmacyController.js: Provides functionalities to search and display pharmacies. It interacts with the pharmacy model to fetch data from the database.
medicineController.js: Handles CRUD (Create, Read, Update, Delete) operations for medicines. It interacts with the medicine model to manage medicine data in the database.
3. Routes
The routes folder contains route definitions for the API endpoints. Each route file maps specific URL paths to controller functions. The following routes are defined:

authRoutes.js: Defines routes for user authentication, including registration and login endpoints.
pharmacyRoutes.js: Defines routes for searching and displaying pharmacies.
medicineRoutes.js: Defines routes for managing medicines, including endpoints for creating, reading, updating, and deleting medicine records.
4. Middleware
The middleware folder contains custom middleware functions used in the application. The following middleware is defined:

authMiddleware.js: Contains functions for JWT authentication, ensuring that only authenticated users can access certain routes. It verifies the JWT token and grants access to protected routes if the token is valid.
Usage
Installation
Clone the repository from GitHub:
sh
Copy code
git clone https://github.com/yourusername/your-repo-name.git
Navigate to the project directory:
sh
Copy code
cd your-repo-name
Install the dependencies:
sh
Copy code
npm install
Environment Variables
Create a .env file in the root directory and add the following environment variables:

makefile
Copy code
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=your_preferred_port
Running the Application
To start the API server in development mode, run the following command:

sh
Copy code
npm run dev
The server will start on the port specified in the .env file. You can then access the API endpoints via http://localhost:PORT.