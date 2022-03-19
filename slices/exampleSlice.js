import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0
}

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    // Example Reducers: Actions change state.
    incremented: state => {
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})

export const { incremented, decremented } = exampleSlice.actions

// Selectors
export const selectExample = (state) => state.example.value

export default exampleSlice.reducer
