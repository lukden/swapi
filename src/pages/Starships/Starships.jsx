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
  <>
    <div className="starship-cards">
      {starships.map((starship) => (
      <div className="starship">
      <Link to='/starship' state={{starship}} key={starship.name}>
      <div id="starship-model" key={starship.model}></div>
      </Link>
      </div>
      ))}
    </div>
    </>
  )
}

export default StarshipList;