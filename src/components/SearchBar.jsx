import React from 'react';
import Button from './Button';

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
                    Найти
                </Button>
            </div>
        );
    }


}

SearchBar.propTypes = {
    onSearch: React.PropTypes.func.isRequired
};

export default SearchBar;
