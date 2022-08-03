import { Router } from 'express';

const booksRouter = Router();

export default (app: Router) => {
  app.use('/books', booksRouter);
};
