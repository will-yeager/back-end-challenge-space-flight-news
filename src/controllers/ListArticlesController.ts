import { Request, Response } from 'express'
import { ArticlesRepository } from '../repositories/ArticlesRepository'

class ListArticlesController {
  private readonly repository = new ArticlesRepository()

  async handle(_req: Request, _res: Response): Promise<void> {
    const result = await this.repository.list()
    _res.status(200).send(result)
  }
}

export { ListArticlesController }
