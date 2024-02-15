const box = document.getElementById('box');
const text = document.getElementById('text');
const heart =document.getElementById('heart');


 
// Listen for the end of the animation
box.addEventListener('animationend', function() {
  text.style.opacity = '1';// Show text after animation ends
   box.style.opacity='0'; 
  heart.style.opacity='1';
  heart.style.left='50%';
  heart.style.top='30%';
});

