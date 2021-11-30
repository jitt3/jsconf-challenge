/*
Te hemos proporcionado un string que contiene una lista de enteros  positivos
separados por un espacio cada uno(" ")
Toma cada valor y calcula la soma de sus digitos, y lo llamaremos "weight".
Debes de regresar como resultado la lista en orden ascendente por "weight",
como un string y separados por un espacio

Tomemos el siguiente ejemplo:
el número 99 tendra un "weight" de 18, mientras que 100 tendra un "weight" de 1
de esta manera el numero 100 debera ir antes de 99

Input 
"56 65 74 100 99 68 86 180 90" 

Output
"100 180 90 56 65 74 68 86 99"

Cuando dos numeros tengan el mismo "weight", consideralos como string en lugar de números:
Por ejemplo
El número 100 deber ir antes de 180 porque su "weight" (1) es menor que el de 180 (9)
y 180 va antes de 90 pues como tienen el mismo "weight" que es 9, si es  tomado como string
entonces debe ir antes.

Nota: todos los números de la lista son positivos y la lista puede estar vacia.

*/

// Solution to the challenge, refer to index.test.ts to review execution
function orderNumbersByWeight(numbersList: string): string {
    const SEPARATOR = ' ';

    const numbers = numbersList.split(SEPARATOR);
    const numbersByWeight = mapAllNumbersByWeight(numbers);

    const sortedWeights = sortWeights(numbersByWeight.keys());

    const orderedNumbers = getOrderedNumbers(numbersByWeight, sortedWeights);

    return orderedNumbers.join(SEPARATOR);
}

function mapAllNumbersByWeight(numbers: string[]): Map<number, string[]> {
    const numbersByWeight = numbers.reduce((numbersByWeight, number) => {
        const weight = getNumberWeight(number);

        if (numbersByWeight.has(weight)) {
            const previousNumbers = numbersByWeight.get(weight);
            const numbersOfThisWeight = [...previousNumbers, number].sort();

            numbersByWeight.set(weight, numbersOfThisWeight); // alphabetically sorts numbers
        } else numbersByWeight.set(weight, [number]);

        return numbersByWeight;
    }, new Map());

    return numbersByWeight;
}

// Given a number string '52' calculates the sum of its digits
function getNumberWeight(number: string): number {
    const DEFAULT_WEIGHT = 0;
    const digits = number.split(''); // Converts string into array of digits

    // Converts each digit to Number and accumulates it
    const weight = digits.reduce(
        (currentWeight, digit) => currentWeight + Number(digit),
        DEFAULT_WEIGHT
    );

    return weight;
}


function sortWeights(weights: IterableIterator<number>): number[] {
    const unorderedWeights = Array.from(weights);

    return unorderedWeights.sort((a, b) => a - b); // Numerically sorts array
}

function getOrderedNumbers(
    numbersByWeight: Map<number, string[]>,
    sortedWeights: number[]
): string[] {
    const orderedNumbers: string[] = [];

    sortedWeights.forEach((weight) => {
        const weightNumbers = numbersByWeight.get(weight);

        if (weightNumbers) orderedNumbers.push(...weightNumbers);
    });

    return orderedNumbers;
}

export { orderNumbersByWeight, getNumberWeight };
