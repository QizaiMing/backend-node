// ES6 alternative
// import express from 'express'

const express = require("express");
// const router = require("./components/message/network");
const db = require("./db");
const router = require("./network/routes");

db(
  "mongodb+srv://qizaiming:12345@cluster0.rliev.mongodb.net/platzimessagesdb?retryWrites=true&w=majority"
);

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(router);
router(app);

app.use("/app", express.static("public"));

app.listen(3000);
console.log("App is listening on http://localhost:3000");
