// trivia game about me

//variables
//my wins
var wins = 0;
// my loses
var losses = 0;
// my guesses
var guessesLeft = 5;
// my questions array
var myQuestionsArray = [];
// my
var randomQuestion = {};
// my timer
var timer = 16;
//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;
// prevents the clock from being sped up unnecessarily
var clockRunning = false;
//clicks value thanks kahlil
var selectedAnswer;

// they will all follow this formatting
function Question(quest, c1, w1, w2, w3, string) {
	//name of character
	this.question = quest;
	this.ans = [ c1, w1, w2, w3 ];
	this.correctAns = string;
}
initializeQuestions();
shuffle($('#divOne'));
initialState();

// initialize question and anwsers
function initializeQuestions() {
	var q0 = new Question(
		'Where did Laura go to college?',
		'University of New Hampshire',
		'Rutgers University',
		'University of Massachusetts, Amherst',
		'University of Vermont',
		'University of New Hampshire'
	);
	var q1 = new Question(
		"What is Laura's favorite band?",
		'She Wants Revenge',
		'Scissor Sisters',
		'A Place to Bury Strangers',
		'Arctic Monkeys',
		'She Wants Revenge'
	);
	var q2 = new Question(
		"what is Laura's favorite music genra?",
		'Seapunk Oprah',
		'DeathCore',
		'SynthWave',
		'SpaceWave',
		'Seapunk Oprah'
	);
	var q3 = new Question(
		"What is the name of Laura's newfoundland dog?",
		'Sweet Georgia Brown',
		'bad bad Leroy Brown',
		'Cecil Brown',
		'Sweet Molly Brown',
		'Sweet Georgia Brown'
	);
	var q4 = new Question(
		'What city does Laura call "the best place on earth"?',
		'New Orleans',
		'New York City',
		'Tokyo',
		'Cork',
		'New Orleans'
	);
	var q5 = new Question(
		'What is the only liquor that Laura can drink straight?',
		'Absinthe',
		'Rum',
		'Anisette',
		'Vodka',
		'Absinthe'
	);
	var q6 = new Question(
		"What is Laura's character alignment?",
		'True Neutral',
		'Neutral Evil',
		'Neutral Good',
		'Chaotic Neutral',
		'True Neutral'
	);
	var q7 = new Question(
		"Who is Laura's favorite author?",
		'Toni Morrison',
		'Charles Faulkner',
		'Maya Angelou',
		'Ralph Ellison',
		'Toni Morrison'
	);
	var q8 = new Question('Where is Laura traveling to next September?', 'Nepal', 'Japan', 'China', 'Vietnam', 'Nepal');
	var q9 = new Question(
		"Who is Laura's all time favorite artist?",
		'Nicholas Bruno',
		'Jamie Hewlette',
		'Titian',
		'Salvador Dali',
		'Nicholas Bruno'
	);
	var q10 = new Question(
		'Laura loves morididity, What is the most morbid hobby she has? (Hint: all are right, but one is more right)',
		'Taxidermy',
		'Entymology',
		'Bone and Rock Collecting',
		'Dark Tourism',
		'Taxidermy'
	);
	var q11 = new Question(
		'Laura loves many things, but what is her favorite thing?',
		'All of these thing combined and at once',
		'her dog',
		'empty cities with bright neon lights',
		'rain',
		'All of these thing combined and at once'
	);
	var q12 = new Question(
		"What's something Laura hates?",
		'All Listed Choices',
		'Whistling',
		'Bullies',
		'Mean Spirited People',
		'All Listed Choices'
	);
	var q13 = new Question(
		'Though Laura has more than enough time to sleep she chooses not to. What does Laura prefer to do over sleep?',
		'Do all of these things at the same time',
		'Organize',
		'Make outfits for her dog',
		'Watch Horror movies and shows',
		'Do all of these things at the same time'
	);
	var q14 = new Question(
		'Does Laura love her life?',
		'All day erry day, yes!',
		'Nah, she is discontent',
		'I like it but it could be better',
		'No',
		'All day erry day, yes!'
	);

	// push all of these questions into an array
	myQuestionsArray.push(q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14);
	console.log(myQuestionsArray.length);
}

