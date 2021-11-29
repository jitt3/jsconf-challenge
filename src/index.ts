/*
    Autor: Yessid Luviano
    Email: yessidsaidluviano@bbva.com
*/

function sortByWeight(value: string): string {
  return value.split(" ").sort(compareByWeight).join(" ");
}

function compareByWeight(a: number, b: number): number {
  const ai: number = convertToWeight(a);
  const bi: number = convertToWeight(b);
  if (ai === bi) return a - b;
  else return ai - bi;
}

function convertToWeight(value: string): number {
  return value
    .split("")
    .map((l) => Number(l, 10))
    .reduce((a, b) => a + b);
}
