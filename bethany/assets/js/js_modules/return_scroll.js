export default class ReturnScroll {
  constructor() {
    this.buttonReturn = document.querySelector('.jsReturn');
    this.class = 'showButton';
    this.events = ['click', 'touchstart'];

    this.return = this.return.bind(this);
    this.showButton = this.showButton.bind(this);
  }

  showButton() {
    if (window.pageYOffset > 80) this.buttonReturn.classList.add(this.class);
    else if (window.pageYOffset < 80) this.buttonReturn.classList.remove(this.class);
  }

  return(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
 
  addEvents() {
    this.events.forEach(userEvent => this.buttonReturn.addEventListener(userEvent, this.return));
    window.addEventListener('scroll', this.showButton);
  }
 
  init() {
    this.addEvents();
    return this;
  }
}