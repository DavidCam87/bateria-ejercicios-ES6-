//Dado el siguiente javascript usa forof para recorrer el array de películas, 
//genera un nuevo array con las categorías de las películas e imprime por 
//consola el array de categorías. Ten en cuenta que las categorías no deberían 
//repetirse.

//Para filtrar las categorías puedes ayudarte de la función .includes().

const movies = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];


const categories = [];                        //se crea el array donde añadiremos las categorias.
for (const movie of movies) {                 //se recorre el array de películas.
  for (const category of movie.categories) {  //se recorren las categorías de cada película.
    if (!categories.includes(category)) {     //se comprueba que la categoría no este en el array.
      categories.push(category);              //se anade la categoría.
    }
  }
};
console.log(categories);                      //se imprime el array de categorías.