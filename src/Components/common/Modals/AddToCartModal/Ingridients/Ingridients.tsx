import React from 'react';

import ActiveIngridients from './ActiveIngridients/ActiveIngridients';
import AdditionalIngridients from './AdditionalIngridients/AdditionalIngridients';

const Ingridients: React.FC = () => {
  return (
    <div className='ingridients'>
      <ActiveIngridients />
      <AdditionalIngridients />
    </div>
  );
};

export default Ingridients;
