
class Snake {
    constructor(canvas, ctx, grid){
        // size=(grid.gridWidth * grid.gridHeight)
    //  size represents the max possible length of the snake 
    //  the snake can't take up more than the area of the grid

    //  grid is an interface needed to draw the snake
        this.grid = grid 
        this.canvas = canvas
        this.ctx = ctx
    /*  this.dX and this.dY represent current velocity (speed + 
        direction) of the snake where dX controls RIGHT/LEFT and
        dY controls the UP/DOWN direction. In html canvas, the y 
        access is flipped compared to a standard coordinate plane.
        The origin (0,0) is the top left corner and the positive y 
        direction is down, so to move 'UP': (dX, dY) = (0, -1)
    */  
        this.dX = 1 
        this.dY = 0
    /*  The Snake is represented as a list of neighboring cells
        which appear to create a sort of path/line (the Snake!).
        
        this.body: a queue which stores a list of coordinates for 
        each cell which makes up the snake body.

        this.head and this.tail store indeces pointing to the
        elements in the this.body queue which store the coordinates
        for the snake's head (front) and tail (back + 1). 
    */ 
        this.head = 50;
        this.tail = 0;  
        // initializez head coord to origin 
        // using value 10 for size, will update on resize
        this.body = new Array(10).fill([0,0]) 
        this.size = 10; // maximum possible length of snake body
    }

    handleResize(){
        // store current body and other temp values  
        let temp = this.body;
        let head = this.head;
        let tail = this.tail;
        let size = this.size;
        let len;

        // find current length of the snake 
        if (head > tail) 
            len = head - tail 
        else 
            len = head + (this.size - tail)        

        // calculate new max size
        this.size = this.grid.gridWidth * this.grid.gridHeight 
   
        // make new body array 
        this.body = new Array(this.size).fill([0,0])

        // copy value over 
        for (let i = 0; i < len; i++){
            this.body[i] = temp[(tail + i) % size]
        }

        // update head and tail 
        this.tail = 0;
        this.head = len;

        console.log(this.grid.gridWidth, this.grid.gridHeight)
        console.log(this.head, this.tail, len, this.size)
        console.log(this.body)
    }


    step(){
        /*  This method updates the x and y coordinates of the snake 
            If the snake leaves the grid on one side it could appear on 
            the other, for example, if its moving down and disappears at
            the bottom of the screen it should reappear from the top.
        */
        let w = this.grid.gridWidth;    // index of right most cell
        let h = this.grid.gridHeight;   // index of bottom most cell 

        // get the curret x and y coordinates of the snake head 
        let [x, y] = this.body[this.head] 

        // caculate next (x,y) coordinate based on velocity (dY, dX)
        // then check if the head went off grid
        x += this.dX 
        if (x > w - 1) 
            x = 0
        else if (x < 0) 
            x = w - 1

        y += this.dY 
        if (y > h - 1) 
            y = 0
        else if (y < 0) 
            y = h - 1

        // increment head and tail index 
        // if index exceeds max size, wrap around to 0 index 
        this.head = (this.head + 1) % this.size 
        this.tail = (this.tail + 1) % this.size 

        // assign new snake head coords 
        this.body[this.head] = [x, y]
        //console.log(this.head, x, y)
    }

    draw(){
    /*  This method renders the snake on the screen by calling
        the grid.fillCell(x, y) method for each snake.body coordinate 
        between the head and tail indeces. Since snake.body is like a
        queue, and may wrap around...we need to do the following: 

        if index of head < index of tail
            use indices less than head OR greater than tail 
        else if index of head > index of tail 
            use indices greater than tail AND less than head 
        */
       let x, y;

        if (this.head < this.tail){
            for (let i = 0; i < this.head; i++){
                [x, y] = this.body[i]
                this.grid.fillCell(x, y, this.ctx)
            }
            for (let i = this.tail + 1; i < this.size; i++){
                [x, y] = this.body[i]
                this.grid.fillCell(x, y, this.ctx)
            }
        } 
        else if (this.tail < this.head){
            for (let i = this.tail + 1; i <= this.head; i++){
                [x, y] = this.body[i]
                this.grid.fillCell(x, y, this.ctx);
            }
        }

        // draw head
        this.grid.drawHead(...this.body[this.head])
        // draw tail 
        this.grid.drawTail(...this.body[this.tail])
    }

    checkCollision(xi, yi){
        let x, y;

        if (this.head < this.tail){
            for (let i = 0; i < this.head; i++){
                [x, y] = this.body[i]
                if (xi == x && yi == y)
                    return true
            }
            for (let i = this.tail; i < this.size; i++){
                [x, y] = this.body[i]
                if (xi == x && yi == y)
                    return true
            }
        } 
        else if (this.tail < this.head){
            for (let i = this.tail; i <= this.head; i++){
                [x, y] = this.body[i]
                if (xi == x && yi == y)
                    return true
            }
        }
        return false 
    }
}