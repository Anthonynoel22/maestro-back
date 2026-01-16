# Maestro

## La présentation du projet

Le projet Maestro est une plateforme de présentation et de gestion musicale pour un compositeur et ses clients.
L’objectif de cette plateforme est de mettre en valeur un portfolio musical, de présenter des prestations et de
proposer un espace sécurisé de communication et de suivi de projet.
Grâce à Maestro, le compositeur dispose d’un site vitrine et d’un outil de gestion,
lui permettant de présenter ses œuvres, d’administrer son catalogue et de maintenir le lien avec ses clients.

Pour les clients, c’est un espace personnel qui permet d’échanger avec le compositeur et de suivre l’avancement de ses projets.
Quant aux visiteurs, Maestro est une vitrine musicale où l’on peut découvrir le compositeur,
écouter des extraits et explorer son univers artistique.
L’ensemble a été conçu pour offrir une expérience fluide, simple et accessible,
que ce soit sur ordinateur, tablette ou smartphone.


## Techno Back-end 

- Node.js
- Express
- Sequelize
- PostgreSQL
- Dotenv (gestion des variables d'environnement)
- Pg (connection à la base de données et exécuter des requêtes SQL)
- Multer (Upload de fichiers)


## Sécurité 

- JWT (authentification)
- Cookies (génère une session et envoie un id)
- Bcrypt (hachage des mots de passe)
- Sanitize (nettoyer le code HTML non fiable pour éviter les attaques XSS)
- Ratelimit (limite le nombre de requêtes HTTP par IP sur une période donnée, protégeant contre les abus ou surcharges serveur)
