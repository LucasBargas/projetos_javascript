export default class Explore {
  constructor() {
    this.destArea = document.querySelector('#destination');
    this.homeArea = document.querySelector('#home');
    this.destLink = document.querySelector('.jsHeaderNav .destination');
    this.homeLink = document.querySelector('.jsHeaderNav .home');
    this.class = 'show';
    this.handleClick = this.handleClick.bind(this);
  }

  addClass() {
    setTimeout(() => {
      this.destArea.classList.add(this.class);
      this.homeArea.classList.remove(this.class);
      this.destLink.classList.add(this.class);
      this.homeLink.classList.remove(this.class);

      this.destArea.querySelector('.jsBgContent').classList.add('show');
      this.homeArea.querySelector('.jsBgContent').classList.remove('show');
    }, 300)
  }

  handleClick(e) {
    e.preventDefault();
    this.addClass();
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