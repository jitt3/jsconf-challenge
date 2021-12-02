import { NumberWeight } from "NumberWeight";

export function getOrderedNumbersByWeight(input: string): string {
  const strNumbers: string[] = parseStringToArray(input);

  const numbersWeight: NumberWeight[] = mapToNumberWeight(strNumbers);

  const orderedByWeightAsc: NumberWeight[] =
    orderByWeightAscendant(numbersWeight);

  return orderedByWeightAsc.map((elem) => elem.number).join(" ");
}
function parseStringToArray(input: string): string[] {
  return input.split(" ");
}
function orderByWeightAscendant(numbersWeight: NumberWeight[]): NumberWeight[] {
  return numbersWeight.sort((a, b) => {
    if (a.weight !== b.weight) {
      return a.weight - b.weight;
    }
    if (a.number > b.number) {
      return 1;
    }
    if (a.number < b.number) {
      return -1;
    }
    return 0;
  });
}
function mapToNumberWeight(strNumbers: string[]): NumberWeight[] {
  return strNumbers.map((strNumber: string) => ({
    number: strNumber,
    weight: calculateWeigth(strNumber),
  }));
}
function calculateWeigth(strNumber: string): number {
  return strNumber.split("").reduce((total, number) => total + +number, 0);
}
