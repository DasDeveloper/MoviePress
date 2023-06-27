import React, { useEffect, useState } from 'react';
import "../css/searchBar.css"
import {AiOutlineSearch} from "react-icons/ai"
import axios from 'axios';
import {Link, useNavigate, Navigate, redirect, useSearchParams} from "react-router-dom"
import {useLocation} from 'react-router-dom'

const SearchBar = () => {
 
    const location = useLocation();
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSearch = async() =>{

        
        if(query.length===0){
            return;
        }
        if(location.pathname === '/search'){
            setSearchParams({query:`${query}`})
            
        }
        if(location.pathname!== '/search'){
            
            navigate(`/search?${query}`, {state:query});
            

        }

    }

    return (
        <div className='searchbar-container'>

            <div className='search-bar'>
                <input className="searchbar-input" type="text" placeholder='Search movies' onChange={(e) =>{setQuery(e.target.value)}}/>
                <button className="searchbar-input-button" onClick={handleSearch}><AiOutlineSearch/></button>
            </div>

        </div>
    )
};

export default SearchBar;
