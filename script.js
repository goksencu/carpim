const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const submitEl = document.getElementById("submit");
const resultEl = document.getElementById("result");

let currentQuestion;

function generateQuestion() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  currentQuestion = [num1, num2];
  questionEl.textContent = `${num1} x ${num2} = ?`;
}
let isCorrect = false;
function checkAnswer() {
  const answer = parseInt(answerEl.value);
  if (answer === currentQuestion[0] * currentQuestion[1]) {
    resultEl.classList.remove("correct", "incorrect");
    resultEl.textContent = "Doğru cevap!";
    resultEl.classList.add("correct");
    isCorrect = true;
  } else {
    resultEl.classList.remove("correct", "incorrect");
    resultEl.textContent = "Yanlış cevap!";
    resultEl.classList.add("incorrect");
    isCorrect = false;
  }
  if (isCorrect) {
    setTimeout(() => {
    resultEl.textContent = "Yeni soru oluşturuluyor...";
    // resultEl.classList.remove("correct", "incorrect");
    answerEl.value = "";
    generateQuestion();
  }, 3000);
}
}
generateQuestion();

submitEl.addEventListener("click", checkAnswer);
window.onload
