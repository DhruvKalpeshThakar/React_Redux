import { ADD_TO_CART, REMOVE_FROM_CART,USER_LIST } from '../redux/constants'


//addtoCart Function with the type and data 
export function addtoCart(item) {  //Function invoking action is known as Action
    // console.log("I am in Action",item);
    return {
        type: ADD_TO_CART,
        data: item
    }
}

export function removefromCart(item) {
    return {
        type: REMOVE_FROM_CART,
        data: item
    }
}

// export function getUserList() {
//     return {
//       type: USER_LIST,
//     };
//   }
