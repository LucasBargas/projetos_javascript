export default class FormMessage {
  constructor() {
    this.formMessage = document.querySelector('.formMessage');
    this.sendForm = document.querySelector('.jsSendForm button');
    this.closeMessage = document.querySelector('.closeMessage .close');

    this.handleClickBtn = this.handleClickBtn.bind(this);
    this.handleClickClose = this.handleClickClose.bind(this);
  }

  showMessage() {
    this.formMessage.style.display = 'block';
  }

  handleClickBtn(e) {
    e.preventDefault();
    this.showMessage();
  }

  handleClickClose() {
    this.formMessage.style.display = 'none';
  }

  init() {
    this.sendForm.addEventListener('click', this.handleClickBtn);
    this.closeMessage.addEventListener('click', this.handleClickClose);
    return this;
  }
}