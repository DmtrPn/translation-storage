import * as express from 'express';
import { ExampleController } from './controllers/exampleController';

const exampleRoutes = express.Router();

const exampleController = new ExampleController();

exampleRoutes.get('/api/', exampleController.actionGetApi);

export default exampleRoutes;

