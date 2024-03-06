import World from '/src/worlds.js';
import View from '/src/view.js';
import Game from '/src/game.js';

const canvas = document.querySelector('canvas');

new Game({
    world: new World(),
    view: new View(canvas)
});