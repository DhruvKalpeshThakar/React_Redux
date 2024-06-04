//memo from "React" - 
// If memo used then the compo./function with which it is used will only re-render when the props are changed.

import { useCallback } from "react";



//Scenario :- We have used memo but the as the same function re-renders again n again then the compo. also re-renders so to stop that
//we can use useCallback Hook and update the function as below

const getAdjective = useCallback(() => {
    return "another"
},[],)

//as a result It freeze the above function when whole app re-renders


// In Short It memoizes the whole function