import { config } from "dotenv";
import express from "express";
import studentRouter from "./routes/student";
import unknownResource from "./middlewares/unknown-resource";
import unknownError from "./middlewares/unknown-error";

//Para poder acceder a las variables del ambiente (.env)
config();

const app = express();

// Middleware para parsear JSON
app.use(express.json());

app.use("/student", studentRouter);

//Middlewares
app.use(unknownResource);
app.use(unknownError);

app.listen(process.env.SERVER_PORT, function () {
  console.log("Escuchando puerto " + process.env.SERVER_PORT);
});
