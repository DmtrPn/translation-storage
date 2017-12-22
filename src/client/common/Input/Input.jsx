import React from 'react';
import PropTypes from 'prop-types';

import * as style from './Input.scss';

export function Input(props) {
    return (
        <input
            className={style.root}
            type="text"
            value={props.value}
            placeholder={props.placeholder || ''}
            onChange={props.onChange}
        />
    );
}

Input.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.node
};
