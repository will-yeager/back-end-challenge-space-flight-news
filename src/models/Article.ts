import mongoose from 'mongoose';
class Article {
  featured!: boolean;
  title!: string;
  url!: string;
  imageUrl!: string;
  newsSite!: string;
  summary!: string;
  publishedAt!: string;
  launches?: Launches[];
  events?: Events[];
}

class Launches {
  id!: string;
  provider!: string;
}

class Events {
  id!: string;
  provider!: string;
}

const articleSchema = new mongoose.Schema({
  featured: {
    type: 'boolean',
  },
  title: {
    type: 'string',
  },
  url: {
    type: 'string',
  },
  imageUrl: {
    type: 'string',
  },
  newsSite: {
    type: 'string',
  },
  summary: {
    type: 'string',
  },
  publishedAt: {
    type: 'string',
  },
  launches: [
    {
      id: {
        type: 'string',
      },
      provider: {
        type: 'string',
      },
    },
  ],
  events: [
    {
      id: {
        type: 'string',
      },
      provider: {
        type: 'string',
      },
    },
  ],
});

const ArticleModel = mongoose.model('Article', articleSchema);

export { ArticleModel, Article };
