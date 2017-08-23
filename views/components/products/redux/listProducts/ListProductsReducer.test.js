import { Reducer } from 'redux-testkit'
import listProductsReducer, {inititialState} from './ListProductsReducer'
import * as Action from './ListProductsAction'
import * as ReducerData from './testData/reducerData'

describe('ListProductsReducer Redux', () => {
    it('should return intitial state', () => {
        expect(listProductsReducer(undefined, {})).toEqual( inititialState )
    })

    it('should update all products', () => {
        const action = Action.updateAllProductsAction(ReducerData.data1)
        const newState = {
            ...inititialState,
            allProducts: ReducerData.data1,
            sortedProducts: ReducerData.data1,
            searchProducts: ReducerData.data1,
            displayProducts: ReducerData.expectFirstPage,
            totalPage:2,
            hashMapProductById: ReducerData.data1Hash
        }
        Reducer(listProductsReducer).expect( action ).toReturnState(newState)
    })

    it('should update item per page to 10', () => {
        const action = Action.updateItemPerPageAction(10)
        const oldState = {
            ...inititialState,
            allProducts: ReducerData.data1,
            sortedProducts: ReducerData.data1,
            searchProducts: ReducerData.data1,
            displayProducts: ReducerData.expectFirstPage,
            totalPage:2,
        }
        const newState = {
            ...oldState,
            displayProducts: ReducerData.data1,
            totalPage:1,
            itemsPerPage:10,
        }
        Reducer(listProductsReducer).withState(oldState).expect( action ).toReturnState(newState)
    })

    it('should change current page', () => {
        const action = Action.updateCurrentPageAction(4)
        const oldState = {
            ...inititialState,
            allProducts: ReducerData.data1,
            sortedProducts: ReducerData.data1,
            searchProducts: ReducerData.data1,
            displayProducts: ReducerData.expectFirstPage,
            totalPage:2,
        }
        const newState = {
            ...oldState,
            displayProducts: ReducerData.expectChangePage,
            totalPage:2,
            currentPageId:1,
        }
        Reducer(listProductsReducer).withState(oldState).expect( action ).toReturnState(newState)
    })

    it('should go to next page', () => {
        const action = Action.nextPageAction()
        const oldState = {
            ...inititialState,
            allProducts: ReducerData.data1,
            sortedProducts: ReducerData.data1,
            searchProducts: ReducerData.data1,
            displayProducts: ReducerData.expectFirstPage,
            totalPage:2,
        }
        const newState = {
            ...oldState,
            displayProducts: ReducerData.expectChangePage,
            totalPage:2,
            currentPageId:1,
        }
        Reducer(listProductsReducer).withState(oldState).expect( action ).toReturnState(newState)
    })

    it('should not go back if current page is the first page', () => {
        const action = Action.prevPageAction()
        const oldState = {
            ...inititialState,
            allProducts: ReducerData.data1,
            sortedProducts: ReducerData.data1,
            searchProducts: ReducerData.data1,
            displayProducts: ReducerData.expectFirstPage,
            totalPage:2,
        }
        Reducer(listProductsReducer).withState(oldState).expect( action ).toReturnState(oldState)
    })

    /* it('should search from sort array', () => {
        const action = Action.searchAction('abc')
        const oldState = {
            ...inititialState,
            allProducts: ReducerData.data1,
            sortedProducts: ReducerData.data1,
            searchProducts: ReducerData.data1,
            displayProducts: ReducerData.expectFirstPage,
            totalPage:2,
        }
        Reducer(listProductsReducer).withState(oldState).expect( action ).toReturnState(oldState)
    }) */
})