import React from 'react';
import { ReactComponent as GoogleLogo } from '../../icons/google-icon.svg';
import './button.styles.scss';
const Button = ({ onClick, google, ...props }) => {
  return (
    <button onClick={onClick} className='btn'>
      {
        google 
        ? 
        <div className='google'>
          <GoogleLogo width='15px' height='auto'/>
        </div>
        : 
        null
      }
      <span>{props.children}</span>
    </button>
  );
};
export default Button;
