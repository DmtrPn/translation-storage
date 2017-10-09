import React from 'react';

import TranslationNew from './TranslationNew';

function List(props) {
    console.log('LIST PROPS:', props);
    return (
        <section className="todo-list">
            {props.translations.map(translation =>
                <TranslationNew
                    key={translation._id}
                    title={translation.key}
                    id={translation._id}
                    values={translation.values}
                    onEdit={props.onEdit}
                    // onHide={this.handleHide}
                    // onDelete={this.handleDelete}
                    // onChange={this.handleSubmitChange}
                />)
            }
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