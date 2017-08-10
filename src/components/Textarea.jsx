import React from 'react';

function Textarea(props) {
    return (
        <textarea
            className="textarea"
            defaultValue={props.text}
        />
    );
}

Textarea.propTypes = {
    text: React.PropTypes.string
};

Textarea.defaultProps = {
    text: ''
};


export default Textarea;
