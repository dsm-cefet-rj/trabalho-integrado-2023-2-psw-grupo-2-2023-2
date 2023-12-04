import { configureStore } from '@redux/toolkit'
 import timesReducer from './Slices/TimesSlice'

export const store = confiStore({
     reducer: {
          times: timesReducer
     }
})