const db = require("mongoose");

db.Promise = global.Promise;

async function connect(uri) {
  db.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("[db] Conectada con exito"))
    .catch((err) => console.error("[db]", err));
}

module.exports = connect;
