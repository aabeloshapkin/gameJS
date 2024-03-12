import Player from './player.js'

export default class World {
    grid = [];
    player1 = new Player();
    player2 = null;
    enemys = [];

    update(activekey){
        if (activekey.has('ArrowUp')) {
            this.player1.y -= 1;
            // this.player1.direction = 0;
            if (this.player1.animationFrame === 0) {
                this.player1.direction = 0;
                this.player1.animationFrame = 1;
            } else if (this.player1.animationFrame === 1){
                this.player1.direction = 4;
                this.player1.animationFrame = 3;
            }else if (this.player1.animationFrame === 3){
                this.player1.direction = 0;
                this.player1.animationFrame = 4;
            }else if (this.player1.animationFrame === 4){
                this.player1.direction = 8;
                this.player1.animationFrame = 0;
            }
        }else if (activekey.has('ArrowRight')) {
            this.player1.x += 1;
            // this.player1.direction = 1;
            if (this.player1.animationFrame === 0) {
                this.player1.direction = 1;
                this.player1.animationFrame = 1;
            } else if (this.player1.animationFrame === 1){
                this.player1.direction = 5;
                this.player1.animationFrame = 3;
            }else if (this.player1.animationFrame === 3){
                this.player1.direction = 1;
                this.player1.animationFrame = 4;
            }else if (this.player1.animationFrame === 4){
                this.player1.direction = 9;
                this.player1.animationFrame = 0;
            }
        }else if (activekey.has('ArrowDown')) {
            this.player1.y += 1;
            // this.player1.direction = 2;
            if (this.player1.animationFrame === 0) {
                this.player1.direction = 2;
                this.player1.animationFrame = 1;
            } else if (this.player1.animationFrame === 1){
                this.player1.direction = 6;
                this.player1.animationFrame = 3;
            }else if (this.player1.animationFrame === 3){
                this.player1.direction = 2;
                this.player1.animationFrame = 4;
            }else if (this.player1.animationFrame === 4){
                this.player1.direction = 10;
                this.player1.animationFrame = 0;
            }
        }else if (activekey.has('ArrowLeft')) {
            this.player1.x -= 1;
            // this.player1.direction = 3;
            if (this.player1.animationFrame === 0) {
                this.player1.direction = 3;
                this.player1.animationFrame = 1;
            } else if (this.player1.animationFrame === 1){
                this.player1.direction = 7;
                this.player1.animationFrame = 3;
            }else if (this.player1.animationFrame === 3){
                this.player1.direction = 3;
                this.player1.animationFrame = 4;
            }else if (this.player1.animationFrame === 4){
                this.player1.direction = 11;
                this.player1.animationFrame = 0;
            }
        }
        console.log(this.player1.direction)
        // if (this.player1.animationFrame === 0) {
        //     this.player1.direction +=3;
        // }

        // this.player1.animationFrame ^= 1;

    }
}