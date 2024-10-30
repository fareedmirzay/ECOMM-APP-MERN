import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/product.js";

// function to add product
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, sizes, bestseller } = req.body;

        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined);

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                return result.secure_url;
            })
        );

        console.log("Uploaded images:", image1, image2, image3, image4);
        console.log(name, description, price, category, sizes);
        console.log(images);
        console.log(imagesUrl);

        const productData = {
            name,
            description,
            category,
            price: Number(price),
            sizes: JSON.parse(sizes),
            image: imagesUrl,
            date: Date.now()
        };

        console.log(productData);

        const product = new productModel(productData);
        await product.save();

        res.json({ success: true, message: "Product Added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};



// Function to update product
const updateProduct = async (req, res) => {
    try {
        const { productId, name, description, price, category, sizes, bestseller } = req.body;

        // Handle image uploads if new images are provided
        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined);

        let imagesUrl = [];
        if (images.length > 0) {
            imagesUrl = await Promise.all(
                images.map(async (item) => {
                    let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                    return result.secure_url;
                })
            );
        }

        const productData = {
            name,
            description,
            category,
            price: Number(price),
            sizes: JSON.parse(sizes),
            image: imagesUrl.length > 0 ? imagesUrl : undefined // Only update images if new ones are uploaded
        };

        // Remove undefined fields from productData
        for (const key in productData) {
            if (productData[key] === undefined) {
                delete productData[key];
            }
        }

        const updatedProduct = await productModel.findByIdAndUpdate(productId, productData, { new: true });

        res.json({ success: true, message: "Product Updated", product: updatedProduct });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};


// function for list product
const listProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({ success: true, products });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// function for removing product
const removeProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Product Removed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// function for single product info
const singleProduct = async (req, res) => {
    try {
        const { productId } = req.body;
        const product = await productModel.findById(productId);
        res.json({ success: true, product });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { listProducts, addProduct, removeProduct, singleProduct, updateProduct  };
