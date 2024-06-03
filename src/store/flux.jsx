const getState = ({ getStore, getActions, setStore }) => {

    return {
        store: {
            people: [],
            planets: null,
            vehicles: null
        },
        actions: {
             fetchPeople: async () => {
                try {
                    const response = await fetch("https://swapi.tech/api/people/");
                    const data = await response.json();
                    console.log("Fetched people:", data);
                    setStore({ people: Array.isArray(data.people) ? data.people : [] });
                    console.log("Updated store:", getStore());
                } catch (error) {
                    console.error("Error fetching people:", error);
                }
            }
        }
    };
};

export default getState;