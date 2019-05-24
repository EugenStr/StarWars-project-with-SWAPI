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

  render() {
    const swapi = new SwapService();
    console.log(swapi.getAllStarships())
    return (
      <BrowserRouter>
        <div className="app-wrapper containerr">
          <Header />
          <RandomPlanet />
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
