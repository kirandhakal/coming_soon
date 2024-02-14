const box = document.getElementById('box');
const text = document.getElementById('text');


 
// Listen for the end of the animation
box.addEventListener('animationend', function() {
  text.style.opacity = '1'; // Show text after animation ends
});

