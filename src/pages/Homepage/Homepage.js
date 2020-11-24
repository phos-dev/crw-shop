import React from 'react';
import './homepage.scss';
import Directory from '../../components/directory/directory.component';
const Homepage = (props) => {
    return (
        <div className='homepage'>
            <div onClick={()=>{
                props.history.push('/shop')
            }}>NAVBAR</div>
            <Directory/>
        </div>
    );
}
export default Homepage;