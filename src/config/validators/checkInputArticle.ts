import { checkSchema } from 'express-validator';

const checkInputArticle = checkSchema({
  featured: {
    exists: true,
  },
  title: {
    isString: true,
    exists: true,
  },
  url: {
    isString: true,
    exists: true,
  },
  imageUrl: {
    isString: true,
    exists: true,
  },
  newsSite: {
    isString: true,
    exists: true,
  },
  summary: {
    isString: true,
    exists: true,
  },
  publishedAt: {
    isString: true,
    exists: true,
  },
});

export { checkInputArticle };
