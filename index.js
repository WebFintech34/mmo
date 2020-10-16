<<<<<<< HEAD
const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const router = require("./backend/routes");
const jwt = require('jsonwebtoken');
dotenv.config();
=======
const express = require('express')
const cowsay = require('cowsay')
const cors = require('cors')
const path = require('path')
>>>>>>> 19b077c2043d0c897119409324c385c5089fff0b

console.log(process.env.MONGO_URL);

// Create the server
<<<<<<< HEAD
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
=======
const app = express()

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))

// Serve our api route /cow that returns a custom talking text cow
app.get('/api/cow/:say', cors(), async (req, res, next) => {
  try {
    const text = req.params.say
    const moo = cowsay.say({ text })
    res.json({ moo })
  } catch (err) {
    next(err)
  }
})
>>>>>>> 19b077c2043d0c897119409324c385c5089fff0b


// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});

// Choose the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Mixing it up on port ${PORT}`);
});
