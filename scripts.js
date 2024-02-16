const box = document.getElementById('box');
const text = document.getElementById('text');
const heart =document.getElementById('heart');

 
// Listen for the end of the animation
box.addEventListener('animationend', function() {
  text.style.opacity = '1';
  box.style.opacity='0'; 
  heart.style.opacity='1';

});
console.log("Created by kirandhakal copyright © 2022|All right reserved|https://dhakalkiran.com.np/");



