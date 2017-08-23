import React from 'react'
import Checkbox from '../../../sharedComponent/checkbox/Checkbox.jsx'
import HeadButton from './headButton/HeadButton.jsx'
import {SORT_NAME, SORT_TYPE, SORT_PRICE, SORT_INVENTORY} from '../../redux/ProductsDataType'
import {setEditALLAction} from '../../redux/listProducts/ListProductsAction'
import {connect} from 'react-redux'
const TableHead = props=>{
    const checkCallback = isChecked=>{
        props.dispatch( setEditALLAction(isChecked))
    }
    return <thead>
                <tr>
                    <th>
                        <div className="checkbox-wrapper">
                            <Checkbox checkCallback={checkCallback} checked={props.isEditAll}/>
                        </div>
                    </th>
                    <HeadButton type={SORT_NAME} align="left" >Name</HeadButton>
                    <HeadButton type={SORT_TYPE}>Type</HeadButton>
                    <HeadButton type={SORT_PRICE}>Price</HeadButton>
                    <HeadButton type={SORT_INVENTORY}>Inventory</HeadButton>
                </tr>
            </thead>
}

const mapStateToProps = state => {
    return {
        isEditAll: state.listProductsReducer.isEditAll,
    }
}
export default connect(mapStateToProps)(TableHead)