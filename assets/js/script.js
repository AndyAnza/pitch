//////////////////////////////////////////////////////////////6 RANDOM POKEMON GENERATOR CODE STARTS HERE/////////////////////////////

let fetchButton = document.getElementById('fetch-button');
let allPokemon = 905;

document.getElementById('cards').style.display = "none";
document.getElementById('closePokeGenButton').style.display = "none"; 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////POKEMON 1

function getApi() {

    function generateRandomIntegerInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let randomPoke = generateRandomIntegerInRange(1, allPokemon);


    let requestUrl = ' https://pokeapi.co/api/v2/pokemon/';
    requestUrl += randomPoke

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function generatePokemons(data) {


            document.getElementById('fetch-button').style.display = "none"; 
            document.getElementById('closePokeGenButton').style.display = "block";
            document.getElementById('cards').style.display = "block";

            // console.log(data.name);
            // console.log(data);

            let imgValue = document.querySelector('.pokeImg').setAttribute('src', data.sprites.other['official-artwork'].front_default);
            let pokeName = data.name;
            let pokeId = data.id;
            let pokeType = data.types[0].type.name;
            let weight = data.weight;
            let pokeWeight = weight * 0.1;
            pokeWeight = pokeWeight.toFixed(1);
            let height1 = data.height;
            let pokeHeight = height1 * 0.1;
            pokeHeight = pokeHeight.toFixed(1);

            let nameEle = document.getElementById("name1");
            let printName = nameEle.textContent += " " + pokeName;
            let idEle = document.getElementById("id1");
            let printId = idEle.textContent += " " + pokeId;
            let typeEle = document.getElementById("type1");
            let printType = typeEle.textContent += " " + pokeType;
            let weightEle = document.getElementById("weight1");
            let printWeight = weightEle.textContent += " " + pokeWeight + " Kg";
            let heightEle = document.getElementById("height1");
            let printHeight = heightEle.textContent += " " + pokeHeight + " m";

        });


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////POKEMON 2

    let randomPoke2 = generateRandomIntegerInRange(1, allPokemon);


    let requestUrl2 = ' https://pokeapi.co/api/v2/pokemon/';
    requestUrl2 += randomPoke2

    fetch(requestUrl2)
        .then(function (response) {
            return response.json();
        })
        .then(function generatePokemons(data) {

            // console.log(data.name);
            // console.log(data);

            let pokeName2 = data.name;  ///DO NOT CHANGE VALUE NAME
            let pokeId2 = data.id; ///DO NOT CHANGE VALUE NAME
            let pokeType2 = data.types[0].type.name;
            let weight2 = data.weight; ///DO NOT CHANGE VALUE NAME
            let pokeWeight2 = weight2 * 0.1;
            pokeWeight2 = pokeWeight2.toFixed(1);
            let height2 = data.height; 
            let pokeHeight2 = height2 * 0.1; 
            pokeHeight2 = pokeHeight2.toFixed(1);

            let imgValue2 = document.querySelector('.pokeImg2').setAttribute('src', data.sprites.other['official-artwork'].front_default);
            let nameEle2 = document.getElementById("name2");
            let printName2 = nameEle2.textContent += " " + pokeName2;
            let idEle2 = document.getElementById("id2");
            let printId2 = idEle2.textContent += " " + pokeId2;
            let typeEle2 = document.getElementById("type2");
            let printType2 = typeEle2.textContent += " " + pokeType2;
            let weightEle2 = document.getElementById("weight2");
            let printWeight2 = weightEle2.textContent += " " + pokeWeight2 + " Kg";
            let heightEle2 = document.getElementById("height2");
            let printHeight2 = heightEle2.textContent += " " + pokeHeight2 + " m";

        });


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////POKEMON 3

    let randomPoke3 = generateRandomIntegerInRange(1, allPokemon);


    let requestUrl3 = ' https://pokeapi.co/api/v2/pokemon/';
    requestUrl3 += randomPoke3

    fetch(requestUrl3)
        .then(function (response) {
            return response.json();
        })
        .then(function generatePokemons(data) {

            // console.log(data.name);
            // console.log(data);

            let pokeName3 = data.name;  ///DO NOT CHANGE VALUE NAME
            let pokeId3 = data.id; ///DO NOT CHANGE VALUE NAME
            let pokeType3 = data.types[0].type.name;
            let weight3 = data.weight; ///DO NOT CHANGE VALUE NAME
            let pokeWeight3 = weight3 * 0.1;
            pokeWeight3 = pokeWeight3.toFixed(1);
            let height3 = data.height; 
            let pokeHeight3 = height3 * 0.1; 
            pokeHeight3 = pokeHeight3.toFixed(1);

            let imgValue3 = document.querySelector('.pokeImg3').setAttribute('src', data.sprites.other['official-artwork'].front_default);
            let nameEle3 = document.getElementById("name3");
            let printName3 = nameEle3.textContent += " " + pokeName3;
            let idEle3 = document.getElementById("id3");
            let printId3 = idEle3.textContent += " " + pokeId3;
            let typeEle3 = document.getElementById("type3");
            let printType3 = typeEle3.textContent += " " + pokeType3;
            let weightEle3 = document.getElementById("weight3");
            let printWeight3 = weightEle3.textContent += " " + pokeWeight3 + " Kg";
            let heightEle3 = document.getElementById("height3");
            let printHeight3 = heightEle3.textContent += " " + pokeHeight3 + " m";

        });


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////POKEMON 4

    let randomPoke4 = generateRandomIntegerInRange(1, allPokemon);


    let requestUrl4 = ' https://pokeapi.co/api/v2/pokemon/';
    requestUrl4 += randomPoke4

    fetch(requestUrl4)
        .then(function (response) {
            return response.json();
        })
        .then(function generatePokemons(data) {

            // console.log(data.name);
            // console.log(data);

            let pokeName4 = data.name;  ///DO NOT CHANGE VALUE NAME
            let pokeId4 = data.id; ///DO NOT CHANGE VALUE NAME
            let pokeType4 = data.types[0].type.name;
            let weight4 = data.weight; ///DO NOT CHANGE VALUE NAME
            let pokeWeight4 = weight4 * 0.1;
            pokeWeight4 = pokeWeight4.toFixed(1);
            let height4 = data.height;///DO NOT CHANGE VALUE NAME
            let pokeHeight4 = height4 * 0.1;
            pokeHeight4 = pokeHeight4.toFixed(1);

            let imgValue4 = document.querySelector('.pokeImg4').setAttribute('src', data.sprites.other['official-artwork'].front_default);
            let nameEle4 = document.getElementById("name4");
            let printName4 = nameEle4.textContent += " " + pokeName4;
            let idEle4 = document.getElementById("id4");
            let printId4 = idEle4.textContent += " " + pokeId4;
            let typeEle4 = document.getElementById("type4");
            let printType4 = typeEle4.textContent += " " + pokeType4;
            let weightEle4 = document.getElementById("weight4");
            let printWeight4 = weightEle4.textContent += " " + pokeWeight4 + " Kg";
            let heightEle4 = document.getElementById("height4");
            let printHeight4 = heightEle4.textContent += " " + pokeHeight4 + " m";

        });


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////POKEMON5

    let randomPoke5 = generateRandomIntegerInRange(1, allPokemon);


    let requestUrl5 = ' https://pokeapi.co/api/v2/pokemon/';
    requestUrl5 += randomPoke5

    fetch(requestUrl5)
        .then(function (response) {
            return response.json();
        })
        .then(function generatePokemons(data) {

            // console.log(data.name);
            // console.log(data);

            let pokeName5 = data.name;  ///DO NOT CHANGE VALUE NAME
            let pokeId5 = data.id; ///DO NOT CHANGE VALUE NAME
            let pokeType5 = data.types[0].type.name;
            let weight5 = data.weight; ///DO NOT CHANGE VALUE NAME
            let pokeWeight5 = weight5 * 0.1;
            pokeWeight5 = pokeWeight5.toFixed(1);
            let height5 = data.height;///DO NOT CHANGE VALUE NAME
            let pokeHeight5 = height5 * 0.1;
            pokeHeight5 = pokeHeight5.toFixed(1);

            let imgValue5 = document.querySelector('.pokeImg5').setAttribute('src', data.sprites.other['official-artwork'].front_default);
            let nameEle5 = document.getElementById("name5");
            let printName5 = nameEle5.textContent += " " + pokeName5;
            let idEle5 = document.getElementById("id5");
            let printId4 = idEle5.textContent += " " + pokeId5;
            let typeEle5 = document.getElementById("type5");
            let printType5 = typeEle5.textContent += " " + pokeType5;
            let weightEle5 = document.getElementById("weight5");
            let printWeight5 = weightEle5.textContent += " " + pokeWeight5 + " Kg";
            let heightEle5 = document.getElementById("height5");
            let printHeight5 = heightEle5.textContent += " " + pokeHeight5 + " m";

        });


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////POKEMON6

    let randomPoke6 = generateRandomIntegerInRange(1, allPokemon);


    let requestUrl6 = ' https://pokeapi.co/api/v2/pokemon/';
    requestUrl6 += randomPoke6

    fetch(requestUrl6)
        .then(function (response) {
            return response.json();
        })
        .then(function generatePokemons(data) {

            // console.log(data.name);
            // console.log(data);

            let pokeName6 = data.name;  ///DO NOT CHANGE VALUE NAME
            let pokeId6 = data.id; ///DO NOT CHANGE VALUE NAME
            let pokeType6 = data.types[0].type.name;
            let weight6 = data.weight; ///DO NOT CHANGE VALUE NAME
            let pokeWeight6 = weight6 * 0.1;
            pokeWeight6 = pokeWeight6.toFixed(1);
            let height6 = data.height;///DO NOT CHANGE VALUE NAME
            let pokeHeight6 = height6 * 0.1;
            pokeHeight6 = pokeHeight6.toFixed(1);

            let imgValue6 = document.querySelector('.pokeImg6').setAttribute('src', data.sprites.other['official-artwork'].front_default);
            let nameEle6 = document.getElementById("name6");
            let printName6 = nameEle6.textContent += " " + pokeName6;
            let idEle6 = document.getElementById("id6");
            let printId6 = idEle6.textContent += " " + pokeId6;
            let typeEle6 = document.getElementById("type6");
            let printType6 = typeEle6.textContent += " " + pokeType6;
            let weightEle6 = document.getElementById("weight6");
            let printWeight6 = weightEle6.textContent += " " + pokeWeight6 + " Kg";
            let heightEle6 = document.getElementById("height6");
            let printHeight6 = heightEle6.textContent += " " + pokeHeight6 + " m";

        });
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

