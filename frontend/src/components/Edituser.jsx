import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Link ,useNavigate, useParams } from "react-router-dom";
import Footer from './footer';


const URL = 'http://localhost:8000/usuarios/';

const CompEditUser = () => {
  const [nombre, setNombre] = useState('');
  const [observaciones, setObservaciones] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const Update = async (e) => {
    e.preventDefault()
    await axios.put(URL + id, {
      nombre: nombre,
      observaciones: observaciones
    })
    navigate('/')
  }
  useEffect(() => {
    getUserById()
  }, []) // eslint-disable-next-line

  const getUserById = async () => {
    const res = await axios.get(URL + id)
    setNombre(res.data.nombre)
    setObservaciones(res.data.observaciones)
  }

  return (
    <Fragment>
      <Footer />
      <div className="container">
        <div className="row">
          <h3 className="text text-danger">Editar Estudiante</h3>
          <form onSubmit={Update}>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input className="form-control" type='text' value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Observacion</label>
              <textarea className="form-control" type='text' value={observaciones} onChange={(e) => setObservaciones(e.target.value)} />
            </div>
            <button className="btn btn-primary" type="submit">Actualizar</button>
            <Link to='/' className="btn btn-danger ">Volver</Link>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default CompEditUser;
