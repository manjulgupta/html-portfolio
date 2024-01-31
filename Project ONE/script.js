const container = document.querySelector('.scrollable-container');
const scrollLeftButton = document.querySelector('.scroll-left');
const scrollRightButton = document.querySelector('.scroll-right');

scrollLeftButton.addEventListener('click', () => {
  container.scrollLeft -= 200; // Adjust scroll amount as needed
});

scrollRightButton.addEventListener('click', () => {
  container.scrollLeft += 200; // Adjust scroll amount as needed
});
