import React from 'react'
//Importando useForm hook
import {useForm} from 'react-hook-form'
//Importando useDispatch hook
import {useDispatch} from 'react-redux'
//Importando useNavigate hook
import {useNavigate} from 'react-router-dom'
//Trayendo el setGobalName action
import {setNameGlobal } from '../../store/slices/userName.slice'

const HomeInput = ({setIsLogged}) => {
  //Usando useForm hook
  const {handleSubmit,register,reset}= useForm()

  //Usando useDispatch y useNavigate hooks
  const dispatch=useDispatch()
  const navigate=useNavigate()

  //Creando funcion submit
  const submit = (data)=>{
    dispatch(setNameGlobal(data.userName))
    reset({
      userName:''
    }
    )
    setIsLogged(true)
    navigate('/pokedex')
  }
  return (
    <form onSubmit={handleSubmit(submit)} className='home-input'>
        <input type="text" required placeholder='Your name...' {...register('userName')}/>
        <button>Lets Go!</button>
    </form>
  )
}

export default HomeInput