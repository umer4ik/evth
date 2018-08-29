const assert = require('chai').assert
const add = require('./add')

describe('array/add', () => {
  it('should add new value', () => {
    const arr = [1,2,4]
    const newArr = add(arr, 2, 3)
    assert.deepEqual([1,2,3,4], newArr)
  })
})