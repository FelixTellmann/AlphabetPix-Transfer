/**
 * Product Template Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Product template.
 *
 * @namespace product
 */

theme.Create = (function () {

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
  function Create(container) {
    this.$container = $(container);
    this.settings = {};
    this.namespace = '.create';

    const sectionId = this.$container.attr('data-section-id');
    let blockIds = [];
    let blockInput = [];
    let blockTheme = [];
    let blockImgLinks = [];
    let lastValue = "";
    window.onTimeout = [];

    /* SETUP IMAGES PRELOADED VISUALLY HIDDEN TO COPY DEFAULT IMAGES */
    let preloadContainer = $('#create__image-preloader--' + sectionId);
    $.each(products, function (i, v) {
      let product_this = this;
      $.each(this.variants, function (i, v) {
        preloadContainer.append('<img data-letter-class="' + product_this.title + '" data-letter-id="' + product_this.title.replace(" ", "-") + '-' + this.title.replace(" / ", "-") + '" data-theme-style="' + this.title.replace(/[\d\s\/]/g, "") + '" id="' + product_this.title + "-" + i + '" class="' + product_this.title + '" src="' + this.featured_image.src + '" alt="' + product_this.title + '">')
      });
    });

    $(".create__block[data-section-id='" + sectionId + "'").each(function (i) {
      blockIds[i] = $(this).attr('data-block-id');
    });

    $.each(blockIds, function (i, v) {
      blockInput[i] = $("#create__input--" + v);
      blockTheme[i] = blockInput[i].attr('data-theme-style');
      blockImgLinks[i] = $("#create__image-wrapper--" + v + " .create__image");
    });

    blockImgLinks[0].on('click', function (e) {
      e.preventDefault();
      let letter = $(this).children('img').attr('data-letter-class');
      let modal = $("#create__modal");
      let modalContainer = $("#create__modal .modal__body");
      let preloadedImgArr = $('[id^="' + letter + '"][data-theme-style^="' + blockTheme[0] + '"]');
      if (!preloadedImgArr.get(0)) {
        preloadedImgArr = $('[id^="' + letter + '"]');
      }

      modalContainer.empty();
      $.each(preloadedImgArr, function (i, v) {
        modalContainer.append("<a class='modal__link' href='#' data-selector-id='"+ $(this).attr('id') +"' data-letter-id='" + $(this).attr('data-letter-id') +"'>" + $(this).clone(false).removeAttr('id').wrap("<div />").parent().html() + "</a>");
      });
      modal.modal('toggle');
    });


    /* BLOCK OTHER CHARACTERS */
    /*blockInput[0].on('keypress', function (event) {
      var regex = new RegExp("^[a-zA-Z0-9\s\@\#\&\*\-]+$");
      var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
      if (!regex.test(key)) {
        event.preventDefault();
        return false;
      }
    });*/

    onTimeout[0] = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
    blockInput[0].on('input', function () {
      /* LIMIT INPUT TO 9 CHARACTERS */
      if (blockInput[0].val().length > 9) {
        blockInput[0].val(blockInput[0].val().slice(0, 9));
        console.log('Too many letters');
        /* TODO Change to USER MESSAGE (Not Console log)*/
      }

      let characterArray = blockInput[0].val().toLowerCase().split('');
      let replaceCharacter = function (i, title) {
        let imgContainer = $("#create__image--" + blockIds[0] + "--" + (i));
        let preloadedImg = $(($('[id^="' + title + '"][data-theme-style^="' + blockTheme[0] + '"]'))[0]);
        if (!preloadedImg.get(0)) {
          preloadedImg = $(($('[id^="' + title + '"]'))[0]);
        }
        if (i === onTimeout[0][i]) {
          return true;
        } else {
          if (i === characterArray.length - 1 && characterArray.length > lastValue.split('').length) {
            onTimeout[0][i] = i;
            setTimeout(function () {
              preloadedImg.clone(false).removeAttr('id').appendTo(imgContainer);
              imgContainer.css('height', '100%');
              onTimeout[0][i] = -1;
            }, 600)
          } else {
            preloadedImg.clone(false).removeAttr('id').appendTo(imgContainer);
            imgContainer.css('height', '100%');
          }
        }
      };

      /* IDENTIFY CHARACTER & APPEND IMAGE TO LETTER */
      for (let i = 0; i <= 9; i++) {
        $("#create__image--" + blockIds[0] + "--" + (i)).empty().removeAttr('style');
        $.each(products, function (k, v) {
          let title = this.title;
          if (characterArray[i] === ' ') {
            replaceCharacter(i, 'whitespace')
          } else if (title.replace('letter', '').replace('-', '') === characterArray[i]) {
            replaceCharacter(i, title);
          } else if (characterArray[i] === '*' && title.includes('star')) {
            replaceCharacter(i, title)
          } else if (characterArray[i] === '&' && title.includes('ampersand')) {
            replaceCharacter(i, title)
          } else if (characterArray[i] === '#' && title.includes('hash')) {
            replaceCharacter(i, title)
          } else if (characterArray[i] === '!' && title.includes('exclaim')) {
            replaceCharacter(i, title)
          } else if (characterArray[i] === '-' && title.includes('dash')) {
            replaceCharacter(i, title)
          } else if (characterArray[i] === '@' && title.includes('heart')) {
            replaceCharacter(i, title)
          }
        });
      }


      /*
     });*/


      /* COMMENTED OUT FOR MULTI LETTER ENTRIES - VIA COPY / PASTE*/
      /*let test = blockInput[0].val().replace(lastValue,'');
      if(test.length > 1) {

      }*/

      lastValue = blockInput[0].val();
    });


    /* this.initSlider(portfolioSelectors);*/
  }

  Create.prototype = $.extend({}, Create.prototype, {
    /*
        initSlider: function (sliderContainer) {

        },


        onBlockSelect: function (evt) {
          this.$container.off(this.namespace);
          var slideIndex = $('.slick-slide[data-block-id="' + evt.detail.blockId + '"]:not(.slick-cloned)').attr('data-slick-index');
          $('.slider').attr('data-section-id', evt.detail.sectionId).slick('slickGoTo', slideIndex)
        }*/

  });

  return Create;
})();


