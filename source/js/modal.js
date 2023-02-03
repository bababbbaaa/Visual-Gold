const modalButton = document.querySelectorAll(".modal-button");
const modalClose = document.querySelector(".modal-close");
const modalCloseBtn = document.querySelector(".modal__form__button-close");

modalButton.forEach((e=>e.addEventListener("click", (e=>{
  modalClose.classList.contains("modal-close") && (e.preventDefault(),
  modalClose.classList.remove("modal-close"))
}
))));

modalCloseBtn.addEventListener("click", function() {
  modalClose.classList.add("modal-close")
});

modalClose.addEventListener("click", (e=>{
  e.target == modalClose && modalClose.classList.contains("modal") && modalClose.classList.add("modal-close")
}
));

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    modalClose.classList.add('modal-close');
  }
});
