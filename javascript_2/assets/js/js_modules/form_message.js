export default class FormMessage {
  constructor() {
    this.formMessage = document.querySelectorAll('.jsFormMessage');
    this.sendForm = document.querySelectorAll('.jsForm button');
    this.closeMessage = document.querySelectorAll('.closeMessage .close');

    this.handleClickBtn = this.handleClickBtn.bind(this);
    this.handleClickClose = this.handleClickClose.bind(this);
  }

  handleClickBtn(e) {
    e.preventDefault();
    const parentBtn = e.currentTarget.parentElement;
    const previousElement = parentBtn.previousElementSibling;
    previousElement.style.display = 'block';
  }

  handleClickClose(e) {
    const el = e.currentTarget;
    const parentClose = el.parentElement.parentElement.parentElement;
    parentClose.style.display = 'none';
  }

  addEventOnButtons() {
    this.sendForm.forEach(send => send.addEventListener('click', this.handleClickBtn));
    this.closeMessage.forEach(close =>  close.addEventListener('click', this.handleClickClose));
  }

  init() {
    this.addEventOnButtons();
    return this;
  }
}