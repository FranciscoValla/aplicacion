import React, {useState} from "react";
import './crearProducto.css';

//importar firebase-config
// import { db } from '../firebase-configuracion';
// import { collection, addDoc } from 'firebase/firestore';

function CrearRuta () {

  // const coleccion = collection(db, 'productos');

    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');

    function crearProducto(){
      let productos = JSON.parse(localStorage.getItem('productos') || "[]");
      var dato ={
        nombre: nombre,
        precio: precio,
      }
      productos.push(dato);
      localStorage.setItem('productos', JSON.stringify(productos));
    }

    return(
      <form className="crearProducto">
          <h4>Crear Pruducto nuevo</h4>
          <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre Producto</label>
              <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e)=>{setNombre(e.target.value)} } />
            </div>
              <div className="mb-3">
              <label htmlFor="precio" className="form-label">Precio Producto</label>
              <input type="number" className="form-control" id="precio" value={precio} onChange={(e)=>{setPrecio(e.target.value)} } />
            </div>
          <button type="submit" className="btn btn-primary" onClick={crearProducto}>Guardar Producto</button>
      </form>
    )
}

export default CrearRuta;