import { createSlice } from '@reduxjs/toolkit'

interface iData {
  accessToken?: string
  refreshToken?: string
}

const initialState = {
  user: {} as iData | null
}

const GlobalState = createSlice({
  name: "second",
  initialState,
  reducers: {
    getStart: (state, { payload }) => {
      state.user = payload
    },
    logout: (state,) => {
      state.user = null
    }
  }
});

export const {
  getStart,
  logout
} = GlobalState.actions

export default GlobalState.reducer