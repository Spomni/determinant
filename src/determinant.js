const { isSquareMatrixOfNumbers } = require('./check')

class InvalidMatrixError extends TypeError {
  constructor() {
    super('Passed value must be a square matrix of numbers')
  }
}

function determinant(matrix) {

  if (!isSquareMatrixOfNumbers(matrix)) {
    throw new InvalidMatrixError()
  }
}

module.exports = {
  determinant
}
