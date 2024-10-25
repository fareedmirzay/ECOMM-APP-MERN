import { v2 as cloudService } from 'cloudinary';

const cloud = async () => {
  try {
    cloudService.config({
      cloud_name: process.env.MY_NAME,
      api_key: process.env.MY_API_KEY,
      api_secret: process.env.MY_SECRET_KEY,
    });
    console.log("Connected to Cloudinary successfully");
  } catch (error) {
    console.error("Error connecting to Cloudinary:", error);
  }
};



export { cloudService, cloud };

