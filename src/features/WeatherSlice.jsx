import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'
const initialState ={
    Data:{},
    loading:false,
    error:""
}

export const WeatherSlice = createSlice({
    name:"weatherApp",
    initialState,
    reducers:{
    },
    extraReducers: (builder)=>{
        builder.addCase(fetch_weather.fulfilled,(state,action)=>{
              state.Data=action.payload,
              state.loading = false,
              state.error =""
        })
        .addCase(fetch_weather.pending,(state,action)=>{
            state.Data={},
              state.loading = true,
              state.error =""
        })
        .addCase(fetch_weather.rejected,(state,action)=>{
            state.Data={},
              state.loading = false,
              state.error =action.payload
        })

    }
 
})


export const  fetch_weather = createAsyncThunk("weather/fetch_weather",async(city,thunk)=>{
    try {
        const ApiKey = '1a35393c7baa6457b4599dfab814610c'
       const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`)
       return response.data
    }
    catch(e){
          return thunk.rejectWithValue(e.message)
    }
})


export const {}=WeatherSlice.actions
export default WeatherSlice.reducer