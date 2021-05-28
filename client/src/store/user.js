import {createAsyncThunk, createReducer} from "@reduxjs/toolkit"
import axios from "axios"

export const login = createAsyncThunk("LOGIN", async (data) => {
    try {
        const user = await axios.post("http://localhost:3001/api/user/login", data)
        localStorage.setItem("token",user.data)
    } catch (err) {
        return console.log(err)
    }
})

export const registerUser = createAsyncThunk('REGISTER', async (data) => {
    try {
      const user = await axios.post(
        'http://localhost:3001/api/user/register',
        data,
      );
      return user.data;
    } catch (err) {
      return console.error(err);
    }
  });

  export const getUser = createAsyncThunk("SEARCH_SINGLE_USER", async() => {
    try {
      const user = await axios.get(`http://localhost:3001/api/me`, {
        headers: { Authorization: `token ${localStorage.getItem("token")}` },
      })
      return user.data 
    } catch (err) {
      return console.log(err)
    }
  });

  const initialState = { user: {} };

  const userReducer = createReducer(initialState, {
    [getUser.fulfilled]: (state, action) => {
      state.user = action.payload},
  })

  export default userReducer