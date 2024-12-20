import express, { Request, Response } from "express";

const app = express(); //? con esta linea inicializamos express

app.use(express.json()); //? Enseñarle a express a que entienda informacion que venga en formato json

app.listen(3000, () => {
  console.log("app running on port 3000");
});
