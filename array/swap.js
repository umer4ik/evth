const swap = (array, i, j) => {
  if (!Array.isArray(array)) {
    return array
  }
  if (typeof array[i] === 'undefined' || typeof array[j] === 'undefined') {
    return array
  }
  const arrayCopy = array.slice(0)
  const buffer = arrayCopy[i]
  arrayCopy[i] = arrayCopy[j]
  arrayCopy[j] = buffer
  return arrayCopy
}

module.exports = swap