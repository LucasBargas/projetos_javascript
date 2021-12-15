export default class MobileMenu {
  constructor() {
    this.menuButton = document.querySelector('.jsMobileMenu');
    this.buttonClose = document.querySelector('.jsCloseMobile');
    this.menuArea = document.querySelector('.jsHeaderNavSide');
    this.navLinks = document.querySelectorAll('.jsHeaderNavLinks a:not(:last-of-type)');
    this.showMenu = 'show';
    this.events = ['click', 'touchstart'];

    this.handleUserEvent = this.handleUserEvent.bind(this);
  }

  handleUserEvent(e) {
    e.preventDefault();
    this.menuArea.classList.toggle(this.showMenu);
    this.buttonClose.classList.toggle(this.showMenu);
  }

  addEventsOnButtons() {
    this.events.forEach(userEvent => {
      this.menuButton.addEventListener(userEvent, this.handleUserEvent);
    })

    this.events.forEach(userEvent => {
      this.buttonClose.addEventListener(userEvent, this.handleUserEvent);
    })

    this.events.forEach(userEvent => {
      this.navLinks.forEach(link => {
        link.addEventListener(userEvent, this.handleUserEvent);
      })
    })
  }

  init() {
    this.addEventsOnButtons();
    return this;
  }
}