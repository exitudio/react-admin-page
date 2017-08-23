import React from 'react'
import {connect} from 'react-redux'
import './ProductsFooter.scss'
import {ITEMS_PER_PAGE_TYPES} from '../redux/ProductsDataType'
import store from '../../../redux/store'
import {updateItemPerPageAction, updateCurrentPageAction, prevPageAction, nextPageAction} from '../redux/listProducts/ListProductsAction'
import Dropdown from '../../sharedComponent/dropdown/Dropdown.jsx'
import Button from '../../sharedComponent/button/Button.jsx'
import backArrow from './images/backArrow.png'
import nextArrow from './images/nextArrow.png'

const itemPerPageTypes = ITEMS_PER_PAGE_TYPES.map( 
        item=>(
            { 
                value: item,
                name: item,
            }
        ) 
)
const onItemsPerPageChange = value =>{
    store.dispatch(updateItemPerPageAction(value))
}
const onPageChange = value =>{
    store.dispatch(updateCurrentPageAction(value-1))
}
const onClickBack = ()=>{
    store.dispatch(prevPageAction())
}
const onClickNext = ()=>{
    store.dispatch(nextPageAction())
}
const ProductsFooter = props=>{
    const pageNumbers = []
    for(let i=0; i<props.totalPage; i++){
        pageNumbers.push({
            value: i+1,
            name: i+1,
        })
    }
    return <div className="products-footer">
                <div className="footer-left">
                    <div className="description">Items per page:</div>
                    <Dropdown className="item-per-page-dropdown" 
                              dataArray={itemPerPageTypes} 
                              value={props.itemsPerPage}
                              onChange={onItemsPerPageChange}/>
                </div>
                <div className="footer-right">
                    <Button className="next-back-button" onClick={onClickNext} disable={props.currentPageId >= props.totalPage-1}>
                        <img src={nextArrow} alt=">"/>
                    </Button>
                    <Dropdown className="page-dropdown" 
                              dataArray={pageNumbers} 
                              value={props.currentPageId+1} 
                              onChange={onPageChange}/>
                    <Button className="next-back-button" onClick={onClickBack} disable={props.currentPageId===0}>
                        <img src={backArrow} alt="<"/>
                    </Button>
                </div>
            </div>
}
const mapStateToProps = state=>{
    return {
        totalPage: state.listProductsReducer.totalPage,
        itemsPerPage: state.listProductsReducer.itemsPerPage,
        currentPageId: state.listProductsReducer.currentPageId,
    }
}
export default connect(mapStateToProps)(ProductsFooter)