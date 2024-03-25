import { json, urlencoded } from 'body-parser'
import express, { type Express } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { config } from 'dotenv'
import cookieParser from 'cookie-parser'

config()

export const createServer = (): Express => {
  const app = express()
  app
    .disable('x-powered-by')
    .use(morgan('dev'))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(
      cors({
        origin: true,
        credentials: true,
      })
    )
    .use(cookieParser())
    .get('/health', (_, res) => {
      return res.json({ ok: true })
    })

  return app
}
