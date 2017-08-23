import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import './Item.scss'
import {PRODUCT_TYPES} from '../../redux/ProductsDataType'
import NameColumn from './nameColumn/NameColumn.jsx'
import Checkbox from '../../../sharedComponent/checkbox/Checkbox.jsx'
import Dropdown from '../../../sharedComponent/dropdown/Dropdown.jsx'
import InputText from '../../../sharedComponent/inputText/InputText.jsx'
import {setEditModeAction} from '../../redux/listProducts/ListProductsAction'

const productTypes = PRODUCT_TYPES.map(
    product => ({
        value: product,
        name: product,
    })
)
const Item = props => {
    const checkCallback = isChecked =>{
        props.dispatch( setEditModeAction(props.id, isChecked) )
    }

    const getItem = ()=> {
        if( props.currentEdit[props.id] ){
            return <tr>
                        <td className="checkbox-td">
                            <div className="checkbox-wrapper">
                                <Checkbox checkCallback={checkCallback} checked/>
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
                                <Checkbox checkCallback={checkCallback} />
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
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
}
const mapStateToProps = state=>{
    return {
        currentEdit: state.listProductsReducer.currentEdit,
    }
}
export default connect(mapStateToProps)(Item)