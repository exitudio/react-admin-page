import React from 'react'
import PropTypes from 'prop-types'
import './Checkbox.scss'
const Checkbox = props=>{
    return <label className={`${props.className||''} checkbox`}>
                <input type="checkbox"/>
                <span></span>
            </label>
}
Checkbox.propTypes = {
    className: PropTypes.string,
}

export default Checkbox

