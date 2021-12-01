import sortListByWeight from '../src/index'

describe('Nextiva challenge - JS Conf Mexico', () => {
  describe('sortListByWeight :: index.ts', () => {
    it('returns the list in ascending order by weight', () => {
      let list: string = '56 65 74 100 99 68 86 180 90'
      let expected: string = '100 180 90 56 65 74 68 86 99'
      let result: string = sortListByWeight(list)
      expect(result).toEqual(expected)

      list = '882 9 90 56 65 74 100 99 68 86 90 180 180 90 1 11111'
      expected = '1 100 11111 180 180 9 90 90 90 56 65 74 68 86 882 99'
      result = sortListByWeight(list)
      expect(result).toEqual(expected)
    });

    it('returns the same list with 1 item', () => {
      const list: string = '9'
      const expected: string = '9'
      const result: string = sortListByWeight(list)
      expect(result).toEqual(expected)
    });

    it('returns empty string if the list is empty', () => {
      const list: string = ''
      const expected: string = ''
      const result: string = sortListByWeight(list)
      expect(result).toEqual(expected)
    });
  })
});
