import axios from 'axios';
import 'babel-polyfill';

export class TestApi {
    static async getTestData() {
        const testData = await axios.get('api');
        return testData.data;
    }

}
