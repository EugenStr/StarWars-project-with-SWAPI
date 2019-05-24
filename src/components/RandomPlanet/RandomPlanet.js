import React from 'react';
import './RandomPlanet.sass';
import PlanetInfo from '../PlanetInfo/PlanetInfo';
import SwapService from '../../services/service'
import Spinner from '../Spinner/Spinner'

export default class RandomPlanet extends React.Component {
  state = {
    planet: {},
    loading: true
  }

  onPlanetLoaded = (planet) => {
      this.setState({planet, loading: false})
      console.log(this.state);
  }

  componentDidMount() {
    const swapi = new SwapService();
    const showRandomPlanet = (timer) => {
        const randomNum = Math.floor(Math.random() * 25) + 2;
        swapi.getPlanet(randomNum)
          .then(this.onPlanetLoaded);
        timer = setTimeout(showRandomPlanet, 15000);
    }
    let timerId = setTimeout(() => {
      showRandomPlanet(timerId);
    }, 0)
  }

  render() {
    return (
      <div className="aside-random-planet">
        {this.state.loading ? <Spinner /> : <React.Fragment>
                                              <img className="random-planet__img" alt='planet' src={`https://starwars-visualguide.com/assets/img/planets/${this.state.planet.id}.jpg`}/>
                                              <PlanetInfo info={this.state.planet}/>
                                            </React.Fragment>}
      </div>
    )
  }
}
