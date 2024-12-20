import express from "express";
import { router as toyRouter } from "./routes";

const app = express(); //? con esta linea inicializamos express

app.use(express.json()); //? Enseñarle a express a que entienda informacion que venga en formato json

app.use(toyRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
