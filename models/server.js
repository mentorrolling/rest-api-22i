const express = require("express");

const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios"; //defino la ruta para usuarios
    //Middlewares
    this.middlewares();
    //Rutas
    this.routes();
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //lectura y parseo del body
    this.app.use(express.json());

    //directorio público
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, require("../routes/usuarios"));
    // this.app.get("/api", (req, res) => {
    //   res.json("GET api");
    // });

    // this.app.post("/api", (req, res) => {
    //   res.json("POST api");
    // });

    // this.app.put("/api", (req, res) => {
    //   res.json("PUT api");
    // });

    // this.app.delete("/api", (req, res) => {
    //   res.json("DELETE api");
    // });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor escuchando en puerto ${this.port}`);
    });
  }
}

module.exports = Server;
