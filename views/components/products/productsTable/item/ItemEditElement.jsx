import React from 'react'
import PropTypes from 'prop-types'
import InputText from '../../../sharedComponent/inputText/InputText.jsx'

export default class ItemEditElement extends React.Component{
    constructor(props){
        super(props)
        let newValue = this.getNewValue(this.props)
        this.state = {newValue}
    }
    getNewValue=(props)=>{
        let newValue
        if( props.updatingValue || props.updatingValue===''){
            newValue = props.updatingValue
        }else{
            newValue = props.defaultValue
        }
        return newValue
    }
    componentWillReceiveProps(nextProps) {
        let newValue = this.getNewValue(nextProps)
        this.setState({
            ...this.state,
            newValue
        })
    }
    onBlur=()=>{
        this.props.needUpdateCallback( 
            this.state.newValue!==this.props.defaultValue, 
            this.props.name,
            this.state.newValue
        )
    }
    onChange = value=>{
        this.setState({
            ...this.state,
            newValue: value,
        })
    }
    render(){
        return <InputText value={this.state.newValue} 
                          onChange={this.onChange} 
                          onBlur={this.onBlur}
                          className={`${this.props.className || ''}`}/>
    }
}
ItemEditElement.propTypes = {
    name: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]).isRequired,
    defaultValue: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]).isRequired,
    updatingValue: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
    needUpdateCallback: PropTypes.func.isRequired,
    className: PropTypes.string,
}