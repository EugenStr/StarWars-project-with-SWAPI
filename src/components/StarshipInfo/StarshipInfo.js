import React from 'react'
import './StarshipInfo.sass';

const StarshipInfo = ({person, img}) => {
  const images = person ? img[person.name] : false
  console.log(person)
  const component = person ? <div className="info-about info-about__planet">
                             <img alt="planet-img" src={images} className="planet-img"/>
                             <h3>{person.name}</h3>
                             <p>MGLT: <span>{person.MGLT}</span></p>
                             <p>Cost in credits: <span>{person.cost_in_credits}</span></p>
                             <p>Hyperdrive rating: <span>{person.hyperdrive_rating}</span></p>
                             <p>Passengers: <span>{person.passengers}</span></p>
                             </div>
                             : <div className="choose-person__text">Choose Starships</div>;
  return (
    <div>{component}</div>
  )
}

export default StarshipInfo
