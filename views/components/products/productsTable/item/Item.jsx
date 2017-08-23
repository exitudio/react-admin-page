import React from 'react'
import PropTypes from 'prop-types'
import './Item.scss'
import {PRODUCT_TYPES} from '../../redux/ProductsDataType'
import NameColumn from './nameColumn/NameColumn.jsx'
import Checkbox from '../../../sharedComponent/checkbox/Checkbox.jsx'
import Dropdown from '../../../sharedComponent/dropdown/Dropdown.jsx'
import InputText from '../../../sharedComponent/inputText/InputText.jsx'

const productTypes = PRODUCT_TYPES.map(
    product => ({
        value: product,
        name: product,
    })
)

const Item = props => {
    const getItem = ()=> {
        if(props.active){
            return <tr>
                        <td className="checkbox-td">
                            <div className="checkbox-wrapper">
                                <Checkbox />
                            </div>
                        </td>
                        <NameColumn active name={props.name} thumbnail={props.thumbnail}/>
                        <td className="type-column">
                            <Dropdown dataArray={productTypes} value={props.type}/>
                        </td>
                        <td className="price-column">
                            <InputText value={props.price}/>
                        </td>
                        <td className="inventory-column">
                            <InputText value={props.inventory}/>
                        </td>
                    </tr>
        }else{
            return <tr>
                        <td className="checkbox-td">
                            <div className="checkbox-wrapper">
                                <Checkbox />
                            </div>
                        </td>
                        <NameColumn name={props.name} thumbnail={props.thumbnail}/>
                        <td className="text-column">
                            {props.type}
                        </td>
                        <td className="text-column">
                            ${props.price}
                        </td>
                        <td className="text-column">
                            {props.inventory}
                        </td>
                    </tr>
        }
    }
    return <tbody>
                {getItem()}
            </tbody>
}

Item.propTypes = {
    active: PropTypes.bool,
    name: PropTypes.string,
    thumbnail: PropTypes.string,
    type: PropTypes.string,
    price: PropTypes.number,
    inventory: PropTypes.number,
}

export default Item