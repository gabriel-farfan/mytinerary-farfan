const express = require("express");
const PORT = 4000;

require ('dotenv').config()
require('./config/database')

const app = express();

app.listen(PORT, () => console.log("Server ready on PORT" + PORT));