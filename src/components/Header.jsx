import React from 'react';
import PropTypes from 'prop-types';

import Stats from './Stats';

function Header(props) {
    return (
        <header>
            <Stats count={props.count}/>
            <h1>{props.title}</h1>
        </header>
    );
}

Header.prototype = {
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
};

export default Header;
