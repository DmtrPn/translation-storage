import React from 'react';
import OkIcon from './svg/ok-mark.svg';

import * as style from './icon.scss';

export function Icon(props) {
    function getIcon() {
        switch (props.iconType) {
        case 'OkIcon':
            return <OkIcon className={style.icon}/>;
        default:
            break;
        }

    }

    return getIcon();
}

