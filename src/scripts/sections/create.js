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


    /*============================================================================
      #Variables
        - Constants
        - Objects
        - Base Items
        - Window Items
        - SessionStorage
    ==============================================================================*/
    const section_id = this.$container.attr('data-section-id');
    const preload_container = $('#create__preload-images');


    let previous_data = [];

    let create = {
      slider: $('.create__slider'),
      process_steps: $('.process__item'),

      step_1: $('.create__step-1'),
      next_button_1: $('.create__step-1 button.button--next'),

      step_2: $('.create__step-2'),
      prev_button_2: $('.create__step-2 button.button--prev'),
      next_button_2: $('.create__step-2 button.button--next'),

      step_3: $('.create__step-3'),
      prev_button_3: $('.create__step-3 button.button--prev'),
      next_button_3: $('.create__step-3 button.button--next'),

      step_5: $('.create__step-4'),
      prev_button_4: $('.create__step-4 button.button--prev'),
      next_button_4: $('.create__step-4 button.button--next')
    };

    let input = {
      container: $('#frame__input')
    };

    let frame = {
      container: $('#frame'),
      image_array: $('.frame__letter')
    };


    window.onTimeout = [];

    /*============================================================================
      #Functions
        - preload_images(preload_container, theme)
        - append_image(image_container, position, letter_id)
        - resize_frame(input_data)

    ==============================================================================*/


    /*================ preload_images(preload_container, theme) ================*/
    let preload_images = function (preload_container, theme = 'all', limit = 1) {
      $.each(window.products, function (i, v) {
        let product = this;
        $.each(this.variants, function (i, v) {
          let variant = this;
          let v_img = '';
          v_img = '<img src="' + variant.featured_image.src + '" alt="' + product.title + '" ' +
            'class="preload-image" ' +
            'data-variant-id="' + variant.id + '" ' +
            'data-letter-id="' + product.handle.replace('letter-', '') + '" ' +
            'data-letter-theme="' + variant.option1 + '">';
          if (theme === 'all') {
            preload_container.append(v_img);
            if (limit !== 0 && i >= limit - 1) {
              return false;
            }
          } else if (variant.option1 === theme) {
            preload_container.append(v_img);
            if (limit !== 0 && i >= limit - 1) {
              return false;
            }
          }
        });
      });
    };

    /*================ change_letter_image(position, letter, variant_id = false) ================*/
    let change_letter_image = function (position, letter = false, variant_id = false, custom_image = false) {
      let image = '';

      switch (letter) {
        case '*':
          letter = 'symbol-star';
          break;
        case '&':
          letter = 'symbol-ampersand';
          break;
        case '#':
          letter = 'symbol-hash';
          break;
        case '!':
          letter = 'symbol-exclaim';
          break;
        case '-':
          letter = 'symbol-dash';
          break;
        case '@':
          letter = 'symbol-heart';
          break;
        case ' ':
          letter = 'symbol-star';
          break;
      }

      if (variant_id) {
        image = $('.preload-image[data-variant-id="' + variant_id + '"]').clone(false)[0];
      } else if (custom_image) {
        image = $('.preload-image[data-custom-id="' + custom_image + '"]').clone(false);
      } else if (letter) {
        image = $('.preload-image[data-letter-id="' + letter + '"]').clone(false);
      }
      $(frame.image_array[position]).empty().append(image[0]);
    };

    /*================ resize_frame(length, spacing = 0) ================*/
    let resize_frame = function (length, spacing = 0) {
      if (window.innerWidth >= 1200) {
        frame.container.css('width', 'calc(114px * ' + (length + spacing) + ' + 114px)');
      } else if (window.innerWidth < 1200) {
        frame.container.css('width', 'calc(9.5vw * ' + (length + spacing) + ' + 9.5vw)');
      }
    };

    /*================ update_process_bar(target_step) ================*/

    let update_process_bar = function (target_step) {
      create.process_steps.removeClass('process__item--active');
      $(create.process_steps[target_step - 1]).addClass('process__item--active');
    };


    /*================ change_steps(target_step) ================*/

    let change_steps = function (target_step) {
      create.step_1.attr('style', 'margin-left: ' + -(target_step -  1) * 100  + 'vw');
    };

    /*============================================================================
      # Events
        - input_container
            .on('input')
            .on('focus')
            .on('blur')
        - create_button_1
            .on('click')
    ==============================================================================*/

    /*================ input_container.on('input') ================*/
    input.container.on('input', function () {
      input.data = input.container.val().toLowerCase().split('');
      input.length = input.data.length;

      /* Resize frame once reached 3 letters, leaving space for 1 letter input */
      if (input.length > 2) {
        input.resize_length = input.length;
        resize_frame(input.resize_length, 1);
      } else {
        input.resize_length = 7;
        resize_frame(input.resize_length);
      }


      /* Remove images at positions larger than input */
      for (let i = input.length; i < 9; i++) {
        change_letter_image(i);
      }

      /* Add images if the input changed */
      for (let letter_position = 0; letter_position < 9; letter_position++) {
        if (input.data[letter_position] !== previous_data[letter_position]) {
          if (onTimeout[letter_position]) {
            return true;
          } else {
            onTimeout[letter_position] = true;
            setTimeout(function () {
              change_letter_image(letter_position, input.data[letter_position]);
              onTimeout[letter_position] = false;
            }, 600);
          }
        }
      }
      previous_data = input.data;
    });

    /*================ input.container.on('focus') ================*/
    input.container.on('focus', function () {
      resize_frame(input.resize_length, 1);
    });

    /*================ input.container.on('blur') ================*/
    input.container.on('blur', function () {
      resize_frame(input.resize_length);
    });

    /*================ Navigation.on('click') ================*/

    /*Step-1*/
    create.next_button_1.on('click', function () {
      change_steps(2);
      update_process_bar(2);
    });

    /*Step-2*/
    create.prev_button_2.on('click', function () {
      change_steps(1);
      update_process_bar(1);
    });

    create.next_button_2.on('click', function () {
      change_steps(3);
      update_process_bar(3);
    });

    /*Step-3*/
    create.prev_button_3.on('click', function () {
      change_steps(2);
      update_process_bar(2);
    });

    create.next_button_3.on('click', function () {
      change_steps(4);
      update_process_bar(4);
    });

    /*Step-4*/
    create.prev_button_4.on('click', function () {
      change_steps(3);
      update_process_bar(3);
    });
    create.next_button_4.on('click', function () {
      change_steps(4);
      update_process_bar(4);
    });


    /*================ process_steps.on('click') ================*/

    create.process_steps.on('click', function () {
      let target = $(this).attr('data-step-id');
      change_steps(target);
      update_process_bar(target);
    });


    /*============================================================================
      #Create Initialization
        - preload_images()

    ==============================================================================*/

    preload_images(preload_container, window.create_section.theme, 1);


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


