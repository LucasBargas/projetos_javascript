import Modal from "./js_modules/intro_modal.js";
import Header from "./js_modules/header.js";
import Explore from "./js_modules/explore.js";
import ActiveSlider from "./js_modules/active_slider.js";
import TabNav from "./js_modules/tab_nav.js";

const modal = new Modal();
modal.init();

const header = new Header();
header.init();

const explore = new Explore();
explore.init();

const activeSlider = new ActiveSlider();
activeSlider.init();

const tabNavAnimation = new TabNav('.jsHeaderNav li a', '.jsBgContent');
tabNavAnimation.init();

const tabNavHeader = new TabNav('.jsHeaderNav li a', '.jsBg');
tabNavHeader.init();

const tabNavDest = new TabNav('.jsDestNav li', '.jsDestContent');
tabNavDest.init();

const tabDestImgs = new TabNav('.jsDestNav li', '.jsDestImgs figure');
tabDestImgs.init();

// const tabCrewImgs = new TabNav('.jsSliderController li', '.jsCrewImgs figure');
// tabCrewImgs.init();