import './Card.css';

export function CardMain({id, name, background_image}){

    return(
        <>
            <div className="card-main-p" style={{ backgroundImage:`url("${background_image}")` }}>
                    
                <div className="info-card-p">
                    
                    <h2>{name} New Season</h2>
                    <p>Join live stream</p>

                    <h3 className="timer">11:45</h3>
                    
                </div>
            </div>
        </>
    )
}