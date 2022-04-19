import { Router } from 'express'
import { CreateArticleController } from '../controllers/CreateArticleController'
import { DeleteArticleController } from '../controllers/DeleteArticleController'
import { GetArticleByIdController } from '../controllers/GetArticleByIdController'
import { ListArticlesController } from '../controllers/ListArticlesController'

const articlesRoutes = Router()

const listArticlesController = new ListArticlesController()
const getArticleByIdController = new GetArticleByIdController()
const createrticleController = new CreateArticleController()
const deleteArticleController = new DeleteArticleController()

articlesRoutes.get('/', listArticlesController.handle)
articlesRoutes.get('/:id', getArticleByIdController.handle)
articlesRoutes.post('/', createrticleController.handle)
articlesRoutes.delete('/:id', deleteArticleController.handle)

export { articlesRoutes }
