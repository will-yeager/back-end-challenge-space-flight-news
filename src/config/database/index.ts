import mongoose from 'mongoose';
import 'dotenv/config';

const dbConnection = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error('Mongo DB Enviroment Variable not setted');
  }

  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Conectado com sucesso');
    return connection;
  } catch (err) {
    console.log(err);
  }
};

export { dbConnection };
