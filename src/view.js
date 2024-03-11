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
       this.renderPlayer1(world.player1);
    }

    renderPlayer1(player1){
        this.context.drawImage(
            this.sprite.image,
            0, 0, 64, 64,//вырезаем кусок спрайта
            0, 0, 32, 32,//масштабируем его в 2 раза меньше
            );
    }
}