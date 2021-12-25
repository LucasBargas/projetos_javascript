export default class ReturnScroll {
  constructor() {
    this.returnButton = document.querySelector('.jsReturn');
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.return();
  }

  return() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  addEventOnButton() {
    this.returnButton.addEventListener('click', this.handleClick);
  }

  init() {
    this.addEventOnButton(); 
    return this;
  }
}