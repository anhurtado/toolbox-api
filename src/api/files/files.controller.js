import { getAllFiles, getFileByName } from './../../services/files.service.js'
import { fileLineFormat } from './../../utils/file.format.js'

export const fileList = async (req, res) => {
  try {
    const result = await getAllFiles()
    res.status(200).send(result)
  } catch (error) {
    res.status(500).send({
      code: 500,
      type: 'Error',
      message: error.message
    })
  }
}

export const fileData = async (req, res) => {
  try {
    const fileName = req.query.fileName
    let list = []

    // Validate params
    if (fileName !== undefined && fileName !== '') {
      // Get lines by file
      const lines = await getFileByName(fileName, false)

      // Add to final list
      list = []
      list.push({
        file: fileName.trim(),
        lines: fileLineFormat(lines)
      })
    } else {
      // Get all files
      const result = await getAllFiles()

      // Files to be formed
      if (result.files.length > 0) {
        // Loop for any file
        list = []
        for (const file of result.files) {
          // Get lines by file
          const lines = await getFileByName(file, true)

          // Add to final list
          list.push({
            file: file.trim(),
            lines: fileLineFormat(lines)
          })
        }
      }
    }

    // Response
    res.status(200).send(list)
  } catch (error) {
    res.status(error.code).send({
      code: error.code,
      type: 'Error',
      message: error.message
    })
  }
}
