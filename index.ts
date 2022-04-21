import express from 'express';
import { router } from './src/config';
import { dbConnection } from './src/config/database';
import { cronJobs } from './src/config/database/cron';

const PORT = process.env.PORT;

const app = express();
cronJobs();
app.use(express.json());

dbConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use(router);

export { app };
