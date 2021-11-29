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

const calculateWeight = (item: string[]) => item.reduce((acc, cur) => parseInt(cur) + acc, 0);
const sortBy = (a: string[], b: string[]) => parseInt(a[0]) < parseInt(b[0]) ? -1:1;

export function weightCalculator(weightList: string) {
  if(!weightList || !weightList.trim().match(/^(\d+ ?)+\d+$/)) return '';

  let result: string[][] = [];
  const weightArray = weightList.trim().split(' ');

  weightArray.map(item => {
    result.push([calculateWeight(item.split('')).toString(), item]);
  });

  return result.sort(sortBy).reduce((acc, cur) => acc + cur[1]+' ','').trim();
}

console.clear();

/**
 * Original example
 * Output: "100 180 90 56 65 74 68 86 99"
 */
console.log(weightCalculator('56 65 74 100 99 68 86 180 90'));

/**
 * Another example
 * Input:   10 90 35 48 64 32 11
 * Weights: 1  9  8  12 10 5  2
 * Output: "10 11 32 35 90 64 48"
 */
console.log(weightCalculator('10 90 35 48 64 32 11'));

/**
 * Invalid example with a letter
 * Output: ""
 */
console.log(weightCalculator('56 65 74 100 99 68 86a 180 90'));

 /**
 * Invalid example with double space between numbers
 * Output: ""
 */
console.log(weightCalculator('56 65 74 100 99 68 86  180 90'));

 /**
 * Empty example
 * Output: ""
 */
console.log(weightCalculator(''));

