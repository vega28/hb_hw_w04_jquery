"use strict";

/******* Functions & event handlers *******/

// VERSION 1:
// function changeColor() {
//   const colorChangeEls = $('.color-change');

//   for (const el of colorChangeEls) {
//     $(el).toggleClass('red');
//   }
// }

// VERSION 2:
const changeColor = () => {
  for (const el of $('.color-change')) {
    $(el).toggleClass('red');
  }
} 


function validateNumber(evt) {
  evt.preventDefault();

  const numberInput = $('#number-input'); 
  const userNum = parseInt(numberInput.val(), 10);  // typecast to num

  const formFeedback = $('#formFeedback');
  if (!userNum || userNum >= 10) {
    formFeedback.text('Please enter a smaller number');
  } else {
    formFeedback.text('You are good to go!');
  }
}


/******* Attach event handlers *******/

$('.color-changer').on('click', changeColor);
$('.number-form').on('submit', validateNumber);

