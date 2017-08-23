import React from 'react'
import ProductHeader from './productsHeader/ProductsHeader.jsx'
import Table from './productsTable/Table.jsx'
import ProductsFooter from './productsFooter/ProductsFooter.jsx'
import store from '../../redux/store'
import * as LoadProductsAction from './redux/loadProducts/LoadProductsAction'

export default class Product extends React.Component{
    componentDidMount(){
        store.dispatch( LoadProductsAction.getProductsAction(LoadProductsAction.GET_PRODUCTS_REQUEST) )
    }
    render(){
        return(
            <div className="products">
                <ProductHeader />
                <Table/>
                <ProductsFooter/>
            </div>)
    }
}