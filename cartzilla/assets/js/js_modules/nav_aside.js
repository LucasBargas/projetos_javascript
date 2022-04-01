export default class NavAside {
  constructor() {
    this.navLinks = document.querySelectorAll('.jsMenuNavAside li');
    this.asideMenu = document.querySelectorAll('.jsMenuAsideLinks .asideMenu');
    this.events = ['click', 'touchstart'];
    this.class = 'active'
  }

  showContentNav(index) {
    this.asideMenu.forEach(menu => {
      menu.classList.remove(this.class);
    })
    this.asideMenu[index].classList.add(this.class);
  }

  addActive(e) {
    this.navLinks.forEach(link => {
      link.classList.remove(this.class);
    })
    e.target.classList.add(this.class);
  }

  addEvents() {
    this.events.forEach(userEvent => {
      this.navLinks.forEach((link, index) => {
        link.addEventListener(userEvent, e => {
          e.preventDefault();
          this.addActive(e);
          this.showContentNav(index);
        })
      })
    })
  }

  init() {
    this.addEvents();
    return this;
  }
}