import React, { useState } from 'react'

const SearchBar = ({setSearch}) => {

  return (
    
    <>
    <input type="text" onChange={(e)=>{setSearch(e.target.value)}} />
    </>
  )
}

export default SearchBar