const { assert } = require('chai')

const { determinant } = require('../')
const {
  notMatrixArray,
  notSquareMatrixArray,
} = require('./determinant.fixture.js')

describe('determinant():', () => {

  describe('should throw an error if the passed value is not a square matrix of numbers', () => {
 
    it('passed value is not matrix', () => {
      notMatrixArray.forEach((value) => {
        assert.throws(
          () => determinant(value),
          TypeError
        )
      })
    })

    it('passed matrix is not square', () => {
      notSquareMatrixArray.forEach((matrix) => {
        assert.throws(
          () => determinant(matrix),
          TypeError
        )
      })
    })

    it('any item of passed matrix is not number')
  })
  
  describe('should calculate determinant of the matrix:', () => {
    it('2x2')
    it('3x3')
    it('any size')
  })
})
