import { INCREMENT, DECREMENT } from "./constants";


const increase = (data) => {
    // console.log(data)
    return {
        type: INCREMENT,
        payload: data
    }
}

const decrease = (data) => {
    return {
        type: DECREMENT,
        payload: data
    }
}

export {increase,decrease};