import express from "express";
import { listProducts,addProduct,removeProduct,singleProduct,updateProduct } from "../Controllers/productController.js"
import upload from "../middleware/multer.js"


const productRouter = express.Router();


productRouter.post('/add',upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1}]),addProduct);

roductRouter.post('/update',upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1}]),updateProduct);

productRouter.post("/remove",removeProduct);

productRouter.post("/single",singleProduct);

productRouter.get("/list",listProducts);

export default productRouter



