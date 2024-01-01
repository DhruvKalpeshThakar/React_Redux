import { ADD_TO_CART } from '../redux/constants'


//addtoCart Function with the type and data 
export function addtoCart(item) {
    return {
        type: ADD_TO_CART,
        data: item
    }
}