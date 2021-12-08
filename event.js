var events = require("events"); // importation librairie event
var eventEmitter1 = new events.EventEmitter(); // création d'un objet permettant l'émition d'event
eventEmitter1.on("connection", () => { // création event connection
    console.log("vous êtes connecté !");
})

eventEmitter1.emit("connection");