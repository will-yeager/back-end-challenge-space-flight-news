import express, { Request, Response } from 'express'
import { router } from './src/config'
import { dbConnection } from './src/config/database'

const app = express()
app.use(express.json())

dbConnection()
  .then(() => {
    app.listen(3000, () => {
      console.log('Servidor rodando na porta 3000')
    })
  })
  .catch(error => {
    console.log(error)
  })

app.use(router)

export { app }
