const express = require("express");
const app = express();
const port = 8000;

function isAuthorized(req, res, next) {
  const auth = req.headers.authorization;
  if (auth === 'secretpassword') {
    next();
  } else {
    res.status(401);
    res.send('Not permitted');
  }
}

app.get("/", (req, res) => res.send("Hello Ghana!"));

app.get("/products",isAuthorized, (req,res) => {
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
