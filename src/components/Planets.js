import React, { useState } from 'react';
import {gql, useQuery} from "@apollo/client";
import ShowMore from './ShowMore';

const PLANETS = gql`
{
  planets{
    status
    updatedAt
    createdAt
    id
    population
    climate
    orbitalPeriod
    terrain
    name
    gravity
    rotationPeriod
    surfaceWater
    diameter
    residents{
      id
    }
    films{
      id
    }
  }
}
`

function Planets() {

    const { loading, error, data } = useQuery(PLANETS);
    const [visible, setVisible] = useState(12);

    const showMore = () => {
      setVisible((prevState) => prevState + 12);
    }
 
    if(loading) return <p>Loading....</p>
    if(error) return <p>Someting went Wrong {error}</p>

    return (
        <div className='main'>
            <h1>Planets</h1>
            <div className='card'>
                {
                    data.planets.slice(0,visible).map((planet) => (
                    <div key={planet.id} className='card__main'>
                        <h3>{planet.name}</h3>
                        <h5>Population: {planet.population}</h5>
                        <h5>Climate: {planet.climate}</h5>
                        <h5>OrbitalPeriod: {planet.orbitalPeriod}</h5>
                        <h5>Terrain: {planet.terrain}</h5>
                        <h5>Gravity: {planet.gravity}</h5>
                        <h5>RotationPeriod: {planet.rotationPeriod}</h5>
                        <h5>SurfaceWater: {planet.surfaceWater}</h5>
                        <h5>Diameter: {planet.diameter}</h5>
                    </div>
                    ))
                }
            </div>
            <ShowMore visible={visible} count={60} showMore={showMore} />
        </div>
    )
}

export default Planets
