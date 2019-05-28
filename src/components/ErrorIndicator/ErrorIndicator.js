import React from 'react';

import './ErrorIndicator.sass';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src='https://raw.githubusercontent.com/Juriy/pro-react-redux/master/star-db/100-higher-order-components/src/components/error-indicator/death-star.png' alt="error icon"/>
      <span className="boom">BOOM!</span>
      <span>
        something has gone terribly wrong
      </span>
      <span>
        (but we already sent droids to fix it)
      </span>
    </div>
  );
};

export default ErrorIndicator;
