import { Request, Response } from "express";
import { findAll } from "../services/user";

export const getStudents = async (req: Request, res: Response) => {
  try {
    const usuarios = await findAll();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener usuarios", error });
  }
};
