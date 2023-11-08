// JavaScript to count up to the specified values
function countUp(timerElement) {
    let current = 0;
    const target = parseInt(timerElement.getAttribute('data-to'));
    const speed = parseInt(timerElement.getAttribute('data-speed')) || 1000;
    const increment = target / speed;
  
    const timer = setInterval(function () {
      current += increment;
      timerElement.textContent = Math.floor(current);
  
      if (current >= target) {
        clearInterval(timer);
        timerElement.textContent = target;
      }
    }, 1);
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const timers = document.querySelectorAll('.timer');
    timers.forEach(function (timer) {
      countUp(timer);
    });
  });
  