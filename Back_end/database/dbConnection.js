import mysql2 from "mysql2";

// Database connection
export const dbConnection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'store'
});

dbConnection.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err.message);
    }
    else {
        console.log("Connected to SQL");
    }
});