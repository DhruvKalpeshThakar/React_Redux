// import { put, takeEvery } from "redux-saga/effects";
// import { SET_USER_DATA, USER_LIST } from "./constants";

// function* userList() {
//     const url = "https://dummyjson.com/users";
//     let data = yield fetch(url);
//     data = yield data.json()
//     yield put({type:SET_USER_DATA,data}) // putconnects with reducers just like action

//     console.warn(data);
// }



// function* sagaData() {          //* used to handle async data or to make function iteratable(generator function)
//     yield takeEvery(USER_LIST, userList)  //yield used to pause the function execution and return value
//     // takeEvery is a function which listens for every dispatched action of a specified type and runs a specified worker saga function for each action.
// }

// export default sagaData;