const baseUrl = 'https://www.swapi.dev/api/'

export function getAllStarships() {
  return fetch(`${baseUrl}/starships`)
  .then(res => res.json())
}

export function getDetails(starshipUrl) {
  return fetch(`${starshipUrl}`)
  .then(res => res.json())
}