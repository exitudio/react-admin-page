import * as Actions from './actions'

export default function productsReducer(state={},action){
    switch(action.type){
        case Actions.GET_ITEM_SUCCESS:
            return {
                itemsInStore:action.payload
            }
        case Actions.GET_ITEM_FAIL:
            return {
                response:action.payload
            }

        default :
            return state
    }
}