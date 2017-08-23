import React from 'react'
import './SearchBar.scss'
import SearchIcon from './search_icon.jpg'
import InputText from '../../../sharedComponent/inputText/InputText.jsx'
import store from '../../../../redux/store'
import {searchAction} from '../../redux/listProducts/ListProductsAction'
export default class SearchBar extends React.Component{
    onChange = value=>{
        store.dispatch( searchAction(value) )
    }
    render(){
        return <div className="search-bar-container">
                <InputText className="search-bar" placeholder="Search..." onChange={this.onChange}/>
                <img className="search-icon" src={SearchIcon} alt="search icon"/>
            </div>
    }
}