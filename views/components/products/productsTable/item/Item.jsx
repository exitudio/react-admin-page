import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import './Item.scss'
import {PRODUCT_TYPES} from '../../redux/ProductsDataType'
import Checkbox from '../../../sharedComponent/checkbox/Checkbox.jsx'
import ItemEditElement from './ItemEditElement.jsx'
import ItemEditDropDown from './ItemEditDropDown.jsx'
import {setEditModeAction} from '../../redux/listProducts/ListProductsAction'

const keys = ['name','type','price','inventory']
const productTypes = PRODUCT_TYPES.map(
    product => ({
        value: product,
        name: product,
    })
)
class Item extends React.Component{
    isNeedUpdate = ()=>{
        for(let i=0; i<keys.length; i++){
            if( this.props.product[ keys[i]+'New' ] &&
                this.props.product[ keys[i] ] !== this.props.product[ keys[i]+'New' ] ){
                return true
            }
        }
        return false
    }
    checkCallback = isChecked =>{
        let isNeedUpdate = this.isNeedUpdate()
        if(isNeedUpdate){
            for(let i=0; i<keys.length; i++){
                if(this.props.product[ keys[i]+'New' ]){
                    this.props.product[ keys[i] ] = this.props.product[ keys[i]+'New' ]
                }
            }
        }
        this.props.dispatch( setEditModeAction(this.props.product, isChecked, isNeedUpdate) )
    }
    needUpdateCallback = ( isNeedUpdate, name, newValue )=>{
        if( isNeedUpdate ){
            if( newValue === '' ){
                alert(name+' cannot be emty!!!')
                this.forceUpdate()
            }else{
                this.props.hashMapProductById[this.props.product.id][name+'New'] = newValue
            }
        }
    }
    getItem = ()=> {
        if( this.props.currentEdit[this.props.product.id] ){
            return <tr>
                        <td className="checkbox-td">
                            <div className="checkbox-wrapper">
                                <Checkbox checkCallback={this.checkCallback} checked/>
                            </div>
                        </td>
                        <td className="name-column">
                            <div className="name-column-wrapper">
                                <img src={this.props.product.thumbnail} className="thumbnail" alt="item-thumbnail"/>
                                <ItemEditElement name="name" 
                                             defaultValue={this.props.product.name} 
                                             updatingValue={this.props.product.nameNew}
                                             needUpdateCallback={this.needUpdateCallback}
                                             className="item-name"/>
                            </div>
                        </td>
                        <td className="type-column">
                            <ItemEditDropDown name="type"
                                              dataArray={productTypes}
                                              defaultValue={this.props.product.type}
                                              updatingValue={this.props.product.typeNew}
                                              needUpdateCallback={this.needUpdateCallback}
                            />
                            {/* <Dropdown dataArray={productTypes} value={this.props.product.type}/> */}
                        </td>
                        <td className="price-column">
                            <ItemEditElement name="price" 
                                             defaultValue={this.props.product.price} 
                                             updatingValue={this.props.product.priceNew}
                                             needUpdateCallback={this.needUpdateCallback}/>
                        </td>
                        <td className="inventory-column">
                            <ItemEditElement name="inventory" 
                                                defaultValue={this.props.product.inventory} 
                                                updatingValue={this.props.product.inventoryNew}
                                                needUpdateCallback={this.needUpdateCallback}/>
                        </td>
                    </tr>
        }else{
            return <tr>
                        <td className="checkbox-td">
                            <div className="checkbox-wrapper">
                                <Checkbox checkCallback={this.checkCallback} />
                            </div>
                        </td>
                        <td className="name-column">
                            <div className="name-column-wrapper">
                                <img src={this.props.product.thumbnail} className="thumbnail" alt="item-thumbnail"/>
                                <div className="item-name">{this.props.product.name}</div>
                            </div>
                        </td>
                        <td className="text-column">
                            <div>
                                {this.props.product.type}
                            </div>
                        </td>
                        <td className="text-column">
                            <div>
                                ${this.props.product.price}
                            </div>
                        </td>
                        <td className="text-column">
                            <div>
                                {this.props.product.inventory}
                            </div>
                        </td>
                    </tr>
        }
    }
    render(){
        return <tbody>
                    {this.getItem()}
                </tbody>
    }
}

Item.propTypes = {
    product: PropTypes.object.isRequired,
}
const mapStateToProps = state=>{
    return {
        currentEdit: state.listProductsReducer.currentEdit,
        hashMapProductById: state.listProductsReducer.hashMapProductById,
    }
}
export default connect(mapStateToProps)(Item)