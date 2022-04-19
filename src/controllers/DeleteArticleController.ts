import { Request, Response } from 'express'
import { ArticlesRepository } from '../repositories/ArticlesRepository'

class DeleteArticleController {
  private readonly repository = new ArticlesRepository()

  async handle(_req: Request, _res: Response) {
    const { id } = _req.params
    await this.repository.delete(id)
    _res.status(204)
  }
}

export { DeleteArticleController }
