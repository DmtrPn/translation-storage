import React from 'react';

import TranslationNew from './TranslationNew';

function List(props) {
    return (
        <section className="null">
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

export default List;
