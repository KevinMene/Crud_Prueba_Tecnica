import express  from "express";
import cors from "cors";
import db from "./database/db.js";
import userroute from "./routes/router.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use('/usuarios', userroute);

try {
  await db.authenticate()
  console.log('Conexion exitosa a la db');
} catch (error) {
  console.log(`el error de conexion es: ${error}`);

}

app.listen(8000, () => {
  console.log('Server up running in http://localhost:8000/')
});