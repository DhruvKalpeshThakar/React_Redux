import { useMemo } from "react"

//created an lengthy array
const nums = new Array(30_00_000).fill(0).map((_, i) => {
    return {
        index: i,
        isMagical: i === 29_00_000
    }
})

//with a variable trying to find this
const magical1 = nums.find(item => item.isMagical === true) //Now if some dependant state changes then whole component... 
// and this part as well will rerender which is very EXPENSIVE COMPUTATION



//useMemo Hook is the solution after 1st render useMemo memoizes ,

//And it takes 2 parameter, FIRST :- the expression, SECOND:- the dependancy (here it again re-renders only when "nums") changes 
const magical = useMemo(nums.find(item => item.isMagical === true,[nums]))


