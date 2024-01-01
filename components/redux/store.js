//The file from which any data can be fetched

import { configureStore } from "@reduxjs/toolkit";

//Importing rootreducer because all reducers of the project are stored in root reducer
import rootReducer from "./rootReducer";

const store = configureStore({
    reducer: rootReducer
})

export default store