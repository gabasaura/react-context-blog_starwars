import React, { useContext } from 'react';
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AppContext } from '../store/AppContext';

const Navbar = () => {
    const { store } = useContext(AppContext);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top px-5">
            <div className="container-fluid px-5">
                <Link className="navbar-brand pe-5" to="/">STAR WARS</Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav me-auto mb-lg-0">
                        
                            <button
                                className="nav-link dropdown-toggle" 
                                type="button" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                            >
                                FAVORITES <FaHeart className='ms-2 mb-1'/>
                            </button>
                            <ul className="dropdown-menu">
                                {store.favorites.map(favorite => (
                                    <li key={favorite.uid}>
                                        <Link className="dropdown-item" to={`/people/${favorite.uid}`}>
                                            {favorite.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                    </div>
                    <form className="d-flex" role="search">
                        <input 
                            className="form-control me-2" 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search" 
                        />
                        <button className="btn btn-outline-warning" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
