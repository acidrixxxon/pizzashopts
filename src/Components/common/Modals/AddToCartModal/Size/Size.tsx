import React from 'react';

import { Context1 } from '../../../../../Context/Context';
import { IPizzaCrust, IProductActiveSize } from '../../../../../types/ProductTypes';
import './_Size.scss';

interface ComponentProps {
  activeSize: IProductActiveSize;
  setActiveSize: any;
}

const Size: React.FC<ComponentProps> = ({ activeSize, setActiveSize }) => {
  const {
    state: {
      view: {
        search: {
          searchResultModal: { data },
        },
      },
    },
  } = React.useContext(Context1);

  const changeSizeHandler = (index: number): void => {
    setActiveSize((state: any) => ({
      ...state,
      size: index,
      crust: data?.class === 0 && data.variants[index] && data.variants[index].variants ? 0 : null,
    }));
  };
  const changeCrustHandler = (item: number): void => {
    setActiveSize((state: any) => ({ ...state, crust: item }));
  };

  return (
    <div id='addToCartModal__size'>
      <div className='size__variants'>
        {data?.variants.map((item, index) => {
          return (
            <button
              className={activeSize.size === index ? 'size__button active__button' : 'size__button'}
              key={item._id}
              onClick={() => changeSizeHandler(index)}>
              {item.title ? item.title : item.size}
            </button>
          );
        })}
      </div>

      {data?.class === 0 && data.variants[activeSize.size] && data.variants[activeSize.size].variants && (
        <div className='size__variants crust'>
          {data.variants[activeSize.size].variants.map((item: IPizzaCrust, index) => {
            return (
              <button
                style={!item.inSell ? { backgroundColor: 'lightyellow', cursor: 'not-allowed' } : {}}
                disabled={!item.inSell}
                onClick={() => changeCrustHandler(index)}
                className={activeSize.crust === index ? 'size__button active__button' : 'size__button'}
                key={item._id}>
                {item.title}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Size;
