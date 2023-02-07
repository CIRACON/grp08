const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const mongodb = require("mongodb"); // mongo client library
const url = "mongodb://localhost:27017/swapi";
// const dbName = 'swapi';
// let dbPool; // database connection

mongoose.connect(url,
    {
        useNewUrlParser: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

const Schema = new mongoose.Schema({});
const Film = mongoose.model("films", Schema);
const Planet = mongoose.model("planets", Schema);


app.get("/films", async (req, res) => {
    const films = await Film.find({});

    try {
        res.send(films);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get("/planets", async (req, res) => {
    const planets = await Planet.find({});

    try {
        res.send(planets);
    } catch (error) {
        res.status(500).send(error);
    }
});

// app.get("films/:id", async (req, res) => {
//     const film = await Film.find({})
// })


// app.get("/films", (req, res) => {
//     // console.log("I saw a request");
//     // const films = [{ id: 1, title: "my movie" }, { id: 2, title: "my sequel" }];
//     // res.send(films);

//     let col = dbPool.collection("films");

//     let data;
//     (data = col.find({}))
//         .then(res.send(data));

// })

app.use(express.static("./../build"));
app.listen(8081, () => { console.log("listening on port 8081") });