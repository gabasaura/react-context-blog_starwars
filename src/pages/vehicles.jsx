import React, { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import { AppContext } from "../store/AppContext";
import Loading from "../components/loader";

const VehicleProfile = () => {
    const { store, actions } = useContext(AppContext);
    const { uid } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await actions.fetchVehicle(uid);
            setLoading(false);
        };

        fetchData();
    }, []);

    if (loading) {
        return <Loading />
    }

    const vehicle = store.vehicle;

    return (
        <main>
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
                                        <h1 className="card-title text-warning">{vehicle.name}</h1>
                                        <h6 className="card-text"><strong>Cargo_capacity: </strong>{vehicle.cargo_capacity}</h6>
                                        <h6 className="card-text"><strong>Consumables: </strong>{vehicle.consumables}</h6>
                                        <h6 className="card-text"><strong>Cost_in_credits: </strong>{vehicle.cost_in_credits}</h6>
                                        <h6 className="card-text"><strong>Crew: </strong>{vehicle.crew}</h6>
                                        <h6 className="card-text"><strong>Length: </strong>{vehicle.length}</h6>
                                        <h6 className="card-text"><strong>Manufacturer: </strong>{vehicle.manufacturer}</h6>
                                        <h6 className="card-text"><strong>Max_atmosphering_speed: </strong>{vehicle.smax_atmosphering_speed}</h6>
                                        <h6 className="card-text"><strong>Model: </strong>{vehicle.model}</h6>
                                        <h6 className="card-text"><strong>Passengers: </strong>{vehicle.passengers}</h6>
                                        <h6 className="card-text"><strong>Model: </strong>{vehicle.model}</h6>
                                        <h6 className="card-text"><strong>Vehicle_class: </strong>{vehicle.vehicle_class}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default VehicleProfile;
