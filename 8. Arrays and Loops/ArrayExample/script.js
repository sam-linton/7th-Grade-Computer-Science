const pokemons = [
  'Pikachu',
  'Richu',
  'Charmander',
  'Snorlax',
  'Charizard'
];

const pokemonList = document.getElementById('pokemon-list');

console.log(pokemons);

for (let i = 0; i < pokemons.length; i++) {
  pokemonList.innerHTML += '<div>' + pokemons[i] + '</div>';
}