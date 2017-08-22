import React from 'react'
import NameColumn from './NameColumn.jsx'
import TypeColumn from './TypeColumn.jsx'
import PriceColumn from './PriceColumn.jsx'
import InventoryColumn from './InventoryColumn.jsx'
export default props=>{
    return <tbody>
                <tr>
                    <NameColumn/>
                    <TypeColumn/>
                    <PriceColumn/>
                    <InventoryColumn/>
                </tr>
            </tbody>
}