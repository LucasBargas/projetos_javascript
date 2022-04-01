export default class PortfolioFilter {
  constructor() {
    this.portfolioNav = document.querySelectorAll('.jsPortfolioNav ul li');
    this.portfolioItens = document.querySelectorAll('.jsPortfolioContent .portifolio-item');
    this.showContent = 'showContent';

    this.events = ['click', 'touchstart'];
  }

  classOnPortfolioNav(index) {
    this.portfolioNav.forEach(nav => {
      nav.classList.remove(this.showContent);
    })

    this.portfolioNav[index].classList.add(this.showContent);
  }

  filterColor(id) {
    const itens = this.portfolioItens.forEach(item => {
      if (item.classList.contains(id)) {
        item.classList.add(this.showContent);
  
      } else if (!item.classList.contains(id)) {
        item.classList.remove(this.showContent);
      }
    })
    return itens;
  }

  handleClick(e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('id');
    this.filterColor(id);
  }

  addEvent() {
    this.events.forEach(userEvent => {
      this.portfolioNav.forEach((nav, index) => {
        nav.addEventListener(userEvent, e => {
          this.handleClick(e);
          this.classOnPortfolioNav(index);
        })
      })
    })
  }

  init() {
    this.addEvent();
    return this;
  }
}