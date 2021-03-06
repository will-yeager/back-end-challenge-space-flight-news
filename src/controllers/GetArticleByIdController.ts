import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { ArticlesRepository } from '../repositories/ArticlesRepository';

class GetArticleByIdController {
  async handle(req: Request, res: Response) {
    const repository = new ArticlesRepository();

    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).json('O id enviado é inválido');
    }

    const article = await repository.findById(id);

    if (!article) {
      return res.status(404).json('Article não encontrado');
    }

    return res.status(200).send(article);
  }
}

export { GetArticleByIdController };
