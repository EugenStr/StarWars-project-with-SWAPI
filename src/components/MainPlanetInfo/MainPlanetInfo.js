import React from 'react'
import './MainPlanetInfo.sass';

const PeopleInfo = ({person, img}) => {
  const images = person ? img[person.name] : false
  console.log(person)
  const component = person ? <div className="info-about info-about__planet">
                             <img alt="planet-img" src={images} className="planet-img"/>
                             <h3>{person.name}</h3>
                             <p>Rotation Period: <span>{person.rotation_period}</span></p>
                             <p>Diameter: <span>{person.diameter}</span></p>
                             <p>Population : <span>{person.population}</span></p>
                             <p>Gravity: <span>{person.gravity}</span></p>
                             <p>Climate: <span>{person.climate}</span></p>
                             </div>
                             : <div className="choose-person__text">Choose Planet</div>;
  return (
    <div>{component}</div>
  )
}

export default PeopleInfo
