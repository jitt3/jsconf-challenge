// Types
type weight = {
  number: string,
  weigth: number,
};

// Local Functions
const getWeight = (number: string): number => {
  return number
    .split('')
    .map(value => Number(value))
    .reduce((tmpSum, value) => tmpSum + value);
};

// Public Functions
const getArrayFromString = (numbers: string): string[] => {
  return numbers.split(' ');
};

const getWeights = (numbers: string[]): weight[] => {
  return numbers.map(number => ( {number: number, weigth: getWeight(number)}));
}

const sortWeights = (weigths: weight[]) => {
  weigths.sort((a, b) => {
    if (a.weigth > b.weigth) {
        return 1;
    }

    if (a.weigth < b.weigth) {
        return -1;
    }

    if (a.weigth.toString() > b.weigth.toString()) {
        return 1;
    }

    if (a.weigth.toString() > b.weigth.toString()) {
        return -1;
    }

    return 0;
  });
};

const printWeights = (weigths: weight[]): void => console.log( weigths.map(weigth => weigth.number).join(' ') );

export {
  getArrayFromString,
  getWeights,
  sortWeights,
  printWeights
};
