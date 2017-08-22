import React from 'react'
import './ProductsHeader.scss'
import Button from '../../sharedComponent/button/Button.jsx'
import SearchBar from './searchBar/SearchBar.jsx'

const ProductHeader = () => {
    return <div className="products-header">
                <div className="products-header-top">
                    <div className="left-header">Products</div>
                    <div className="right-header">
                        <Button className="button-right">Export</Button>
                        <Button className="button-right">Import</Button>
                        <Button className="button-right blue">Add Product</Button>
                    </div>
                </div>

                <SearchBar />
            </div>
}

export default ProductHeader