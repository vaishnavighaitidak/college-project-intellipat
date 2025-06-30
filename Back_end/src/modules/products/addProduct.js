import { dbConnection } from "../../../database/dbConnection.js";

import express from "express";

const router = express.Router();

// Add a new product
router.post(`/products`, (req, res) => {
    dbConnection.execute(
        `INSERT INTO products(name, price, description) VALUES('${req.body.name}', '${req.body.price}', '${req.body.description}')`,
        (err, data) => {
        if (err) {
            res.json({ error: err.message });
        }
        else {
            res.json([{ message: "Product added successfully" }]);
        }
    });
});

export default router;