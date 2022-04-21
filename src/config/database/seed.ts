import { dbConnection } from '.';
import { ArticleModel } from '../../models/Article';
import 'dotenv/config';
import axios from 'axios';

export interface IArticles {
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

async function seedDatabase() {
  if (process.env.API_URI) {
    const connection = await dbConnection();

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    ArticleModel.collection.drop().catch(() => {
      console.log('A collection articles não existe no banco');
    });

    console.log('Coletando os dados da API....');

    const allArticles: IArticles = await axios.get(process.env.API_URI);

    console.log('Inserindo os dados da API no banco de dados....');

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

    console.log('Banco de dados alimentados com sucesso');

    await connection?.disconnect().then(() => {
      console.log('MongoDB desconectado com sucesso');
    });
  }
  console.log('Erro na comunicação com a API');
}

seedDatabase();
