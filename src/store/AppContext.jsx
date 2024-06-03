import React, { createContext, useEffect, useState } from 'react';
import getState from './flux';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [state, setState] = useState(() => {
        const { store, actions } = getState({
            getStore: () => state.store,
            getActions: () => state.actions,
            setStore: (updatedStore) => setState({
                store: { ...state.store, ...updatedStore },
                actions: { ...state.actions }
            })
        });
        return { store, actions };
    });

    useEffect(() => {
        state.actions.fetchPeople();
    }, []);

    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
