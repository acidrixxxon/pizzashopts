import './_Spinner.scss';

import React from 'react';

const Spinner = ({ className = '' }) => {
  return (
    <div className={`lds-ring ${className}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
