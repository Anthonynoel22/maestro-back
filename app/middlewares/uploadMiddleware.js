import multer from "multer"; // import du package multer, pour l'upload de fichier

// dans storage, je choisis la manière d'enregistrer mes fichiers :
const storage = multer.diskStorage({
    destination: (req, file, cb) => { // dans destination, je stock le dossier uploads/
        cb(null, 'uploads/') // pas besoin du '/' devant pour le mettre à la racine
    },
    filename: (req, file, cb) => { // ici je 'modélise' le filename
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) // on va ajouter un suffixe (avec une date et des nombres aléatoires) pour le nom du fichier
        cb(null, file.originalname + '-' + uniqueSuffix) // mon filename sera donc le fieldname (name du form) suivi d'un '-' puis du suffixe créé au-dessus (uniqueSuffix)
    }
});


export const upload = multer({ storage: storage }); // je stocke dans upload que j'exporte
