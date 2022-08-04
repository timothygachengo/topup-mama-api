import { Router } from 'express';
import fetchRoutes from './fetch.routes';

const charactersRouter = Router();

export default (app: Router) => {
    app.use('/characters', charactersRouter);
    fetchRoutes(charactersRouter);
};
