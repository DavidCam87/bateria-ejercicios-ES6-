//!7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
//!los alumnos usando la función .reduce().

const exams = [
  { name: 'Yuyu Cabeza Crack', score: 5 },
  { name: 'Maria Aranda Jimenez', score: 1 },
  { name: 'Cristóbal Martínez Lorenzo', score: 6 },
  { name: 'Mercedez Regrera Brito', score: 7 },
  { name: 'Pamela Anderson', score: 3 },
  { name: 'Enrique Perez Lijó', score: 6 },
  { name: 'Pedro Benitez Pacheco', score: 8 },
  { name: 'Ayumi Hamasaki', score: 4 },
  { name: 'Robert Kiyosaki', score: 2 },
  { name: 'Keanu Reeves', score: 10 }
];

const nota = exams.reduce((total, examen) => total + examen.score, 0);//se usa la función .reduce() para sumar todas las notas.
console.log(nota);

//!7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los
//!alumnos que esten aprobados usando la función .reduce().

const notaAprobados = exams.reduce((total, examen) => {        //se usa la función .reduce() para sumar todas las notas de los alumnos aprobados.           
  if (examen.score >= 5) {                                     //se compara el score de cada examen con 5.
    return total + examen.score;                               //se suma el score de cada examen
  }
  return total;                                                //se devuelve el total
}, 0);
console.log(notaAprobados);                                    //se imprime el total.

//!7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().

const notaMedia = exams.reduce((total, examen) => total + examen.score, 0) / exams.length;
//se calcula la media de todos los examenes usando la función .reduce()/.length
console.log(notaMedia);                    //se imprime la media