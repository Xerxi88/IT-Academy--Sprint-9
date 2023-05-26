import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {

  return (
    <>
    <nav>
    <NavLink className={({isActive})=>(isActive ? "actived":null)} to="/">Inicio</NavLink>
    <NavLink className={({isActive})=>(isActive ? "actived":null)} to="/pokedex">Pokedex</NavLink>
    <NavLink className={({isActive})=>(isActive ? "actived":null)} to="/favorites">Favoritos</NavLink>
    </nav>
    </>
  )
}

export default Nav