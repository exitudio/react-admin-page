import * as LoadProductsActions from './LoadProductsAction'

const inititialState = {
    loadStatus: '',
}

export default function productsReducer(state = inititialState, action) {
    switch (action.type) {
        case LoadProductsActions.GET_PRODUCTS_REQUEST:{
            return {
                ...state,
                loadStatus: LoadProductsActions.GET_PRODUCTS_REQUEST,
            }
        }
        case LoadProductsActions.GET_PRODUCTS_FAIL:{
            return {
                ...state,
                loadStatus: LoadProductsActions.GET_PRODUCTS_FAIL,
            }
        }
        case LoadProductsActions.GET_PRODUCTS_SUCCESS:{
            return {
                loadStatus: LoadProductsActions.GET_PRODUCTS_SUCCESS,
            }
        }

        default:
            return state
    }
}