fetchButton.addEventListener('click', getApi);

////////

function closePokeGenerator(){

    document.getElementById('cards').style.display = "none";  
    document.getElementById('fetch-button').style.display = "block"; 
    document.getElementById('closePokeGenButton').style.display = "none";
    document.querySelectorAll('.erase').forEach(function(span) {
        span.innerHTML = '';
    });
}

closePokeGenButton.addEventListener('click', closePokeGenerator);

// for (var i = 1; i < 1008; i++){
//     let requestUrl11 = ' https://pokeapi.co/api/v2/pokemon/'
//     requestUrl11 += [i]
//     fetch(requestUrl11)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function generatePokemons(data) {
//         console.log( data.id + " " + data.sprites.other['official-artwork'].front_default)
//             })
// }

/////////////////////////////////////////////////////POKEMON GENERATOR CODE ENDS HERE////////////////////////////////////////////



/////////////////////////////////////////////////////ASTROLOGY API CODE STARTS HERE//////////////////////////////////////////////

const options = {
    method: 'POST',
    headers: {
        'X-RapidAPI-Key': 'b36869ebe5mshc6556476aea0bd4p19f743jsncf1fef2c8e0a',
        'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
    }
};

var sign = document.querySelector(".compatibility");
var mood = document.querySelector(".mood");

