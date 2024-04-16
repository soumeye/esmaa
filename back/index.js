const express = require("express");
const mongoose = require("mongoose");
const participantRoute = require("./routes/participant.route");
const groupRoute = require("./routes/group.route"); // Route pour la gestion des groupes
const utilisateurRoute = require("./routes/utilisateur.route"); // Route pour la gestion des utilisateurs
const participationRoute = require("./routes/participation.route"); // Route pour la gestion des participations
const challengeRoute = require("./routes/challenge.route"); // Route pour la gestion des challenges
const soumissionRoute = require("./routes/soumission.route"); // Route pour la gestion des soumissions
const evaluationRoute = require("./routes/evaluation.route"); // Route pour la gestion des évaluations
const classementRoute = require("./routes/classement.route"); // Route pour la gestion des évaluations
const statistiqueRoute = require("./routes/statistique.route"); // Route pour la gestion des évaluations
const app = express();

const cors = require('cors');
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// Routes


// Middleware pour analyser le JSON et les données encodées dans l'URL
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configuration des routes

app.use("/api/participants", participantRoute);
app.use("/api/groups", groupRoute); // Activation de la route pour les groupes
app.use("/api/utilisateurs", utilisateurRoute); // Activation de la route pour les utilisateurs
app.use("/api/participations", participationRoute); // Activation de la route pour les participations
app.use("/api/challenges", challengeRoute); // Activation de la route pour les challenges
app.use("/api/soumissions", soumissionRoute); // Activation de la route pour les soumissions
app.use("/api/evaluations", evaluationRoute); // Activation de la route pour les évaluations
app.use('/api/classements', classementRoute);
app.use('/api/statistique', statistiqueRoute);

// Route par défaut pour vérifier le fonctionnement du serveur
app.get("/", (req, res) => {
  res.send("Bonjour de l'équipe de l'étoiles");
});

// Connexion à MongoDB et démarrage du serveur
mongoose
  .connect("mongodb://localhost:27017/challenge", {

    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4 ,

  })
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3800");
    });
  })
  .catch((error) => {
    console.error("Connection failed!", error);
  });
