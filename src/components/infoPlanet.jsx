
const PlanetInfo = ({ planet }) => {

    return (
        <div className="py-5 bg-body-tertiary">
            <div className="container pt-5">
                <section className="h-50 pt-5">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <svg
                                    className="warning-placeholder-img card-img-top"
                                    width="100%"
                                    height="400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="img"
                                    aria-label="Placeholder: -"
                                    preserveAspectRatio="xMidYMid slice"
                                    focusable="false"
                                >
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#000000" />
                                </svg>
                            </div>
                            <div className="col-md-8 row align-items-center">
                                <div className="card-body ps-5">
                                    <h1 className="card-title text-warning">{planet.name}</h1>
                                    <h6 className="card-text"><strong>Climate: </strong>{planet.climate}</h6>
                                    <h6 className="card-text"><strong>Created: </strong>{planet.created}</h6>
                                    <h6 className="card-text"><strong>Diameter: </strong>{planet.diameter}</h6>
                                    <h6 className="card-text"><strong>Gravity: </strong>{planet.gravity}</h6>
                                    <h6 className="card-text"><strong>Orbital_period: </strong>{planet.orbital_period}</h6>
                                    <h6 className="card-text"><strong>Population: </strong>{planet.population}</h6>
                                    <h6 className="card-text"><strong>Surface water: </strong>{planet.surface_water}</h6>
                                    <h6 className="card-text"><strong>Terrain: </strong>{planet.terrain}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
  };
  
  export default PlanetInfo;