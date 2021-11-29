class NumberAndWeightDetail {
    numberValue: number;
    weightValue: number;
    constructor(numberValue: number, weightValue: number) {
        this.numberValue = numberValue;
        this.weightValue = weightValue;
    };
}

const orderByWeight = (input:string) => {
    if (!input) {
        return input;
    }
    const numArray: Array<string> = input.split(' ');
    const result: Array<any> = [];

    for (let i = 0; i < numArray.length; i++) {
        const weight = numArray[i].split('').map(Number).reduce((prev, curr) => prev + curr);
        const newResultItem = new NumberAndWeightDetail(Number.parseInt(numArray[i]), weight);
        result.push(newResultItem);
    }

    result.sort((first, second) => {
        const isSameWeight = first.weightValue - second.weightValue === 0;
        const resultAsStrings = first.numberValue.toString() < second.numberValue.toString() ? -1 : 1;
        return isSameWeight ? resultAsStrings : first.weightValue - second.weightValue;
    });
    return result.map((num) => num.numberValue).join(' ');
}

exports.orderByWeight = orderByWeight;
