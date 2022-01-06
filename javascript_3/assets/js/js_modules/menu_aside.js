export default class MenuAside {
  constructor() {
    this.mobileButton = document.querySelector('.jsMobile');
    this.closeButton = document.querySelector('.jsAsideClose');
    this.asideArea = document.querySelector('.jsMenuAside');
    this.class = 'showMenu';
    this.events = ['click', 'touchstart'];

    this.showAside = this.showAside.bind(this);
  }

  showAside(e) {
    e.preventDefault();
    this.asideArea.classList.toggle(this.class);
  }

  addEvents() {
    this.events.forEach(userEvent => {
      this.mobileButton.addEventListener(userEvent, this.showAside);
      this.closeButton.addEventListener(userEvent, this.showAside);
    })
  }

  init() {
    this.addEvents();
    return this;
  }
}