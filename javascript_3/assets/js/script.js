import Modal from "./js_modules/intro_modal.js";
import Search from "./js_modules/search_area.js";
import MenuAside from "./js_modules/menu_aside.js";
import NavAside from "./js_modules/nav_aside.js";
import TabNavAside from "./js_modules/tabnav_aside.js";
import MainProductsSlide from "./js_modules/main_products_slide.js";
import HeaderFixed from "./js_modules/header_fixed.js";
import ReturnToTop from "./js_modules/return_to_top.js";

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

const mainProductsSlide = new MainProductsSlide();
mainProductsSlide.init();

const headerFixed = new HeaderFixed();
headerFixed.init();

const returnToTop = new ReturnToTop();
returnToTop.init();