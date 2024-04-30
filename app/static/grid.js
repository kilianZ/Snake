
class Grid {
    constructor(canvas, ctx){
        this.canvas = canvas
        this.ctx = ctx 
        this.width = canvas.width;
        this.height = canvas.height;
        this.gridWidth;
        this.gridHeight;
        this.cellSize;
        this.heighGap;
        this.widthGap;
    }

    handleResize(){
        //this.cellSize = Math.floor(Math.min(this.width / this.gridWidth, this.height / this.gridHeight))
        this.cellSize = 30
        this.gridHeight = Math.floor(this.height / this.cellSize)
        this.gridWidth = Math.floor(this.width / this.cellSize)

        this.heightGap = Math.floor(0.5*(this.height - this.gridHeight * this.cellSize))
        this.widthGap = Math.floor(0.5*(this.width - this.gridWidth * this.cellSize))

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

    getColorGradient(x, y){
        // RADIAL GRADIENT 
        // let red = 100;
        // let green = 100 + (150*(1 - 2 * Math.abs(this.gridWidth/2 - y)/this.gridWidth))
        // let blue = 100 + (150*(1 - 2* Math.abs(this.gridWidth/2 - x)/this.gridWidth))

        let red = 50;
        let green = 100 + 150 * ((this.gridWidth - x)/this.gridWidth)
        let blue = 100 + 150 * ((this.gridHeight - y)/this.gridHeight)

        return `rgb(${red}, ${green}, ${blue})`
        //return 'blue'
    }

    fillCell(x, y, c=this.ctx){
        // this.updateCellSize()
        let size = this.cellSize 

        c.fillStyle = this.getColorGradient(x, y);
        c.fillRect(x * size + this.widthGap, y * size + this.heightGap, size - 1, size - 1)
    }

    X = (x) => x * this.cellSize + this.widthGap;
    Y = (y) => y * this.cellSize + this.heightGap;

    drawTarget(x, y, c=this.ctx){
        let size = this.cellSize;
        let s = Math.floor(size/3);

        console.log(this.X(x), this.Y(y))
        
        c.fillStyle = 'white'
        c.fillRect(this.X(x), this.Y(y), s, s)
        c.fillRect(this.X(x) + 2*s, this.Y(y), s, s)
        c.fillRect(this.X(x) + s, this.Y(y) + s, s, s)
        c.fillRect(this.X(x), this.Y(y) + 2*s, s, s)
        c.fillRect(this.X(x) + 2*s, this.Y(y) + 2*s, s, s)
    }

    drawHead(x, y, c=this.ctx){
        this.fillCell(x, y)
        // let size = this.cellSize;
        // c.fillStyle = 'white'
        // c.fillRect(x * size + this.widthGap, y * size + this.heightGap, size - 1, size - 1)

        // let s = Math.floor(this.cellSize/10)

        // c.strokeStyle = 'white'
        // c.lineWidth = 2
        // c.strokeRect(this.X(x) - s, this.Y(y) - s, 12*s, 12*s)
    }

    drawTail(x, y, c=this.ctx){
        this.fillCell(x,y)
        // let s = Math.floor(this.cellSize/5)

        // c.strokeStyle = 'white'
        // // c.lineWidth = s - 4
        // c.strokeRect(this.X(x) - s, this.Y(y) - s, 7*s, 7*s)
    }
}