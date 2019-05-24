import React from 'react'
import './PeopleInfo.sass'

const PeopleInfo = ({person, img}) => {
  const images = person ? img[person.name] : false

  const component = person ? <div className="info-about">
    <img alt="people-img" src={images}/>
    <h3>{person.name}</h3>
    <p>Gender: {person.gender}</p>
    <p>Eye color: {person.eye_color}</p>
    <p>Birth Year: {person.birth_year}</p>
  </div> : <div className="choose-person__text">Choose Person</div>;

  return (
    <div>{component}</div>
  )
}

export default PeopleInfo
