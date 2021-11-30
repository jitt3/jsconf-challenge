export default class Item {
  value: number;
  weight: number;

  constructor(value: string) {
    this.value = parseInt(value);
    this.weight = this.calculateWeight(value);
  }

  calculateWeight(value: string): number {
    const digits = value.split("").map((strDigit) => parseInt(strDigit));
    return digits.reduce(
      (previous: number, current: number) => previous + current,
      0
    );
  }
}
