import React from 'react'
import Checkbox from '../../../sharedComponent/checkbox/Checkbox.jsx'
import HeadButton from './headButton/HeadButton.jsx'
const TableHead = props=>{
    return <thead>
                <tr>
                    <th>
                        <Checkbox/>
                    </th>
                    <HeadButton align="left" buttonState={HeadButton.STATE_ASCEND}>Name</HeadButton>
                    <HeadButton>Type</HeadButton>
                    <HeadButton>Price</HeadButton>
                    <HeadButton>Inventory</HeadButton>
                </tr>
            </thead>
}
export default TableHead