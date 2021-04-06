import React, { useState } from 'react';
import './formInput.styles.scss';
const FormInput = ({ label, handleChange, ...props }) => {
  const [focus, setFocus] = useState(false);
  return (
    <div className='group'>
      <input
        className='formInput'
        onChange={handleChange}
        {...props}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      {label ? (
        <label
          className={`${props.value.length || focus ? 'move' : ''} inputLabel`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};
export default FormInput;
