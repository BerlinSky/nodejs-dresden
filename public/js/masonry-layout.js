import $ from 'jquery';
var imagesLoaded = require('imagesloaded');

var Masonry = require('masonry-layout');
var jQueryBridget = require('jquery-bridget');

jQueryBridget( 'masonry', Masonry, $ );
imagesLoaded.makeJQueryPlugin( $ );

export function paintMasonryLayout() {
  const $container = $('.js-imageGridContainer');
  const griderSizer = $('.js-gridSizer');

  if ($container) {

    const gutterSize = parseInt(griderSizer.attr('data-grid-gutter')) || 0;

    const $imageContainer = $container.masonry({
        itemSelector: '.js-grid',
        percentPosition: true,
        columnWidth: '.js-gridSizer',
        gutter: gutterSize
      });

    $imageContainer.imagesLoaded().progress( function() {
      $imageContainer.masonry('layout');
    });
  }
}
