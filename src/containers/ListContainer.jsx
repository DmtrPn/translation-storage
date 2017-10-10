import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import List from '../components/List';
import {
    getTranslationDetail,
    hideTranslationDetail,
    changeTranslationDetail,
    deleteTranslation} from '../redux/actions';

function mapStateToProps(state) {
    return {
        translations: state.translations
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onEdit: bindActionCreators(id => getTranslationDetail(id), dispatch),
        onHide: bindActionCreators(id => hideTranslationDetail(id), dispatch),
        onChange: (id, key, values) => dispatch(changeTranslationDetail(id, key, values)),
        onDelete: (id) => dispatch(deleteTranslation(id))
    };
}

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;
