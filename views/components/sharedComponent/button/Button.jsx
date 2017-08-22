import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

const Button = props=><div className={`${props.className||''} button ${props.disable?'disable':''}`}>
                            {props.children}
                        </div>

Button.propTypes = {
    className: PropTypes.string,
    disable : PropTypes.bool,
}

export default Button