import {createContext, useState} from 'react';

export const DataContext = createContext();

export function DataContextProvider(props){ //Container de globals
    const [contextData, setContextData] = useState('light'); //mi hooc global
    
    const valor = {contextData, setContextData};

    return (
        <DataContext.Provider value={valor}>
            {props.children}
        </DataContext.Provider>
    )
}