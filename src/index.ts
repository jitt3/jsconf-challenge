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
interface GenericObject {
    key: string;
    weight: number;
}

function orderString(a: GenericObject, b: GenericObject): number {
    if (a.weight === b.weight) {
        return a.key.toString() > b.key.toString() ? 1 : -1;
    } else {
        return a.weight - b.weight;
    }
}

function parseFunction(stringProcess: string): string {
    return stringProcess
        .split(" ")
        .map((val) => {
            let weight = val
                .split("")
                .map((val) => Number(val))
                .reduce((prev: number, curr: number) => prev + curr, 0);
            return { key: val, weight: weight };
        })
        .sort(orderString)
        .map((obj) => obj.key)
        .join(" ");
}
  
  let defualtString: string = "56 65 74 100 99 68 86 180 90";
  let result = parseFunction(defualtString);
  console.log(result);
  
  defualtString = "";
  result = parseFunction(defualtString);
  console.log(result);
  
  defualtString = "111 111 22 12 32 23";
  result = parseFunction(defualtString);
  console.log(result);
  
  defualtString = "0 1 2 3 3 2 1 0";
  result = parseFunction(defualtString);
  console.log(result);