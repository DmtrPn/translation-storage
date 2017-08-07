import React from 'react';

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
        return (
            <div className="language-area">
                <h3>{this.props.language}</h3>
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