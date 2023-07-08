import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import Cards from "./dbCards.js";

// App config
const app = express();
const port = process.env.port || 8001;
const connection_url =
  "mongodb+srv://prateekchaplot18:w74YYM4pXas5MwnS@cluster0.lao5sqa.mongodb.net/";

// Middleware
app.use(express.json());
app.use(Cors());

// Db Config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Api Endpoints
app.get("/", (req, res) => res.status(200).send("Hello, world!!!"));

app.post("/dating/cards", (req, res) => {
  const cards = req.body;
  Cards.insertMany(cards)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(500).send(err));
});

app.get("/dating/cards", (req, res) => {
  Cards.find()
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(500).send(err));
});

// Listener
app.listen(port, () => console.log(`Listening on localhost:${port}`));
