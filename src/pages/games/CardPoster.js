

export function CardPoster({id, name, background_image}){
    //"url('./img/1de8ff69ed31d7a47d4f7770f23f20b8.jpg')"
    return(
        <>
            <div className="card-p" style={{ backgroundImage:`url("${background_image}")` }}>
                    
                <div className="info-card-p">
                    <p>number</p>
                    <h4>{name}</h4>
                    <p>icon</p>
                </div>
            </div>
        </>
    )
}