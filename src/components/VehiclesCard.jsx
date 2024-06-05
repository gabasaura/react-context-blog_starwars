import React, { useContext } from "react";
import { AppContext } from '../store/AppContext';
import { FaHeart, FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';

const VehiclesCard = ({ data }) => {
    const { store, actions } = useContext(AppContext);
    const vehicle = store.vehicles.find(item => item.uid === data.uid); // Fetch vehicle details from store

    // Check if the current vehicle is in favorites
    const isFavorite = store.favorites.some(fav => fav.uid === `vehicles-${data.uid}`);


    const handleFavoriteToggle = () => {
        console.log('vehicle:', vehicle);
        console.log('Favorites:', store.favorites);
        console.log('Is favorite:', isFavorite);

        if (isFavorite) {
            actions.removeFromFavorites(vehicle);
        } else {
            actions.addToFavorites(vehicle, 'vehicles');
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
                <div><small>Birth Date: {vehicle.birth_year}</small></div>
                <div><small>Eyes Color: {vehicle.eye_color}</small></div>
                <div><small>Gender: {vehicle.gender}</small></div>
                <div className="d-flex justify-content-center align-items-center mt-3">
                    <div className="btn-group pt-1">
                        <Link to={`/vehicles/${data.uid}`} className="btn btn-sm px-5 btn-outline-warning">
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

export default VehiclesCard;