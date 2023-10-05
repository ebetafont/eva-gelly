import "./Search.css"
import { DataContext } from "../../globals/dataContext";
import { useContext } from "react";

export function SearchG(){
    const {contextData} = useContext(DataContext);

    return(
        <>
            <div className={`search-game-up ${contextData.themeSite}`}>
                <p>Some stuf</p>
            </div>
            <div className={`search-game-down ${contextData.themeSite}`}>
                <p>Some stuf</p><p>Some stuf</p><p>Some stuf</p><p>Some stuf</p><p>Some stuf</p>
            </div>
        </>
    )
}