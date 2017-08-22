import React from 'react'
export default props=>{
    return <td className="name-column">
                    <div className="name-column-wrapper">
                        <label className="checkbox align-center">
                            <input type="checkbox"/>
                            <span></span>
                        </label>
                        
                        <img src="/item.jpg" className="thumbnail" alt="item-thumbnail align-center"/>

                        <input className="item-name item-input" defaultValue="High Waist Jeans"></input>
                    </div>
                </td>
}