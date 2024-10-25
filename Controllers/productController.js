import { v2 as cloudService } from 'cloudinary';
import { cloud } from '../cloud';

// import productModel from "../models/user.js";
// import jwt from 'jsonwebtoken';
// import bcrypt from "bcrypt";
// import validator from "validator";



// //fuction for add product
// const addProduct = async (req,res) => {
//     try {

//         const { name, description, price, category, subCategoty, sizes, bestSeller } = req.body

//         console.log(req.files);
//         console.log("Uploaded files:", req.files);
        

        // const image1 = req.files.image1 && req.files.image1[0]
        // const image2 = req.files.image2 && req.files.image2[0]
        // const image3 = req.files.image3 && req.files.image3[0]
        // const image4 = req.files.image4 && req.files.image4[0]

//         console.log(name, description, price, category, subCategoty, sizes, bestSeller);
//         console.log(image1,image2,image3,image4);

//         res.json({})

//     } catch (error) {
//         console.log(error);
//         res.json({success:false,message:error.message})
//     }

// }



// const addProduct = async (req, res) => {
//     try {
//         const { name, description, price, category, subCategory, sizes, bestSeller } = req.body;

//         const image1 = req.files.image1 || null;
//         const image2 = req.files.image2 || null;
//         const image3 = req.files.image3 || null;
//         const image4 = req.files.image4 || null;

//         console.log("Uploaded images:", image1, image2, image3, image4);
//         console.log(name, description, price, category, subCategory, sizes, bestSeller);

//         res.json({ success: true, message: 'Product added successfully!' });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ success: false, message: error.message });
//     }
// };



const addProduct = async (req, res) => {
    try {
        // Log the entire request body
        console.log("Request body:", req.body);

        const { name, description, price, category, subCategory, sizes, bestSeller } = req.body;

        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        const images = [image1,image2,image3,image4].filter((item)=> item !== undefined)

        let imageUrl = await Promise.all(
            images.map(async () => {
                let result = await cloud.uploader.upload(item.path {resource_type:'image'})
            })
        )


        // console.log("Uploaded images:", image1, image2, image3, image4);
        console.log(name, description, price, category, subCategory, sizes, bestSeller);
        console.log(images);
        

        res.json({ success: true, message: 'Product added successfully!' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};



//fuction for list product
const listProducts = async (req,res) => {
    
}


//fuction for removing products
const removeProduct = async (req,res) => {
    
}



//fuction for removing a single product
const singleProduct = async (req,res) => {
    
}


export {listProducts,addProduct,removeProduct,singleProduct}