export default class MobileMenu {
  constructor() {
    this.mobileArea = document.querySelector('.jsHeaderAreaNavSide');
    this.mobileOpen = document.querySelector('.jsMobileOpen');
    this.mobileClose = document.querySelector('.jsMobileClose');
    this.navLink = document.querySelectorAll('.jsHeaderAreaNavSide li:not(:last-of-type) a');

    this.events = ['click', 'touchstart'];
    this.class = 'showMobile';
    this.bindEvents();
  }

  clickOutSide(e) {
    const el = e.target;
    if (el.classList.contains(this.class)) {
      this.closeButton(e);
    }
  }

  closeButton(e) {
    e.preventDefault();
    this.mobileArea.classList.remove(this.class);
  }

  openButton(e) {
    e.preventDefault();
    this.mobileArea.classList.add(this.class);
  }

  addEvents() {
    this.events.forEach(userEvent => {
      this.mobileOpen.addEventListener(userEvent, this.openButton);

      this.mobileClose.addEventListener(userEvent, this.closeButton);
    })

    this.navLink.forEach(link => {
      link.addEventListener('click', this.closeButton);
    })

    document.addEventListener('click', this.clickOutSide);
  }

  bindEvents() {
    this.openButton = this.openButton.bind(this);
    this.closeButton = this.closeButton.bind(this);
    this.clickOutSide = this.clickOutSide.bind(this);
  }
 
  init() {
    this.addEvents();
    return this;
  }
}