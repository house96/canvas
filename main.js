window.onload = function() {
  var canvas = document.getElementById('c1');
  var ctx = canvas.getContext('2d');
  
  ctx.fillStyle = 'red';
  ctx.fillRect(100, 50, 150, 75);

  ctx.fillStyle = 'blue';
  ctx.fillRect(200, 100, 100, 50);
  // ctx.fillRect(X, Y, width, height);

  ctx.clearRect(0, 0, 400, 200); //стирает;

  ctx.strokeStyle='green';
  ctx.lineWidth=15;
  ctx.rect(50,10, 100, 100);
  ctx.stroke();
  ctx.fillStyle = 'orange';
  ctx.fill();
}
