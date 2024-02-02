/* Crea una arrow function que tenga dos parametros a y b y 
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
por consola la suma de los dos parametros.
*/

//1.1 Ejecuta esta función sin pasar ningún parametro
const sumaA = () => {
  let a = 10;
  let b = 5;
  console.log(a + b);
}
//1.2 Ejecuta esta función pasando un solo parametro
const sumaB = (a) => {
  let b = 5;
  console.log(a + b);
}
//1.3 Ejecuta esta función pasando dos parametros
const suma = (a, b) => {
  console.log(a + b);
}


suma(10, 5);
sumaA();
sumaB(10);