const { isSquareMatrixOfNumbers } = require('./check')

class InvalidMatrixError extends TypeError {
  constructor() {
    super('Passed value must be a square matrix of numbers')
  }
}

/**
 * Calculate determinant of th matrix with the size 2x2
 * @param m - matrix
 * @returns {number}
 */
function det2(m) {
  return m[0][0] * m[1][1] - m[0][1] * m[1][0]
}

function det3(m) {
  return (
    m[0][0] * m[1][1] * m[2][2] +
    m[0][1] * m[1][2] * m[2][0] +
    m[0][2] * m[1][0] * m[2][1] -
    m[0][2] * m[1][1] * m[2][0] -
    m[0][1] * m[1][0] * m[2][2] -
    m[0][0] * m[1][2] * m[2][1]
  )
}

function det(matrix) {

  const matrixSize = matrix.length

  if (matrixSize === 1) {
    return matrix[0][0]
  }

  if (matrixSize === 2) {
    return det2(matrix)
  }

  if (matrixSize === 3) {
    return det3(matrix)
  }
}

function determinant(matrix) {

  if (!isSquareMatrixOfNumbers(matrix)) {
    throw new InvalidMatrixError()
  }

  return det(matrix)
}

module.exports = {
  determinant
}
