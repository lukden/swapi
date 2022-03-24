import React, { useState, useEffect } from 'react';
import { getAllStarships } from '../../services/sw-api';
import { Link } from 'react-router-dom';

const StarshipList = (props) => {

  const [starships, setStarships] = useState([])

  useEffect(() => {
    getAllStarships()
    .then(starshipData => setStarships(starshipData.results))
  }, [])

  return (  
    <div className="ship-cards">
      {starships.length ?
      <>
      {starships.map((starship, index) =>
        <Link to='/starship' state={{starship}} key={index}>
          <div className='ship-card'> 
          {starship.name} <br />
          </div>
        </Link>
      )}
      </>
      :
      <>
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      </>
      }   
    </div>
  );
}

export default StarshipList;