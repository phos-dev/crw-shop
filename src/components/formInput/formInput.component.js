import React, {useState} from 'react';
import './formInput.styles.scss';
const FormInput = ({label, handleChange, ...props}) => {
    const [focus, setFocus] = useState(true);
    return(
    <div className='group'>
        
        
        {
            (label) 
            ?
            (
                <label className={`${(props.value.length || false) ? 'move' : ''} inputLabel`}>
                    {label}
                </label>
            )
            : 
            null
        }
        <input className='formInput' onChange={handleChange} {...props} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}></input>
        
    </div>
)}
export default FormInput; 