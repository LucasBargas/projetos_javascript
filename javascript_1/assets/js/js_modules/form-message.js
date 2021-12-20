export default class FormMessage {
  constructor() {
    this.formMessage = document.querySelector('.jsFormMessage');
    this.sendForm = document.querySelector('.jsSendForm button');

    this.handleClick = this.handleClick.bind(this);
  }

  message() {
    const createDiv = document.createElement('div');
    const messageAlert = '<p>Este formulário não pode executar o envio, pois o mesmo é apenas demonstrativo.</p>';
    createDiv.innerHTML = messageAlert;
    this.formMessage.appendChild(createDiv);
  }

  handleClick(e) {
    e.preventDefault();
    if (this.formMessage.innerHTML === '') this.message();
    else return;
  }

  init() {
    this.sendForm.addEventListener('click', this.handleClick);
    return this;
  }
}