import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../common/Button';

import * as style from './home.scss';

Home.propTypes = {
    count: PropTypes.number.isRequired,
    onDecButton: PropTypes.func.isRequired,
    onIncButton: PropTypes.func.isRequired
};

export function Home({count, onDecButton, onIncButton}) {
    return (
        <main className={style.home}>
            <Button
                className={style.countButton}
                onClick={onDecButton}
            >
                -
            </Button>
            <div className={style.count}>
                {count}
            </div>
            <Button
                className={style.countButton}
                onClick={onIncButton}
            >
                +
            </Button>
        </main>
    );
}
