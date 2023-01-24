/////////////////////////////////////////////////////FORM AND TRAINER CARD///////////////////////////////////////////////////////


let formEl = document.getElementById("trainerForm");
let nameEl = document.querySelector('input[name="name"]');
let aliasEl = document.querySelector('input[name="alias"]');
let homeTownEl = document.querySelector('input[name="home-town"]');
let favoritePokemonEl = document.querySelector('input[name="favorite-pokemon"]');


//Submit form function
function submitForm(event) {
    event.preventDefault();

    localStorage.setItem('name:', nameEl.value);
    localStorage.setItem('alias:', aliasEl.value);
    localStorage.setItem('home-town:', homeTownEl.value);
    localStorage.setItem('favorite-pokemon:', favoritePokemonEl.value);

    var inputElements = document.querySelectorAll('input[type="text"]');
    for (var i = 0; i < inputElements.length; i++) {
    inputElements[i].value = '';
    }


//Insert new info Trainer Card after submit button has been clicked

    let trainerName = document.getElementById("trainerName");
    let trainerAlias = document.getElementById("trainerAlias");
    let trainerHomeTown = document.getElementById("trainerHomeTown");
    let trainerFavoritePokemon = document.getElementById("trainerFavoritePokemon");
    let favPokeName = localStorage.getItem('favorite-pokemon:');
    
    trainerName.textContent=localStorage.getItem('name:');
    trainerAlias.textContent=localStorage.getItem('alias:');
    trainerHomeTown.textContent=localStorage.getItem('home-town:');
    trainerFavoritePokemon.textContent=localStorage.getItem('favorite-pokemon:');

    let requestUrlForm = ' https://pokeapi.co/api/v2/pokemon/';
    requestUrlForm += favPokeName
    fetch(requestUrlForm)
            .then(function (response) {
                return response.json();
            })
            .then(function generatePokemons(data) {
                let pokemonImgSrc = document.getElementById("trainerFavPokeImg").setAttribute('src', data.sprites.other['official-artwork'].front_default);
            });
};

formEl.addEventListener('submit', submitForm);


//Holds info Trainer Card

    let trainerName = document.getElementById("trainerName");
    let trainerAlias = document.getElementById("trainerAlias");
    let trainerHomeTown = document.getElementById("trainerHomeTown");
    let trainerFavoritePokemon = document.getElementById("trainerFavoritePokemon");
    let favPokeName = localStorage.getItem('favorite-pokemon:');
    
    trainerName.textContent=localStorage.getItem('name:');
    trainerAlias.textContent=localStorage.getItem('alias:');
    trainerHomeTown.textContent=localStorage.getItem('home-town:');
    trainerFavoritePokemon.textContent=localStorage.getItem('favorite-pokemon:');

    let requestUrlForm = ' https://pokeapi.co/api/v2/pokemon/';
    requestUrlForm += favPokeName
    fetch(requestUrlForm)
            .then(function (response) {
                return response.json();
            })
            .then(function generatePokemons(data) {
                let pokemonImgSrc = document.getElementById("trainerFavPokeImg").setAttribute('src', data.sprites.other['official-artwork'].front_default);
            });


/////////////////////////////////////////////////////FORM AND TRAINER CARD CODE ENDS HERE////////////////////////////////////////