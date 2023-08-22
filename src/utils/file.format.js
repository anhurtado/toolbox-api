export const fileLineFormat = (lines) => {
  const linesToAdd = []
  if (lines !== undefined && lines !== '') {
    // Split lines by line break
    const linesSplit = lines.split('\n')

    // Loop on result
    for (const line of linesSplit) {
      // Split line by comma
      const lineSplit = line.split(',')

      // Validate each line
      if (
        lineSplit[1] !== 'text' && lineSplit[1] !== '' && lineSplit[1] !== undefined &&
        lineSplit[2] !== 'number' && lineSplit[2] !== '' && lineSplit[2] !== undefined &&
        lineSplit[3] !== 'hex' && lineSplit[3] !== '' && lineSplit[3] !== undefined) {
        linesToAdd.push({
          text: lineSplit[1],
          number: lineSplit[2],
          hex: lineSplit[3]
        })
      }
    }

    // Return result
    return linesToAdd
  } else {
    // Return empty array
    return []
  }
}
