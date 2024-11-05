import dotenvFlow from "dotenv-flow";
import express from "express";
import studentRouter from "./routes/student";
import teacherRouter from "./routes/teacher";
import unknownResource from "./middlewares/unknown-resource";
import unknownError from "./middlewares/unknown-error";
import testRoutes from "./routes/test";
import validationError from "./middlewares/validation-error";

//Para poder acceder a las variables del ambiente (.env)
dotenvFlow.config();
/* if (process.env.NODE_ENV !== "production") {
} */

const app = express();

// Middleware para parsear JSON
app.use(express.json());

app.use("/api/v1/student", studentRouter);
app.use("/api/v1/teacher", teacherRouter);

app.use("/error", testRoutes);

//Middlewares
app.use(validationError);
app.use(unknownResource);
app.use(unknownError);

app.listen(process.env.SERVER_PORT, function () {
  console.log("Escuchando puerto " + process.env.SERVER_PORT);
});
