export default class TabNavAside {
  constructor() {
    this.asideButton = document.querySelectorAll('.jsAsideBtn');

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
    })
  }

  init() {
    this.addEvents();
    return this;
  }
}