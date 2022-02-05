export default class MenuAside {
  constructor() {
    this.mobileButton = document.querySelectorAll('.jsMobile');
    this.closeButton = document.querySelector('.jsAsideClose');
    this.asideArea = document.querySelector('.jsMenuAside');
    this.class = 'showMenu';
    this.events = ['click', 'touchstart'];

    this.showAside = this.showAside.bind(this);
    this.outsideClick = this.outsideClick.bind(this);
  }

  outsideClick(e) {
    const asideDiff = !e.target.closest('aside');
    const mobileDiff = !e.target.closest('li');
    const aside = e.currentTarget.body.querySelector('aside');

    if (aside.classList.contains('showMenu')) {
      if (asideDiff && mobileDiff) {
        this.asideArea.classList.remove(this.class);
        this.removeNavDown();
      }
    }
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

    document.addEventListener('click', this.outsideClick);
  }

  init() {
    this.addEvents();
    return this;
  }
}