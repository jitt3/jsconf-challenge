import { orderByWeight, getWeight } from './index'

describe('OrderByWeight', () => {
  it('should order the elements', () => {
    expect(orderByWeight('56 65 74 100 99 68 86 180 90')).toEqual(
      '100 180 90 56 65 74 68 86 99'
    )
  })

  it('should order considering strings when weights are the same', () => {
    expect(orderByWeight('90 180')).toEqual('180 90')
  })

  it('should return an empty array if its passed as param', () => {
    expect(orderByWeight('')).toEqual('')
  })
})

describe('GetWeight', () => {
  it('gets weight of a number', () => {
    expect(getWeight('56')).toEqual(11)
    expect(getWeight('90')).toEqual(9)
    expect(getWeight('180')).toEqual(9)
  })
})
