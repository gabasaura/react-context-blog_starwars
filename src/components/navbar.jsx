import React, { useContext } from 'react';
import { FaHeart, FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AppContext } from '../store/AppContext';

const Navbar = () => {
    const { store, actions, favoriteCount } = useContext(AppContext);

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
                        <div className="nav-item dropdown">
                            <button
                                className="nav-link dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                FAVORITES
                                {favoriteCount > 0 && <span className="badge rounded-pill text-bg-warning move-top">{favoriteCount}</span>}
                                <FaHeart className='ms-2 mb-2' />

                            </button>
                            <ul className="dropdown-menu">
                                {store.favorites.length === 0 ? (
                                    <li className='text-center w-100'><h6 className="dropdown-item text-warning">No favorites</h6></li>
                                ) : (
                                    store.favorites.map(favorite => (
                                        <li className="dropdown-item" key={favorite.uid}>
                                            <span>
                                                <button className='btn p-0' onClick={() => actions.removeFromFavorites(favorite)}>
                                                    <FaTrash className='me-2' />
                                                </button>
                                                {console.log('Favorite:', favorite)}
                                                <Link className='btn p-0' to={favorite.route}>
                                                    {favorite.name}
                                                </Link>
                                            </span>
                                        </li>
                                    ))
                                )}
                            </ul>
                        </div>
                    </div>
                    {/*<form className="d-flex" role="search">
                        <input 
                            className="form-control me-2" 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search" 
                        />
                        <button className="btn btn-outline-warning" type="submit">Search</button>
                            </form>*/}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
