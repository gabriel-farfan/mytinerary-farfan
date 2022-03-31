require('dotenv').config()
require ('dotenv').config()
require('./config/database')

const express = require("express");
const cors = require('cors')
// const PORT = 4000;
const Router = require ('./routes/routes')
const passport = require("passport")
const app = express();
const path = require('path')
// const PORT = process.env.PORT || 4000;
// const HOST = process.env.HOST || '0.0.0.0'

// Middlewares

app.use(cors())
app.use(express.json()) //para que me de respuestas en formato JSON
app.use('/api', Router)
app.use(passport.initialize())

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'));
    });
}

app.listen(PORT, () => console.log("Server ready on PORT" + PORT));