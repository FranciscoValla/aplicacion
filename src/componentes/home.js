import React from 'react';
import CrearProducto from './crearProducto';
import Producto from './producto';
import './home.css';

function Home ({usuario}) {

  function Logout(){
    var login ={
      user: '',
      email:''
    }
    localStorage.setItem('login', JSON.stringify(login));
    window.location.reload();
  }
  const carritos = JSON.parse(localStorage.getItem('carritos') || "[]");

  return(
    <div className='home'>
      <header>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <p className="nav-link active" aria-current="page" href="#">Bienvenido: <strong className='btn btn-sm btn-outline-success'>{usuario.user}</strong></p>
          </li>
          <li className="nav-item">
            <p className="nav-link" onClick={Logout}> <strong className='btn btn-sm btn-outline-danger'>Logout</strong></p>
          </li>
          <li className="nav-item">
            <div className="dropdown">
              <button className="btn btn-sm dropdown-toggle" type="button"
                      id="btn1" data-bs-toggle="dropdown" aria-expanded="false">
                <span>({carritos.length})</span> Carrito
              </button>
              
              <ul className="dropdown-menu" aria-labelledby="btn1" >
                { carritos.map( (carrito) => (
                  <li key={carrito.id}><p className="dropdown-item"><strong>{carrito.nombre}</strong> <span className="btn btn-success">{carrito.precio}</span></p></li>
                )) }
                <br/>
              </ul>
            </div>
          </li>
        </ul>
      </header>

      <main>
          <CrearProducto/>
          <Producto/>
          
      </main>
    </div>
    )
}

export default Home;