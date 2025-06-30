import { dbConnection } from "../../../database/dbConnection.js";

import express from "express";

const router = express.Router();

// Get all products
router.get(`/products`, (req, res) => {
    dbConnection.execute(`SELECT * FROM products`, (err, data) => {
        if (err) {
            res.json({ error: err.message });
        }
        else {
            res.json(data);
        }
    });
});

export default router;