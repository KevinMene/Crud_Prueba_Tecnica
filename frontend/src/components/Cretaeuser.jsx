import axios from "axios";
import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from './footer';

const URL = 'http://localhost:8000/usuarios/';

const CompCreateUsers = () => {
  const [nombre, setNombre] = useState('');
  const [observaciones, setObservaciones] = useState('');
  const navigate = useNavigate();

  //Procedimineto para crear
  const store = async (e) => {
    e.preventDefault()
    await axios.post(URL, { nombre: nombre, observaciones })
    navigate('/')
  }

  return (
    <Fragment>
      <Footer />
      <div className="container">
        <div className="row">
            <h3 className="text text-danger">Crear Estudiante</h3>
            <form onSubmit={store}>
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input className="form-control" placeholder="Escribe aca el nombre" type='text' value={nombre} onChange={(e) => setNombre(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Observacion</label>
                <textarea className="form-control" placeholder="Escribe aca la observacion" type='text' value={observaciones} onChange={(e) => setObservaciones(e.target.value)} />
              </div>
              <button className="btn btn-primary" type="submit">Crear</button>
              <Link to='/' className="btn btn-danger ">Volver</Link>
            </form>
        </div>
      </div>
    </Fragment>
  )
}

export default CompCreateUsers;

