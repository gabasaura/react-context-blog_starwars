import React, { useContext, useEffect } from "react";
import { AppContext } from "../store/AppContext";

const PropPeople = ({ uid }) => { 
    const { store, actions } = useContext(AppContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await actions.fetchPerson(uid); // Fetch person data based on uid from props
            } catch (error) {
                console.error("Error fetching person:", error);
            }
        };
        fetchData();
    }, []); // Add data.uid as a dependency to fetch data when it changes

    const person = store.person;

    return (
        <>
            <div><small>Birth Date: {person.birth_year}</small></div>
            <div><small>Eye Color: {person.eye_color}</small></div>
            <div><small>Gender: {person.gender}</small></div>
        </>
    );
};

export default PropPeople;
