import axios from 'axios'
import { PRODUCTS_URL } from '../../../../config'
import {updateAllProductsAction} from '../listProducts/ListProductsAction'

export const GET_PRODUCTS_REQUEST = 'get_products_request'
export const GET_PRODUCTS_SUCCESS = 'get_products_success'
export const GET_PRODUCTS_FAIL = 'get_products_FAIL'

const MAX_LOAD_TIMES = 3
let loadTimes = 0

const loadProducts = (resolve, reject) => {
    axios.get(PRODUCTS_URL)
        .then(response => {
            resolve(response)
        })
        .catch(response => {
            loadTimes++
            if (loadTimes <= MAX_LOAD_TIMES) {
                loadProducts(resolve, reject)
            } else {
                reject(response)
            }
        })
}

export const getProductsAction = () => {
    loadTimes = 0
    return dispatch => {
        dispatch({ type: GET_PRODUCTS_REQUEST })

        return new Promise((resolve, reject) => {
                loadProducts(resolve, reject)
            })
            .then(response => {
                dispatch({ type: GET_PRODUCTS_SUCCESS })
                dispatch( updateAllProductsAction(response.data) )
            })
            .catch(response => {
                console.log(response)
                dispatch({
                    type: GET_PRODUCTS_FAIL,
                })
            })


    }
}
