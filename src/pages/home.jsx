import React, { useContext } from "react";
import { AppContext } from '../store/AppContext';
import PeopleCard from "../components/peopleCard";
import PlanetsCard from "../components/planetsCard";
import VehiclesCard from "../components/VehiclesCard";

function Home() {
    const { store } = useContext(AppContext);



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
                                        <PlanetsCard key={planet.uid} data={planet} />
                                    ))}

                                </div>
                        </section>

                        <section className="album h-25 overflow-x-auto pt-5">
                            <h3>VEHICLES</h3>
                                <div className="grid d-flex">

                                    {store.vehicles.map(vehicle => (
                                        <VehiclesCard key={vehicle.uid} data={vehicle} />
                                    ))}

                                </div>
                        </section>

                    </div>
                </div>
            </main>
    );
}

export default Home;
