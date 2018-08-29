const add = (array, index, item) => {
  const arr = array.slice(0)
  arr.splice(index, 0, item)
  return arr
}

module.exports = add