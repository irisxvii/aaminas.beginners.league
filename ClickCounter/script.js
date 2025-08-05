let count = 0;
const btn = document.getElementById('button');
const countText = document.getElementById('count');

btn.addEventListener('click', () => {
  count++;
  countText.textContent = `You clicked ${count} time${count === 1 ? '' : 's'}`;
});