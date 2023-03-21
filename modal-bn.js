(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-bn-open]"),
    closeModalBtn: document.querySelector("[data-modal-bn-close]"),
    modal: document.querySelector("[data-modal-bn]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
