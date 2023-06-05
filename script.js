let circleHover = document.querySelectorAll(".circle-hover");
let result = document.querySelector("#result");
let btn = document.querySelector("#btn");

function runEvent(event) {
  circleHover.forEach((element) => {
    element.style.backgroundColor = "hsl(218, 16%, 23%)";
  });

  event.target.style.backgroundColor = "hsl(216, 12%, 54%)";
  result.innerHTML = event.target.innerHTML;
}

circleHover.forEach((element) => {
  element.addEventListener("click", runEvent);
});

function submit() {
  if (result.innerHTML == 0) {
    document.querySelector("#warning").style.display = "block";
  } else {
    document.querySelector("#first-card-ctn").style.display = "none";
    document.querySelector("#second-card-ctn").style.display = "flex";
  }
}

btn.addEventListener("click", submit);
