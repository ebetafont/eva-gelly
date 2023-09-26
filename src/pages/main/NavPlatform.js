import {useContext} from 'react';
import {DataContext} from '../../globals/dataContext';
import { Link } from 'react-router-dom';
import "./NavPlat.css"

export function NavPlatform(){
    const {contextData} = useContext(DataContext);

    return(

        <ul className='nav-platform'>
            <li><Link to="/" className={`site-home ${contextData}`}>Home</Link></li>
            <li><Link to="/streams" className={`site-streams ${contextData}`}>Streams</Link></li>
            <li><Link to="/party" className={`site-party ${contextData}`}>Party</Link></li>
            <li><Link to="/premium" className={`site-premium ${contextData}`}>Premium</Link></li>
        </ul>
    )
}