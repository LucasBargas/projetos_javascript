export default class Modal {
  constructor() {
    this.searchBtn = document.querySelector('.jsSearch');
    this.searchArea = document.querySelector('.jsHeaderNavSearch');
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.searchArea.classList.toggle('show');
  }

  init() {
    this.searchBtn.addEventListener('click', this.handleClick);
    return this;
  }
}