
// const shower = document.getElementById('shower')
// if (shower != undefined) {
// console.log('Estoy en el show')
// } else {
// console.log('No estoy en el show')
// }

// console.log (shower)

async function getPokemon(i) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const pokemon = await response.json();
    console.log(pokemon)

    const showcase = document.createElement('div');
    showcase.classList.add('pokeshow');

    let dni = document.createElement('div');
    dni.classList.add('dni');
    dni.innerHTML = pokemon.id;
    dni.innerHTML = pokemon.id.toString().padStart(4, '#000');

    const pic = document.createElement('img');
    pic.classList.add('imageshow');
    pic.src = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`

    const nameshow = document.createElement('div');
    nameshow.classList.add('nameshow');
    nameshow.innerHTML = pokemon.name;

    const kind = document.createElement('div');
    for (const types of pokemon.types) {
        if (types.slot == 1) {
            kind.innerHTML = types.type.name;
            kind.classList.add('kind')
            showcase.classList.add(`kind-${types.type.name}`);
        }
    }

    const kind2 = document.createElement('div');
    for (const types of pokemon.types) {
        if (types.slot == 2) {
            kind2.classList.add('kind2');
            kind2.innerHTML = types.type.name;
        }
    }

    showcase.appendChild(dni);
    showcase.appendChild(nameshow);
    showcase.appendChild(kind);
    showcase.appendChild(pic);
    showcase.appendChild(kind2);
    document.getElementById('top__shower').appendChild(showcase);

    const about = document.createElement('div')
    about.classList.add('abouto')

    const height = document.createElement('div')
    height.classList.add('abouto2')
    height.innerHTML = pokemon.height;

    const weight = document.createElement('div')
    weight.classList.add('abouto2')
    weight.innerHTML = pokemon.weight;

    about.appendChild(height)
    about.appendChild(weight)
    document.getElementById('info__about').appendChild(about)

    const battle = document.getElementById('babutton')
    battle.href = `${pokemon.id}/battle`

    // const backb = document.getElementById('backbutton')
    // backb.href = `pokemons`

    // const ability = document.createElement('div')
    // ability.classList.add('abouto2')
    // for (const ability of pokemon.abilities.ability ) {
    //     if (ability.name )
}

let showAbout = function() {
    var show = document.getElementById('info__stats')
    show.style.display = 'inline-block' 
    let show2 = document.getElementById('info__about')
    show2.style.display = 'inline-block'
}
