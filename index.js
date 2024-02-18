const express = require('express')
const cors = require('cors');
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config/db')
const userRoutes = require('./api/route/userroute.js')
const recipeRoutes = require('./api/route/reciperoute.js')
const notesRoutes = require('./api/route/noteroute.js')
const ratingRoutes = require('./api/route/ratingroute.js')
const postRoutes = require('./api/route/postroute.js')

app.use(cors({
    origin: 'http://localhost:8080'
}));

mongoose.connect(config.database)
    .then(() => {
        console.log("Database is connected");
    })
    .catch(err => {
        console.log({ database_error: err });
    });

app.use(express.json());
app.use(userRoutes);
app.use(recipeRoutes);
app.use(notesRoutes);
app.use(ratingRoutes);
app.use(postRoutes);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); app.listen(port, () => {
    console.log(`App is running on ${port}`);

});
