export const UPDATE_ALL_PRODUCTS = 'update_all_products'
export const UPDATE_ITEMS_PER_PAGE = 'update_items_per_page'
export const UPDATE_CURRENT_PAGE = 'update_current_page'
export const NEXT_PAGE = 'next_page'
export const PREV_PAGE = 'prev_page'
export const SEARCH = 'search'
export const UPDATE_SORT = 'update_sort'

export const updateAllProductsAction = products => {
    return {
        type: UPDATE_ALL_PRODUCTS,
        payload: products,
    }
}

export const updateItemPerPageAction = itemPerPage => {
    return {
        type: UPDATE_ITEMS_PER_PAGE,
        payload: itemPerPage,
    }
}
export const updateCurrentPageAction = currentPage => {
    return {
        type: UPDATE_CURRENT_PAGE,
        payload: currentPage,
    }
}
export const nextPageAction = ()=>({type: NEXT_PAGE})
export const prevPageAction = ()=>({type: PREV_PAGE})


export const search = text => {
    return {
        type: SEARCH,
        payload: text,
    }
}
export const updateSort = (sortType) => {
    return {
        type: UPDATE_SORT,
        payload: sortType,
    }
}