import React from 'react';

import Button from './Button';
import LanguageArea from "./LanguageArea";

class Translation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            trnaslations: this.props.values
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
    }

    handleChange(key, text) {
        event.preventDefault();
        this.state.translations[key] = text;
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onChange(this.props.id, this.state.translations);
    }

    makeTranslationParams(values) {
        const translations =  Object.keys(values).reduce((acc, key) => {
            acc.push({
                language: key,
                text: values[key]
            });
            return acc;
        }, []);
        this.state.translations = values;
        return translations;
    }

    renderDisplay() {
        return (
            <div className="translation">
                <span className="translation-title">{this.props.title}</span>

                <Button
                    className="edit icon"
                    icon="edit"
                    onClick={() => this.props.onEdit(this.props.id)}
                />
                <Button
                    className="delete button"
                    icon="delete"
                    onClick={ () => this.props.onDelete(this.props.id)}
                />
            </div>
        );
    }


    renderForm() {
        this.translations = this.makeTranslationParams(this.props.values);
        return (
            <form className="translation-edit-form" onSubmit={this.handleSubmit}>
                {this.translations.map(translation =>
                    <LanguageArea
                        key={translation.language}
                        language={translation.language}
                        text={translation.text}
                        onChange={this.handleChange}
                    />)
                }
                <Button
                    className="save icon"
                    icon="save"
                    type="submit"
                />
            </form>
        );
    }

    render() {
        return (
            <div className="translations">
                {this.renderDisplay()}
                {this.props.values ? this.renderForm() : ''}
            </div>
        )
    }
}

Translation.propTypes = {
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    values: React.PropTypes.object,
    onEdit: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired
};


export default Translation;