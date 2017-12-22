import React from 'react';
import PropTypes from 'prop-types';

import * as style from './about.scss';
import { Button } from '../../common/Button';

About.propTypes = {
    testData: PropTypes.string.isRequired,
    storeData: PropTypes.string.isRequired,
    onGetDataButtonClick: PropTypes.func.isRequired,
    onGetDataFromStoreButtonClick: PropTypes.func.isRequired
};

export function About({testData, storeData, onGetDataButtonClick, onGetDataFromStoreButtonClick}) {
    return (
        <div className={style.about}>
            <h1 className={style.title}>Getting data from server</h1>
            <h1 className={style.subTitle}>Without redux</h1>
            <p className={style.data}>{testData}</p>
            <Button onClick={onGetDataButtonClick}>Without redux</Button>
            <br/>
            <h1 className={style.subTitle}>With redux</h1>
            <p className={style.data}>{storeData}</p>
            <Button onClick={onGetDataFromStoreButtonClick}>With redux</Button>
        </div>
    );
}
