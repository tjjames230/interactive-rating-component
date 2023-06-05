let circleHover = document.querySelectorAll(".circle-hover");

function runEvent(event) {
  circleHover.forEach((element) => {
    element.style.backgroundColor = "hsl(218, 16%, 23%)";
  });

  event.target.style.backgroundColor = "hsl(216, 12%, 54%)";
}

circleHover.forEach((element) => {
  element.addEventListener("click", runEvent);
});
