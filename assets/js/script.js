//////////////////////////////////////////////////////////////6 RANDOM POKEMON GENERATOR CODE STARTS HERE/////////////////////////////

var fetchButton = document.getElementById('fetch-button');
var allPokemon = 1008;

document.getElementById('cards').style.display = "none";

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////POKEMON 1


function getApi() {

    function generateRandomIntegerInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let randomPoke = generateRandomIntegerInRange(1, allPokemon);
    console.log(randomPoke);


    var requestUrl = ' https://pokeapi.co/api/v2/pokemon/';
    requestUrl += randomPoke

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function generatePokemons(data) {



            document.getElementById('cards').style.display = "block";

            console.log(data);
            console.log(data.name);

            var pokeName = data.name;
            var pokeId = data.id;
            var pokeType = data.types[0].type.name;
            var weight = data.weight;
            var pokeWeight = weight * 0.1;
            pokeWeight = pokeWeight.toFixed(1);
            var height = data.height;
            var pokeHeight = height * 0.1;
            pokeHeight = pokeHeight.toFixed(1);



            var imgValue = document.querySelector('.pokeImg').setAttribute('src', data.sprites.other['official-artwork'].front_default);
            console.log(imgValue);
            // if (imgValue === null);

            var nameEle = document.getElementById("name");
            var printName = nameEle.textContent += " " + pokeName;
            var idEle = document.getElementById("id");
            var printId = idEle.textContent += " " + pokeId;
            var typeEle = document.getElementById("type");
            var printType = typeEle.textContent += " " + pokeType;
            var weightEle = document.getElementById("weight");
            var printWeight = weightEle.textContent += " " + pokeWeight + " Kg";
            var heightEle = document.getElementById("height");
            var printHeight = heightEle.textContent += " " + pokeHeight + " m";

        });


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////POKEMON 2


    function generateRandomIntegerInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let randomPoke2 = generateRandomIntegerInRange(1, allPokemon);
    console.log(randomPoke2);


    var requestUrl2 = ' https://pokeapi.co/api/v2/pokemon/';
    requestUrl2 += randomPoke2

    fetch(requestUrl2)
        .then(function (response) {
            return response.json();
        })
        .then(function generatePokemons(data) {


            console.log(data);
            console.log(data.name);

            var pokeName2 = data.name;  ///DO NOT CHANGE VALUE NAME
            var pokeId2 = data.id; ///DO NOT CHANGE VALUE NAME
            var pokeType2 = data.types[0].type.name;
            var weight2 = data.weight; ///DO NOT CHANGE VALUE NAME
            var pokeWeight2 = weight2 * 0.1;
            pokeWeight2 = pokeWeight2.toFixed(1);
            var height2 = data.height; console.log(height2);
            var pokeHeight2 = height2 * 0.1; console.log(pokeHeight2);
            pokeHeight2 = pokeHeight2.toFixed(1);



            var imgValue2 = document.querySelector('.pokeImg2').setAttribute('src', data.sprites.other['official-artwork'].front_default);
            console.log(imgValue2)
            // if (imgValue === null);

            var nameEle2 = document.getElementById("name2");
            var printName2 = nameEle2.textContent += " " + pokeName2;
            var idEle2 = document.getElementById("id2");
            var printId2 = idEle2.textContent += " " + pokeId2;
            var typeEle2 = document.getElementById("type2");
            var printType2 = typeEle2.textContent += " " + pokeType2;
            var weightEle2 = document.getElementById("weight2");
            var printWeight2 = weightEle2.textContent += " " + pokeWeight2 + " Kg";
            var heightEle2 = document.getElementById("height2");
            var printHeight2 = heightEle2.textContent += " " + pokeHeight2 + " m";

        });


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////POKEMON 3


    function generateRandomIntegerInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let randomPoke3 = generateRandomIntegerInRange(1, allPokemon);
    console.log(randomPoke3);



    var requestUrl3 = ' https://pokeapi.co/api/v2/pokemon/';
    requestUrl3 += randomPoke3

    fetch(requestUrl3)
        .then(function (response) {
            return response.json();
        })
        .then(function generatePokemons(data) {


            console.log(data);
            console.log(data.name);

            var pokeName3 = data.name;  ///DO NOT CHANGE VALUE NAME
            var pokeId3 = data.id; ///DO NOT CHANGE VALUE NAME
            var pokeType3 = data.types[0].type.name;
            var weight3 = data.weight; ///DO NOT CHANGE VALUE NAME
            var pokeWeight3 = weight3 * 0.1;
            pokeWeight3 = pokeWeight3.toFixed(1);
            var height3 = data.height; console.log(height3);
            var pokeHeight3 = height3 * 0.1; console.log(pokeHeight3);
            pokeHeight3 = pokeHeight3.toFixed(1);



            var imgValue3 = document.querySelector('.pokeImg3').setAttribute('src', data.sprites.other['official-artwork'].front_default);
            console.log(imgValue3)
            // if (imgValue === null);

            var nameEle3 = document.getElementById("name3");
            var printName3 = nameEle3.textContent += " " + pokeName3;
            var idEle3 = document.getElementById("id3");
            var printId3 = idEle3.textContent += " " + pokeId3;
            var typeEle3 = document.getElementById("type3");
            var printType3 = typeEle3.textContent += " " + pokeType3;
            var weightEle3 = document.getElementById("weight3");
            var printWeight3 = weightEle3.textContent += " " + pokeWeight3 + " Kg";
            var heightEle3 = document.getElementById("height3");
            var printHeight3 = heightEle3.textContent += " " + pokeHeight3 + " m";

        });


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////POKEMON 4


    function generateRandomIntegerInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let randomPoke4 = generateRandomIntegerInRange(1, allPokemon);
    console.log(randomPoke4);



    var requestUrl4 = ' https://pokeapi.co/api/v2/pokemon/';
    requestUrl4 += randomPoke4

    fetch(requestUrl4)
        .then(function (response) {
            return response.json();
        })
        .then(function generatePokemons(data) {


            console.log(data);
            console.log(data.name);

            var pokeName4 = data.name;  ///DO NOT CHANGE VALUE NAME
            var pokeId4 = data.id; ///DO NOT CHANGE VALUE NAME
            var pokeType4 = data.types[0].type.name;
            var weight4 = data.weight; ///DO NOT CHANGE VALUE NAME
            var pokeWeight4 = weight4 * 0.1;
            pokeWeight4 = pokeWeight4.toFixed(1);
            var height4 = data.height; console.log(height4);///DO NOT CHANGE VALUE NAME
            var pokeHeight4 = height4 * 0.1; console.log(pokeHeight4);
            pokeHeight4 = pokeHeight4.toFixed(1);



            var imgValue4 = document.querySelector('.pokeImg4').setAttribute('src', data.sprites.other['official-artwork'].front_default);
            console.log(imgValue4)
            // if (imgValue === null);

            var nameEle4 = document.getElementById("name4");
            var printName4 = nameEle4.textContent += " " + pokeName4;
            var idEle4 = document.getElementById("id4");
            var printId4 = idEle4.textContent += " " + pokeId4;
            var typeEle4 = document.getElementById("type4");
            var printType4 = typeEle4.textContent += " " + pokeType4;
            var weightEle4 = document.getElementById("weight4");
            var printWeight4 = weightEle4.textContent += " " + pokeWeight4 + " Kg";
            var heightEle4 = document.getElementById("height4");
            var printHeight4 = heightEle4.textContent += " " + pokeHeight4 + " m";

        });


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////POKEMON5


    function generateRandomIntegerInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let randomPoke5 = generateRandomIntegerInRange(1, allPokemon);
    console.log(randomPoke5);


    
    var requestUrl5 = ' https://pokeapi.co/api/v2/pokemon/';
    requestUrl5 += randomPoke5

    fetch(requestUrl5)
        .then(function (response) {
            return response.json();
        })
        .then(function generatePokemons(data) {


            console.log(data);
            console.log(data.name);

            var pokeName5 = data.name;  ///DO NOT CHANGE VALUE NAME
            var pokeId5 = data.id; ///DO NOT CHANGE VALUE NAME
            var pokeType5 = data.types[0].type.name;
            var weight5 = data.weight; ///DO NOT CHANGE VALUE NAME
            var pokeWeight5 = weight5 * 0.1;
            pokeWeight5 = pokeWeight5.toFixed(1);
            var height5 = data.height; console.log(height5);///DO NOT CHANGE VALUE NAME
            var pokeHeight5 = height5 * 0.1; console.log(pokeHeight5);
            pokeHeight5 = pokeHeight5.toFixed(1);



            var imgValue5 = document.querySelector('.pokeImg5').setAttribute('src', data.sprites.other['official-artwork'].front_default);
            console.log(imgValue5)
            // if (imgValue === null);

            var nameEle5 = document.getElementById("name5");
            var printName5 = nameEle5.textContent += " " + pokeName5;
            var idEle5 = document.getElementById("id5");
            var printId4 = idEle5.textContent += " " + pokeId5;
            var typeEle5 = document.getElementById("type5");
            var printType5 = typeEle5.textContent += " " + pokeType5;
            var weightEle5 = document.getElementById("weight5");
            var printWeight5 = weightEle5.textContent += " " + pokeWeight5 + " Kg";
            var heightEle5 = document.getElementById("height5");
            var printHeight5 = heightEle5.textContent += " " + pokeHeight5 + " m";

        });


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////POKEMON6


    function generateRandomIntegerInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let randomPoke6 = generateRandomIntegerInRange(1, allPokemon);
    console.log(randomPoke6);


    // fetch request gets a list of all the repos for the node.js organization
    var requestUrl6 = ' https://pokeapi.co/api/v2/pokemon/';
    requestUrl6 += randomPoke6

    fetch(requestUrl6)
        .then(function (response) {
            return response.json();
        })
        .then(function generatePokemons(data) {


            console.log(data);
            console.log(data.name);

            var pokeName6 = data.name;  ///DO NOT CHANGE VALUE NAME
            var pokeId6 = data.id; ///DO NOT CHANGE VALUE NAME
            var pokeType6 = data.types[0].type.name;
            var weight6 = data.weight; ///DO NOT CHANGE VALUE NAME
            var pokeWeight6 = weight6 * 0.1;
            pokeWeight6 = pokeWeight6.toFixed(1);
            var height6 = data.height; console.log(height6);///DO NOT CHANGE VALUE NAME
            var pokeHeight6 = height6 * 0.1; console.log(pokeHeight6);
            pokeHeight6 = pokeHeight6.toFixed(1);



            var imgValue6 = document.querySelector('.pokeImg6').setAttribute('src', data.sprites.other['official-artwork'].front_default);
            console.log(imgValue6)
            // if (imgValue === null);

            var nameEle6 = document.getElementById("name6");
            var printName6 = nameEle6.textContent += " " + pokeName6;
            var idEle6 = document.getElementById("id6");
            var printId6 = idEle6.textContent += " " + pokeId6;
            var typeEle6 = document.getElementById("type6");
            var printType6 = typeEle6.textContent += " " + pokeType6;
            var weightEle6 = document.getElementById("weight6");
            var printWeight6 = weightEle6.textContent += " " + pokeWeight6 + " Kg";
            var heightEle6 = document.getElementById("height6");
            var printHeight6 = heightEle6.textContent += " " + pokeHeight6 + " m";

        });


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
fetchButton.addEventListener('click', getApi);


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