import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  contract: null,
}

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setContract: (state, action: PayloadAction<object | null>) => {
      state.contract = action.payload !== null ? action.payload : null
    },
  },
})

// Action creators are generated for each case reducer function
export const { setContract } = cryptoSlice.actions

export default cryptoSlice.reducer
