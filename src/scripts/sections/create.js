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
      #Variables
        - Constants
        - Window Items

    ==============================================================================*/

    const section_id = this.$container.attr('data-section-id');
    const input_container = $('#frame__input');
    const fixed_size_frame = $('#frame_to_image');
    const facebook_link = $('.social-sharing__link--facebook');
    const download_link = $('#final-artwork__sharing--download');

    let modal = {
      container: $('#create__modal'),
      content: $('#create__modal .modal__body'),
      checkbox_array: $('.modal__theme-input input'),
      active_image_array: $('.preload-image[data-selection-type="modal"]')
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
      image_array_3: $('.create__artwork-to-image .frame__letter'),
      label: $('.frame__label'),
      background: {
        left: $('.frame__image.frame__image--left'),
        center: $('.frame__image.frame__image--center'),
        right: $('.frame__image.frame__image--right')
      }
    };

    const theme = {
      item_array: $('.theme__item'),
      frame_change: $('.theme-change__item')
    };

    const final_artwork = {
      container: $('#final-artwork'),
      word: $('#final-artwork__word'),
      format: $('#final-artwork__format'),
      size: $('#final-artwork__size'),
      frame: $('#final-artwork__frame'),
      price: $('#final-artwork__price'),
      giftwrap_input: $('#final-artwork__giftwrap'),
      gift_message_input: $('#final-artwork__message'),
      sharing_link: $('#final-artwork__link')
    };

    const cart_form = {
      form: $('#add-to-cart__form'),
      frame: $('#add-to-cart__frame'),
      properties: $('#add-to-cart__properties'),
      letter_0: $('#add-to-cart__letter-0'),
      letter_1: $('#add-to-cart__letter-1'),
      letter_2: $('#add-to-cart__letter-2'),
      letter_3: $('#add-to-cart__letter-3'),
      letter_4: $('#add-to-cart__letter-4'),
      letter_5: $('#add-to-cart__letter-5'),
      letter_6: $('#add-to-cart__letter-6'),
      letter_7: $('#add-to-cart__letter-7'),
      letter_8: $('#add-to-cart__letter-8')
    };


    window.url_values = {
      image_url: window.image_url || ''
    };
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
      url_values[decodeURIComponent(key)] = decodeURIComponent(value);
    });
    url_values.image_url = url_values.image_url.replace(/\[/gi, '/').replace(/\+/gi, '.').replace(/\]/gi, ':').replace(/\(/gi, '?').replace(/\)/gi, '=').replace(/\@/gi, '&');

    window.onTimeout = [];

    let create_data = {
      input: [],
      input_array: [],
      previous_input_array: [],
      resize_length: window.create_section.default_frame_size,
      frame: window.create_section.frame,
      frame_variant_details: product_frames[3].variants[4],
      theme: window.create_section.theme,
      artwork_image_src: '',
      prepared_sharing_url: window.create_section.prepared_sharing_url,
      modal: {
        theme_array: [window.create_section.theme],
        current_letter: '',
        position: 0,
        custom_image_array: []
      },
      frame_images: {},
      gift_wrap: false,
      gift_message: ''
    };

    $.each(window.product_frames, function (i, v) {
      let frame = window.product_frames[i];
      let handle = frame.handle;
      create_data.frame_images[handle] = {};
      $.each(frame.images, function (i, img) {
        if (frame.images[i].indexOf('left') >= 0) {
          create_data.frame_images[handle]['left'] = img;
        } else if (frame.images[i].indexOf('center') >= 0) {
          create_data.frame_images[handle]['center'] = img;
        } else if (frame.images[i].indexOf('right') >= 0) {
          create_data.frame_images[handle]['right'] = img;
        } else if (frame.images[i].indexOf('corner') >= 0) {
          create_data.frame_images[handle]['corner'] = img;
        }
      });
    });

    /*============================================================================
      #Functions
        - preload_images(preload_container, theme)
        - change_letter_image(position, letter, variant_id, custom_image)
        - resize_frame(input_data)
        - update_process_bar(target_step)
        - change_steps(target_step
        - hide_label(input)
        - change_theme(target_theme, custom_class)

    ==============================================================================*/


    /*================ preload_images(preload_container, theme) ================*/
    let preload_images = function (preload_container = modal.content, theme = 'all', limit = 0) {
      $.each(window.products, function (i, v) {
        let product = this;
        $.each(this.variants, function (i, v) {
          let variant = this;
          let v_img = '<img src="' + variant.featured_image.src + '" alt="' + product.title + '" ' +
            'class="preload-image" ' +
            'data-variant-id="' + variant.id + '" ' +
            'data-variant-sku="' + variant.sku + '" ' +
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

    /*================ preload_frame_images(preload_container, frames) ================*/
    let preload_frame_images = function (preload_container, frames) {
      $.each(frames, function (k1, v1) {
        $.each(frames[k1], function (k2, v2) {
          let frame_img = '<img src="' + v2 + '" class="preload-frame visually-hidden" alt="' + k1 + '">';
          preload_container.append(frame_img);
        });
      });
    };

    /*================ preload_custom_images(preload_container, image_file) ================*/
    let preload_custom_image = function (variant_id, image_file) {

      if (!(variant_id.indexOf('||') >= 0)) {
        variant_id = variant_id + "||" + new Date().getTime()
      }

      let v_img = '<img src="' + image_file + '" ' +
        'class="preload-image" ' +
        'data-variant-id="' + variant_id + '" ' +
        'data-variant-sku="custom_image" ' +
        'data-letter-id="custom" ' +
        'data-theme-id="all" ' +
        'data-custom-id="image_file" ' +
        'data-selection-type="preload">';

      modal.content.prepend(v_img);
      add_images_to_modal();
    };

    /*================ change_letter_image(position, letter, variant_id, custom_image) ================*/
    let change_letter_image = function (position, letter = false, theme_data, variant_id = false) {

      let image_1 = '';
      let image_2 = '';
      let image_3 = '';

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
        image_1 = $('#create__modal .preload-image[data-variant-id="' + variant_id + '"]').clone(false).attr('data-selection-type', 'selected');
        image_2 = $('#create__modal .preload-image[data-variant-id="' + variant_id + '"]').clone(false).attr('data-selection-type', 'selected');
        image_3 = $('#create__modal .preload-image[data-variant-id="' + variant_id + '"]').clone(false).attr('data-selection-type', 'selected');
      } else if (letter) {
        image_1 = $('#create__modal .preload-image[data-letter-id="' + letter + '"][data-theme-id="' + theme_data + '"]').clone(false).attr('data-selection-type', 'auto');
        image_2 = $('#create__modal .preload-image[data-letter-id="' + letter + '"][data-theme-id="' + theme_data + '"]').clone(false).attr('data-selection-type', 'auto');
        image_3 = $('#create__modal .preload-image[data-letter-id="' + letter + '"][data-theme-id="' + theme_data + '"]').clone(false).attr('data-selection-type', 'auto');
      }

      frame.image_array_1.eq(position).empty().append(image_1[0]);
      frame.image_array_2.eq(position).empty().append(image_2[0]);
      frame.image_array_3.eq(position).empty().append(image_3[0]);
    };

    /*================ update_frame_images(input_data, theme_data, custom_image)  ================*/
    let update_frame_images = function (input_data, theme_data = create_data.theme) {
      /* Remove images at positions larger than input */
      for (let i = input_data.length; i < 9; i++) {
        change_letter_image(i);
      }

      /* Add images if the input changed */
      for (let pos = 0; pos < 9; pos++) {
        let img = frame.image_array_1.eq(pos).children();
        let variant_id = false;

        if (input_data[pos] !== create_data.previous_input_array[pos]) {
          if (pos !== input_data.length - 1) {
            change_letter_image(pos, input_data[pos], theme_data, variant_id);
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
          switch (img.attr('data-selection-type')) {
            case 'auto':
              variant_id = false;
              break;
            case 'selected':
              variant_id = img.attr('data-variant-id');
              break;
          }
          change_letter_image(pos, input_data[pos], theme_data, variant_id);
        }
      }
    };

    /*================ resize_frame(length, spacing = 0) ================*/
    let resize_frame = function (length, spacing = 0) {
      if (length >= 9) {
        spacing = 0;
      }
      if (window.innerWidth >= 1200) {
        frame.container.attr('data-frame-size', (length + spacing));
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

    /*================ hide_label(input_length) ================*/
    let hide_label = function (input_length) {
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
    let collect_input_cart_data = function (input_array = create_data.input_array, variant_id = false, theme_data = create_data.theme, frame_data = create_data.frame, artwork_image_src = create_data.artwork_image_src) {
      create_data.input_array = input_array;
      create_data.theme = theme_data;
      create_data.modal.theme_array = [theme_data];
      create_data.frame = frame_data;
      create_data.artwork_image_src = artwork_image_src;
      create_data.time_id = [new Date().getTime()];
      $.each(product_frames, function (i1, v2) {
        if (product_frames[i1].handle === frame_data) {
          $.each(product_frames[i1].variants, function (i2, v2) {
            if (parseInt(product_frames[i1].variants[i2].option1) === create_data.input_array.length) {
              create_data.frame_variant_details = product_frames[i1].variants[i2];
            }
          });
        }
      });

      $.each(input_array, function (i, v) {
        create_data.input[i] = {
          position: i + 1,
          letter: v
        };
        if (variant_id[0] === i) {
          create_data.input[i]['variant_id'] = variant_id[1];
          create_data.input[i]['sku'] = $('.preload-image[data-variant-id="' + variant_id[1] + '"]').attr('data-variant-sku');
          create_data.input[i]['custom_image'] = $('.frame__letter[data-letter-position="' + i + '"] .preload-image[data-custom-id="image_file"]').attr('src') || '';
        } else {
          create_data.input[i]['variant_id'] = frame.image_array_1.eq(i).children().attr('data-variant-id');
          create_data.input[i]['sku'] = frame.image_array_1.eq(i).children().attr('data-variant-sku');
          create_data.input[i]['custom_image'] = $('.frame__letter[data-letter-position="' + i + '"] .preload-image[data-custom-id="image_file"]').attr('src') || '';
          setTimeout(function () {
            create_data.input[i]['variant_id'] = frame.image_array_1.eq(i).children().attr('data-variant-id');
            create_data.input[i]['sku'] = frame.image_array_1.eq(i).children().attr('data-variant-sku');
            create_data.input[i]['custom_image'] = $('.frame__letter[data-letter-position="' + i + '"] .preload-image[data-custom-id="image_file"]').attr('src') || '';
          }, 650);
        }
      });

      for (let i = input_array.length; i < 9; i++) {
        create_data.input[i] = {};
      }
      create_data.gift_wrap = final_artwork.giftwrap_input.prop('checked') || false;
      create_data.gift_message = final_artwork.gift_message_input.val() || '';

      window.create_data = create_data;
      window.sessionStorage.create_data = JSON.stringify(create_data);
      update_cart_form(create_data);
      create_data.previous_input_array = create_data.input_array;
    };

    /*================ add_theme_image_to_modal(theme_data) ================*/
    let add_images_to_modal = function (position = create_data.modal.position, letter = create_data.modal.current_letter, theme_array = create_data.modal.theme_array) {
      create_data.modal.current_letter = letter;
      create_data.modal.position = position;
      /*default back to invisible*/
      modal.checkbox_array.prop('checked', false);
      $('.preload-image[data-selection-type="modal"]').attr('data-selection-type', 'preload').attr('data-letter-position', '');

      /*change images state for each theme*/
      $.each(theme_array, function (i, v) {
        if (theme_array[i] === 'all') {
          $('.preload-image[data-letter-id="' + letter + '"][data-selection-type="preload"], .preload-image[data-custom-id][data-selection-type="preload"]').attr('data-selection-type', 'modal').attr('data-letter-position', position);
        } else {
          $('.preload-image[data-letter-id="' + letter + '"][data-theme-id="' + theme_array[i] + '"][data-selection-type="preload"], .preload-image[data-custom-id][data-selection-type="preload"]').attr('data-selection-type', 'modal').attr('data-letter-position', position);
        }
        modal.checkbox_array.filter('[data-theme-id="' + theme_array[i] + '"]').prop('checked', true);
      });
      modal.active_image_array = $('.preload-image[data-selection-type="modal"]');
    };

    /*================ change_frame(frame_data) ================*/
    let change_frame = function (frame_handle) {
      $.each(frame.background, function (k, v) {
        frame.background[k].attr('src', create_data.frame_images[frame_handle][k]);
      });
    };

    /*================ create_final_artwork() ================*/
    let create_final_artwork = function () {
      if (create_data.input_array.length >= 3) {
        final_artwork.container.empty();
        let img = new Image();
        domtoimage.toJpeg(fixed_size_frame[0], {quality: 0.4}).then(function (dataUrl) {
          img.src = dataUrl;
          final_artwork.container.prepend(img);
          collect_input_cart_data(create_data.input_array, false, create_data.theme, create_data.frame, img.src);
          create_data.artwork_image_blob = dataURItoBlob(img.src);
          postImageToFacebook("EAAFEyUKxbkMBADE2HTXZAZALfOpHnjM5ZAF08AUFPM34jF7wNedf2vKBzvHY8jFPyNZA7GmCZABBtTQ3M2KGBVrix0wP2FX2ulUCge6dGbjodMhGTZA7Xe7v40ABLxZC3pZAVmvikOFHDV6gCwMtRAASWVUvEc2bJxrwzvQPNHWnkEJS6SgKItB8", "Canvas to Facebook/Twitter", "image/png", create_data.artwork_image_blob, window.location.href);
          download_link.attr('download', 'My personal frame - ' + create_data.input_array.join('')).attr('href', dataUrl);
        });

        /* TODO Response Code Expires in 60 Days from 17.10.2017 - 17.12.2017 */
        /** https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id=357106174750275&client_secret=02aa10066d5dd3b0f42276ed2b5842f5&fb_exchange_token=EAAFEyUKxbkMBAOEKZBVYGfzXJiidjq4usmfUyX4TNE6rplJcTJfM04EWrXcFBKFYZAxkl6U6Ds11muGl0bq3Dj1aYzM2Q7VQXQUy69LCOtH5ZAoorlpK5rWLzlJdYfVAfyOhR6VZC1kQpIeZCjJYTd1KsWXGtVerczZAwYVIgH8kc5fKNdEx28
         *
         * */

        /* FB.getLoginStatus(function (response) {
           console.log(response);
           if (response.status === "connected") {
             postImageToFacebook(response.authResponse.accessToken, "Canvas to Facebook/Twitter", "image/png", blob, window.location.href);
           } else if (response.status === "not_authorized") {
             FB.login(function (response) {
               postImageToFacebook(response.authResponse.accessToken, "Canvas to Facebook/Twitter", "image/png", blob, window.location.href);
             }, {scope: "publish_actions"});
           } else {
             FB.login(function (response) {
               postImageToFacebook(response.authResponse.accessToken, "Canvas to Facebook/Twitter", "image/png", blob, window.location.href);
             }, {scope: "publish_actions"});
           }
         });*/
        final_artwork.word.html(create_data.input_array.join('').toUpperCase());
        final_artwork.format.html(create_data.resize_length + '-window');
        switch (create_data.resize_length) {
          case 3:
            final_artwork.size.html('13.5"h x 20"w');
            break;
          case 4:
            final_artwork.size.html('13.5"h x 24.5"w');
            break;
          case 5:
            final_artwork.size.html('13.5"h x 28.5"w');
            break;
          case 6:
            final_artwork.size.html('13.5"h x 32.75"w');
            break;
          case 7:
            final_artwork.size.html('13.5"h x 37"w');
            break;
          case 8:
            final_artwork.size.html('13.5"h x 41.25"w');
            break;
          case 9:
            final_artwork.size.html('13.5"h x 43.5"w');
            break;
        }
        final_artwork.frame.html(create_data.frame);
        final_artwork.price.html('$' + create_data.frame_variant_details.price / 100);
        let sharing_url = 'https://alphabetpix.myshopify.com/?frame=' + create_data.frame + '&word=' + create_data.input_array.join('');
        $.each(create_data.input_array, function (i) {
          if (create_data.input[i].custom_image !== '') {
            sharing_url += '&pos-' + i + '=' + create_data.input[i].variant_id + '||||' + create_data.input[i].custom_image.replace(/\//gi, '[').replace(/\./gi, '+').replace(/\:/gi, ']').replace(/\?/gi, '(').replace(/\=/gi, ')').replace(/\&/gi, '@');
          } else {
            sharing_url += '&pos-' + i + '=' + create_data.input[i].variant_id;
          }
        });

        facebook_link.attr('href', sharing_url);
      }
    };

    /*================ dataURItoBlob(dataURI) ================ Create_image_blob for facebook upload*/
    let dataURItoBlob = function (dataURI) {
      let byteString = atob(dataURI.split(',')[1]);
      let ab = new ArrayBuffer(byteString.length);
      let ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ab], {type: 'image/jpeg'});
    };

    /*================ postImageToFacebook(token, filename, mimeType, imageData, message) ================*/
    let postImageToFacebook = function (token, filename, mimeType, imageData, message) {
      let fd = new FormData();
      fd.append("access_token", token);
      fd.append("source", imageData);
      fd.append("no_story", true);

      // Upload image to facebook without story(post to feed)
      $.ajax({
        url: "https://graph.facebook.com/me/photos?access_token=" + token,
        type: "POST",
        data: fd,
        processData: false,
        contentType: false,
        cache: false,
        success: function (data) {
          // Get image source url
          FB.api(
            "/" + data.id + "?fields=images&access_token=" + token,
            function (response) {
              if (response && !response.error) {

                create_data.artwork_image_url = response.images[0].source;
                og.image.attr('content', create_data.artwork_image_url.replace('https://', 'http://'));
                og.image_secure.attr('content', create_data.artwork_image_url);
                let facebook_url = facebook_link.attr('href'); /*TODO change link data starting poing*/
                let prepared_image_url = create_data.artwork_image_url.replace(/\//gi, '[').replace(/\./gi, '+').replace(/\:/gi, ']').replace(/\?/gi, '(').replace(/\=/gi, ')').replace(/\&/gi, '@');
                create_data.prepared_sharing_url = facebook_url + '&image_url=' + prepared_image_url;
                facebook_link.attr('href', '//www.facebook.com/sharer.php?u=' + create_data.prepared_sharing_url);
                final_artwork.sharing_link.html('<a href="' + create_data.prepared_sharing_url + '" target="_blank">' + create_data.prepared_sharing_url + '</a>');
                window.sessionStorage.create_data = JSON.stringify(create_data);
                // Create facebook post using image
                FB.api(
                  "/me/photos",
                  "POST",
                  {
                    "picture": response.images[0].source,
                    "link": window.location.href,
                    "name": 'Look at the cute panda!'
                  },
                  function (response) {
                    if (response && !response.error) {
                      /* handle the result */
                    }
                  }
                );
              }
            }
          );
        },
        error: function (shr, status, data) {
          console.log("error " + data + " Status " + shr.status);
        },
        complete: function (data) {
          //console.log('Post to facebook Complete');
        }
      });
    };

    /*================   preload_artwork(url_values); ================*/
    let preload_artwork = function (url_values) {
      if (Object.keys(url_values).length > 1 && 'frame' in url_values && 'word' in url_values) {
        change_frame(url_values.frame);
        input_container.val(url_values.word);
        resize_frame(url_values.word.length);
        hide_label(url_values.word.length);
        create_data.resize_length = url_values.word.length;
        for (let i = 0; i < url_values.word.length; i++) {
          if (url_values['pos-' + i].indexOf('http') >= 0) {
            let variant_id = url_values['pos-' + i].split('||||')[0];
            let custom_image_url = url_values['pos-' + i].split('||||')[1];
            console.log(variant_id);
            custom_image_url = custom_image_url.replace(/\[/gi, '/').replace(/\+/gi, '.').replace(/\]/gi, ':').replace(/\(/gi, '?').replace(/\)/gi, '=').replace(/\@/gi, '&');
            preload_custom_image(variant_id, custom_image_url);
            change_letter_image(i, url_values.word.charAt(i), url_values.frame, variant_id);
            collect_input_cart_data(url_values.word.split(''), [i, url_values['pos-' + i]], url_values.frame, url_values.frame, url_values.image_url);
          } else {
            change_letter_image(i, url_values.word.charAt(i), url_values.frame, url_values['pos-' + i]);
            collect_input_cart_data(url_values.word.split(''), [i, url_values['pos-' + i]], url_values.frame, url_values.frame, url_values.image_url);
          }
        }
      }
    };
    /*================ update_cart_form(create_data) ================*/

    let update_cart_form = function (create_data) {
      cart_form.frame.attr('value', create_data.frame_variant_details.id).attr('disabled', 'disabled');
      cart_form.properties.attr('value', create_data.time_id[0]);
      for (let i = 0; i < 9; i++) {
        if ('variant_id' in create_data.input[i]) {
          cart_form['letter_' + i].attr('value', create_data.input[i].variant_id).removeAttr('disabled');
        } else {
          cart_form['letter_' + i].attr('value', '').attr('disabled', 'disabled');
        }
      }
    };

    /*================ cart_submit(create_data) ================*/
    let cart_submit = function (create_data) {
      let letter_sku_string = '';
      $.each(create_data.input_array, function (i) {
        create_data.input[i].sku = create_data.input[i].sku || '';
        letter_sku_string = letter_sku_string.concat((i + 1) + ': ' + create_data.input[i].sku.replace('horeline', '').replace('rontier', '').replace('lassic', '').replace('ntique', '').toUpperCase() + ' ');
      });

      let cart_data_array = [];
      create_data.properties = {
        'id': create_data.time_id,
        'word': create_data.input_array.join(''),
        'images': letter_sku_string,
        'letter_data': create_data.input,
        'artwork': {image: create_data.artwork_image_src}
      };

      if (create_data.gift_wrap) {
        create_data.properties['gift_wrap'] = 'Yes';
      }
      if (create_data.gift_message !== '') {
        create_data.properties['gift_message'] = create_data.gift_message;
      }

      cart_data_array = [
        {
          quantity: 1,
          id: create_data.frame_variant_details.id,
          image: create_data.artwork_image_src,
          properties: create_data.properties
        }
      ];
      $.each(create_data.input_array, function (i) {
        if (create_data.input[i].custom_image !== '') {
          cart_data_array.unshift({
            quantity: 1,
            id: create_data.input[i].variant_id.split('||')[0],
            properties: {
              'id': create_data.time_id,
              'position': i + 1,
              'custom_image': create_data.input[i].custom_image
            }
          });
        } else {
          cart_data_array.unshift({
            quantity: 1,
            id: create_data.input[i].variant_id,
            properties: {
              'id': create_data.time_id,
              'position': i + 1
            }
          });
        }
      });

      cart_data_array.push();
      addToCartMultiple(cart_data_array);
    };

    /*============================================================================
      # Events
        - input_container
            .on('input')
            .on('focus')
            .on('blur')
        - create_button_1
            .on('click')

       - theme
          .item_array
            .on('click')
       - frame
          .image_array_2
              .on('click')
       - modal
          .checkbox_array
              .on('click')
          .active_image_array
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
      hide_label(create_data.input_array.length);
      show_reset_button(create_data.input_array.length);
      collect_input_cart_data(create_data.input_array);
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
      create_final_artwork();
    });

    /*Step-4*/
    create_navigation.prev_button_4.on('click', function () {
      change_steps(3);
      update_process_bar(3);
    });
    create_navigation.next_button_4.on('click', function () {
      $(this).addClass('btn--loader-active').attr('style','color: transparent !important;');
      cart_submit(create_data);
    });

    /*================ process_steps.on('click') ================*/
    create_navigation.process_steps.on('click', function () {
      let target = parseInt($(this).attr('data-step-id'));
      change_steps(target);
      update_process_bar(target);
      if (target === 4) {
        create_final_artwork();
      }
    });

    /*================ theme.item_array.on('click') ================*/
    theme.item_array.on('click', function () {
      let theme_id = $(this).attr('data-theme-id');
      change_theme(this);
      update_frame_images(create_data.input_array, theme_id);
      collect_input_cart_data(create_data.input_array, false, theme_id, theme_id);
      change_frame(theme_id);
      theme.frame_change.removeClass('theme-change__item--active');
      $('.theme-change__item[data-theme-id="' + theme_id + '"]').addClass('theme-change__item--active');
    });

    /*================ theme.frame_change.on('click') ================*/
    theme.frame_change.on('click', function (e) {
      let theme_id = $(this).attr('data-theme-id');
      e.preventDefault();
      theme.frame_change.removeClass('theme-change__item--active');
      collect_input_cart_data(create_data.input_array, false, create_data.theme, theme_id);
      change_frame(theme_id);
      $(this).addClass('theme-change__item--active');
    });

    /*================ frame.image_array_2.on('click') ================*/
    frame.image_array_2.on('click', function (e) {
      e.preventDefault();
      add_images_to_modal($(this).attr('data-letter-position'), $(this).children().attr('data-letter-id'), [create_data.theme]);
      modal.container.modal('toggle');
    });

    /*================ modal.checkbox_array.on('click') ================*/
    modal.checkbox_array.on('click', function () {
      if ($(this).prop('checked') === true) {
        if ($(this).attr('data-theme-id') === 'all') {
          create_data.modal.theme_array = ['antique', 'classic', 'shoreline', 'frontier', 'all'];
        } else {
          create_data.modal.theme_array = create_data.modal.theme_array.concat($(this).attr('data-theme-id'));
        }
        add_images_to_modal(create_data.modal.position, create_data.modal.current_letter, create_data.modal.theme_array);
      } else if ($(this).prop('checked') === false) {
        if ($(this).attr('data-theme-id') === 'all') {
          create_data.modal.theme_array = [create_data.theme];
        } else {
          create_data.modal.theme_array.splice(create_data.modal.theme_array.indexOf($(this).attr('data-theme-id')), 1);
        }
        add_images_to_modal(create_data.modal.position, create_data.modal.current_letter, create_data.modal.theme_array);
      }
    });

    /*================ modal.active_image_array.on('click') ================*/
    modal.content.on('click', modal.active_image_array, function (e) {

      let img = $(e.target);
      let position = img.attr('data-letter-position');
      let theme_data = img.attr('data-theme-id');
      let letter = img.attr('data-letter-id');
      let variant_id = img.attr('data-variant-id');

      change_letter_image(position, letter, theme_data, variant_id);
      collect_input_cart_data(create_data.input_array, [position, variant_id]);

      modal.container.modal('toggle');
    });

    /*================final_artwork.giftwrap_input.on('change input') ================*/
    final_artwork.giftwrap_input.on('change input', function (e) {
      collect_input_cart_data();
    });

    /*================ ================*/
    final_artwork.gift_message_input.on('change input', function (e) {
      collect_input_cart_data();
    });

    /*============================================================================
      #Initialization
        - preload_images()

    ==============================================================================*/

    preload_images(modal.content, 'all', 0);
    preload_frame_images(modal.content, create_data.frame_images);
    window.create_data = create_data;
    window.sessionStorage.create_data = JSON.stringify(create_data);
    window.preload_custom_image = preload_custom_image;
    preload_artwork(window.url_values);
    change_theme($('.theme__item[data-theme-id="' + create_data.theme + '"]'));
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
})
();


