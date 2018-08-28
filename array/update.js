const update = (array, index, item) => {
  const leftPart = array.slice(0, index)
  const rightPart = array.slice(index + 1)
  leftPart.push(item)
  return leftPart.concat(rightPart)
}

module.exports = update