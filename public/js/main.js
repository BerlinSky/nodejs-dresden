import $ from 'jquery';

import { initMobileMenu } from './mobile-menu';
import { paintMasonryLayout } from './masonry-layout';
import { initFancyInputBox } from './fancy-input';
import { initInfiniteScroll } from './infinite-scroll';
import { formValidationEvents } from './form/form-events';
import { initStateDropDownBox } from './state-dropdown';

$(function () {
  initMobileMenu();
  paintMasonryLayout();
  initFancyInputBox();
  initInfiniteScroll();
  initStateDropDownBox();
  formValidationEvents();
});