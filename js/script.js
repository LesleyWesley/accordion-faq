// Selects the orange arrow
const arrow = document.querySelector(".question i");



//Selects the question div

const questionDiv = document.querySelectorAll(".question");

//Selects answer div

const answer = document.querySelector (".answer");

//====================================================

// Adds click event for questions

questionDiv.forEach(question) => {
  question.onclick = function () {
    this.classList.toggle("hide");
    let content = this.nextElementSibling;

    if (content.classList.includes("hide")) {
      content.classList.remove("hide");
    } else {
      content.classList.add("hide");
    }
  }
};
