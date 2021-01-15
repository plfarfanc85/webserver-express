const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" }); // Crear un servicio web - Status 200

    let salida = {
      nombre: "Pedro",
      edad: 32,
      url: req.url,
    };

    res.write(JSON.stringify(salida));

    //res.write("Hola mundo");
    res.end(); // Terminar de crear la respuesta
  })
  .listen(8080);

console.log("Escuchando el puerto 8080");
