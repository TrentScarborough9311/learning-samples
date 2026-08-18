window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  // Create and insert a full-size canvas (1280x960)
var canvas = document.createElement('canvas');
canvas.id = 'confetti-canvas';
canvas.width = 1280;
canvas.height = 960;
canvas.style.position = 'absolute';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '1280px';
canvas.style.height = '960px';
canvas.style.pointerEvents = 'none';
canvas.style.zIndex = '9999';
document.body.appendChild(canvas);
// Load the confetti script
var script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
document.head.appendChild(script);
script.onload = function () {
  var myConfetti = confetti.create(canvas, { resize: false, useWorker: true });
  // Fire from both edges in bursts for 3 seconds
  var duration = 3000;
  var animationEnd = Date.now() + duration;
  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) {
      clearInterval(interval);
      // Fade out canvas
      canvas.style.transition = 'opacity 1.5s ease-out';
      canvas.style.opacity = '0';
      setTimeout(function () {
        if (canvas && canvas.parentNode) {
          canvas.parentNode.removeChild(canvas);
        }
      }, 1500);
      return;
    }
    // LEFT cannon (full height coverage, angled inward)
    myConfetti({
      particleCount: 70,
      angle: 45,
      spread: 80,
      startVelocity: 70,
      origin: { x: 0, y: Math.random() }, // Random Y for more vertical coverage
      colors: ['#0E680E', '#4A9D2D', '#E8F5E6', '#0A4007']
    });
    // RIGHT cannon (full height coverage, angled inward)
    myConfetti({
      particleCount: 70,
      angle: 135,
      spread: 80,
      startVelocity: 70,
      origin: { x: 1, y: Math.random() }, // Random Y for more vertical coverage
      colors: ['#0E680E', '#E2A439', '#E8F5E6', '#0A4007']
    });
  }, 250); // burst every 250ms
};
}

};
