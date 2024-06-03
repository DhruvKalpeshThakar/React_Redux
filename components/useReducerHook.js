//The useReducer hook in React is an alternative to useState for managing complex state logic in your components.

import { useReducer } from "react";
import { reducer } from "./redux/reducer";

//The useReducer hook takes two arguments: a reducer function and an initial state. 
// It returns an array with two elements: the current state and a dispatch function.


const initialState = { count: 0 };

//return is mandaory in ths function
function reducer(state, action) { // state has value and action will have type which can change with dispatch as shown below
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}


//use of dispatch
<button onClick={() => dispatch({type:"INCREMENT"}) } />

//dispatch triggers the action method

//It returns 2 elemnts of an array 
const [state, dispatch] = useReducer(reducer, initialState) // dispatch is quals to setState()

