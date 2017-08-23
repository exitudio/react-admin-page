import React from 'react'
import PropTypes from 'prop-types'
import './Checkbox.scss'
class Checkbox extends React.Component{
    onClick = e=>{
        if(this.props.checkCallback){
            this.props.checkCallback(e.target.checked)
        }
    }
    onChange = ()=>{}
    render(){
        return <label className={`${this.props.className||''} checkbox`} >
                    <input type="checkbox" 
                           onClick={this.onClick} 
                           checked={this.props.checked===undefined?false:this.props.checked} 
                           onChange={this.onChange}/>
                    <span></span>
                </label>
    }
}
Checkbox.propTypes = {
    className: PropTypes.string,
    checkCallback: PropTypes.func,
    checked: PropTypes.bool,
}

export default Checkbox

