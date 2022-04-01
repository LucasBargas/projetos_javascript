export default class ScrollAnimation {
  constructor() {
    this.scrollAreas = document.querySelectorAll('.jsAnimaScroll');
    this.halfWindowSection = window.innerHeight * 0.7; 
    this.halfWindowSectionLinks = window.innerHeight * 0.3; 

    this.class = 'active';
  }

  getDistance() {
    this.distance = [...this.scrollAreas].map(area => {
      const offset = area.offsetTop;
      return {
        element: area,
        offset: Math.floor(offset - this.halfWindowSection),
      };
    });
    return this.distance;
  }

  checkDistance() {
    const getDistance = this.getDistance();

    getDistance.forEach(item => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('animate');
      };
    })
  }

  activeNavLinks() {
    const sections = document.querySelectorAll('.activeLink');
    this.areaLinkDistance = [...sections].map(area => {
      const offset = area.offsetTop;
      return {
        element: area,
        offset: Math.floor(offset - this.halfWindowSectionLinks),
      };
    });
    return this.areaLinkDistance;
  }

  checkDistanceLinks() {
    const activeNavLinks = this.activeNavLinks();

    activeNavLinks.forEach(item => {
      if (window.pageYOffset > item.offset) {
        document.querySelectorAll(`[data-link]`).forEach(link => link.classList.remove(this.class));
        this.header(item.element.id).classList.add(this.class);

      } else if (window.pageYOffset < item.offset) {
        this.header(item.element.id).classList.remove(this.class);
      }
    })
  }

  header(element) {
    return document.querySelector(`[data-link="${element}"]`);
  }

  addEvents() {
    window.addEventListener('scroll', () => {
      this.checkDistance();
      this.checkDistanceLinks();
    })
  }

  init() {
    this.checkDistance();
    this.checkDistanceLinks();
    this.addEvents();
    return this;
  }
}