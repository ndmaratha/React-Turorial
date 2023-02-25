import { configureStore } from '@reduxjs/toolkit'
import incdecReducer from  './Reducers/Index'

export default configureStore({
    reducer :{
        number:incdecReducer
    }
})