import React from 'react'
import Item from './item/Item.jsx'
import './Table.scss'
const Table = props=>{
    return <table className="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Price</th>
                <th>Inventory</th>
            </tr>
        </thead>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
    </table>
}
export default Table