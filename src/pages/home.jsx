import React, { useContext, useEffect } from "react";
import { AppContext } from '../store/AppContext';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PeopleCard from "../components/peopleCard";

function Home() {
    const { store, actions } = useContext(AppContext);


    useEffect(() => {
        actions.fetchPeople(); 
    }, []);
    

    return (
            <main>
                <div className="py-5 bg-body-tertiary">
                    <div className="container pt-5">

                        <section className="album h-25 overflow-x-auto pt-5">
                            <h3>CHARACTERS</h3>
                                <div className="grid d-flex">

                                    {store.people.map(person => (
                                        <PeopleCard key={person.uid} data={person} />
                                    ))}

                                </div>
                        </section>

                    </div>
                </div>
            </main>
    );
}

export default Home;
