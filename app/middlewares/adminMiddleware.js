import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

function adminAuthenticate(req, res, next) {

    try {
        // si l'utilisateur n'est pas un admin 
        if (req.user.role !== "admin") {
            return res.status(403).json({
                message: "Accès non autorisé : admistrateur uniquement",
            });
        }
        // Tout est OK, on passe à la route suivante
        next();

    } catch {
        // Token invalide ou expiré
        return res.status(403).json({ message: "Token invalide ou expiré" });
    }
}

export default adminAuthenticate;
