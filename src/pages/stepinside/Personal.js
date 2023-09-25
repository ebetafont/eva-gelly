import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import {useContext} from 'react';
import {DataContext} from '../../globals/dataContext';

import './Personal.css';

export function Personal({mystyle}){
    const {contextData} = useContext(DataContext);

    return(<>
        {mystyle==="si" ? 
        (<ul className='nav-c'>
            <MyLink to="/create-account" className={`create-a ${contextData} ${mystyle}`}>Create account</MyLink>
            <MyLink to="/login" className={`login-a ${contextData}`}>Sign in</MyLink>
        </ul>) :
        (<ul className='nav-d'>
            <MyLink to="/login" className={`login-a ${contextData}`}>Sign in</MyLink>
            <MyLink to="/create-account" className={`create-a ${contextData} ${mystyle}`}>Create account</MyLink>            
        </ul>)}</>)
}

function MyLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}