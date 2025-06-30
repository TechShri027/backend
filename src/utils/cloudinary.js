import { v2 as cloudinary } from 'cloudinary';
import { response } from 'express';
import fs from "fs"

 // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME, 
        api_key: API_Keys, 
        api_secret: API_SECRET 
    });




  const uploadOnCloudinary=async (localFilePath)=>{
try {
    if(!localFilePath) return null

   const response=await cloudinary.uploader.upload(localFilePath,{ resource_type: "auto"})

    console.log("cloudinary file is uploaded", response.url)
    return response
    
} catch (error) {
    fs.unlinkSync(localFilePath)
    return null
}

  }  

  export {uploadOnCloudinary}




//     cloudinary.v2.uploader.upload(
//   "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" },
//   function (error, result) {
//     console.log(result);
//   }
// );
