export default class Game {
    constructor({ world, view, levels }){
        this.world = world;
        this.view = view;
        this.levels = levels;
        this.activekey = new Set();
        this.loop = this.loop.bind(this);
    }

    async init() {
        this.view.init();

        document.addEventListener('keydown', event => {
            event.preventDefault();

            switch (event.code) {
                case  'ArrowUp':
                case  'ArrowRight':
                case  'ArrowDown':
                case  'ArrowLeft':
                case  'Space':
                case  'Enter':
                    this.activekey.add(event.code);
                    console.log(event.code)
            }
            this.key = event.code;

        });

        document.addEventListener('keyup', event => {
            event.preventDefault();

            switch (event.code) {
                case  'ArrowUp':
                case  'ArrowRight':
                case  'ArrowDown':
                case  'ArrowLeft':
                case  'Space':
                case  'Enter':
                    this.activekey.delete(event.code);
            }
            this.key = '';

        });
    }


    start() {
        requestAnimationFrame(this.loop);
    }

    loop() {
        this.world.update(this.activekey);
        this.view.update(this.world);

        requestAnimationFrame(this.loop)
    }
}