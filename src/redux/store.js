import { configureStore } from '@reduxjs/toolkit'
import charactersSlice from './charactersSlice'
import quotesSlice from './quotesSlices'

export const store = configureStore({
    reducer: {
        characters: charactersSlice,
        quotes: quotesSlice,
    },
})
