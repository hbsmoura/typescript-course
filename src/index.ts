type Hero = {
    name: string,
    alterEgo: string
}

function printHero(hero: Hero) {
    console.log(`Hero: ${hero.alterEgo}, secret identity: ${hero.name}`)
}

printHero({
    name: 'Peter Parker',
    alterEgo: 'Spider Man'
})
