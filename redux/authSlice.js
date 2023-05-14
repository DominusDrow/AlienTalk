import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSimple: (state) => {
      state.user = true;
    },
    logout: (state) => {
      state.user = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { loginSimple, logout } = authSlice.actions

export default authSlice.reducer
