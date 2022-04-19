import { dbConnection } from './'
import { Article } from '../../models/Article'
import axios from 'axios'

interface IArticles {
  data: [
    {
      featured: boolean
      title: string
      url: string
      imageUrl: string
      newsSite: string
      summary: string
      publishedAt: string
      launches: [
        {
          id: string
          provider: string
        },
      ]
      events: [
        {
          id: string
          provider: string
        },
      ]
    },
  ]
}

async function seedDatabase() {
  const connection = await dbConnection()

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  Article.collection.drop().catch(() => {
    console.log('A collection articles não existe no banco')
  })

  console.log('Coletando os dados da API....')

  const allArticles: IArticles = await axios.get(
    'https://api.spaceflightnewsapi.net/v3/articles?_limit=-1',
  )

  console.log('Inserindo os dados da API no banco de dados....')

  for (const article of allArticles.data) {
    await Article.create({
      featured: article.featured,
      title: article.title,
      url: article.url,
      imageUrl: article.imageUrl,
      newsSite: article.newsSite,
      summary: article.summary,
      publishedAt: article.publishedAt,
      launches: article.launches,
      events: article.events,
    })
  }

  console.log('Banco de dados alimentados com sucesso')

  await connection?.disconnect().then(() => {
    console.log('MongoDB desconectado com sucesso')
  })
}

seedDatabase()
