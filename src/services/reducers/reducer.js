
import { INCREMENT, DECREMENT,ADD } from "../actions/constants";

let count =0


function counter(state = count, action) {
    switch (action.type) {
        case INCREMENT:
            
            return state+=1
        case DECREMENT:
            return (state>0)?state-=1:state;
       
        default:
            return state
    }
}



export {counter}


