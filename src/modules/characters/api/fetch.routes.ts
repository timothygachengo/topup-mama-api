import { Request, Response, Router } from 'express';
import CharactersController from '../characters.controller';

const router = Router();

export default (app: Router) => {
    app.use('/', router);

    router.get('/', (req:Request, res:Response) => new CharactersController(req, res).fetchAll(req));

    router.get('/:id', (req:Request, res:Response) => new CharactersController(req, res).fetchById(req));
};
