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

function detMinor(matrix, i, j) {

  // clone
  const M = matrix.map((row) => [...row])

  // remove row i and column j
  M.splice(i, 1)
  M.forEach((row) => row.splice(j, 1))

  return det(M)
}

function detLaplace(matrix) {

  const A = matrix
  const n = matrix.length
  const j = 0

  let sum = 0;

  for (let i=0; i<n; i++) {
    sum += A[i][j] * (-1)**(i + j + 2) * detMinor(A, i, j)
  }

  return sum
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

  return detLaplace(matrix)
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
