import React, {useRef} from 'react'
import close from "../images/closed-icon.png"
import logo from "../images/header.png"
import pikachu from "../images/pikachu-login.png"
import eevee from "../images/eevee-login.png"

const Login = ({setShowLogin, setRegistered}) => {

const usernameRef = useRef(null);
const passwordRef = useRef(null);

const closeLogin=()=>{
    setShowLogin((e)=>setShowLogin(false));
}

const registrar=()=>{
  const username = usernameRef.current.value;
  const password = passwordRef.current.value;
  localStorage.setItem('User', username);
  localStorage.setItem('Password', password);
  setShowLogin(false);
  setRegistered(username && password !== "" ? true : false);
}


  return (
    <div className="login-container" >
       <div className="register">
          <img src={logo} alt="PokeApi" style={{width:"50%"}}/>
          <img src={close} alt="close-window" className='close-window' onClick={closeLogin}/>
          <input ref={usernameRef} style={{width:"200px"}} type="text" required placeholder='Usuario'/>
          <input ref={passwordRef} style={{width:"200px"}} type="password" required placeholder='Contraseña' />
          <button className='btn-register' onClick={registrar}>Registrar</button>
          <img src={pikachu} alt="pikachu" className='pikachu-login'/>
          <img src={eevee} alt="eevee" className='eevee-login'/>
       </div>
    </div>
  )
}

export default Login