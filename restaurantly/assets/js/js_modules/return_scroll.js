export default class ReturnScroll {
  constructor() {
    this.returnButton = document.querySelector('.jsReturn');
    this.events = ['click', 'touchstart'];
    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    if (window.pageYOffset > 300) this.returnButton.classList.add('show');
    else if (window.pageYOffset < 500) this.returnButton.classList.remove('show');
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

    window.addEventListener('scroll', this.handleScroll);
  }

  init() {
    this.addEventOnButton(); 
    return this;
  }
}