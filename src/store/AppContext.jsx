import React, { createContext, useEffect, useState } from 'react';
import getState from './flux';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const initialState = getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: (updatedStore) => setState((prevState) => ({
            store: { ...prevState.store, ...updatedStore },
            actions: { ...prevState.actions }
        }))
    });

    const [state, setState] = useState({
        store: {
            ...initialState.store,
            favorites: [] // Initialize favorites array
        },
        actions: {
            ...initialState.actions,
            addToFavorites: (data, dataType) => {
                const favoriteItem = {
                    name: data.name,
                    uid: `${dataType}-${data.uid}`,
                    route: `/${dataType}/${data.uid}`
                };
                setState(prevState => ({
                    ...prevState,
                    store: {
                        ...prevState.store,
                        favorites: [...prevState.store.favorites, favoriteItem]
                    }
                }));
            },
            removeFromFavorites: (data) => {
                setState(prevState => ({
                    ...prevState,
                    store: {
                        ...prevState.store,
                        favorites: prevState.store.favorites.filter(fav => {
                            // Check the prefix to determine the type of data
                            const prefix = fav.uid.split('-')[0];
                            switch (prefix) {
                                case 'people':
                                    return fav.uid !== `people-${data.uid}`;
                                case 'planets':
                                    return fav.uid !== `planets-${data.uid}`;
                                case 'vehicles':
                                    return fav.uid !== `vehicles-${data.uid}`;
                                default:
                                    return true; // Preserve datas with unrecognized prefixes
                            }
                        })
                    }
                }));
            },
            removeFromFavoritesNavbar: (data) => {
                setState(prevState => ({
                    ...prevState,
                    store: {
                        ...prevState.store,
                        favorites: prevState.store.favorites.filter(fav => fav !== data)
                    }
                }));
            },
        }
    });

    useEffect(() => {
        state.actions.fetchPeople();
        state.actions.fetchPlanets();
        state.actions.fetchVehicles();
    }, []);

    const favoriteCount = state.store.favorites.length; // Calculate favorite count

    return (
        <AppContext.Provider value={{ ...state, favoriteCount }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
