function isArray(value) {
  return value instanceof Array
}

function isMatrix(value) {

  // is array 
  if (!isArray(value)) return false

  // array items are arrays
  for (let i=0; i<value.length; i++) {
    const item = value[i]
    if (!isArray(item)) return false
  }

  // inner arrays have equal lengths
  const length = value[0].length

  for (let i=0; i<value.length; i++) {
    const item = value[i]
    if (item.length !== length) return false
  }
  
  // true
  return true
}

class InvalidMatrixError extends TypeError {
  constructor() {
    super('Passed value must be a square matric of numbers')
  }
}

function isSquareMatrixOfNumbers(value) {
  if (
    isMatrix(value)
  ) {
    return true
  } else {
    return false
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
