import React, { useState } from 'react';
import {gql, useQuery} from "@apollo/client";
import ShowMore from './ShowMore';

const VEHICLES = gql`
{
  vehicles{
    status
    updatedAt
    createdAt
    id
    model
    crew
    class
    costInCredits
    length
    passengers
    manufacturer
    cargoCapacity
    name
    consumables
    maxAtmospheringSpeed
    pilots{
      id
    }
    films{
      id
    }
  }
}
`

function Vehicles() {
    const { loading, error, data } = useQuery(VEHICLES);
    const [visible, setVisible] = useState(12);

    const showMore = ( ) => {
      setVisible((prevState) => prevState + 12);
    }

    if(loading) return <p>Loading....</p>
    if(error) return <p>Someting went Wrong {error}</p>

    return (
        <div className='main'>
            <h1>Vehicles</h1>
            <div className='card'>
                {
                    data.vehicles.slice(0,visible).map((vehicle) => (
                    <div key={vehicle.id} className='card__main'>
                        <h3>{vehicle.name}</h3>
                        <h5>Model: {vehicle.model}</h5>
                        <h5>Crew: {vehicle.crew}</h5>
                        <h5>CostInCredits: {vehicle.costInCredits}</h5>
                        <h5>Length: {vehicle.length}</h5>
                        <h5>Passengers: {vehicle.passengers}</h5>
                        <h5>Manufacturer: {vehicle.manufacturer}</h5>
                        <h5>CargoCapacity: {vehicle.cargoCapacity}</h5>
                        <h5>Consumables: {vehicle.consumables}</h5>
                        <h5>maxAtmospheringSpeed: {vehicle.maxAtmospheringSpeed}</h5>
                    </div>
                    ))
                }
            </div>
            <ShowMore visible={visible} count={39} showMore={showMore}/>
        </div>
    )
}

export default Vehicles
