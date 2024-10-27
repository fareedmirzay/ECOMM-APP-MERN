// import { v2 as cloudService } from 'cloudinary';

// const cloud = async () => {
//   try {
//     cloudService.config({
//       cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//       api_key: process.env.CLOUDINARY_API_KEY,
//       api_secret: process.env.CLOUDINARY_API_SECRET,
//     });
    
//     console.log("Connected to Cloudinary successfully");
//   } catch (error) {
//     console.error("Error connecting to Cloudinary:", error);
//   }
// };



// export { cloudService, cloud };



import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = async () => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    });
};

export default connectCloudinary;