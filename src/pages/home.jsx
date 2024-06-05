import React, { useContext, useEffect, useState } from "react";
import { AppContext } from '../store/AppContext';
import PeopleCard from "../components/peopleCard";
import VehicleCard from "../components/vehiclesCard";
import PlanetCard from "../components/planetsCard";
import Loading from "../components/loader";

function Home() {
    const { store } = useContext(AppContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (store.people.length > 0 && store.planets.length > 0 && store.vehicles.length > 0) {
            setLoading(false);
        }
    }, [store.people, store.planets, store.vehicles]);

    if (loading) {
        return <Loading />
    }


    return (
            <main>
                <div className="py-5 bg-body-tertiary">
                    <div className="container pt-5">

                        <section className="album h-25 overflow-x-auto pt-5">
                            <h3>PEOPLE</h3>
                                <div className="grid d-flex">

                                    {store.people.map(person => (
                                        <PeopleCard key={person.uid} data={person} />
                                    ))}

                                </div>
                        </section>

                        <section className="album h-25 overflow-x-auto pt-5">
                            <h3>PLANETS</h3>
                                <div className="grid d-flex">

                                    {store.planets.map(planet => (
                                        <PlanetCard key={planet.uid} data={planet} />
                                    ))}

                                </div>
                        </section>

                        <section className="album h-25 overflow-x-auto pt-5">
                            <h3>VEHICLES</h3>
                                <div className="grid d-flex">

                                    {store.vehicles.map(vehicle => (
                                        <VehicleCard key={vehicle.uid} data={vehicle} />
                                    ))}

                                </div>
                        </section>

                    </div>
                </div>
            </main>
    );
}

export default Home;
