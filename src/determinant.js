const { isSquareMatrixOfNumbers } = require('./check')

class InvalidMatrixError extends TypeError {
  constructor() {
    super('Passed value must be a square matrix of numbers')
  }
}

/**
 * Calculate determinant of the matrix 2x2
 * @param m - matrix
 * @returns {number}
 */
function det2(m) {
  return m[0][0] * m[1][1] - m[0][1] * m[1][0]
}

/**
 * Calculate determinant of the matrix 3x3
 * @param m - matrix
 * @returns {number}
 */
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

/**
 * Calculate determinant of the minor matrix
 *
 * @param matrix
 * @param i - row number of the first minor cell
 * @param j - column number of the first minor cell
 *
 * @returns {number}
 *
 * Example
 *
 *   i=0; j=1;
 *
 *   | 1 2 3 |
 *   | 4 5 6 | => | 4 6 | => det = -6
 *   | 7 8 9 |    | 7 9 |
 */
function detMinor(matrix, i, j) {

  // clone
  const M = matrix.map((row) => [...row])

  // remove row i and column j
  M.splice(i, 1)
  M.forEach((row) => row.splice(j, 1))

  return det(M)
}

/*
 * Calculate determinant using the Laplace expansion
 * @param matrix
 * @returns {number}
 */
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

/**
 * Calculate determinant of the matrix
 * @param matrix
 * @returns {number}
 */
function det(matrix) {

  const matrixSize = matrix.length

  if (matrixSize === 3) {
    return det3(matrix)
  }

  if (matrixSize === 2) {
    return det2(matrix)
  }

  if (matrixSize === 1) {
    return matrix[0][0]
  }

  return detLaplace(matrix)
}

/**
 * Calculate determinant of the matrix.
 *
 * @param matrix
 * @returns {number}
 *
 * @throws {TypeError} - param must be a square matrix of numbers
 */
function determinant(matrix) {

  if (!isSquareMatrixOfNumbers(matrix)) {
    throw new InvalidMatrixError()
  }

  return det(matrix)
}

module.exports = {
  determinant
}
