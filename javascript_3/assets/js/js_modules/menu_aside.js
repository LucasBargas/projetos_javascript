export default class MenuAside {
  constructor() {
    this.mobileButton = document.querySelectorAll('.jsMobile');
    this.closeButton = document.querySelector('.jsAsideClose');
    this.asideArea = document.querySelector('.jsMenuAside');
    this.class = 'showMenu';
    this.events = ['click', 'touchstart'];

    this.showAside = this.showAside.bind(this);
  }

  removeNavDown() {
    const navDown = document.querySelector('.jsNavDown');
    navDown.classList.toggle('remove');
  }

  showAside(e) {
    e.preventDefault();
    this.asideArea.classList.toggle(this.class);
    this.removeNavDown()
  }

  addEvents() {
    this.events.forEach(userEvent => {
      this.mobileButton.forEach(btn => {
        btn.addEventListener(userEvent, this.showAside);
      })
      this.closeButton.addEventListener(userEvent, this.showAside);
    })
  }

  init() {
    this.addEvents();
    return this;
  }
}