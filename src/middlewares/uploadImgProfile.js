const multer = require('multer');
const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'siakadProfileImg',
  allowedFormats: ['jpg', 'png', 'jpeg'],
});
const parser = multer({ storage: storage });

module.exports = parser;
