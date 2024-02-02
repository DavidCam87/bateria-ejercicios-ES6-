/* Crea una función llamada swap que reciba un array y dos parametros que sean 
indices del array. La función deberá intercambiar la posición de los valores de 
los indices que hayamos enviado como parametro. Retorna el array resultante.

Sugerencia de array: */

const fantasticFour = [
  "La antorcha humana",  //0
  "Mr. Fantástico",      //1
  "La mujer invisible",  //2
  "La cosa",             //3
];

const swap = (array, index1, index2) => {
  if (index1 < 0 || index1 >= array.length || index2 < 0 || index2 >= array.length) {//si los indices no son válidos
    console.log("Indices no válidos");
  } else {
    let aux = array[index1];            //intercambiamos los valores de los indices 
    array[index1] = array[index2];
    array[index2] = aux;
    console.log(array);
  }
}
swap(fantasticFour, 1, 3)
swap(fantasticFour, 0, 2)
swap(fantasticFour, 3, 0)
