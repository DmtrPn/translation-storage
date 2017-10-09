import { connect } from 'react-redux';

import List from '../components/List';
import {getTranslationDetail} from '../redux/actions';

function mapStateToProps(state) {
    console.log('list contain', state);
    return {
        translations: state.translations
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onEdit: id => dispatch(getTranslationDetail(id))
    };
}

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;