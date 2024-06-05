import React, { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import { AppContext } from "../store/AppContext";
import Loading from "../components/loader";
import PlanetInfo from "../components/infoPlanet";

const PlanetProfile = () => {
    const { store, actions } = useContext(AppContext);
    const { uid } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await actions.fetchPlanet(uid);
            setLoading(false);
        };

        fetchData();
    }, []);

    if (loading) {
        return <Loading />
    }

    const planet = store.planet;

    return (
        <main>
            <div className="py-5 bg-body-tertiary">
                <div className="container pt-5">
                    <section className="h-50 pt-5">
                        {store.person ? (
                            <PlanetInfo planet={store.planet} />
                        ) : (
                            <p>No data available</p>
                        )}
                    </section>
                </div>
            </div>
        </main>
       
    );
};

export default PlanetProfile;
