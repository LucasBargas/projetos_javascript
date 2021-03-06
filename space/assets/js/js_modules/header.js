export default class Header {
  constructor() {
    this.headerNav = document.querySelector('.jsHeaderNav');
    this.class = 'show';
    this.handleClick = this.handleClick.bind(this);
    this.outsideClick = this.outsideClick.bind(this);
  }

  outsideClick(e) {
    const navDiff = !e.target.classList.contains('jsHeaderNav');
    const mobileDiff = !e.target.classList.contains('jsMobileOpen');

    if (navDiff && mobileDiff) this.headerNav.classList.remove(this.class);
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

    document.addEventListener('click', this.outsideClick);
  }

  init() {
    this.addEvents();
    return this;
  }
}