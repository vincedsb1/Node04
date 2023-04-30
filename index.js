const express = require("express");
const app = express();
require('dotenv').config();

console.log(process.env);

console.log(`The server will run on port ${process.env.SERVER_PORT}`);
console.log(`The secret key ${process.env.SECRET_API_KEY} will be used to connect to the third party API`);
console.log(`The server will connect to the database with the user "${process.env.DB_USER}" and the password "${process.env.DB_PASSWORD}"`);

const port = process.env.SERVER_PORT;
const name = process.env.NAME;
const city = process.env.CITY;
const language = process.env.LANGUAGE;


app.get("/", (req, res) => {
    res.send(`I am ${name}, wilder in ${city}, and I love ${language}.`);
  });


  res.status(404).send({ error: "ID not found" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});