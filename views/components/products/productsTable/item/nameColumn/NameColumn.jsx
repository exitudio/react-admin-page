import React from 'react'
import PropTypes from 'prop-types'
import './NameColumn.scss'
import InputText from '../../../../sharedComponent/inputText/InputText.jsx'

const getNameComponent = (active, name)=>{
    if(active){
        return <InputText className="item-name" value={name} />
    }else{
        return <div className="item-name">{name}</div>
    }
}
const NameColumn = props=>{
    return <td className="name-column">
                    <div className="name-column-wrapper">
                        <img src={props.thumbnail} className="thumbnail" alt="item-thumbnail"/>
                        {getNameComponent(props.active, props.name)}
                    </div>
                </td>
}
NameColumn.propTypes = {
    active: PropTypes.bool,
    name: PropTypes.string,
    thumbnail: PropTypes.string,
}

export default NameColumn