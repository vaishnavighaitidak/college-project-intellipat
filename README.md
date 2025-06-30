# CRUD Project

## Overview
This is a simple **CRUD (Create, Read, Update, Delete)** application built with:

- **Front-end:** HTML, CSS, JavaScript, Bootstrap
- **Back-end:** Node.js, Express.js
- **Database:** MySQL

## Features
- Add new records to the database
- View all records
- Update existing records
- Delete records

## Installation
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [CORS](https://www.npmjs.com/package/cors)
- [MySQL](https://www.mysql.com/)

### Setup Steps
1. **Clone the repository:**
   ```sh
   git clone https://github.com/Salah-Amr/CRUD
   cd CRUD
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Install Express for the backend**:
   ```bash
   npm install express
   ```

4. **Configure the database:**
   - Create a MySQL database.
   - Update database connection settings in `dbConnection.js`.
   
5. **Run the application:**
   ```sh
   node index.js
   ```
6. **Frontend**:
   Open your browser and visit `http://localhost:3000` to view the frontend.

7. **Backend**:
   The backend runs at `http://localhost:5000`.

## API Endpoints
| Method | Endpoint               | Description                 |
|--------|------------------------|-----------------------------|
| GET    | `/products`            | Get all records             |
| GET    | `/products/search?`    | Get records from search     |
| GET    | `/products/:id`        | Get record by ID            |
| POST   | `/products`            | Add a new record            |
| PUT    | `/products`            | Update a record by ID       |
| DELETE | `/products`            | Delete a record by ID       |

## License
This project is licensed under the **MIT License**.

## Contributing
Feel free to fork this repository and submit pull requests.

## Author
**Salah Amr**

