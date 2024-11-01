import DotenvFlow from "dotenv-flow";
import express from "express";
import studentRouter from "./routes/student";
import unknownResource from "./middlewares/unknown-resource";
import unknownError from "./middlewares/unknown-error";
import testRoutes from "./routes/test";
import validationError from "./middlewares/validation-error";

//Para poder acceder a las variables del ambiente (.env)
if (process.env.NODE_ENV !== "production") {
  DotenvFlow.config();
}

const app = express();

// Middleware para parsear JSON
app.use(express.json());

app.use("/api/v1/student", studentRouter);

app.use("/error", testRoutes);

//Middlewares
app.use(validationError);
app.use(unknownResource);
app.use(unknownError);

app.listen(process.env.SERVER_PORT, function () {
  console.log("Escuchando puerto " + process.env.SERVER_PORT);
});
