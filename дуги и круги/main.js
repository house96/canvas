window.onload = function () {

  var canvas = document.getElementById('c1');
  var ctx = canvas.getContext('2d');
var pi = Math.PI;

ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = 'dark';
ctx.fillStyle = 'red';
 ctx.arc(150, 100, 75, 0, 2*pi, false);
 ctx.stroke();
 ctx.fill();


 ctx.beginPath();
 ctx.lineWidth = 5;
 ctx.strokeStyle = 'red';
 ctx.fillStyle = 'green';
  ctx.arc(270, 100, 75, 0, 2*pi, false);
  ctx.stroke();
  ctx.fill();
 
  ctx.clearRect(0,9,400,200);

  canvas.onmousemove = function(event) {
    var x = event.offsetX;
    ctx.clearRect(0,0,400,200);
    ctx.beginPath();
    ctx.arc(200,100, Math.abs(x-200), 0, 2*pi, false);
    ctx.stroke();
    ctx.fill();
  }
}