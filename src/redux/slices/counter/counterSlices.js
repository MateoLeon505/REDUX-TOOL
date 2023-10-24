import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   value: 0,
// }

export const counterSlice = createSlice(
{
    name: 'counter',

    initialState: 
    {
        counter: 10
    },

    reducers: 
    {
            // Redux Toolkit nos permite escribir lógica "mutante" en reductores. Él en realidad no muta
            // el estado porque usa la biblioteca Immer, que detecta cambios en un "estado borrador" y
            // y produce un nuevo estado inmutable basado en esos cambios
        increment: (state) => 
        {
            state.counter += 1
        },

        decrement: (state) => 
        {
            state.counter -= 1
        },
    },
})

// Se generan creadores de acciones para cada función reductora de casos
export const { increment, decrement } = counterSlice.actions

//export default counterSlice.reducer