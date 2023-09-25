import {Personal} from '../stepinside/Personal.js';
import {useContext} from 'react';
import {DataContext} from '../../globals/dataContext';
import { SingleG } from '../games/SingleG.js';
import { Link } from 'react-router-dom';

export function MainBoard(){
    const {contextData} = useContext(DataContext);

    return(
        <>
            <div className='card-main-board'>
                <div className={`main-p main-p-b-a ${contextData}`}> 
                    <h1>start <spam>streaming</spam> games differently</h1>
                    <p>gamor now has <spam>streaming party</spam> platform</p>
                    <Personal mystyle="si" />
                </div>
                
                <div className={`main-p main-p-b-b ${contextData}`}>
                    <SingleG />  
                </div>

                <div className={`main-p main-p-b-c ${contextData}`}> 
                    <h2>Choose Platform</h2>
                    <ul className='nav-platform'>
                        <li><Link to="/" className={`site-home ${contextData}`}>Home</Link></li>
                        <li><Link to="/streams" className={`site-streams ${contextData}`}>Streams</Link></li>
                        <li><Link to="/party" className={`site-party ${contextData}`}>Party</Link></li>
                        <li><Link to="/premium" className={`site-premium ${contextData}`}>Premium</Link></li>
                    </ul>
                    <h2>Searching Game</h2>
                    <div>
                        <p>Some stuf</p><p>Some stuf</p><p>Some stuf</p><p>Some stuf</p><p>Some stuf</p>
                    </div>
                        
                </div>
            </div>
        </>
    )
}