import React from 'react';
import loaderSrc from '../../assets/loader.gif';

const Loader = props =>(
    <div>
        <img
            alt="Loader icon"
            src={loaderSrc}
            style={{width: 100}}
        />
    </div>
);

export default Loader;