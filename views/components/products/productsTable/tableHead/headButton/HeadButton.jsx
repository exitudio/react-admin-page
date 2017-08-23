import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {updateSort} from '../../../redux/listProducts/ListProductsAction'
import {SORT_NAME, SORT_TYPE, SORT_PRICE, SORT_INVENTORY, ASCEND, DECEND} from '../../../redux/ProductsDataType'
import './HeadButton.scss'
import ArrowUp from './images/arrow_up.jpg'
import ArrowDown from './images/arrow_down.jpg'


class HeadButton extends React.Component{
    constructor(props){
        super(props)
        
        const buttonState = this.getButtonState(props)
        this.state={buttonState}
    }

    getButtonState = props=>{
        let buttonState = ''
        if( props.sortType === props.type){
            buttonState = props.sortDirection
        }
        return buttonState
    }

    componentWillReceiveProps(nextProps){
        const buttonState = this.getButtonState(nextProps)
        this.setState({buttonState})
    }

    getAlignClass =()=> {
        return this.props.align && this.props.align==='left' ? 
                    'head-wrapper align-left' : 
                    'head-wrapper'
    }
    getArrowComponent=()=>{
        switch(this.state.buttonState){
            case ASCEND:
                return <img className="arrow" src={ArrowDown} alt="-"/>
            case DECEND:
                return <img className="arrow" src={ArrowUp} alt="-"/>
            default:
                return ''
        }
    }
    onClick=e=>{
        this.props.dispatch(updateSort( this.props.type ) )
    }

    render(){
        return <th onClick={this.onClick}>
                    <div className={this.getAlignClass()}>
                        <div className="text-column">
                            {this.props.children}
                        </div>
                        {this.getArrowComponent()}
                    </div>
                </th>
    }
}
HeadButton.propTypes = {
    align: PropTypes.oneOf(['left','right']),
    type: PropTypes.oneOf([ 
        SORT_NAME,
        SORT_TYPE, 
        SORT_PRICE, 
        SORT_INVENTORY]
    ).isRequired,
}

const mapStateToProps = state=>{
    return {
        sortType: state.listProductsReducer.sortType,
        sortDirection: state.listProductsReducer.sortDirection,
    }
}
export default connect(mapStateToProps)(HeadButton)
