import {createAsyncThunk, createReducer} from "@reduxjs/toolkit"
import axios from "axios"

export const login = createAsyncThunk("LOGIN", async (data) => {
    try {
        const user = await axios.post("http://localhost:3001/api/user/login", data)
    } catch (err) {
        return console.log(err)
    }
})

export const register = createAsyncThunk('REGISTER', async (data) => {
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

  const initialState = { user: {} };

  const userReducer = createReducer(initialState, {
      
  })