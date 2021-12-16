export default class SmoothScroll {
  constructor() {
    this.headerLinks = document.querySelectorAll('.jsHeaderNavMenu a');

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const el = e.currentTarget;
    const href = el.getAttribute('href');
    const section = document.querySelector(href);
    const getTop = section.offsetTop;
    this.smooth(getTop);
  }

  smooth(getTop) {
    window.scrollTo({ top: getTop, behavior: 'smooth' });
  }

  addEventsOnLinks() {
    this.headerLinks.forEach(link => {
      link.addEventListener('click', this.handleClick);
    })
  }

  init() {
    this.addEventsOnLinks();
    return this;
  }
}