console.log(Math.floor(Math.random() * 100 + 1));

const randomNumber = Math.floor(Math.random() * 100 + 1);

const form = document.querySelector('.form');
console.log(form);

form.addEventListener('submit', function (event) {
    event.preventDefault();
  const guessField = parseInt(document.querySelector('#guessField').value);
  console.log(guessField);
  if (randomNumber === guessField) {
    const msg = document.querySelector('.lowOrHi');
    msg.innerHTML = 'Correct Guess';
  }
});
