import { Router } from 'express';

const commentsRouter = Router();

export default (app: Router) => {
    app.use('/comments', commentsRouter);
};