fetch('https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=aquarius&day=today', options)
    .then(response => response.json())
    .then(data => {
        var signValue = data["compatibility"];
        var moodValue = data["mood"];

        sign.innerHTML = "Compatibility: "+signValue;
        mood.innerHTML = "Mood: "+moodValue;
    })
    .catch(err => console.error(err));
//console.log (mood.innerHTML = "Mood: "+moodValue);
   // })
    //.catch(err => console.error(err));

//.then(data => console.log(data))




/////////////////////////////////////////////////////ASTROLOGY API CODE EDNS HERE//////////////////////////////////////////////




////////////////////////////////////////////////GETS A RANDOM FIRE TYPE POKEMON///////////////////////////////////////////////////

function randomFirePokemon() { 
    fetch('https://pokeapi.co/api/v2/type/fire')
    .then(res => res.json())
    .then((data) => {
        const ranNum = Math.floor(Math.random() * data.pokemon.length);
        const ranPoke = data.pokemon[ranNum];
        
        fetch(ranPoke.pokemon.url)
        .then(res => res.json())
        .then((data) => {
            document.querySelector('#yourPokemonType').innerHTML = `
            <div class="flex justify-center items-center">
                <img src='${data.sprites.other['official-artwork'].front_default}'></img>
            </div>
            <div>
                <h1 class="flex justify-center items-center text-white text-7xl">${data.name}</h1>
            </div>
            `;   
        })
    })
}
//randomFirePokemon()
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




