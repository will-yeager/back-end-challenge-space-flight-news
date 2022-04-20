import { Request, Response } from 'express';
import { ArticlesRepository } from '../repositories/ArticlesRepository';
import { validationResult } from 'express-validator';

class CreateArticleController {
  async handle(req: Request, res: Response) {
    const repository = new ArticlesRepository();
    const errors = validationResult(req);

    const {
      featured,
      title,
      url,
      imageUrl,
      newsSite,
      summary,
      publishedAt,
      launches,
      events,
    } = req.body;

    if (!errors.isEmpty()) {
      return res.status(400).send(errors.array({ onlyFirstError: true }));
    }

    const article = await repository.create({
      featured,
      title,
      url,
      imageUrl,
      newsSite,
      summary,
      publishedAt,
      launches,
      events,
    });

    return res.status(201).send(article);
  }
}

export { CreateArticleController };
