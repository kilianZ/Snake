
class Grid {
    constructor(canvas, ctx){
        this.canvas = canvas
        this.ctx = ctx 
        this.width = canvas.width;
        this.height = canvas.height;
        this.gridWidth = 20;
        this.gridHeight = 20;
        this.cellSize = 0;
    }

    updateCellSize(){
        this.cellSize = Math.floor(Math.min(this.width / this.gridWidth, this.height / this.gridHeight))
    }

    print(str){
        console.log(str)
    }

    clear(color, c=this.ctx, w=this.width, h=this.height){
        // Example drawing: Clears the canvas and draws a white center circle every resize
        c.clearRect(0, 0, w, h);
        c.fillStyle = color;
        c.fillRect(0,0,w,h)
    }

    fillCell(x , y, c=this.ctx){
        this.updateCellSize()
        let size = this.cellSize 

        c.fillStyle = 'blue'
        c.fillRect(x * size + 0.5, y * size + 0.5, size, size)
    }
}