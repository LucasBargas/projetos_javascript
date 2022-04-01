export default class FilterMenu {
  constructor() {
    this.menuNavFilter = document.querySelectorAll('.jsMenuSection-nav li');
    this.menuContent = document.querySelectorAll('.jsMenuSection-options ul');

    this.events = ['click', 'touchstart'];
    this.showMenu = 'showMenu';

    this.menuNavFilter[0].classList.add(this.showMenu);
    this.menuContent[0].classList.add(this.showMenu);
  }

  showMenuContent(index) {
    this.menuContent.forEach(menu => {
      menu.classList.remove(this.showMenu);
    })
    this.menuContent[index].classList.add(this.showMenu);
  }

  addClassOnLinks(e) {
    e.preventDefault();

    this.menuNavFilter.forEach(nav => {
      nav.classList.remove(this.showMenu);
    })
    e.target.classList.add(this.showMenu);
  }

  addEventsOnLinks() {
    this.events.forEach(userEvent => {
      this.menuNavFilter.forEach((nav,index) => {
        nav.addEventListener(userEvent, e => {
          this.addClassOnLinks(e);
          this.showMenuContent(index);
        })
      })
    })
  }

  init() {
    this.addEventsOnLinks();
    return this;
  }
}