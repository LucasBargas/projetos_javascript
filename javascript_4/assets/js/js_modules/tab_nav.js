export default class Header {
  constructor(btns, contents) {
    this.btns = document.querySelectorAll(btns);
    this.contents = document.querySelectorAll(contents);
    this.class = 'show';
  }

  addClassOnContents(index) {
    this.contents.forEach(content => {
      content.classList.remove(this.class);
    })

    this.contents[index].classList.add(this.class);
  }

  addClassOnBtns(index) {
    this.btns.forEach(btn => {
      btn.classList.remove(this.class);
    })
    this.btns[index].classList.add(this.class);
  }

  addEvents() {
    ['click', 'touchstart'].forEach(userEvent => {
      this.btns.forEach((btn, index) => {
        btn.addEventListener(userEvent, e => {
          e.preventDefault();
          this.addClassOnBtns(index);
          this.addClassOnContents(index);
        })
      })
    })
  }

  init() {
    this.addEvents();
    return this;
  }
}