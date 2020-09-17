document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    {
      name: "lo1",
      img: "images/locuas1.png",
    },
    {
      name: "lo1",
      img: "images/locuas1.png",
    },
    {
      name: "lo2",
      img: "images/locuas2.png",
    },
    {
      name: "lo2",
      img: "images/locuas2.png",
    },
    {
      name: "lo3",
      img: "images/locuas3.png",
    },
    {
      name: "lo3",
      img: "images/locuas3.png",
    },
    {
      name: "lo4",
      img: "images/locuas4.png",
    },
    {
      name: "lo4",
      img: "images/locuas4.png",
    },
    {
      name: "lo5",
      img: "images/locuas5.png",
    },
    {
      name: "lo5",
      img: "images/locuas5.png",
    },
    {
      name: "lo6",
      img: "images/locuas6.png",
    },
    {
      name: "lo6",
      img: "images/locuas6.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");

  var cardsChosen = [];
  var cardsChosenId = [];
  const cardsWon = [];

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
      alert("Haz dado click a la misma imagen!");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert("Encontrastes su pareja :) ");
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
      alert("Sorry, Intenta de Nuevo");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Felicitaciones.......... !!";
      setTimeout(() => {
        location.reload();
      }, 3000);
    }
  }

  //flip your card (voltear)
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
