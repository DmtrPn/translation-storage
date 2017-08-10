import React from 'react';

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
    count: React.PropTypes.number.isRequired
};

export default Stats;
