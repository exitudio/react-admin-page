import {CHANGE_PAGE,HOME_PAGE} from '../actions/pageActions'

let defaultState = {
    currentPage:HOME_PAGE
}
export default function pageReducer(state=defaultState, action){
    switch (action.type){
        case CHANGE_PAGE: 
            return {
                currentPage: action.payload
            }
        default:
            return state
    }
}