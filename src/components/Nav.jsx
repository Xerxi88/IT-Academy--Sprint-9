import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = ({registered}) => {

  return (
    <>
    <nav>
    <NavLink className={({isActive})=>(isActive ? "actived":null)} to="/">Inicio</NavLink>
    <NavLink className={({isActive})=>(isActive ? "actived":null)} style={{visibility: !registered ? "hidden":""}} to="/pokedex">Pokedex</NavLink>
    <NavLink className={({isActive})=>(isActive ? "actived":null)} style={{visibility: !registered ? "hidden":""}} to="/favorites">Favoritos</NavLink>
    </nav>
    </>
  )
}

export default Nav