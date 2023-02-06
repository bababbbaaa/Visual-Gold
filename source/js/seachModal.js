const modalButton = document.querySelectorAll(".popover-search");
const modalClose = document.querySelector(".search__close");
const modalCloseBtn = document.querySelector(".search-button");

modalButton.forEach((e=>e.addEventListener("click", (e=>{
  modalClose.classList.contains("search__close") && (e.preventDefault(),
  modalClose.classList.remove("search__close"))
}
)))),

modalClose.addEventListener("click", (e=>{
  e.target == modalClose && modalClose.classList.contains("popover-container") && modalClose.classList.add("search__close")
}
));

modalCloseBtn.addEventListener('click', () => {
    modalClose.classList.add('search__close');
})

document.addEventListener('keydown', function(e) {
  if (e.keyCode === 27) {
    modalClose.classList.add('search__close');
  }
});
