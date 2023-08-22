import express from 'express'
import { fileRouter } from './src/api/files/files.routes.js'

// App instance
const app = express()
const port = 3000

// Middleware
app.use(express.json())

// Routers
app.use('/v1/files', fileRouter)

// App listen
app.listen(port, () => console.log(`App running on port ${port}`))
