import {Personal} from '../stepinside/Personal.js';
import {useContext} from 'react';
import {DataContext} from '../../globals/dataContext';
import { SingleG } from '../games/SingleG.js';
import { SearchG } from '../games/SearchG.js';
import { Navigator } from '../../Navigator/Navigator.js';

export function MainBoard(){
    const {contextData} = useContext(DataContext);

    return(
        <>
            <div className='card-main-board'>
                <div className={`main-p main-p-b-a ${contextData.themeSite}`}> 
                    <h1>start <span>streaming</span> games differently</h1>
                    <p>gamor now has <span>streaming party</span> platform</p>
                    <Personal mystyle="si" />
                </div>
                
                <div className={`main-p main-p-b-b ${contextData.themeSite}`}>
                    <SingleG />  
                </div>

                <div className={`main-p main-p-b-c ${contextData.themeSite}`}> 
                    <h2><span>01.</span> Choose Platform</h2>
                    <Navigator className="nav-platform" />

                    <h2><span>02.</span> Searching Game</h2>
                    <SearchG />
                </div>
            </div>
        </>
    )
}