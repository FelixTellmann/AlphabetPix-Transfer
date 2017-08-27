/**
 * Product Template Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Product template.
 *
 * @namespace product
 */

theme.GridImages = (function () {

  /*var selectors = {
   addToCart: '[data-add-to-cart]',
   addToCartText: '[data-add-to-cart-text]',
   comparePrice: '[data-compare-price]',
   comparePriceText: '[data-compare-text]',
   originalSelectorId: '[data-product-select]',
   priceWrapper: '[data-price-wrapper]',
   productFeaturedImage: '[data-product-featured-image]',
   productJson: '[data-product-json]',
   productPrice: '[data-product-price]',
   productThumbs: '[data-product-single-thumbnail]',
   singleOptionSelector: '[data-single-option-selector]'
   };*/

  console.log('test');

  /**
   * Product section constructor. Runs on page load as well as Theme Editor
   * `section:load` events.
   * @param {string} container - selector for the section container DOM element
   */
  function GridImages(container) {
    this.$container = $(container);
    this.settings = {};
    this.namespace = '.grid-images';

    var sectionId = this.$container.attr('data-section-id');
  }

  GridImages.prototype = $.extend({}, GridImages.prototype, {


    onBlockSelect: function (evt) {
      this.$container.off(this.namespace);

      var selectedBlock = $('[data-block-id="' + evt.detail.blockId + '"]');
      selectedBlock.css({
        'border': '3px solid red',
        'transform': 'scale(1.1)',
        'z-index': '9'
      });
    },

    onBlockDeselect: function (evt) {
      this.$container.off(this.namespace);

      var selectedBlock = $('[data-block-id="' + evt.detail.blockId + '"]');
      selectedBlock.css({
        'border': '',
        'transform': '',
        'z-index': ''
      });
    }

  });

  return GridImages;
})();
