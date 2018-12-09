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


  questions: {
    q1: "In Aladdin, what is the name of Jasmine’s pet tiger?",
    q2: "In the Lion King, where does Mufasa and his family live?",
    q3: "What time does the royal ball start in Cinderella?",
    q4: 'Which princess attempts to disguise herself as a man?',
    q5: 'Who was the first Disney princess?'
  },
  choices: {
    q1: ['Genie', 'Thumper', 'Rajah'],
    q2: ['Pride Rock', 'Zootopia', 'Magic Mountain'],
    q3: ['12am', '8pm', '3pm'],
    q4: ['Mulan', 'Pocahontas', 'Rapunzel'],
    q5: ['Snow White', 'Aurora', 'Cinderella']
  },
  answers: {
    q1: 'Rajah',
    q2: 'Pride Rock',
    q3: '8pm',
    q4: 'Mulan',
    q5: 'Snow White'
  },
   
 startGame: function(){
   //restarts
   trivia.currentSet = 0;
   trivia.correct = 0;
   trivia.incorrect = 0;
   trivia.unanswered = 0;
   clearTimeout(trivia.timerId);

   $('#game').show();

   $('#results').html('');

   $('#timer').text(trivia.timer);

   $('#start').hide();

   $('#remaining-time').show();

   trivia.nextQuestion();

 },

 nextQuestion : function(){


  trivia.timer = 10;
  $('#timer').removeClass('last-seconds');
  $('#timer').text(trivia.timer);

  if(!trivia.timerOn) {
    trivia.timerId = setInterval(trivia.timerRunning, 1000);
  }

var questionContent = Object.values(trivia.questions)[trivia.currentSet];
$('#question').text(questionContent);

questionOptions = Object.values(trivia.options) [trivia.currentSet];

$.each(questionOptions, function(index, key){
  $('options').append($('<button class=option btn btn-info btn-lg'>+key+'</button>'));
})

 },

 timerRunning : function() {

  if(trivia.timer > -1 && trivia.currentSet < Object.keys(trivia.questions).length){
    $('#timer').text(trivia.timer);
    trivia.timer--;
    if(trivia.timer === 4){
      $('#timer').addClass('last-seconds');
    }
  }

  else if(trivia.timer === -1) {
    trivia.unanswered++;
    trivia.result = false;
    clearInterval(trivia.timerId);
    resultId = setTimeout(trivia.guessResult, 1000);
    $('#results').html('<h3> Shoot! You are out of time! The answer was '+ Object.values(trivia.answers)[trivia.currentSet] + '</h3>');
  }

  else if(trivia.currentSet === Object.keys(trivia.questions).length){

    $('#results')
    .html('<h3> It has been magical of you to play!</h3>'+
    '<p>Correct: ' + trivia.correct + '</p>'+
    '<p>Incorrect: '+ trivia.incorrect + '</p>' +
    '<Unanswered: '+ trivia.unanswered +'</p>' +
    '<p> Come play again soon!</p>' );

    $('#game').hide();

    $('#start').show();
  
  }

 },

 quessChecker : function() {

  var resultId;

  var currentAnswer = Object.values(trivia.answers)[trivia.currentSet];

  if($(this).text() === currentAnswer){

    trivia.correct++;
    clearInterval(trivia.timerId);
    resultId = setTimeout(trivia.guessResult, 1000);
    $('#results').html('<h3> Correct Answer!</h3>');
  }

 },

 guessResult : function() {

  trivia.crrentSet++;

  $('.option').remove();
  $('#results h3').remove();

  trivia.nextQuestion();
 }


}