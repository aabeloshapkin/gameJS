export default class Game {
    constructor({ world, view, levels }){
        this.world = world;
        this.view = view;
        this.levels = levels;
        this.loop = this.loop.bind(this);
    }

    async init() {
        this.view.init();

        document.addEventListener('keydown', ({ code }) => {
            switch (code) {
                case  'ArrowUp':
                    // this.playerMove("up");
                    // break;
                case  'ArrowRight':
                case  'ArrowDown':
                case  'ArrowLeft':
                case  'Space':
                case  'Enter':
                    console.log(code)
            }

        });
    }

    start() {
        requestAnimationFrame(this.loop);
    }

    loop() {
        this.world.update();
        this.view.update(this.world);

        requestAnimationFrame(this.loop)
    }
}