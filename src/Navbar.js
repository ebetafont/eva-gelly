import { Link } from 'react-router-dom';

import {useContext} from 'react';
import {DataContext} from './globals/dataContext';
import {Personal} from './pages/stepinside/Personal';

export default function Navbar(){
    
    const {contextData, setContextData} = useContext(DataContext);

    return (
        <>
            <nav className="nav">
                <ul className='nav-i'>
                    <li><Link to="/" className={`site-home ${contextData}`}>Home</Link></li>
                    <li><Link to="/streams" className={`site-streams ${contextData}`}>Streams</Link></li>
                    <li><Link to="/party" className={`site-party ${contextData}`}>Party</Link></li>
                    <li><Link to="/premium" className={`site-premium ${contextData}`}>Premium</Link></li>
                </ul>
                
                
                    <h1>Gamor</h1>

                    <button className="tdn-button" onClick={() => setContextData(contextData === 'light' ? 'dark' : 'light')}>
                        {   //TODO: Agregar un toggle bonito y estilizado usando este boton q se mueva de un lado a otro, me dara tiempo?
                            contextData === 'light' ? 
                                <img alt="Toggle day and night mode" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABNklEQVR4nO2UT0rDQBjFf2ANSDfu7QEUlVhBUbeewYO48BKisX+sW9256wm8QVdtVTyA7hURq41UBl5hGFKdSezKPvgImfnee5kvL4EZArEBxEwRZ0AyDeFYwq+qJOMk60ALeADegBGw8BcGEXABfEnUrrnQkyTOiCLgRmKfwBVwANxrbTHUIHZG05LQo7Pe1vo+BbCqsbwrXTYOZXBZxKAuEXN1sQQMgA9gO6/BnQy2JuwfW+Or5jF4kUB5wv68FQBzkiaw+0N/sME4ZadKmB1fc1/iF9yq2WfGFeAI6IjT9+BQU3MDf1yLY7heMU2VFjemWdgDhuKs+T5R0zMpm8CTeg3HG5GVlIHIO3rxZaXmXCkaqddwghDpPaQZP7txpfogTXRzY0WR7AHPqi5wAiwXEeZ/4xvaLWBA1+lYdAAAAABJRU5ErkJggg=="/>
                                :
                                <img alt="Toggle day and night mode" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CjxwYXRoIGQ9Ik0gMTEgMCBMIDExIDMgTCAxMyAzIEwgMTMgMCBMIDExIDAgeiBNIDQuMjIyNjU2MiAyLjgwODU5MzggTCAyLjgwODU5MzggNC4yMjI2NTYyIEwgNC45Mjk2ODc1IDYuMzQzNzUgTCA2LjM0Mzc1IDQuOTI5Njg3NSBMIDQuMjIyNjU2MiAyLjgwODU5MzggeiBNIDE5Ljc3NzM0NCAyLjgwODU5MzggTCAxNy42NTYyNSA0LjkyOTY4NzUgTCAxOS4wNzAzMTIgNi4zNDM3NSBMIDIxLjE5MTQwNiA0LjIyMjY1NjIgTCAxOS43NzczNDQgMi44MDg1OTM4IHogTSAxMiA1IEMgOC4xNDU4NTE0IDUgNSA4LjE0NTg1MTQgNSAxMiBDIDUgMTUuODU0MTQ5IDguMTQ1ODUxNCAxOSAxMiAxOSBDIDE1Ljg1NDE0OSAxOSAxOSAxNS44NTQxNDkgMTkgMTIgQyAxOSA4LjE0NTg1MTQgMTUuODU0MTQ5IDUgMTIgNSB6IE0gMTIgNyBDIDE0Ljc3MzI2OCA3IDE3IDkuMjI2NzMxNiAxNyAxMiBDIDE3IDE0Ljc3MzI2OCAxNC43NzMyNjggMTcgMTIgMTcgQyA5LjIyNjczMTYgMTcgNyAxNC43NzMyNjggNyAxMiBDIDcgOS4yMjY3MzE2IDkuMjI2NzMxNiA3IDEyIDcgeiBNIDAgMTEgTCAwIDEzIEwgMyAxMyBMIDMgMTEgTCAwIDExIHogTSAyMSAxMSBMIDIxIDEzIEwgMjQgMTMgTCAyNCAxMSBMIDIxIDExIHogTSA0LjkyOTY4NzUgMTcuNjU2MjUgTCAyLjgwODU5MzggMTkuNzc3MzQ0IEwgNC4yMjI2NTYyIDIxLjE5MTQwNiBMIDYuMzQzNzUgMTkuMDcwMzEyIEwgNC45Mjk2ODc1IDE3LjY1NjI1IHogTSAxOS4wNzAzMTIgMTcuNjU2MjUgTCAxNy42NTYyNSAxOS4wNzAzMTIgTCAxOS43NzczNDQgMjEuMTkxNDA2IEwgMjEuMTkxNDA2IDE5Ljc3NzM0NCBMIDE5LjA3MDMxMiAxNy42NTYyNSB6IE0gMTEgMjEgTCAxMSAyNCBMIDEzIDI0IEwgMTMgMjEgTCAxMSAyMSB6Ij48L3BhdGg+Cjwvc3ZnPg=="/>
                        }
                    </button>
                
                <Personal mystyle="no" />
            </nav>
        </>
    )
}

