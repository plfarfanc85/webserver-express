const express = require("express");
const app = express();

const hbs = require("hbs");
require("./hbs/helpers");

// obtener el puerto a utilizar en el servidor donde vayamos a publicar la aplicacion
const port = process.env.PORT || 3000;

// Middleware
// Se puede dejar esta carpeta publica y mostrar cualquier cantidad de archivos
// Todo lo que pongamos en public va a ser de dominio publico, cualquiera puede ver
app.use(express.static(__dirname + "/public"));

// Express - HBS engine
hbs.registerPartials(__dirname + "/views/parciales");
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  //res.send("Hola mundo");
  /*
  let salida = {
    nombre: "Pedro",
    edad: 32,
    url: req.url,
  };
  */
  //res.send(salida);
  res.render("home", {
    nombre: "pedro farfan",
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});
