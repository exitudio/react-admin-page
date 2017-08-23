import {SORT_NAME, SORT_TYPE, SORT_PRICE, SORT_INVENTORY, ASCEND} from '../ProductsDataType'

export const updateAllProducts = products => {
    const hashMapProductById = {}
    for(let i=0; i<products.length; i++){
        hashMapProductById[ products[i].id ] = products[i]
    }
    return {
        allProducts: [...products],
        sortedProducts: [...products],
        searchProducts: [...products],
        hashMapProductById,
    }
}

export const addSearchText = (text, sortedProducts) => {
    //check search text is not empty
    let searchProducts
    if(text === ''){
        return searchProducts = [...sortedProducts]
    }
    
    searchProducts = [] 
    const isSearchIsNumber = text!=='' && !isNaN(text)

    if(isSearchIsNumber){
        const searchNumber = (+text) 
        for(let i=0; i<sortedProducts.length; i++){
            if (sortedProducts[i].price <= searchNumber){
                searchProducts.push(sortedProducts[i])
            }
        }
    }else{
        const searchText = text.toLowerCase()
        for(let i=0; i<sortedProducts.length; i++){
            if (sortedProducts[i].name.toLowerCase().indexOf(searchText) !== -1){
                searchProducts.push(sortedProducts[i])
            }
        }
    }
    return searchProducts
}

export const sortBy = (sortType, sortDirection, allProducts)=>{
    let sortedProducts = [...allProducts]
    if(sortType === SORT_NAME || sortType === SORT_TYPE){
        if( sortDirection === ASCEND){
            sortedProducts.sort((a,b)=>{
                let x = a[sortType].toUpperCase()
                let y = b[sortType].toUpperCase()
                if (x > y) {
                    return 1
                }else if (x < y) {
                    return -1
                }else{
                    return 0
                }
            })
        }else{
            sortedProducts.sort((a,b)=>{
                let x = b[sortType].toUpperCase()
                let y = a[sortType].toUpperCase()
                if (x > y) {
                    return 1
                }else if (x < y) {
                    return -1
                }else{
                    return 0
                }
            })

        }
    }else if(sortType === SORT_PRICE || sortType === SORT_INVENTORY){
        if( sortDirection === ASCEND){
            sortedProducts.sort((a,b)=>{
                return a[sortType] - b[sortType]
            })
        }else{
            sortedProducts.sort((a,b)=>{
                return b[sortType] - a[sortType]
            })
        }
    }
    return sortedProducts
}

export const getCurrentProducts = (itemsPerPage, currentPageId, searchProducts)=>{
    //reset all data
    const totalPage = Math.ceil(searchProducts.length/itemsPerPage)
    if( currentPageId > totalPage-1){
        currentPageId = totalPage-1
    }
    if( currentPageId < 0){
        currentPageId = 0
    }
    const displayProducts = []

    //check start and end
    const startId = itemsPerPage * currentPageId
    const endId = (itemsPerPage * (currentPageId+1) ) - 1

    //update new products to display
    for( let i=startId; i<=endId && i <= searchProducts.length-1; i++ ){
        displayProducts.push( searchProducts[i] )
    }
    return {
        displayProducts,
        currentPageId,
        totalPage,
    }
}
