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

const notMatrixOfNumbersArray = [
  [
    ['11']
  ],
  [
    [11, 12],
    [21, null]
  ],
  [
    [11, 12, 13],
    [21, true, 23],
    [31, 32, 33]
  ]
]

module.exports = {
  notMatrixArray,
  notSquareMatrixArray,
  notMatrixOfNumbersArray,
}