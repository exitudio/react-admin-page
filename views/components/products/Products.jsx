import React from 'react'
import ProductHeader from './ProductsHeader.jsx'
import Table from './table/Table.jsx'
import ProductsFooter from './productsFooter/ProductsFooter.jsx'

export default class Product extends React.Component{
    render(){
        return(
            <div className="products">
                <ProductHeader />
                <Table/>
                <ProductsFooter/>
            </div>)
    }
}