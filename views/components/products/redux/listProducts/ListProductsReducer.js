import * as ListProductsAction from './ListProductsAction'
import {ITEMS_PER_PAGE_TYPES, ASCEND, DESCEND} from '../ProductsDataType'
import { updateAllProducts, getCurrentProducts, sortBy, addSearchText } from './ProductsQueryHelper'

const inititialState = {
    displayProducts: [],
    totalPage: 0,
    itemsPerPage: ITEMS_PER_PAGE_TYPES[0],
    currentPageId: 0,
    sortType: '',
    sortDirection: '',
    searchText: '',
    currentEdit: {},
    isEditAll: false,
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
                searchText: action.payload,
            }
        }
        case ListProductsAction.UPDATE_SORT:{
            let sortDirection = ''
            if( state.sortType === action.payload ){
                sortDirection = state.sortDirection===ASCEND ? DESCEND: ASCEND
            }else{
                sortDirection = ASCEND
            }
            let sortType = action.payload

            sortBy(sortType, sortDirection)
            addSearchText(state.searchText)

            let productsPageObject = getCurrentProducts(state.itemsPerPage, state.currentPageId)
            return {
                ...state,
                ...productsPageObject,
                sortType,
                sortDirection,
            }
        }
        case ListProductsAction.EDIT_PRODUCT:{
            const currentEdit = {...state.currentEdit}
            currentEdit[action.payload.productId] = action.payload.editMode
            return {
                ...state,
                currentEdit,
            }
        }
        case ListProductsAction.EDIT_ALL_PRODUCT:{
            const currentEdit = {...state.currentEdit}
            for(let i=0; i<state.products.length; i++){
                currentEdit[ state.products[i].id ] = action.payload
            }
            return {
                ...state,
                currentEdit,
                isEditAll: action.payload,
            }
        }
        default:
            return {
                ...state
            }
    }
}