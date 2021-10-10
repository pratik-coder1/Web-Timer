var seconds = document.getElementById("seconds");
var startBtn = document.getElementById("start_button");
var stopBtn = document.getElementById("stop_button");
var countUp = function () {
  seconds.textContent = parseFloat(seconds.textContent) + 1;
};
var startCounting = function () {
  counting = window.setInterval(countUp, 1000);
};
startBtn.addEventListener("click", startCounting);
var stopCounting = function () {
  window.clearInterval(counting);
  seconds.textContent = 0;
};
stopBtn.addEventListener("click", stopCounting);