////////////////////////////GETS A RANDOM GRASS TYPE POKEMON (WILL BE USED FOR THE EARTH ZODIACS)////////////////////////////////////////
function randomGrassPokemon() { 
    fetch('https://pokeapi.co/api/v2/type/grass')
    .then(res => res.json())
    .then((data) => {
        const ranNum = Math.floor(Math.random() * data.pokemon.length);
        const ranPoke = data.pokemon[ranNum];
        
        fetch(ranPoke.pokemon.url)
        .then(res => res.json())
        .then((data) => {
            document.querySelector('#yourPokemonType').innerHTML = `
            <div class="flex justify-center items-center">
                <img src='${data.sprites.other['official-artwork'].front_default}'></img>
            </div>
            <div>
                <h1 class="flex justify-center items-center text-white text-7xl">${data.name}</h1>
            </div>
            `;   
        })
    })
}
//randomGrassPokemon()
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





////////////////////////////////GETS A RANDOM FLYING TYPE POKEMON (WILL BET USED FOR THE AIR ZODIACS)///////////////////////////////////
function randomFlyingPokemon() { 
    fetch('https://pokeapi.co/api/v2/type/flying')
    .then(res => res.json())
    .then((data) => {
        const ranNum = Math.floor(Math.random() * data.pokemon.length);
        const ranPoke = data.pokemon[ranNum];
        
        fetch(ranPoke.pokemon.url)
        .then(res => res.json())
        .then((data) => {
            document.querySelector('#yourPokemonType').innerHTML = `
            <div class="flex justify-center items-center">
                <img src='${data.sprites.other['official-artwork'].front_default}'></img>
            </div>
            <div>
                <h1 class="flex justify-center items-center text-white text-7xl">${data.name}</h1>
            </div>
            `;   
        })
    })
}
//randomFlyingPokemon()
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





///////////////////////////////////////GETS A RANDOM WATER TYPE POKEMON////////////////////////////////////////////////////////////
function randomWaterPokemon() { 
    fetch('https://pokeapi.co/api/v2/type/water')
    .then(res => res.json())
    .then((data) => {
        const ranNum = Math.floor(Math.random() * data.pokemon.length);
        const ranPoke = data.pokemon[ranNum];
        
        fetch(ranPoke.pokemon.url)
        .then(res => res.json())
        .then((data) => {
            document.querySelector('#yourPokemonType').innerHTML = `
            <div class="flex justify-center items-center">
                <img src='${data.sprites.other['official-artwork'].front_default}'></img>
            </div>
            <div>
                <h1 class="flex justify-center items-center text-white text-7xl">${data.name}</h1>
            </div>
            `;   
        })
    })
}
//randomWaterPokemon()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////DISCOVER YOUR ZODIAC SIGN AND SPIRIT POKEMON////////////////////////////////////////////////////////////


/*function startingPage() {
    document.querySelector("#startingPageContainer").innerHTML = `
    
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png"/>
    
    `;
}*/



function startingPage() {
    document.body.style.backgroundImage = "url('assets/images/mew.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.querySelector('#startingPageContainer').innerHTML = `
    
    <div class="text-white absolute right-2/4 top-1/2">
        <h1 class="text-5xl">Enter your birthday, to Discoer your <br> Zodiac sign and Spirit Pokemon</h1>
        <input id="calender" class="text-black m-5 rounded text-xl" type="date" id="start" name="trip-start" value="2018-07-22" min="1900-01-01" max="20">
        <button class="bg-blue-800 text-xl py-1 px-4 rounded" type="button">Enter</button>
    </div>
    `;
}

startingPage();