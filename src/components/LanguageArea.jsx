import React from 'react';

const languageName = {
    ru: 'Русский',
    en: 'Английский',
    zn: 'Китайский',
    hi: 'Хинди',
    sp: 'Испанский',
    pt: 'Португальский'
};
class LanguageArea extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.text
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        this.props.onChange(this.props.language, value);
        this.setState({value: value});
    }

    render() {
        const titleText = languageName[this.props.language];
        return (
            <div className="language-area">
                <h4>{titleText}</h4>
                <textarea
                    className="textarea"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

LanguageArea.propTypes = {
    language: React.PropTypes.string.isRequired,
    text: React.PropTypes.string
};

export default LanguageArea;
