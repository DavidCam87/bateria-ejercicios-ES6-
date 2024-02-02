//Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve 
//la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

//Haz varios ejemplos y compruebalos.

//Sugerencia de función:
const findArrayIndex = (array, text) => {
  for (const iterator of array) {
    if (iterator === text) {
      console.log(`Encontrado en la posición: ${array.indexOf(iterator)}`);
      find = true;
      break;
    }
  }
  if (!find) {
    console.log("Texto no encontrado");
  }
};

//Ej array:
const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

findArrayIndex(mainCharacters, "Leia");
findArrayIndex(mainCharacters, "Han Solo");
findArrayIndex(mainCharacters, "Rey");
findArrayIndex(mainCharacters, "Obi-Wan");

