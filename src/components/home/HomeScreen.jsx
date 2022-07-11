import React from 'react'
import HomeInput from './HomeInput'
import image from '../../img/pokedex.png'

const HomeScreen = ({setIsLogged}) => {
  return (
    <div className='home-screen'>
      <img src={image} alt="pokedex" />
      <h2>
        Hello trainer!
      </h2>
      <span>
        Give me your name to start
      </span>
      <HomeInput setIsLogged={setIsLogged}/>

      <div className='footer'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

    </div>
  )
}

export default HomeScreen