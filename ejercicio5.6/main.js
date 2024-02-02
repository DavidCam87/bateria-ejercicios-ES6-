/* Dado el siguiente javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'. */


const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const input = document.querySelector('[data-function="toFilterStreamers"]');

input.addEventListener('input', (event) => {            //esperamos un evento en la entrada input
  const streamersFilter = streamers.filter(streamer => streamer.name.includes(event.target.value));
  //con filter creamos un nuevo array con los streamers filtrados
  //con includes() comparamos la entrada del input con el nombre del streamer
  //y event.target.value es el valor de la entrada que se tiene que incluir en la comprobación
  console.log(streamersFilter);
})





