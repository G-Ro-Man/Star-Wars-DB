export default class DummySwapiService {
  _people = [
    {
      id: 1,
      name: 'Bilbo Baggins [TEST DATA]',
      gender: 'male',
      birthYear: 'long ago',
      eyeColor: 'dark brown',
    },

    {
      id: 2,
      name: 'Frodo Baggins [TEST DATA]',
      gender: 'male',
      birthYear: 'long ago',
      eyeColor: 'dark brown',
    },
  ]

  _planets = [
    {
      id: 1,
      name: 'Earth [TEST DATA]',
      population: '7.530.000.000',
      rotationPeriod: '23 hours 56 seconds',
      diameter: '12.742 km',
    },
    {
      id: 2,
      name: 'Venus [TEST DATA]',
      population: 'not known',
      rotationPeriod: '243 days',
      diameter: '12.104 km',
    },
  ]

  _starships = [
    {
      id: 1,
      name: 'USS Enterprise [TEST DATA]',
      model: 'NCC-1701-C',
      manufacturer: 'Northrop Grumman Shipbuilding',
      costInCredits: 'not known',
      length: 'approx 300 meters',
      crew: 1000,
      passengers: 50,
      cargoCapacity: 100,
    },
    {
      id: 2,
      name: 'USS Starship [TEST DATA]',
      model: 'AN-2701-E',
      manufacturer: 'Northrop  Shipbuilding',
      costInCredits: 'not known',
      length: 'approx 100 meters',
      crew: 200,
      passengers: 10,
      cargoCapacity: 100,
    },
  ]

  getAllPeople = async () => {
    return this._people
  }

  getPerson = async (id) => {
    return this._people[id - 1]
  }

  getAllPlanets = async () => {
    return this._planets
  }

  getPlanet = async (id) => {
    return this._planets[id - 1]
  }

  getAllStarships = async () => {
    return this._starships
  }

  getStarship = async (id) => {
    return this._starships[id - 1]
  }

  getPersonImg = () => {
    return `https://placeimg.com/400/500/people`
  }

  getStarshipImg = () => {
    return `https://placeimg.com/600/400/tech`
  }

  getPlanetImg = () => {
    return `https://placeimg.com/400/400/nature`
  }
}
