const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
const dbConnect = require('./config/mongo.js');

const router = require('./routes/index.js')
app.use("/", router);





// Le decimos a la app de express() que use cors para evitar el error Cross-Domain (XD)
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;



app.listen(port, () => {
  console.log("Servidor escuchando en el puerto " + port);
});

dbConnect();
