import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
const SelectType = () => {

  const [types, setTypes] = useState()
  useEffect(() => {
    const URL='https://pokeapi.co/api/v2/type/'
        axios.get(URL)
             .then(res=>setTypes(res.data.results))
             .catch(err=>console.log(err))
    
    }, [])

   console.log(types)
   const selectType=()=>{

   }
    
  return (
    <form>
         <select name="select">
         <option value="All Elements">All Elements</option>
            {
                types?.map(type=>(
                <option key={type.url} value={type.name}>{type.name}</option>
                        ))
            }
        </select>
    <button onClick={selectType}>Search</button>


    </form>
   
  )
}

export default SelectType