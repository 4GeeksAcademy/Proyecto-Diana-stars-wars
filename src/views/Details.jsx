import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";




const Detail = () => {


     const { id, tipo } = useParams()
     const [detailElements, setDetailElements] = useState(null)
    
    
    
    
        useEffect(() => {
        if (tipo == "Mundo") {
            fetch("https://www.swapi.tech/api/planets/" + id)
                .then(res => res.json())
                .then(data => setDetailElements(data.result))
                .catch(err => console.error(err))
        }
        else if (tipo == "Vehiculo") {
            fetch("https://www.swapi.tech/api/vehicles/" + id)
                .then(res => res.json())
                .then(data => setDetailElements(data.result))
                .catch(err => console.error(err))
        }
        else if (tipo == "Personaje") {
            fetch("https://www.swapi.tech/api/people/" + id)
                .then(res => res.json())
                .then(data => setDetailElements(data.result))
                .catch(err => console.error(err))
        }
    }, [id, tipo])
    return (
        <div className="card mb-3" style={{ maxWidth: "540px;" }}>
            <div className="row g-0">
                <div className="col-md-">
                    <img src="https://lumiere-a.akamaihd.net/v1/images/osha-main_078ce84a.jpeg?region=0%2C0%2C1620%2C910" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <h5 className="card-title">{detailElements && detailElements.properties.name}</h5>
                        {detailElements && detailElements.properties.diameter ? <p className="card-text"> Diameter :{detailElements.properties.diameter}</p> :null} 
                        {detailElements && detailElements.properties.rotation_period ? <p className="card-text"> rotation_period :{detailElements.properties.diameter}</p> :null} 
                        {detailElements && detailElements.properties.surface_water ? <p className="card-text"> surface_water :{detailElements.properties.diameter}</p> :null} 
                        {detailElements && detailElements.properties.model ? <p className="card-text"> model :{detailElements.properties.model}</p> :null} 
                        {detailElements && detailElements.properties.passengers? <p className="card-text"> passengers :{detailElements.properties.passengers}</p> :null} 
                        {detailElements && detailElements.properties.consumables ? <p className="card-text"> consumables :{detailElements.properties.consumables}</p> :null} 
                        {detailElements && detailElements.properties.hair_color ? <p className="card-text"> hair_color :{detailElements.properties.hair_color}</p> :null} 
                        {detailElements && detailElements.properties.height ? <p className="card-text"> height :{detailElements.properties.height}</p> :null} 
                        {detailElements && detailElements.properties.gender ? <p className="card-text">gender :{detailElements.properties.gender}</p> :null} 
                       

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Detail;