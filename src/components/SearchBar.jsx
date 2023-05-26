import React from 'react'

const SearchBar = ({setSearch}) => {

  return (
    
    <>
    <input type="text" placeholder='Buscar Pokemon...' onChange={(e)=>{setSearch(e.target.value)}} />
    </>
  )
}

export default SearchBar