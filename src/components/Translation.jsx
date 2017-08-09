import React from 'react';

import Button from './Button';
import LanguageArea from "./LanguageArea";

class Translation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            translations: this.props.values,
            title: this.props.title
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
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
        this.props.onChange(this.props.id, this.state.title, this.state.translations);
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

    handleInputChange(event) {
        let title = event.target.value;

        this.setState({title});
    }

    renderDisplay() {
        return (
            <div className="translation">
                <span className="translation-title">{this.props.title}</span>
                {this.props.values ?
                    <Button
                        className="hide"
                        onClick={() => this.props.onHide(this.props.id)}
                    >
                        Свернуть
                    </Button>
                    :
                    <Button
                        className="edit"
                        onClick={() => this.props.onEdit(this.props.id)}
                    >
                        Раскрыть
                    </Button>
                }
                <Button
                    className="delete"
                    onClick={ () => this.props.onDelete(this.props.id)}
                >
                    Удалить
                </Button>
            </div>
        );
    }


    renderForm() {
        this.translations = this.makeTranslationParams(this.props.values);
        return (
            <form className="translation-edit-form" onSubmit={this.handleSubmit}>
                <input type="text"
                       value={this.state.title}
                       placeholder="Текст ключ"
                       onChange={this.handleInputChange}

                />
                {this.translations.map(translation =>
                    <LanguageArea
                        key={translation.language}
                        language={translation.language}
                        text={translation.text}
                        onChange={this.handleChange}
                    />)
                }
                <Button
                    className="save"
                    type="submit"
                >
                    Сохранить
                </Button>
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
    onChange: React.PropTypes.func.isRequired,
    onHide: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired
};


export default Translation;