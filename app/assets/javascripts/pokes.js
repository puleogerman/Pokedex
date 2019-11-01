// let page = 1;
async function getPokemons() {
    const pokemons = [];
    for (let i = 1; i <= 51; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const body = await response.json();
        pokemons.push(body);
    }
    console.log(pokemons);

    for (const pokemon of pokemons) {

        let id = document.createElement('div');
        id.classList.add('id');
        id.innerHTML = pokemon.id;
        id.innerHTML = pokemon.id.toString().padStart(4, '#000');

        const card = document.createElement('a');
        card.href = `pokemons/${pokemon.id}`
        card.classList.add('pokemon');

        const name = document.createElement('div');
        name.classList.add('name');
        name.innerHTML = pokemon.name;
        const image = document.createElement('img');
        image.classList.add('image');
        image.src = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`
        // const miniball = document.createElement('img');
        // miniball.classList.add('miniball');
        // miniball.src = ./images/Pokebola.png
        const type = document.createElement('div');
        for (const types of pokemon.types) {
            if (types.slot == 1) {
                type.innerHTML = types.type.name;
                type.classList.add('type')
                card.classList.add(`type-${types.type.name}`);
            }
        }

        const type2 = document.createElement('div');
        for (const types of pokemon.types) {
            if (types.slot == 2) {
                type2.classList.add('type2');
                type2.innerHTML = types.type.name;
            }
        }
        
        
        // card.appendChild(pokemonId);
        card.appendChild(id);
        card.appendChild(name);
        card.appendChild(type);
        card.appendChild(image);
        card.appendChild(type2);
        document.getElementById('pokedex').appendChild(card);
        
    }
}

function getScrollXY() {
    var scrOfX = 0, scrOfY = 0;
    if (typeof (window.pageYOffset) == 'number') {
        //Netscape compliant
        scrOfY = window.pageYOffset;
        scrOfX = window.pageXOffset;
    } else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
        //DOM compliant
        scrOfY = document.body.scrollTop;
        scrOfX = document.body.scrollLeft;
    } else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
        //IE6 standards compliant mode
        scrOfY = document.documentElement.scrollTop;
        scrOfX = document.documentElement.scrollLeft;
    }
    return [scrOfX, scrOfY];
}

function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}

// document.addEventListener("scroll", function (event) {
//     if (getDocHeight() <= getScrollXY()[1] + window.innerHeight) {
//         getPokemons();
//     }
// })
getPokemons();