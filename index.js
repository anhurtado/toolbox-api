import express from 'express'
import cors from 'cors'
import { fileRouter } from './src/api/files/files.routes.js'

// App instance
const app = express()
const port = 3000

// Middleware
app.use(express.json())
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['X-Requested-With', 'Content-Type', 'Accept', 'Origin', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200,
  preflightContinue: false
}))

// Routers
app.use('/v1/files', fileRouter)

// App listen
app.listen(port, () => console.log(`App running on port ${port}`))
