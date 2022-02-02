export default class Header {
  constructor() {
    this.headerNav = document.querySelector('.jsHeaderNav');
    this.class = 'show';
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.headerNav.classList.toggle(this.class);
  }

  addEvents() {
    ['click', 'touchstart'].forEach(userEvent => {
      document.querySelector('.jsMobileOpen').addEventListener(userEvent, this.handleClick);
      
      document.querySelector('.jsMobileClose').addEventListener(userEvent, this.handleClick);

      this.headerNav.querySelectorAll('li a').forEach(link => {
        link.addEventListener(userEvent, this.handleClick);
      })
    })
  }

  init() {
    this.addEvents();
    return this;
  }
}