import {ExampleService} from '../services/exampleService';

export class ExampleController {
    async actionGetApi(req, res) {
        const result = await ExampleService.getApiText();
        res.send(result);
    }
}
