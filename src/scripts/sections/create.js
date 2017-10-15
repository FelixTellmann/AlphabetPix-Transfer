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
    this.namespace = '.create_navigation';

    /**
     * Collect section Variables required for cart input & information transfer
     * Required: section.id -> block.id -> block.theme -> block.input -> block.input.position -> block.input.position.letter
     *
     * */

    /*============================================================================
      #Settings
        -  $.cookie.json = true;

    ==============================================================================*/

    $.cookie.json = true;

    /*============================================================================
      #Variables
        - Constants
        - Window Items

    ==============================================================================*/

    const section_id = this.$container.attr('data-section-id');
    const input_container = $('#frame__input');

    let modal = {
      container: $('#create__modal'),
      content: $('#create__modal .modal__body'),
      checkbox_array: $('.modal__theme-input input')
    };

    const create_navigation = {
      slider: $('.create__slider'),
      process_steps: $('.process__item'),

      step_1: $('.create__step-1'),
      reset_button_1: $('.create__step-1 button.button--reset'),
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

    const frame = {
      container: $('.frame'),
      image_array_1: $('.create__step-1 .frame__letter'),
      image_array_2: $('.create__step-3 .frame__letter'),
      label: $('.frame__label')
    };

    const theme = {
      item_array: $('.theme__item')
    };


    window.onTimeout = [];

    let create_data = $.cookie('create_data') || {
      input: [],
      input_array: [],
      previous_input_array: [],
      resize_length: window.create_section.default_frame_size,
      frame: window.create_section.frame,
      theme: window.create_section.theme,
      modal: {
        theme_array: [window.create_section.theme],
        current_letter: ''
      }
    };

    window.create_data = create_data;


    /*============================================================================
      #Functions
        - preload_images(preload_container, theme)
        - change_letter_image(position, letter, variant_id, custom_image)
        - resize_frame(input_data)
        - update_process_bar(target_step)
        - change_steps(target_step
        - slide_up_label(input)
        - change_theme(target_theme, custom_class)

    ==============================================================================*/


    /*================ preload_images(preload_container, theme) ================*/
    let preload_images = function (preload_container, theme = 'all', limit = 0) {
      $.each(window.products, function (i, v) {
        let product = this;
        $.each(this.variants, function (i, v) {
          let variant = this;
          let v_img = '';
          v_img = '<img src="' + variant.featured_image.src + '" alt="' + product.title + '" ' +
            'class="preload-image" ' +
            'data-variant-id="' + variant.id + '" ' +
            'data-letter-id="' + product.handle.replace('letter-', '') + '" ' +
            'data-theme-id="' + variant.option1 + '" ' +
            'data-selection-type="preload">';
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

    /*================ change_letter_image(position, letter, variant_id, custom_image) ================*/
    let change_letter_image = function (position, letter = false, theme_data, variant_id = false, custom_image = false) {

      let image = '';
      let image_2 = '';

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
          letter = 'whitespace';
          break;
      }

      if (variant_id) {
        image = $('.preload-image[data-variant-id="' + variant_id + '"]').clone(false).attr('data-selection-type', 'selected');
        image_2 = $('.preload-image[data-variant-id="' + variant_id + '"]').clone(false).attr('data-selection-type', 'selected');
      } else if (custom_image) {
        image = $('.preload-image[data-custom-id="' + custom_image + '"]').clone(false).attr('data-selection-type', 'custom');
        image_2 = $('.preload-image[data-custom-id="' + custom_image + '"]').clone(false).attr('data-selection-type', 'custom');
      } else if (letter) {
        image = $('.preload-image[data-letter-id="' + letter + '"][data-theme-id="' + theme_data + '"]').clone(false).attr('data-selection-type', 'auto');
        image_2 = $('.preload-image[data-letter-id="' + letter + '"][data-theme-id="' + theme_data + '"]').clone(false).attr('data-selection-type', 'auto');
      }

      frame.image_array_1.eq(position).empty().append(image[0]);
      frame.image_array_2.eq(position).empty().append(image_2[0]);

    };

    /*================ update_frame_images(input_data, theme_data, custom_image)  ================*/
    let update_frame_images = function (input_data, theme_data = create_data.theme, custom_image = false) {

      /* Remove images at positions larger than input */
      for (let i = input_data.length; i < 9; i++) {
        change_letter_image(i);
      }


      /* Add images if the input changed */
      for (let pos = 0; pos < 9; pos++) {
        if (input_data[pos] !== create_data.previous_input_array[pos]) {
          if (pos !== input_data.length - 1) {
            change_letter_image(pos, input_data[pos], theme_data);
          } else {
            if (onTimeout[pos]) {
              return true;
            } else {
              onTimeout[pos] = true;
              setTimeout(function () {
                change_letter_image(pos, input_data[pos], theme_data);
                onTimeout[pos] = false;
              }, 600);
            }
          }
        } else {
          change_letter_image(pos, input_data[pos], theme_data);
        }
      }
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
      if (target_step === 1 || target_step > 1 && create_data.input_array.length >= 3) {
        create_navigation.process_steps.removeClass('process__item--active');
        $(create_navigation.process_steps[target_step - 1]).addClass('process__item--active');

        if (target_step === 3) {
          frame.image_array_2.eq(0).children().addClass('tada animated');
        }
      }
    };

    /*================ change_steps(target_step) ================*/
    let change_steps = function (target_step) {
      if (target_step === 1 || target_step > 1 && create_data.input_array.length >= 3) {
        create_navigation.step_1.attr('style', 'margin-left: ' + -(target_step - 1) * 100 + 'vw');
      }
    };

    /*================ slide_up_label(input_length) ================*/
    let slide_up_label = function (input_length) {
      if (input_length > 0) {
        frame.label.attr('style', 'opacity: 0;');
      } else {
        frame.label.attr('style', '');
      }
    };

    /*================ show_reset_button(input_length) ================*/
    let show_reset_button = function (input_length) {
      if (input_length > 0) {
        create_navigation.reset_button_1.removeClass('button--hidden');
      } else {
        create_navigation.reset_button_1.addClass('button--hidden');
      }
    };

    /*================ change_theme(target_theme) ================*/
    let change_theme = function (target_theme, custom_class = 'theme__selected') {
      theme.item_array.removeClass(custom_class);
      $(target_theme).addClass(custom_class);
    };

    /*================ collect_input_cart_data(input) ================*/
    let collect_input_cart_data = function (input_array = create_data.input_array, variant_id = false, theme_data = create_data.theme, frame_data = create_data.frame) {
      create_data.input_array = input_array;
      create_data.theme = theme_data;
      create_data.modal.theme_array = [theme_data];
      create_data.frame = frame_data;

      $.each(input_array, function (i, v) {
        create_data.input[i] = {
          position: i + 1,
          letter: v
        };
        if (variant_id) {

        } else {
          setTimeout(function () {
            create_data.input[i]['variant-id'] = frame.image_array_1.eq(i).children().attr('data-variant-id');
          }, 800);
        }
      });
      for (let i = input_array.length; i < 9; i++) {
        create_data.input[i] = {};
      }

    };

    /*================ add_theme_image_to_modal(theme_data) ================*/
    let add_images_to_modal = function (letter, theme_array) {
      create_data.modal.current_letter = letter;
      /*default back to invisible*/
      modal.checkbox_array.prop('checked', false);
      $('.preload-image[data-selection-type="modal"]').attr('data-selection-type', 'preload');

      /*change images state for each theme*/
      $.each(theme_array, function (i, v) {
        if (theme_array[i] === 'all') {
          $('.preload-image[data-letter-id="' + letter + '"][data-selection-type="preload"]').attr('data-selection-type', 'modal');
        } else {
          $('.preload-image[data-letter-id="' + letter + '"][data-theme-id="' + theme_array[i] + '"][data-selection-type="preload"]').attr('data-selection-type', 'modal');
        }

        modal.checkbox_array.filter('[data-theme-id="' + theme_array[i] + '"]').prop('checked', true);
      });
    };

    /*============================================================================
      # Events
        - input_container
            .on('input')
            .on('focus')
            .on('blur')
        - create_button_1
            .on('click')

       - theme.item_array
            .on('click')
    ==============================================================================*/

    /*================ input_container.on('input') ================*/
    input_container.on('input change', function () {
      create_data.input_array = input_container.val().toLowerCase().split('');


      /* Resize frame once reached 3 letters, leaving space for 1 letter input */
      if (create_data.input_array.length > 2) {
        create_data.resize_length = create_data.input_array.length;
        resize_frame(create_data.resize_length, 1);
      } else {
        create_data.resize_length = 7;
        resize_frame(create_data.resize_length);
      }

      update_frame_images(create_data.input_array);
      slide_up_label(create_data.input_array.length);
      show_reset_button(create_data.input_array.length);
      collect_input_cart_data(create_data.input_array);

      create_data.previous_input = create_data.input_array;
    });

    /*================ input_container.on('focus') ================*/
    input_container.on('focus', function () {
      resize_frame(create_data.resize_length, 1);
    });

    /*================ input_container.on('blur') ================*/
    input_container.on('blur', function () {
      resize_frame(create_data.resize_length);
    });

    /*================ Navigation.on('click') ================*/
    /*Step-1*/
    create_navigation.next_button_1.on('click', function () {
      change_steps(2);
      update_process_bar(2);
    });
    create_navigation.reset_button_1.on('click', function () {
      input_container.val('').trigger('input');
    });

    /*Step-2*/
    create_navigation.prev_button_2.on('click', function () {
      change_steps(1);
      update_process_bar(1);
    });
    create_navigation.next_button_2.on('click', function () {
      change_steps(3);
      update_process_bar(3);
    });

    /*Step-3*/
    create_navigation.prev_button_3.on('click', function () {
      change_steps(2);
      update_process_bar(2);
    });
    create_navigation.next_button_3.on('click', function () {
      change_steps(4);
      update_process_bar(4);
    });

    /*Step-4*/
    create_navigation.prev_button_4.on('click', function () {
      change_steps(3);
      update_process_bar(3);
    });
    create_navigation.next_button_4.on('click', function () {
      change_steps(4);
      update_process_bar(4);
    });

    /*================ process_steps.on('click') ================*/
    create_navigation.process_steps.on('click', function () {
      let target = parseInt($(this).attr('data-step-id'));
      change_steps(target);
      update_process_bar(target);
    });

    /*================ theme.item_array.on('click') ================*/
    theme.item_array.on('click', function () {
      change_theme(this);
      update_frame_images(create_data.input_array, $(this).attr('data-theme-id'));
      collect_input_cart_data(create_data.input_array, false, $(this).attr('data-theme-id'));
    });

    /*================ frame.image_array_2.on('click') ================*/
    frame.image_array_2.on('click', function (e) {
      e.preventDefault();
      add_images_to_modal($(this).children().attr('data-letter-id'), [create_data.theme]);
      modal.container.modal('toggle');
    });

    modal.checkbox_array.on('click', function () {
      if ($(this).prop('checked') === true) {
        if ($(this).attr('data-theme-id') === 'all') {
          create_data.modal.theme_array = ['antique', 'classic','shoreline','frontier', 'all']
        } else {
          create_data.modal.theme_array = create_data.modal.theme_array.concat($(this).attr('data-theme-id'));
        }
        add_images_to_modal(create_data.modal.current_letter, create_data.modal.theme_array);
      } else if ($(this).prop('checked') === false) {
        if ($(this).attr('data-theme-id') === 'all') {
          create_data.modal.theme_array = [create_data.theme]
        } else {
          create_data.modal.theme_array.splice(create_data.modal.theme_array.indexOf($(this).attr('data-theme-id')), 1);
        }
        add_images_to_modal(create_data.modal.current_letter, create_data.modal.theme_array);
      }
    });
    /*============================================================================
      #Initialization
        - preload_images()

    ==============================================================================*/

    preload_images(modal.content, 'all', 0);
    $.cookie('create_data', create_data);


  }

  Create.prototype = $.extend({}, Create.prototype, {

    onBlockSelect: function (evt) {
      /*this.$container.off(this.namespace);*/
      $('.create__step-1').attr('style', 'margin-left: ' + -(2 - 1) * 100 + 'vw');
      $('.theme__item').removeClass('theme__selected');
      $('.theme__item[data-block-id="' + evt.detail.blockId + '"]').addClass('theme__selected');
    },
    onBlockDeselect: function (evt) {
      /*this.$container.off(this.namespace);*/
      $('.create__step-1').attr('style', 'margin-left: ' + -(1 - 1) * 100 + 'vw');
    }

  });

  return Create;
})();


