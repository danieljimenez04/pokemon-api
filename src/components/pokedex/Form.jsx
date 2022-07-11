import React from 'react'

const Form = ({setPokeSearch,typeList,setFilterType}) => {

  //capturando el elemento en input
  const changeInputText=e=>{
    setPokeSearch(e.target.value)
  }

  //capturando el elemento en select
  const changeSelect=e=>{
    setFilterType(e.target.value)
  }

  return (
    <form className='pokedex-form'>
      <input type="text" 
        placeholder='Search your favorite Pokemon' 
        onChange={changeInputText}
        />
      <select onChange={changeSelect} className='pokedex-select'>
        <option value='All Pokemons'>All Pokemons</option>
        {
            typeList?.map(type=>(
                <option key={type.name} value={type.name}>{type.name}</option>
            ))
        }
      </select>
    </form>
  )
}

export default Form