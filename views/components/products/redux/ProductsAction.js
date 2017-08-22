import axios from 'axios'

export const GET_PRODUCTS_REQUEST = 'get_products_request'
export const GET_PRODUCTS_SUCCESS = 'get_products_success'
export const GET_PRODUCTS_FAIL = 'get_products_FAIL'

export function getProductsAction() {
    return dispatch => {
        dispatch({ type: GET_PRODUCTS_REQUEST })

        return axios.get('/services/getitem')
            .then(response => {
                // console.log(response.data)
                dispatch(
                    {
                        type: GET_PRODUCTS_SUCCESS,
                        payload: response.data
                    }
                )
            })
            .catch(response => {
                dispatch({ type: GET_PRODUCTS_FAIL, payload: response })
            })
    }
}