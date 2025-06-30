// Import required modules
import express from 'express';
import cors from 'cors';
// Imoporting end points
import getAllProducts from "./src/modules/products/getAllProducts.js";
import getProduct from "./src/modules/products/getProduct.js";
import searchProduct from "./src/modules/products/searchProduct.js";
import addProduct from "./src/modules/products/addProduct.js";
import updateProduct from "./src/modules/products/updateProduct.js";
import deleteProduct from "./src/modules/products/deleteProduct.js";
// Server configuration
const PORT = 5000;

// const API_BASE_URL = '/products';
const app = express();

// Middleware
app.use(express.json()); // Enables JSON request body parsing
app.use(cors()); // Allows cross-origin requests

// Using end points
app.use(getAllProducts);
app.use(searchProduct);
app.use(getProduct);
app.use(addProduct);
app.use(updateProduct);
app.use(deleteProduct);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});