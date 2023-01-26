import axios from 'axios';
import { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom'
import Footer from './footer';

const URL = 'http://localhost:8000/usuarios/';

const CompShowUsers = () => {
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    getUsers()
  }, [])

  //procedimineto para mostrar los usuarios
  const getUsers = async () => {
    const res = await axios.get(URL)
    setUsers(res.data)
  }

  //procedimineto para eliminar usuario
  const deleteUser = async (id) => {
    await axios.delete(`${URL}${id}`)
    getUsers()
  }
  return (
    <Fragment>
      <Footer/>
      <div className='container'>
        <div className="row">
          <div className="col">
            <div className="title mb-5">
              <h1 className='text text-danger'>Estudiantes</h1>
            </div>
            <table className="table table-striped">
              <thead className="table-primary">
                <tr>
                  <th>nombre</th>
                  <th>observaciones</th>
                  <th>opciones</th>
                </tr>
              </thead>
              <tbody>
                {
                  Users.length > 1 ?(
                    Users.map((user) => (
                      <tr key={user.id}>
                        <td>{user.nombre}</td>
                        <td>{user.observaciones}</td>
                        <td>
                          <Link to={`/edit/${user.id}`} className='btn btn-info'><i class="fa-solid fa-user-pen"></i></Link>
                          <button onClick={() => deleteUser(user.id)} className="btn btn-danger "><i class="fa-solid fa-trash"></i></button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td>Usuario Desconectado</td>
                      <td>Usuario Desconectado</td>
                      <th>
                          <button type='buttom' className='btn btn-info'><i class="fa-solid fa-user-pen"></i></button>
                          <button type='button' className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
                      </th>
                    </tr>
                  )
                }
              </tbody>
            </table>
            <Link to='/create' className="btn btn-info" title='Crear'><i class="fa-solid fa-plus"></i></Link>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default CompShowUsers;

