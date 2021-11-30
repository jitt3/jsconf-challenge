import { sortNumbersByWeight } from '../src/index';

describe('Test cases', () => {
  test('should sort list of numbers by weight according to the challenge rules', () => {
    const list = '56 65 74 100 99 68 86 180 90';
    const output = sortNumbersByWeight(list);
    const expected = '100 180 90 56 65 74 68 86 99';

    expect(output).toBe(expected);
  });

  test('should sort list of numbers lexicograpically when weights are equal', () => {
    const list = '90 180 801';
    const output = sortNumbersByWeight(list);
    const expected = '180 801 90';

    expect(output).toBe(expected);
  });

  test('should return an empty string if input list is empty', () => {
    const list = '';
    const output = sortNumbersByWeight(list);
    const expected = '';

    expect(output).toBe(expected);
  });
});
