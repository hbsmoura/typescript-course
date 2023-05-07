"use strict";
function printHero(hero) {
    console.log(`Hero: ${hero.alterEgo}, secret identity: ${hero.name}`);
}
printHero({
    name: 'Peter Parker',
    alterEgo: 'Spider Man'
});
