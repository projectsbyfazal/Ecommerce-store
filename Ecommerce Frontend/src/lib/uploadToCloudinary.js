import multer from "multer";
import cloudinary from "./cloudinary.js";
import { Readable } from "stream";

const storage = multer.memoryStorage();
const upload = multer({ storage });

/**
 * Uploads file buffer(s) from Multer to Cloudinary
 * @param {Express.Multer.File[]} files
 * @param {string} folder
 * @returns {Promise<string[]>} array of uploaded image URLs
 */
export async function uploadToCloudinary(files, folder) {
  const uploadPromises = files.map((file) => {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder },
        (error, result) => {
          if (error) reject(error);
          else resolve(result.secure_url);
        }
      );

      const readable = new Readable();
      readable.push(file.buffer);
      readable.push(null);
      readable.pipe(stream);
    });
  });

  return Promise.all(uploadPromises);
}

// Convert Multer to Promise 
export function runUploadMiddleware(req, fn) {
  return new Promise((resolve, reject) => {
    fn(req, {}, (result) => {
      if (result instanceof Error) return reject(result);
      return resolve(result);
    });
  });
}

// Create buffers in memory and final upoad
export async function createBuffersAndUpload(files, folder = "products") {
  const buffers = await Promise.all(files.map(file => file.arrayBuffer()));
  const fileObjs = buffers.map((buffer, i) => ({
    buffer: Buffer.from(buffer),
    originalname: files[i].name,
    mimetype: files[i].type,
  }));
  const imageUrls = await uploadToCloudinary(fileObjs, folder);
  return imageUrls
}

// ✅ helper: extract public_id from Cloudinary URL
export function getPublicIdFromUrl(url) {
  if (!url) return null;
  const parts = url.split("/");
  const file = parts.pop(); // "abcd1234.jpg"
  const folder = parts.slice(parts.indexOf("upload") + 1).join("/"); // "myfolder"
  return folder ? `${folder}/${file.split(".")[0]}` : file.split(".")[0];
}

export default upload;
