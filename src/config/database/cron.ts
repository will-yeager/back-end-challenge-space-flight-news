import axios from 'axios';
import cron from 'node-cron';
import { ArticleModel } from '../../models/Article';
import { IArticles } from './seed';

function cronJobs() {
  cron.schedule('0 9 * * *', async () => {
    try {
      if (!process.env.API_URI) {
        throw new Error('Erro ao conectar com a api');
      }

      console.log('CronJob está sendo executado');

      const date = new Date();
      date.setHours(9, 0, 0, 0);
      date.setDate(date.getDate() - 1);
      const yesterdayDate = date.toISOString();
      console.log(yesterdayDate);

      const allArticles: IArticles = await axios.get(
        `${process.env.API_URI}&publishedAt_gte=${yesterdayDate}`,
      );

      for (const article of allArticles.data) {
        console.log(article);

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

      console.log('CronJob executado com sucesso!!');
    } catch (err) {
      console.log('Ocorreu um erro ao executar o cronjob: ' + err);
    }
  });
}

export { cronJobs };
