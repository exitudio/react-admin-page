import * as ProductsQueryHelper from './ProductsQueryHelper'
import {SORT_NAME, SORT_TYPE, SORT_PRICE, SORT_INVENTORY, ASCEND, DESCEND} from '../ProductsDataType'
import * as SearchData from './testData/searchData'


describe('ProductsQueryHelper updateAllProducts()', () => {
    it('should return copy to allProducts, sortedProducts, searchProducts, ', () => {
        const expectedReturn = {
            allProducts: SearchData.data1,
            sortedProducts: SearchData.data1,
            searchProducts: SearchData.data1,
            hashMapProductById: SearchData.data1Hash,
        }
        expect( ProductsQueryHelper.updateAllProducts(SearchData.data1) ).toEqual(expectedReturn)
    })
})



describe('ProductsQueryHelper addSearchText()', () => {
    it('should search name, if data is "String"', () => {
        expect( ProductsQueryHelper.addSearchText('a', SearchData.data1) ).toEqual( SearchData.expectedDataSearchA )
    })
    it('should search name non-case sensitive', () => {
        expect( ProductsQueryHelper.addSearchText('A', SearchData.data1) ).toEqual( SearchData.expectedDataSearchA )
    })
    it('should search price that lower than the value, if data is "Number"', () => {
        expect( ProductsQueryHelper.addSearchText(50, SearchData.data1) ).toEqual( SearchData.expectedDataSearch100 )
    })
})



describe('ProductsQueryHelper sortBy()', () => {
    it('should sort name ascend', () => {
        expect( ProductsQueryHelper.sortBy(SORT_NAME, ASCEND, SearchData.data1) ).toEqual( SearchData.expectedSortNameAscend )
    })
    it('should sort name descend', () => {
        expect( ProductsQueryHelper.sortBy(SORT_NAME, DESCEND, SearchData.data1) ).toEqual( SearchData.expectedSortNameDescend )
    })

    it('should sort type ascend', () => {
        expect( ProductsQueryHelper.sortBy(SORT_TYPE, ASCEND, SearchData.data2) ).toEqual( SearchData.expectedSortTypeAscend )
    })

    it('should sort price descend', () => {
        expect( ProductsQueryHelper.sortBy(SORT_PRICE, DESCEND, SearchData.data2) ).toEqual( SearchData.expectedSortPriceDescend )
    })

    it('should sort inventory ascend', () => {
        expect( ProductsQueryHelper.sortBy(SORT_INVENTORY, ASCEND, SearchData.data2) ).toEqual( SearchData.expectedSortInventoryAscend )
    })
})

describe('ProductsQueryHelper getCurrentProducts()', () => {
    it('should show the first page', () => {
        const itemsPerPage = 3
        const currentPageId = 0

        const expectedObject = {
            currentPageId: 0,
            displayProducts: SearchData.expectedFirstPage,
            totalPage: 4,
        }
        expect( ProductsQueryHelper.getCurrentProducts(itemsPerPage, currentPageId, SearchData.data3) ).toEqual( expectedObject )
    })

    it('should show the first page when current pageId less than 0', () => {
        const itemsPerPage = 3
        const currentPageId = -1

        const expectedObject = {
            currentPageId: 0,
            displayProducts: SearchData.expectedFirstPage,
            totalPage: 4,
        }
        expect( ProductsQueryHelper.getCurrentProducts(itemsPerPage, currentPageId, SearchData.data3) ).toEqual( expectedObject )
    })

    it('should show the lage page when current pageId more than totalPage', () => {
        const itemsPerPage = 3
        const currentPageId = 20

        const expectedObject = {
            currentPageId: 3,
            displayProducts: SearchData.expectedLastPage,
            totalPage: 4,
        }
        expect( ProductsQueryHelper.getCurrentProducts(itemsPerPage, currentPageId, SearchData.data3) ).toEqual( expectedObject )
    })
})