function randomFirePokemon() { 
    fetch('https://pokeapi.co/api/v2/type/fire')
    .then((response) => response.json())
    .then((data) => {
        const index = Math.floor(Math.random() * data.pokemon.length);
        const newPoke = data.pokemon[index];
        
        fetch(newPoke.pokemon.url)
        .then((response) => response.json())
        .then((data) => {
            document.querySelector('.pokemonBox').innerHTML = `
            <div>
                <img src='${data.sprites.other['official-artwork'].front_default}' alt='${data.name}'></img>
            </div>
            <div class='pokemonInfo'>
                <h1>${data.name}</h1>
            </div>
            `;   
        })
    })
}
//randomFirePokemon()

function randomGrassPokemon() { 
    fetch('https://pokeapi.co/api/v2/type/grass')
    .then((response) => response.json())
    .then((data) => {
        const index = Math.floor(Math.random() * data.pokemon.length);
        const newPoke = data.pokemon[index];
        
        fetch(newPoke.pokemon.url)
        .then((response) => response.json())
        .then((data) => {
            document.querySelector('.pokemonBox').innerHTML = `
            <div>
                <img src='${data.sprites.other['official-artwork'].front_default}' alt='${data.name}'></img>
            </div>
            <div class='pokemonInfo'>
                <h1>${data.name}</h1>
            </div>
            `;   
        })
    })
}
//randomGrassPokemon()

function randomFlyingPokemon() { 
    fetch('https://pokeapi.co/api/v2/type/flying')
    .then((response) => response.json())
    .then((data) => {
        const index = Math.floor(Math.random() * data.pokemon.length);
        const newPoke = data.pokemon[index];
        
        fetch(newPoke.pokemon.url)
        .then((response) => response.json())
        .then((data) => {
            document.querySelector('.pokemonBox').innerHTML = `
            <div>
                <img src='${data.sprites.other['official-artwork'].front_default}' alt='${data.name}'></img>
            </div>
            <div class='pokemonInfo'>
                <h1>${data.name}</h1>
            </div>
            `;   
        })
    })
}
//randomFlyingPokemon()

function randomWaterPokemon() { 
    fetch('https://pokeapi.co/api/v2/type/water')
    .then((response) => response.json())
    .then((data) => {
        const index = Math.floor(Math.random() * data.pokemon.length);
        const newPoke = data.pokemon[index];
        
        fetch(newPoke.pokemon.url)
        .then((response) => response.json())
        .then((data) => {
            document.querySelector('.pokemonBox').innerHTML = `
            <div>
                <img src='${data.sprites.other['official-artwork'].front_default}' alt='${data.name}'></img>
            </div>
            <div class='pokemonInfo'>
                <h1>${data.name}</h1>
            </div>
            `;   
        })
    })
}
//randomWaterPokemon()
