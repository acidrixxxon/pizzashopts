import React from 'react';

import OrderStatusDeliveryView from './OrderStatusDeliveryView/OrderStatusDeliveryView';
import OrderStatusDrinkView from './OrderStatusDrinkView/OrderStatusDrinkView';
import OrderStatusPizzaView from './OrderStatusPizzaView/OrderStatusPizzaView';
import OrderStatusSideView from './OrderStatusSideView/OrderStatusSideView';

interface ComponentProps {
  items: any;
}

const OrderStatusItemsList: React.FC<ComponentProps> = ({ items }) => {
  return (
    <div id='order__itemsList'>
      {items !== undefined &&
        items.map((item: any, index: number) => {
          return (
            <>
              {item.id === 999 && <OrderStatusDeliveryView />}
              {item.class === 0 && <OrderStatusPizzaView item={item} />}
              {item.class === 1 && <OrderStatusSideView item={item} />}
              {item.class === 2 && <OrderStatusDrinkView item={item} />}
            </>
          );
        })}
    </div>
  );
};

export default OrderStatusItemsList;
