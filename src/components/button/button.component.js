import React from 'react';
import './button.styles.scss';
import {ReactComponent as GoogleLogo} from '../../icons/google-icon.svg';
const Button = ({onClick, ...props}) => {
    return (
        <button onClick={onClick} className='btn'>
            {
            (props.google) 
            ? 
            <div  className='google'>
                <GoogleLogo width='15px' height='auto'/>
            </div>
            :
            null
            }
            <span>
                {
                props.children
                }
            </span>
        </button>
    ); 
}
export default Button;