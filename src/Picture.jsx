import React from 'react';
import './global.css';

const Picture = ( {photoURL} ) => {

    return(
        <>
            <div className='container'>
                <div className='photo' style={{backgroundImage: `url(${photoURL})`}}></div>
            </div>
        </>
    );
}


export default Picture;