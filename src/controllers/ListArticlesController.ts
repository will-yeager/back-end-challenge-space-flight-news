import { Request, Response } from 'express';
import { ArticlesRepository } from '../repositories/ArticlesRepository';

class ListArticlesController {
  async handle(req: Request, res: Response) {
    const { limit, start } = req.query;

    const repository = new ArticlesRepository();
    const result = await repository.list(Number(limit), Number(start));
    return res.status(200).send(result);
  }
}

export { ListArticlesController };
