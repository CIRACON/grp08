const express = require("express");
const app = express();
app.use(express.json());

const mongodb = require("mongodb"); // mongo client library
const url = "mongodb://localhost:27017";
const dbName = 'swapi';
let dbPool; // database connection

mongodb.MongoClient.connect(url, function (err, client) {
    if (err === null) {
        const db = client.db(dbName);
        dbPool = db;
    } else {
        console.log("DB CONNECTION FAILED. Is database running ? ");
    }
});

app.get("/films", (req, res) => {
    // console.log("I saw a request");
    // const films = [{ id: 1, title: "my movie" }, { id: 2, title: "my sequel" }];
    // res.send(films);

    // let col = dbPool.collection("films");
    let data;
    (data = dbPool.films.find({}))
        .then(res.send(data));
})

app.use(express.static("./../build"));
app.listen(8081, () => { console.log("listening on port 8081") });