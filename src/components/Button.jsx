import React from 'react';

function Button(props) {
    return (
        <button className={props.className} onClick={props.onClick} {...props}>
            {props.children}
        </button>
    );
}
Button.propTypes = {
    className: React.PropTypes.string,
    onClick: React.PropTypes.func,
    children: React.PropTypes.node
};

export default Button;
