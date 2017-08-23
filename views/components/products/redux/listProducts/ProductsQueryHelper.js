import {SORT_NAME, SORT_TYPE, SORT_PRICE, SORT_INVENTORY, ASCEND} from '../ProductsDataType'

let allProducts = []
let sortedProducts = []
let searchProducts = []


export const updateAllProducts = products => {
    allProducts = products
    sortedProducts = [...allProducts]
    searchProducts = [...sortedProducts]
}

export const addSearchText = text => {
    //check search text is not empty
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
}

export const sortBy = (sortType, sortDirection)=>{
    sortedProducts = [...allProducts]
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
}

export const getCurrentProducts = (itemsPerPage, currentPageId)=>{
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
