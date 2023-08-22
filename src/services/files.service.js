import axios from 'axios'
import { CustomError } from '../utils/custom.err.js'

const toolboxPath = 'https://echo-serv.tbxnet.com/v1'
const toolboxSecret = 'Bearer aSuperSecretKey'

export const getAllFiles = async () => {
  try {
    const result = await axios.get(`${toolboxPath}/secret/files`, {
      headers: {
        Authorization: toolboxSecret
      }
    })
    return result.data
  } catch (error) {
    console.log(`ERROR: ${error}`)
    throw new Error('An unexpected error occurred, please try again')
  }
}

export const getFileByName = async (name, failSupport) => {
  try {
    const result = await axios.get(`${toolboxPath}/secret/file/${name}`, {
      headers: {
        Authorization: toolboxSecret
      }
    })
    return result.data
  } catch (error) {
    console.log(`ERROR: ${error}`)
    if (error.response.status === 404 && !failSupport) {
      throw new CustomError(404, 'File not found')
    }
    if (!failSupport) {
      throw new CustomError(500, 'An unexpected error occurred, please try again')
    }
  }
}
