const express = require("express");
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


// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});



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
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Mixing it up on port ${PORT}`);
});
