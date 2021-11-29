import sortByWeight from './index'

const cases = [
  [
    'different "weight"',
    '55 60 3 47 40 14 18 34 77',
    '3 40 14 60 34 18 55 47 77',
  ],
  [
    'same "weight"',
    '5 401 104 410 302 212 32 50 113 221',
    '104 113 212 221 302 32 401 410 5 50',
  ],
  [
    'original test',
    '56 65 74 100 99 68 86 180 90',
    '100 180 90 56 65 74 68 86 99',
  ],
]

test.each(cases)('case: %s', (_, input, expected) => {
  expect(sortByWeight(input)).toBe(expected)
})
