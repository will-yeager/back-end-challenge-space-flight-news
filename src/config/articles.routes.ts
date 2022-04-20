import { Router } from 'express';
import { CreateArticleController } from '../controllers/CreateArticleController';
import { DeleteArticleController } from '../controllers/DeleteArticleController';
import { GetArticleByIdController } from '../controllers/GetArticleByIdController';
import { ListArticlesController } from '../controllers/ListArticlesController';
import { UpdateArticleControler } from '../controllers/UpdateArticleController';
import { checkInputArticle } from './validators/checkInputArticle';

const articlesRoutes = Router();

const listArticlesController = new ListArticlesController();
const getArticleByIdController = new GetArticleByIdController();
const createArticleController = new CreateArticleController();
const updateArticleController = new UpdateArticleControler();
const deleteArticleController = new DeleteArticleController();

articlesRoutes.get('/', listArticlesController.handle);
articlesRoutes.get('/:id', getArticleByIdController.handle);
articlesRoutes.post('/', checkInputArticle, createArticleController.handle);
articlesRoutes.put('/:id', checkInputArticle, updateArticleController.handle);
articlesRoutes.delete('/:id', deleteArticleController.handle);

export { articlesRoutes };
