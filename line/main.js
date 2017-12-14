window.onload = function() {
  var canvas = document.getElementById('c1');
  var ctx = canvas.getContext('2d');

  ctx.moveTo(100, 50);
  ctx.lineTo(150, 150);
  ctx.strokeStyle = 'red';
  ctx.lineWidth = '5';
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = 'green';
  ctx.moveTo(200, 50);
  ctx.lineTo(340, 50);
  ctx.stroke();
  ctx.clearRect(0, 0, 400, 200);
  
  
  ctx.beginPath();
  ctx.lineTo(100, 100);
  ctx.lineTo(150, 0);
  ctx.lineTo(200, 100);
  ctx.lineTo(150, 200);
  ctx.lineTo(100, 100);
  ctx.lineWidth = 5;
  ctx.lineCap = 'butt';
  ctx.fillStyle = 'grey';
  // ctx.closePath();
  ctx.stroke();
  ctx.fill();

  
  
}
