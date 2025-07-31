import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if(!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, 
      {resource_type: 'auto'}
    )
    console.log("File uploaded successfully", response.url);
    fs.unlinkSync(localFilePath); // Clean up local file after upload
    return response;
  } catch (error) {
    console.error("Cloudinary upload error:", error); // Add this line
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath); // Clean up local file
    }
    return null; // Return null if upload fails
  } 
}

export default uploadOnCloudinary;