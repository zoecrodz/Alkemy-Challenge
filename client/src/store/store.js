import {configureStore} from "@reduxjs/toolkit"
import logger from "redux-logger";
import userReducer from "./user"
import transactionReducer from "./transaction"

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        user: userReducer,
        transaction: transactionReducer
    }
})

export default store