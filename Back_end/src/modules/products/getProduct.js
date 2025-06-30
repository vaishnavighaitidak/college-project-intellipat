import { dbConnection } from "../../../database/dbConnection.js";

import express from "express";

const router = express.Router();

// Get a product by ID
router.get(`/products/:id`, (req, res) => {
    dbConnection.execute(`SELECT * FROM products WHERE id = ${req.params.id}`, (err, data) => {
        if (err) {
            res.json({ error: err.message });
        }
        else if(data.length === 0) {
            res.json({ message: "Product Not Found" });
        }
        else {
            res.json(data);
        }
    });
});

export default router;