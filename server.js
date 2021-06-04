// ES6 alternative
// import express from 'express'

const express = require("express");
const router = express.Router();
const response = require("./network/response");

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

router.get("/message", function (req, res) {
  console.log(req.query);
  console.log(req.headers);
  res.header({ "custom-header": "Nuestro valor personalizado" });
  response.success(req, res, "Lista de mensajes");
});

router.post("/message", function (req, res) {
  console.log(req.query);
  if (req.query.error === "ok") {
    response.error(
      req,
      res,
      "Error inesperado",
      500,
      "Es solo una simulacion de los errores"
    );
  } else {
    console.log(req.body);
    response.success(req, res, "Creado correctamente", 201);
  }
});

app.use("/app", express.static("public"));

app.listen(3000);
console.log("App is listening on http://localhost:3000");
