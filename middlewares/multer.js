require('dotenv').config();
const multer = require('multer');
const cloudinary = require('../utils/cloudinary');
const CloudinaryStorage = require('multer-storage-cloudinary');

// Storage for PDF reports
const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'patient_reports',
        allowed_formats: ['pdf'],
        resource_type: 'raw',
    },
});

const upload = multer({ storage });

// Storage for images
const imageStorage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'patient_images',
        allowed_formats: ['jpg', 'png', 'jpeg'],
        resource_type: 'image',
    },
});

const uploadImage = multer({ storage: imageStorage });

module.exports = { upload, uploadImage };
