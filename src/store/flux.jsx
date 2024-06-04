const getState = ({ getStore, getActions, setStore }) => {

    return {
        store: {
            people: [],
            planets: [],
            vehicles: [],
            person: {}
        },
        actions: {
             fetchPeople: async () => {
                try {
                    const response = await fetch("https://swapi.tech/api/people/");
                    const data = await response.json();
                    console.log("Fetched people:", data);
                    setStore({ people: Array.isArray(data.results) ? data.results : [] });
                    console.log("Updated store:", getStore());
                } catch (error) {
                    console.error("Error fetching people:", error);
                }
            },
            fetchPerson: async (uid) => {
                try {
                    const response = await fetch(`https://swapi.tech/api/people/${uid}`);
                    const data = await response.json();
                    setStore({ person: data.result.properties });
                } catch (error) {
                    console.error("Error fetching person:", error);
                }
            },
            fetchPlanets: async () => {
                try {
                    const response = await fetch("https://swapi.tech/api/planets/");
                    const data = await response.json();
                    console.log("Fetched planets:", data);
                    setStore({ planets: Array.isArray(data.results) ? data.results : [] });
                    console.log("Updated store:", getStore());
                } catch (error) {
                    console.error("Error fetching planets:", error);
                }
            },
            fetchVehicles: async () => {
                try {
                    const response = await fetch("https://swapi.tech/api/vehicles/");
                    const data = await response.json();
                    console.log("Fetched vehicles:", data);
                    setStore({ vehicles: Array.isArray(data.results) ? data.results : [] });
                    console.log("Updated store:", getStore());
                } catch (error) {
                    console.error("Error fetching vehicles:", error);
                }
            }
        }
    };
};

export default getState;