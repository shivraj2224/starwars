import React, { useState } from 'react';
import {gql, useQuery} from "@apollo/client";
import ShowMore from './ShowMore';

const PERSONS = gql`
{
  persons{
    status
    updatedAt
    createdAt
    id
    name
    height
    birthYear
    mass
    skinColor
    gender
    eyeColor
    hairColor
    homeworld {
      id
    }
  }
}
`


function Persons() {
    const { loading, error, data } = useQuery(PERSONS);
    const [visible, setVisible] = useState(12);

    const showMore = ( ) => {
      setVisible((prevState) => prevState + 12);
    }

    if(loading) return <p>Loading....</p>
    if(error) return <p>Someting went Wrong {error}</p>

    return (
        <div className='main'>
            <h1>Person</h1>
            <div className='card'>
                {
                    data.persons.slice(0,visible).map((person) => (
                    <div key={person.id} className='card__main'>
                        <h3>{person.name}</h3>
                        <h5>Height: {person.height}</h5>
                        <h5>Mass: {person.mass}</h5>
                        <h5>BirthYear: {person.birthYear}</h5>
                        <h5>Gender: {person.gender}</h5>
                        <h5>SkinColor: {person.skinColor}</h5>
                        <h5>EyeColor: {person.eyeColor}</h5>
                        <h5>HairColor: {person.hairColor}</h5>
                    </div>
                    ))
                }
            </div>
            <ShowMore visible={visible} count={88} showMore={showMore} />
        </div>
    )
}

export default Persons
