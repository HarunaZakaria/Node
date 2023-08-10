const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => res.send("Hello Ghana!"));

app.get("/products", (req,res) => {
    const products = [
    {
      id: 1,
      name: "hammer",
    },
    {
      id: 2,
      name: "screwdriver",
    },
    {
      id: 3,
      name: "wrench",
    },
   ];
  
   res.json(products);
});

app.get("/names", (req,res) => {
    const products = [
    {
      id: 1,
      name: "Haruna",
    },
    {
      id: 2,
      name: "Zakaria",
    },
    {
      id: 3,
      name: "Dauda",
    },
    {
        id: 3,
        name: "Hamisu",
      },
      {
        id: 3,
        name: "Sualey",
      },
   ];
  
   res.json(products);
  });

app.listen(port, () => console.log(`this app is listening  on port ${port}`));
