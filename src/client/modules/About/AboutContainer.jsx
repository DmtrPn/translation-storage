import * as React from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind-decorator';

import { TestApi } from '../../Api/TestApi';
import { About } from './About';
import { getData } from '../../store/testData/actions';

@connect(mapStateToProps, mapDispatchToProps)
export class AboutContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            testData: ''
        };
    }

    @autobind
    async getDataFromServer() {
        const testData = await TestApi.getTestData();
        this.setState({
            testData: testData.join('; ')
        });
    }

    @autobind
    async getDataFromServerStore() {
        const testData = await TestApi.getTestData();
        this.props.onGetDataFromStore(testData.join('; '));
    }

    render() {
        return <About
            testData={this.state.testData}
            storeData={this.props.storeData}
            onGetDataButtonClick={this.getDataFromServer}
            onGetDataFromStoreButtonClick={this.getDataFromServerStore}
            />;
    }
}

function mapStateToProps(state) {
    return {
        storeData: state.testStore.testData
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onGetDataFromStore: data => dispatch(getData(data))
    };
}
