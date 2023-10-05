//import {useFetch} from "../../utils/useFetch.js";
import dataResponse from '../../utils/data-games.json';
import { CardPoster } from "./CardPoster";

export default function CardG(){
    /*
    Solo para no quemar la API por si las moscas
    const URL = 'https://api.rawg.io/api/games?key=200dd310babc45c3aaf9db365336d401&page_size=8&genres=action';
    const {data, loading, error} = useFetch(URL);
    const games= data;
    */

    const games = dataResponse.results;

    return(
        <>
            {
               games?.slice(0,8).map((obj)=>(
                    <CardPoster key={obj.id} id={obj.id} name={obj.name} background_image={obj.background_image} />
                )) 




                /*
            {error && <h3 className="error-message">Error: {error}</h3>}
            {loading && <h4 className="loading-message">Loading results...</h4>} 
            {
                games?.map((obj)=>(
                    <CardPoster id={obj.id} name={obj.name} background_image={obj.background_image} />
                ))
            }
                */
            }
        </>
    )
}