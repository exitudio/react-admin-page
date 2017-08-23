import React from 'react'
import PropTypes from 'prop-types'
import Dropdown from '../../../sharedComponent/dropdown/Dropdown.jsx'

export default class ItemEditDropDown extends React.Component{
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
    onChange = value=>{
        this.props.needUpdateCallback( 
            value!==this.props.defaultValue, 
            this.props.name,
            value
        )
        this.setState({
            ...this.state,
            newValue: value,
        })
    }
    render(){
        return <Dropdown dataArray={this.props.dataArray} value={this.state.newValue} onChange={this.onChange}/>
        // return <InputText value={this.state.newValue} onChange={this.onChange} onBlur={this.onBlur}/>
    }
}
ItemEditDropDown.propTypes = {
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
    dataArray: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.bool,
        ]).isRequired,
        name: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.bool,
        ]),})).isRequired,
    needUpdateCallback: PropTypes.func.isRequired,
}