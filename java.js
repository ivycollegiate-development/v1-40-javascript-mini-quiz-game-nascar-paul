// Variables (explain what each variable is for):
const correctAnswer = "Paris";
let score = 0;

const buttons = document.querySelectorAll(".answerButton");
const feedback = document.getElementById("feedback");
const scoreDisplay = document.getElementById("score");

// Event Listeners (explain how they work):

buttons.forEach(button => {
    button.addEventListener("click", function() {
        if (button.innerHTML === correctAnswer) {
            feedback.innerHTML = "Correct!";
            score++;
        } else {
            feedback.innerHTML = "Try Again!";
        }
        scoreDisplay.innerHTML = `Score: ${score}`;
    });
});