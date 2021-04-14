const panels = document.querySelectorAll(".panel");

let active = document.querySelector(".active");

function setActive(panel) {
  panel.classList.add("active");
  active = panel;
}

function unsetActive() {
  active.classList.remove("active");
}

panels.forEach((panel) => {
  panel.addEventListener("click", function () {
    unsetActive();
    setActive(panel);
  });
});
