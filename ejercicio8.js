//!8.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando
//!.filter() y usa.reduce() para conseguir la media de sus.score. 
//!La función.find() también podría ayudarte para el contrar el genero 'RPG' en el
//!array.gender.

const videogames = [
  { name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5 },
  { name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5 },
  { name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8 },
  { name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5 },
  { name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5 },
  { name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10 },
]

const RPG = videogames.filter(videogame => videogame.genders.includes('RPG'));          //se filtra el array por gender = 'RPG'.
const media = RPG.reduce((total, videogame) => total + videogame.score, 0) / RPG.length;//mediante reduce se calcula la media.

console.log(RPG, media);                                                                //se imprime el array filtrado y la media.
