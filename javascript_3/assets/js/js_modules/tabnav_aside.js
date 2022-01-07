export default class TabNavAside {
  constructor() {
    this.asideButton = document.querySelectorAll('.jsAsideBtn');

    this.asideButtonSelect = document.querySelector('.jsAsideMenuButton');

    this.events = ['click', 'touchstart'];
    this.class = 'active';

    this.addClass = this.addClass.bind(this);
  }

  addClass(e) {
    e.preventDefault();
    const el = e.target;
    el.classList.toggle(this.class);

    const buttonParent = el.parentElement.parentElement;
    buttonParent.nextElementSibling.classList.toggle(this.class);
  }

  addEvents() {
    this.events.forEach(userEvent => {
      this.asideButton.forEach(btn => {
        btn.addEventListener(userEvent, this.addClass);
      })

      this.asideButtonSelect.addEventListener(userEvent, e => {
        const select = document.querySelector('.jsMenuSelect');

        e.preventDefault();
        e.target.classList.toggle(this.class);
        select.classList.toggle(this.class);
      })
    })
  }

  init() {
    this.addEvents();
    return this;
  }
}