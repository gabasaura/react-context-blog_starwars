import React, { useContext, useEffect } from "react";
import { AppContext } from "../store/AppContext";

const PropPlanet = ({ uid }) => { 
    const { store, actions } = useContext(AppContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await actions.fetchPlanet(uid); // Fetch planet data based on uid from props
            } catch (error) {
                console.error("Error fetching planet:", error);
            }
        };
        fetchData();
    }, []); // Add data.uid as a dependency to fetch data when it changes

    const planet = store.planet;

    return (
        <>
            <div><small>Climate: {planet.climate}</small></div>
            <div><small>Diameter: {planet.diameter}</small></div>
        </>
    );
};

export default PropPlanet;
