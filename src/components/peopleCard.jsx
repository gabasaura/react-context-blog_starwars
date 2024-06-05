import React, { useContext } from "react";
import { AppContext } from '../store/AppContext';
import { FaHeart, FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';

const PeopleCard = ({ data }) => {
    const { store, actions } = useContext(AppContext);
    const person = store.people.find(item => item.uid === data.uid); // Fetch person details from store

    // Check if the current person is in favorites
    const isFavorite = store.favorites.some(fav => fav.uid === `people-${data.uid}`);

    const handleFavoriteToggle = () => {
        if (isFavorite) {
            actions.removeFromFavorites(person);
        } else {
            actions.addToFavorites(person, 'people');
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
                <h3 className="text-warning">{person.name}</h3>
                <h3 className="text-warning">{person.birth_year}</h3>
                
                <div className="d-flex justify-content-center align-items-center mt-3">
                    <div className="btn-group pt-1">
                    <Link to={`/people/${data.uid}`} className="btn btn-sm px-5 btn-outline-warning">
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

export default PeopleCard;