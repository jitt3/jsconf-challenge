const sumOfDigits = (numberA: number, numberB: number): number => {
    return numberA + numberB
}

const weight = (number: string): number => {
    return number
            .split('')
            .map(x => Number(x))
            .reduce(sumOfDigits)
}

const compareWeight = (stringA: string, stringB: string): number => {
    const weightA: number = weight(stringA)
    const weightB: number = weight(stringB)
    const digitsHaveSameWeight: boolean = weightA === weightB

    if (digitsHaveSameWeight) {
        return stringA.localeCompare(stringB)
    }
    return weightA - weightB
}

const getSortedListByWeight = (array: string[]): string => {
    return array
            .sort(compareWeight)
            .join(' ')
}

export {
    sumOfDigits,
    compareWeight,
    weight,
    getSortedListByWeight
}