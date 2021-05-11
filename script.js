const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;

function fliipCard() {
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

function checkforMath(){
  if(firstCard.dataset.card === secondCard.dataset.card){
    disableCards();
    return;
  }

  unflipCards();
}

cards.forEach((card) => {
  card.addEventListener('click', fliipCard)
})

