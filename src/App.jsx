import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import Header from "./components/Header";
import Translation from "./components/Translation";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            translations: [],
            count: 0
        };

        // this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSubmitChange = this.handleSubmitChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {
        axios.get('/api/translations')
            .then(response => response.data)
            .then(data =>
                this.setState({
                translations: data.translations,
                count: data.count
            }))
            .catch(this.handleError)
    }

    handleEdit(id) {
        axios.get(`/api/translations/${id}`)
            .then(response => {
                const translations = this.state.translations.map(translation => {
                    if(translation.id === id) {
                        translation.values = response.data.values
                    }
                    return translation;
                });

                this.setState({translations: translations})
            })
            .catch(this.handleError)

    }

    handleSubmitChange(id, values) {
        axios.put(`/api/translations/${id}`, {values})
            .then(response => {
                const translations = this.state.translations.map(translation => {
                    if(translation.id === id) {
                        translation.values = response.data.values
                    }
                    return translation;
                });

                this.setState({translations: translations})
            })
            .catch(this.handleError)
    }

    handleDelete(id) {
        console.log('Delete click on id: ', id);
    }

    handleError(error) {
        console.log(error);
    }

    render() {
        const count = this.state.count;
        return (
            <main>
                <Header title="Translations data" count={count}/>

                <section className="todo-list">
                    {this.state.translations.map(translation =>
                        <Translation
                            key={translation.key}
                            title={translation.key}
                            id={translation.id}
                            values={translation.values}
                            onEdit={this.handleEdit}
                            // onStatusChange={this.handleStatusChange}
                            onDelete={this.handleDelete}
                            onChange={this.handleSubmitChange}
                        />)
                    }
                </section>

                {/*<Form onAdd={this.handleAdd} />*/}
            </main>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));