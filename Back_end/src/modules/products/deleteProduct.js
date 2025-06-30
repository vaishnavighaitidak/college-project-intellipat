import { dbConnection } from "../../../database/dbConnection.js";

import express from "express";

const router = express.Router();

// Delete a product
router.delete(`/products`, (req, res) => {
    dbConnection.execute(`DELETE FROM products WHERE id = ${req.body.id}`, (err, data) => {
        if (err) {
            res.json({ error: err.message });
        }
        else {
            res.json([{ message: "Product deleted successfully" }]);
        }
    });
});

export default router;