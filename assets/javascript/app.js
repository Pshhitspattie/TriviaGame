//Create a game that can ask and answer questions

/* Questions:
1. In Aladdin, what is the name of Jasmine’s pet tiger?
Genie, Thumper, Rajah

2.In the Lion King, where does Mufasa and his family live?
Pride Rock, Zootopia, Magic Mountain

3. What time does the royal ball start in Cinderella?
12am, 8pm, 3pm

4. Which princess attempts to disguise herself as a man?
Mulan, Pocahontas, Rapunzel

5. Who was the first Disney princess?
Snow White, Aurora, Cinderella


//have a page that says Start, once you click start, you will be directed to the game

//Once you press start the timer starts to tick down and you start answering trivia questions
//You can only provide one answer per question

//Once the timer goes off, it switches to another page that says All done with the :
// :Correct Answers :Incorrect Answers :Unanswered

//Or if you're done answering ?'s before the timer clock is done, it will bring you to the same page as if the timer were to go off. 

*/

//Question set

$(document).ready(function(){
  $("#remaining-time").hide();
  $("#start").on('click', trivia.startGame);
  $(document).on('click', '.opinion', trivia.guessChecker);
})

var trivia = {
  correct: 0,
  incorrect:0,
  unanswered:0,
  currentSet: 0,
  timer: 30,
  timerOn: false,
  timerId: '',

}
  var questions = [{
    question: "In Aladdin, what is the name of Jasmine’s pet tiger?",
    answers: ["Genie", "Thumper", "Rajah"],
    correctAnswer: "Rajah",
    image:"assets/images/Rajah.gif"
  }, {
    question: "In the Lion King, where does Mufasa and his family live?",
    answers: ["Pride Rock", "Zootopia", "Magic Mountain"],
    correctAnswer: "Pride Rock",
    image:"assets/images/Simba.gif"
  }, {
    question: "What time does the royal ball start in Cinderella?",
    answers: ["12am", "8pm", "3pm"],
    correctAnswer: "8pm",
    image:"assets/images/Cinderella.gif"
  }, {
    question: 'Which princess attempts to disguise herself as a man?',
    answers: ["Mulan", "Pocahontas", "Rapunzel"],
    correctAnswer: "Mulan",
    image:"assets/images/mulan.gif"
  }, {
    question: 'Which popular Disney movie featured the song, "Circle of Life"?',
    answers: ["Aladdin", "Hercules", "The Lion King"],
    correctAnswer: "The Lion King",
    image:"assets/images/Simba.gif"
  }, {
    question: 'Who was the first Disney princess?', 
    answers: ["Snow White", "Aurora", "Cinderella"],
    correctAnswer: "Snow White",
    image:"assets/images/snowwhite.gif"
 
  }]


  
  
  

  
  

  
  