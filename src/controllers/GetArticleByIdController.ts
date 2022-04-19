import { Request, Response } from 'express'
import { ArticlesRepository } from '../repositories/ArticlesRepository'

class GetArticleByIdController {
  private readonly repository = new ArticlesRepository()

  async handle(_req: Request, _res: Response) {
    const { id } = _req.body

    const article = this.repository.findById(id)
    _res.status(200).send(article)
  }
}

export { GetArticleByIdController }
