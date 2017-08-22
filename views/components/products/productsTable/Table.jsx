import React from 'react'
import Item from './item/Item.jsx'
import './Table.scss'
import TableHead from './tableHead/TableHead.jsx'
const Table = props=>{
    return <table className="table">
        <TableHead/>
        <Item active/>
        <Item/>
        <Item/>
        <Item/>
    </table>
}
export default Table