import './App.css';
import Home from './componentes/home';
import LoginForm from './componentes/loginForm';
import { useState, useEffect} from 'react';
//importar firebase-config
import { db } from './firebase-configuracion';
import { collection, getDocs } from 'firebase/firestore';

function App() {

  //FireStore
  const [productos, setProductos] = useState([]);
  const coleccion = collection(db, 'productos');

  useEffect(() => {
    const getProductos = async () =>{
      const data = await getDocs(coleccion);
      setProductos(data.docs.map( (doc) => ({ ...doc.data(), id: doc.id })))
    }
    getProductos();
  }, []);
  
  // Usuario registrado para poder entrar a la aplicacion
  const usuarioLogin ={
    email:'test@test.com',
    password: 'test1234'
  }
  //Extraemos el dato de el usuario desde nuestro localStorage
  const login =JSON.parse(localStorage.getItem('login') || "[]");

  return (
    <div className="App">
      <div>
      {(login.email !=="") ? (
        <div className='bienvenido'>
          <Home usuario={login} productos={productos} />
        </div>
      ) : (
        <LoginForm usuarioLogin={usuarioLogin} />
      )}
      </div>
    </div>
  );
}

export default App;
