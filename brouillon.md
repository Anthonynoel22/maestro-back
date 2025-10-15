student@teleporter:/var/www/html/maestro-back$ git branch

-   dev
    main
    student@teleporter:/var/www/html/maestro-back$ git checkout -b bdd
    Switched to a new branch 'bdd'
    student@teleporter:/var/www/html/maestro-back$ git branch
-   bdd
    dev
    main
    student@teleporter:/var/www/html/maestro-back$ sudo -i -u postgres psql
    Mot de passe pour l'utilisateur postgres :
    psql (17.2 (Ubuntu 17.2-1.pgdg24.04+1))
    Saisissez « help » pour l'aide.

postgres=# CREATE USER maestro WITH PASSWORD maestro
postgres-# CREATE USER maestro WITH PASSWORD 'maestro';
ERREUR: erreur de syntaxe sur ou près de « maestro »
LIGNE 1 : CREATE USER maestro WITH PASSWORD maestro
^
postgres=# CREATE USER maestro WITH PASSWORD maestro;
ERREUR: erreur de syntaxe sur ou près de « maestro »
LIGNE 1 : CREATE USER maestro WITH PASSWORD maestro;
^
postgres=# CREATE USER maestro WITH PASSWORD 'maestro'
postgres-# CREATE DATABASE maestro OWNER maestro;
ERREUR: erreur de syntaxe sur ou près de « CREATE »
LIGNE 2 : CREATE DATABASE maestro OWNER maestro;
^
postgres=# ^C
postgres=# /q
postgres-# /Q
postgres-# Q
postgres-# /q
postgres-# q
postgres-# \q
student@teleporter:/var/www/html/maestro-back$ psql -U postgres maestro
Mot de passe pour l'utilisateur postgres :
psql: erreur : la connexion au serveur sur le socket « /var/run/postgresql/.s.PGSQL.5432 » a échoué : FATAL: authentification par mot de passe échouée pour l'utilisateur « postgres »
student@teleporter:/var/www/html/maestro-back$ psql -U postgres maestro
Mot de passe pour l'utilisateur postgres :
psql: erreur : la connexion au serveur sur le socket « /var/run/postgresql/.s.PGSQL.5432 » a échoué : FATAL: authentification par mot de passe échouée pour l'utilisateur « postgres »
student@teleporter:/var/www/html/maestro-back$ psql -U maestro -d maestro
Mot de passe pour l'utilisateur maestro :
psql (17.2 (Ubuntu 17.2-1.pgdg24.04+1))
Saisissez « help » pour l'aide.

maestro=>

CREATE USER maestro WITH PASSWORD 'maestro';
CREATE DATABASE maestro WITH OWNER maestro;
