const remove = (array, index) => {
  const leftPart = array.slice(0, index)
  const rightPart = array.slice(index + 1)
  return leftPart.concat(rightPart)
}

module.exports = remove