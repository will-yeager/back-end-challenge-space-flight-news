import { ObjectId } from 'mongodb';
import { ArticleModel, Article } from '../models/Article';

class ArticlesRepository {
  async create(inputArticle: Article): Promise<Article> {
    const result = await ArticleModel.create(inputArticle);

    return result;
  }

  async list(limit: number, start: number): Promise<Article[]> {
    const result = await ArticleModel.find().limit(limit).skip(start);

    return result;
  }

  async findById(id: string): Promise<Article | null> {
    const result = await ArticleModel.findOne({ _id: new ObjectId(id) });

    if (!result) return null;

    return result;
  }

  async update(id: string, inputArticle: Article): Promise<Article | null> {
    const result = await ArticleModel.findOneAndUpdate(
      {
        _id: new ObjectId(id),
      },
      inputArticle,
      {
        useFindAndModify: false,
        returnDocument: 'after',
        lean: true,
      },
    );

    if (!result) {
      return null;
    }

    return result;
  }

  async delete(id: string): Promise<void> {
    await ArticleModel.deleteOne({ _id: new ObjectId(id) });
  }
}

export { ArticlesRepository };
