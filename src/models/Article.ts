import mongoose from 'mongoose'

const articleSchema = new mongoose.Schema({
  featured: 'boolean',
  title: 'string',
  url: 'string',
  imageUrl: 'string',
  newsSite: 'string',
  summary: 'string',
  publishedAt: 'string',
  launches: [
    {
      id: 'string',
      provider: 'string',
    },
  ],
  events: [
    {
      id: 'string',
      provider: 'string',
    },
  ],
})

const Article = mongoose.model('Article', articleSchema)

export { Article }
