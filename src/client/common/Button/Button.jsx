import React from 'react';
import PropTypes from 'prop-types';

import * as style from './Button.scss';

export function Button(props) {
    const className = `${style.button} ${props.className ? props.className : ''}`;
    return (
        <button {...props} className={className}>
            {props.children}
        </button>
    );
}

Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node
};
