import multer from "multer";

const imageStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'app/imageUploads/')
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, (uniqueSuffix + '-' + file.originalname).replace(/[^a-zA-Z0-9.]/g, ''))
    }
});

export const imageUpload = multer({storage: imageStorage});