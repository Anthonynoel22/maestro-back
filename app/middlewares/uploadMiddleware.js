import multer from "multer"; // import du package multer, pour l'upload de fichier

// dans storage, je choisis la manière d'enregistrer mes fichiers :
const storage = multer.diskStorage({
    destination: (req, file, cb) => { // dans destination, je stock le dossier uploads/
        cb(null, 'uploads/') // pas besoin du '/' devant pour le mettre à la racine
    },
    filename: (req, file, cb) => { // ici je 'modélise' le filename
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) // on va ajouter un suffixe (avec une date et des nombres aléatoires) pour le nom du fichier // finalement un prefix
        cb(null, (uniqueSuffix + '-' + file.originalname).replace(/[^a-zA-Z0-9.]/g, '')) // mon filename sera donc le suffixe (uniqueSuffix créé au-dessus) utilisé comme préfixe suivi d'un '-' puis du fieldname (name du form)
    }
});


export const upload = multer({ storage: storage }); // je stocke dans upload que j'exporte
