import React from 'react'
import { BrowserRouter, Route} from "react-router-dom";
import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ItemList from '../ItemList/ItemList';
import './App.sass'
import SwapService from '../../services/service'
import PeopleInfo from '../PeopleInfo/PeopleInfo'
import MainPlanetInfo from '../MainPlanetInfo/MainPlanetInfo'
import StarshipInfo from '../StarshipInfo/StarshipInfo'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        toogleRandom: false
      }
  }


  toggleRandomPlanet =  () => {
      this.setState(prevState => ({toogleRandom: !prevState.toogleRandom}));
  }

  render() {
    const swapi = new SwapService();
    const toogleText = this.state.toogleRandom ? 'Open RandomPlanet' : 'Close Random Planet';
    const randomPlanet = this.state.toogleRandom ? null :  <RandomPlanet />;
    return (
      <BrowserRouter>
        <div className="app-wrapper containerr">
          <Header />
          {randomPlanet}
          <button type="button" className="btn btn-warning toogle-btn" onClick={this.toggleRandomPlanet}>{toogleText}</button>
          <main className="main-block">
            <Route path ='/people' render= { props => <ItemList fetchUrl={swapi.getAllPeople()} img={this.people} ChildComp={PeopleInfo} />} />
            <Route path ='/planets' render= { props => <ItemList fetchUrl={swapi.getAllPlanets()} img={this.planets} ChildComp={MainPlanetInfo} />} />
            <Route path ='/starships' render= { props => <ItemList fetchUrl={swapi.getAllStarships()} img={this.starships} ChildComp={StarshipInfo} />} />
          </main>
        </div>
      </BrowserRouter>
    )
  }
}
