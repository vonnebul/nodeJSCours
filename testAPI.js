const express = require("express");
// importer l'api :
const livres = require('./livres.json');
const app= express();

// Middleware !important pour la méthode POST
app.use(express.json())

//créer un livre, lister les livre, récupérer un livre, modifier et supprimer un livre
// GET /livres => tous les livres
app.get('/', (req, res) => {
    res.status(200).json(livres);
})
// GET /livres/:id => un livre
app.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const livre = livres.find(livre => livre.id === id);
    res.status(200).json(livre);
})

// POST /livres => créer un livre

app.post("/", (req, res)=>{
    livres.push(req.body)
    res.status(200).json(livres)
})
// PUT /livres/:id => modifier un livre
app.put("/:id", function(req, res){
    const id = parseInt(req.params.id);
    let livre = livres.find(livre => livre.id === id)
    livre.auteur = req.body.auteur,
    livre.nom = req.body.nom,
    res.status(200).json(livre);
})
// DELETE /livres/:id => supprimer un livre
app.delete("/:id", (req, res)=>{
    const id = parseInt(req.params.id);
    let livre = livres.find(livre => livre.id === id)
    livres.splice(livres.indexOf(livre), 1)
    res.status(200).json(livres);
})

app.listen(3000, ()=>{
    console.log('serveur lancé')
})