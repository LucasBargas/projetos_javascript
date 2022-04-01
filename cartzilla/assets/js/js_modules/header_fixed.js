export default class HeaderFixed {
  constructor() {
    this.header = document.querySelector('.jsHeader');
    this.class = 'fixed';

    this.addClassOnHeader = this.addClassOnHeader.bind(this);
  }

  addClassOnHeader(){
    if (window.pageYOffset > 220) this.header.classList.add(this.class);
    else if (window.pageYOffset < 220) this.header.classList.remove(this.class);
  }

  addEvent() {
    window.addEventListener('scroll', this.addClassOnHeader);
  }

  init() {
    this.addEvent();
    return this;
  }
}
