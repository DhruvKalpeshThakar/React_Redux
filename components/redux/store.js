//The file from which any data can be fetched

import { configureStore } from "@reduxjs/toolkit"; //

// import  createSagaMiddleware  from 'redux-saga'
// const sagaMddleware = createSagaMiddleware();
// import sagaData from './saga'


//Importing rootreducer because all reducers of the project are stored in root reducer
import rootReducer from "./rootReducer";

const store = configureStore({
    reducer: rootReducer,
    // middleware: () => [sagaMddleware]
})

// sagaMddleware.run(sagaData)

export default store