import { Request, Response } from 'express'
import { ArticlesRepository } from '../repositories/ArticlesRepository'

class CreateArticleController {
  private readonly repository = new ArticlesRepository()

  async handle(req: Request, res: Response) {
    const { featured, title, url, imageUrl, newsSite, summary, publishedAt, launches, events } =
      req.body
    const article = this.repository.create({
      featured,
      title,
      url,
      imageUrl,
      newsSite,
      summary,
      publishedAt,
      launches,
      events,
    })
    res.status(201).send(article)
  }
}

export { CreateArticleController }
