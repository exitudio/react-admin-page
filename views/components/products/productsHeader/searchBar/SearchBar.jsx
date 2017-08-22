import React from 'react'
import './SearchBar.scss'
import SearchIcon from './search_icon.jpg'
export default class SearchBar extends React.Component{
    render(){
        return <div className="search-bar-container">
                <input className="search-bar" placeholder="Search..."/>
                <img className="search-icon" src={SearchIcon} alt="search icon"/>
            </div>
    }
}