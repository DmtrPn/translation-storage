import * as React from 'react';
import { connect } from 'react-redux';

import { loadTranslations } from '../../store/translation/actions';
import { TranslationApi } from '../../Api';


@connect(null, mapDispatchToProps)
class TranslationsPageContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        const translations = await TranslationApi.getTranslationsList();
        console.log(translations);
        this.props.loadTranslations(translations);
    }

    render() {

    }

}

function mapStateToProps(state) {
}

function mapDispatchToProps(dispatch) {
    return {
        loadTranslations: (translations) => dispatch(loadTranslations(translations))
    };
}

export {
    TranslationsPageContainer
};
