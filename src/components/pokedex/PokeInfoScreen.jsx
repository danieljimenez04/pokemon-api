import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import image from '../../img/pokedex.png'

const PokeInfoScreen = () => {
  const [pokeInfo, setPokeInfo] = useState()
  const {id}= useParams()
  useEffect(() => {
    const URL=`https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
         .then(res=>setPokeInfo(res.data))
         .catch(err=>console.log(err))
  
  }, [])
  
  const navigate=useNavigate()
  const comeBack=()=>{
    navigate(`/pokedex/`)
  }
  console.log(pokeInfo)
  
  return (
    <>
    <div className='header'>
      <div></div>
      <img src={image} alt="pokedex"/>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div>
      <article className='card-pokemon-1'>
        <button onClick={comeBack}>Back</button>
        <div className={`card-pokemon-1-theme ${pokeInfo?.types[0].type.name}-background`} >

        </div>
        <img src={pokeInfo?.sprites.other['official-artwork'].front_default} alt="poke-img" />
        
        <div className='card-pokemon-1-id'>
          <div></div>
          <div>
            #{pokeInfo?.order}
          </div>
        </div>
        <div className='card-1-name-style'>
          <div></div>
          <div className='card-1-name'>{`${pokeInfo?.name.charAt(0).toUpperCase()}${pokeInfo?.name.slice(1)}`}</div>
          <div></div>
        </div>

        <div className='card-1-weigth-info'>
          <span className='card-1-weigth-text'>Weigth</span>
          <span className='card-1-weigth'>{pokeInfo?.weight}</span>
        </div>

        <div className='card-1-heigth-info'>
          <span className='card-1-heigth-text'>Heigth</span>
          <span className='card-1-heigth'>{pokeInfo?.height}</span>
        </div>

        <div className='card-1-type'>
          <div className='card-1-type-text'>Type</div>
          {
            pokeInfo?.types.map(type=>(
              <div className={`card-1-type-content  ${type.type.name}-background`} key={type.type.url}>
                {`${type.type.name.charAt(0).toUpperCase()}${type.type.name.slice(1)}`}
                
              </div>
            ))
          }

        </div>

        <div className='card-1-abilities'>
          <div className='card-1-abilities-text'>Abilities</div>
          {
            pokeInfo?.abilities.map(ability=>(
              <div className='card-1-abilities-content' key={ability.ability.url}>
                {`${ability.ability.name.charAt(0).toUpperCase()}${ability.ability.name.slice(1)}`}
                
              </div>
            ))
          }

        </div>

      </article>
      <article className='card-pokemon-2'>
        <h2>Movements</h2>
        <ul className='card-list-moves'>
            {
                pokeInfo?.moves.map(move=>{
                  return <li className='card-list-element' key={move.move.url}>{move.move.name}</li>
                })
            }
          </ul>
      </article>
    </div>
    </>
  )
}

export default PokeInfoScreen