// shuffle function
function shuffle(DivID) {
	// picks a random question from my question array
	randomQuestion = myQuestionsArray[Math.floor(Math.random() * myQuestionsArray.length)];
	// appends the question to my html div
	DivID.append(`<div><h2 class="question">${randomQuestion.question}</h2></div>`);
	$('.question').addClass('fontStyling');
	// my function for shuffling the anwsers without repeating them
	// i looked this one up and threw in my own values
	shuffleArray(DivID, randomQuestion.ans);
	// werkin'
	console.log('this is ' + randomQuestion.correctAns);
}

function shuffleArray(element, array) {
	for (var i = array.length - 1; i > -1; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
		// appends the index of the array to buttons which appear in my screen
		element.append(`<div><button class="guessButton">${randomQuestion.ans[i]}</button></div>`);
		$('.guessButton').addClass('btn-block btn-dark');
		arrayIndex = randomQuestion.ans[i];
	}
	return arrayIndex;
}

//this allows me to refresh after a win or a lose without reloading the whole page
function initialState() {
	$('#guessesLeft').html(guessesLeft);
	$('#win').html(wins);
	$('#loss').html(losses);
	timer = 16;
	$('#timer').html(timer);
}

// this is a full reset function that gets used after a full loss
function reset() {
	guessesLeft = 5;
	$('#guessesLeft').html(guessesLeft);
	wins = 0;
	$('#win').html(wins);
	losses = 0;
	$('#loss').html(losses);
	timer = 16;
	$('#timer').html(timer);
	start();
}

function winNlose() {
	if (selectedAnswer == randomQuestion.correctAns) {
		// wins increment up by 1
		wins++;
		console.log(wins);
		// reset the "game" to keep asking questions
		clear();
		$('#divOne').children().empty();
		shuffle($('#divOne'));
		initialState();
		start();
		$('#win').html(`${wins}`);

		// if wins reach 10 then we full reset the game
		if (wins === 10) {
			alert('you won!');
			reset();
			$('#divOne').children().empty();
			shuffle($('#divOne'));
		}
	} else if (selectedAnswer !== randomQuestion.correctAns) {
		guessesLeft--;
		losses++;
		$('#divOne').children().empty();
		$('#guessesLeft').html(`${guessesLeft}`);
		$('#loss').html(`${losses}`);
		shuffle($('#divOne'));
	}
	//works
	// for run out of time
	if (timer <= 0) {
		losses++;
		$('#divOne').children().empty();
		$('#guessesLeft').html(`${guessesLeft}`);
		$('#loss').html(`${losses}`);
		clear();
		shuffle($('#divOne'));
		initialState();
		start();
	} else if (timer <= 0 && losses > 5) {
		clear();
		alert('you lost');
		if (alert) {
			reset();
			$('#divOne').children().empty();
			shuffle($('#divOne'));
		}
	}
	if (losses >= 5) {
		alert('you lost');
		if (alert) {
			clear();
			reset();
			$('#divOne').children().empty();
			shuffle($('#divOne'));
		}
	}
}

// this is my click function for clicking oon my guess buttons
function buttonClick() {
	$(document).on('click', 'button', function() {
		selectedAnswer = $(this).text();
		winNlose();
	});
}

buttonClick();
$(document).ready(function() {
	start();
});

function start() {
	//  TODO: Use setInterval to start the count here and set the clock to running.
	if (!clockRunning) {
		intervalId = setInterval('count()', 1000);
	}
}
function stop() {
	//  TODO: Use clearInterval to stop the count here and set the clock to not be running.
	winNlose();
}
function count() {
	//  TODO: increment time by 1, remember we cant use "this" here.
	timer--;
	$('#timer').html(timer);
	if (timer <= 0) {
		stop();
	}
}
function clear() {
	clearInterval(intervalId);
}

// function timeConverter(t) {
// 	//  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
// 	var seconds = Math.floor(t / 1000);
// 	return seconds;
// }
