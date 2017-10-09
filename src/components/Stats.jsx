import React from 'react';
import PropTypes from 'prop-types';


function Stats(props) {
    return (
        <table className="stats">
            <tbody>
                <tr>
                    <th>Всего Переводов:</th>
                    <td>{props.count}</td>
                </tr>
            </tbody>
        </table>
    );

}

Stats.propTypes = {
    count: PropTypes.number.isRequired
};

export default Stats;
