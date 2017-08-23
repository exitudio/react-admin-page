export const UPDATE_ALL_PRODUCTS = 'update_all_products'
export const UPDATE_ITEMS_PER_PAGE = 'update_items_per_page'
export const UPDATE_CURRENT_PAGE = 'update_current_page'
export const NEXT_PAGE = 'next_page'
export const PREV_PAGE = 'prev_page'
export const SEARCH = 'search'
export const UPDATE_SORT = 'update_sort'
export const EDIT_PRODUCT = 'edit_product'
export const EDIT_ALL_PRODUCT = 'edit_all_product'

export const updateAllProductsAction = products => {
    let newProducts = []
    for(let i=0; i<products.length; i++){
        let localProductJSON = localStorage.getItem(products[i].id)
        let newProduct = ''
        if(localProductJSON!==null){
            console.log(localProductJSON)
            // console.log( JSON.parse( localStorage.getItem(products[i].id) ) )
            newProduct = JSON.parse( localProductJSON )
        }else{
            newProduct = {...products[i]}
        }
        newProducts.push(newProduct)
    }
    return {
        type: UPDATE_ALL_PRODUCTS,
        payload: newProducts,
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


export const searchAction = text => {
    return {
        type: SEARCH,
        payload: text,
    }
}
export const updateSortAction = (sortType) => {
    return {
        type: UPDATE_SORT,
        payload: sortType,
    }
}
export const setEditModeAction = (product, editMode, isNeedUpdate) => {
    if(isNeedUpdate){
        localStorage.setItem(product.id, JSON.stringify(product))
    }
    return {
        type: EDIT_PRODUCT,
        payload: {editMode, productId:product.id, isNeedUpdate}
    }
}
export const setEditALLAction = (editMode) => {
    return {
        type: EDIT_ALL_PRODUCT,
        payload: editMode,
    }
}