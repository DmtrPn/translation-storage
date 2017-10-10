import React from 'react';

import TranslationNew from './TranslationNew';

function List(props) {
    return (
        <section className="todo-list">
            {props.translations.map(translation =>
                <TranslationNew
                    key={translation._id}
                    title={translation.key}
                    id={translation._id}
                    values={translation.values}
                    onEdit={props.onEdit}
                    onHide={props.onHide}
                    onDelete={props.onDelete}
                    onChange={props.onChange}
                />
            )}
        </section>
    );
}
//
// List.propTypes = {
//     todos: React.PropTypes.arrayOf(React.PropTypes.shape({
//         id: React.PropTypes.number.isRequired,
//         title: React.PropTypes.string.isRequired,
//         completed: React.PropTypes.bool.isRequired
//     })).isRequired,
//     onDelete: React.PropTypes.func.isRequired,
//     onToggle: React.PropTypes.func.isRequired,
//     onEdit: React.PropTypes.func.isRequired
// };

export default List;