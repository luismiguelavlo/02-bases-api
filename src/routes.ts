import { Request, Response, Router } from "express";
import { assignToy, createToy, packedToy, seeWorkshop } from "./controller";

export const router = Router();

//crear el juguete
router.post("/toy", createToy);

//empacar el juguete //* :id es el id del juguete que quiero empacar
router.get("/toy/:id/pack", packedToy);

//asignar juguete a un niño
router.post("/toy/:id/assign", assignToy);

//ver el estado del taller
router.get("/workshop", seeWorkshop);
