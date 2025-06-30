import { dbConnection } from "../../../database/dbConnection.js";

import express from "express";

const router = express.Router();

// Update a product
router.put(`/products`, (req, res) => {
    dbConnection.execute(
        `UPDATE products SET name = '${req.body.name}', price = '${req.body.price}', description = '${req.body.description}' WHERE id = ${req.body.id}`,
        (err, data) => {
        if (err) {
            res.json({ error: err.message });
        }
        else {
            res.json([{ message: "Product updated successfully" }]);
        }
    });
});

export default router;