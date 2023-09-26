import {Personal} from '../stepinside/Personal.js';
import {useContext} from 'react';
import {DataContext} from '../../globals/dataContext';
import { SingleG } from '../games/SingleG.js';
import { SearchG } from '../games/SearchG.js';
import { NavPlatform } from './NavPlatform.js';

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
                    <h2><spam>01.</spam> Choose Platform</h2>
                    <NavPlatform/>
                    <h2><spam>02.</spam> Searching Game</h2>
                    <SearchG />
                </div>
            </div>
        </>
    )
}