const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

function fliipCard() {
  if(lockBoard) return; // nada vai acontecer caso seja true
  if(this === firstCard) return; // nada vai acontecer caso clicar na mesma carta
  
  this.classList.add('flip');
  if(!hasFlippedCard){
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  hasFlippedCard = false;
  checkforMath();
}

// checando as cartas
function checkforMath(){
  if(firstCard.dataset.card === secondCard.dataset.card){ //se as cartas forem iguais
    disableCards();
    return;
  }

  unflipCards();
}

// Desabilitar o click
function disableCards(){
  firstCard.removeEventListener('click', fliipCard);
  secondCard.removeEventListener('click', firstCard)

  resertBoard();
}

//fazer com que as cartas virem caso não forem iguais
function unflipCards(){
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    
    resertBoard();
  }, 1500)
}

// setar a variavel 
function resertBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

//função que é renderizada sempre que chamada
(//embaralhar as cartas
function shuffle(){
  cards.forEach((card) => {
    //sorteio das 12 cartas
    let radomPosition = Math.floor(Math.random() * 12);
    //.radom sortear aos numeros e o .floor arredondar para inteiro
    card.style.order = radomPosition;
  })
})();

cards.forEach((card) => {
  card.addEventListener('click', fliipCard)
})

