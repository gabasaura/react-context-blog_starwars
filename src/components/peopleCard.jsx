import React, { useContext } from "react";
import { AppContext } from '../store/AppContext';
import { FaHeart, FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';

const PeopleCard = ({ data }) => {
    const { store, actions } = useContext(AppContext);
    const person = store.person;
    const isFavorite = store.favorites.some(fav => fav.uid === data.uid);

    const handleFavoriteToggle = () => {
        if (isFavorite) {
            actions.removeFromFavorites(data);
        } else {
            actions.addToFavorites(data);
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
                <div><small>Birth Date: {person.birth_year}</small></div>
                <div><small>Eyes Color: {person.eye_color}</small></div>
                <div><small>Gender: {person.gender}</small></div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <div className="btn-group">
                        <Link to={`/people/${data.uid}`} className="btn btn-sm btn-outline-warning">
                            <FaEye />
                        </Link>
                        <button type="button" className="btn btn-sm btn-outline-warning" onClick={handleFavoriteToggle}>
                            <FaHeart color={isFavorite ? "white" : ""} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PeopleCard;
