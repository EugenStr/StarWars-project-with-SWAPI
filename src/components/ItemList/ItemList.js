import React, {useState, useEffect} from 'react'
import SwapService from '../../services/service'
import './ItemList.sass'


const ItemList = ({fetchUrl, img, name, ChildComp}) => {

    const [allList, setAllList] = useState([])
    const [activeLink, setActiveLink] = useState()
    useEffect(() => {
        fetchUrl
        .then(res => setAllList(res.results));

    }, [])

    const showInfoAboutPerson = (e) => {
      const idx = e.target.id
      setActiveLink(allList.find(person => person.created === idx))
    }

    return (
      allList.length ?
      <div className="main-container flex-row">
        <ul className="list-group list-items">
          {allList.map(item => <li onClick = {showInfoAboutPerson} href="#" className="list-group-item list-group-item-action" id = {item.created} key={item.created}>{item.name} {item.birth_year === 'unknown' ? '' : item.birth_year}</li>)}
        </ul>
        <ChildComp person = {activeLink} img={img}/>
      </div>
      : <p className="loading">Loading ...</p>
    )
}

export default ItemList
