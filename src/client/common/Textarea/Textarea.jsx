import React from 'react';
import PropTypes from 'prop-types';

import * as style from './Textarea.scss';

export function Textarea(props) {
    return (
        <textarea
            className={style.root}
            value={props.value}
            onChange={props.onChange}
        />
    );
}

Textarea.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.node
};
