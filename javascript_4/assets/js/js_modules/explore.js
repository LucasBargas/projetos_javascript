export default class Explore {
  constructor() {
    this.class = 'show';
    this.handleClick = this.handleClick.bind(this);
  }

  hancleClass() {
    setTimeout(() => {
      document.querySelector('#destination').classList.add(this.class);

      document.querySelector('#home').classList.remove(this.class);

      document.querySelector('.jsHeaderNav .destination').classList.add(this.class);

      document.querySelector('.jsHeaderNav .home').classList.remove(this.class);
    }, 300)
  }

  handleClick(e) {
    e.preventDefault();
    this.hancleClass();
  }

  addEvents() {
    ['click', 'touchstart'].forEach(userEvent => {
      document.querySelector('.jsExploreBtn').addEventListener(userEvent, this.handleClick);
    })
  }

  init() {
    this.addEvents();
    return this;
  }
}