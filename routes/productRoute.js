import express from "express";

import {listProducts,addProduct,listProducts,removeProducts, singleProduct} from "../Controllers/productController.js"


const productRouter = express.Router();
