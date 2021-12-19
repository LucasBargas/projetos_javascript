export default class TabNav {
  constructor() {
    this.tabList = document.querySelectorAll('.jsTabNav li');
    this.tabContent = document.querySelectorAll('.jsSpecialContent .specialContent-area');

    this.events = ['click', 'touchstart'];
    this.activeTab = 'activeTab';

    this.tabList[0].classList.add(this.activeTab);
    this.tabContent[0].classList.add(this.activeTab);
  }

  showTabContent(index) {
    this.tabContent.forEach(tab => {
      tab.classList.remove(this.activeTab);
    })
    this.tabContent[index].classList.add(this.activeTab);
  }

  addClassOnList(e) {
    e.preventDefault();

    this.tabList.forEach(list => {
      list.classList.remove(this.activeTab);
    })

    e.target.classList.add(this.activeTab);
  }

  addEventsOnLinks() {
    this.events.forEach(userEvent => {
      this.tabList.forEach((list, index) => {
        list.addEventListener(userEvent, e => {
          this.addClassOnList(e);
          this.showTabContent(index);
        })
      })
    })
  }

  init() {
    this.addEventsOnLinks();
    return this;
  }
}