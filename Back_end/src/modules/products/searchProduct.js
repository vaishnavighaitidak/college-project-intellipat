import { dbConnection } from "../../../database/dbConnection.js";

import express from "express";

const router = express.Router();

// Search for products by name
router.get(`/products/search`, (req, res) => {  
    const Search = req.query.name || '';
    if (Search === '') {
        return res.redirect('/products'); // Redirect to all products if search query is empty
    }
    dbConnection.execute(`SELECT * FROM products WHERE name LIKE ?`, [`%${Search}%`], (err, data) => {
        if (err) {
            res.json({ error: err.message });
        }
        else {
            res.json(data);
        }
    });
});

export default router;