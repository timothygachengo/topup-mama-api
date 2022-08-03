import { Router } from 'express';

const charactersRouter = Router();

export default (app: Router) => {
  app.use('/characters', charactersRouter);
};
