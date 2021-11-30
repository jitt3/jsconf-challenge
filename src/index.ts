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


import Item from "./Item";

export function parseList(list: string): Item[] {
  return list.length > 0
    ? list.split(" ").map((strValue) => new Item(strValue))
    : [];
}

export function orderItems(items: Item[]) {
  return items.sort((a: Item, b: Item) => {
    if (a.weight === b.weight) {
      return a.value.toString().localeCompare(b.value.toString());
    }
    return a.weight - b.weight;
  });
}

// Result ✨
const entryList = "56 65 74 100 99 68 86 180 90";

const orderedList = orderItems(parseList(entryList))
  .map((item) => item.value)
  .join(" ");

console.log(`🍕 Entry list: ${entryList.length > 0 ? entryList : "empty"}`);
console.log(
  `🍕 Result ordered list: ${orderedList.length > 0 ? orderedList : "empty"}`
);