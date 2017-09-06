/**
 * Product Template Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Product template.
 *
 * @namespace product
 */

theme.Slider = (function () {

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

  /**
   * Product section constructor. Runs on page load as well as Theme Editor
   * `section:load` events.
   * @param {string} container - selector for the section container DOM element
   */
  function Slider(container) {
    this.$container = $(container);
    this.settings = {};
    this.namespace = '.slider';

    var sectionId = this.$container.attr('data-section-id');

    var portfolioSelectors = {
      sliderContainer: $('.slider[data-section-id="' + sectionId + '"')
    };




    this.initSlider(portfolioSelectors);
  }

  Slider.prototype = $.extend({}, Slider.prototype, {

    initSlider: function (sliderContainer) {
      sliderContainer.sliderContainer.slick({
        dots: true,
        infinite: true,
        speed: 500,
        prevArrow: false,
        nextArrow: false
      });
    },


    onBlockSelect: function (evt) {
      this.$container.off(this.namespace);

      var slideIndex = $('.slick-slide[data-block-id="' + evt.detail.blockId + '"]:not(.slick-cloned)').attr('data-slick-index');
      $('.slider').attr('data-section-id', evt.detail.sectionId).slick('slickGoTo', slideIndex)

    }

  });

  return Slider;
})();


