import "./cards.css";

 
export default function Cards({characters}) {

    let display;
    if(characters) {
        display=characters.map((character)=>{
            let {name,status,gender,image,id,location,species} = character
            return <div className="col-4 mb-4" key={id}>
                <div className="card position-relative border-primary">
                    <img src={image} className="img-fluid" alt={name} />
                    <div className="content p-2">
                        <h5 className="fw-bold">{name}</h5>
                        <h6 className="text-warning">{gender}</h6>
                        <p className=""><span className="text-success">Location :  </span>{location.name}</p>
                        <p className="text-primary">{species}</p>
                    </div>
                    {status==="Alive" ? <span className="badge fs-6 bg-success status">{status}</span> : status==="Dead" ? <span className="badge fs-6 bg-danger status">{status}</span> : <span className="badge fs-6 bg-secondary status">{status}</span>}
                </div>
            </div>
        })
    } else {
        return <div className="">No Characters Here!</div>
    }

    return (
        <>
            {display}
        </>
    )
}