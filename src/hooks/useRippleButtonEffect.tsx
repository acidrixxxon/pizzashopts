import React from 'react';

export const useRippleButtonEffect = (buttonRef: React.RefObject<HTMLButtonElement>) => {
  const button = buttonRef.current ? buttonRef.current : null;

  React.useEffect(() => {
    if (button) {
      const applyContainerProperties = () => {
        button?.classList.add('ripple__container');
      };

      applyContainerProperties();

      const onClickHandler = (e: any) => {
        button?.classList.remove('ripple__effect');

        button?.style.setProperty('--effect-top', `${e.offsetY - 50}px`);
        button?.style.setProperty('--effect-left', `${e.offsetX - 50}px`);

        button?.classList.add('ripple__effect');
      };

      applyContainerProperties();

      button?.addEventListener('mouseup', onClickHandler);

      return () => {
        button?.removeEventListener('mouseup', onClickHandler);
      };
    }
  });
};
