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
            addToFavorites: (item) => {
                setState(prevState => ({
                    ...prevState,
                    store: {
                        ...prevState.store,
                        favorites: [...prevState.store.favorites, item]
                    }
                }));
            },
            removeFromFavorites: (item) => {
                setState(prevState => ({
                    ...prevState,
                    store: {
                        ...prevState.store,
                        favorites: prevState.store.favorites.filter(fav => fav.uid !== item.uid)
                    }
                }));
            }
        }
    });

    useEffect(() => {
        state.actions.fetchPeople();
        state.actions.fetchPlanets();
        state.actions.fetchVehicles();
    }, []);

    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
