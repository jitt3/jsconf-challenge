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



const listNumbers = "56 65 74 100 99 68 86 180 90".split(" ");
//const listNumbers = [];
const listNumbersOrderByweight = [];



if(listNumbers.length > 0){

  
    for (let i = 0; i < listNumbers.length; i++) {
      let weight = 0;
      for (let j = 0; j < listNumbers[i].length; j++) {
          let  value = listNumbers[i].charAt(j);
          weight = weight + parseInt(value);
      }
      listNumbersOrderByweight.push({id: i, weightNumber:  weight, weightOriginal: listNumbers[i]});
      weight = 0;
      
    }

    console.log(listNumbersOrderByweight);



    listNumbersOrderByweight.sort(function (a, b) {
      if (a.weightNumber > b.weightNumber) {
        return 1;
      }
      if (a.weightNumber < b.weightNumber) {
        return -1;
      }
      return 0;
    });


    console.log(listNumbersOrderByweight);

    let listNumbersOut = "";

    listNumbersOrderByweight.forEach(element => {
    //console.log(element.weightOriginal);
      listNumbersOut+= element.weightOriginal+ " ";
    });

    console.log(listNumbersOut);
  
}else{
  console.log("La lista esta vacia..");
}
