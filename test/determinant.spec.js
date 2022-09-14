const { assert } = require('chai')

const { determinant } = require('../')
const {
  notMatrixArray,
  notSquareMatrixArray,
  notMatrixOfNumbersArray,
  matrix2x2Array,
  matrix1x1Array,
  matrix3x3Array,
  matrixArray,
} = require('./determinant.fixture.js')

const ERR_MSG = 'Passed value must be a square matrix of numbers'

describe('determinant():', () => {

  describe('should throw an error if the passed value is not a square matrix of numbers', () => {

    it('passed value is not matrix', () => {
      notMatrixArray.forEach((value) => {
        assert.throws(
          () => determinant(value),
          TypeError,
          ERR_MSG
        )
      })
    })

    it('passed matrix is not square', () => {
      notSquareMatrixArray.forEach((matrix) => {
        assert.throws(
          () => determinant(matrix),
          TypeError,
          ERR_MSG
        )
      })
    })

    it('any item of passed matrix is not number', () => {
      notMatrixOfNumbersArray.forEach((matrix) => {
        assert.throws(
          () => determinant(matrix),
          TypeError,
          ERR_MSG
        )
      })
    })
  })

  describe('should calculate determinant of the matrix:', () => {

    it('1x1', () => {
      matrix1x1Array.forEach(([matrix, det]) => {
        assert.strictEqual(determinant(matrix), det)
      })
    })

    it('2x2', () => {
      matrix2x2Array.forEach(([matrix, det]) => {
        assert.strictEqual(determinant(matrix), det)
      })
    })

    it('3x3', () => {
      matrix3x3Array.forEach(([matrix, det]) => {
        assert.strictEqual(determinant(matrix), det)
      })
    })

    it('any size', () => {
      matrixArray.forEach(([matrix, det]) => {
        assert.strictEqual(determinant(matrix), det)
      })
    })
  })
})
