const express = require("express");
const cors = require('cors')
const PORT = 4000;
const Router = require ('./routes/routes')

require ('dotenv').config()
require('./config/database')

const app = express();

// Middlewares

app.use(cors())
app.use(express.json()) //para que me de respuestas en formato JSON
app.use('/api', Router)

app.listen(PORT, () => console.log("Server ready on PORT" + PORT));