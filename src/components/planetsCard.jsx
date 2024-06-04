import { FaHeart } from "react-icons/fa";

const PlanetsCard = ({ data, favorite }) => {
    return (
        <div className="card col-3 me-3 shadow-sm">
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
                <h4>{data.name}</h4>
                <p className="card-text">
                    This is a wider card with supporting text below as a natural lead-in to additional
                    content. This content is a little bit longer.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                            {data.url}
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                            Save
                        </button>
                    </div>
                    <small className="text-body-secondary"><FaHeart/></small>
                </div>
            </div>
        </div>
    );
};

export default PlanetsCard;