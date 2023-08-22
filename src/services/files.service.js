import axios from 'axios'

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
    throw new Error('An unexpected error occurred while querying the method "getAllFiles"')
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
    if (error.response.status === 404 && !failSupport) {
      throw new Error('File not found')
    }

    console.log(`ERROR: ${error}`)
    if (!failSupport) {
      throw new Error('An unexpected error occurred while querying the method "getFileByName"')
    }
  }
}
