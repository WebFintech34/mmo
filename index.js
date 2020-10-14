const express = require("express");
const cowsay = require("cowsay");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const router = require("./backend/routes");
const jwt = require('jsonwebtoken');
dotenv.config();

console.log(process.env.MONGO_URL);

// Create the server
const app = express();
// database connection
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("database connected"))
    .catch((err) => console.log(`error ${err}`));

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "client/build")));
//

app.use(bodyParser.json());

/* backend routes */
router(app);

// API docs
app.use("/apidoc", express.static("public/docs"));

// Serve our api route /cow that returns a custom talking text cow
app.get("/api/cow/:say", cors(), async (req, res, next) => {
    try {
        const text = req.params.say;
        const moo = cowsay.say({ text });
        res.json({ moo });
    } catch (err) {
        next(err);
    }
});

// Serve our base route that returns a Hello World cow
app.get("/api/cow/", cors(), async (req, res, next) => {
    try {
        const moo = cowsay.say({ text: "Hello World!" });
        res.json({ moo });
    } catch (err) {
        next(err);
    }
});

// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});

//setup tokens for Authetication using jwt
app.post('/login', (req, res)=>{
    //Authenticate User

    const username = req.body.username
    const user ={name: username}

    const accessToken = jwt.sign( user,
        process.env.ACCESS_TOKEN_SECRET, {expiresIn : '1h'})

        req.json({accessToken: accessToken})
})

function authenticatetoken ( req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token,
    process.env.ACCESS_TOKEN_SECRET, (err, user) =>
    {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

// Choose the port and start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Mixing it up on port ${PORT}`);
});
