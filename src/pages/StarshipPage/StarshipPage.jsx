import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDetails, getAllStarships } from '../../services/sw-api';


const StarshipDetails = (props) => {
  const [starshipDetails, setStarshipDetails] = useState({})
  let location = useLocation()

  useEffect(()=> {
    getDetails(location.state.starship.url)
    .then(starshipDetails => 
      setStarshipDetails(starshipDetails)
    )
  }, [])
console.log('Correct', starshipDetails);
  return ( 
  <>
  {starshipDetails.name}
  {starshipDetails.model}
  </> );
}
 
export default StarshipDetails;