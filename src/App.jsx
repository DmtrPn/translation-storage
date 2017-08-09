import React from 'react';
import ReactDOM from 'react-dom';

import Header from "./components/Header";
import Translation from "./components/Translation";
import Form from './components/Form';

import ServerApi from './api';
import SearchBar from "./components/SearchBar";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            translations: [],
            count: 0
        };

        this.handleSearch = this.handleSearch.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSubmitChange = this.handleSubmitChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleHide = this.handleHide.bind(this);
    }

    componentDidMount() {
        ServerApi.getTranslationsList()
            .then(data =>
                this.setState({
                translations: data.translations,
                count: data.count
            }))
            .catch(this.handleError)
    }

    handleSearch(value) {
        const result = value != '' ?
            ServerApi.searchTranslations(value) :
            ServerApi.getTranslationsList();
        result.then(data => {
                console.log(data);
                value != '' ?
                    this.setState({
                        translations: data
                    }) :
                    this.setState({
                        translations: data.translations,
                        count: data.count
                    });
            })
            .catch(this.handleError)

    }

    handleEdit(id) {
        ServerApi.getTranslationsById(id)
            .then(response => {
                const translations = this.state.translations.map(translation => {
                    if (translation._id === id) {
                        translation.values = response.data.values
                    }
                    return translation;
                });

                this.setState({translations: translations})
            })
            .catch(this.handleError)

    }

    handleHide(id) {
        const translations = this.state.translations.map(translation => {
            if (translation._id === id) {
                translation.values = null
            }
            return translation;
        });

        this.setState({translations: translations})
    }

    handleSubmitChange(id, key, values) {
        const newParams = {
            key: key,
            values: values
        };
        ServerApi.changeTranslation(id, newParams)
            .then(response => {
                const translations = this.state.translations.map(translation => {
                    if(translation._id === id) {
                        translation.values = null; //response.data.values;
                        translation.key = response.data.key;
                    }
                    return translation;
                });

                this.setState({translations: translations})
            })
            .catch(this.handleError)
    }

    handleDelete(id) {
        ServerApi.deleteTranslation(id)
            .then(response => {
                if(response.data) {
                    const translations = this.state.translations.filter(
                        translation => translation._id !== id);
                    const newCount = this.state.count - 1;
                    this.setState({
                        translations: translations,
                        count: newCount
                    })
                }
            });
    }

    handleAdd(title) {
        ServerApi.createTranslation(title)
            .then(response => {
                this.state.translations.unshift(response.data);
                const newCount = this.state.count + 1;
                this.setState({
                    count: newCount
                });
                window.scrollTo(0,0);
            })
            .catch(this.handleError);
    }

    handleError(error) {
        console.log(error);
    }

    render() {
        return (
            <main>
                <Header title="Translations data" count={this.state.count}/>
                <section className="todo-list">
                    <SearchBar onSearch={this.handleSearch}/>
                </section>
                <section className="todo-list">
                    {this.state.translations.map(translation =>
                        <Translation
                            key={translation._id}
                            title={translation.key}
                            id={translation._id}
                            values={translation.values}
                            onEdit={this.handleEdit}
                            onHide={this.handleHide}
                            onDelete={this.handleDelete}
                            onChange={this.handleSubmitChange}
                        />)
                    }
                    </section>

                <Form onAdd={this.handleAdd} />
            </main>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));