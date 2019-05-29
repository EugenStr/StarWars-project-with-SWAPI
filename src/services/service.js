export default class SwapService {
  _apiBase = 'https://swapi.co/api';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`)

    if (!res.ok) {
      throw new Error(`Could not fetch ${url} received ${res.status}` )
    }
    return res.json()
  }

  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}/`)
    const resPlanet = this._transformPlanet(planet);
    let img;
    await fetch(`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`)
      .then(res => {
        if (res.status !== 404) {
          img = res.url
        } else {
          img = 'https://www.rodeoticket.com/img/Race-Registration-Image-Not-Found.png'
        }
      })
    resPlanet.img = img
    return resPlanet
  }

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results.map(el => this._transformPlanet(el))
  }



  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results.map(el => this._transformStarship(el))
  }



  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results.map(el => this._transformPerson(el))
  }

  _extractId(item) {
    return item.url.match(/\d+/)[0]
  }

  _transformPlanet(planet) {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      diameter: planet.diameter,
      rotationPeriod: planet.rotation_period
    }
  }

  _transformPerson(person) {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  }

  _transformStarship(starship) {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers
    }
  }
}
