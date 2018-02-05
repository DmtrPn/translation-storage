import * as React from 'react';
import { connect } from 'react-redux';

import { TranslationsPage } from './TranslationsPage';
import { loadTranslations } from '../../store/translation/actions';
import { getTranslations } from '../../store/translation/selectors';
import { TranslationApi } from '../../Api';


@connect(mapStateToProps, mapDispatchToProps)
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
        <TranslationsPage />
    }

}

function mapStateToProps(state) {
    return {
        translations: getTranslations(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadTranslations: (translations) => dispatch(loadTranslations(translations))
    };
}

export {
    TranslationsPageContainer
};
