function addColor(e) {

  document.body.style.background = `${e.target.id}`;
}

const circles = document.querySelectorAll('.circle');

circles.forEach((circle) => {
  circle.addEventListener('click', addColor);
});
