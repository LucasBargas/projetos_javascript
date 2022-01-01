export default class Modal {
  constructor() {
    this.jsModal = document.querySelector('.jsModal');
    this.hiddenModal = () => this.jsModal.classList.toggle('active');

    this.captureClickOnModal = this.captureClickOnModal.bind(this);
  }

  captureClickOnModal() {
    document.addEventListener('click', (e) => {
      const el = e.target;
      if (el.classList.contains('jsCloseButton') || el.classList.contains('jsModalButton') || el === this.jsModal) this.hiddenModal();
    });
  }

  init() {
    this.captureClickOnModal();
    return this;
  }
}