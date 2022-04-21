import { Router } from 'express';
import { SeedController } from './database/seed';

const seedRoutes = Router();

const seedController = new SeedController();

seedRoutes.post('/', seedController.handle);

export { seedRoutes };
