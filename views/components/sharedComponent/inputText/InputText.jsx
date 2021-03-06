import React from 'react'
import PropTypes from 'prop-types'
import './InputText.scss'

export default class InputText extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.value
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            ...this.state,
            value: nextProps.value
        })
    }

    onChange = e => {
        if (this.props.onChange) {
            this.props.onChange(e.target.value)
        }
        this.setState({
            ...this.state,
            value: e.target.value,
        })

    }
    onBlur = e =>{
        if (this.props.onBlur) {
            this.props.onBlur()
        }
    }
    render() {
        return <input className={`${this.props.className || ''} input-text`}
                      onChange={this.onChange}
                      onBlur={this.onBlur}
                      value={this.state.value || ''}
                      placeholder={this.props.placeholder} />
    }
}
InputText.propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
}
