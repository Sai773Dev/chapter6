// script.js
const storyText = document.getElementById('story-text');
const objects = document.querySelectorAll('.object');
const restartBtn = document.getElementById('restart-btn');

objects.forEach(object => {
  object.addEventListener('click', () => {
    if (object.id === 'object1') {
      storyText.textContent = "The chair looks comfy, but old and forgotten.";
    } else if (object.id === 'object2') {
      storyText.textContent = "The book is dusty, filled with stories no one has read in years.";
    } else if (object.id === 'object3') {
      storyText.textContent = "Through the window, you see nothing but gray skies.";
    }
    
    object.style.display = 'none'; // Hide the object after clicking
    checkPuzzleComplete();
  });
});

function checkPuzzleComplete() {
  const remainingObjects = document.querySelectorAll('.object:not([style*="display: none"])');
  if (remainingObjects.length === 0) {
    storyText.textContent = "You've explored everything. A quiet calm fills the room.";
    restartBtn.style.display = 'inline-block';
  }
}

restartBtn.addEventListener('click', () => {
  window.location.reload();
});