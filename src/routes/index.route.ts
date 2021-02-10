import { Router, Response, Request } from 'express';
import { buildCheckFunction, validationResult } from 'express-validator';
import ItemController from '../controllers/item.controller';
import SearchController from '../controllers/search.controller';

const routes = Router();
const searchController = new SearchController();
const itemController = new ItemController();
const checkQuery = buildCheckFunction(['query']);


routes.get('/', (request: Request, response: Response) => {
    return response.json({
        message: 'Welcome to Meli Challenge',
    });
});

routes.get(
    '/items',
    [
        checkQuery('q').isString(),
    ],
    (request: Request, response: Response) => {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(422).json({ errors: errors.array() });
        }
        searchController.getItemByName(request, response);
    }
);

routes.get(
    '/items/:id',
    (request: Request, response: Response) => {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(422).json({ errors: errors.array() });
        }
        itemController.getItemById(request, response);
    }
);
export default routes;
