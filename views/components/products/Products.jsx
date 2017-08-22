import React from 'react'
import ProductHeader from './productsHeader/ProductsHeader.jsx'
import Table from './productsTable/Table.jsx'
import ProductsFooter from './productsFooter/ProductsFooter.jsx'

export default class Product extends React.Component{
    componentDidMount(){
        
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