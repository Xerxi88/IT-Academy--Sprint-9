import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import {FavoritesContext} from "../Context"

const PrivateRoute = ({children, registered}) => {
  return (registered)
    ? children
    : <Navigate to="error404"/>
}

export default PrivateRoute