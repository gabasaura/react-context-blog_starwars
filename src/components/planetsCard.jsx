import React, { useContext } from "react";
import { AppContext } from '../store/AppContext';
import { FaHeart, FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';

const PlanetsCard = ({ data }) => {
    const { store, actions } = useContext(AppContext);
    const planet = store.planets.find(item => item.uid === data.uid); // Fetch planet details from store

    // Check if the current planet is in favorites
    const isFavorite = store.favorites.some(fav => fav.uid === `planets-${data.uid}`);


    const handleFavoriteToggle = () => {
        console.log('planet:', planet);
        console.log('Favorites:', store.favorites);
        console.log('Is favorite:', isFavorite);

        if (isFavorite) {
            actions.removeFromFavorites(planet);
        } else {
            actions.addToFavorites(planet, 'planets');
        }
    };

    return (
        <div className="card border-0 col-3 me-3 shadow-sm">
            <svg
                className="warning-placeholder-img card-img-top"
                width="100%"
                height="225"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: -"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
            >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#000000" />
            </svg>
            <div className="card-body">
                <h3 className="text-warning">{data.name}</h3>
                <div><small>Birth Date: {planet.birth_year}</small></div>
                <div><small>Eyes Color: {planet.eye_color}</small></div>
                <div className="d-flex justify-content-center align-items-center mt-3">
                    <div className="btn-group pt-1">
                        <Link to={`/planets/${data.uid}`} className="btn btn-sm px-5 btn-outline-warning">
                            <FaEye />
                        </Link>
                        <button type="button" className="btn btn-sm px-5 btn-outline-warning" onClick={handleFavoriteToggle}>
                            <FaHeart color={isFavorite ? "" : "Gray"} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanetsCard;