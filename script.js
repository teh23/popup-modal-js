function close(event) {}

const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const modalClose = document.querySelector(".modal-close");

btn.addEventListener("click", () => {
    modal.style.display = "flex";
    modalContent.style.display = "flex";
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
        modalContent.style.display = "none";
    }
});
modalClose.addEventListener("click", () => {
    modal.style.display = "none";
    modalContent.style.display = "none";
});
