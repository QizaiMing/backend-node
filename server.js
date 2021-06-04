// ES6 alternative
// import express from 'express'

const express = require("express");
require("dotenv").config();
const db = require("./db");
const router = require("./network/routes");

db(process.env.DATABASE_URL);

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(router);
router(app);

app.use("/app", express.static("public"));

app.listen(3000);
console.log("App is listening on http://localhost:3000");
