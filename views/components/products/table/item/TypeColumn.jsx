import React from 'react'
export default props=>{
    return <td className="type-column">
                    <select className="item-input" name="type">
                        <option value="select-option">Please select...</option>
                        <option value="Local-Community-Enquiry">Option 1</option>
                        <option value="Bag-Packing-in-Store">Option 2</option>
                    </select>
                </td>
}