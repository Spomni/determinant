const notMatrixArray = [
  1,
  undefined,
  null,
  'string',
  [['ku'], 4],
  [
    [0, 1, 2],
    [3, 2]
  ],
]

const notSquareMatrixArray = [
  [
    [1, 2]
  ],
  [
    [1],
    [2]
  ],
  [
    [11, 12, 13],
    [21, 22, 23]
  ],
]

module.exports = {
  notMatrixArray,
  notSquareMatrixArray,
}