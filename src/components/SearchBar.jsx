import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let title = event.target.value;

        this.setState({title});
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    type="text"
                    value={this.state.title}
                    placeholder="Введите текст для поиска"
                    onChange={this.handleChange}
                />
                <Button
                    className="search"
                    onClick={() => this.props.onSearch(this.state.title)}
                >
                    Поиск по ключу
                </Button>
                <Button
                    className="search"
                    onClick={() => this.props.onSearch(this.state.title, true)}
                >
                    Поиск по тексту
                </Button>
            </div>
        );
    }


}

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired
};

export default SearchBar;
