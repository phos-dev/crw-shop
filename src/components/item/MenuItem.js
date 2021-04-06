import React from 'react';
import './menuitem.styles.scss';
const MenuItem = ({ title, background, size }) => {
  return (
    <div className={`${size} menuItem`}>
      <div
        className='background'
        style={{
          backgroundImage: `url(${background})`
        }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='sub'>COMPRE AGORA</span>
      </div>
    </div>
  );
};
export default MenuItem;
