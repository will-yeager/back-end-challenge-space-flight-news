import { dbConnection } from './';
import { ArticleModel } from '../../models/Article';
import axios from 'axios';
import { Request, Response } from 'express';

interface IArticles {
  data: [
    {
      featured: boolean;
      title: string;
      url: string;
      imageUrl: string;
      newsSite: string;
      summary: string;
      publishedAt: string;
      launches: [
        {
          id: string;
          provider: string;
        },
      ];
      events: [
        {
          id: string;
          provider: string;
        },
      ];
    },
  ];
}
class SeedController {
  async handle(_req: Request, _res: Response) {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    ArticleModel.collection.drop().catch(() => {
      console.log('A collection articles não existe no banco');
    });

    const allArticles: IArticles = await axios.get(
      'https://api.spaceflightnewsapi.net/v3/articles?_limit=-1',
    );

    for (const article of allArticles.data) {
      await ArticleModel.create({
        featured: article.featured,
        title: article.title,
        url: article.url,
        imageUrl: article.imageUrl,
        newsSite: article.newsSite,
        summary: article.summary,
        publishedAt: article.publishedAt,
        launches: article.launches,
        events: article.events,
      });
    }
    return _res.json('Banco alimentado com sucesso');
  }
}

export { SeedController };
