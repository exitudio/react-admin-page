import React from 'react'
import PropTypes from 'prop-types'
import './Dropdown.scss'
const Dropdown = props=>{
    return <select className={`${props.className||''} dropdown`}>
                <option value="select-option">Please select...</option>
                <option value="Local-Community-Enquiry">Option 1</option>
                <option value="Bag-Packing-in-Store">Option 2</option>
            </select>
}
Dropdown.propTypes = {
    className: PropTypes.string,
}
export default Dropdown