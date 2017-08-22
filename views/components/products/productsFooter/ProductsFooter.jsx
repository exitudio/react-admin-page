import React from 'react'
import './ProductsFooter.scss'
import Dropdown from '../../sharedComponent/dropdown/Dropdown.jsx'
import Button from '../../sharedComponent/button/Button.jsx'
import backArrow from './images/backArrow.png'
import nextArrow from './images/nextArrow.png'

export default props=>{
    return <div className="products-footer">
                <div className="footer-left">
                    <div className="description">Items per page:</div>
                    <Dropdown className="item-per-page-dropdown"/>
                </div>
                <div className="footer-right">
                    <Button className="next-back-button">
                        <img src={nextArrow} alt="arrow"/>
                    </Button>
                    <Dropdown className="page-dropdown"/>
                    <Button className="next-back-button" disable>
                        <img src={backArrow} alt="arrow"/>
                    </Button>
                </div>
            </div>
}