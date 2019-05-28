import React from 'react'
import SwapService from '../../services/service'
import ItemList from '../ItemList/ItemList';

const swapi = new SwapService();
const peopleList = (
  <ItemList
    fetchUrl={swapi.getAllPeople()}
    typeOfList={'characters'}
    renderItem={({name, birthYear}) => `${name} ${birthYear}`}>
    {[{field: 'name', label: 'Name'}, {field: 'gender', label: 'Gender'}, {field: 'eyeColor', label: 'Eye Color'}, {field: 'birthYear', label: 'Birth Year'}]}
  </ItemList>
)



const planetsList = (
  <ItemList
    fetchUrl={swapi.getAllPlanets()}
    typeOfList={'planets'}
    renderItem={({name}) => `${name}`}>
    {[{field: 'name', label: ''}, {field: 'population', label: 'Population:'}, {field: 'diameter', label: 'Diameter:'}, {field: 'rotationPeriod', label: 'Rotation Period:'}]}
  </ItemList>
)

const starshipsList = (
  <ItemList
    fetchUrl={swapi.getAllStarships()}
    typeOfList={'starships'}
    renderItem={({name}) => `${name}`}>
    {[
      {field: 'name', label: ''},
      {field: 'model', label: 'Model:'},
      {field: 'manufacturer', label: 'Manufacturer:'},
      {field: 'costInCredits', label: 'Cost In Credits:'},
      {field: 'length', label: 'Length:'},
      {field: 'crew', label: 'Crew:'},
      {field: 'passengers', label: 'Passengers:'}

    ]}
  </ItemList>
)

export {
  peopleList,
  planetsList,
  starshipsList
}
