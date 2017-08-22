import React from 'react'
import './reset.scss'
import './Layout.scss'

export default class Layout extends React.Component{
    render(){
        return(
            <div>
                {/* <Header/> */}
                <div className="conatiner">{this.props.children}</div>
            </div>
        )
    }
};