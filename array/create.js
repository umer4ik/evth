const create = (length, filler) => {
  if (Array.prototype.fill) {
    if (typeof filler === 'function') {
      return new Array(length).fill('').map(filler)
    } else {
      return new Array(length).fill(filler)
    }
  } else {
    const array = []
    if (typeof filler === 'function') {
      for (let i = 0; i < length; i++) {
        array.push(filler('', i))
      }
    } else {
      for (let i = 0; i < length; i++) {
        array.push(filler)
      }
    }
    return array
  }
}