/**
 * Product Template Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Product template.
 *
 * @namespace product
 */

theme.Create = (function () {


  /**
   * Create section constructor. Runs on page load as well as Theme Editor
   * `section:load` events.
   * @param {string} container - selector for the section container DOM element
   */
  function Create(container) {
    this.$container = $(container);
    this.settings = {};
    this.namespace = '.create';

    /**
     * Collect section Variables required for cart input & information transfer
     * Required: section.id -> block.id -> block.theme -> block.input -> block.input.position -> block.input.position.letter
     *
     * */
    const sectionId = this.$container.attr('data-section-id');
    let blockIds = [];
    let blockInput = [];
    let blockTheme = [];
    let blockImgLinks = [];
    let lastValue = "";
    let modal = $("#create__modal");
    let modalContainer = $("#create__modal .modal__body");
    let modalLink = $(".modal__link");
    let letterData = [];
    let frameData = {};
    let cartData = [];
    window.updatedData = [];
    window.inProgress = false;
    window.customImages = [];
    window.onTimeout = [];
    window.customImageCount = 0;


    /**
     *  CREATE Data FOR EACH BLOCK
     *  Wrap everything below into the function below, making sure that each block runs independently
     *
     * */
    $(".create__block[data-section-id='" + sectionId + "'").each(function (i) {
      blockIds[i] = $(this).attr('data-block-id');
    });
    $.each(blockIds, function (i, v) {
      blockInput[i] = $("#create__input--" + v);
      blockTheme[i] = blockInput[i].attr('data-theme-style');
      blockImgLinks[i] = $("#create__image-wrapper--" + v + " .create__image");
      onTimeout[i] = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];


      /**
       * CUSTOM IMAGE - ADD TO PRELOAD CONTAINER & ADD TO CURRENT MODAL
       *
       *
       * */
      window.addCustomImage = function (id, img) {
        let letter = $('.modal__body').attr('data-letter-class');
        let letterPosition = $('.modal__body').attr('data-letter-position');
        preloadContainer.append('<img data-letter-class="' + letter + '" data-variant-id="' + id + '" data-theme-style="all" id="' + letter + '--custom-letter--' + customImageCount + '" class="' + letter + '" src="' + img + '" data-letter-id="' + letter + '--custom-letter--' + customImageCount + '" data-custom-letter="true" data-variant-sku="' + letter + '--custom-letter--' + customImageCount + '">');
        updateModal(letterPosition, letter, blockTheme[i]);
      };


      /**
       * Functions
       *
       * */
      let updateModal = function (letterPosition, letter, theme) {
        let preloadedImgArr = $('[id^="' + letter + '-"][data-theme-style^="' + theme + '"]:not([id*="custom-letter"]), [id^="' + letter + '-"][data-theme-style^="all"]:not([id*="custom-letter"])');
        if (!preloadedImgArr.get(0)) {
          preloadedImgArr = $('[id^="' + letter + '-"]:not([id*="custom-letter"])');
        }
        let customImgArr = $('[id*="custom-letter"]');
        modalContainer.empty().attr('data-letter-position', letterPosition).attr('data-letter-class', letter);
        $.each(preloadedImgArr, function (i, v) {
          modalContainer.append('<a class="modal__link" href="#" data-selector-id="' + $(this).attr('id') + '" data-letter-position="' + letterPosition + '" data-letter-id="' + $(this).attr('data-letter-id') + '">' + $(this).clone(false).removeAttr('id').wrap("<div />").parent().html() + '</a>');
        });
        $.each(customImgArr, function () {
          modalContainer.prepend('<a class="modal__link" href="#" data-selector-id="' + $(this).attr('id') + '" data-letter-position="' + letterPosition + '" data-letter-id="' + $(this).attr('data-letter-id') + '">' + $(this).clone(false).removeAttr('id').wrap("<div />").parent().html() + '</a>');
        });

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
      };

      let resizeFrame = function (blockId, length, spacing) {
        $('.data__frame[data-block-id="' + blockId + '"]').attr('disabled', 'disabled');
        let frameInput = $("#data__frame--" + blockId + "--" + length);
        /* Screen size above 1200px width - fixed frame size */
        if (window.innerWidth >= 1200 && length > 2) {
          frameInput.removeAttr('disabled');
          frameData = {
            id: frameInput.attr('value'),
            quantity: 1,
            properties: {
              "data-frame-size": frameInput.attr('data-frame-size'),
              "data-prototype": true,
              "data-block-id": frameInput.attr('data-block-id'),
              "data-frame-content": $("#create__input--" + blockId).val()
            }
          };
          $('figure.frame[data-block-id="' + blockId + '"').css('width', 'calc(114px * ' + (length + spacing) + ' + 114px)')
        } else if (window.innerWidth >= 1200 && length <= 2) {
          $('figure.frame[data-block-id="' + blockId + '"').css('width', 'calc(114px * ' + 7 + ' + 114px)')
        } else if (window.innerWidth < 1200 && length > 2) {
          /* Screen size below 1200px width - flexible frame size */
          frameInput.removeAttr('disabled');
          frameData = {
            id: frameInput.attr('value'),
            quantity: 1,
            properties: {
              "data-frame-size": frameInput.attr('data-frame-size'),
              "data-prototype": true,
              "data-block-id": frameInput.attr('data-block-id'),
              "data-frame-content": $("#create__input--" + blockId).val()
            }
          };
          $('figure.frame[data-block-id="' + blockId + '"').css('width', 'calc(9.5vw * ' + (length + spacing) + ' + 9.5vw)')
        } else if (window.innerWidth < 1200 && length <= 2) {
          $('figure.frame[data-block-id="' + blockId + '"').css('width', 'calc(9.5vw * ' + 7 + ' + 9.5vw)')
        }
      };

      let insertImageAt = function (i, char, container = []) {
        container.empty().removeAttr('style').removeAttr('data-custom-selection');
        let dataLetterContainer = $("#data__letter--" + blockIds[i] + "--" + (i));
        dataLetterContainer.attr('disabled', 'disabled').attr('value', '');
        $.each(products, function (k, v) {
          let title = this.title;
          if (title.replace('letter', '').replace('-', '') === char) {
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
          } else if (char === ' ' && title.includes('whitespace')) {
            replaceCharacter(i, title)
          }
        });
      };

      let replaceCharacter = function (j, title, customSelection = false) {
        let characterArrayTest = blockInput[i].val().toLowerCase().split('');
        let imgContainer = $("#create__image--" + blockIds[i] + "--" + (j));

        if (customSelection) {
          imgContainer.attr('data-custom-selection', 'true');
          imgContainer.empty().removeAttr('style');
        } else {
          imgContainer.removeAttr('data-custom-selection');
        }

        let preloadedImg = $(($('[id^="' + title + '"][data-theme-style^="' + blockTheme[i] + '"]'))[0]);
        if (!preloadedImg.get(0)) {
          preloadedImg = $(($('[id^="' + title + '"]'))[i]);
        }

        let dataLetterContainer = $("#data__letter--" + blockIds[i] + "--" + (j));
        dataLetterContainer.removeAttr('disabled').attr('value', preloadedImg.attr('data-variant-sku')); /* preloadedImg.attr('data-letter-class') + '||' + preloadedImg.attr('data-variant-id') + '||' +  */

        if (j === onTimeout[i][j]) {
          return true;
        } else {
          if (j === characterArrayTest.length - 1 && characterArrayTest.length > lastValue.length) {
            onTimeout[i][j] = j;
            setTimeout(function () {
              preloadedImg.clone(false).removeAttr('id').attr('data-letter-position', imgContainer.attr('data-letter-position')).appendTo(imgContainer);
              imgContainer.css('height', '100%');
              onTimeout[i][j] = -1;
            }, 600)
          } else {
            preloadedImg.clone(false).removeAttr('id').attr('data-letter-position', imgContainer.attr('data-letter-position')).appendTo(imgContainer);
            imgContainer.css('height', '100%');
          }
        }
      };


      let updateCart = function () {
        cartData = [];
        $.each(cart.items, function () {
          let thisItem = this;
          let prototype = false;
          $.each(thisItem.properties, function (k, v) {
            if (k === "data-prototype") {
              prototype = true;
            }
          });
          if (!prototype) {
            cartData.push(thisItem);
          }
        });
        updatedData = letterData;
        updatedData.push(frameData);
        updatedData = updatedData.concat(cartData);
        if (inProgress === false) {
          inProgress = true;
          $.post('/cart/clear.js', updatedData, function (e) {
            addToCartMultiple(updatedData);
          }, 'json');
        }
      };

      /**
       * Event Triggers
       *
       * */
      /* on IMG CLICk - open Modal to select letter images*/
      blockImgLinks[i].on('click', function (e) {
        e.preventDefault();
        let letter = $(this).children('img').attr('data-letter-class');
        let letterPosition = $(this).attr('data-letter-position');
        updateModal(letterPosition, letter, blockTheme[i]);
        /* OPEN MODAL */
        modal.modal('toggle');
      });

      /* CHANGE FRAME SIZE ON BLUR */
      blockInput[i].on('blur', function () {
        let characterArray = blockInput[i].val().toLowerCase().split('');
        resizeFrame(blockIds[i], characterArray.length, 0);

        /*Update Cart with Current Cart items & prototype frame*/
        /*if (characterArray.length > 2) {
          updateCart();
        }*/
      });


      /* CHANGE FRAME SIZE ON FOCUS */
      blockInput[i].on('focus', function () {
        let characterArray = blockInput[i].val().toLowerCase().split('');
        resizeFrame(blockIds[i], characterArray.length, 1)
      });

      /* ON TEXT INPUT - LOAD DEFAULT OR PRESELECTED IMAGE FOR EACH CHAR*/
      /* CHANGE FRAME SIZE ACCORDING TO INPUT */
      blockInput[i].on('input', function () {
        let characterArray = blockInput[i].val().toLowerCase().split('');
        resizeFrame(blockIds[i], characterArray.length, 1);

        /* LIMIT INPUT TO 9 CHARACTERS */
        if (blockInput[i].val().length > 9) {
          blockInput[i].val(blockInput[i].val().slice(0, 9));
        }

        /* IDENTIFY CHARACTER & APPEND IMAGE TO LETTER */
        for (let k = 0; k <= 9; k++) {
          let customTitle = '';
          let imgContainer = $("#create__image--" + blockIds[i] + "--" + (k));
          if (imgContainer.attr('data-custom-selection') === 'true' && blockInput[i].val().length > imgContainer.attr('data-letter-position') && characterArray[k] === lastValue[k]) {
            customTitle = $('[id^="letter"][data-letter-id="' + imgContainer.children('img').attr('data-letter-id') + '"]').attr('id');
            replaceCharacter(k, customTitle, true)
          } else {
            insertImageAt(k, characterArray[k], imgContainer);
          }
        }
        /* SAVE ENTRY FOR COMPARISON */
        lastValue = blockInput[i].val().toLowerCase().split('');

        /* Save Cart Prototype data in Data Array for addToCartMultiple() function  - SETTIMEOUT becase of slowly loading images! CSS transition as alternative option ??*/
        setTimeout(function () {
          let imgDataArray = $("#create__image-wrapper--" + blockIds[i] + " a.create__image img");
          $.each(imgDataArray, function (j, v) {
            letterData[j] = {
              id: $(this).attr('data-variant-id'),
              quantity: 1,
              properties: {
                "data-letter-position": $(this).attr('data-letter-position'),
                "data-letter-id": $(this).attr('data-letter-id'),
                "data-prototype": true,
                "data-custom-letter": $(this).attr('data-custom-letter'),
                "data-image-url": $(this).attr('src')
              }
            }
          });
          while (letterData.length > imgDataArray.length) {
            letterData.pop();
          }
        }, 650)
      });

      /**
       * UPDATE FRAME ON PAGE LOAD TO PROTOTYPE CART ITEMS
       *
       * */

      window.loadFrame = function (e) {

        $.each(cart.items, function (i, v) {
          let thisItem = this;
          let prototype = false;
          let frame = 0;
          let letter = "";
          let letterPosition = 0;
          let blockId = 0;
          let content = "";
          $.each(thisItem.properties, function (k, v) {
            if (k === "data-prototype") {
              prototype = v;
            }
            if (k === "data-letter-id") {
              letter = v;
            }
            if (k === "data-letter-position") {
              letterPosition = v;
            }
            if (k === "data-frame-size") {
              frame = parseInt(v);
            }
            if (k === "data-frame-content") {
              content = v;
            }
            if (k === "data-block-id") {
              blockId = v;
            }
          });
          if (prototype) {
            if (frame) {
              setTimeout(function () {
                $("#create__input--" + blockId).val(content);
                lastValue = content.split('');
                resizeFrame(blockIds[i], frame, 1);
              }, 500);
            }
            if (letter) {
              setTimeout(function () {
                replaceCharacter(letterPosition, letter, true)
              }, 700);
            }
          }
        });
      };
    });


    /**
     * SETUP IMAGES PRELOADED VISUALLY HIDDEN TO COPY DEFAULT IMAGES
     * Preload images based on available variants within products
     * attach images to preload container for easy access
     * */
    let preloadContainer = $('#create__image-preloader--' + sectionId);
    $.each(products, function (i, v) {
      let product_this = this;
      $.each(this.variants, function (i, v) {
        preloadContainer.append('<img data-letter-class="' + product_this.title + '" data-variant-id="' + this.id + '" data-variant-sku="' + this.sku + '" data-letter-id="' + product_this.title + "-" + i + '" data-theme-style="' + this.title.replace(/[\d\s\/]/g, "") + '" id="' + product_this.title + "-" + i + '" class="' + product_this.title + '" src="' + this.featured_image.src + '" alt="' + product_this.title + '">')
      });
    });



    /*loadFrame();*/


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


