import React from 'react'
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({children, registered}) => {
  return (registered)
    ? children
    : <Navigate to="error404"/>
}

export default PrivateRoute