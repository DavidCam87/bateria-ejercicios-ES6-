//Dado el siguiente javascript usa forof y forin para hacer la media del 
//volumen de todos los sonidos favoritos que tienen los usuarios.

const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Pedro",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Cristina",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

let volumen = 0;                                   //se inicializa la variable volumen para almacenar el volumen total.
let favoritSounds = 0;                             //se inicializa la variable favoritSounds para almacenar el total de sonidos favoritos.
for (const user of users) {                        //se usa el bucle forof para recorrer el array users.
  for (const soundkey in user.favoritesSounds) {   //se usa el bucle forin para recorrer el objeto favoritesSounds de cada usuario.
    volumen += user.favoritesSounds[soundkey].volume  //se suma el volumen de cada sonido favorito del usuario a la variable volumen.
    favoritSounds++    //se incrementa la variable favoritSounds en 1, tiene que recorrerla 3 veces por el forin de user.favoriteSounds.
  }
}
mediaVolumen = volumen / favoritSounds;
console.log(mediaVolumen)