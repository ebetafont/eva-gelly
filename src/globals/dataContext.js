import {createContext, useState} from 'react';

export const DataContext = createContext();

export function DataContextProvider(props){ //Container de globals

    //const user = JSON.parse(sessionStorage.getItem('logued_user'))
    //console.log(user.length)

    const [contextData, setContextData] = useState({themeSite: 'light', logedUser:null}); //mi hooc global
    
    const valor = {contextData, setContextData};

    return (
        <DataContext.Provider value={valor}>
            {props.children}
        </DataContext.Provider>
    )
}