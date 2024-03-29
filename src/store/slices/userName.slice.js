import {createSlice} from '@reduxjs/toolkit'

export const userNameSlice=createSlice({
    name:'userName',
    initialState:'',
    reducers:{
        setNameGlobal:(state,action)=>action.payload
    }
})

export const {setNameGlobal}=userNameSlice.actions
export default userNameSlice.reducer