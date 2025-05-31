const box = document.getElementById('box');
const moveBtn = document.getElementById('moveBtn');
let position = 0; // Initial left position in pixels

moveBtn.addEventListener('click', () => {
  position += 20; // Move 20px to the right on each click
  box.style.left = position + 'px';
});
