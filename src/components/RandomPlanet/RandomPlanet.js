import React from 'react';
import './RandomPlanet.sass';
import PlanetInfo from '../PlanetInfo/PlanetInfo';
import SwapService from '../../services/service'
import Spinner from '../Spinner/Spinner'

export default class RandomPlanet extends React.Component {
  swapi = new SwapService();

  state = {
    planet: {},
    loading: true
  }

  onPlanetLoaded = (planet) => {
      this.setState({planet, loading: false})
  }

  updatePlanet = () => {
    const randomNum = Math.floor(Math.random() * 25) + 3;
    this.swapi.getPlanet(randomNum)
      .then(this.onPlanetLoaded);
  }

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 5000);

  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }



  render() {


    return (
      <div className="aside-random-planet">
        {this.state.loading ? <Spinner /> : <React.Fragment>
                                              <img className="random-planet__img" alt='planet' src={this.state.planet.img}/>
                                              <PlanetInfo info={this.state.planet}/>
                                            </React.Fragment>}
      </div>
    )
  }
}
