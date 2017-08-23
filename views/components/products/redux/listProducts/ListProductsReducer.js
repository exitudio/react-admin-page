import * as ListProductsAction from './ListProductsAction'
import {ITEMS_PER_PAGE_TYPES, ASCEND, DESCEND} from '../ProductsDataType'
import { updateAllProducts, getCurrentProducts, sortBy, addSearchText } from './ProductsQueryHelper'

export const inititialState = {
    //productsArrayObject
    allProducts: [],
    sortedProducts: [],
    searchProducts: [],
    hashMapProductById: {},

    //productsPageObject
    displayProducts: [],
    totalPage: 0,
    currentPageId: 0,

    itemsPerPage: ITEMS_PER_PAGE_TYPES[0],
    sortType: '',
    sortDirection: '',
    searchText: '',
    currentEdit: {},
    isEditAll: false,
}

export default function productsReducer(state = inititialState, action) {
    switch (action.type) {
        case ListProductsAction.UPDATE_ALL_PRODUCTS:{
            let productsArrayObject = updateAllProducts(action.payload)
            let productsPageObject = getCurrentProducts(state.itemsPerPage, state.currentPageId, productsArrayObject.searchProducts)
            return {
                ...inititialState,
                ...productsPageObject,
                ...productsArrayObject,
            }
        }
        case ListProductsAction.UPDATE_ITEMS_PER_PAGE:{
            let productsPageObject = getCurrentProducts(action.payload, state.currentPageId, state.searchProducts)
            return {
                ...state,
                ...productsPageObject,
                itemsPerPage: action.payload,
            }
        }
        case ListProductsAction.UPDATE_CURRENT_PAGE:{
            let productsPageObject = getCurrentProducts(state.itemsPerPage, action.payload, state.searchProducts)
            return {
                ...state,
                ...productsPageObject,
            }
            
        }
        case ListProductsAction.NEXT_PAGE:{
            let nextPage = state.currentPageId+1
            let productsPageObject = getCurrentProducts(state.itemsPerPage, nextPage, state.searchProducts)
            return {
                ...state,
                ...productsPageObject,
            }
        }
        case ListProductsAction.PREV_PAGE:{
            let prevPage = state.currentPageId-1
            let productsPageObject = getCurrentProducts(state.itemsPerPage, prevPage, state.searchProducts)
            return {
                ...state,
                ...productsPageObject,
            }
        }
        case ListProductsAction.SEARCH:{
            let searchProducts = addSearchText(action.payload, state.sortedProducts)
            let productsPageObject = getCurrentProducts(state.itemsPerPage, state.currentPageId, searchProducts)
            return {
                ...state,
                ...productsPageObject,
                searchProducts,
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

            let sortedProducts = sortBy(sortType, sortDirection, state.allProducts)
            let searchProducts = addSearchText(state.searchText, sortedProducts)

            let productsPageObject = getCurrentProducts(state.itemsPerPage, state.currentPageId, searchProducts)
            return {
                ...state,
                ...productsPageObject,
                sortedProducts,
                searchProducts,
                sortType,
                sortDirection,
            }
        }
        case ListProductsAction.EDIT_PRODUCT:{
            const currentEdit = {...state.currentEdit}
            currentEdit[action.payload.productId] = action.payload.editMode // mutate...
            let isEditAll = state.isEditAll
            if(action.payload.editMode===false){
                isEditAll = false
            }

            console.log(action.payload.editMode, action.payload.isNeedUpdate)
            if( !action.payload.editMode && action.payload.isNeedUpdate ){
                // calculate page again if data change
                let searchProducts = addSearchText(state.searchText, state.sortedProducts)
                let productsPageObject = getCurrentProducts(state.itemsPerPage, state.currentPageId, searchProducts)
                console.log(productsPageObject)
                return {
                    ...state,
                    currentEdit,
                    isEditAll,
                    ...productsPageObject
                }
            }

            return {
                ...state,
                currentEdit,
                isEditAll,
            }
        }
        case ListProductsAction.EDIT_ALL_PRODUCT:{
            const currentEdit = {...state.currentEdit}
            for(let i=0; i<state.allProducts.length; i++){
                currentEdit[ state.allProducts[i].id ] = action.payload
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