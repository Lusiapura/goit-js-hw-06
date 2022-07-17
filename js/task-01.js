const categoryEl = document.querySelectorAll('.item');
console.log("Number of categories:", categoryEl.length);

[...categoryEl].forEach(element => {
  const nameElements = element.querySelector('h2');
  const numberElements = element.querySelectorAll('li');
  console.log(`Category: ${nameElements.textContent}`);
  console.log(`Elements: ${numberElements.length}`);
});
