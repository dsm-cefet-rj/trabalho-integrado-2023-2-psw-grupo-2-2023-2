import { configureStore } from '@reduxjs/toolkit';
import campeonatosReducer from './slices/CampeonatosSlice'
export const store = configureStore({
  reducer:{
    campeonatos:campeonatosReducer
  }
})