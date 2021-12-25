export default class ReturnScroll {
  constructor() {
    this.returnButton = document.querySelector('.jsReturn');
    this.events = ['click', 'touchstart'];
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.return();
  }

  return() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  addEventOnButton() {
    this.events.forEach(userEvent => {
      this.returnButton.addEventListener(userEvent , this.handleClick);
    })
  }

  init() {
    this.addEventOnButton(); 
    return this;
  }
}