import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDetails, getAllStarships } from '../../services/sw-api';


const StarshipDetails = (props) => {
  const [starshipDetails, setStarshipDetails] = useState({})
  let location = useLocation()

  useEffect(()=> {
    setStarshipDetails(location.state.starship)
  }, [])

  return ( 
<div className='ship-details-card'>
    {starshipDetails.length ? 
  <>
  Name: {starshipDetails.name}
  <br />
  Model: {starshipDetails.model}
  <br />
  <a href="/">Return</a>
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
  </div> );
}


export default StarshipDetails;