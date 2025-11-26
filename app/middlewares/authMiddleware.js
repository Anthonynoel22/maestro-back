import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

function authenticate(req, res, next) {
    // Récupère le cookie "access_token"
    const token = req.cookies.access_token;
    // Si pas de token, l'utilisateur n'est pas connecté
    if (!token) {
        return res.status(401).json({
            message: "Vous devez être connecté pour accéder à cette route",
        });
    }
    try {
        // Vérifie que le token est valide et non expiré
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // On ajoute les infos du token à req.user pour les routes suivantes
        req.user = decoded;
        next();

    } catch {
        // Token invalide ou expiré
        return res.status(403).json({ message: "Token invalide ou expiré" });
    }
}

export default authenticate;
