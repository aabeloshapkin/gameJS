export default class View {
    constructor(canvas, sprite) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.sprite = sprite;
    }

    async init() {
        await this.sprite.load();
    }

    update(world){
    this.clearScreen();
       this.renderPlayer1(world.player1);
    }

    renderPlayer1(player1){
        this.context.drawImage(
            this.sprite.image,
            ...player1.frames[player1.direction],
            // 64, 0, 64, 64,//вырезаем кусок спрайта
            player1.x, player1.y, 32, 32,//масштабируем его в 2 раза меньше
            );
    }

    clearScreen() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}