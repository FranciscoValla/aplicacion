import React from "react";
import './producto.css';
// import { useState, useEffect} from 'react';
//importar firebase-config
// import { db } from '../firebase-configuracion';
// import { collection, getDocs } from 'firebase/firestore';

function Producto () {
    //FireStore         Descartado por falta de tiempo
//   const [products, setProducts] = useState([]);
//   const coleccion = collection(db, 'productos');

//   useEffect(() => {
//     const getProductos = async () =>{
//       const data = await getDocs(coleccion);
//       setProducts(data.docs.map( (doc) => ({ ...doc.data(), id: doc.id })))
//     }
//     getProductos();
//   }, []);
  //Firestore cierre

    const productos = JSON.parse(localStorage.getItem('productos') || "[]");

    function agregarCarrito(producto){
        let carritos = JSON.parse(localStorage.getItem('carritos') || "[]");
        var dato ={
          nombre: producto.nombre,
          precio: producto.precio,
          id: Math.random(1,1) *100
        }
        carritos.push(dato)
        localStorage.setItem('carritos', JSON.stringify(carritos));
      }

    return(
        <div className="producto">
            {/* {products.map( (producto) =>{
          return(
            <div className="card" key={producto.nombre} >
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                        <p className="card-text">${producto.precio}</p>
                        <input className="btn btn-success" type="submit" onClick={() => agregarCarrito(producto)} value="+ Carrito" />
                    </div>
                </div>
          )
        })}  Descartado por falta de tiempo*/}
            <h3>Poductos Disponibles</h3>
            { productos.map( (producto) => (
                <div className="card" key={producto.nombre} >
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                        <p className="card-text">${producto.precio}</p>
                        <input className="btn btn-success" type="submit" onClick={() => agregarCarrito(producto)} value="+ Carrito" />
                    </div>
                </div>
            )) }
        </div>
        
    )
}

export default Producto;
