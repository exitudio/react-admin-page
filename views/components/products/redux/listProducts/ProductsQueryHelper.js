let allProducts = []
let sortedProducts = []
let searchProducts = []
let dictAllProductsById = {}
let dictProductsType = {}
let dictSortType = {}

let currentSortType = ''
let currentDirection = ''


export const updateAllProducts = products => {
    allProducts = products
    sortedProducts = [...allProducts] //don't mutate me!!!
    searchProducts = [...sortedProducts]
    dictAllProductsById = {}
    dictProductsType = []
    dictSortType = {}
    for(let i=0; i<allProducts.length; i++){
        //update dictionary (hashMap) to get product by id
        dictAllProductsById[ allProducts[i].id ] = allProducts[i]

        if( !dictProductsType[ allProducts[i].type ] ){
            dictProductsType[ allProducts[i].type ] = []
        }
        dictProductsType[ allProducts[i].type ].push( allProducts[i] )
    }
} 

export const addSearchText = text => {
    const isSearchIsNumber = text!=='' && !isNaN(text)
    searchProducts = [] 

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

export const sortBy = (sortType, direction)=>{
    if( !dictSortType[sortType] ){
        dictSortType[sortType] = {}
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
    const products = []

    //check start and end
    const startId = itemsPerPage * currentPageId
    const endId = (itemsPerPage * (currentPageId+1) ) - 1

    //update new products to display
    for( let i=startId; i<=endId && i <= searchProducts.length-1; i++ ){
        products.push( searchProducts[i] )
    }
    return {
        products,
        currentPageId,
        totalPage,
    }
}