import  {createSlice} from "@reduxjs/toolkit"

const theme=createSlice({
    name:"Theme",
    initialState:{
        isLight:true,
    },
    reducers:{

        setIsLight:(initialState,action)=>{
           initialState.isLight= !initialState.isLight
        //    stateObj.isLight= !stateObj.isLight
     }

    }
})

export const {setIsLight}=theme.actions;
export default theme.reducer;