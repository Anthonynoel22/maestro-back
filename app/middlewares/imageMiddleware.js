import multer from "multer";

const imageStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'app/imageUploads/')
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.originalname + '-' + uniqueSuffix)
    }
});

export const imageUpload = multer({storage: imageStorage});