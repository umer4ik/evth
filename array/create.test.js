const assert = require('chai').assert
const create = require('./create')

describe('array/create', () => {
  it('should create an array with 1 as any item value', () => {
    const arr = create(10, 1)
    assert.equal(arr[3], 1)
    assert.equal(arr[6], 1)
  })
  it('should create an array with length 10', () => {
    const arr = create(10, 1)
    assert.equal(arr.length, 10)
  })
  it('should create an array with index as a value', () => {
    const arr = create(5, (_, i) => i)
    assert.deepEqual(arr, [0, 1, 2, 3, 4])
  })
  it('should create an array if Array.prototype.fill is undefined', () => {
    Array.prototype.fill = undefined
    const arr = create(5, (_, i) => i)
    const arr1 = create(5, 1)
    assert.deepEqual(arr, [0, 1, 2, 3, 4])
    assert.deepEqual(arr1, [1, 1, 1, 1, 1])
  })
})