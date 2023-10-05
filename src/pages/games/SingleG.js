import dataResponse from '../../utils/data-games.json';
import { CardMain } from "./CardMain";

export function SingleG(){
    const games = dataResponse.results;
    
    function genRamdom(min,max){
        return Math.random() * (max - min) + min;
    };

    //const randomNumber = genRamdom(0, games.length);
    const randomNumber = 3070;
    
    return(
        <>{
            games?.map((obj)=>(
                obj.id === randomNumber ?
                    <CardMain key={obj.id} name={obj.name} background_image={obj.background_image} />
                : ""
            ))
        }</>
        
    )
}