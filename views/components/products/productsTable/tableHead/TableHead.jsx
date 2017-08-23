import React from 'react'
import Checkbox from '../../../sharedComponent/checkbox/Checkbox.jsx'
import HeadButton from './headButton/HeadButton.jsx'
import {SORT_NAME, SORT_TYPE, SORT_PRICE, SORT_INVENTORY} from '../../redux/ProductsDataType'
const TableHead = props=>{
    return <thead>
                <tr>
                    <th>
                        <Checkbox/>
                    </th>
                    <HeadButton type={SORT_NAME} align="left" >Name</HeadButton>
                    <HeadButton type={SORT_TYPE}>Type</HeadButton>
                    <HeadButton type={SORT_PRICE}>Price</HeadButton>
                    <HeadButton type={SORT_INVENTORY}>Inventory</HeadButton>
                </tr>
            </thead>
}
export default TableHead