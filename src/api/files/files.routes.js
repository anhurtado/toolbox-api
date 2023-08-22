import express from 'express'
import { fileList, fileData } from './files.controller.js'

export const fileRouter = express.Router()

fileRouter.get('/list', fileList)
fileRouter.get('/data', fileData)
