import React from 'react';
import './Spinner.css'

const Spinner = () => {
  return (
    <div className="lds-css ng-scope loading-spinner">
      <div className="lds-double-ring">
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Spinner
