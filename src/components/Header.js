import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
                {/* <h2>StarWars</h2> */}
                <img src='https://www.logo.wine/a/logo/Star_Wars/Star_Wars-Logo.wine.svg' alt="StarWars"/>
            </div>
            <div className='header__right'>
                <Link to='/films' className='header__link'>
                    <h5>Films</h5>
                </Link>
                <Link to='/persons' className='header__link'>
                    <h5>Persons</h5>
                </Link>
                <Link to='/planets' className='header__link'>
                    <h5>Planets</h5>
                </Link>
                <Link to='/starships' className='header__link'>
                    <h5>Starships</h5>
                </Link>
                <Link to='/vehicles' className='header__link'>                
                    <h5>Vechicles</h5>
                </Link>
            </div>
        </div>
    )
}

export default Header
