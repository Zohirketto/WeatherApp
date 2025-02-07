import { configureStore} from '@reduxjs/toolkit'
import WeatherSlicereducer from '../features/WeatherSlice'
export const store = configureStore({
    reducer:{
        weather:WeatherSlicereducer
    }
})