import db from "../database/db.js";
import { DataTypes } from "sequelize";

const User =  db.define('usuarios', {
  nombre: {
    type: DataTypes.STRING
  },
  observaciones: {
    type: DataTypes.STRING
  }
});

export default User;

