//routes/usuarios.ts
import { Router } from "express";
import { getStudents } from "../controllers/user";

const router = Router();

//Regresa todos los alumnos de la base de datos
router.get("/students", getStudents);

export default router;
