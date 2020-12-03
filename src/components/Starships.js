import React, { useState } from 'react';
import {gql, useQuery} from "@apollo/client";
import ShowMore from './ShowMore';

const STARSHIPS = gql`
{
  starships{
    status
    updatedAt
    createdAt
    id
    costInCredits
    hyperdriveRating
    passengers
    cargoCapacity
    name
    crew
    length
    manufacturer
    maxAtmospheringSpeed
    mglt
    consumables
    class
    pilots{
      id
    }
    films{
      id
    }
  }
}
`

function Starships() {
    const { loading, error, data } = useQuery(STARSHIPS);
    const [visible, setVisible] = useState(12);

    const showMore = ( ) => {
      setVisible((prevState) => prevState + 12);
    }

    if(loading) return <p>Loading....</p>
    if(error) return <p>Someting went Wrong {error}</p>

    return (
        <div className='main'>
            <h1>StarShips</h1>
            <div className='card'>
                {
                    data.starships.slice(0,visible).map((starship) => (
                    <div key={starship.id} className='card__main'>
                        <h3>{starship.name}</h3>
                        <h5>CostInCredits: {starship.costInCredits}</h5>
                        <h5>HyperdriveRating: {starship.hyperdriveRating}</h5>
                        <h5>Passengers: {starship.passengers}</h5>
                        <h5>CargoCapacity: {starship.cargoCapacity}</h5>
                        <h5>Crew: {starship.crew}</h5>
                        <h5>Length: {starship.length}</h5>
                        <h5>Manufacturer: {starship.manufacturer}</h5>
                        <h5>MaxAtmospheringSpeed: {starship.maxAtmospheringSpeed}</h5>
                        <h5>Mglt: {starship.mglt}</h5>
                        <h5>Consumables: {starship.consumables}</h5>
                        <h5>Class: {starship.class}</h5>
                    </div>
                    ))
                }
            </div>
            <ShowMore visible={visible} count={37} showMore={showMore} />
        </div>
)}

export default Starships
