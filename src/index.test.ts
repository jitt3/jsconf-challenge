import { orderListByWeight } from "./index";

it('should order the elements properly', () => {
  expect(orderListByWeight('56 65 74 100 99 68 86 180 90')).toEqual("100 180 90 56 65 74 68 86 99")
});

it('should order properly comparing strings when weights are the same', () => {
  expect(orderListByWeight('90 180')).toEqual("180 90")
});

it('should return an empty array if its passed as param', () => {
  expect(orderListByWeight('')).toEqual('')
});