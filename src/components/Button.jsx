import React from 'react';

function Button(props) {
    return (
        <button className={props.className} onClick={props.onClick} {...props}>
            {props.children}

        </button>
    );
}
Button.propTypes = {
    icon: React.PropTypes.string,
    className: React.PropTypes.string,
    onClick: React.PropTypes.func,
    children: React.PropTypes.node
};


// {props.icon ?
//     <i className="material-icons">{props.icon}</i> :
//     props.children
// }


export default Button;