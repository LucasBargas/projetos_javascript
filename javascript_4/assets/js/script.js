import Modal from "./js_modules/intro_modal.js";
import Header from "./js_modules/header.js";
import Explore from "./js_modules/explore.js";
import TabNav from "./js_modules/tab_nav.js";

const modal = new Modal();
modal.init();

const header = new Header();
header.init();

const explore = new Explore();
explore.init();

const tabNavHeader = new TabNav('.jsHeaderNav li a', '.jsBg');
tabNavHeader.init();