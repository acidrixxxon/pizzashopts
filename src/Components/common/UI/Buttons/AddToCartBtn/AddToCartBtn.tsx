import classNames from 'classnames';
import React from 'react';

import { useRippleButtonEffect } from '../../../../../hooks/useRippleButtonEffect';
import './../../../../../scss/_base.scss';
import './_AddToCartBtn.scss';

interface ComponentProps {
  withRipple?: boolean;
  className?: string;
  onClick: React.Dispatch<any>;
}

const AddToCartBtn: React.FC<ComponentProps> = ({ withRipple = false, className = '', onClick }) => {
  const btnRef = withRipple ? React.useRef<HTMLButtonElement>(null) : undefined;

  withRipple && btnRef && useRippleButtonEffect(btnRef);

  if (withRipple)
    return (
      <button ref={btnRef} className={classNames('toCartBtn', className)} onClick={onClick}>
        В кошик
      </button>
    );
  return (
    <button className={classNames('toCartBtn', className)} onClick={onClick}>
      В кошик
    </button>
  );
};

export default AddToCartBtn;
