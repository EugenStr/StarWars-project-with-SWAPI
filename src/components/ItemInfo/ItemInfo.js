import React from 'react'
import './ItemInfo.sass'
import PropTypes from 'prop-types';

const ItemInfo = ({listName, typeOfList, renderInfo}) => {



  if (!listName) {
    return <div className="choose-person__text">Choose Item</div>;
  } else {
    const component = renderInfo.map(el => <li key = {el.label}>{el.label} <span>{listName[el.field]}</span></li>)
    return (
      <div className="info-about">
        <img alt="people-img" src={`https://starwars-visualguide.com/assets/img/${typeOfList}/${listName.id}.jpg`}/>
          <ul className="info-list">
            {component}
          </ul>
      </div>
    )
  }

}


ItemInfo.defaultProps = {
  listName: null
}

ItemInfo.propTypes = {
  listName: PropTypes.object,
  typeOfList: PropTypes.string,
  renderInfo: PropTypes.array
}

export default ItemInfo
