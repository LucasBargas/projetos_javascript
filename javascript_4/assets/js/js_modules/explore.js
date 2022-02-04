export default class Explore {
  constructor() {
    this.destArea = document.querySelector('#destination');
    this.homeArea = document.querySelector('#home');
    this.class = 'show';
    this.handleClick = this.handleClick.bind(this);
  }

  toggleClass() {
    setTimeout(() => {
      this.destArea.classList.add(this.class);
      this.homeArea.classList.remove(this.class);

      document.querySelector('.jsHeaderNav .destination').classList.add(this.class);
      document.querySelector('.jsHeaderNav .home').classList.remove(this.class);

      this.destArea.querySelector('.jsBgContent').classList.add(this.class);
      this.homeArea.querySelector('.jsBgContent').classList.remove(this.class);
    }, 300)
  }

  handleClick(e) {
    e.preventDefault();
    this.toggleClass();
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