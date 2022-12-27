import {createSlice } from '@reduxjs/toolkit'
const initialState=[]

export const addRemoveCart = createSlice({
    name:"counter",
    initialState,
    reducers:{
        add:(state,action)=>{
            state.push(action.payload)
        },
        remove:(state,action)=>{
            return state.filter((item)=>item.id !== action.payload)
        }
    }
})
export const { add, remove } = addRemoveCart.actions
export default addRemoveCart.reducer