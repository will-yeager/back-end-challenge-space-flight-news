import { Router } from 'express'
import { ListArticlesController } from '../controllers/ListArticlesController'
const articlesRoutes = Router()

const listArticlesController = new ListArticlesController()

articlesRoutes.get('/', listArticlesController.handle)

export { articlesRoutes }
