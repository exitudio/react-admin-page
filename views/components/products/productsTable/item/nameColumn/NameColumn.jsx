import React from 'react'
import './NameColumn.scss'

const getNameComponent = active=>{
    if(active){
        return <input className="item-name" defaultValue="High Waist Jeans"></input>
    }else{
        return <div className="item-name">High Waist Jeans</div>
    }
}
export default props=>{
    return <td className="name-column">
                    <div className="name-column-wrapper">
                        {/* <Checkbox className="align-center"/> */}
                        <img src="/item.jpg" className="thumbnail" alt="item-thumbnail"/>
                        {getNameComponent(props.active)}
                    </div>
                </td>
}