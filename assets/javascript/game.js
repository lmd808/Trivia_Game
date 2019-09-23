// trivia game about me
//variables
//my wins
var wins = 0;
// my loses
var loses = 0;
// my guesses
var guessesLeft = 2;
// my questions array
var myQuestionsArray = [];
// my
var randomQuestion = {};

// my timer
var timer;

// intial button click

// intial button click loads a RANDOMLY selected question object

// i have ten of these objects
function Question(quest, c1, w1, w2, w3) {
	//name of character
	this.question = quest;
	// health points
	this.correctAns = c1;
	// wrong anwser 1
	this.wrongAns1 = w1;
	// wrong anwser 2
	this.wrongAns2 = w2;
	// wrong anwser 3
	this.wrongAns3 = w3;
}

function initializeQuestions() {
	var q0 = new Question(
		'Where did Laura go to college?',
		'University of New Hampshire',
		'Rutgers University',
		'University of Massachusetts, Amherst',
		'University of Vermont'
	);
	var q1 = new Question(
		"What is Laura's favorite band?",
		'She Wants Revenge',
		'Scissor Sisters',
		'A Place to Bury Strangers',
		'Arctic Monkeys'
	);
	var q2 = new Question(
		"what is Laura's favorite music genera?",
		'Seapunk Oprah',
		'DeathCore',
		'SynthWave',
		'SpaceWave'
	);
	var q3 = new Question(
		"What is the name of Laura's newfoundland dog?",
		'Sweet Georgia Brown',
		'bad bad Leroy Brown',
		'Cecil Brown',
		'Sweet Molly Brown'
	);
	var q4 = new Question(
		'What city does Laura call "the best place on earth"?',
		'New Orleans',
		'New York City',
		'Tokyo',
		'Cork'
	);
	var q5 = new Question(
		'What is the only liquor that Laura can drink straight?',
		'Absinthe',
		'Rum',
		'Anisette',
		'Vodka'
	);
	var q6 = new Question(
		"What is Laura's character alignment?",
		'True Neutral',
		'Neutral Evil',
		'Neutral Good',
		'Chaotic Neutral'
	);
	var q7 = new Question(
		"Who is Laura's favorite author?",
		'Toni Morrison',
		'CHarles Faulkner',
		'Maya Angelou',
		'Ralph Ellison'
	);
	var q8 = new Question('Where is Laura traveling to next September?', 'Nepal', 'Japan', 'China', 'Vietnam');
	var q9 = new Question(
		"Who is Laura's all time favorite artist?",
		'Nicholas Bruno',
		'Jamie Hewlette',
		'Titian',
		'Salvador Sali'
	);
	var q10 = new Question(
		'Laura loves morididity, What is the most morbid hobby she has? (Hint: all are right, but one is more right)',
		'Taxidermy',
		'Entymology',
		'Bone and Rock Collecting',
		'Dark Tourism'
	);
	var q11 = new Question(
		'Laura loves many things, but what is her favorite thing?',
		'All of these thing combined and at once',
		'her dog',
		'empty cities with bright neon lights',
		'rain'
	);
	var q12 = new Question(
		"What's something Laura hates?",
		'All Listed Choices',
		'Whistling',
		'Bullies',
		'Mean Spirited People'
	);
	var q13 = new Question(
		'Though Laura has more than enough time to sleep she chooses not to. What does Laura prefer to do over sleep?',
		'Do all of these things at the same time',
		'Organize',
		'Make outfits for her dog',
		'Watch Horror movies and shows'
	);
	var q14 = new Question(
		'Does Laura love her life?',
		'All day erry day, yes!',
		'Nah, she is discontent',
		'I like it but it could be better',
		'No'
	);
	var q15 = new Question(
		'What does Laura think about society?',
		'We\re blinded by media, and we are becoming incresingly less discerning. Our growing complacency will lead to our demise',
		'We as a people have the potential to regain control of our goverment. We just need to centralize our efforts',
		"I worry that our government is not as involved as it should be in our lives. I'd like to see our goverment grow.",
		'I trust the Government'
	);

	myQuestionsArray.push(q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15);
	console.log(myQuestionsArray.length);
}

initializeQuestions();

// we will build a function that calls a random question
// and pushes content to the screen

function shuffle(DivID) {
	randomQuestion = myQuestionsArray[Math.floor(Math.random() * myQuestionsArray.length)];
	// console logging the index of the random Questions from my array
	console.log(randomQuestion);
	DivID.append(`<div><h2 class="question">${randomQuestion.question}</h2></div>`);
	$('.question').addClass('fontStyling');
	DivID.append(`<div><button class="guessButton">${randomQuestion.correctAns}</button></div>`);
	DivID.append(`<div><button class="guessButton">${randomQuestion.wrongAns1}</button></div>`);
	DivID.append(`<div><button class="guessButton">${randomQuestion.wrongAns2}</button></div>`);
	DivID.append(`<div><button class="guessButton">${randomQuestion.wrongAns3}</button></div>`);

	$('.guessButton').addClass('btn-block btn-dark');
}
shuffle($('#divOne'));

function gamePlay() {
	// timer ();
	// random question from shuffle loads on screen after player hits start button
	// if the player clicks c1
	// wins++
	// if the player clicks w1 || w2 || w3
	// loses ++
	// guessesLeft --
	// win lose portion
	// if (wins === 16)
	// push a message to a div that say "you win"
	// update the start button to say Play Again
	// else if guessesLeft === 0
	// push a meaage that says you loose
	// update the start button to say Play again
}

function timer() {
	// randomQuestions is displayed on screen for 15 seconds total
	// after 5 seconds w3 disappears
	// after 10 seconds 1 disappears
	// after 15 seconds
	// the random question disappears
	// the next question is loaded
}

// they will bebuilt off of my question prototype object model

// questions

// they will be the first thing i develop

// format for checking them

//- if ... click corect anwser
//wins++
// else
// loses++

//
