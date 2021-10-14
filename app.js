/////////////////////////////////////////////////
//                App State
/////////////////////////////////////////////////
const state = {
  player1: 0,
  player2: 0,
  currentQuestion: {},
  which: true,
};

let questions = [];

alert(
  "Welcome to New York City Trivia. This game is played between 2 players. Each player takes turns picking one of the 4 answers provided. First player to reach 10 points, wins the game. Good Luck!!"
);
/////////////////////////////////////////////////
//                   DOM element
/////////////////////////////////////////////////

const $question = $("#question");
const $a = $("#a");
const $b = $("#b");
const $c = $("#c");
const $d = $("#d");
const $p1score = $("#player1 h4");
const $p2score = $("#player2 h4");

/////////////////////////////////////////////////
//                   Functions
/////////////////////////////////////////////////
const chooseAnswer = (event, question) => {
  console.log(event);
  if (event.target.innerText === question.answer) {
    alert("Correct! Next player's turn.");
    if (state.which) {
      state.player1++;
      state.which = !state.which;
    } else {
      state.player2++;
      state.which = !state.which;
    }
    setBoard(questions);
  } else {
    alert("Incorrect! Next player's turn.");
    setBoard(questions);
    state.which = !state.which;
  }
};

const setBoard = (q) => {
  const randomIndex = Math.floor(Math.random() * q.length);
  const randomQuestion = q[randomIndex];

  $question.text(randomQuestion.question);
  $a.text(randomQuestion.a);
  $b.text(randomQuestion.b);
  $c.text(randomQuestion.c);
  $d.text(randomQuestion.d);

  $p1score.text(state.player1);
  $p2score.text(state.player2);

  $("li").off();
  $("li").on("click", (event) => {
    chooseAnswer(event, randomQuestion);
  });
  if (state.player1 === 10) {
    state.which = false;
    alert("Player 1 has won! Refresh to restart");
  } else if (state.player2 === 10) {
    state.which = false;
    alert("Player 2 has won! Refresh to restart");
  }
};

/////////////////////////////////////////////////
//                   App Logic
/////////////////////////////////////////////////
const url =
  "https://cdn.contentful.com/spaces/o9yeqvkzbbgn/environments/master/entries?access_token=rU3gh0ZyAAmPkMYJtFQ5MtgySUSvIL9ft37KbbMZ6fU&content_type=triviaQuestions";
$.ajax(url).then((data) => {
  questions = data.items.map((q) => q.fields);
  console.log(data);
  console.log(questions);

  setBoard(questions);
});
