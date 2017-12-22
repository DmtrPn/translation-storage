import React from 'react';

import * as style from './icons.scss';
import TIcon from '../../common/Icon/svg/ok-mark.svg';
import { Icon } from '../../common/Icon';

export function Icons() {
    return (
        <div className={style.root}>
            <TIcon width="50" height="20" />
            <Icon iconType="OkIcon" />
        </div>
    );
}
