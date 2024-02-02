/* Usando la función anterior beneficiate de poder conocer el indice del array 
para crear una función llamada removeItem que pasandole un array y un texto 
como parametros (los mismos parametros que en el anterior ejercicio) llame a 
la función anteriormente creada findArrayIndex y obten el indice para 
posteriormente usar la función de javascript .splice() para eliminar el 
elemento del array.

Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan 
correctamente. */

const findArrayIndex = (arrayFind, textFind) => {
  for (const iterator of arrayFind) {
    if (iterator === textFind) {
      //console.log(`Encontrado en la posición: ${arrayFind.indexOf(iterator)}`);
      find = true;
      break;
    }
  }
  if (!find) {
    console.log("Texto no encontrado");
  }
};

const removeItem = (arrayDel, textDel) => {
  findArrayIndex(arrayDel, textDel);
  arrayDel.splice(arrayDel.indexOf(textDel), 1);
  console.log(arrayDel);
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];
removeItem(mainCharacters, "Luke");
removeItem(mainCharacters, "Leia");
removeItem(mainCharacters, "Obi-Wan");
removeItem(mainCharacters, "Anakin");
removeItem(mainCharacters, "Rey");