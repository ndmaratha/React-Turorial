import { createSlice } from "@reduxjs/toolkit";

export const indecslice=createSlice({
name:'InDec',
initialState: 20,
reducers :{ 
    Inc : (state,action) => {
        return state+=action.payload;
    },
    Dec : (state,action) => {
       return state-=action.payload;
    }
}
})
export const {Inc,Dec} = indecslice.actions;
export default indecslice.reducer;