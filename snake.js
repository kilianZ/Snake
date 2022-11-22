
canvas = document.getElementById("canvas");
const w = canvas.width = window.innerWidth;
const h = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

ctx.fillStyle = "black";
ctx.fillRect(0,0,w,h);



// Divide the screen which has unkown width and height into a grid.
// The shape of each node should be close to a square of 40x40 pixels.

size = 40;
pw = w / Math.floor(w / size)
ph = h / Math.floor(h / size)

// ctx.fillStyle = "white";
//
// for (let i = 0; i < w; i += pw){
//   for (let j = 0; j < h; j += ph){
//     let b = Math.floor((i / w) * 150) + 100;
//     let g = Math.floor((j / h) * 150) + 100;
//     ctx.fillStyle = `rgb(100, ${g}, ${b})`;
//     ctx.fillRect(i - 0.5, j - 0.5, Math.floor(pw), Math.floor(ph));
//   }
// }

let x = 0;
let y = 0;
let dX = 1;
let dY = 0;

function move(){
  x += pw * dX;
  if (x >= w)
    x = 0;
  else if (x < 0)
    x = w - pw;

  y += ph * dY;
  if (y >= h)
    y = 0;
  else if (y < 0)
    y = h - ph;
}

function redraw(){
  let r = 0;
  let g = Math.floor(y/h * 150) + 100;
  let b = Math.floor(x/w * 150) + 100;
  ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
  ctx.fillRect(x, y, pw - 1, ph - 1);
}

let prevTimestamp = 0
function animate(timestamp){
  // prevTimestamp = prevTimestamp || timestamp;

  if (prevTimestamp + 100 <= timestamp)
  {
    move();
    redraw();

    prevTimestamp = timestamp;
  }
  window.requestAnimationFrame(animate);
}
window.requestAnimationFrame(animate)


document.addEventListener('keydown', (e) => {
  switch(e.key){
    case 'i':
    case 'w':
    case 'ArrowUp':
      [dX, dY] = [0, -1];
      break;
    case 'j':
    case 'a':
    case 'ArrowLeft':
      [dX, dY] = [-1, 0];
      break;
    case 'k':
    case 's':
    case 'ArrowDown':
      [dX, dY] = [0, 1];
      break;
    case 'l':
    case 'd':
    case 'ArrowRight':
      [dX, dY] = [1, 0];
      break;
  }
  console.log(dX, dY);
})
