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
    let modal = $("#create__modal");
    let modalContainer = $("#create__modal .modal__body");
    let modalLink = $(".modal__link");
    window.customImages = [];
    window.onTimeout = [];


    /* SETUP IMAGES PRELOADED VISUALLY HIDDEN TO COPY DEFAULT IMAGES */
    let preloadContainer = $('#create__image-preloader--' + sectionId);
    $.each(products, function (i, v) {
      let product_this = this;
      $.each(this.variants, function (i, v) {
        preloadContainer.append('<img data-letter-class="' + product_this.title + '" data-variant-id="' + this.id + '" data-letter-id="' + product_this.title.replace(" ", "-") + '-' + this.title.replace(" / ", "-") + '" data-theme-style="' + this.title.replace(/[\d\s\/]/g, "") + '" id="' + product_this.title + "-" + i + '" class="' + product_this.title + '" src="' + this.featured_image.src + '" alt="' + product_this.title + '">')
      });
    });

    /* CUSTOM IMAGE - ADD TO PRELOAD CONTAINER & ADD TO CURRENT MODAL*/ /* TODO ALSO MAKE IMAGE AVAILABLE IN EACH MODAL */
    window.addCustomImage = function(id, img) {
      let letter = $('.modal__body').attr('data-letter-class');
      let letterPosition = $('.modal__body').attr('data-letter-position');
      preloadContainer.append('<img data-letter-class="' + letter + '" data-variant-id="' + id + '" data-theme-style="all" id="custom_image-' + letter + '" class="' + letter + '" src="' + img + '">');
      updateModal(letterPosition, letter, blockTheme[0]);
    };

    /* CREATE Data FOR EACH BLOCK*/
    $(".create__block[data-section-id='" + sectionId + "'").each(function (i) {
      blockIds[i] = $(this).attr('data-block-id');
    });
    $.each(blockIds, function (i, v) {
      blockInput[i] = $("#create__input--" + v);
      blockTheme[i] = blockInput[i].attr('data-theme-style');
      blockImgLinks[i] = $("#create__image-wrapper--" + v + " .create__image");
      onTimeout[i] = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
    });

    /* LOAD IMAGES INTO MODAL CONTAINER*/
    let updateModal = function (letterPosition, letter, theme) {
      let preloadedImgArr = $('[id^="' + letter + '-"][data-theme-style^="' + theme + '"], [id^="' + letter + '-"][data-theme-style^="all"]');
      if (!preloadedImgArr.get(0)) {
        preloadedImgArr = $('[id^="' + letter + '-"]');
      }
      let customImgArr = $('[id^="custom_image-"]');
      modalContainer.empty().attr('data-letter-position', letterPosition).attr('data-letter-class', letter);
      $.each(preloadedImgArr, function (i, v) {
        modalContainer.append('<a class="modal__link" href="#" data-selector-id="' + $(this).attr('id') + '" data-letter-position="' + letterPosition + '" data-letter-id="' + $(this).attr('data-letter-id') + '">' + $(this).clone(false).removeAttr('id').wrap("<div />").parent().html() + '</a>');
      });
      $.each(customImgArr, function () {
        modalContainer.prepend('<a class="modal__link" href="#" data-selector-id="' + $(this).attr('id') + '" data-letter-position="' + letterPosition + '" data-letter-id="' + $(this).attr('data-letter-id') + '">' + $(this).clone(false).removeAttr('id').wrap("<div />").parent().html() + '</a>');
      });
    };

    /* on IMG CLICk - open Modal to select letter images*/
    blockImgLinks[0].on('click', function (e) {
      e.preventDefault();
      let letter = $(this).children('img').attr('data-letter-class');
      let letterPosition = $(this).attr('data-letter-position');
      updateModal(letterPosition, letter, blockTheme[0]);
      /* OPEN MODAL */
      modal.modal('toggle');
      /* on IMG in MODAL CLICK - Select image and add to image wrapper at right position */
      modalLink = $(".modal__link");
      modalLink.on('click', function (e) {
        e.preventDefault();
        let selectorId = $(this).attr('data-selector-id');
        let letterPosition = $(this).attr('data-letter-position');
        replaceCharacter(letterPosition, selectorId, true);
        modal.modal('toggle');
        modalContainer.empty().removeAttr('data-letter-position').removeAttr('data-letter-class');
      });
    });


    /*TODO add spacing options for mobile etc screen sizes using vw */
    let resizeFrame = function(blockId, length, spacing) {
      $('.data__frame[data-block-id="' + blockId+'"]').attr('disabled','disabled');
      if (window.innerWidth >= 1200 && length > 2) {
        $("#data__frame--" + blockId + "--" + length).removeAttr('disabled');
        $('figure.frame[data-block-id="' + blockId + '"').css('width','calc(114px * ' + (length + spacing) + ' + 114px)')
      } else if (window.innerWidth >= 1200 && length <= 2) {
        $('figure.frame[data-block-id="' + blockId + '"').css('width','calc(114px * ' + 7 + ' + 114px)')
      }
    };

    /* CHANGE FRAME SIZE ACCORDING TO INPUT */
    blockInput[0].on('blur', function () {
      let characterArray = blockInput[0].val().toLowerCase().split('');
      resizeFrame(blockIds[0], characterArray.length, 0)
    });

    blockInput[0].on('focus', function () {
      let characterArray = blockInput[0].val().toLowerCase().split('');
      resizeFrame(blockIds[0], characterArray.length, 1)
    });

    /* ON TEXT INPUT - LOAD DEFAULT OR PRESELECTED IMAGE FOR EACH CHAR*/
    blockInput[0].on('input', function () {
      let characterArray = blockInput[0].val().toLowerCase().split('');

      /* CHANGE FRAME SIZE ACCORDING TO INPUT */
      resizeFrame(blockIds[0], characterArray.length, 1);

      /* LIMIT INPUT TO 9 CHARACTERS */
      if (blockInput[0].val().length > 9) {
        blockInput[0].val(blockInput[0].val().slice(0, 9));
      }

      /* IDENTIFY CHARACTER & APPEND IMAGE TO LETTER */
      for (let i = 0; i <= 9; i++) {
        let customTitle = '';
        let imgContainer = $("#create__image--" + blockIds[0] + "--" + (i));
        if (imgContainer.attr('data-custom-selection') === 'true' && blockInput[0].val().length > imgContainer.attr('data-letter-position') && characterArray[i] === lastValue[i]) {
          customTitle = $('[id^="letter"][data-letter-id="' + imgContainer.children('img').attr('data-letter-id') + '"]').attr('id');
          replaceCharacter(i, customTitle, true)
        } else {
          insertImageAt(i, characterArray[i], imgContainer);
        }
      }
      /* SAVE ENTRY FOR COMPARISON */
      lastValue = blockInput[0].val().toLowerCase().split('');
    });




    let insertImageAt = function (i, char, container = []) {
      container.empty().removeAttr('style').removeAttr('data-custom-selection');
      let dataLetterContainer = $("#data__letter--" + blockIds[0] + "--" + (i));
      dataLetterContainer.attr('disabled','disabled').attr('value','');
      $.each(products, function (k, v) {
        let title = this.title;
        if (char === ' ') {
          replaceCharacter(i, 'whitespace')
        } else if (title.replace('letter', '').replace('-', '') === char) {
          replaceCharacter(i, title);
        } else if (char === '*' && title.includes('star')) {
          replaceCharacter(i, title)
        } else if (char === '&' && title.includes('ampersand')) {
          replaceCharacter(i, title)
        } else if (char === '#' && title.includes('hash')) {
          replaceCharacter(i, title)
        } else if (char === '!' && title.includes('exclaim')) {
          replaceCharacter(i, title)
        } else if (char === '-' && title.includes('dash')) {
          replaceCharacter(i, title)
        } else if (char === '@' && title.includes('heart')) {
          replaceCharacter(i, title)
        }
      });
    };

    let replaceCharacter = function (i, title, customSelection = false) {
      let characterArrayTest = blockInput[0].val().toLowerCase().split('');
      let imgContainer = $("#create__image--" + blockIds[0] + "--" + (i));

      if (customSelection) {
        imgContainer.attr('data-custom-selection', 'true');
        imgContainer.empty().removeAttr('style');
      } else {
        imgContainer.removeAttr('data-custom-selection');
      }

      let preloadedImg = $(($('[id^="' + title + '"][data-theme-style^="' + blockTheme[0] + '"]'))[0]);
      if (!preloadedImg.get(0)) {
        preloadedImg = $(($('[id^="' + title + '"]'))[0]);
      }

      let dataLetterContainer = $("#data__letter--" + blockIds[0] + "--" + (i));
      dataLetterContainer.removeAttr('disabled').attr('value', preloadedImg.attr('data-variant-id'));

      if (i === onTimeout[0][i]) {
        return true;
      } else {
        if (i === characterArrayTest.length - 1 && characterArrayTest.length > lastValue.length) {
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


