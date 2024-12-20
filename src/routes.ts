import { Request, Response } from "express";

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

export const createToy = (req: Request, res: Response) => {
  //! 1. obtuve la data del cliente
  const { name, type, magicLevel } = req.body;

  //! 2. valide que la data venga
  if (!name || name.length <= 0) {
    return res.status(400).json({
      message: "name is required",
    });
  }

  if (!type || type.length <= 0) {
    return res.status(400).json({
      message: "type is required",
    });
  }

  if (!magicLevel) {
    return res.status(400).json({
      message: "magicLevel is required",
    });
  }

  //! 3. cree el objeto con el juguete a almacenar
  const newToy: Toy = {
    id: toyId++,
    name,
    type,
    magicLevel,
    packed: false,
    assignedTo: null,
  };

  //! 4. Almacenar el juguete creado en un arreglo
  toys.push(newToy);

  //! 5. Enviamos la respuesta que se ha creado exitosamente con el info del juguete creado
  return res.status(201).json({
    message: "Juguete creado exitosamente",
    toy: newToy,
  });
};

export const packedToy = (req: Request, res: Response) => {
  res.json({
    ok: true,
  });
};

export const assignToy = (req: Request, res: Response) => {
  res.json({
    ok: true,
  });
};

export const seeWorkshop = (req: Request, res: Response) => {
  return res.status(200).json({
    toys: toys,
  });
};
