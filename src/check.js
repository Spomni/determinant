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

function isSquareMatrix(matrix) {

  const m = matrix.length
  const n = matrix[0].length

  return m === n
}

function isMatrixOfNumbers(matrix) {
  
  const m = matrix.length
  const n = matrix[0].length

  for (let i=0; i<m; i++) {
    for (let j=0; j<n; j++) {
      if (typeof matrix[i][j] !== 'number') return false
    }
  }
  
  return true
}

function isSquareMatrixOfNumbers(value) {

  if (!isMatrix(value)) return false
  if (!isSquareMatrix(value)) return false
  if (!isMatrixOfNumbers(value)) return false

  return true
}

module.exports = {
  isSquareMatrixOfNumbers,
}
