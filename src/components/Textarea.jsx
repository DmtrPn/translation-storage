import React from 'react';
import PropTypes from 'prop-types';

function Textarea(props) {
    return (
        <textarea
            className="textarea"
            defaultValue={props.text}
        />
    );
}

Textarea.propTypes = {
    text: PropTypes.string
};

Textarea.defaultProps = {
    text: ''
};


export default Textarea;
