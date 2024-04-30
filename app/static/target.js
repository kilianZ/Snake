
class Target {
    constructor(ctx, grid, snake){
        this.ctx = ctx;
        this.grid = grid;
        this.x;
        this.y;
    }

    newTarget(){
        let collision = true;

        while (collision){
            this.x = Math.floor(Math.random() * this.grid.gridWidth)
            this.y = Math.floor(Math.random() * this.grid.gridHeight)

            // check for collision
            collision = snake.checkCollision(this.x, this.y)
        }

        return [this.x, this.y]
    }

    draw(x, y){
        //let x, y;
        //[x, y] = this.newTarget() 
        console.log('target: ', x, y)
        this.grid.drawTarget(x, y)
    }

}