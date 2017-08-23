import * as ListProductsAction from './ListProductsAction'
import {ITEMS_PER_PAGE_TYPES, ASCEND, DECEND} from '../ProductsDataType'
import { updateAllProducts, getCurrentProducts, addSearchText } from './ProductsQueryHelper'

const inititialState = {
    products: [],
    totalPage: 0,
    itemsPerPage: ITEMS_PER_PAGE_TYPES[0],
    currentPageId: 0,
    sortType: '',
    sortDirection: '',
}

export default function productsReducer(state = inititialState, action) {
    switch (action.type) {
        case ListProductsAction.UPDATE_ALL_PRODUCTS:{
            updateAllProducts(action.payload)
            let productsPageObject = getCurrentProducts(state.itemsPerPage, state.currentPageId)
            return {
                ...state,
                ...productsPageObject
            }
        }
        case ListProductsAction.UPDATE_ITEMS_PER_PAGE:{
            let productsPageObject = getCurrentProducts(action.payload, state.currentPageId)
            return {
                ...state,
                ...productsPageObject,
                itemsPerPage: action.payload,
            }
        }
        case ListProductsAction.UPDATE_CURRENT_PAGE:{
            let productsPageObject = getCurrentProducts(state.itemsPerPage, action.payload)
            return {
                ...state,
                ...productsPageObject,
                currentPageId: action.payload,
            }
        }
        case ListProductsAction.NEXT_PAGE:{
            let nextPage = state.currentPageId+1
            let productsPageObject = getCurrentProducts(state.itemsPerPage, nextPage)
            return {
                ...state,
                ...productsPageObject,
            }
        }
        case ListProductsAction.PREV_PAGE:{
            let prevPage = state.currentPageId-1
            let productsPageObject = getCurrentProducts(state.itemsPerPage, prevPage)
            return {
                ...state,
                ...productsPageObject,
            }
        }
        case ListProductsAction.SEARCH:{
            addSearchText(action.payload)
            let productsPageObject = getCurrentProducts(state.itemsPerPage, state.currentPageId)
            return {
                ...state,
                ...productsPageObject,
            }
        }
        case ListProductsAction.UPDATE_SORT:{
            let productsPageObject = getCurrentProducts(state.itemsPerPage, state.currentPageId)
            let sortDirection = ''
            if( state.sortType === action.payload ){
                sortDirection = state.sortDirection===ASCEND ? DECEND: ASCEND
            }else{
                sortDirection = ASCEND
            }
            return {
                ...state,
                ...productsPageObject,
                sortType: action.payload,
                sortDirection,
            }
        }
        default:
            return state
    }
}