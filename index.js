const express = require('express')
const cors = require('cors');
const app = express()
const port = 5000
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config/db')
const userRoutes = require('./api/route/userroute.js')
const reciperoute = require('./api/route/reciperoute.js');
const forumTemeRoute = require('./api/route/forumtemeroute.js');

app.get("/", (req, res) => res.send("Express on Vercel"));


app.use(cors({
    origin: ['http://localhost:8080', 'https://projekt-web-apps-frontend.vercel.app', 'https://projektwebapps-backend.onrender.com'
    ]
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
app.use(reciperoute);
app.use('/api', forumTemeRoute);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); app.listen(port, () => {
    console.log(`App is running on ${port}`);

});
