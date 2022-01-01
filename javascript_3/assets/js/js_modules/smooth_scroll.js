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
    const screen = window.matchMedia('(max-width: 2000px) and (min-width: 800px)').matches;
    if (screen) window.scrollTo({ top: getTop - 60, behavior: 'smooth' })
    else if (!screen) window.scrollTo({ top: getTop - 40, behavior: 'smooth' })
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