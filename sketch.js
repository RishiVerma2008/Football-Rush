var player1_img_1, player1_img_2;
var player2_img_1, player2_img_2;
var football_img, background_img;
var canvas;
var timeoutHandle, counter;

function preLoad() {
  player1_img_1 = loadImage("assets/player1(1).png");
  player1_img_2 = loadImage("assets/player1(2).png");
  player2_img_1 = loadImage("assets/player2(1).png");
  player2_img_2 = loadImage("assets/player2(2).png");
  football_img = loadImage("assets/football.png");
  background_img = loadImage("assets/Background.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(background_img);
  //image(background_img, width/2, height/2, width, height);
  time = counter.innerHTML;
  console.log(time)
}

function countdown(minutes, seconds) {
  var seconds = 60;
  var mins = minutes

  function tick() {
    counter = document.getElementById("timer");
    counter.style.position="absolute"
    var current_minutes = mins - 1
    seconds--;
    counter.innerHTML =
      current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
    if (seconds > 0) {
      timeoutHandle = setTimeout(tick, 1000);
    } else {

      if (mins > 1) {

        setTimeout(function() {
          countdown(mins - 1);
        }, 1000);

      }
    }
  }
 tick();
}
countdown(10);




