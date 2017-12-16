window.onload = function () {

  var canvas = document.getElementById('c1');
  var ctx = canvas.getContext('2d');

  var x = 200;
  var y = 100;
  var stepCount = 0;
  var direction;
  var timer;

  function drawDot() {
    ctx.clearRect(0, 0, 400, 200);
    if (stepCount == 0) {
      stepCount = Math.floor(15 * Math.random());
      direction = Math.floor(8 * Math.random());

    } else {
      stepCount--;
    }

    switch (direction) {
      case 0:
        y = y - 1;
        break;

      case 1:

        x = x + 1;
        break;

      case 2:
        y = y + 1;
        break;

      case 3:
        x = x - 1;
        break;

      case 4:
        x = x + 1;
        y = y - 1;
        break;

      case 5:
        x = x + 1;
        y = y + 1;
        break;

      case 6:
        x = x - 1;
        y = y + 1;
        break;

      case 7:
        x = x - 1;
        y = y - 1;
        break;
    }

    if (x < 0 || x > 400 || y < 0 || y > 200) srtep = 0;
    ctx.fillRect(x - 3, y - 3, 6, 6);

    timer = setTimeout(drawDot, 100);

  }
  drawDot();

}