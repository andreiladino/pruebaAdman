import { SET_ID } from '../actions'

export const user = (state = {}, action) => {
    switch(action.type){
        case SET_ID: 
            return { ...state, id: action.payload}
        default:
            return state;
    }
}