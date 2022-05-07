<h1> Argent Bank </h1>

Clôner le projet depuis Github.

Pour lancer le projet:

<h2> Frontend </h2>

Se déplacer dans le dossier frontend et lancer <code> npm install </code> puis <code> npm start </code>
Par défaut, le port utilisé est le port 3000. Depuis le navigateur, se rendre à l'adresse http://localhost:3000

<h2> Backend </h2>

MongoDB Community server doit être installé sur la machine.

Se déplacer dans le dossier backend et lancer <code> npm install </code> puis <code> npm run dev:server </code>
Une fois le serveur lancé, insérer les données mockées dans la base de données avec <code> npm run populate-db </code> 
Par défaut, le port utilisé par le serveur est le port 3001.

Pour visualiser la documentation de l'API, une fois le serveur lancé. La partie Account Module est modélisée dans le swagger mais pas implémentée : http://localhost:3001/api-docs 
