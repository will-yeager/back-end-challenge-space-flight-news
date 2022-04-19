import { ObjectId } from 'mongodb'
import { Article } from '../models/Article'

interface IArticle {
  featured: {
    type: boolean
    required: true
  }
  title: {
    type: string
    required: true
  }
  url: {
    type: string
    required: true
  }
  imageUrl: {
    type: string
    required: true
  }
  newsSite: {
    type: string
    required: true
  }
  summary: {
    type: string
    required: true
  }
  publishedAt: {
    type: string
    required: true
  }
  launches: [
    {
      id: {
        type: string
        required: true
      }
      provider: {
        type: string
        required: true
      }
    },
  ]
  events: [
    {
      id: {
        type: string
        required: true
      }
      provider: {
        type: string
        required: true
      }
    },
  ]
}

class ArticlesRepository {
  async create(inputArticle: IArticle) {
    const article = await Article.create(inputArticle)
    return article
  }

  async list() {
    const articles = await Article.find()
    return articles
  }

  async findById(id: string) {
    const article = await Article.findOne({ id: new ObjectId(id) })
    return article
  }

  async delete(id: string) {
    await Article.deleteOne({ id: new ObjectId(id) })
  }
}

export { ArticlesRepository }
