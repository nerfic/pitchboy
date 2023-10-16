# Tests techniques

J'ai seulement pu réaliser le back-end dans le temps imparti (j'ai préféré me concentrer sur cette partie)

installation et lancement :

- npm install
- npm start

Voici la liste des routes :

- GET localhost:8000/laposte/all-cities => Toute les villes
- GET localhost:8000/laposte/city/:zipcode => Une ville avec un zipcode en params
- PUT localhost:8000/laposte/city/:zipcode => Modifier une ville avec un zipcode en params
- DELETE localhost:8000/laposte/city/:zipcode => Supprimer un objet avec un zipcode en params
- GET localhost:8000/laposte//all-cities-with-pagination => Toute les villes avec la pagination (non finit)

### Ce que j'aurais aimé terminer :

- Finir la route pour la pagination.
- Une route pour lister les villes d'un département: Un utilisateur veut lister les villes d'un département.
- Placer des schemas sur toute mes requetes pour controller les entrées.
- Intégrer des tests


### Ce qui m'a fait perdre du temps :

- Le fichier json est beaucoup trop lourd je devais à chaque fois couper le serveur et redémarrer VsCode car ça faisait tout crash (à 10 minutes de la fin je me suis fais un plus petit fichier avec 200 lignes, j'aurais dû y penser avant...)
- L'initialisation du projet

### Concernant le front-end :

J'ai déjà travaillé avec l'API Movie Database et l'excercice je peux le réaliser dans sont entièreté (junior + senior)
