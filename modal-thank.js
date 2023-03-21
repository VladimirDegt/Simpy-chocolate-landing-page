(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-thank]"),
    closeModalBtn: document.querySelector("[data-modal-close-thank]"),
    modal: document.querySelector("[data-modal-thank]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
