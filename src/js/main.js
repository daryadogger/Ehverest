import nodeListForEach from './node-list-for-each';
import tel from './tel';
import animation from './animation';
import menuOpen from './menu-open';
import headerScroll from './header';
import sliders from './sliders';
import number from './number';
import btnUp from './btn-up';
import goodQuantity from './good-quantity';
import footerForm from './footer-form';
import deskMenu from './desk-menu';
import filter from './filter-open';
import range from './range';
import sort from './sort';

class App {
  static init() {
    nodeListForEach();
    tel();
    animation();
    menuOpen();
    headerScroll();
    sliders();
    number();
    btnUp();
    goodQuantity();
    footerForm();
    deskMenu();
    filter();
    range();
    sort();
  }
}


App.init();
window.App = App;
