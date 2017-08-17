/*


      #############
    ##            *##
   #        %      **#
  #        %%%    ***#
 #       %%F%D%%   ****#
#          %%%    *****#
#   ###     %     ###***#
#  # ####       #### #**#
#  #     #     #     #**#
#   #####  # #  #####***#
#         #   #  *******#
 ### #           **# ###
     # - - - - - - #
      | | | | | | |

     freakdesign.com
      CUSTOM FIELDS

*/
(function () {
  if ("undefined" != typeof Shopify) if ("undefined" != typeof jQuery) if ($("html.freakdesign_custom_fields").length) alert("Already loaded the tool?"); else {
    var t = document, x = t.URL;
    t.documentElement.className += " freakdesign_custom_fields";
    if (1 < x.indexOf("myshopify.com/admin")) {
      var a = function () {
        var t = {
          no_fields: "No custom fields found",
          error_get_metafields: "Error getting product metafields",
          loaded: "Custom Field tool loaded"
        }, q = {
          debug: !1,
          alpha: !1,
          omega: !1,
          wait: 1E3,
          showHelp: !0,
          whiteLabel: !1,
          lockToAlpha: !1,
          settings: !1,
          products: {},
          collections: {},
          linklists: {},
          pages: {},
          namespace: "custom_fields",
          namespace_new: "c_f",
          whitelist: [],
          key_articles: "[a]",
          key_collections: "[c]",
          key_customers: "[cu]",
          key_pages: "[g]",
          key_orders: "[o]",
          key_products: "[p]",
          key_variants: "[v]",
          marker_collection: "[_c]",
          marker_file: "[_f]",
          marker_int: "[_i]",
          marker_page: "[_g]",
          marker_product: "[_p]",
          marker_textarea: "[_t]",
          marker_linklist: "[_l]",
          marker_date: "[_d]",
          marker_number: "[_n]",
          marker_color: "[_co]",
          help_file: "//freakdesign-us.s3.amazonaws.com/shopify/custom_fields/freakdesign-custom-fields-for-shopify-guide.pdf",
          css: "//freakdesign-us.s3.amazonaws.com/shopify/custom_fields/s/freakdesign_custom_fields.css"
        };
        return {
          data: function (a, c) {
            if ("undefined" === typeof c) return q[a];
            q[a] = c
          }, translate: function (a) {
            return t[a]
          }, setting: function (a) {
            return "undefined" !== typeof a ? q.settings[a] : q.settings
          }, notice: function (a, c) {
            c ? Shopify.Flash.error(a) : Shopify.Flash.notice(a)
          }, escape_html: function (a) {
            var b = document.createElement("div");
            b.appendChild(document.createTextNode(a));
            return b.innerHTML
          }, unescape_html: function (a) {
            if (void 0 ===
              a) return "";
            var b = document.createElement("div");
            b.innerHTML = a;
            return (a = b.childNodes[0]) ? a.nodeValue : ""
          }, fd_modal: function (b, c, d, g) {
            var f = $("#fdmodal");
            if (b) {
              f.length && f.remove();
              b = $('<div id="fdmodal" class="modalWindow"><div class="main content"><header></header></div></div>');
              d && b.find("header").html("<h2>" + d + "</h2>");
              c && (c = $("<div/>", {}).append(c), b.find("div.main.content").append(c));
              if (g) g = $('<a href="#" class="close-modal">&times;</a>'), g.on("click", function () {
                a.fd_modal(!1);
                return !1
              }), b.find("header").prepend(g).end().fadeIn();
              else b.fadeIn().on("click", function () {
                a.fd_modal(!1)
              });
              $("body").append(b)
            } else f.off("click").remove()
          }, load_css: function () {
            if (0 === $("#css_custom_fields").length) {
              var b = document.createElement("link");
              b.type = "text/css";
              b.rel = "stylesheet";
              b.id = "css_custom_fields";
              b.href = a.data("css");
              document.getElementsByTagName("head")[0].appendChild(b)
            }
          }, api: function (b) {
            if ("object" === typeof b && "undefined" !== typeof b.url) {
              "function" !== typeof b.callback && (b.callback = !1);
              var c = "GET", d = 250;
              "undefined" !== typeof b.type &&
              (c = b.type);
              "undefined" !== typeof b.limit && (d = b.limit);
              b = b.url.split("?")[0] + "?limit=" + d;
              p && $.ajax({
                type: c, url: b, dataType: "json", success: function (b) {
                  callback && callback(b);
                  q && a.data(q, b)
                }, error: function () {
                  a.notice("Error getting JSON", !0)
                }
              })
            }
          }, custom_fields_preload: function (b) {
            $.ajax({
              type: "GET",
              url: "/admin/" + ("undefined" !== typeof b ? b : "collections") + ".json?limit=250",
              dataType: "json",
              success: function (b) {
                a.data("collections", b);
                a.setup_custom_fields(a.data("alpha"))
              },
              error: function () {
                a.notice("Failed to preload required data",
                  !0)
              }
            })
          }, remove_brackets: function (a) {
            a = a.replace(/\[([^\]]*)\]*/g, "");
            return a = a.charAt(0).toUpperCase() + a.slice(1).replace(/-/g, " ").replace(/_/g, " ")
          }, save_custom_fields: function (b) {
            if ("object" === typeof b) if ("undefined" === typeof b.url) a.notice("Error, metafield url not set", !0); else {
              if ("undefined" === typeof b.type) {
                var c = $("div.custom_fields_box.is-product input, div.custom_fields_box.is-product textarea");
                var d = "product"
              } else c = $(".custom_fields_box.is-variant input, .custom_fields_box.is-variant textarea"),
                d = "variant";
              if (c.length) {
                "undefined" === typeof b.callback && (b.callback = !1);
                var g = b.t;
                g.attr("style", "color:rgba(0,0,0,0)").addClass("is-loading disabled");
                var f = function (e, d) {
                  "undefined" === typeof e && (e = 0);
                  if ("undefined" === typeof d) a.notice("Type unknown", !0); else {
                    var k = c.eq(e), r = k.attr("data-key"), h = k.val(), w = "POST", n = k.attr("data-namespace"),
                      m = k.attr("data-type"), l = !1, r = {metafield: {namespace: n, key: r, value: h, value_type: m}};
                    0 === h.length && k.attr("data-mid") && k.attr("data-pid") ? (w = "DELETE", ajax_url = "/admin/" +
                      a.data("alpha") + "/" + k.attr("data-pid") + "/metafields/" + k.attr("data-mid") + ".json", k.removeAttr("data-pid data-mid")) : 0 === h.length ? l = !0 : ajax_url = b.url;
                    l ? (e++, e < c.length ? f(e, d) : (g.attr("style", "").removeClass("is-loading disabled"), a.notice("Custom fields saved"))) : $.ajax({
                      type: w, url: ajax_url, dataType: "json", data: r, success: function (b) {
                        e++;
                        e < c.length ? f(e, d) : (g.attr("style", "").removeClass("is-loading disabled"), a.notice("Custom fields saved"))
                      }, error: function () {
                        a.notice("Error saving custom fields", !0);
                        g.attr("style", "").removeClass("is-loading disabled")
                      }
                    })
                  }
                };
                f(0, d)
              } else a.notice("No fields to save", !0)
            }
          }, setup_custom_fields: function (b) {
            "undefined" === typeof b && (b = !1);
            var c = "/admin/" + a.data("alpha") + "/" + a.data("omega") + "/metafields.json",
              d = $('.header__primary-actions button[type="submit"]').eq(0),
              g = $(".ui-layout__section--primary .ui-layout__item:last");
            custom_field_panel = $('<div class="ui-layout__item"><div class="ui-card next-card"><div class="next-card__header"><h3 class="next-heading">Custom Fields <a target="_blank" class="tooltip" href="' +
              a.data("help_file") + '"><i class="ico ico-16 ico-help"></i></a></h3></div><div class="next-card__section"><p>Manage the custom fields that belong to ' + b + '.</p><div class="next-grid__cell"><div class="next-card"><div class="section-content" id="collection-metafields"></div></div></div></div></div></div>');
            "customers" === a.data("alpha") ? (g = $("#customer-profile").parent(), custom_field_panel = custom_field_panel.find(".next-card")) : "orders" === a.data("alpha") ? (g = $("#order_card"), custom_field_panel = custom_field_panel.find(".next-card")) :
              "pages" !== a.data("alpha") && "articles" !== a.data("alpha") && ("collections" === a.data("alpha") ? (g = $("div.next-card:not(.next-card--announcement)").eq(0), custom_field_panel = custom_field_panel.find(".next-card")) : "products" === a.data("alpha") && (g = $(".ui-layout__section--primary .ui-layout__item .ui-card:first"), custom_field_panel = custom_field_panel.find(".next-card")));
            g.length ? (a.setting("hideProductCustomFields") || g.after(custom_field_panel), d.length && "Save" === d.text() && d.text("Save (without Custom Fields)"),
              a.data("fields", []), $.ajax({
              type: "GET", url: "/admin/metafields.json?limit=250", dataType: "json", success: function (b) {
                for (var e, d, k = "", f = "", h = 0, g = b.metafields.length; h < g; h++) {
                  var n = b.metafields[h].namespace;
                  d = !1;
                  0 < a.data("whitelist").length && -1 < $.inArray(n, a.data("whitelist")) && (d = !0);
                  var m = a.key_check(b.metafields[h].value + b.metafields[h].key);
                  if (m.limit === a.data("alpha") || !1 === m.limit) if (n === a.data("namespace") || n === a.data("namespace_new") || d) {
                    e = b.metafields[h].key;
                    var l = a.data("fields");
                    l.push(b.metafields[h].key);
                    a.data("fields", l);
                    e = a.remove_brackets(e);
                    l = '<div class="half">';
                    l = 1 < b.metafields[h].value.length ? l + ('<label for="product-type"><span class="tooltip tooltip-bottom" style="display:inline-block;position:relative">' + e + '<span class="tooltip-container"><span class="tooltip-label">' + b.metafields[h].namespace + "." + b.metafields[h].key + '</span></span></span><span class="note block">' + a.remove_brackets(b.metafields[h].value) + "</span></label>") : l + ('<label for="product-type">' + e + "</label>");
                    if ("textarea" === m.field) l +=
                      '<textarea data-namespace="' + n + '" name="' + b.metafields[h].key + '" placeholder="' + a.remove_brackets(b.metafields[h].key) + '" data-key="' + b.metafields[h].key + '" data-type="' + b.metafields[h].value_type + '"></textarea>'; else {
                      var v = 'type="text"';
                      "date" === m.field && (v = 'type="date"');
                      "number" === m.field && (v = 'type="number"');
                      l += "<input " + v + ' data-namespace="' + n + '" data-cffield="' + m.field + '" data-cftype="' + m.type + '" name="' + b.metafields[h].key + '" placeholder="' + a.remove_brackets(e) + '" value="" data-key="' + b.metafields[h].key +
                        '" data-type="' + b.metafields[h].value_type + '">'
                    }
                    l += "</div>";
                    "undefined" !== typeof m.variant ? f += l : k += l
                  }
                }
                b = !0;
                k.length || (k = '<div class="box warning">' + a.translate("no_fields") + "</div>", b = !1);
                custom_field_panel.find(".next-card__section").eq(0).append('<div class="custom_fields_box is-product clearfix fadein"><div class="content">' + k + "</div></div>");
                a.data("variantPanel", f);
                if (b) {
                  custom_field_panel.find('input[data-cftype="collection"]').each(function () {
                    var b = $(this);
                    b.after(a.build_select(b.attr("name"),
                      "collection"))
                  });
                  custom_field_panel.find('input[data-cftype="linklist"]').each(function () {
                  });
                  custom_field_panel.find('input[data-cftype="product"]').each(function () {
                  });
                  if ("undefined" !== a.setting("datalists")) for (e in k = a.setting("datalists"), k) if (f = $('input[data-key="' + e + '"]'), f.length && "false" === f.attr("data-cftype")) {
                    b = $("<datalist />", {id: "list-" + e});
                    f.attr("list", "list-" + e);
                    var h = k[e];
                    for (u in h) h.hasOwnProperty(u) && (g = $("<option />", {value: h[u]}), b.append(g));
                    f.after(b)
                  }
                  $.ajax({
                    type: "GET", url: c +
                    "?limit=250", dataType: "json", success: function (b) {
                      for (var c = 0, e = b.metafields.length; c < e; c++) d = !1, 0 < a.data("whitelist").length && -1 < $.inArray(b.metafields[c].namespace, a.data("whitelist")) && (d = !0), (b.metafields[c].namespace === a.data("namespace") || b.metafields[c].namespace === a.data("namespace_new") || d) && "global" !== b.metafields[c].namespace && "description_tag" !== b.metafields[c].key && $('input[data-key="' + b.metafields[c].key + '"],textarea[data-key="' + b.metafields[c].key + '"]').val(b.metafields[c].value).attr({
                        "data-mid": b.metafields[c].id,
                        "data-pid": a.data("omega")
                      })
                    }, error: function (b) {
                      a.notice(a.translate("error_get_metafields"), !0)
                    }
                  });
                  e = $("<a />", {"class": "btn fadein fd-cf-btn"}).on("click", function (b) {
                    b.preventDefault();
                    b = {t: $(this), callback: !1, url: c};
                    a.save_custom_fields(b)
                  }).text("Save Custom Fields");
                  var u = custom_field_panel.find(".custom_fields_box");
                  u.length ? u.after(e) : custom_field_panel.find("span.custom-fields-future-buttons").append(e)
                }
              }, error: function (b) {
                a.notice(a.translate("error_get_metafields"), !0)
              }
            })) : a.notice("Custom Fields error : setup_custom_fields() : target html not found",
              !0);
            "products" === b && (b = $("<button />", {"class": "btn btn-slim btn--icon next-field--connected next-field--connected--no-flexn"}).html('<span class="tooltip-container"><span class="tooltip-label">Show Custom Fields</span></span><svg style="vertical-align: top" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="12px" height="12px" viewBox="0 0 12 12" enable-background="new 0 0 12 12" xml:space="preserve"><polygon fill="#D81965" points="0,0 0,12 10,12 10,11 11,11 11,10 12,10 12,0 "/><path fill="#FFFFFF" d="M7 9v1h1V9H7zM8 11h1v-1H8V11zM9 10h1V9H9V10zM10 9h1V8h-1V9zM1 11h1v-1H1V11zM2 10h1V9H2V10zM3 9h1V8H3V9zM1 6h10V5H1V6zM1 4h10V3H1V4zM1 1v1h10V1H1zM4 11v-1H3v1H4zM1 8v1h1V8H1z"/></svg>').on("click",
              function (b) {
                b.preventDefault();
                var c = $(this);
                $("tr.custom_fields_box").find("input").each(function () {
                  $(this).val("")
                }).end().remove();
                var d = $("<tr />", {"class": "custom_fields_box is-variant"});
                if (a.data("variantRowsLength")) b = c.closest("tr"); else {
                  var k = $('<div style="margin-top:1em" class="ui-type-container"><table><tr><td style="padding:0;"><h3>Custom Fields</h3></td></tr></table></div>');
                  b = k.find("tr");
                  c.parents(".ui-card").find(".ui-card__section").append(k)
                }
                var g = !1;
                a.data("variantRowsLength") ?
                  g = b.find("td:last a:first").prop("href").split("/").pop() : (g = $("#product_variant_id").val(), c.addClass("disabled"));
                if (g) {
                  var h = $("<a />", {
                    "class": "btn is-loading btn-primary btn-slim",
                    "data-action": "save_custom_fields_variants"
                  }).text("Save Variant Custom Fields").off("click").on("click", function (b) {
                    b.preventDefault();
                    b = {t: $(this), url: "/admin/variants/" + g + "/metafields.json", type: "variant"};
                    a.save_custom_fields(b)
                  }), c = $("<div />", {style: "clear: left;float: left;"});
                  c.append(h);
                  var k = !0, f = $("<td />",
                    {colspan: "100", style: "padding:1.5vh 0;border-bottom:2px solid #000"});
                  a.data("variantPanel").length ? f.html(a.data("variantPanel")).append(c) : (f.html('<div class="box warning">No custom fields found. For fields to appear here they must use the [v] marker.</div>'), k = !1);
                  d.append(f);
                  k ? (d.find('input[data-cftype="collection"]').each(function () {
                    var b = $(this);
                    b.after(a.build_select(b.attr("name"), "collection"))
                  }), b.after(d), $.ajax({
                    type: "GET", url: "/admin/variants/" + g + "/metafields.json", success: function (b) {
                      h.removeClass("is-loading");
                      for (var c = $("tr.custom_fields_box.is-variant").eq(0), d = 0, e = b.metafields.length; d < e; d++) {
                        var f = b.metafields[d];
                        c.find('input[name="' + f.key + '"]').val(f.value).attr({
                          "data-mid": f.id,
                          "data-pid": a.data("omega"),
                          "data-vid": g
                        });
                        c.find('textarea[name="' + f.key + '"]').val(f.value).attr({
                          "data-mid": f.id,
                          "data-pid": a.data("omega"),
                          "data-vid": g
                        })
                      }
                      if ("undefined" !== a.setting("datalists")) {
                        b = a.setting("datalists");
                        for (var k in b) if (d = c.find('input[data-key="' + k + '"]'), 1 === d.length) {
                          if ("false" === d.attr("data-cftype")) {
                            e =
                              $("<datalist />", {id: "list-" + k});
                            d.attr("list", "list-" + k);
                            var f = b[k], r;
                            for (r in f) if (f.hasOwnProperty(r)) {
                              var n = $("<option />", {value: f[r]});
                              e.append(n)
                            }
                            d.after(e)
                          }
                        } else 1 < d.length && a.notice("Unexpected 1 field, got " + d.length)
                      }
                    }
                  })) : b.after(d)
                } else a.notice("Variant ID not found", !0)
              }), d = $(".new-variants-table__row td:last-child a:last-child"), a.data("variantRowsLength", d.length), d.length ? d.after(b) : (b.removeClass("btn-slim btn--icon next-field--connected next-field--connected--no-flexn"), b[0].style =
              "margin-left: .5em;", $("#product-multiple-options:first").after(b)))
          }, build_select: function (b, c) {
            if (b) {
              var d = a.data("collections"),
                g = $("<select />", {"data-ref": b, style: "width:50%"}).change(function (a) {
                  var c = $(this);
                  a = c.val();
                  c = c.parent().find('input[name="' + b + '"]').eq(0);
                  a ? c.val(a) : c.val("")
                });
              if (d && 1 < Object.keys(d.collections).length) {
                for (var f = '<option value="">Pick a collection</option>', e = 0, q = Object.keys(d.collections).length; e < q; e++) f += '<option value="' + d.collections[e].handle + '">' + d.collections[e].title +
                  "</option>";
                g.html(f);
                return g
              }
              a.notice("Error, invalid collection length", !0)
            }
          }, type_check: function (b, c) {
            var d = !1;
            c && (b += c);
            0 > b.indexOf(a.data("key_products")) && 0 > b.indexOf(a.data("key_pages")) && 0 > b.indexOf(a.data("key_collections")) && 0 > b.indexOf(a.data("key_articles")) ? d = !0 : -1 < b.indexOf(a.data("key_products")) && "products" === a.data("alpha") ? d = !0 : -1 < b.indexOf(a.data("key_articles")) && "articles" === a.data("alpha") ? d = !0 : -1 < b.indexOf(a.data("key_collections")) && "custom_collections" === a.data("alpha") ?
              d = !0 : -1 < b.indexOf(a.data("key_collections")) && "smart_collections" === a.data("alpha") ? d = !0 : -1 < b.indexOf(a.data("key_collections")) && "collections" === a.data("alpha") && (d = !0);
            return d
          }, key_check: function (b) {
            var c = {field: "text", type: !1, limit: !1};
            -1 < b.indexOf(a.data("marker_collection")) ? (c.field = "select", c.type = "collection") : -1 < b.indexOf(a.data("marker_textarea")) ? (c.field = "textarea", c.type = "string") : -1 < b.indexOf(a.data("marker_date")) ? (c.field = "date", c.type = "string") : -1 < b.indexOf(a.data("marker_number")) ?
              (c.field = "number", c.type = "string") : -1 < b.indexOf(a.data("marker_color")) && (c.field = "color", c.type = "string");
            -1 < b.indexOf(a.data("key_articles")) ? c.limit = "articles" : -1 < b.indexOf(a.data("key_collections")) ? (c.limit = "custom_collections", "smart_collections" === a.data("alpha") && (c.limit = "smart_collections"), "collections" === a.data("alpha") && (c.limit = "collections")) : -1 < b.indexOf(a.data("key_customers")) ? c.limit = "customers" : -1 < b.indexOf(a.data("key_pages")) ? c.limit = "pages" : -1 < b.indexOf(a.data("key_orders")) ?
              c.limit = "orders" : -1 < b.indexOf(a.data("key_variants")) ? (c.limit = "products", c.variant = !0) : -1 < b.indexOf(a.data("key_products")) && (c.limit = "products");
            return c
          }, load_ui: function () {
            if (document.getElementById("customfields_nav")) return !1;
            var b = document.querySelectorAll(".ui-nav .ui-nav__group")[0];
            if (b) {
              var c = document.createElement("div");
              c.innerHTML = '<ul id="customfields_nav" class="fadein ui-nav__group ui-nav__group--parent"><li class="ui-nav__item ui-nav__item--parent"><a href="https://freakdesign.com.au/pages/shopify-custom-fields" target="_blank" class="ui-nav__link ui-nav__link--parent" style="color: #dc107e;"><svg class="next-icon next-icon--size-20 next-icon--no-nudge" style="fill:#dc107e"> <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#next-settings"></use> </svg><span class="ui-nav__label ui-nav__label--parent">Custom Fields</span></a></li></ul>';
              b.parentNode.insertBefore(c, b.nextSibling);
              b = $("#customfields_nav");
              if (b.length) b.on("click", function (b) {
                b.preventDefault();
                a.fd_modal(!0, '<p><img src="//freakdesign-us.s3.amazonaws.com/shopify/custom_fields/i/modal_header.png" /></p><p>Custom Fields is "honor-ware", which means that we trust each other to be nice. As the developer of it, I\'m committed to keeping the tool something that\'s actually useful. By releasing new features and correcting possible bugs on a constant basis I can do just that, but I need your support. If you use it and intend to keep it, please sponsor its development by making a small <a target="_blank" href="http://shopifyfd.com/#install">contribution</a>.</p><p>A small <a href="' +
                  a.data("help_file") + '" target="_blank">help guide</a> is avalable in PDF format.</p><p>Developers should consider using <a target="_blank" href="http://freakdesign.com.au/pages/shopifyfd">ShopifyFD</a> to create the metafields this tool requires.</p>', "Custom Fields by Freakdesign", !0)
              })
            }
          }, init: function () {
            $("html").data("loaded", !0);
            $.ajax({
              type: "GET", url: "/admin/metafields.json?limit=250", dataType: "json", error: function () {
                a.notice("Error reading shop metafields", !0)
              }, success: function (b) {
                a.data("shop_metafields",
                  b);
                for (var c = 0, d = b.metafields.length; c < d; c++) if ("custom_fields_config" === b.metafields[c].namespace) if ("whitelist" === b.metafields[c].key) {
                  var g = b.metafields[c].value.replace(/\s/g, "").split(",");
                  a.data("whitelist", g)
                } else if ("settings" === b.metafields[c].key) try {
                  a.data("settings", JSON.parse(b.metafields[c].value))
                } catch (f) {
                  alert("SHOPIFY-FD: Error reading json settings")
                }
                setInterval(function () {
                  if (!$("#content").hasClass("loading")) {
                    a.load_ui();
                    var b = document.URL.split("#")[0].split("?")[0].split("/"),
                      b = b[b.length - 2], c = document.URL.split("/").pop();
                    b === a.data("alpha") && c === a.data("omega") || "next" === c || "prev" === c || (a.data("alpha", b), a.data("omega", c), "articles" != a.data("alpha") || isNaN(a.data("omega")) ? "pages" != a.data("alpha") || isNaN(a.data("omega")) ? "products" != a.data("alpha") || isNaN(a.data("omega")) ? "customers" != a.data("alpha") || isNaN(a.data("omega")) ? "orders" != a.data("alpha") || isNaN(a.data("omega")) ? "collections" != a.data("alpha") || isNaN(a.data("omega")) ? "smart_collections" != a.data("alpha") || isNaN(a.data("omega")) ?
                      "custom_collections" != a.data("alpha") || isNaN(a.data("omega")) || a.data("lockToAlpha") && a.data("lockToAlpha") !== a.data("alpha") || a.custom_fields_preload("collections") : a.data("lockToAlpha") && a.data("lockToAlpha") !== a.data("alpha") || a.custom_fields_preload("collections") : a.data("lockToAlpha") && a.data("lockToAlpha") !== a.data("alpha") || a.custom_fields_preload("collections") : a.data("lockToAlpha") && a.data("lockToAlpha") !== a.data("alpha") || a.custom_fields_preload() : a.data("lockToAlpha") && a.data("lockToAlpha") !==
                      a.data("alpha") || a.custom_fields_preload() : a.data("lockToAlpha") && a.data("lockToAlpha") !== a.data("alpha") || a.custom_fields_preload() : a.data("lockToAlpha") && a.data("lockToAlpha") !== a.data("alpha") || a.custom_fields_preload() : a.data("lockToAlpha") && a.data("lockToAlpha") !== a.data("alpha") || a.custom_fields_preload())
                  }
                }, a.data("wait"));
                setInterval(function () {
                  a.load_ui()
                }, 5E3);
                a.notice(a.translate("loaded"))
              }
            })
          }
        }
      }();
      a.load_css();
      a.init()
    } else alert("Not admin")
  } else alert("No jquery found!"); else alert("Shopify javascript is not found. Are you in your admin?")
})();