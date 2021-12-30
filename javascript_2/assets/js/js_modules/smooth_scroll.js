export default class SmoothScroll {
  constructor() {
    this.navLink = document.querySelectorAll('.jsHeaderAreaNavSide li:not(:last-of-type) a');
    this.handleClick = this.handleClick.bind(this);
  }

  getHref(el) {
    const href = el.getAttribute('href');
    return document.querySelector(href);
  }

  handleClick(e) {
    e.preventDefault();
    const el = e.currentTarget;
    const href = this.getHref(el).offsetTop;
    this.smooth(href);
  }

  smooth(getTop) {
    window.scrollTo({ top: getTop - 100, behavior: 'smooth' });
  }

  addEventsOnLinks() {
    this.navLink.forEach(link => {
      link.addEventListener('click', this.handleClick);
    })
  }
 
  init() {
    this.addEventsOnLinks();
    return this;
  }
}