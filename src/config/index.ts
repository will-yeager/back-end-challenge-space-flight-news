import { Router, Request, Response } from 'express';
import { articlesRoutes } from './articles.routes';

const router = Router();

router.get('/', (_req: Request, _res: Response) => {
  _res.json('Back-end Challenge 2021 🏅 - Space Flight News');
});

router.use('/articles', articlesRoutes);

export { router };
