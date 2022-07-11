import React from 'react'
//importando useEffect hook
import { useEffect } from 'react'
//importando useState hook
import { useState } from 'react'
//importando useSelector hook
import { useSelector } from 'react-redux'
//importando axios para ocupar la poke-api
import axios from 'axios'
import PokeCard from './PokeCard'
import Pagination from './Pagination'
import Form from './Form'
import image from '../../img/pokedex.png'




const PokedexScreen = () => {

  const userName=useSelector(state=>state.userName)
  const [pokemons, setPokemons] = useState()
  //Paginacion
  const [currentPage, setCurrentPage] = useState(1)

  //Busqueda de pokemon con input de Form.jsx
  const [pokeSearch, setPokeSearch] = useState()
  const [filterPokemon, setFilterPokemon] = useState()
  const [typeList, setTypeList] = useState()

  

  //Busqueda por filtro
  const [filterType, setFilterType] = useState('All Pokemons')
  
  //Busqueda por tipos
  useEffect(() => {
    if (filterType==='All Pokemons'){
      const URL_POKEMONS='https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154'
      axios.get(URL_POKEMONS)
            .then(res=>{
              setPokemons(res.data.results)
              setCurrentPage(1)
            }
              )
            .catch(err=>console.log(err))
    }else{
      const URL=`https://pokeapi.co/api/v2/type/${filterType}/`
      axios.get(URL)
           .then(res=>{
              const array=res.data.pokemon.map(e=>e.pokemon)
              setPokemons(array)
              setFilterPokemon()
              setCurrentPage(1)
            })
          .catch(err=>console.log(err))
    }     
    }
  , [filterType])
  
  useEffect(() => {
    const URL='https://pokeapi.co/api/v2/type/'
    axios.get(URL)
         .then(res=>setTypeList(res.data.results))
         .catch(err=>console.log(err))
  
    }, [])
  
  
  useEffect(() => {
    setFilterPokemon(pokemons?.filter(e=>e.name.includes(pokeSearch.toLowerCase())))
    
    //console.log('esto es filter pokemon',filterPokemon)
    // if (filterType==='All Pokemons'){
    //   const URL_POKEMONS='https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154'
    //   axios.get(URL_POKEMONS)
    //         .then(res=>setPokemons(res.data.results))
    //         .catch(err=>console.log(err))
    // }
    console.log('esto es filter pokemon',filterPokemon)
    if (filterPokemon!==undefined){
      setPokemons(filterPokemon)
    // }else{
    //   const URL='https://pokeapi.co/api/v2/type/'
    //   axios.get(URL)
    //      .then(res=>setTypeList(res.data.results))
    //      .catch(err=>console.log(err))
    // }
    
    }else{
      // if (filterType==='All Pokemons'){
      //   const URL_POKEMONS='https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154'
      //   axios.get(URL_POKEMONS)
      //         .then(res=>{
      //           setPokemons(res.data.results)
      //         }
      //           )
      //         .catch(err=>console.log(err))
      // }else{
      //   const URL=`https://pokeapi.co/api/v2/type/${filterType}/`
      //   axios.get(URL)
      //        .then(res=>{
      //           const array=res.data.pokemon.map(e=>e.pokemon)
      //           setPokemons(array)
      //         })
      //       .catch(err=>console.log(err))
      // }     

      
    }
    console.log('esto es filter pokemon',filterPokemon)
    },[pokeSearch,setFilterPokemon])
  
    
    
  
  //console.log('esto es pokemons',pokemons)
  let arrayPokemons=[]
  const pokemonsPerPage=16
  if (pokemons?.length<pokemonsPerPage){
    arrayPokemons=[...pokemons]
    //console.log('esto es array pokemons',arrayPokemons)
  }else{
    const lastPokemon=currentPage*pokemonsPerPage
    arrayPokemons=pokemons?.slice(lastPokemon-pokemonsPerPage,lastPokemon)
  }

  //Numero de paginas
  let arrayPages=[]
  let quantityPages=Math.ceil(pokemons?.length/pokemonsPerPage)
  const pagesPerBlock=5
  let currentBlock=Math.ceil(currentPage/pagesPerBlock)

  //Hallando el bloque actual
  if (currentBlock*pagesPerBlock>=quantityPages){
    for (let i=currentBlock*pagesPerBlock-pagesPerBlock+1;i<=quantityPages;i++){
      arrayPages.push(i)
    }
  }else{
    for (let i=currentBlock*pagesPerBlock-pagesPerBlock+1;i<=currentBlock*pagesPerBlock;i++){
      arrayPages.push(i)
    }
  }

  //console.log('Esto es arrayPages',arrayPages)
  //console.log('esto es filter pokemon',filterPokemon)
  
  return (
    <>
    <div className='header'>
      <div></div>
      <img src={image} alt="pokedex"/>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div className='pokedex-content'>
        <h2>Welcome<span className='welcome-text'>{userName}</span>, here you can find your favorite pokemon</h2>
        <Form
          setPokeSearch={setPokeSearch}
          typeList={typeList}
          setFilterType={setFilterType}
        />
        <div className="pagination-content">
          <Pagination
            arrayPages={arrayPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            quantityPages={quantityPages}
          />
        </div>
        
        <div className='card-content'>
        {
          filterPokemon ?
            arrayPokemons?.map(pokemon=>
                (
                  <PokeCard
                  key={pokemon.url}
                  url={pokemon.url}
                  />  
                ))
                : 
                arrayPokemons?.map(pokemon=>
                (
                  <PokeCard
                    key={pokemon.url}
                    url={pokemon.url}
                    />  
                ))
        }

        </div>
        
        
        
        
    </div>
    </>
  )
}

export default PokedexScreen