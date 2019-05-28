import React, {useState, useEffect} from 'react'
import './ItemList.sass'
import ItemInfo from '../ItemInfo/ItemInfo'

const ItemList = ({fetchUrl, renderItem, typeOfList, children}) => {

    const [allList, setAllList] = useState(null)
    const [activeLink, setActiveLink] = useState()

    useEffect(() => {
        fetchUrl
        .then(res => setAllList(res));
    }, [])

    const showInfoAboutPerson = (e) => {
      const idx = e.target.id
      setActiveLink(allList.find(person => person.id === idx))
    }

    if (!allList) {
      return (<p className="loading">Loading ... </p>)
    } else {
      return (

        <div className="main-container flex-row">
          <ul className="list-group list-items">
            {allList.map(item => {
                const label = renderItem(item);
                return (
                  <li onClick = {showInfoAboutPerson} href="#" className="list-group-item list-group-item-action" id = {item.id} key={item.id}>{label}</li>
                )
            })}
          </ul>
          <ItemInfo listName={activeLink} typeOfList={typeOfList} renderInfo={children}/>
        </div>
      )
    }



}

export default ItemList
