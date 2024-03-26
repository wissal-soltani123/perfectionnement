
const fs = require('fs');
let maDate = new Date();

// Obtenir la représentation de la date au format ISO 8601
let dateISO = maDate.toISOString();

// Créer un objet JSON avec un attribut de type date
let objetJSON = {
  "dateDeb": dateISO,
  "dateFin": dateISO
};

// Convertir l'objet JSON en une chaîne JSON
let jsonString = JSON.stringify(objetJSON);
fs.writeFileSync('monFichier.json', jsonString, 'utf-8');

// Vous pouvez maintenant écrire la chaîne JSON dans un fichier
// (cette partie dépend du langage que vous utilisez)
const type = {
  maladie:'maladie',
  repos:'repos',
  accouchement:'accouchement'
};

fs.writeFileSync('monFichier.json', type, 'utf-8');