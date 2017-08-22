import React from 'react'
import PropTypes from 'prop-types'
import './HeadButton.scss'
import ArrowUp from './images/arrow_up.jpg'
import ArrowDown from './images/arrow_down.jpg'


export default class HeadButton extends React.Component{
    static STATE_ASCEND = 'ascend'
    static STATE_DECEND = 'decend'
    static STATE_NONE = 'none'

    getAlignClass =()=> {
        return this.props.align && this.props.align==='left' ? 
                    'head-wrapper align-left' : 
                    'head-wrapper'
    }
    getArrowComponent=()=>{
        switch(this.props.buttonState){
            case HeadButton.STATE_ASCEND:
                return <img className="arrow" src={ArrowDown} alt="-"/>
            case HeadButton.STATE_DECEND:
                return <img className="arrow" src={ArrowUp} alt="-"/>
            default:
                return ''
        }
    }

    render(){
        return <th>
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
    buttonState: PropTypes.oneOf([ 
        HeadButton.STATE_ASCEND,
        HeadButton.STATE_DECEND, 
        HeadButton.STATE_NONE]
    ).isRequired,
}

