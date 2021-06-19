const qAndA = document.querySelectorAll(".question-and-answer");

for (eachQAndA of qAndA) {
  const questionDiv = eachQAndA.querySelector(".question");
  const question = eachQAndA.querySelector("h2");
  const arrow = eachQAndA.querySelector(".question i");
  const answer = eachQAndA.querySelector(".answer");
  console.log(arrow);

  question.addEventListener("click", function () {
    if (answer.classList.contains("hide")) {
      answer.classList.remove("hide");
      question.style.fontWeight = "700";
      question.style.color = "#1D1E35";
      arrow.style.transform = 'rotate(0deg)';
    } else {
      answer.classList.add("hide");
      question.style.fontWeight = "400";
      question.style.color = "#4A4B5E";
      arrow.style.transform = 'rotate(180deg)';
    }
  });
};
