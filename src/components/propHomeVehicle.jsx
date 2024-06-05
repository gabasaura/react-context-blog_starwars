import React, { useContext, useEffect } from "react";
import { AppContext } from "../store/AppContext";

const PropVehicle = ({ uid }) => { 
    const { store, actions } = useContext(AppContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await actions.fetchVehicle(uid); // Fetch vehicle data based on uid from props
            } catch (error) {
                console.error("Error fetching vehicle:", error);
            }
        };
        fetchData();
    }, []); // Add data.uid as a dependency to fetch data when it changes

    const vehicle = store.vehicle;

    return (
        <>
            <div><small>Cargo_capacity: {vehicle.cargo_capacity}</small></div>
            <div><small>Consumables: {vehicle.consumables}</small></div>
        </>
    );
};

export default PropVehicle;
