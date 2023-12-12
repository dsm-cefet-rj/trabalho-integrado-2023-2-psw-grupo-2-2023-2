import { configureStore } from '@reduxjs/toolkit';
import campeonatosReducer from './slices/campeonatos/CampeonatosSlice'
export const store = configureStore({
  reducer:{
    campeonatos:campeonatosReducer
  }
})