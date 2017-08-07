import React from 'react';

import Stats from './Stats'

function Header(props) {
    return (
        <header>
            <Stats count={props.count}/>
            <h1>{props.title}</h1>
        </header>
    );
}

Header.prototype = {
    title: React.PropTypes.string.isRequired,
    count: React.PropTypes.number.isRequired
};

export default Header;