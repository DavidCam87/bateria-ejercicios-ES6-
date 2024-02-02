/* Crea una función llamada rollDice() que reciba como parametro el numero de caras 
que queramos que tenga el dado que deberá simular el codigo dentro de la función. 
Como hemos dicho, que la función use el parametro para simular una tirada de dado 
y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te 
preocupes! Busca información sobre la función de javascript Math.random() */


const rollDice = (num) => {

  const result = Math.floor(Math.random() * num) + 1;
  // Math.random() devuelve un número decimal pseudoaleatorio en el rango [0, 1).
  // Multiplicamos por 'num' para obtener un número en el rango [0, num).
  // Math.floor() redondea hacia abajo para obtener un número entero en el rango [0, num - 1].
  // Sumamos 1 para que el resultado esté en el rango [1, num].
  console.log(result);
  return result;
}
rollDice(6);



