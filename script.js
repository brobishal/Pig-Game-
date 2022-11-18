 
//  082 project
/*
 "use script";
  
 //selecting elements
 const score0El = document.querySelector('#score--0');
//  getElementById is more faster then query selector
 const score1El = document.getElementById('score--1');
 const diceEl = document.querySelector('.dice');

//starting condition
 score0El.textContent = 0;  
 score1El.textContent = 0;
 diceEl.classList.add('hidden');
 

// 083 ROLLING THE DICE

 //selecting elements
const score0El = document.querySelector('#score--0');
//  getElementById is more faster then query selector
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting condition
 score0El.textContent = 0;  
 score1El.textContent = 0;
 diceEl.classList.add('hidden');

 let currentScore = 0;
// Rolling dice functionality

btnRoll.addEventListener('click', function() {
    // 1.Generating a random dice roll 
    //0-5 samma random number generate hunxa ra 6 samma ko lagi add + 1
    const dice = Math.trunc(Math.random() * 6) + 1 ;
    console.log(dice);

    // 2. Display dice
    // diceEl.classList.remove('hidden');
     diceEl.src = `dice${dice}.png`;
    console.log(diceEl.src);

    // 3. Check for rolled 1: if true, switch to next player
    // if not a 1
    if(dice !== 1){
    // add dice to current score
        currentScore = currentScore + dice;
        current0El.textContent = currentScore; //change later
    }else{ 
        //switch to next player

    }


})

// 084 switching to the active player

 //selecting elements
 const player0El = document.querySelector('.player--1');
 const player1El = document.querySelector('.player--0');
 const score0El = document.querySelector('#score--0');
 //  getElementById is more faster then query selector
 const score1El = document.getElementById('score--1');
 const current0El = document.getElementById('current--0');
 const current1El = document.getElementById('current--1');
 
 const diceEl = document.querySelector('.dice');
 const btnNew = document.querySelector('.btn--new');
 const btnRoll = document.querySelector('.btn--roll');
 const btnHold = document.querySelector('.btn--hold');
 
 //starting condition
  score0El.textContent = 0;  
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
 
const scores = [0,0]; 
  let currentScore = 0;
  let activePlayer = 0;
 // Rolling dice functionality
 
 btnRoll.addEventListener('click', function() {
     // 1.Generating a random dice roll 
     //0-5 samma random number generate hunxa ra 6 samma ko lagi add + 1
     const dice = Math.trunc(Math.random() * 6) + 1 ;
     console.log(dice);
 
     // 2. Display dice
     // diceEl.classList.remove('hidden');
      diceEl.src = `dice${dice}.png`;
     console.log(diceEl.src);
 
     // 3. Check for rolled 1: if true, switch to next player
     // if not a 1
     if(dice !== 1){
     // add dice to current score
         currentScore = currentScore + dice;
        //select the element  for dynamically based which is the active player right now

         document.getElementById(`current--${activePlayer}`).textContent = currentScore;
     }else{ 
         //switch to next player
         document.getElementById(`current--${activePlayer}`).textContent = 0;

        //  if the active player is 0 then we want to
        //new active player to be 1 else it should be 0 
        currentScore = 0;
         activePlayer = activePlayer === 0 ? 1 : 0;
        //toggle if it is there it will remove it

         player0El.classList.toggle('player--active');
        //  if not then it will add it
         player1El.classList.toggle('player--active');

     }

 })

 */
// 085 holding the current score  


 //selecting elements
 const player0El = document.querySelector('.player--1');
 const player1El = document.querySelector('.player--0');
 const score0El = document.querySelector('#score--0');
 //  getElementById is more faster then query selector
 const score1El = document.getElementById('score--1');
 const current0El = document.getElementById('current--0');
 const current1El = document.getElementById('current--1');
 
 const diceEl = document.querySelector('.dice');
 const btnNew = document.querySelector('.btn--new');
 const btnRoll = document.querySelector('.btn--roll');
 const btnHold = document.querySelector('.btn--hold');
 
//  //starting condition
//   score0El.textContent = 0;  
//   score1El.textContent = 0;
//   diceEl.classList.add('hidden');
 
// const scores = [0,0]; 
//   let currentScore = 0;
//   let activePlayer = 0;
//   let playing = true;

// for scoping ko lagi without a vlaue declare garnu parchha
let scores, currentScore, activePlayer, playing;

//   this is a function for initalize for new game
  const init = function () {
 //starting condition
 scores = [0,0]; 
  currentScore = 0;
  activePlayer = 0;
  playing = true;
 diceEl.classList.add('hidden');
 
    score0El.textContent = 0;  
    score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  }
  init();
  const switchPlayer = function() {
    //switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    //  if the active player is 0 then we want to
    //new active player to be 1 else it should be 0 
    currentScore = 0;
     activePlayer = activePlayer === 0 ? 1 : 0;
    //toggle if it is there it will remove it

     player0El.classList.toggle('player--active');
    //  if not then it will add it
     player1El.classList.toggle('player--active');

  }

 // Rolling dice functionality
 btnRoll.addEventListener('click', function() {
    // if playing true;
    if(playing){
     // 1.Generating a random dice roll 
     //0-5 samma random number generate hunxa ra 6 samma ko lagi add + 1
     const dice = Math.trunc(Math.random() * 6) + 1 ;
     console.log(dice);
 
     // 2. Display dice
     diceEl.classList.remove('hidden');
      diceEl.src = `dice${dice}.png`;
     console.log(diceEl.src);
 
     // 3. Check for rolled 1: if true, switch to next player
     // if not a 1
     if(dice !== 1){
     // add dice to current score
         currentScore = currentScore + dice;
        //select the element  for dynamically based which is the active player right now

         document.getElementById(`current--${activePlayer}`).textContent = currentScore;
     }else{ 
        //  //switch to next player
        //  document.getElementById(`current--${activePlayer}`).textContent = 0;

        // //  if the active player is 0 then we want to
        // //new active player to be 1 else it should be 0 
        // currentScore = 0;
        //  activePlayer = activePlayer === 0 ? 1 : 0;
        // //toggle if it is there it will remove it

        //  player0El.classList.toggle('player--active');
        // //  if not then it will add it
        //  player1El.classList.toggle('player--active');

        //function call
        switchPlayer();
     }
    }

 })


 btnHold.addEventListener('click', function() {
    if(playing) {
    console.log("hold ana event");
    //1. add current score to active player
    scores[activePlayer] += currentScore; 
    // scores[1] = scores[1] + currentScore
   const data = document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
console.log(data);

    //2. check if player's score is >=100 atleast 100
    // scores at activeplayer
    if(scores[activePlayer]  >= 20) {
        // finish the game
        playing = false;
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }else {
        // 
        //switch to the next player
        switchPlayer(); 
         
    }
}

 } )


//086 reseting the game
btnNew.addEventListener("click", init)


 //14:50 


 





