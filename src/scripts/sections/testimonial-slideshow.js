/**
 * Product Template Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Product template.
 *
 * @namespace product
 */

theme.TestimonialSlider = (function () {

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
  function TestimonialSlider(container) {
    this.$container = $(container);
    this.settings = {};
    this.namespace = '.slider';

    var sectionId = this.$container.attr('data-section-id');

    var TestimonialSelectors = {
      sliderContainer: $('.slider[data-section-id="' + sectionId + '"]'),
      id: sectionId,
      sliderAutoplay: $('.slider[data-section-id="' + sectionId + '"]').attr('data-autoplay'),
      sliderAutoplaySpeed: $('.slider[data-section-id="' + sectionId + '"]').attr('data-speed')
    };


    this.initTestimonialSlider(TestimonialSelectors);

    TestimonialSelectors.sliderContainer.on('swipeMove', function (event, slick, swipeLeft, positionOffset, swipeLength) {
      /*if (positionOffset == 1) {
        $('.slide__overlay.slick-center > .overlay__item').css({
          'width': swipeLength,
          'right': 0,
          'left': 'auto',
          'max-width': '100%'
        });
      } else {
        $('.slide__overlay.slick-center > .overlay__item').css({
          'width': swipeLength,
          'left': 0,
          'right': 'auto',
          'max-width': '100%'
        });
      }*/

      /*$('.overlay__item[data-section-id="' + sectionId + '"').each(function() {
        $(this).css('display','none')
      });

      $('.testimonial__wrapper[data-section-id="' + sectionId + '"').addClass('testimonial__wrapper--active');
      console.log(positionOffset);
      // left*/
    });

    /*TestimonialSelectors.sliderContainer.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      $('.slick-slide[data-slick-index="' + currentSlide + '"] > .overlay__item').attr('style','');
      console.log($('.slick-slide[data-slick-index="' + currentSlide + '"] > .overlay__item'));
      console.log(nextSlide)
      // left
    });*/
  }

  TestimonialSlider.prototype = $.extend({}, TestimonialSlider.prototype, {

    initTestimonialSlider: function (sliderContainer) {
      if (sliderContainer.sliderAutoplay == 'true') {
        sliderContainer.sliderContainer.slick({
          dots: false,
          slidesToShow: 5,
          centerMode: true,
          swipeToSlide: true,
          centerPadding: '0px',
          autoplay: true,
          autoplaySpeed: sliderContainer.sliderAutoplaySpeed,
          speed: 500,
          prevArrow: $('.slider__button.slider__prevArrow[data-section-id="' + sliderContainer.id + '"]'),
          infinite: true,
          nextArrow: $('.slider__button.slider__nextArrow[data-section-id="' + sliderContainer.id + '"]'),
          responsive: [{
            breakpoint: 2048,
            settings: {
              slidesToShow: 5
            }
          }, {
            breakpoint: 1441,
            settings: {
              slidesToShow: 3
            }
          }, {
            breakpoint: 800,
            settings: {
              slidesToShow: 1
            }
          }
          ]
        });
      } else {
        sliderContainer.sliderContainer.slick({
          dots: false,
          slidesToShow: 5,
          centerMode: true,
          swipeToSlide: true,
          centerPadding: '0px',
          pauseOnHover: false,
          speed: 500,
          prevArrow: $('.slider__button.slider__prevArrow[data-section-id="' + sliderContainer.id + '"]'),
          infinite: true,
          nextArrow: $('.slider__button.slider__nextArrow[data-section-id="' + sliderContainer.id + '"]'),
          responsive: [{
            breakpoint: 2048,
            settings: {
              slidesToShow: 5
            }
          }, {
            breakpoint: 1441,
            settings: {
              slidesToShow: 3
            }
          }, {
            breakpoint: 800,
            settings: {
              slidesToShow: 1
            }
          }
          ]
        });
      }
    },


    onBlockSelect: function (evt) {
      this.$container.off(this.namespace);

      var slideIndex = $('.slick-slide[data-block-id="' + evt.detail.blockId + '"]:not(.slick-cloned)').attr('data-slick-index');
      $('.slider').attr('data-section-id', evt.detail.sectionId).slick('slickGoTo', slideIndex)

    }

  });

  return TestimonialSlider;
})();
