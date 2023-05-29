import React, {useEffect} from 'react'
import pikachu from "../images/home-pikachu.png"
import eevee from "../images/home-eevee.png"


const Home = ({setShowLogin ,setRegistered ,registered}) => {

  useEffect(() => {
    const user = localStorage.getItem('User');
    if (user) {
      setRegistered(true);
    }
  }, []);

  const handleRegistration = () => {

      if (registered) {
        localStorage.removeItem('User');
        localStorage.removeItem('Password');
        window.location.reload();
    } else {
      setShowLogin(true);
    } 
  };


  return (
    
    <main className='home-container'>
      <div className="info">
        Bienvenido a la web de Pokemon donde podrás buscar todos los pokemons y ver su ficha de información y estadisticas. Si no puedes esperar mas registrate y entra. Podrás tambien seleccionar tus pokemons favoritos y verlos en cualquier momento.
        <button onClick={handleRegistration}>{registered ? 'Logout' : 'Registrarse'}</button>
      </div>
      <div className="pika-container">
      <img  className="pikachu" src={pikachu} alt="pikachu" style={{width:"60%"}}/>
      </div>
      <div className="eevee-container">
      <img  className="eevee" src={eevee} alt="eevee" style={{width:"35%"}}/>
      </div>
    </main>
  )
}

export default Home