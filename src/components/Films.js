import React from 'react';
import {gql, useQuery} from "@apollo/client";

const FILMS = gql`
  {
    films{
      id
      producers
      director
      title
      releaseDate
      openingCrawl
      episodeId
      vehicles{
        id
      }
    	starships{
        id
      }
    	planets{
        id
      }
    }
  }
`

function Films() {

    const { loading, error, data } = useQuery(FILMS);

    if(loading) return <p>Loading....</p>
    if(error) return <p>Someting went Wrong {error}</p>

    return (
        <div className='main'>
            <h1>Films</h1>
            <div className='card'>
                {
                    data.films.map((film) => (
                    <div key={film.id} className='card__main'>
                        <h3>{film.title}</h3>
                        <h5>Producer: {film.producers}</h5>
                        <h5>Director: {film.director}</h5>
                        <p><strong>OpeningCrawl</strong> : {film.openingCrawl}</p>
                        <h5>Release Date: {film.releaseDate}</h5>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Films
