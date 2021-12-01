import {
  sortListByWeight,
  sumOfDigits,
  compareWeight,
  weight,
  getSortedListByWeight
} from '../src/index'

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

  describe('sumOfDigits :: index.ts', () => {
    it('returns sum of 2 digits', () => {
      const expected: number = 11
      const result: number = sumOfDigits(6, 5)
      expect(result).toEqual(expected)
    });
  })

  describe('weight :: index.ts', () => {
    it('returns the sum of digits from a string with positive integers', () => {
      const expected: number = 11
      const result: number = weight('65')
      expect(result).toEqual(expected)
    });
  })

  describe('compareWeight :: index.ts', () => {
    it('returns a positive number if the first string has greater weight', () => {
      const expected: number = 0
      const result: number = compareWeight('65', '55')
      expect(result).toBeGreaterThan(expected)
    });

    it('returns a negative number ifthe second string has greater weight', () => {
      const expected: number = 0
      const result: number = compareWeight('65', '57')
      expect(result).toBeLessThan(expected)
    });

    it('returns a zero if both strings are equals', () => {
      const expected: number = 0
      const result: number = compareWeight('65', '65')
      expect(result).toEqual(expected)
    });

    it('returns a positive number if both numbers have same weight and the first is greater string', () => {
      const expected: number = 0
      const result: number = compareWeight('74', '65')
      expect(result).toBeGreaterThan(expected)
    });
    
    it('returns a negative number if both numbers have same weight and the second is greater string', () => {
      const expected: number = 0
      const result: number = compareWeight('74', '83')
      expect(result).toBeLessThan(expected)
    });
  })

  describe('getSortedListByWeight :: index.ts', () => {
    it('returns a list sorted from an array of string numbers', () => {
      const array: string[] = ['33', '100', '180', '90', '54']
      const expected: string = '100 33 180 54 90'
      const result: string = getSortedListByWeight(array)

      expect(result).toEqual(expected)
    });
  })
});
