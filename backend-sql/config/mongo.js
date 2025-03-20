const mongoose = require('mongoose');

const dbConnect = async () => {
  const db_uri = process.env.DB_URI;
  mongoose.set('strictQuery', false);

  try {
    await mongoose.connect(db_uri);
    console.log("Conectado a la BD");
  } catch (error) {
    console.error("Error conectando a la BD:", error);
  }

  // Escuchar eventos
  mongoose.connection.on("connected", () => console.log("Conectado a la BD"));
  mongoose.connection.on("error", (err) => console.log("Error en la conexión a la BD:", err));
};

module.exports = dbConnect;
