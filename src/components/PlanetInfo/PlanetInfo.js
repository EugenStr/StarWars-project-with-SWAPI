import React from 'react'
import './PlanetInfo.sass'


const PlanetInfo = (props) => {
  const {name, population, diameter, rotationPeriod} = props.info
    return (
        <ul className="random-planet__info">
          <li><h2>{name}</h2></li>
          <li><p>Population: {population}</p></li>
          <li><p>Rotation Period: {rotationPeriod}</p></li>
          <li><p>Diametr: {diameter}</p></li>
        </ul>
    )

}

export default PlanetInfo
