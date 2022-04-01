export default class ReturnToTop {
  constructor() {
    this.returnButton = document.querySelector('.jsReturn');
    this.class = 'show';
    this.events = ['touchstart', 'click'];

    this.return = this.return.bind(this);
    this.showButton = this.showButton.bind(this);
  }
  
  showButton() {
    if (window.pageYOffset > 360) this.returnButton.classList.add(this.class);
    else if (window.pageYOffset < 360) this.returnButton.classList.remove(this.class);
  } 

  return() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  addEvents() {
    this.events.forEach(userEvent => {
      this.returnButton.addEventListener(userEvent, this.return);
    })

    window.addEventListener('scroll', this.showButton);
  }

  init() {
    this.addEvents();
    return this;
  }
}