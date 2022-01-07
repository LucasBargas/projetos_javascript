import Modal from "./js_modules/intro_modal.js";
import Search from "./js_modules/search_area.js";
import MenuAside from "./js_modules/menu_aside.js";
import NavAside from "./js_modules/nav_aside.js";
import TabNavAside from "./js_modules/tabnav_aside.js";

const modal = new Modal();
modal.init();

const search = new Search();
search.init();

const menuAside = new MenuAside();
menuAside.init();

const navAside = new NavAside();
navAside.init();

const tabNavAside = new TabNavAside();
tabNavAside.init();