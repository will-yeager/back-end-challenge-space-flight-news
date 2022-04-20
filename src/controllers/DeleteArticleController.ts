import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { ArticlesRepository } from '../repositories/ArticlesRepository';

class DeleteArticleController {
  async handle(req: Request, res: Response) {
    const repository = new ArticlesRepository();

    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).json('O id enviado é inválido');
    }

    await repository.delete(id);

    return res.status(204).send({ success: true });
  }
}

export { DeleteArticleController };
