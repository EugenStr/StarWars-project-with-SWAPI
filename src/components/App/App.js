import React from 'react'
import { BrowserRouter, Route} from "react-router-dom";
import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry'
import {
  peopleList,
  planetsList,
  starshipsList
} from '../sw-components'
import './App.sass'

const App = () => {
    return (
      <BrowserRouter>
        <ErrorBoundry>
          <div className="app-wrapper containerr">
            <Header />
            <RandomPlanet/>
            <main className="main-block">
              <Route path ='/people' render= { props => peopleList} />
              <Route path ='/planets' render= { props => planetsList} />
              <Route path ='/starships' render= { props => starshipsList} />
            </main>
          </div>
        </ErrorBoundry>
      </BrowserRouter>
    )
}

export default App
