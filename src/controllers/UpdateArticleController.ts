import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { ArticlesRepository } from '../repositories/ArticlesRepository';

class UpdateArticleControler {
  async handle(req: Request, res: Response) {
    const repository = new ArticlesRepository();

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

    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).json('O id enviado é inválido');
    }

    const article = await repository.update(id, {
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

    if (!article) {
      return res.status(404).json('Article não encontrado');
    }

    return res.status(200).json(article);
  }
}

export { UpdateArticleControler };
