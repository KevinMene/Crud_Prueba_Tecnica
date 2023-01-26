import User from "../models/model.js";

//Mostrar todos los usuarios
export const GetAllUser = async (req, res) => {
  try {
    const users = await User.findAll()
    res.json(users);
  } catch (error) {
    res.json({ message: error.message });
  }
}

//Mostrar un solo usuario
export const GetUserId = async (req, res) => {
  try {
    const user = await User.findAll({
      where: { id: req.params.id }
    })
    res.json(user[0])
  } catch (error) {
    res.json({ message: error.message });
  }
}
//Crear un usuario
export const CreateUser = async (req, res) => {
  try {
    await User.create(req.body)
    res.json({
      "message": "!Registro creado correctamente¡"
    })
  } catch (error) {
    res.json({ message: error.message });
  }
}
//Actualizar un usuario
export const UpdateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: { id: req.params.id }
    })
    res.json({
      "message": "!Registro Actualizado correctamente¡"
    })
  } catch (error) {
    res.json({ message: error.message });
  }
}
//eliminar un usuario
export const DeleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: { id: req.params.id }
    })
    res.json({
      "message": "!Registro Eliminado correctamente¡"
    })
  } catch (error) {
    res.json({ message: error.message });
  }
}