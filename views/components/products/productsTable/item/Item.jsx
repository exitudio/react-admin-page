import React from 'react'
import './Item.scss'
import NameColumn from './nameColumn/NameColumn.jsx'
import Checkbox from '../../../sharedComponent/checkbox/Checkbox.jsx'
import Dropdown from '../../../sharedComponent/dropdown/Dropdown.jsx'

export default class Item extends React.Component{
    getItem = ()=> {
        if(this.props.active){
            return <tr>
                        <td className="checkbox-td">
                            <div className="checkbox-wrapper">
                                <Checkbox />
                            </div>
                        </td>
                        <NameColumn active/>
                        <td className="type-column">
                            <Dropdown/>
                        </td>
                        <td className="price-column">
                            <input />
                        </td>
                        <td className="inventory-column">
                            <input />
                        </td>
                    </tr>
        }else{
            return <tr>
                        <td className="checkbox-td">
                            <div className="checkbox-wrapper">
                                <Checkbox />
                            </div>
                        </td>
                        <NameColumn />
                        <td className="text-column">
                            Physical
                        </td>
                        <td className="text-column">
                            $15.67
                        </td>
                        <td className="text-column">
                            200
                        </td>
                    </tr>
        }
    }
    render(){
        return <tbody>
                    {this.getItem()}
                </tbody>
    }
}