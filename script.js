// Get references to the question, answer, submit, and result elements
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const submitEl = document.getElementById("submit");
const resultEl = document.getElementById("result");

// Variable to store the current question numbers
let currentQuestion;

// Function to generate a new question
function generateQuestion() {
  // Generate two random numbers between 1 and 10
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;

  // Store the numbers in currentQuestion
  currentQuestion = [num1, num2];

  // Update the question element with the new question
  questionEl.textContent = `${num1} x ${num2} = ?`;
}

// Variable to store whether the last answer was correct
let isCorrect = false;

// Function to check the user's answer
function checkAnswer() {
  // Get the user's answer and convert it to a number
  const answer = parseInt(answerEl.value);

  // Check if the answer is correct
  if (answer === currentQuestion[0] * currentQuestion[1]) {
    // If the answer is correct, update the result element with a success message
    resultEl.classList.remove("correct", "incorrect");
    resultEl.textContent = "Doğru cevap!";
    resultEl.classList.add("correct");
    isCorrect = true;
  } else {
    // If the answer is incorrect, update the result element with a failure message
    resultEl.classList.remove("correct", "incorrect");
    resultEl.textContent = "Yanlış cevap!";
    resultEl.classList.add("incorrect");
    isCorrect = false;
  }

  // If the answer was correct, generate a new question after 3 seconds
  if (isCorrect) {
    setTimeout(() => {
      resultEl.textContent = "Yeni soru ...";
      answerEl.value = "";
      generateQuestion();
    }, 3000);
  }
}

// Generate the first question
generateQuestion();

// Add an event listener to the submit button to check the answer when clicked
submitEl.addEventListener("click", checkAnswer);

// Add an event listener to the document to check the answer when the Enter key is pressed
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    submitEl.click();
  }
});

// The window.onload event is usually used to run some code when the page has finished loading,
// but there's no function or code attached to it in this case.
// window.onload