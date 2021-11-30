import * as helpers from '../../src/helpers/';

it('expect "100 180 90 56 65 74 68 86 99" using "56 65 74 100 99 68 86 180 90" as input', () => {
  const numbers: string = '56 65 74 100 99 68 86 180 90';
  const arrayOfNumbers = helpers.getArrayFromString(numbers);
  const weigths = helpers.getWeights(arrayOfNumbers);

  helpers.sortWeights(weigths);

  expect(helpers.getWeightsString(weigths)).toEqual('100 180 90 56 65 74 68 86 99');
});

it('expect "11 22 33 44 68" using "22 11 33 68 44" as input', () => {
  const numbers: string = '22 11 33 68 44';
  const arrayOfNumbers = helpers.getArrayFromString(numbers);
  const weigths = helpers.getWeights(arrayOfNumbers);

  helpers.sortWeights(weigths);

  expect(helpers.getWeightsString(weigths)).toEqual('11 22 33 44 68');
});
