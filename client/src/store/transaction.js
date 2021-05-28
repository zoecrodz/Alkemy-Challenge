import {createAsyncThunk, createReducer} from "@reduxjs/toolkit"
import axios from "axios"

export const newTransaction = createAsyncThunk("POST_ENTRY_TRANSACTION", async (data) => {
    const {info, userId} = data
    try {
        const transaction = await axios
        .post(`http://localhost:3001/api/transaction/${userId}`, info)
        return transaction.data
    } catch (err) {
        return console.log(err)
    }
})

export const getTransactions = createAsyncThunk ("GET_TRANSACTIONS_BY_USERID", async (id) => {
    try {
        const all = await axios.get(`http://localhost:3001/api/transaction/${id}`)
        return all.data
    } catch (err) {
        console.log(err)
    }
})

const initialState = { all: {} };

const transactionReducer = createReducer(initialState, {
    [getTransactions.fulfilled]: (state, action) => {
        state.all = action.payload
    }
})

export default transactionReducer