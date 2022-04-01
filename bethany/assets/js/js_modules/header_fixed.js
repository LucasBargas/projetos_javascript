export default class HeaderFixed {
  constructor() {
    this.header = document.querySelector('.jsHeader');
    this.class = 'scroller-fixed';

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    if (window.pageYOffset > 80) this.header.classList.add(this.class);
    else if (window.pageYOffset < 80) this.header.classList.remove(this.class);
  }

  addEvent() {
    window.addEventListener('scroll', this.handleScroll);
  }
 
  init() {
    this.addEvent();
    return this;
  }
}