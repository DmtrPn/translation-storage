import * as React from 'react';
import { connect } from 'react-redux';

import { Home } from './Home';
import { increment, decrement } from '../../store/counter/actions';

@connect(mapStateToProps, mapDispatchToProps)
class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Home {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        count: state.counterStore.counter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onIncButton: () => dispatch(increment(2)),
        onDecButton: () => dispatch(decrement(1))
    };
}

export { HomeContainer };
