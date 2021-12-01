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

const sortListByWeight = (input: string): string => {
    const array: string[] = input.split(' ')
    return getSortedListByWeight(array)
}

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
    sortListByWeight,
    sumOfDigits,
    compareWeight,
    weight,
    getSortedListByWeight
}