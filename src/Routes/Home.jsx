import React, {useState,useEffect} from 'react'
import pikachu from "../images/home-pikachu.png"

const Home = () => {

  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('User');
    if (user) {
      setRegistered(true);
    }
  }, []);

  const handleRegistration = () => {
    if (registered) {
      // Acción para usuarios registrados
    } else {
      // Acción para usuarios no registrados
    }
  };

  return (
    
    <main className='home-container'>
      <div className="info">
        Bienvenido a la web de Pokemon donde podrás buscar todos los pokemons y ver su ficha de información y estadisticas. Si no puedes esperar mas registrate y entra. Podrás tambien seleccionar tus pokemons favoritos y verlos en cualquier momento.
        <button onClick={handleRegistration}>{registered ? 'Ya estoy registrado' : 'Registrarse'}</button>
      </div>
      <div className="pika-container">
      <img  className="pikachu" src={pikachu} alt="pikachu" style={{width:"60%"}}/>
      </div>
    </main>
  )
}

export default Home