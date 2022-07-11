import React from 'react'
//importando useEffect hook
import { useEffect } from 'react'
//importando useState hook
import { useState } from 'react'
//importando axios
import axios from 'axios'
//Importando useNavigate hook
import {useNavigate} from 'react-router-dom'



const PokeCard = ({url}) => {

  //Renderizando pokemones desde el endpoint url
  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    axios.get(url)
      .then(res=>setPokemon(res.data))
      .catch(err=>console.log(err))
  }, [])
  //console.log(pokemon)

  
  
  const navigate=useNavigate()
  const clickCard=()=>{
    navigate(`/pokedex/${pokemon.id}`)
  }
  
  
  return (
   
    <article onClick={clickCard} className={`card-pokemon ${pokemon?.types[0].type.name}-border`}>
        <div className={`card-header ${pokemon?.types[0].type.name}-background`}>
          <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="poke-card" className={pokemon?.types[0].type.name}/>
        </div>
        <span className={`pokemon-name ${pokemon?.types[0].type.name}-name`}>{`${pokemon?.name.charAt(0).toUpperCase()}${pokemon?.name.slice(1)}`}</span>
        <span className='pokemon-type'>{pokemon?.types[1]?.type.name ?
          `${pokemon?.types[0].type.name}/${pokemon?.types[1]?.type.name}`:
          `${pokemon?.types[0].type.name}`
        }
        <p>Type</p>
       </span>
       <div className='delimiter'></div>
       <div className='rating-content'>
        <div>
          <p>HP</p>
          <span className={`pokemon-rating ${pokemon?.types[0].type.name}-name`}>{pokemon?.stats[0].base_stat}</span>
        </div>
        <div>
          <p>ATTACK</p>
          <span className={`pokemon-rating ${pokemon?.types[0].type.name}-name`}>{pokemon?.stats[1].base_stat}</span>
        </div>
        <div>
          <p>DEFENSE</p>
          <span className={`pokemon-rating ${pokemon?.types[0].type.name}-name`}>{pokemon?.stats[2].base_stat}</span>
        </div>
        <div>
          <p>SPEED</p>
          <span className={`pokemon-rating ${pokemon?.types[0].type.name}-name`}>{pokemon?.stats[5].base_stat}</span>
        </div>  
       </div>
    </article>
    
  )
}

export default PokeCard