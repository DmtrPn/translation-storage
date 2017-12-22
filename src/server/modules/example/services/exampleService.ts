import {getCollection} from '../../../db/mongodb';

export class ExampleService {
    static async getApiText() {
        const db = getCollection('test');
        const testData = await db.find({}, {_id: 0}).toArray();
        return testData.reduce((acc, data) => {
            acc.push(`${data.name} ${data.age}`);
            return acc;
        }, []);
    }
}
