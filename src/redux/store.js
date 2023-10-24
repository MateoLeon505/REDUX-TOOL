// import { configureStore } from '@reduxjs/toolkit'

// export const store = configureStore({
//   reducer: {},
// })

import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter'

export const store = configureStore({
  reducer: 
  {
    counter: counterSlice.reducer,
  },
})