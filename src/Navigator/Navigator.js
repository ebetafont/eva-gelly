import { Link } from "react-router-dom"
import { useContext } from "react"
import { DataContext } from "../globals/dataContext"
import "./Navigator.css"

export function Navigator(className){

    const {contextData} = useContext(DataContext);

    return(
        <ul className={`${className.className} ${contextData.themeSite}`}>
            <li><Link to="/" className={`site-home ${contextData.themeSite}`} active="true">Home</Link></li>
            <li><Link to="/streams" className={`site-streams ${contextData.themeSite}`}>Streams</Link></li>
            <li><Link to="/party" className={`site-party ${contextData.themeSite}`}>Party</Link></li>
            <li><Link to="/premium" className={`site-premium ${contextData.themeSite}`}>Premium</Link></li>
        </ul>
    )
}