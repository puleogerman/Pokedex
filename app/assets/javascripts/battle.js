
async function getPokemonback(i) {
    const response = await fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${i}.png`);
    const pokeback = await response.json();
    console.log(pokeback)

    const sprite = document.createElement('div');
    sprite.classList('mypokemon');
    sprite.innerHTML = pokeback;

    document.getElementById('fightera').appendChild(sprite);
}

async function getPokea(i) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const pokea = await response.json();
    console.log(pokea)

    const fightshow = document.createElement('div');
    fightshow.classList.add('fightshow');

    const name1 = document.createElement('div');
    name1.classList.add('fightername');
    name1.innerHTML = pokea.name;

    const sprite = document.createElement('img');
    sprite.classList.add('imagepokea');
    sprite.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${i}.png`

    // const nameshow = document.createElement('div');
    // nameshow.classList.add('nameshow');
    // nameshow.innerHTML = pokemon.name;

    // const kind = document.createElement('div');
    // for (const types of pokemon.types) {
    //     if (types.slot == 1) {
    //         kind.innerHTML = types.type.name;
    //         kind.classList.add('kind')
    //         showcase.classList.add(`kind-${types.type.name}`);
    //     }
    // }

    // const kind2 = document.createElement('div');
    // for (const types of pokemon.types) {
    //     if (types.slot == 2) {
    //         kind2.classList.add('kind2');
    //         kind2.innerHTML = types.type.name;
    //     }
    // }

   
    fightshow.appendChild(name1);
    fightshow.appendChild(sprite);
    document.getElementById('fightera').appendChild(fightshow);
}