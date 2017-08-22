import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

const Button = props=>{
    return <div className={`button ${props.className||''} ${props.disable?'disable':''}`}>
                {props.children}
            </div>
}
Button.propTypes = {
    className: PropTypes.string,
    disable : PropTypes.bool,
}

export default Button