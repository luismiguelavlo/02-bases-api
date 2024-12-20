import express from "express";
import { assignToy, createToy, packedToy, seeWorkshop } from "./routes";

const app = express(); //? con esta linea inicializamos express

app.use(express.json()); //? Enseñarle a express a que entienda informacion que venga en formato json

interface Toy {
  id: number;
  name: string;
  type: string;
  magicLevel: number;
  packed: boolean;
  assignedTo: string | null;
}

const toys: Toy[] = [];
let toyId = 1;

//crear el juguete
app.post("/toy", createToy);

//empacar el juguete //* :id es el id del juguete que quiero empacar
app.get("/toy/:id/pack", packedToy);

//asignar juguete a un niño
app.post("/toy/:id/assign", assignToy);

//ver el estado del taller
app.get("/workshop", seeWorkshop);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
