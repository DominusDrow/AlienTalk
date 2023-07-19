import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: 'guest'
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSimple: (state) => {
      state.user = 'user'
    },
    logout: (state) => {
      state.user = 'guest'
    }
  }
})

// Action creators are generated for each case reducer function
export const { loginSimple, logout } = authSlice.actions

export default authSlice.reducer
