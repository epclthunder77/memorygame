const gameContainer = document.getElementById("game");


const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}



let firstCard = null;
let secondCard = null;
let cardsFlipped = 0;
let lockBoard = false;

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) 
{
  if (lockBoard) return; // Prevent clicks if board is locked
  if (event.target === firstCard) return; // Prevent clicking the same card twice

  let clickedCard = event.target;
  clickedCard.style.backgroundColor = clickedCard.classList[0]; // Show color

  if (!firstCard) {
    // First card clicked
    firstCard = clickedCard;
    return;
  }

  // Second card clicked
  secondCard = clickedCard;
  lockBoard = true;

  // Check if cards match
  if (firstCard.className === secondCard.className) {
    cardsFlipped += 2;
    firstCard.removeEventListener("click", handleCardClick);
    secondCard.removeEventListener("click", handleCardClick);
    resetBoard();
  } else {
    // Not a match, hide cards after 1 second
    setTimeout(function(){
      firstCard.style.backgroundColor = "";
      secondCard.style.backgroundColor = "";
      resetBoard();
    }, 1000);
  }
}

function resetBoard() 
{
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
}
  
  


 
    // if(card.classList.contains("clicked"))
    // {
    //   counter ++;
    // }
    // if(counter > 1 )
    // {
    //   console.log("You cant click anymore");
    //   console.log(counter)
    // }
    // else
    // {
    //   event.target.style.background = color;
    // }

 

  
  // {
   
  //  // if (event.target.classList[0] === card.classList[0])
  //   {
  //     console.log("You found a Match")
  //   }
  // }
  // else
  // {
    
  // }

  
  // event.target.style.background = color;

//11
  // const cardArr = [];
  // let color = event.target;
  // let card = event.target.classList;
  // let counter = 0;

  // counter ++;
  
  // {
  //   console.log(card)
  //   event.target.style.background = color;
  //   cardArr.push(card);

  //   if(counter === 2)
  //   console.log("Im here counter 2")
  //   {
  //     if (cardArr[0] === cardArr[1])
  //     {
  //       alert("You Found A Match");
  //       counter = 0;
  //     }
  //     else
  //     {
  //       setInterval(function()
  //       {
  //         cardArr[0].style.background = "none";
  //         cardArr[1].style.background = "none";
  //         counter = 0;
  //       },1000);
  //     }
  //   }

  // }






// when the DOM loads
createDivsForColors(shuffledColors);
