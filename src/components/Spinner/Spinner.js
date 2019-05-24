import React from 'react';
import './Spinner.css'

const Spinner = () => {
  return (
    <div class="lds-css ng-scope loading-spinner">
      <div class="lds-double-ring">
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Spinner
