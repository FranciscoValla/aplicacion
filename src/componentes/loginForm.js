import React, {useState} from "react";
import './loginForm.css';
import loginBg from '../media/login-form.jpg';

function LoginForm ( {usuarioLogin} ) {

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    

    function entrarLogin(){
        var login ={
          user: user,
          email:email
        }
        if( usuarioLogin.email === login.email){
            localStorage.setItem('login', JSON.stringify(login));
        } else{
            alert('Usuario no registrado')
        }
      }

    return(
        <form className="loginFormulario">
            <h2>Login</h2>
            <img src={loginBg} alt="" />
            <div className="mb-3">
                <label htmlFor="user" className="form-label">Nombre de usuario</label>
                <input type="text" className="form-control" id="user" value={user} onChange={(e)=>{setUser(e.target.value)} } />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)} } />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" />
            </div>
            <button type="submit" className="btn btn-primary" onClick={entrarLogin}>Login</button>
        </form>
    )
}

export default LoginForm;