import React from 'react';

interface IonIconProps {
  name: string;
  ariaHidden?: boolean;
}

const IonIcon: React.FC<IonIconProps> = ({ name, ariaHidden }) => {
  return (
    <i
      className={`ion-icon ion-${name}`}
      aria-hidden={ariaHidden}
    />
  );        
};

export default IonIcon;