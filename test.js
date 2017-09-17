/*!
 * modernizr.min.js
 */
/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransforms-csstransforms3d-flexbox-placeholder-svg-touchevents-domprefixes-prefixes-setclasses-testallprops-testprop-teststyles !*/
!function (e, t, n) {
  function i(e, t) {
    return typeof e === t
  }

  function o() {
    var e, t, n, o, r, s, a;
    for (var l in T) if (T.hasOwnProperty(l)) {
      if (e = [], t = T[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)) for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
      for (o = i(t.fn, "function") ? t.fn() : t.fn, r = 0; r < e.length; r++) s = e[r], a = s.split("."), 1 === a.length ? w[a[0]] = o : (!w[a[0]] || w[a[0]] instanceof Boolean || (w[a[0]] = new Boolean(w[a[0]])), w[a[0]][a[1]] = o), y.push((o ? "" : "no-") + a.join("-"))
    }
  }

  function r(e) {
    var t = C.className, n = w._config.classPrefix || "";
    if (S && (t = t.baseVal), w._config.enableJSClass) {
      var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      t = t.replace(i, "$1" + n + "js$2")
    }
    w._config.enableClasses && (t += " " + n + e.join(" " + n), S ? C.className.baseVal = t : C.className = t)
  }

  function s() {
    return "function" != typeof t.createElement ? t.createElement(arguments[0]) : S ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
  }

  function a(e, t) {
    return !!~("" + e).indexOf(t)
  }

  function l(e) {
    return e.replace(/([a-z])-([a-z])/g, function (e, t, n) {
      return t + n.toUpperCase()
    }).replace(/^-/, "")
  }

  function c() {
    var e = t.body;
    return e || (e = s(S ? "svg" : "body"), e.fake = !0), e
  }

  function d(e, n, i, o) {
    var r, a, l, d, u = "modernizr", p = s("div"), f = c();
    if (parseInt(i, 10)) for (; i--;) l = s("div"), l.id = o ? o[i] : u + (i + 1), p.appendChild(l);
    return r = s("style"), r.type = "text/css", r.id = "s" + u, (f.fake ? f : p).appendChild(r), f.appendChild(p), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(t.createTextNode(e)), p.id = u, f.fake && (f.style.background = "", f.style.overflow = "hidden", d = C.style.overflow, C.style.overflow = "hidden", C.appendChild(f)), a = n(p, e), f.fake ? (f.parentNode.removeChild(f), C.style.overflow = d, C.offsetHeight) : p.parentNode.removeChild(p), !!a
  }

  function u(e, t) {
    return function () {
      return e.apply(t, arguments)
    }
  }

  function p(e, t, n) {
    var o;
    for (var r in e) if (e[r] in t) return n === !1 ? e[r] : (o = t[e[r]], i(o, "function") ? u(o, n || t) : o);
    return !1
  }

  function f(e) {
    return e.replace(/([A-Z])/g, function (e, t) {
      return "-" + t.toLowerCase()
    }).replace(/^ms-/, "-ms-")
  }

  function h(t, i) {
    var o = t.length;
    if ("CSS" in e && "supports" in e.CSS) {
      for (; o--;) if (e.CSS.supports(f(t[o]), i)) return !0;
      return !1
    }
    if ("CSSSupportsRule" in e) {
      for (var r = []; o--;) r.push("(" + f(t[o]) + ":" + i + ")");
      return r = r.join(" or "), d("@supports (" + r + ") { #modernizr { position: absolute; } }", function (e) {
        return "absolute" == getComputedStyle(e, null).position
      })
    }
    return n
  }

  function g(e, t, o, r) {
    function c() {
      u && (delete N.style, delete N.modElem)
    }

    if (r = !i(r, "undefined") && r, !i(o, "undefined")) {
      var d = h(e, o);
      if (!i(d, "undefined")) return d
    }
    for (var u, p, f, g, m, v = ["modernizr", "tspan", "samp"]; !N.style && v.length;) u = !0, N.modElem = s(v.shift()), N.style = N.modElem.style;
    for (f = e.length, p = 0; f > p; p++) if (g = e[p], m = N.style[g], a(g, "-") && (g = l(g)), N.style[g] !== n) {
      if (r || i(o, "undefined")) return c(), "pfx" != t || g;
      try {
        N.style[g] = o
      } catch (e) {
      }
      if (N.style[g] != m) return c(), "pfx" != t || g
    }
    return c(), !1
  }

  function m(e, t, n, o, r) {
    var s = e.charAt(0).toUpperCase() + e.slice(1), a = (e + " " + D.join(s + " ") + s).split(" ");
    return i(t, "string") || i(t, "undefined") ? g(a, t, o, r) : (a = (e + " " + x.join(s + " ") + s).split(" "), p(a, t, n))
  }

  function v(e, t, i) {
    return m(e, n, n, t, i)
  }

  var y = [], T = [], b = {
    _version: "3.3.1",
    _config: {classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0},
    _q: [],
    on: function (e, t) {
      var n = this;
      setTimeout(function () {
        t(n[e])
      }, 0)
    },
    addTest: function (e, t, n) {
      T.push({name: e, fn: t, options: n})
    },
    addAsyncTest: function (e) {
      T.push({name: null, fn: e})
    }
  }, w = function () {
  };
  w.prototype = b, w = new w, w.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
  var _ = b._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
  b._prefixes = _;
  var C = t.documentElement, S = "svg" === C.nodeName.toLowerCase(), E = "Moz O ms Webkit",
    x = b._config.usePrefixes ? E.toLowerCase().split(" ") : [];
  b._domPrefixes = x;
  var k = "CSS" in e && "supports" in e.CSS, A = "supportsCSS" in e;
  w.addTest("supports", k || A), w.addTest("placeholder", "placeholder" in s("input") && "placeholder" in s("textarea"));
  var D = b._config.usePrefixes ? E.split(" ") : [];
  b._cssomPrefixes = D;
  var O = b.testStyles = d;
  w.addTest("touchevents", function () {
    var n;
    if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) n = !0; else {
      var i = ["@media (", _.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
      O(i, function (e) {
        n = 9 === e.offsetTop
      })
    }
    return n
  });
  var I = {elem: s("modernizr")};
  w._q.push(function () {
    delete I.elem
  });
  var N = {style: I.elem.style};
  w._q.unshift(function () {
    delete N.style
  }), b.testProp = function (e, t, i) {
    return g([e], n, t, i)
  }, b.testAllProps = m, b.testAllProps = v, w.addTest("csstransforms", function () {
    return -1 === navigator.userAgent.indexOf("Android 2.") && v("transform", "scale(1)", !0)
  }), w.addTest("csstransforms3d", function () {
    var e = !!v("perspective", "1px", !0), t = w._config.usePrefixes;
    if (e && (!t || "webkitPerspective" in C.style)) {
      var n, i = "#modernizr{width:0;height:0}";
      w.supports ? n = "@supports (perspective: 1px)" : (n = "@media (transform-3d)", t && (n += ",(-webkit-transform-3d)")), n += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}", O(i + n, function (t) {
        e = 7 === t.offsetWidth && 18 === t.offsetHeight
      })
    }
    return e
  }), w.addTest("flexbox", v("flexBasis", "1px", !0)), o(), r(y), delete b.addTest, delete b.addAsyncTest;
  for (var L = 0; L < w._q.length; L++) w._q[L]();
  e.Modernizr = w
}(window, document), /*!
 * jquery-3.2.1.min.js
 */
  /*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
  !function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");
      return t(e)
    } : t(e)
  }("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";

    function n(e, t) {
      t = t || ne;
      var n = t.createElement("script");
      n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }

    function i(e) {
      var t = !!e && "length" in e && e.length, n = ge.type(e);
      return "function" !== n && !ge.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function o(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function r(e, t, n) {
      return ge.isFunction(t) ? ge.grep(e, function (e, i) {
        return !!t.call(e, i, e) !== n
      }) : t.nodeType ? ge.grep(e, function (e) {
        return e === t !== n
      }) : "string" != typeof t ? ge.grep(e, function (e) {
        return ae.call(t, e) > -1 !== n
      }) : Ee.test(t) ? ge.filter(t, e, n) : (t = ge.filter(t, e), ge.grep(e, function (e) {
        return ae.call(t, e) > -1 !== n && 1 === e.nodeType
      }))
    }

    function s(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType;) ;
      return e
    }

    function a(e) {
      var t = {};
      return ge.each(e.match(Ie) || [], function (e, n) {
        t[n] = !0
      }), t
    }

    function l(e) {
      return e
    }

    function c(e) {
      throw e
    }

    function d(e, t, n, i) {
      var o;
      try {
        e && ge.isFunction(o = e.promise) ? o.call(e).done(t).fail(n) : e && ge.isFunction(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
      } catch (e) {
        n.apply(void 0, [e])
      }
    }

    function u() {
      ne.removeEventListener("DOMContentLoaded", u), e.removeEventListener("load", u), ge.ready()
    }

    function p() {
      this.expando = ge.expando + p.uid++
    }

    function f(e) {
      return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Re.test(e) ? JSON.parse(e) : e)
    }

    function h(e, t, n) {
      var i;
      if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(Me, "-$&").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
        try {
          n = f(n)
        } catch (e) {
        }
        je.set(e, t, n)
      } else n = void 0;
      return n
    }

    function g(e, t, n, i) {
      var o, r = 1, s = 20, a = i ? function () {
          return i.cur()
        } : function () {
          return ge.css(e, t, "")
        }, l = a(), c = n && n[3] || (ge.cssNumber[t] ? "" : "px"),
        d = (ge.cssNumber[t] || "px" !== c && +l) && Fe.exec(ge.css(e, t));
      if (d && d[3] !== c) {
        c = c || d[3], n = n || [], d = +l || 1;
        do r = r || ".5", d /= r, ge.style(e, t, d + c); while (r !== (r = a() / l) && 1 !== r && --s)
      }
      return n && (d = +d || +l || 0, o = n[1] ? d + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = d, i.end = o)), o
    }

    function m(e) {
      var t, n = e.ownerDocument, i = e.nodeName, o = Ve[i];
      return o ? o : (t = n.body.appendChild(n.createElement(i)), o = ge.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), Ve[i] = o, o)
    }

    function v(e, t) {
      for (var n, i, o = [], r = 0, s = e.length; r < s; r++) i = e[r], i.style && (n = i.style.display, t ? ("none" === n && (o[r] = He.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && Ue(i) && (o[r] = m(i))) : "none" !== n && (o[r] = "none", He.set(i, "display", n)));
      for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
      return e
    }

    function y(e, t) {
      var n;
      return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && o(e, t) ? ge.merge([e], n) : n
    }

    function T(e, t) {
      for (var n = 0, i = e.length; n < i; n++) He.set(e[n], "globalEval", !t || He.get(t[n], "globalEval"))
    }

    function b(e, t, n, i, o) {
      for (var r, s, a, l, c, d, u = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++) if (r = e[f], r || 0 === r) if ("object" === ge.type(r)) ge.merge(p, r.nodeType ? [r] : r); else if (Xe.test(r)) {
        for (s = s || u.appendChild(t.createElement("div")), a = (Ge.exec(r) || ["", ""])[1].toLowerCase(), l = Ke[a] || Ke._default, s.innerHTML = l[1] + ge.htmlPrefilter(r) + l[2], d = l[0]; d--;) s = s.lastChild;
        ge.merge(p, s.childNodes), s = u.firstChild, s.textContent = ""
      } else p.push(t.createTextNode(r));
      for (u.textContent = "", f = 0; r = p[f++];) if (i && ge.inArray(r, i) > -1) o && o.push(r); else if (c = ge.contains(r.ownerDocument, r), s = y(u.appendChild(r), "script"), c && T(s), n) for (d = 0; r = s[d++];) Qe.test(r.type || "") && n.push(r);
      return u
    }

    function w() {
      return !0
    }

    function _() {
      return !1
    }

    function C() {
      try {
        return ne.activeElement
      } catch (e) {
      }
    }

    function S(e, t, n, i, o, r) {
      var s, a;
      if ("object" == typeof t) {
        "string" != typeof n && (i = i || n, n = void 0);
        for (a in t) S(e, a, n, i, t[a], r);
        return e
      }
      if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), o === !1) o = _; else if (!o) return e;
      return 1 === r && (s = o, o = function (e) {
        return ge().off(e), s.apply(this, arguments)
      }, o.guid = s.guid || (s.guid = ge.guid++)), e.each(function () {
        ge.event.add(this, t, o, i, n)
      })
    }

    function E(e, t) {
      return o(e, "table") && o(11 !== t.nodeType ? t : t.firstChild, "tr") ? ge(">tbody", e)[0] || e : e
    }

    function x(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function k(e) {
      var t = ot.exec(e.type);
      return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function A(e, t) {
      var n, i, o, r, s, a, l, c;
      if (1 === t.nodeType) {
        if (He.hasData(e) && (r = He.access(e), s = He.set(t, r), c = r.events)) {
          delete s.handle, s.events = {};
          for (o in c) for (n = 0, i = c[o].length; n < i; n++) ge.event.add(t, o, c[o][n])
        }
        je.hasData(e) && (a = je.access(e), l = ge.extend({}, a), je.set(t, l))
      }
    }

    function D(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && ze.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function O(e, t, i, o) {
      t = re.apply([], t);
      var r, s, a, l, c, d, u = 0, p = e.length, f = p - 1, h = t[0], g = ge.isFunction(h);
      if (g || p > 1 && "string" == typeof h && !fe.checkClone && it.test(h)) return e.each(function (n) {
        var r = e.eq(n);
        g && (t[0] = h.call(this, n, r.html())), O(r, t, i, o)
      });
      if (p && (r = b(t, e[0].ownerDocument, !1, e, o), s = r.firstChild, 1 === r.childNodes.length && (r = s), s || o)) {
        for (a = ge.map(y(r, "script"), x), l = a.length; u < p; u++) c = r, u !== f && (c = ge.clone(c, !0, !0), l && ge.merge(a, y(c, "script"))), i.call(e[u], c, u);
        if (l) for (d = a[a.length - 1].ownerDocument, ge.map(a, k), u = 0; u < l; u++) c = a[u], Qe.test(c.type || "") && !He.access(c, "globalEval") && ge.contains(d, c) && (c.src ? ge._evalUrl && ge._evalUrl(c.src) : n(c.textContent.replace(rt, ""), d))
      }
      return e
    }

    function I(e, t, n) {
      for (var i, o = t ? ge.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || ge.cleanData(y(i)), i.parentNode && (n && ge.contains(i.ownerDocument, i) && T(y(i, "script")), i.parentNode.removeChild(i));
      return e
    }

    function N(e, t, n) {
      var i, o, r, s, a = e.style;
      return n = n || lt(e), n && (s = n.getPropertyValue(t) || n[t], "" !== s || ge.contains(e.ownerDocument, e) || (s = ge.style(e, t)), !fe.pixelMarginRight() && at.test(s) && st.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
    }

    function L(e, t) {
      return {
        get: function () {
          return e() ? void delete this.get : (this.get = t).apply(this, arguments)
        }
      }
    }

    function P(e) {
      if (e in ht) return e;
      for (var t = e[0].toUpperCase() + e.slice(1), n = ft.length; n--;) if (e = ft[n] + t, e in ht) return e
    }

    function $(e) {
      var t = ge.cssProps[e];
      return t || (t = ge.cssProps[e] = P(e) || e), t
    }

    function H(e, t, n) {
      var i = Fe.exec(t);
      return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function j(e, t, n, i, o) {
      var r, s = 0;
      for (r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; r < 4; r += 2) "margin" === n && (s += ge.css(e, n + qe[r], !0, o)), i ? ("content" === n && (s -= ge.css(e, "padding" + qe[r], !0, o)), "margin" !== n && (s -= ge.css(e, "border" + qe[r] + "Width", !0, o))) : (s += ge.css(e, "padding" + qe[r], !0, o), "padding" !== n && (s += ge.css(e, "border" + qe[r] + "Width", !0, o)));
      return s
    }

    function R(e, t, n) {
      var i, o = lt(e), r = N(e, t, o), s = "border-box" === ge.css(e, "boxSizing", !1, o);
      return at.test(r) ? r : (i = s && (fe.boxSizingReliable() || r === e.style[t]), "auto" === r && (r = e["offset" + t[0].toUpperCase() + t.slice(1)]), r = parseFloat(r) || 0, r + j(e, t, n || (s ? "border" : "content"), i, o) + "px")
    }

    function M(e, t, n, i, o) {
      return new M.prototype.init(e, t, n, i, o)
    }

    function W() {
      mt && (ne.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(W) : e.setTimeout(W, ge.fx.interval), ge.fx.tick())
    }

    function F() {
      return e.setTimeout(function () {
        gt = void 0
      }), gt = ge.now()
    }

    function q(e, t) {
      var n, i = 0, o = {height: e};
      for (t = t ? 1 : 0; i < 4; i += 2 - t) n = qe[i], o["margin" + n] = o["padding" + n] = e;
      return t && (o.opacity = o.width = e), o
    }

    function U(e, t, n) {
      for (var i, o = (z.tweeners[t] || []).concat(z.tweeners["*"]), r = 0, s = o.length; r < s; r++) if (i = o[r].call(n, t, e)) return i
    }

    function B(e, t, n) {
      var i, o, r, s, a, l, c, d, u = "width" in t || "height" in t, p = this, f = {}, h = e.style,
        g = e.nodeType && Ue(e), m = He.get(e, "fxshow");
      n.queue || (s = ge._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
        s.unqueued || a()
      }), s.unqueued++, p.always(function () {
        p.always(function () {
          s.unqueued--, ge.queue(e, "fx").length || s.empty.fire()
        })
      }));
      for (i in t) if (o = t[i], vt.test(o)) {
        if (delete t[i], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
          if ("show" !== o || !m || void 0 === m[i]) continue;
          g = !0
        }
        f[i] = m && m[i] || ge.style(e, i)
      }
      if (l = !ge.isEmptyObject(t), l || !ge.isEmptyObject(f)) {
        u && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = m && m.display, null == c && (c = He.get(e, "display")), d = ge.css(e, "display"), "none" === d && (c ? d = c : (v([e], !0), c = e.style.display || c, d = ge.css(e, "display"), v([e]))), ("inline" === d || "inline-block" === d && null != c) && "none" === ge.css(e, "float") && (l || (p.done(function () {
          h.display = c
        }), null == c && (d = h.display, c = "none" === d ? "" : d)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
          h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
        })), l = !1;
        for (i in f) l || (m ? "hidden" in m && (g = m.hidden) : m = He.access(e, "fxshow", {display: c}), r && (m.hidden = !g), g && v([e], !0), p.done(function () {
          g || v([e]), He.remove(e, "fxshow");
          for (i in f) ge.style(e, i, f[i])
        })), l = U(g ? m[i] : 0, i, p), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
      }
    }

    function V(e, t) {
      var n, i, o, r, s;
      for (n in e) if (i = ge.camelCase(n), o = t[i], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), s = ge.cssHooks[i], s && "expand" in s) {
        r = s.expand(r), delete e[i];
        for (n in r) n in e || (e[n] = r[n], t[n] = o)
      } else t[i] = o
    }

    function z(e, t, n) {
      var i, o, r = 0, s = z.prefilters.length, a = ge.Deferred().always(function () {
        delete l.elem
      }), l = function () {
        if (o) return !1;
        for (var t = gt || F(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, r = 1 - i, s = 0, l = c.tweens.length; s < l; s++) c.tweens[s].run(r);
        return a.notifyWith(e, [c, r, n]), r < 1 && l ? n : (l || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
      }, c = a.promise({
        elem: e,
        props: ge.extend({}, t),
        opts: ge.extend(!0, {specialEasing: {}, easing: ge.easing._default}, n),
        originalProperties: t,
        originalOptions: n,
        startTime: gt || F(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var i = ge.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
          return c.tweens.push(i), i
        },
        stop: function (t) {
          var n = 0, i = t ? c.tweens.length : 0;
          if (o) return this;
          for (o = !0; n < i; n++) c.tweens[n].run(1);
          return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
        }
      }), d = c.props;
      for (V(d, c.opts.specialEasing); r < s; r++) if (i = z.prefilters[r].call(c, e, d, c.opts)) return ge.isFunction(i.stop) && (ge._queueHooks(c.elem, c.opts.queue).stop = ge.proxy(i.stop, i)), i;
      return ge.map(d, U, c), ge.isFunction(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), ge.fx.timer(ge.extend(l, {
        elem: e,
        anim: c,
        queue: c.opts.queue
      })), c
    }

    function G(e) {
      var t = e.match(Ie) || [];
      return t.join(" ")
    }

    function Q(e) {
      return e.getAttribute && e.getAttribute("class") || ""
    }

    function K(e, t, n, i) {
      var o;
      if (Array.isArray(t)) ge.each(t, function (t, o) {
        n || At.test(e) ? i(e, o) : K(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
      }); else if (n || "object" !== ge.type(t)) i(e, t); else for (o in t) K(e + "[" + o + "]", t[o], n, i)
    }

    function X(e) {
      return function (t, n) {
        "string" != typeof t && (n = t, t = "*");
        var i, o = 0, r = t.toLowerCase().match(Ie) || [];
        if (ge.isFunction(n)) for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
      }
    }

    function Y(e, t, n, i) {
      function o(a) {
        var l;
        return r[a] = !0, ge.each(e[a] || [], function (e, a) {
          var c = a(t, n, i);
          return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
        }), l
      }

      var r = {}, s = e === Wt;
      return o(t.dataTypes[0]) || !r["*"] && o("*")
    }

    function J(e, t) {
      var n, i, o = ge.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
      return i && ge.extend(!0, e, i), e
    }

    function Z(e, t, n) {
      for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
      if (i) for (o in a) if (a[o] && a[o].test(i)) {
        l.unshift(o);
        break
      }
      if (l[0] in n) r = l[0]; else {
        for (o in n) {
          if (!l[0] || e.converters[o + " " + l[0]]) {
            r = o;
            break
          }
          s || (s = o)
        }
        r = r || s
      }
      if (r) return r !== l[0] && l.unshift(r), n[r]
    }

    function ee(e, t, n, i) {
      var o, r, s, a, l, c = {}, d = e.dataTypes.slice();
      if (d[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
      for (r = d.shift(); r;) if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = d.shift()) if ("*" === r) r = l; else if ("*" !== l && l !== r) {
        if (s = c[l + " " + r] || c["* " + r], !s) for (o in c) if (a = o.split(" "), a[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
          s === !0 ? s = c[o] : c[o] !== !0 && (r = a[0], d.unshift(a[1]));
          break
        }
        if (s !== !0) if (s && e.throws) t = s(t); else try {
          t = s(t)
        } catch (e) {
          return {state: "parsererror", error: s ? e : "No conversion from " + l + " to " + r}
        }
      }
      return {state: "success", data: t}
    }

    var te = [], ne = e.document, ie = Object.getPrototypeOf, oe = te.slice, re = te.concat, se = te.push,
      ae = te.indexOf, le = {}, ce = le.toString, de = le.hasOwnProperty, ue = de.toString, pe = ue.call(Object),
      fe = {}, he = "3.2.1", ge = function (e, t) {
        return new ge.fn.init(e, t)
      }, me = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ve = /^-ms-/, ye = /-([a-z])/g, Te = function (e, t) {
        return t.toUpperCase()
      };
    ge.fn = ge.prototype = {
      jquery: he, constructor: ge, length: 0, toArray: function () {
        return oe.call(this)
      }, get: function (e) {
        return null == e ? oe.call(this) : e < 0 ? this[e + this.length] : this[e]
      }, pushStack: function (e) {
        var t = ge.merge(this.constructor(), e);
        return t.prevObject = this, t
      }, each: function (e) {
        return ge.each(this, e)
      }, map: function (e) {
        return this.pushStack(ge.map(this, function (t, n) {
          return e.call(t, n, t)
        }))
      }, slice: function () {
        return this.pushStack(oe.apply(this, arguments))
      }, first: function () {
        return this.eq(0)
      }, last: function () {
        return this.eq(-1)
      }, eq: function (e) {
        var t = this.length, n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
      }, end: function () {
        return this.prevObject || this.constructor()
      }, push: se, sort: te.sort, splice: te.splice
    }, ge.extend = ge.fn.extend = function () {
      var e, t, n, i, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
      for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || ge.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++) if (null != (e = arguments[a])) for (t in e) n = s[t], i = e[t], s !== i && (c && i && (ge.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1, r = n && Array.isArray(n) ? n : []) : r = n && ge.isPlainObject(n) ? n : {}, s[t] = ge.extend(c, r, i)) : void 0 !== i && (s[t] = i));
      return s
    }, ge.extend({
      expando: "jQuery" + (he + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
        throw new Error(e)
      }, noop: function () {
      }, isFunction: function (e) {
        return "function" === ge.type(e)
      }, isWindow: function (e) {
        return null != e && e === e.window
      }, isNumeric: function (e) {
        var t = ge.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
      }, isPlainObject: function (e) {
        var t, n;
        return !(!e || "[object Object]" !== ce.call(e) || (t = ie(e)) && (n = de.call(t, "constructor") && t.constructor, "function" != typeof n || ue.call(n) !== pe))
      }, isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0
      }, type: function (e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ce.call(e)] || "object" : typeof e
      }, globalEval: function (e) {
        n(e)
      }, camelCase: function (e) {
        return e.replace(ve, "ms-").replace(ye, Te)
      }, each: function (e, t) {
        var n, o = 0;
        if (i(e)) for (n = e.length; o < n && t.call(e[o], o, e[o]) !== !1; o++) ; else for (o in e) if (t.call(e[o], o, e[o]) === !1) break;
        return e
      }, trim: function (e) {
        return null == e ? "" : (e + "").replace(me, "")
      }, makeArray: function (e, t) {
        var n = t || [];
        return null != e && (i(Object(e)) ? ge.merge(n, "string" == typeof e ? [e] : e) : se.call(n, e)), n
      }, inArray: function (e, t, n) {
        return null == t ? -1 : ae.call(t, e, n)
      }, merge: function (e, t) {
        for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
        return e.length = o, e
      }, grep: function (e, t, n) {
        for (var i, o = [], r = 0, s = e.length, a = !n; r < s; r++) i = !t(e[r], r), i !== a && o.push(e[r]);
        return o
      }, map: function (e, t, n) {
        var o, r, s = 0, a = [];
        if (i(e)) for (o = e.length; s < o; s++) r = t(e[s], s, n), null != r && a.push(r); else for (s in e) r = t(e[s], s, n), null != r && a.push(r);
        return re.apply([], a)
      }, guid: 1, proxy: function (e, t) {
        var n, i, o;
        if ("string" == typeof t && (n = e[t], t = e, e = n), ge.isFunction(e)) return i = oe.call(arguments, 2), o = function () {
          return e.apply(t || this, i.concat(oe.call(arguments)))
        }, o.guid = e.guid = e.guid || ge.guid++, o
      }, now: Date.now, support: fe
    }), "function" == typeof Symbol && (ge.fn[Symbol.iterator] = te[Symbol.iterator]), ge.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
      le["[object " + t + "]"] = t.toLowerCase()
    });
    var be = function (e) {
      function t(e, t, n, i) {
        var o, r, s, a, l, c, d, p = t && t.ownerDocument, h = t ? t.nodeType : 9;
        if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
        if (!i && ((t ? t.ownerDocument || t : F) !== L && N(t), t = t || L, $)) {
          if (11 !== h && (l = ve.exec(e))) if (o = l[1]) {
            if (9 === h) {
              if (!(s = t.getElementById(o))) return n;
              if (s.id === o) return n.push(s), n
            } else if (p && (s = p.getElementById(o)) && M(t, s) && s.id === o) return n.push(s), n
          } else {
            if (l[2]) return J.apply(n, t.getElementsByTagName(e)), n;
            if ((o = l[3]) && _.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(o)), n
          }
          if (_.qsa && !z[e + " "] && (!H || !H.test(e))) {
            if (1 !== h) p = t, d = e; else if ("object" !== t.nodeName.toLowerCase()) {
              for ((a = t.getAttribute("id")) ? a = a.replace(we, _e) : t.setAttribute("id", a = W), c = x(e), r = c.length; r--;) c[r] = "#" + a + " " + f(c[r]);
              d = c.join(","), p = ye.test(e) && u(t.parentNode) || t
            }
            if (d) try {
              return J.apply(n, p.querySelectorAll(d)), n
            } catch (e) {
            } finally {
              a === W && t.removeAttribute("id")
            }
          }
        }
        return A(e.replace(ae, "$1"), t, n, i)
      }

      function n() {
        function e(n, i) {
          return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i
        }

        var t = [];
        return e
      }

      function i(e) {
        return e[W] = !0, e
      }

      function o(e) {
        var t = L.createElement("fieldset");
        try {
          return !!e(t)
        } catch (e) {
          return !1
        } finally {
          t.parentNode && t.parentNode.removeChild(t), t = null
        }
      }

      function r(e, t) {
        for (var n = e.split("|"), i = n.length; i--;) C.attrHandle[n[i]] = t
      }

      function s(e, t) {
        var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
        if (i) return i;
        if (n) for (; n = n.nextSibling;) if (n === t) return -1;
        return e ? 1 : -1
      }

      function a(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return "input" === n && t.type === e
        }
      }

      function l(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e
        }
      }

      function c(e) {
        return function (t) {
          return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Se(t) === e : t.disabled === e : "label" in t && t.disabled === e
        }
      }

      function d(e) {
        return i(function (t) {
          return t = +t, i(function (n, i) {
            for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
          })
        })
      }

      function u(e) {
        return e && "undefined" != typeof e.getElementsByTagName && e
      }

      function p() {
      }

      function f(e) {
        for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
        return i
      }

      function h(e, t, n) {
        var i = t.dir, o = t.next, r = o || i, s = n && "parentNode" === r, a = U++;
        return t.first ? function (t, n, o) {
          for (; t = t[i];) if (1 === t.nodeType || s) return e(t, n, o);
          return !1
        } : function (t, n, l) {
          var c, d, u, p = [q, a];
          if (l) {
            for (; t = t[i];) if ((1 === t.nodeType || s) && e(t, n, l)) return !0
          } else for (; t = t[i];) if (1 === t.nodeType || s) if (u = t[W] || (t[W] = {}), d = u[t.uniqueID] || (u[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t; else {
            if ((c = d[r]) && c[0] === q && c[1] === a) return p[2] = c[2];
            if (d[r] = p, p[2] = e(t, n, l)) return !0
          }
          return !1
        }
      }

      function g(e) {
        return e.length > 1 ? function (t, n, i) {
          for (var o = e.length; o--;) if (!e[o](t, n, i)) return !1;
          return !0
        } : e[0]
      }

      function m(e, n, i) {
        for (var o = 0, r = n.length; o < r; o++) t(e, n[o], i);
        return i
      }

      function v(e, t, n, i, o) {
        for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++) (r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
        return s
      }

      function y(e, t, n, o, r, s) {
        return o && !o[W] && (o = y(o)), r && !r[W] && (r = y(r, s)), i(function (i, s, a, l) {
          var c, d, u, p = [], f = [], h = s.length, g = i || m(t || "*", a.nodeType ? [a] : a, []),
            y = !e || !i && t ? g : v(g, p, e, a, l), T = n ? r || (i ? e : h || o) ? [] : s : y;
          if (n && n(y, T, a, l), o) for (c = v(T, f), o(c, [], a, l), d = c.length; d--;) (u = c[d]) && (T[f[d]] = !(y[f[d]] = u));
          if (i) {
            if (r || e) {
              if (r) {
                for (c = [], d = T.length; d--;) (u = T[d]) && c.push(y[d] = u);
                r(null, T = [], c, l)
              }
              for (d = T.length; d--;) (u = T[d]) && (c = r ? ee(i, u) : p[d]) > -1 && (i[c] = !(s[c] = u))
            }
          } else T = v(T === s ? T.splice(h, T.length) : T), r ? r(null, s, T, l) : J.apply(s, T)
        })
      }

      function T(e) {
        for (var t, n, i, o = e.length, r = C.relative[e[0].type], s = r || C.relative[" "], a = r ? 1 : 0, l = h(function (e) {
          return e === t
        }, s, !0), c = h(function (e) {
          return ee(t, e) > -1
        }, s, !0), d = [function (e, n, i) {
          var o = !r && (i || n !== D) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
          return t = null, o
        }]; a < o; a++) if (n = C.relative[e[a].type]) d = [h(g(d), n)]; else {
          if (n = C.filter[e[a].type].apply(null, e[a].matches), n[W]) {
            for (i = ++a; i < o && !C.relative[e[i].type]; i++) ;
            return y(a > 1 && g(d), a > 1 && f(e.slice(0, a - 1).concat({value: " " === e[a - 2].type ? "*" : ""})).replace(ae, "$1"), n, a < i && T(e.slice(a, i)), i < o && T(e = e.slice(i)), i < o && f(e))
          }
          d.push(n)
        }
        return g(d)
      }

      function b(e, n) {
        var o = n.length > 0, r = e.length > 0, s = function (i, s, a, l, c) {
          var d, u, p, f = 0, h = "0", g = i && [], m = [], y = D, T = i || r && C.find.TAG("*", c),
            b = q += null == y ? 1 : Math.random() || .1, w = T.length;
          for (c && (D = s === L || s || c); h !== w && null != (d = T[h]); h++) {
            if (r && d) {
              for (u = 0, s || d.ownerDocument === L || (N(d), a = !$); p = e[u++];) if (p(d, s || L, a)) {
                l.push(d);
                break
              }
              c && (q = b)
            }
            o && ((d = !p && d) && f--, i && g.push(d))
          }
          if (f += h, o && h !== f) {
            for (u = 0; p = n[u++];) p(g, m, s, a);
            if (i) {
              if (f > 0) for (; h--;) g[h] || m[h] || (m[h] = X.call(l));
              m = v(m)
            }
            J.apply(l, m), c && !i && m.length > 0 && f + n.length > 1 && t.uniqueSort(l)
          }
          return c && (q = b, D = y), g
        };
        return o ? i(s) : s
      }

      var w, _, C, S, E, x, k, A, D, O, I, N, L, P, $, H, j, R, M, W = "sizzle" + 1 * new Date, F = e.document, q = 0,
        U = 0, B = n(), V = n(), z = n(), G = function (e, t) {
          return e === t && (I = !0), 0
        }, Q = {}.hasOwnProperty, K = [], X = K.pop, Y = K.push, J = K.push, Z = K.slice, ee = function (e, t) {
          for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
          return -1
        },
        te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ne = "[\\x20\\t\\r\\n\\f]", ie = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
        re = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
        se = new RegExp(ne + "+", "g"), ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
        le = new RegExp("^" + ne + "*," + ne + "*"), ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
        de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), ue = new RegExp(re),
        pe = new RegExp("^" + ie + "$"), fe = {
          ID: new RegExp("^#(" + ie + ")"),
          CLASS: new RegExp("^\\.(" + ie + ")"),
          TAG: new RegExp("^(" + ie + "|[*])"),
          ATTR: new RegExp("^" + oe),
          PSEUDO: new RegExp("^" + re),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + te + ")$", "i"),
          needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
        }, he = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, me = /^[^{]+\{\s*\[native \w/,
        ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/,
        Te = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), be = function (e, t, n) {
          var i = "0x" + t - 65536;
          return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }, we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, _e = function (e, t) {
          return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, Ce = function () {
          N()
        }, Se = h(function (e) {
          return e.disabled === !0 && ("form" in e || "label" in e)
        }, {dir: "parentNode", next: "legend"});
      try {
        J.apply(K = Z.call(F.childNodes), F.childNodes), K[F.childNodes.length].nodeType
      } catch (e) {
        J = {
          apply: K.length ? function (e, t) {
            Y.apply(e, Z.call(t))
          } : function (e, t) {
            for (var n = e.length, i = 0; e[n++] = t[i++];) ;
            e.length = n - 1
          }
        }
      }
      _ = t.support = {}, E = t.isXML = function (e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && "HTML" !== t.nodeName
      }, N = t.setDocument = function (e) {
        var t, n, i = e ? e.ownerDocument || e : F;
        return i !== L && 9 === i.nodeType && i.documentElement ? (L = i, P = L.documentElement, $ = !E(L), F !== L && (n = L.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), _.attributes = o(function (e) {
          return e.className = "i", !e.getAttribute("className")
        }), _.getElementsByTagName = o(function (e) {
          return e.appendChild(L.createComment("")), !e.getElementsByTagName("*").length
        }), _.getElementsByClassName = me.test(L.getElementsByClassName), _.getById = o(function (e) {
          return P.appendChild(e).id = W, !L.getElementsByName || !L.getElementsByName(W).length
        }), _.getById ? (C.filter.ID = function (e) {
          var t = e.replace(Te, be);
          return function (e) {
            return e.getAttribute("id") === t
          }
        }, C.find.ID = function (e, t) {
          if ("undefined" != typeof t.getElementById && $) {
            var n = t.getElementById(e);
            return n ? [n] : []
          }
        }) : (C.filter.ID = function (e) {
          var t = e.replace(Te, be);
          return function (e) {
            var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
            return n && n.value === t
          }
        }, C.find.ID = function (e, t) {
          if ("undefined" != typeof t.getElementById && $) {
            var n, i, o, r = t.getElementById(e);
            if (r) {
              if (n = r.getAttributeNode("id"), n && n.value === e) return [r];
              for (o = t.getElementsByName(e), i = 0; r = o[i++];) if (n = r.getAttributeNode("id"), n && n.value === e) return [r]
            }
            return []
          }
        }), C.find.TAG = _.getElementsByTagName ? function (e, t) {
          return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : _.qsa ? t.querySelectorAll(e) : void 0
        } : function (e, t) {
          var n, i = [], o = 0, r = t.getElementsByTagName(e);
          if ("*" === e) {
            for (; n = r[o++];) 1 === n.nodeType && i.push(n);
            return i
          }
          return r
        }, C.find.CLASS = _.getElementsByClassName && function (e, t) {
          if ("undefined" != typeof t.getElementsByClassName && $) return t.getElementsByClassName(e)
        }, j = [], H = [], (_.qsa = me.test(L.querySelectorAll)) && (o(function (e) {
          P.appendChild(e).innerHTML = "<a id="
          "+W+"
          "></a><select id="
          "+W+" -\r\\" msallowcapture="
          "><option selected="
          "></option></select>", e.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || H.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + W + "-]").length || H.push("~="), e.querySelectorAll(":checked").length || H.push(":checked"), e.querySelectorAll("a#" + W + "+*").length || H.push(".#.+[+~]")
        }), o(function (e) {
          e.innerHTML = "<a href="
          " disabled="
          disabled
          "></a><select disabled="
          disabled
          "><option/></select>";
          var t = L.createElement("input");
          t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && H.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && H.push(":enabled", ":disabled"), P.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && H.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), H.push(",.*:")
        })), (_.matchesSelector = me.test(R = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && o(function (e) {
          _.disconnectedMatch = R.call(e, "*"), R.call(e, "[s!='']:x"), j.push("!=", re)
        }), H = H.length && new RegExp(H.join("|")), j = j.length && new RegExp(j.join("|")), t = me.test(P.compareDocumentPosition), M = t || me.test(P.contains) ? function (e, t) {
          var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
          return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
        } : function (e, t) {
          if (t) for (; t = t.parentNode;) if (t === e) return !0;
          return !1
        }, G = t ? function (e, t) {
          if (e === t) return I = !0, 0;
          var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
          return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !_.sortDetached && t.compareDocumentPosition(e) === n ? e === L || e.ownerDocument === F && M(F, e) ? -1 : t === L || t.ownerDocument === F && M(F, t) ? 1 : O ? ee(O, e) - ee(O, t) : 0 : 4 & n ? -1 : 1)
        } : function (e, t) {
          if (e === t) return I = !0, 0;
          var n, i = 0, o = e.parentNode, r = t.parentNode, a = [e], l = [t];
          if (!o || !r) return e === L ? -1 : t === L ? 1 : o ? -1 : r ? 1 : O ? ee(O, e) - ee(O, t) : 0;
          if (o === r) return s(e, t);
          for (n = e; n = n.parentNode;) a.unshift(n);
          for (n = t; n = n.parentNode;) l.unshift(n);
          for (; a[i] === l[i];) i++;
          return i ? s(a[i], l[i]) : a[i] === F ? -1 : l[i] === F ? 1 : 0
        }, L) : L
      }, t.matches = function (e, n) {
        return t(e, null, null, n)
      }, t.matchesSelector = function (e, n) {
        if ((e.ownerDocument || e) !== L && N(e), n = n.replace(de, "='$1']"), _.matchesSelector && $ && !z[n + " "] && (!j || !j.test(n)) && (!H || !H.test(n))) try {
          var i = R.call(e, n);
          if (i || _.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
        } catch (e) {
        }
        return t(n, L, null, [e]).length > 0
      }, t.contains = function (e, t) {
        return (e.ownerDocument || e) !== L && N(e), M(e, t)
      }, t.attr = function (e, t) {
        (e.ownerDocument || e) !== L && N(e);
        var n = C.attrHandle[t.toLowerCase()], i = n && Q.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !$) : void 0;
        return void 0 !== i ? i : _.attributes || !$ ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
      }, t.escape = function (e) {
        return (e + "").replace(we, _e)
      }, t.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e)
      }, t.uniqueSort = function (e) {
        var t, n = [], i = 0, o = 0;
        if (I = !_.detectDuplicates, O = !_.sortStable && e.slice(0), e.sort(G), I) {
          for (; t = e[o++];) t === e[o] && (i = n.push(o));
          for (; i--;) e.splice(n[i], 1)
        }
        return O = null, e
      }, S = t.getText = function (e) {
        var t, n = "", i = 0, o = e.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += S(e)
          } else if (3 === o || 4 === o) return e.nodeValue
        } else for (; t = e[i++];) n += S(t);
        return n
      }, C = t.selectors = {
        cacheLength: 50,
        createPseudo: i,
        match: fe,
        attrHandle: {},
        find: {},
        relative: {
          ">": {dir: "parentNode", first: !0},
          " ": {dir: "parentNode"},
          "+": {dir: "previousSibling", first: !0},
          "~": {dir: "previousSibling"}
        },
        preFilter: {
          ATTR: function (e) {
            return e[1] = e[1].replace(Te, be), e[3] = (e[3] || e[4] || e[5] || "").replace(Te, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
          }, CHILD: function (e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
          }, PSEUDO: function (e) {
            var t, n = !e[6] && e[2];
            return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = x(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
          }
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(Te, be).toLowerCase();
            return "*" === e ? function () {
              return !0
            } : function (e) {
              return e.nodeName && e.nodeName.toLowerCase() === t
            }
          }, CLASS: function (e) {
            var t = B[e + " "];
            return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && B(e, function (e) {
              return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
            })
          }, ATTR: function (e, n, i) {
            return function (o) {
              var r = t.attr(o, e);
              return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
            }
          }, CHILD: function (e, t, n, i, o) {
            var r = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
            return 1 === i && 0 === o ? function (e) {
              return !!e.parentNode
            } : function (t, n, l) {
              var c, d, u, p, f, h, g = r !== s ? "nextSibling" : "previousSibling", m = t.parentNode,
                v = a && t.nodeName.toLowerCase(), y = !l && !a, T = !1;
              if (m) {
                if (r) {
                  for (; g;) {
                    for (p = t; p = p[g];) if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                    h = g = "only" === e && !h && "nextSibling"
                  }
                  return !0
                }
                if (h = [s ? m.firstChild : m.lastChild], s && y) {
                  for (p = m, u = p[W] || (p[W] = {}), d = u[p.uniqueID] || (u[p.uniqueID] = {}), c = d[e] || [], f = c[0] === q && c[1], T = f && c[2], p = f && m.childNodes[f]; p = ++f && p && p[g] || (T = f = 0) || h.pop();) if (1 === p.nodeType && ++T && p === t) {
                    d[e] = [q, f, T];
                    break
                  }
                } else if (y && (p = t, u = p[W] || (p[W] = {}), d = u[p.uniqueID] || (u[p.uniqueID] = {}), c = d[e] || [], f = c[0] === q && c[1], T = f), T === !1) for (; (p = ++f && p && p[g] || (T = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++T || (y && (u = p[W] || (p[W] = {}), d = u[p.uniqueID] || (u[p.uniqueID] = {}), d[e] = [q, T]), p !== t));) ;
                return T -= o, T === i || T % i === 0 && T / i >= 0
              }
            }
          }, PSEUDO: function (e, n) {
            var o, r = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
            return r[W] ? r(n) : r.length > 1 ? (o = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
              for (var i, o = r(e, n), s = o.length; s--;) i = ee(e, o[s]), e[i] = !(t[i] = o[s])
            }) : function (e) {
              return r(e, 0, o)
            }) : r
          }
        },
        pseudos: {
          not: i(function (e) {
            var t = [], n = [], o = k(e.replace(ae, "$1"));
            return o[W] ? i(function (e, t, n, i) {
              for (var r, s = o(e, null, i, []), a = e.length; a--;) (r = s[a]) && (e[a] = !(t[a] = r))
            }) : function (e, i, r) {
              return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
            }
          }), has: i(function (e) {
            return function (n) {
              return t(e, n).length > 0
            }
          }), contains: i(function (e) {
            return e = e.replace(Te, be), function (t) {
              return (t.textContent || t.innerText || S(t)).indexOf(e) > -1
            }
          }), lang: i(function (e) {
            return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(Te, be).toLowerCase(), function (t) {
              var n;
              do if (n = $ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
              return !1
            }
          }),
          target: function (t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id
          }, root: function (e) {
            return e === P
          }, focus: function (e) {
            return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
          }, enabled: c(!1), disabled: c(!0), checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && !!e.checked || "option" === t && !!e.selected
          }, selected: function (e) {
            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
          }, empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
            return !0
          }, parent: function (e) {
            return !C.pseudos.empty(e)
          }, header: function (e) {
            return ge.test(e.nodeName)
          }, input: function (e) {
            return he.test(e.nodeName)
          }, button: function (e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t
          }, text: function (e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
          }, first: d(function () {
            return [0]
          }), last: d(function (e, t) {
            return [t - 1]
          }), eq: d(function (e, t, n) {
            return [n < 0 ? n + t : n]
          }), even: d(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e
          }), odd: d(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e
          }), lt: d(function (e, t, n) {
            for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
            return e
          }), gt: d(function (e, t, n) {
            for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
            return e
          })
        }
      }, C.pseudos.nth = C.pseudos.eq;
      for (w in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) C.pseudos[w] = a(w);
      for (w in{submit: !0, reset: !0}) C.pseudos[w] = l(w);
      return p.prototype = C.filters = C.pseudos, C.setFilters = new p, x = t.tokenize = function (e, n) {
        var i, o, r, s, a, l, c, d = V[e + " "];
        if (d) return n ? 0 : d.slice(0);
        for (a = e, l = [], c = C.preFilter; a;) {
          i && !(o = le.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ce.exec(a)) && (i = o.shift(), r.push({
            value: i,
            type: o[0].replace(ae, " ")
          }), a = a.slice(i.length));
          for (s in C.filter) !(o = fe[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), r.push({
            value: i,
            type: s,
            matches: o
          }), a = a.slice(i.length));
          if (!i) break
        }
        return n ? a.length : a ? t.error(e) : V(e, l).slice(0)
      }, k = t.compile = function (e, t) {
        var n, i = [], o = [], r = z[e + " "];
        if (!r) {
          for (t || (t = x(e)), n = t.length; n--;) r = T(t[n]), r[W] ? i.push(r) : o.push(r);
          r = z(e, b(o, i)), r.selector = e
        }
        return r
      }, A = t.select = function (e, t, n, i) {
        var o, r, s, a, l, c = "function" == typeof e && e, d = !i && x(e = c.selector || e);
        if (n = n || [], 1 === d.length) {
          if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && 9 === t.nodeType && $ && C.relative[r[1].type]) {
            if (t = (C.find.ID(s.matches[0].replace(Te, be), t) || [])[0], !t) return n;
            c && (t = t.parentNode), e = e.slice(r.shift().value.length)
          }
          for (o = fe.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !C.relative[a = s.type]);) if ((l = C.find[a]) && (i = l(s.matches[0].replace(Te, be), ye.test(r[0].type) && u(t.parentNode) || t))) {
            if (r.splice(o, 1), e = i.length && f(r), !e) return J.apply(n, i), n;
            break
          }
        }
        return (c || k(e, d))(i, t, !$, n, !t || ye.test(e) && u(t.parentNode) || t), n
      }, _.sortStable = W.split("").sort(G).join("") === W, _.detectDuplicates = !!I, N(), _.sortDetached = o(function (e) {
        return 1 & e.compareDocumentPosition(L.createElement("fieldset"))
      }), o(function (e) {
        return e.innerHTML = "<a href="#"></a>", "#" === e.firstChild.getAttribute("href")
      }) || r("type|href|height|width", function (e, t, n) {
        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
      }), _.attributes && o(function (e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
      }) || r("value", function (e, t, n) {
        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
      }), o(function (e) {
        return null == e.getAttribute("disabled")
      }) || r(te, function (e, t, n) {
        var i;
        if (!n) return e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
      }), t
    }(e);
    ge.find = be, ge.expr = be.selectors, ge.expr[":"] = ge.expr.pseudos, ge.uniqueSort = ge.unique = be.uniqueSort, ge.text = be.getText, ge.isXMLDoc = be.isXML, ge.contains = be.contains, ge.escapeSelector = be.escape;
    var we = function (e, t, n) {
        for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
          if (o && ge(e).is(n)) break;
          i.push(e)
        }
        return i
      }, _e = function (e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
      }, Ce = ge.expr.match.needsContext, Se = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
      Ee = /^.[^:#\[\.,]*$/;
    ge.filter = function (e, t, n) {
      var i = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ge.find.matchesSelector(i, e) ? [i] : [] : ge.find.matches(e, ge.grep(t, function (e) {
        return 1 === e.nodeType
      }))
    }, ge.fn.extend({
      find: function (e) {
        var t, n, i = this.length, o = this;
        if ("string" != typeof e) return this.pushStack(ge(e).filter(function () {
          for (t = 0; t < i; t++) if (ge.contains(o[t], this)) return !0
        }));
        for (n = this.pushStack([]), t = 0; t < i; t++) ge.find(e, o[t], n);
        return i > 1 ? ge.uniqueSort(n) : n
      }, filter: function (e) {
        return this.pushStack(r(this, e || [], !1))
      }, not: function (e) {
        return this.pushStack(r(this, e || [], !0))
      }, is: function (e) {
        return !!r(this, "string" == typeof e && Ce.test(e) ? ge(e) : e || [], !1).length
      }
    });
    var xe, ke = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, Ae = ge.fn.init = function (e, t, n) {
      var i, o;
      if (!e) return this;
      if (n = n || xe, "string" == typeof e) {
        if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ke.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (i[1]) {
          if (t = t instanceof ge ? t[0] : t, ge.merge(this, ge.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ne, !0)), Se.test(i[1]) && ge.isPlainObject(t)) for (i in t) ge.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
          return this
        }
        return o = ne.getElementById(i[2]), o && (this[0] = o, this.length = 1), this
      }
      return e.nodeType ? (this[0] = e, this.length = 1, this) : ge.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(ge) : ge.makeArray(e, this)
    };
    Ae.prototype = ge.fn, xe = ge(ne);
    var De = /^(?:parents|prev(?:Until|All))/, Oe = {children: !0, contents: !0, next: !0, prev: !0};
    ge.fn.extend({
      has: function (e) {
        var t = ge(e, this), n = t.length;
        return this.filter(function () {
          for (var e = 0; e < n; e++) if (ge.contains(this, t[e])) return !0
        })
      }, closest: function (e, t) {
        var n, i = 0, o = this.length, r = [], s = "string" != typeof e && ge(e);
        if (!Ce.test(e)) for (; i < o; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ge.find.matchesSelector(n, e))) {
          r.push(n);
          break
        }
        return this.pushStack(r.length > 1 ? ge.uniqueSort(r) : r)
      }, index: function (e) {
        return e ? "string" == typeof e ? ae.call(ge(e), this[0]) : ae.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      }, add: function (e, t) {
        return this.pushStack(ge.uniqueSort(ge.merge(this.get(), ge(e, t))))
      }, addBack: function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
    }), ge.each({
      parent: function (e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
      }, parents: function (e) {
        return we(e, "parentNode")
      }, parentsUntil: function (e, t, n) {
        return we(e, "parentNode", n)
      }, next: function (e) {
        return s(e, "nextSibling")
      }, prev: function (e) {
        return s(e, "previousSibling")
      }, nextAll: function (e) {
        return we(e, "nextSibling")
      }, prevAll: function (e) {
        return we(e, "previousSibling")
      }, nextUntil: function (e, t, n) {
        return we(e, "nextSibling", n)
      }, prevUntil: function (e, t, n) {
        return we(e, "previousSibling", n)
      }, siblings: function (e) {
        return _e((e.parentNode || {}).firstChild, e)
      }, children: function (e) {
        return _e(e.firstChild)
      }, contents: function (e) {
        return o(e, "iframe") ? e.contentDocument : (o(e, "template") && (e = e.content || e), ge.merge([], e.childNodes))
      }
    }, function (e, t) {
      ge.fn[e] = function (n, i) {
        var o = ge.map(this, t, n);
        return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = ge.filter(i, o)), this.length > 1 && (Oe[e] || ge.uniqueSort(o), De.test(e) && o.reverse()), this.pushStack(o)
      }
    });
    var Ie = /[^\x20\t\r\n\f]+/g;
    ge.Callbacks = function (e) {
      e = "string" == typeof e ? a(e) : ge.extend({}, e);
      var t, n, i, o, r = [], s = [], l = -1, c = function () {
        for (o = o || e.once, i = t = !0; s.length; l = -1) for (n = s.shift(); ++l < r.length;) r[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = r.length, n = !1);
        e.memory || (n = !1), t = !1, o && (r = n ? [] : "")
      }, d = {
        add: function () {
          return r && (n && !t && (l = r.length - 1, s.push(n)), function t(n) {
            ge.each(n, function (n, i) {
              ge.isFunction(i) ? e.unique && d.has(i) || r.push(i) : i && i.length && "string" !== ge.type(i) && t(i)
            })
          }(arguments), n && !t && c()), this
        }, remove: function () {
          return ge.each(arguments, function (e, t) {
            for (var n; (n = ge.inArray(t, r, n)) > -1;) r.splice(n, 1), n <= l && l--
          }), this
        }, has: function (e) {
          return e ? ge.inArray(e, r) > -1 : r.length > 0
        }, empty: function () {
          return r && (r = []), this
        }, disable: function () {
          return o = s = [], r = n = "", this
        }, disabled: function () {
          return !r
        }, lock: function () {
          return o = s = [], n || t || (r = n = ""), this
        }, locked: function () {
          return !!o
        }, fireWith: function (e, n) {
          return o || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || c()), this
        }, fire: function () {
          return d.fireWith(this, arguments), this
        }, fired: function () {
          return !!i
        }
      };
      return d
    }, ge.extend({
      Deferred: function (t) {
        var n = [["notify", "progress", ge.Callbacks("memory"), ge.Callbacks("memory"), 2], ["resolve", "done", ge.Callbacks("once memory"), ge.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ge.Callbacks("once memory"), ge.Callbacks("once memory"), 1, "rejected"]],
          i = "pending", o = {
            state: function () {
              return i
            }, always: function () {
              return r.done(arguments).fail(arguments), this
            }, catch: function (e) {
              return o.then(null, e)
            }, pipe: function () {
              var e = arguments;
              return ge.Deferred(function (t) {
                ge.each(n, function (n, i) {
                  var o = ge.isFunction(e[i[4]]) && e[i[4]];
                  r[i[1]](function () {
                    var e = o && o.apply(this, arguments);
                    e && ge.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments)
                  })
                }), e = null
              }).promise()
            }, then: function (t, i, o) {
              function r(t, n, i, o) {
                return function () {
                  var a = this, d = arguments, u = function () {
                    var e, u;
                    if (!(t < s)) {
                      if (e = i.apply(a, d), e === n.promise()) throw new TypeError("Thenable self-resolution");
                      u = e && ("object" == typeof e || "function" == typeof e) && e.then, ge.isFunction(u) ? o ? u.call(e, r(s, n, l, o), r(s, n, c, o)) : (s++, u.call(e, r(s, n, l, o), r(s, n, c, o), r(s, n, l, n.notifyWith))) : (i !== l && (a = void 0, d = [e]), (o || n.resolveWith)(a, d))
                    }
                  }, p = o ? u : function () {
                    try {
                      u()
                    } catch (e) {
                      ge.Deferred.exceptionHook && ge.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= s && (i !== c && (a = void 0, d = [e]), n.rejectWith(a, d))
                    }
                  };
                  t ? p() : (ge.Deferred.getStackHook && (p.stackTrace = ge.Deferred.getStackHook()), e.setTimeout(p))
                }
              }

              var s = 0;
              return ge.Deferred(function (e) {
                n[0][3].add(r(0, e, ge.isFunction(o) ? o : l, e.notifyWith)), n[1][3].add(r(0, e, ge.isFunction(t) ? t : l)), n[2][3].add(r(0, e, ge.isFunction(i) ? i : c))
              }).promise()
            }, promise: function (e) {
              return null != e ? ge.extend(e, o) : o
            }
          }, r = {};
        return ge.each(n, function (e, t) {
          var s = t[2], a = t[5];
          o[t[1]] = s.add, a && s.add(function () {
            i = a
          }, n[3 - e][2].disable, n[0][2].lock), s.add(t[3].fire), r[t[0]] = function () {
            return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
          }, r[t[0] + "With"] = s.fireWith
        }), o.promise(r), t && t.call(r, r), r
      }, when: function (e) {
        var t = arguments.length, n = t, i = Array(n), o = oe.call(arguments), r = ge.Deferred(), s = function (e) {
          return function (n) {
            i[e] = this, o[e] = arguments.length > 1 ? oe.call(arguments) : n, --t || r.resolveWith(i, o)
          }
        };
        if (t <= 1 && (d(e, r.done(s(n)).resolve, r.reject, !t), "pending" === r.state() || ge.isFunction(o[n] && o[n].then))) return r.then();
        for (; n--;) d(o[n], s(n), r.reject);
        return r.promise()
      }
    });
    var Ne = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    ge.Deferred.exceptionHook = function (t, n) {
      e.console && e.console.warn && t && Ne.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, ge.readyException = function (t) {
      e.setTimeout(function () {
        throw t
      })
    };
    var Le = ge.Deferred();
    ge.fn.ready = function (e) {
      return Le.then(e).catch(function (e) {
        ge.readyException(e)
      }), this
    }, ge.extend({
      isReady: !1, readyWait: 1, ready: function (e) {
        (e === !0 ? --ge.readyWait : ge.isReady) || (ge.isReady = !0, e !== !0 && --ge.readyWait > 0 || Le.resolveWith(ne, [ge]))
      }
    }), ge.ready.then = Le.then, "complete" === ne.readyState || "loading" !== ne.readyState && !ne.documentElement.doScroll ? e.setTimeout(ge.ready) : (ne.addEventListener("DOMContentLoaded", u), e.addEventListener("load", u));
    var Pe = function (e, t, n, i, o, r, s) {
      var a = 0, l = e.length, c = null == n;
      if ("object" === ge.type(n)) {
        o = !0;
        for (a in n) Pe(e, t, a, n[a], !0, r, s)
      } else if (void 0 !== i && (o = !0, ge.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
          return c.call(ge(e), n)
        })), t)) for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
      return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
    }, $e = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    p.uid = 1, p.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return t || (t = {}, $e(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
          value: t,
          configurable: !0
        }))), t
      }, set: function (e, t, n) {
        var i, o = this.cache(e);
        if ("string" == typeof t) o[ge.camelCase(t)] = n; else for (i in t) o[ge.camelCase(i)] = t[i];
        return o
      }, get: function (e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][ge.camelCase(t)]
      }, access: function (e, t, n) {
        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
      }, remove: function (e, t) {
        var n, i = e[this.expando];
        if (void 0 !== i) {
          if (void 0 !== t) {
            Array.isArray(t) ? t = t.map(ge.camelCase) : (t = ge.camelCase(t), t = t in i ? [t] : t.match(Ie) || []), n = t.length;
            for (; n--;) delete i[t[n]]
          }
          (void 0 === t || ge.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
        }
      }, hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !ge.isEmptyObject(t)
      }
    };
    var He = new p, je = new p, Re = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Me = /[A-Z]/g;
    ge.extend({
      hasData: function (e) {
        return je.hasData(e) || He.hasData(e)
      }, data: function (e, t, n) {
        return je.access(e, t, n)
      }, removeData: function (e, t) {
        je.remove(e, t)
      }, _data: function (e, t, n) {
        return He.access(e, t, n)
      }, _removeData: function (e, t) {
        He.remove(e, t)
      }
    }), ge.fn.extend({
      data: function (e, t) {
        var n, i, o, r = this[0], s = r && r.attributes;
        if (void 0 === e) {
          if (this.length && (o = je.get(r), 1 === r.nodeType && !He.get(r, "hasDataAttrs"))) {
            for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = ge.camelCase(i.slice(5)), h(r, i, o[i])));
            He.set(r, "hasDataAttrs", !0)
          }
          return o
        }
        return "object" == typeof e ? this.each(function () {
          je.set(this, e)
        }) : Pe(this, function (t) {
          var n;
          if (r && void 0 === t) {
            if (n = je.get(r, e), void 0 !== n) return n;
            if (n = h(r, e), void 0 !== n) return n
          } else this.each(function () {
            je.set(this, e, t)
          })
        }, null, t, arguments.length > 1, null, !0)
      }, removeData: function (e) {
        return this.each(function () {
          je.remove(this, e)
        })
      }
    }), ge.extend({
      queue: function (e, t, n) {
        var i;
        if (e) return t = (t || "fx") + "queue", i = He.get(e, t), n && (!i || Array.isArray(n) ? i = He.access(e, t, ge.makeArray(n)) : i.push(n)), i || []
      }, dequeue: function (e, t) {
        t = t || "fx";
        var n = ge.queue(e, t), i = n.length, o = n.shift(), r = ge._queueHooks(e, t), s = function () {
          ge.dequeue(e, t)
        };
        "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, s, r)), !i && r && r.empty.fire()
      }, _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return He.get(e, n) || He.access(e, n, {
          empty: ge.Callbacks("once memory").add(function () {
            He.remove(e, [t + "queue", n])
          })
        })
      }
    }), ge.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ge.queue(this[0], e) : void 0 === t ? this : this.each(function () {
          var n = ge.queue(this, e, t);
          ge._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ge.dequeue(this, e)
        })
      }, dequeue: function (e) {
        return this.each(function () {
          ge.dequeue(this, e)
        })
      }, clearQueue: function (e) {
        return this.queue(e || "fx", [])
      }, promise: function (e, t) {
        var n, i = 1, o = ge.Deferred(), r = this, s = this.length, a = function () {
          --i || o.resolveWith(r, [r])
        };
        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = He.get(r[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
        return a(), o.promise(t)
      }
    });
    var We = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Fe = new RegExp("^(?:([+-])=|)(" + We + ")([a-z%]*)$", "i"),
      qe = ["Top", "Right", "Bottom", "Left"], Ue = function (e, t) {
        return e = t || e, "none" === e.style.display || "" === e.style.display && ge.contains(e.ownerDocument, e) && "none" === ge.css(e, "display")
      }, Be = function (e, t, n, i) {
        var o, r, s = {};
        for (r in t) s[r] = e.style[r], e.style[r] = t[r];
        o = n.apply(e, i || []);
        for (r in t) e.style[r] = s[r];
        return o
      }, Ve = {};
    ge.fn.extend({
      show: function () {
        return v(this, !0)
      }, hide: function () {
        return v(this)
      }, toggle: function (e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
          Ue(this) ? ge(this).show() : ge(this).hide()
        })
      }
    });
    var ze = /^(?:checkbox|radio)$/i, Ge = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, Qe = /^$|\/(?:java|ecma)script/i, Ke = {
      option: [1, "<select multiple="multiple">", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
    Ke.optgroup = Ke.option, Ke.tbody = Ke.tfoot = Ke.colgroup = Ke.caption = Ke.thead, Ke.th = Ke.td;
    var Xe = /<|&#?\w+;/;
    !function () {
      var e = ne.createDocumentFragment(), t = e.appendChild(ne.createElement("div")), n = ne.createElement("input");
      n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), fe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", fe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Ye = ne.documentElement, Je = /^key/, Ze = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      et = /^([^.]*)(?:\.(.+)|)/;
    ge.event = {
      global: {}, add: function (e, t, n, i, o) {
        var r, s, a, l, c, d, u, p, f, h, g, m = He.get(e);
        if (m) for (n.handler && (r = n, n = r.handler, o = r.selector), o && ge.find.matchesSelector(Ye, o), n.guid || (n.guid = ge.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function (t) {
          return "undefined" != typeof ge && ge.event.triggered !== t.type ? ge.event.dispatch.apply(e, arguments) : void 0
        }), t = (t || "").match(Ie) || [""], c = t.length; c--;) a = et.exec(t[c]) || [], f = g = a[1], h = (a[2] || "").split(".").sort(), f && (u = ge.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = ge.event.special[f] || {}, d = ge.extend({
          type: f,
          origType: g,
          data: i,
          handler: n,
          guid: n.guid,
          selector: o,
          needsContext: o && ge.expr.match.needsContext.test(o),
          namespace: h.join(".")
        }, r), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, u.setup && u.setup.call(e, i, h, s) !== !1 || e.addEventListener && e.addEventListener(f, s)), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), ge.event.global[f] = !0)
      }, remove: function (e, t, n, i, o) {
        var r, s, a, l, c, d, u, p, f, h, g, m = He.hasData(e) && He.get(e);
        if (m && (l = m.events)) {
          for (t = (t || "").match(Ie) || [""], c = t.length; c--;) if (a = et.exec(t[c]) || [], f = g = a[1], h = (a[2] || "").split(".").sort(), f) {
            for (u = ge.event.special[f] || {}, f = (i ? u.delegateType : u.bindType) || f, p = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) d = p[r], !o && g !== d.origType || n && n.guid !== d.guid || a && !a.test(d.namespace) || i && i !== d.selector && ("**" !== i || !d.selector) || (p.splice(r, 1), d.selector && p.delegateCount--, u.remove && u.remove.call(e, d));
            s && !p.length && (u.teardown && u.teardown.call(e, h, m.handle) !== !1 || ge.removeEvent(e, f, m.handle), delete l[f])
          } else for (f in l) ge.event.remove(e, f + t[c], n, i, !0);
          ge.isEmptyObject(l) && He.remove(e, "handle events")
        }
      }, dispatch: function (e) {
        var t, n, i, o, r, s, a = ge.event.fix(e), l = new Array(arguments.length),
          c = (He.get(this, "events") || {})[a.type] || [], d = ge.event.special[a.type] || {};
        for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
        if (a.delegateTarget = this, !d.preDispatch || d.preDispatch.call(this, a) !== !1) {
          for (s = ge.event.handlers.call(this, a, c), t = 0; (o = s[t++]) && !a.isPropagationStopped();) for (a.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, i = ((ge.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l), void 0 !== i && (a.result = i) === !1 && (a.preventDefault(), a.stopPropagation()));
          return d.postDispatch && d.postDispatch.call(this, a), a.result
        }
      }, handlers: function (e, t) {
        var n, i, o, r, s, a = [], l = t.delegateCount, c = e.target;
        if (l && c.nodeType && !("click" === e.type && e.button >= 1)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== e.type || c.disabled !== !0)) {
          for (r = [], s = {}, n = 0; n < l; n++) i = t[n], o = i.selector + " ", void 0 === s[o] && (s[o] = i.needsContext ? ge(o, this).index(c) > -1 : ge.find(o, this, null, [c]).length), s[o] && r.push(i);
          r.length && a.push({elem: c, handlers: r})
        }
        return c = this, l < t.length && a.push({elem: c, handlers: t.slice(l)}), a
      }, addProp: function (e, t) {
        Object.defineProperty(ge.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: ge.isFunction(t) ? function () {
            if (this.originalEvent) return t(this.originalEvent)
          } : function () {
            if (this.originalEvent) return this.originalEvent[e]
          },
          set: function (t) {
            Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
          }
        })
      }, fix: function (e) {
        return e[ge.expando] ? e : new ge.Event(e)
      }, special: {
        load: {noBubble: !0}, focus: {
          trigger: function () {
            if (this !== C() && this.focus) return this.focus(), !1
          }, delegateType: "focusin"
        }, blur: {
          trigger: function () {
            if (this === C() && this.blur) return this.blur(), !1
          }, delegateType: "focusout"
        }, click: {
          trigger: function () {
            if ("checkbox" === this.type && this.click && o(this, "input")) return this.click(), !1
          }, _default: function (e) {
            return o(e.target, "a")
          }
        }, beforeunload: {
          postDispatch: function (e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
          }
        }
      }
    }, ge.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n)
    }, ge.Event = function (e, t) {
      return this instanceof ge.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? w : _, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && ge.extend(this, t), this.timeStamp = e && e.timeStamp || ge.now(), void(this[ge.expando] = !0)) : new ge.Event(e, t)
    }, ge.Event.prototype = {
      constructor: ge.Event,
      isDefaultPrevented: _,
      isPropagationStopped: _,
      isImmediatePropagationStopped: _,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        this.isDefaultPrevented = w, e && !this.isSimulated && e.preventDefault()
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        this.isPropagationStopped = w, e && !this.isSimulated && e.stopPropagation()
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = w, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
      }
    }, ge.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      char: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function (e) {
        var t = e.button;
        return null == e.which && Je.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ze.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
      }
    }, ge.event.addProp), ge.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function (e, t) {
      ge.event.special[e] = {
        delegateType: t, bindType: t, handle: function (e) {
          var n, i = this, o = e.relatedTarget, r = e.handleObj;
          return o && (o === i || ge.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
        }
      }
    }), ge.fn.extend({
      on: function (e, t, n, i) {
        return S(this, e, t, n, i)
      }, one: function (e, t, n, i) {
        return S(this, e, t, n, i, 1)
      }, off: function (e, t, n) {
        var i, o;
        if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ge(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
        if ("object" == typeof e) {
          for (o in e) this.off(o, t, e[o]);
          return this
        }
        return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = _), this.each(function () {
          ge.event.remove(this, e, n, t)
        })
      }
    });
    var tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      nt = /<script|<style|<link/i, it = /checked\s*(?:[^=]|=\s*.checked.)/i, ot = /^true\/(.*)/,
      rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ge.extend({
      htmlPrefilter: function (e) {
        return e.replace(tt, "<$1></$2>")
      }, clone: function (e, t, n) {
        var i, o, r, s, a = e.cloneNode(!0), l = ge.contains(e.ownerDocument, e);
        if (!(fe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ge.isXMLDoc(e))) for (s = y(a), r = y(e), i = 0, o = r.length; i < o; i++) D(r[i], s[i]);
        if (t) if (n) for (r = r || y(e), s = s || y(a), i = 0, o = r.length; i < o; i++) A(r[i], s[i]); else A(e, a);
        return s = y(a, "script"), s.length > 0 && T(s, !l && y(e, "script")), a
      }, cleanData: function (e) {
        for (var t, n, i, o = ge.event.special, r = 0; void 0 !== (n = e[r]); r++) if ($e(n)) {
          if (t = n[He.expando]) {
            if (t.events) for (i in t.events) o[i] ? ge.event.remove(n, i) : ge.removeEvent(n, i, t.handle);
            n[He.expando] = void 0
          }
          n[je.expando] && (n[je.expando] = void 0)
        }
      }
    }), ge.fn.extend({
      detach: function (e) {
        return I(this, e, !0)
      }, remove: function (e) {
        return I(this, e)
      }, text: function (e) {
        return Pe(this, function (e) {
          return void 0 === e ? ge.text(this) : this.empty().each(function () {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
          })
        }, null, e, arguments.length)
      }, append: function () {
        return O(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = E(this, e);
            t.appendChild(e)
          }
        })
      }, prepend: function () {
        return O(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = E(this, e);
            t.insertBefore(e, t.firstChild)
          }
        })
      }, before: function () {
        return O(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this)
        })
      }, after: function () {
        return O(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
      }, empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ge.cleanData(y(e, !1)), e.textContent = "");
        return this
      }, clone: function (e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function () {
          return ge.clone(this, e, t)
        })
      }, html: function (e) {
        return Pe(this, function (e) {
          var t = this[0] || {}, n = 0, i = this.length;
          if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
          if ("string" == typeof e && !nt.test(e) && !Ke[(Ge.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = ge.htmlPrefilter(e);
            try {
              for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (ge.cleanData(y(t, !1)), t.innerHTML = e);
              t = 0
            } catch (e) {
            }
          }
          t && this.empty().append(e)
        }, null, e, arguments.length)
      }, replaceWith: function () {
        var e = [];
        return O(this, arguments, function (t) {
          var n = this.parentNode;
          ge.inArray(this, e) < 0 && (ge.cleanData(y(this)), n && n.replaceChild(t, this))
        }, e)
      }
    }), ge.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function (e, t) {
      ge.fn[e] = function (e) {
        for (var n, i = [], o = ge(e), r = o.length - 1, s = 0; s <= r; s++) n = s === r ? this : this.clone(!0), ge(o[s])[t](n), se.apply(i, n.get());
        return this.pushStack(i)
      }
    });
    var st = /^margin/, at = new RegExp("^(" + We + ")(?!px)[a-z%]+$", "i"), lt = function (t) {
      var n = t.ownerDocument.defaultView;
      return n && n.opener || (n = e), n.getComputedStyle(t)
    };
    !function () {
      function t() {
        if (a) {
          a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Ye.appendChild(s);
          var t = e.getComputedStyle(a);
          n = "1%" !== t.top, r = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", o = "4px" === t.marginRight, Ye.removeChild(s), a = null
        }
      }

      var n, i, o, r, s = ne.createElement("div"), a = ne.createElement("div");
      a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", fe.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), ge.extend(fe, {
        pixelPosition: function () {
          return t(), n
        }, boxSizingReliable: function () {
          return t(), i
        }, pixelMarginRight: function () {
          return t(), o
        }, reliableMarginLeft: function () {
          return t(), r
        }
      }))
    }();
    var ct = /^(none|table(?!-c[ea]).+)/, dt = /^--/,
      ut = {position: "absolute", visibility: "hidden", display: "block"}, pt = {letterSpacing: "0", fontWeight: "400"},
      ft = ["Webkit", "Moz", "ms"], ht = ne.createElement("div").style;
    ge.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = N(e, "opacity");
              return "" === n ? "1" : n
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {float: "cssFloat"},
      style: function (e, t, n, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var o, r, s, a = ge.camelCase(t), l = dt.test(t), c = e.style;
          return l || (t = $(a)), s = ge.cssHooks[t] || ge.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t] : (r = typeof n, "string" === r && (o = Fe.exec(n)) && o[1] && (n = g(e, t, o), r = "number"), void(null != n && n === n && ("number" === r && (n += o && o[3] || (ge.cssNumber[a] ? "" : "px")), fe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))))
        }
      },
      css: function (e, t, n, i) {
        var o, r, s, a = ge.camelCase(t), l = dt.test(t);
        return l || (t = $(a)), s = ge.cssHooks[t] || ge.cssHooks[a], s && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = N(e, t, i)), "normal" === o && t in pt && (o = pt[t]), "" === n || n ? (r = parseFloat(o), n === !0 || isFinite(r) ? r || 0 : o) : o
      }
    }), ge.each(["height", "width"], function (e, t) {
      ge.cssHooks[t] = {
        get: function (e, n, i) {
          if (n) return !ct.test(ge.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? R(e, t, i) : Be(e, ut, function () {
            return R(e, t, i)
          })
        }, set: function (e, n, i) {
          var o, r = i && lt(e), s = i && j(e, t, i, "border-box" === ge.css(e, "boxSizing", !1, r), r);
          return s && (o = Fe.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = ge.css(e, t)), H(e, n, s)
        }
      }
    }), ge.cssHooks.marginLeft = L(fe.reliableMarginLeft, function (e, t) {
      if (t) return (parseFloat(N(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, {marginLeft: 0}, function () {
        return e.getBoundingClientRect().left
      })) + "px"
    }), ge.each({margin: "", padding: "", border: "Width"}, function (e, t) {
      ge.cssHooks[e + t] = {
        expand: function (n) {
          for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + qe[i] + t] = r[i] || r[i - 2] || r[0];
          return o
        }
      }, st.test(e) || (ge.cssHooks[e + t].set = H)
    }), ge.fn.extend({
      css: function (e, t) {
        return Pe(this, function (e, t, n) {
          var i, o, r = {}, s = 0;
          if (Array.isArray(t)) {
            for (i = lt(e), o = t.length; s < o; s++) r[t[s]] = ge.css(e, t[s], !1, i);
            return r
          }
          return void 0 !== n ? ge.style(e, t, n) : ge.css(e, t)
        }, e, t, arguments.length > 1)
      }
    }), ge.Tween = M, M.prototype = {
      constructor: M, init: function (e, t, n, i, o, r) {
        this.elem = e, this.prop = n, this.easing = o || ge.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (ge.cssNumber[n] ? "" : "px")
      }, cur: function () {
        var e = M.propHooks[this.prop];
        return e && e.get ? e.get(this) : M.propHooks._default.get(this)
      }, run: function (e) {
        var t, n = M.propHooks[this.prop];
        return this.options.duration ? this.pos = t = ge.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : M.propHooks._default.set(this), this
      }
    }, M.prototype.init.prototype = M.prototype, M.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ge.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
        }, set: function (e) {
          ge.fx.step[e.prop] ? ge.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ge.cssProps[e.prop]] && !ge.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ge.style(e.elem, e.prop, e.now + e.unit)
        }
      }
    }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
      set: function (e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
    }, ge.easing = {
      linear: function (e) {
        return e
      }, swing: function (e) {
        return .5 - Math.cos(e * Math.PI) / 2
      }, _default: "swing"
    }, ge.fx = M.prototype.init, ge.fx.step = {};
    var gt, mt, vt = /^(?:toggle|show|hide)$/, yt = /queueHooks$/;
    ge.Animation = ge.extend(z, {
      tweeners: {
        "*": [function (e, t) {
          var n = this.createTween(e, t);
          return g(n.elem, e, Fe.exec(t), n), n
        }]
      }, tweener: function (e, t) {
        ge.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ie);
        for (var n, i = 0, o = e.length; i < o; i++) n = e[i], z.tweeners[n] = z.tweeners[n] || [], z.tweeners[n].unshift(t)
      }, prefilters: [B], prefilter: function (e, t) {
        t ? z.prefilters.unshift(e) : z.prefilters.push(e)
      }
    }), ge.speed = function (e, t, n) {
      var i = e && "object" == typeof e ? ge.extend({}, e) : {
        complete: n || !n && t || ge.isFunction(e) && e,
        duration: e,
        easing: n && t || t && !ge.isFunction(t) && t
      };
      return ge.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in ge.fx.speeds ? i.duration = ge.fx.speeds[i.duration] : i.duration = ge.fx.speeds._default), null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
        ge.isFunction(i.old) && i.old.call(this), i.queue && ge.dequeue(this, i.queue)
      }, i
    }, ge.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(Ue).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
      }, animate: function (e, t, n, i) {
        var o = ge.isEmptyObject(e), r = ge.speed(t, n, i), s = function () {
          var t = z(this, ge.extend({}, e), r);
          (o || He.get(this, "finish")) && t.stop(!0)
        };
        return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
      }, stop: function (e, t, n) {
        var i = function (e) {
          var t = e.stop;
          delete e.stop, t(n)
        };
        return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
          var t = !0, o = null != e && e + "queueHooks", r = ge.timers, s = He.get(this);
          if (o) s[o] && s[o].stop && i(s[o]); else for (o in s) s[o] && s[o].stop && yt.test(o) && i(s[o]);
          for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
          !t && n || ge.dequeue(this, e)
        })
      }, finish: function (e) {
        return e !== !1 && (e = e || "fx"), this.each(function () {
          var t, n = He.get(this), i = n[e + "queue"], o = n[e + "queueHooks"], r = ge.timers, s = i ? i.length : 0;
          for (n.finish = !0, ge.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
          for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
          delete n.finish
        })
      }
    }), ge.each(["toggle", "show", "hide"], function (e, t) {
      var n = ge.fn[t];
      ge.fn[t] = function (e, i, o) {
        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(q(t, !0), e, i, o)
      }
    }), ge.each({
      slideDown: q("show"),
      slideUp: q("hide"),
      slideToggle: q("toggle"),
      fadeIn: {opacity: "show"},
      fadeOut: {opacity: "hide"},
      fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
      ge.fn[e] = function (e, n, i) {
        return this.animate(t, e, n, i)
      }
    }), ge.timers = [], ge.fx.tick = function () {
      var e, t = 0, n = ge.timers;
      for (gt = ge.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
      n.length || ge.fx.stop(), gt = void 0
    }, ge.fx.timer = function (e) {
      ge.timers.push(e), ge.fx.start()
    }, ge.fx.interval = 13, ge.fx.start = function () {
      mt || (mt = !0, W())
    }, ge.fx.stop = function () {
      mt = null
    }, ge.fx.speeds = {slow: 600, fast: 200, _default: 400}, ge.fn.delay = function (t, n) {
      return t = ge.fx ? ge.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
        var o = e.setTimeout(n, t);
        i.stop = function () {
          e.clearTimeout(o)
        }
      })
    }, function () {
      var e = ne.createElement("input"), t = ne.createElement("select"), n = t.appendChild(ne.createElement("option"));
      e.type = "checkbox", fe.checkOn = "" !== e.value, fe.optSelected = n.selected, e = ne.createElement("input"), e.value = "t", e.type = "radio", fe.radioValue = "t" === e.value
    }();
    var Tt, bt = ge.expr.attrHandle;
    ge.fn.extend({
      attr: function (e, t) {
        return Pe(this, ge.attr, e, t, arguments.length > 1)
      }, removeAttr: function (e) {
        return this.each(function () {
          ge.removeAttr(this, e)
        })
      }
    }), ge.extend({
      attr: function (e, t, n) {
        var i, o, r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof e.getAttribute ? ge.prop(e, t, n) : (1 === r && ge.isXMLDoc(e) || (o = ge.attrHooks[t.toLowerCase()] || (ge.expr.match.bool.test(t) ? Tt : void 0)), void 0 !== n ? null === n ? void ge.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : (i = ge.find.attr(e, t), null == i ? void 0 : i))
      }, attrHooks: {
        type: {
          set: function (e, t) {
            if (!fe.radioValue && "radio" === t && o(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t
            }
          }
        }
      }, removeAttr: function (e, t) {
        var n, i = 0, o = t && t.match(Ie);
        if (o && 1 === e.nodeType) for (; n = o[i++];) e.removeAttribute(n)
      }
    }), Tt = {
      set: function (e, t, n) {
        return t === !1 ? ge.removeAttr(e, n) : e.setAttribute(n, n), n
      }
    }, ge.each(ge.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = bt[t] || ge.find.attr;
      bt[t] = function (e, t, i) {
        var o, r, s = t.toLowerCase();
        return i || (r = bt[s], bt[s] = o, o = null != n(e, t, i) ? s : null, bt[s] = r), o
      }
    });
    var wt = /^(?:input|select|textarea|button)$/i, _t = /^(?:a|area)$/i;
    ge.fn.extend({
      prop: function (e, t) {
        return Pe(this, ge.prop, e, t, arguments.length > 1)
      }, removeProp: function (e) {
        return this.each(function () {
          delete this[ge.propFix[e] || e]
        })
      }
    }), ge.extend({
      prop: function (e, t, n) {
        var i, o, r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r) return 1 === r && ge.isXMLDoc(e) || (t = ge.propFix[t] || t, o = ge.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
      }, propHooks: {
        tabIndex: {
          get: function (e) {
            var t = ge.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : wt.test(e.nodeName) || _t.test(e.nodeName) && e.href ? 0 : -1
          }
        }
      }, propFix: {for: "htmlFor", class: "className"}
    }), fe.optSelected || (ge.propHooks.selected = {
      get: function (e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null
      }, set: function (e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
      }
    }), ge.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      ge.propFix[this.toLowerCase()] = this
    }), ge.fn.extend({
      addClass: function (e) {
        var t, n, i, o, r, s, a, l = 0;
        if (ge.isFunction(e)) return this.each(function (t) {
          ge(this).addClass(e.call(this, t, Q(this)))
        });
        if ("string" == typeof e && e) for (t = e.match(Ie) || []; n = this[l++];) if (o = Q(n), i = 1 === n.nodeType && " " + G(o) + " ") {
          for (s = 0; r = t[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
          a = G(i), o !== a && n.setAttribute("class", a)
        }
        return this
      }, removeClass: function (e) {
        var t, n, i, o, r, s, a, l = 0;
        if (ge.isFunction(e)) return this.each(function (t) {
          ge(this).removeClass(e.call(this, t, Q(this)))
        });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof e && e) for (t = e.match(Ie) || []; n = this[l++];) if (o = Q(n), i = 1 === n.nodeType && " " + G(o) + " ") {
          for (s = 0; r = t[s++];) for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
          a = G(i), o !== a && n.setAttribute("class", a)
        }
        return this
      }, toggleClass: function (e, t) {
        var n = typeof e;
        return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ge.isFunction(e) ? this.each(function (n) {
          ge(this).toggleClass(e.call(this, n, Q(this), t), t)
        }) : this.each(function () {
          var t, i, o, r;
          if ("string" === n) for (i = 0, o = ge(this), r = e.match(Ie) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else void 0 !== e && "boolean" !== n || (t = Q(this), t && He.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : He.get(this, "__className__") || ""))
        })
      }, hasClass: function (e) {
        var t, n, i = 0;
        for (t = " " + e + " "; n = this[i++];) if (1 === n.nodeType && (" " + G(Q(n)) + " ").indexOf(t) > -1) return !0;
        return !1
      }
    });
    var Ct = /\r/g;
    ge.fn.extend({
      val: function (e) {
        var t, n, i, o = this[0];
        return arguments.length ? (i = ge.isFunction(e), this.each(function (n) {
          var o;
          1 === this.nodeType && (o = i ? e.call(this, n, ge(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = ge.map(o, function (e) {
            return null == e ? "" : e + ""
          })), t = ge.valHooks[this.type] || ge.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
        })) : o ? (t = ge.valHooks[o.type] || ge.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(Ct, "") : null == n ? "" : n)) : void 0
      }
    }), ge.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = ge.find.attr(e, "value");
            return null != t ? t : G(ge.text(e))
          }
        }, select: {
          get: function (e) {
            var t, n, i, r = e.options, s = e.selectedIndex, a = "select-one" === e.type, l = a ? null : [],
              c = a ? s + 1 : r.length;
            for (i = s < 0 ? c : a ? s : 0; i < c; i++) if (n = r[i], (n.selected || i === s) && !n.disabled && (!n.parentNode.disabled || !o(n.parentNode, "optgroup"))) {
              if (t = ge(n).val(), a) return t;
              l.push(t)
            }
            return l
          }, set: function (e, t) {
            for (var n, i, o = e.options, r = ge.makeArray(t), s = o.length; s--;) i = o[s], (i.selected = ge.inArray(ge.valHooks.option.get(i), r) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), r
          }
        }
      }
    }), ge.each(["radio", "checkbox"], function () {
      ge.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t)) return e.checked = ge.inArray(ge(e).val(), t) > -1
        }
      }, fe.checkOn || (ge.valHooks[this].get = function (e) {
        return null === e.getAttribute("value") ? "on" : e.value
      })
    });
    var St = /^(?:focusinfocus|focusoutblur)$/;
    ge.extend(ge.event, {
      trigger: function (t, n, i, o) {
        var r, s, a, l, c, d, u, p = [i || ne], f = de.call(t, "type") ? t.type : t,
          h = de.call(t, "namespace") ? t.namespace.split(".") : [];
        if (s = a = i = i || ne, 3 !== i.nodeType && 8 !== i.nodeType && !St.test(f + ge.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), c = f.indexOf(":") < 0 && "on" + f, t = t[ge.expando] ? t : new ge.Event(f, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : ge.makeArray(n, [t]), u = ge.event.special[f] || {}, o || !u.trigger || u.trigger.apply(i, n) !== !1)) {
          if (!o && !u.noBubble && !ge.isWindow(i)) {
            for (l = u.delegateType || f, St.test(l + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
            a === (i.ownerDocument || ne) && p.push(a.defaultView || a.parentWindow || e)
          }
          for (r = 0; (s = p[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l : u.bindType || f, d = (He.get(s, "events") || {})[t.type] && He.get(s, "handle"), d && d.apply(s, n), d = c && s[c], d && d.apply && $e(s) && (t.result = d.apply(s, n), t.result === !1 && t.preventDefault());
          return t.type = f, o || t.isDefaultPrevented() || u._default && u._default.apply(p.pop(), n) !== !1 || !$e(i) || c && ge.isFunction(i[f]) && !ge.isWindow(i) && (a = i[c], a && (i[c] = null), ge.event.triggered = f, i[f](), ge.event.triggered = void 0, a && (i[c] = a)), t.result
        }
      }, simulate: function (e, t, n) {
        var i = ge.extend(new ge.Event, n, {type: e, isSimulated: !0});
        ge.event.trigger(i, null, t)
      }
    }), ge.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          ge.event.trigger(e, t, this)
        })
      }, triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return ge.event.trigger(e, t, n, !0)
      }
    }), ge.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
      ge.fn[t] = function (e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
      }
    }), ge.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e)
      }
    }), fe.focusin = "onfocusin" in e, fe.focusin || ge.each({focus: "focusin", blur: "focusout"}, function (e, t) {
      var n = function (e) {
        ge.event.simulate(t, e.target, ge.event.fix(e))
      };
      ge.event.special[t] = {
        setup: function () {
          var i = this.ownerDocument || this, o = He.access(i, t);
          o || i.addEventListener(e, n, !0), He.access(i, t, (o || 0) + 1)
        }, teardown: function () {
          var i = this.ownerDocument || this, o = He.access(i, t) - 1;
          o ? He.access(i, t, o) : (i.removeEventListener(e, n, !0), He.remove(i, t))
        }
      }
    });
    var Et = e.location, xt = ge.now(), kt = /\?/;
    ge.parseXML = function (t) {
      var n;
      if (!t || "string" != typeof t) return null;
      try {
        n = (new e.DOMParser).parseFromString(t, "text/xml")
      } catch (e) {
        n = void 0
      }
      return n && !n.getElementsByTagName("parsererror").length || ge.error("Invalid XML: " + t), n
    };
    var At = /\[\]$/, Dt = /\r?\n/g, Ot = /^(?:submit|button|image|reset|file)$/i,
      It = /^(?:input|select|textarea|keygen)/i;
    ge.param = function (e, t) {
      var n, i = [], o = function (e, t) {
        var n = ge.isFunction(t) ? t() : t;
        i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
      };
      if (Array.isArray(e) || e.jquery && !ge.isPlainObject(e)) ge.each(e, function () {
        o(this.name, this.value)
      }); else for (n in e) K(n, e[n], t, o);
      return i.join("&")
    }, ge.fn.extend({
      serialize: function () {
        return ge.param(this.serializeArray())
      }, serializeArray: function () {
        return this.map(function () {
          var e = ge.prop(this, "elements");
          return e ? ge.makeArray(e) : this
        }).filter(function () {
          var e = this.type;
          return this.name && !ge(this).is(":disabled") && It.test(this.nodeName) && !Ot.test(e) && (this.checked || !ze.test(e))
        }).map(function (e, t) {
          var n = ge(this).val();
          return null == n ? null : Array.isArray(n) ? ge.map(n, function (e) {
            return {name: t.name, value: e.replace(Dt, "\r\n")}
          }) : {name: t.name, value: n.replace(Dt, "\r\n")}
        }).get()
      }
    });
    var Nt = /%20/g, Lt = /#.*$/, Pt = /([?&])_=[^&]*/, $t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, jt = /^(?:GET|HEAD)$/, Rt = /^\/\//, Mt = {},
      Wt = {}, Ft = "*/".concat("*"), qt = ne.createElement("a");
    qt.href = Et.href, ge.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Et.href,
        type: "GET",
        isLocal: Ht.test(Et.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Ft,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
        responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
        converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": ge.parseXML},
        flatOptions: {url: !0, context: !0}
      },
      ajaxSetup: function (e, t) {
        return t ? J(J(e, ge.ajaxSettings), t) : J(ge.ajaxSettings, e)
      },
      ajaxPrefilter: X(Mt),
      ajaxTransport: X(Wt),
      ajax: function (t, n) {
        function i(t, n, i, a) {
          var c, p, f, b, w, _ = n;
          d || (d = !0, l && e.clearTimeout(l), o = void 0, s = a || "", C.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (b = Z(h, C, i)), b = ee(h, b, C, c), c ? (h.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (ge.lastModified[r] = w), w = C.getResponseHeader("etag"), w && (ge.etag[r] = w)), 204 === t || "HEAD" === h.type ? _ = "nocontent" : 304 === t ? _ = "notmodified" : (_ = b.state, p = b.data, f = b.error, c = !f)) : (f = _, !t && _ || (_ = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || _) + "", c ? v.resolveWith(g, [p, _, C]) : v.rejectWith(g, [C, _, f]), C.statusCode(T), T = void 0, u && m.trigger(c ? "ajaxSuccess" : "ajaxError", [C, h, c ? p : f]), y.fireWith(g, [C, _]), u && (m.trigger("ajaxComplete", [C, h]), --ge.active || ge.event.trigger("ajaxStop")))
        }

        "object" == typeof t && (n = t, t = void 0), n = n || {};
        var o, r, s, a, l, c, d, u, p, f, h = ge.ajaxSetup({}, n), g = h.context || h,
          m = h.context && (g.nodeType || g.jquery) ? ge(g) : ge.event, v = ge.Deferred(),
          y = ge.Callbacks("once memory"), T = h.statusCode || {}, b = {}, w = {}, _ = "canceled", C = {
            readyState: 0, getResponseHeader: function (e) {
              var t;
              if (d) {
                if (!a) for (a = {}; t = $t.exec(s);) a[t[1].toLowerCase()] = t[2];
                t = a[e.toLowerCase()]
              }
              return null == t ? null : t
            }, getAllResponseHeaders: function () {
              return d ? s : null
            }, setRequestHeader: function (e, t) {
              return null == d && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), this
            }, overrideMimeType: function (e) {
              return null == d && (h.mimeType = e), this
            }, statusCode: function (e) {
              var t;
              if (e) if (d) C.always(e[C.status]); else for (t in e) T[t] = [T[t], e[t]];
              return this
            }, abort: function (e) {
              var t = e || _;
              return o && o.abort(t), i(0, t), this
            }
          };
        if (v.promise(C), h.url = ((t || h.url || Et.href) + "").replace(Rt, Et.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Ie) || [""], null == h.crossDomain) {
          c = ne.createElement("a");
          try {
            c.href = h.url, c.href = c.href, h.crossDomain = qt.protocol + "//" + qt.host != c.protocol + "//" + c.host
          } catch (e) {
            h.crossDomain = !0
          }
        }
        if (h.data && h.processData && "string" != typeof h.data && (h.data = ge.param(h.data, h.traditional)), Y(Mt, h, n, C), d) return C;
        u = ge.event && h.global, u && 0 === ge.active++ && ge.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !jt.test(h.type), r = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Nt, "+")) : (f = h.url.slice(r.length), h.data && (r += (kt.test(r) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (r = r.replace(Pt, "$1"), f = (kt.test(r) ? "&" : "?") + "_=" + xt++ + f), h.url = r + f), h.ifModified && (ge.lastModified[r] && C.setRequestHeader("If-Modified-Since", ge.lastModified[r]), ge.etag[r] && C.setRequestHeader("If-None-Match", ge.etag[r])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : h.accepts["*"]);
        for (p in h.headers) C.setRequestHeader(p, h.headers[p]);
        if (h.beforeSend && (h.beforeSend.call(g, C, h) === !1 || d)) return C.abort();
        if (_ = "abort", y.add(h.complete), C.done(h.success), C.fail(h.error), o = Y(Wt, h, n, C)) {
          if (C.readyState = 1, u && m.trigger("ajaxSend", [C, h]), d) return C;
          h.async && h.timeout > 0 && (l = e.setTimeout(function () {
            C.abort("timeout")
          }, h.timeout));
          try {
            d = !1, o.send(b, i)
          } catch (e) {
            if (d) throw e;
            i(-1, e)
          }
        } else i(-1, "No Transport");
        return C
      },
      getJSON: function (e, t, n) {
        return ge.get(e, t, n, "json")
      },
      getScript: function (e, t) {
        return ge.get(e, void 0, t, "script")
      }
    }), ge.each(["get", "post"], function (e, t) {
      ge[t] = function (e, n, i, o) {
        return ge.isFunction(n) && (o = o || i, i = n, n = void 0), ge.ajax(ge.extend({
          url: e,
          type: t,
          dataType: o,
          data: n,
          success: i
        }, ge.isPlainObject(e) && e))
      }
    }), ge._evalUrl = function (e) {
      return ge.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
    }, ge.fn.extend({
      wrapAll: function (e) {
        var t;
        return this[0] && (ge.isFunction(e) && (e = e.call(this[0])), t = ge(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          for (var e = this; e.firstElementChild;) e = e.firstElementChild;
          return e
        }).append(this)), this
      }, wrapInner: function (e) {
        return ge.isFunction(e) ? this.each(function (t) {
          ge(this).wrapInner(e.call(this, t))
        }) : this.each(function () {
          var t = ge(this), n = t.contents();
          n.length ? n.wrapAll(e) : t.append(e)
        })
      }, wrap: function (e) {
        var t = ge.isFunction(e);
        return this.each(function (n) {
          ge(this).wrapAll(t ? e.call(this, n) : e)
        })
      }, unwrap: function (e) {
        return this.parent(e).not("body").each(function () {
          ge(this).replaceWith(this.childNodes)
        }), this
      }
    }), ge.expr.pseudos.hidden = function (e) {
      return !ge.expr.pseudos.visible(e)
    }, ge.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, ge.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest
      } catch (e) {
      }
    };
    var Ut = {0: 200, 1223: 204}, Bt = ge.ajaxSettings.xhr();
    fe.cors = !!Bt && "withCredentials" in Bt, fe.ajax = Bt = !!Bt, ge.ajaxTransport(function (t) {
      var n, i;
      if (fe.cors || Bt && !t.crossDomain) return {
        send: function (o, r) {
          var s, a = t.xhr();
          if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) a[s] = t.xhrFields[s];
          t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
          for (s in o) a.setRequestHeader(s, o[s]);
          n = function (e) {
            return function () {
              n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Ut[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {binary: a.response} : {text: a.responseText}, a.getAllResponseHeaders()))
            }
          }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
            4 === a.readyState && e.setTimeout(function () {
              n && i()
            })
          }, n = n("abort");
          try {
            a.send(t.hasContent && t.data || null)
          } catch (e) {
            if (n) throw e
          }
        }, abort: function () {
          n && n()
        }
      }
    }), ge.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1)
    }), ge.ajaxSetup({
      accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
      contents: {script: /\b(?:java|ecma)script\b/},
      converters: {
        "text script": function (e) {
          return ge.globalEval(e), e
        }
      }
    }), ge.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), ge.ajaxTransport("script", function (e) {
      if (e.crossDomain) {
        var t, n;
        return {
          send: function (i, o) {
            t = ge("<script>").prop({charset: e.scriptCharset, src: e.url}).on("load error", n = function (e) {
              t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
            }), ne.head.appendChild(t[0])
          }, abort: function () {
            n && n()
          }
        }
      }
    });
    var Vt = [], zt = /(=)\?(?=&|$)|\?\?/;
    ge.ajaxSetup({
      jsonp: "callback", jsonpCallback: function () {
        var e = Vt.pop() || ge.expando + "_" + xt++;
        return this[e] = !0, e
      }
    }), ge.ajaxPrefilter("json jsonp", function (t, n, i) {
      var o, r, s,
        a = t.jsonp !== !1 && (zt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && zt.test(t.data) && "data");
      if (a || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = ge.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(zt, "$1" + o) : t.jsonp !== !1 && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
        return s || ge.error(o + " was not called"), s[0]
      }, t.dataTypes[0] = "json", r = e[o], e[o] = function () {
        s = arguments
      }, i.always(function () {
        void 0 === r ? ge(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Vt.push(o)), s && ge.isFunction(r) && r(s[0]), s = r = void 0
      }), "script"
    }), fe.createHTMLDocument = function () {
      var e = ne.implementation.createHTMLDocument("").body;
      return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), ge.parseHTML = function (e, t, n) {
      if ("string" != typeof e) return [];
      "boolean" == typeof t && (n = t, t = !1);
      var i, o, r;
      return t || (fe.createHTMLDocument ? (t = ne.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = ne.location.href, t.head.appendChild(i)) : t = ne), o = Se.exec(e), r = !n && [], o ? [t.createElement(o[1])] : (o = b([e], t, r), r && r.length && ge(r).remove(), ge.merge([], o.childNodes))
    }, ge.fn.load = function (e, t, n) {
      var i, o, r, s = this, a = e.indexOf(" ");
      return a > -1 && (i = G(e.slice(a)), e = e.slice(0, a)), ge.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && ge.ajax({
        url: e,
        type: o || "GET",
        dataType: "html",
        data: t
      }).done(function (e) {
        r = arguments, s.html(i ? ge("<div>").append(ge.parseHTML(e)).find(i) : e)
      }).always(n && function (e, t) {
        s.each(function () {
          n.apply(this, r || [e.responseText, t, e])
        })
      }), this
    }, ge.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
      ge.fn[t] = function (e) {
        return this.on(t, e)
      }
    }), ge.expr.pseudos.animated = function (e) {
      return ge.grep(ge.timers, function (t) {
        return e === t.elem
      }).length
    }, ge.offset = {
      setOffset: function (e, t, n) {
        var i, o, r, s, a, l, c, d = ge.css(e, "position"), u = ge(e), p = {};
        "static" === d && (e.style.position = "relative"), a = u.offset(), r = ge.css(e, "top"), l = ge.css(e, "left"), c = ("absolute" === d || "fixed" === d) && (r + l).indexOf("auto") > -1, c ? (i = u.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), ge.isFunction(t) && (t = t.call(e, n, ge.extend({}, a))), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + o), "using" in t ? t.using.call(e, p) : u.css(p)
      }
    }, ge.fn.extend({
      offset: function (e) {
        if (arguments.length) return void 0 === e ? this : this.each(function (t) {
          ge.offset.setOffset(this, e, t)
        });
        var t, n, i, o, r = this[0];
        return r ? r.getClientRects().length ? (i = r.getBoundingClientRect(), t = r.ownerDocument, n = t.documentElement, o = t.defaultView, {
          top: i.top + o.pageYOffset - n.clientTop,
          left: i.left + o.pageXOffset - n.clientLeft
        }) : {top: 0, left: 0} : void 0
      }, position: function () {
        if (this[0]) {
          var e, t, n = this[0], i = {top: 0, left: 0};
          return "fixed" === ge.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), o(e[0], "html") || (i = e.offset()), i = {
            top: i.top + ge.css(e[0], "borderTopWidth", !0),
            left: i.left + ge.css(e[0], "borderLeftWidth", !0)
          }), {top: t.top - i.top - ge.css(n, "marginTop", !0), left: t.left - i.left - ge.css(n, "marginLeft", !0)}
        }
      }, offsetParent: function () {
        return this.map(function () {
          for (var e = this.offsetParent; e && "static" === ge.css(e, "position");) e = e.offsetParent;
          return e || Ye
        })
      }
    }), ge.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
      var n = "pageYOffset" === t;
      ge.fn[e] = function (i) {
        return Pe(this, function (e, i, o) {
          var r;
          return ge.isWindow(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o ? r ? r[t] : e[i] : void(r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o)
        }, e, i, arguments.length)
      }
    }), ge.each(["top", "left"], function (e, t) {
      ge.cssHooks[t] = L(fe.pixelPosition, function (e, n) {
        if (n) return n = N(e, t), at.test(n) ? ge(e).position()[t] + "px" : n
      })
    }), ge.each({Height: "height", Width: "width"}, function (e, t) {
      ge.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, i) {
        ge.fn[i] = function (o, r) {
          var s = arguments.length && (n || "boolean" != typeof o),
            a = n || (o === !0 || r === !0 ? "margin" : "border");
          return Pe(this, function (t, n, o) {
            var r;
            return ge.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? ge.css(t, n, a) : ge.style(t, n, o, a)
          }, t, s ? o : void 0, s)
        }
      })
    }), ge.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n)
      }, unbind: function (e, t) {
        return this.off(e, null, t)
      }, delegate: function (e, t, n, i) {
        return this.on(t, e, n, i)
      }, undelegate: function (e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
      }
    }), ge.holdReady = function (e) {
      e ? ge.readyWait++ : ge.ready(!0)
    }, ge.isArray = Array.isArray, ge.parseJSON = JSON.parse, ge.nodeName = o, "function" == typeof define && define.amd && define("jquery", [], function () {
      return ge
    });
    var Gt = e.jQuery, Qt = e.$;
    return ge.noConflict = function (t) {
      return e.$ === ge && (e.$ = Qt), t && e.jQuery === ge && (e.jQuery = Gt), ge
    }, t || (e.jQuery = e.$ = ge), ge
  }), function (e) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (e) {
  "use strict";
  var t = window.Slick || {};
  t = function () {
    function t(t, i) {
      var o, r = this;
      r.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: e(t),
        appendDots: e(t),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (t, n) {
          return e('<button type="button" />').text(n + 1)
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, r.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: !1,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        swiping: !1,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, e.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = e(t), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, o = e(t).data("slick") || {}, r.options = e.extend({}, r.defaults, i, o), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, "undefined" != typeof document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = e.proxy(r.autoPlay, r), r.autoPlayClear = e.proxy(r.autoPlayClear, r), r.autoPlayIterator = e.proxy(r.autoPlayIterator, r), r.changeSlide = e.proxy(r.changeSlide, r), r.clickHandler = e.proxy(r.clickHandler, r), r.selectHandler = e.proxy(r.selectHandler, r), r.setPosition = e.proxy(r.setPosition, r), r.swipeHandler = e.proxy(r.swipeHandler, r), r.dragHandler = e.proxy(r.dragHandler, r), r.keyHandler = e.proxy(r.keyHandler, r), r.instanceUid = n++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0)
    }

    var n = 0;
    return t
  }(), t.prototype.activateADA = function () {
    var e = this;
    e.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})
  }, t.prototype.addSlide = t.prototype.slickAdd = function (t, n, i) {
    var o = this;
    if ("boolean" == typeof n) i = n, n = null; else if (n < 0 || n >= o.slideCount) return !1;
    o.unload(), "number" == typeof n ? 0 === n && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : i ? e(t).insertBefore(o.$slides.eq(n)) : e(t).insertAfter(o.$slides.eq(n)) : i === !0 ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function (t, n) {
      e(n).attr("data-slick-index", t)
    }), o.$slidesCache = o.$slides, o.reinit()
  }, t.prototype.animateHeight = function () {
    var e = this;
    if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
      var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
      e.$list.animate({height: t}, e.options.speed)
    }
  }, t.prototype.animateSlide = function (t, n) {
    var i = {}, o = this;
    o.animateHeight(), o.options.rtl === !0 && o.options.vertical === !1 && (t = -t), o.transformsEnabled === !1 ? o.options.vertical === !1 ? o.$slideTrack.animate({left: t}, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({top: t}, o.options.speed, o.options.easing, n) : o.cssTransitions === !1 ? (o.options.rtl === !0 && (o.currentLeft = -o.currentLeft), e({animStart: o.currentLeft}).animate({animStart: t}, {
      duration: o.options.speed,
      easing: o.options.easing,
      step: function (e) {
        e = Math.ceil(e), o.options.vertical === !1 ? (i[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(i))
      },
      complete: function () {
        n && n.call()
      }
    })) : (o.applyTransition(), t = Math.ceil(t), o.options.vertical === !1 ? i[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(i), n && setTimeout(function () {
      o.disableTransition(), n.call()
    }, o.options.speed))
  }, t.prototype.getNavTarget = function () {
    var t = this, n = t.options.asNavFor;
    return n && null !== n && (n = e(n).not(t.$slider)), n
  }, t.prototype.asNavFor = function (t) {
    var n = this, i = n.getNavTarget();
    null !== i && "object" == typeof i && i.each(function () {
      var n = e(this).slick("getSlick");
      n.unslicked || n.slideHandler(t, !0)
    })
  }, t.prototype.applyTransition = function (e) {
    var t = this, n = {};
    t.options.fade === !1 ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
  }, t.prototype.autoPlay = function () {
    var e = this;
    e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
  }, t.prototype.autoPlayClear = function () {
    var e = this;
    e.autoPlayTimer && clearInterval(e.autoPlayTimer)
  }, t.prototype.autoPlayIterator = function () {
    var e = this, t = e.currentSlide + e.options.slidesToScroll;
    e.paused || e.interrupted || e.focussed || (e.options.infinite === !1 && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 === 0 && (e.direction = 1))), e.slideHandler(t))
  }, t.prototype.buildArrows = function () {
    var t = this;
    t.options.arrows === !0 && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
      "aria-disabled": "true",
      tabindex: "-1"
    }))
  }, t.prototype.buildDots = function () {
    var t, n, i = this;
    if (i.options.dots === !0) {
      for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
      i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active")
    }
  }, t.prototype.buildOut = function () {
    var t = this;
    t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function (t, n) {
      e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "")
    }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), t.options.centerMode !== !0 && t.options.swipeToSlide !== !0 || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.options.draggable === !0 && t.$list.addClass("draggable")
  }, t.prototype.buildRows = function () {
    var e, t, n, i, o, r, s, a = this;
    if (i = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 1) {
      for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; e < o; e++) {
        var l = document.createElement("div");
        for (t = 0; t < a.options.rows; t++) {
          var c = document.createElement("div");
          for (n = 0; n < a.options.slidesPerRow; n++) {
            var d = e * s + (t * a.options.slidesPerRow + n);
            r.get(d) && c.appendChild(r.get(d))
          }
          l.appendChild(c)
        }
        i.appendChild(l)
      }
      a.$slider.empty().append(i), a.$slider.children().children().children().css({
        width: 100 / a.options.slidesPerRow + "%",
        display: "inline-block"
      })
    }
  }, t.prototype.checkResponsive = function (t, n) {
    var i, o, r, s = this, a = !1, l = s.$slider.width(), c = window.innerWidth || e(window).width();
    if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
      o = null;
      for (i in s.breakpoints) s.breakpoints.hasOwnProperty(i) && (s.originalSettings.mobileFirst === !1 ? r < s.breakpoints[i] && (o = s.breakpoints[i]) : r > s.breakpoints[i] && (o = s.breakpoints[i]));
      null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || n) && (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), t === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), t === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, t === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = o), t || a === !1 || s.$slider.trigger("breakpoint", [s, a])
    }
  }, t.prototype.changeSlide = function (t, n) {
    var i, o, r, s = this, a = e(t.currentTarget);
    switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), r = s.slideCount % s.options.slidesToScroll !== 0, i = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, t.data.message) {
      case"previous":
        o = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, n);
        break;
      case"next":
        o = 0 === i ? s.options.slidesToScroll : i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, n);
        break;
      case"index":
        var l = 0 === t.data.index ? 0 : t.data.index || a.index() * s.options.slidesToScroll;
        s.slideHandler(s.checkNavigable(l), !1, n), a.children().trigger("focus");
        break;
      default:
        return
    }
  }, t.prototype.checkNavigable = function (e) {
    var t, n, i = this;
    if (t = i.getNavigableIndexes(), n = 0, e > t[t.length - 1]) e = t[t.length - 1]; else for (var o in t) {
      if (e < t[o]) {
        e = n;
        break
      }
      n = t[o]
    }
    return e
  }, t.prototype.cleanUpEvents = function () {
    var t = this;
    t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), t.options.accessibility === !0 && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), t.options.accessibility === !0 && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
  }, t.prototype.cleanUpSlideEvents = function () {
    var t = this;
    t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
  }, t.prototype.cleanUpRows = function () {
    var e, t = this;
    t.options.rows > 1 && (e = t.$slides.children().children(), e.removeAttr("style"), t.$slider.empty().append(e))
  }, t.prototype.clickHandler = function (e) {
    var t = this;
    t.shouldClick === !1 && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
  }, t.prototype.destroy = function (t) {
    var n = this;
    n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      e(this).attr("style", e(this).data("originalStyling"))
    }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, t || n.$slider.trigger("destroy", [n])
  }, t.prototype.disableTransition = function (e) {
    var t = this, n = {};
    n[t.transitionType] = "", t.options.fade === !1 ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
  }, t.prototype.fadeSlide = function (e, t) {
    var n = this;
    n.cssTransitions === !1 ? (n.$slides.eq(e).css({zIndex: n.options.zIndex}), n.$slides.eq(e).animate({opacity: 1}, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
      opacity: 1,
      zIndex: n.options.zIndex
    }), t && setTimeout(function () {
      n.disableTransition(e), t.call()
    }, n.options.speed))
  }, t.prototype.fadeSlideOut = function (e) {
    var t = this;
    t.cssTransitions === !1 ? t.$slides.eq(e).animate({
      opacity: 0,
      zIndex: t.options.zIndex - 2
    }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
      opacity: 0,
      zIndex: t.options.zIndex - 2
    }))
  }, t.prototype.filterSlides = t.prototype.slickFilter = function (e) {
    var t = this;
    null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
  }, t.prototype.focusHandler = function () {
    var t = this;
    t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (n) {
      n.stopImmediatePropagation();
      var i = e(this);
      setTimeout(function () {
        t.options.pauseOnFocus && (t.focussed = i.is(":focus"), t.autoPlay())
      }, 0)
    })
  }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
    var e = this;
    return e.currentSlide
  }, t.prototype.getDotCount = function () {
    var e = this, t = 0, n = 0, i = 0;
    if (e.options.infinite === !0) if (e.slideCount <= e.options.slidesToShow) ++i; else for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; else if (e.options.centerMode === !0) i = e.slideCount; else if (e.options.asNavFor) for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
    return i - 1
  }, t.prototype.getLeft = function (e) {
    var t, n, i, o, r = this, s = 0;
    return r.slideOffset = 0, n = r.$slides.first().outerHeight(!0), r.options.infinite === !0 ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = -1, r.options.vertical === !0 && r.options.centerMode === !0 && (2 === r.options.slidesToShow ? o = -1.5 : 1 === r.options.slidesToShow && (o = -2)), s = n * r.options.slidesToShow * o), r.slideCount % r.options.slidesToScroll !== 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, s = (r.options.slidesToShow - (e - r.slideCount)) * n * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, s = r.slideCount % r.options.slidesToScroll * n * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, s = (e + r.options.slidesToShow - r.slideCount) * n), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, s = 0), r.options.centerMode === !0 && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : r.options.centerMode === !0 && r.options.infinite === !0 ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : r.options.centerMode === !0 && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = r.options.vertical === !1 ? e * r.slideWidth * -1 + r.slideOffset : e * n * -1 + s, r.options.variableWidth === !0 && (i = r.slideCount <= r.options.slidesToShow || r.options.infinite === !1 ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), t = r.options.rtl === !0 ? i[0] ? (r.$slideTrack.width() - i[0].offsetLeft - i.width()) * -1 : 0 : i[0] ? i[0].offsetLeft * -1 : 0, r.options.centerMode === !0 && (i = r.slideCount <= r.options.slidesToShow || r.options.infinite === !1 ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), t = r.options.rtl === !0 ? i[0] ? (r.$slideTrack.width() - i[0].offsetLeft - i.width()) * -1 : 0 : i[0] ? i[0].offsetLeft * -1 : 0, t += (r.$list.width() - i.outerWidth()) / 2)), t
  }, t.prototype.getOption = t.prototype.slickGetOption = function (e) {
    var t = this;
    return t.options[e]
  }, t.prototype.getNavigableIndexes = function () {
    var e, t = this, n = 0, i = 0, o = [];
    for (t.options.infinite === !1 ? e = t.slideCount : (n = t.options.slidesToScroll * -1, i = t.options.slidesToScroll * -1, e = 2 * t.slideCount); n < e;) o.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
    return o
  }, t.prototype.getSlick = function () {
    return this
  }, t.prototype.getSlideCount = function () {
    var t, n, i, o = this;
    return i = o.options.centerMode === !0 ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, o.options.swipeToSlide === !0 ? (o.$slideTrack.find(".slick-slide").each(function (t, r) {
      if (r.offsetLeft - i + e(r).outerWidth() / 2 > o.swipeLeft * -1) return n = r, !1
    }), t = Math.abs(e(n).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
  }, t.prototype.goTo = t.prototype.slickGoTo = function (e, t) {
    var n = this;
    n.changeSlide({data: {message: "index", index: parseInt(e)}}, t)
  }, t.prototype.init = function (t) {
    var n = this;
    e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), t && n.$slider.trigger("init", [n]), n.options.accessibility === !0 && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay())
  }, t.prototype.initADA = function () {
    var t = this, n = Math.ceil(t.slideCount / t.options.slidesToShow),
      i = t.getNavigableIndexes().filter(function (e) {
        return e >= 0 && e < t.slideCount
      });
    t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({tabindex: "-1"}), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (n) {
      var o = i.indexOf(n);
      e(this).attr({
        role: "tabpanel",
        id: "slick-slide" + t.instanceUid + n,
        tabindex: -1
      }), o !== -1 && e(this).attr({"aria-describedby": "slick-slide-control" + t.instanceUid + o})
    }), t.$dots.attr("role", "tablist").find("li").each(function (o) {
      var r = i[o];
      e(this).attr({role: "presentation"}), e(this).find("button").first().attr({
        role: "tab",
        id: "slick-slide-control" + t.instanceUid + o,
        "aria-controls": "slick-slide" + t.instanceUid + r,
        "aria-label": o + 1 + " of " + n,
        "aria-selected": null,
        tabindex: "-1"
      })
    }).eq(t.currentSlide).find("button").attr({"aria-selected": "true", tabindex: "0"}).end());
    for (var o = t.currentSlide, r = o + t.options.slidesToShow; o < r; o++) t.$slides.eq(o).attr("tabindex", 0);
    t.activateADA()
  }, t.prototype.initArrowEvents = function () {
    var e = this;
    e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {message: "previous"}, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {message: "next"}, e.changeSlide), e.options.accessibility === !0 && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
  }, t.prototype.initDotEvents = function () {
    var t = this;
    t.options.dots === !0 && (e("li", t.$dots).on("click.slick", {message: "index"}, t.changeSlide), t.options.accessibility === !0 && t.$dots.on("keydown.slick", t.keyHandler)), t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
  }, t.prototype.initSlideEvents = function () {
    var t = this;
    t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
  }, t.prototype.initializeEvents = function () {
    var t = this;
    t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {action: "start"}, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {action: "move"}, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {action: "end"}, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition)
  }, t.prototype.initUI = function () {
    var e = this;
    e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show()
  }, t.prototype.keyHandler = function (e) {
    var t = this;
    e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && t.options.accessibility === !0 ? t.changeSlide({data: {message: t.options.rtl === !0 ? "next" : "previous"}}) : 39 === e.keyCode && t.options.accessibility === !0 && t.changeSlide({data: {message: t.options.rtl === !0 ? "previous" : "next"}}))
  }, t.prototype.lazyLoad = function () {
    function t(t) {
      e("img[data-lazy]", t).each(function () {
        var t = e(this), n = e(this).attr("data-lazy"), i = e(this).attr("data-srcset"),
          o = e(this).attr("data-sizes") || s.$slider.attr("data-sizes"), r = document.createElement("img");
        r.onload = function () {
          t.animate({opacity: 0}, 100, function () {
            i && (t.attr("srcset", i), o && t.attr("sizes", o)), t.attr("src", n).animate({opacity: 1}, 200, function () {
              t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
            }), s.$slider.trigger("lazyLoaded", [s, t, n])
          })
        }, r.onerror = function () {
          t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, t, n])
        }, r.src = n
      })
    }

    var n, i, o, r, s = this;
    if (s.options.centerMode === !0 ? s.options.infinite === !0 ? (o = s.currentSlide + (s.options.slidesToShow / 2 + 1), r = o + s.options.slidesToShow + 2) : (o = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), r = 2 + (s.options.slidesToShow / 2 + 1) + s.currentSlide) : (o = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, r = Math.ceil(o + s.options.slidesToShow), s.options.fade === !0 && (o > 0 && o--, r <= s.slideCount && r++)), n = s.$slider.find(".slick-slide").slice(o, r), "anticipated" === s.options.lazyLoad) for (var a = o - 1, l = r, c = s.$slider.find(".slick-slide"), d = 0; d < s.options.slidesToScroll; d++) a < 0 && (a = s.slideCount - 1), n = n.add(c.eq(a)), n = n.add(c.eq(l)), a--, l++;
    t(n), s.slideCount <= s.options.slidesToShow ? (i = s.$slider.find(".slick-slide"), t(i)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (i = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow), t(i)) : 0 === s.currentSlide && (i = s.$slider.find(".slick-cloned").slice(s.options.slidesToShow * -1), t(i))
  }, t.prototype.loadSlider = function () {
    var e = this;
    e.setPosition(), e.$slideTrack.css({opacity: 1}), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
  }, t.prototype.next = t.prototype.slickNext = function () {
    var e = this;
    e.changeSlide({data: {message: "next"}})
  }, t.prototype.orientationChange = function () {
    var e = this;
    e.checkResponsive(), e.setPosition()
  }, t.prototype.pause = t.prototype.slickPause = function () {
    var e = this;
    e.autoPlayClear(), e.paused = !0
  }, t.prototype.play = t.prototype.slickPlay = function () {
    var e = this;
    e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
  }, t.prototype.postSlide = function (t) {
    var n = this;
    if (!n.unslicked && (n.$slider.trigger("afterChange", [n, t]), n.animating = !1, n.slideCount > n.options.slidesToShow && n.setPosition(), n.swipeLeft = null, n.options.autoplay && n.autoPlay(), n.options.accessibility === !0 && (n.initADA(), n.options.focusOnChange))) {
      var i = e(n.$slides.get(n.currentSlide));
      i.attr("tabindex", 0).focus()
    }
  }, t.prototype.prev = t.prototype.slickPrev = function () {
    var e = this;
    e.changeSlide({data: {message: "previous"}})
  }, t.prototype.preventDefault = function (e) {
    e.preventDefault()
  }, t.prototype.progressiveLazyLoad = function (t) {
    t = t || 1;
    var n, i, o, r, s, a = this, l = e("img[data-lazy]", a.$slider);
    l.length ? (n = l.first(), i = n.attr("data-lazy"), o = n.attr("data-srcset"), r = n.attr("data-sizes") || a.$slider.attr("data-sizes"), s = document.createElement("img"), s.onload = function () {
      o && (n.attr("srcset", o), r && n.attr("sizes", r)), n.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), a.options.adaptiveHeight === !0 && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, n, i]), a.progressiveLazyLoad()
    }, s.onerror = function () {
      t < 3 ? setTimeout(function () {
        a.progressiveLazyLoad(t + 1)
      }, 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, n, i]), a.progressiveLazyLoad())
    }, s.src = i) : a.$slider.trigger("allImagesLoaded", [a])
  }, t.prototype.refresh = function (t) {
    var n, i, o = this;
    i = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > i && (o.currentSlide = i), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), n = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, {currentSlide: n}), o.init(), t || o.changeSlide({
      data: {
        message: "index",
        index: n
      }
    }, !1)
  }, t.prototype.registerBreakpoints = function () {
    var t, n, i, o = this, r = o.options.responsive || null;
    if ("array" === e.type(r) && r.length) {
      o.respondTo = o.options.respondTo || "window";
      for (t in r) if (i = o.breakpoints.length - 1, r.hasOwnProperty(t)) {
        for (n = r[t].breakpoint; i >= 0;) o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1), i--;
        o.breakpoints.push(n), o.breakpointSettings[n] = r[t].settings
      }
      o.breakpoints.sort(function (e, t) {
        return o.options.mobileFirst ? e - t : t - e
      })
    }
  }, t.prototype.reinit = function () {
    var t = this;
    t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
  }, t.prototype.resize = function () {
    var t = this;
    e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function () {
      t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
    }, 50))
  }, t.prototype.removeSlide = t.prototype.slickRemove = function (e, t, n) {
    var i = this;
    return "boolean" == typeof e ? (t = e, e = t === !0 ? 0 : i.slideCount - 1) : e = t === !0 ? --e : e, !(i.slideCount < 1 || e < 0 || e > i.slideCount - 1) && (i.unload(), n === !0 ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, void i.reinit())
  }, t.prototype.setCSS = function (e) {
    var t, n, i = this, o = {};
    i.options.rtl === !0 && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, i.transformsEnabled === !1 ? i.$slideTrack.css(o) : (o = {}, i.cssTransitions === !1 ? (o[i.animType] = "translate(" + t + ", " + n + ")", i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", i.$slideTrack.css(o)))
  }, t.prototype.setDimensions = function () {
    var e = this;
    e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({padding: "0px " + e.options.centerPadding}) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), e.options.centerMode === !0 && e.$list.css({padding: e.options.centerPadding + " 0px"})), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), e.options.vertical === !1 && e.options.variableWidth === !1 ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : e.options.variableWidth === !0 ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
    var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
    e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
  }, t.prototype.setFade = function () {
    var t, n = this;
    n.$slides.each(function (i, o) {
      t = n.slideWidth * i * -1, n.options.rtl === !0 ? e(o).css({
        position: "relative",
        right: t,
        top: 0,
        zIndex: n.options.zIndex - 2,
        opacity: 0
      }) : e(o).css({position: "relative", left: t, top: 0, zIndex: n.options.zIndex - 2, opacity: 0})
    }), n.$slides.eq(n.currentSlide).css({zIndex: n.options.zIndex - 1, opacity: 1})
  }, t.prototype.setHeight = function () {
    var e = this;
    if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
      var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
      e.$list.css("height", t)
    }
  }, t.prototype.setOption = t.prototype.slickSetOption = function () {
    var t, n, i, o, r, s = this, a = !1;
    if ("object" === e.type(arguments[0]) ? (i = arguments[0], a = arguments[1], r = "multiple") : "string" === e.type(arguments[0]) && (i = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? r = "responsive" : "undefined" != typeof arguments[1] && (r = "single")), "single" === r) s.options[i] = o; else if ("multiple" === r) e.each(i, function (e, t) {
      s.options[e] = t
    }); else if ("responsive" === r) for (n in o) if ("array" !== e.type(s.options.responsive)) s.options.responsive = [o[n]]; else {
      for (t = s.options.responsive.length - 1; t >= 0;) s.options.responsive[t].breakpoint === o[n].breakpoint && s.options.responsive.splice(t, 1), t--;
      s.options.responsive.push(o[n])
    }
    a && (s.unload(), s.reinit())
  }, t.prototype.setPosition = function () {
    var e = this;
    e.setDimensions(), e.setHeight(), e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
  }, t.prototype.setProps = function () {
    var e = this, t = document.body.style;
    e.positionProp = e.options.vertical === !0 ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || e.options.useCSS === !0 && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && e.animType !== !1 && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && e.animType !== !1
  }, t.prototype.setSlideClasses = function (e) {
    var t, n, i, o, r = this;
    if (n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), r.options.centerMode === !0) {
      var s = r.options.slidesToShow % 2 === 0 ? 1 : 0;
      t = Math.floor(r.options.slidesToShow / 2), r.options.infinite === !0 && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t + s, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + e, n.slice(i - t + 1 + s, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")
    } else e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, i = r.options.infinite === !0 ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
    "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad()
  }, t.prototype.setupInfinite = function () {
    var t, n, i, o = this;
    if (o.options.fade === !0 && (o.options.centerMode = !1), o.options.infinite === !0 && o.options.fade === !1 && (n = null, o.slideCount > o.options.slidesToShow)) {
      for (i = o.options.centerMode === !0 ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1) n = t - 1, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
      for (t = 0; t < i + o.slideCount; t += 1) n = t, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
      o.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        e(this).attr("id", "")
      })
    }
  }, t.prototype.interrupt = function (e) {
    var t = this;
    e || t.autoPlay(), t.interrupted = e
  }, t.prototype.selectHandler = function (t) {
    var n = this, i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
      o = parseInt(i.attr("data-slick-index"));
    return o || (o = 0), n.slideCount <= n.options.slidesToShow ? void n.slideHandler(o, !1, !0) : void n.slideHandler(o)
  }, t.prototype.slideHandler = function (e, t, n) {
    var i, o, r, s, a, l = null, c = this;
    if (t = t || !1, !(c.animating === !0 && c.options.waitForAnimate === !0 || c.options.fade === !0 && c.currentSlide === e)) return t === !1 && c.asNavFor(e), i = e, l = c.getLeft(i), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, c.options.infinite === !1 && c.options.centerMode === !1 && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll) ? void(c.options.fade === !1 && (i = c.currentSlide, n !== !0 ? c.animateSlide(s, function () {
      c.postSlide(i)
    }) : c.postSlide(i))) : c.options.infinite === !1 && c.options.centerMode === !0 && (e < 0 || e > c.slideCount - c.options.slidesToScroll) ? void(c.options.fade === !1 && (i = c.currentSlide, n !== !0 ? c.animateSlide(s, function () {
      c.postSlide(i)
    }) : c.postSlide(i))) : (c.options.autoplay && clearInterval(c.autoPlayTimer), o = i < 0 ? c.slideCount % c.options.slidesToScroll !== 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll !== 0 ? 0 : i - c.slideCount : i, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), r = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = c.getNavTarget(), a = a.slick("getSlick"), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)), c.updateDots(), c.updateArrows(), c.options.fade === !0 ? (n !== !0 ? (c.fadeSlideOut(r), c.fadeSlide(o, function () {
      c.postSlide(o)
    })) : c.postSlide(o), void c.animateHeight()) : void(n !== !0 ? c.animateSlide(l, function () {
      c.postSlide(o)
    }) : c.postSlide(o)))
  }, t.prototype.startLoad = function () {
    var e = this;
    e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
  }, t.prototype.swipeDirection = function () {
    var e, t, n, i, o = this;
    return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(t, e), i = Math.round(180 * n / Math.PI), i < 0 && (i = 360 - Math.abs(i)), i <= 45 && i >= 0 ? o.options.rtl === !1 ? "left" : "right" : i <= 360 && i >= 315 ? o.options.rtl === !1 ? "left" : "right" : i >= 135 && i <= 225 ? o.options.rtl === !1 ? "right" : "left" : o.options.verticalSwiping === !0 ? i >= 35 && i <= 135 ? "down" : "up" : "vertical"
  }, t.prototype.swipeEnd = function (e) {
    var t, n, i = this;
    if (i.dragging = !1, i.swiping = !1, i.scrolling) return i.scrolling = !1, !1;
    if (i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1;
    if (i.touchObject.edgeHit === !0 && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
      switch (n = i.swipeDirection()) {
        case"left":
        case"down":
          t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
          break;
        case"right":
        case"up":
          t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
      }
      "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
    } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
  }, t.prototype.swipeHandler = function (e) {
    var t = this;
    if (!(t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1 || t.options.draggable === !1 && e.type.indexOf("mouse") !== -1)) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, t.options.verticalSwiping === !0 && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
      case"start":
        t.swipeStart(e);
        break;
      case"move":
        t.swipeMove(e);
        break;
      case"end":
        t.swipeEnd(e)
    }
  }, t.prototype.swipeMove = function (e) {
    var t, n, i, o, r, s, a = this;
    return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || r && 1 !== r.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && s > 4 ? (a.scrolling = !0, !1) : (a.options.verticalSwiping === !0 && (a.touchObject.swipeLength = s), n = a.swipeDirection(), void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, e.preventDefault()), o = (a.options.rtl === !1 ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), a.options.verticalSwiping === !0 && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), i = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, a.options.infinite === !1 && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (i = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), a.options.vertical === !1 ? a.swipeLeft = t + i * o : a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * o, a.options.verticalSwiping === !0 && (a.swipeLeft = t + i * o), a.options.fade !== !0 && a.options.touchMove !== !1 && (a.animating === !0 ? (a.swipeLeft = null, !1) : (a.setCSS(a.swipeLeft), void a.$slider.trigger("swipeMove", [a, a.swipeLeft, o, i])))))
  }, t.prototype.swipeStart = function (e) {
    var t, n = this;
    return n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow ? (n.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(n.dragging = !0))
  }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
    var e = this;
    null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(),
      e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
  }, t.prototype.unload = function () {
    var t = this;
    e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
  }, t.prototype.unslick = function (e) {
    var t = this;
    t.$slider.trigger("unslick", [t, e]), t.destroy()
  }, t.prototype.updateArrows = function () {
    var e, t = this;
    e = Math.floor(t.options.slidesToShow / 2), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && t.options.centerMode === !1 ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && t.options.centerMode === !0 && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
  }, t.prototype.updateDots = function () {
    var e = this;
    null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
  }, t.prototype.visibility = function () {
    var e = this;
    e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
  }, e.fn.slick = function () {
    var e, n, i = this, o = arguments[0], r = Array.prototype.slice.call(arguments, 1), s = i.length;
    for (e = 0; e < s; e++) if ("object" == typeof o || "undefined" == typeof o ? i[e].slick = new t(i[e], o) : n = i[e].slick[o].apply(i[e].slick, r), "undefined" != typeof n) return n;
    return i
  }
});
/*!
 * bootstrap.min.js
 */
/*!
  * Bootstrap v4.0.0-beta (https://getbootstrap.com)
  * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
var bootstrap = function (e, t, n) {
  "use strict";
  t = t && t.hasOwnProperty("default") ? t.default : t, n = n && n.hasOwnProperty("default") ? n.default : n;
  var i = function () {
    function e(e) {
      return {}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
    }

    function n(e) {
      return (e[0] || e).nodeType
    }

    function i() {
      return {
        bindType: s.end, delegateType: s.end, handle: function (e) {
          if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
        }
      }
    }

    function o() {
      if (window.QUnit) return !1;
      var e = document.createElement("bootstrap");
      for (var t in a) if ("undefined" != typeof e.style[t]) return {end: a[t]};
      return !1
    }

    function r(e) {
      var n = this, i = !1;
      return t(this).one(l.TRANSITION_END, function () {
        i = !0
      }), setTimeout(function () {
        i || l.triggerTransitionEnd(n)
      }, e), this
    }

    var s = !1, a = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "oTransitionEnd otransitionend",
      transition: "transitionend"
    }, l = {
      TRANSITION_END: "bsTransitionEnd", getUID: function (e) {
        do e += ~~(1e6 * Math.random()); while (document.getElementById(e));
        return e
      }, getSelectorFromElement: function (e) {
        var n = e.getAttribute("data-target");
        n && "#" !== n || (n = e.getAttribute("href") || "");
        try {
          return t(document).find(n).length > 0 ? n : null
        } catch (e) {
          return null
        }
      }, reflow: function (e) {
        return e.offsetHeight
      }, triggerTransitionEnd: function (e) {
        t(e).trigger(s.end)
      }, supportsTransitionEnd: function () {
        return Boolean(s)
      }, typeCheckConfig: function (t, i, o) {
        for (var r in o) if (Object.prototype.hasOwnProperty.call(o, r)) {
          var s = o[r], a = i[r], l = a && n(a) ? "element" : e(a);
          if (!new RegExp(s).test(l)) throw new Error(t.toUpperCase() + ': Option "' + r + '" provided type "' + l + '" but expected type "' + s + '".')
        }
      }
    };
    return s = o(), t.fn.emulateTransitionEnd = r, l.supportsTransitionEnd() && (t.event.special[l.TRANSITION_END] = i()), l
  }(jQuery), o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  }, r = function (e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }, s = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
    }

    return function (t, n, i) {
      return n && e(t.prototype, n), i && e(t, i), t
    }
  }(), a = function (e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }, l = function (e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
  }, c = function () {
    var e = "alert", n = t.fn[e], o = {DISMISS: '[data-dismiss="alert"]'},
      a = {CLOSE: "close.bs.alert", CLOSED: "closed.bs.alert", CLICK_DATA_API: "click.bs.alert.data-api"},
      l = {ALERT: "alert", FADE: "fade", SHOW: "show"}, c = function () {
        function e(t) {
          r(this, e), this._element = t
        }

        return e.prototype.close = function (e) {
          e = e || this._element;
          var t = this._getRootElement(e);
          this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
        }, e.prototype.dispose = function () {
          t.removeData(this._element, "bs.alert"), this._element = null
        }, e.prototype._getRootElement = function (e) {
          var n = i.getSelectorFromElement(e), o = !1;
          return n && (o = t(n)[0]), o || (o = t(e).closest("." + l.ALERT)[0]), o
        }, e.prototype._triggerCloseEvent = function (e) {
          var n = t.Event(a.CLOSE);
          return t(e).trigger(n), n
        }, e.prototype._removeElement = function (e) {
          var n = this;
          t(e).removeClass(l.SHOW), i.supportsTransitionEnd() && t(e).hasClass(l.FADE) ? t(e).one(i.TRANSITION_END, function (t) {
            return n._destroyElement(e, t)
          }).emulateTransitionEnd(150) : this._destroyElement(e)
        }, e.prototype._destroyElement = function (e) {
          t(e).detach().trigger(a.CLOSED).remove()
        }, e._jQueryInterface = function (n) {
          return this.each(function () {
            var i = t(this), o = i.data("bs.alert");
            o || (o = new e(this), i.data("bs.alert", o)), "close" === n && o[n](this)
          })
        }, e._handleDismiss = function (e) {
          return function (t) {
            t && t.preventDefault(), e.close(this)
          }
        }, s(e, null, [{
          key: "VERSION", get: function () {
            return "4.0.0-beta"
          }
        }]), e
      }();
    return t(document).on(a.CLICK_DATA_API, o.DISMISS, c._handleDismiss(new c)), t.fn[e] = c._jQueryInterface, t.fn[e].Constructor = c, t.fn[e].noConflict = function () {
      return t.fn[e] = n, c._jQueryInterface
    }, c
  }(jQuery), d = function () {
    var e = "button", n = t.fn[e], i = {ACTIVE: "active", BUTTON: "btn", FOCUS: "focus"}, o = {
      DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
      DATA_TOGGLE: '[data-toggle="buttons"]',
      INPUT: "input",
      ACTIVE: ".active",
      BUTTON: ".btn"
    }, a = {
      CLICK_DATA_API: "click.bs.button.data-api",
      FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api"
    }, l = function () {
      function e(t) {
        r(this, e), this._element = t
      }

      return e.prototype.toggle = function () {
        var e = !0, n = !0, r = t(this._element).closest(o.DATA_TOGGLE)[0];
        if (r) {
          var s = t(this._element).find(o.INPUT)[0];
          if (s) {
            if ("radio" === s.type) if (s.checked && t(this._element).hasClass(i.ACTIVE)) e = !1; else {
              var a = t(r).find(o.ACTIVE)[0];
              a && t(a).removeClass(i.ACTIVE)
            }
            if (e) {
              if (s.hasAttribute("disabled") || r.hasAttribute("disabled") || s.classList.contains("disabled") || r.classList.contains("disabled")) return;
              s.checked = !t(this._element).hasClass(i.ACTIVE), t(s).trigger("change")
            }
            s.focus(), n = !1
          }
        }
        n && this._element.setAttribute("aria-pressed", !t(this._element).hasClass(i.ACTIVE)), e && t(this._element).toggleClass(i.ACTIVE)
      }, e.prototype.dispose = function () {
        t.removeData(this._element, "bs.button"), this._element = null
      }, e._jQueryInterface = function (n) {
        return this.each(function () {
          var i = t(this).data("bs.button");
          i || (i = new e(this), t(this).data("bs.button", i)), "toggle" === n && i[n]()
        })
      }, s(e, null, [{
        key: "VERSION", get: function () {
          return "4.0.0-beta"
        }
      }]), e
    }();
    return t(document).on(a.CLICK_DATA_API, o.DATA_TOGGLE_CARROT, function (e) {
      e.preventDefault();
      var n = e.target;
      t(n).hasClass(i.BUTTON) || (n = t(n).closest(o.BUTTON)), l._jQueryInterface.call(t(n), "toggle")
    }).on(a.FOCUS_BLUR_DATA_API, o.DATA_TOGGLE_CARROT, function (e) {
      var n = t(e.target).closest(o.BUTTON)[0];
      t(n).toggleClass(i.FOCUS, /^focus(in)?$/.test(e.type))
    }), t.fn[e] = l._jQueryInterface, t.fn[e].Constructor = l, t.fn[e].noConflict = function () {
      return t.fn[e] = n, l._jQueryInterface
    }, l
  }(jQuery), u = function () {
    var e = "carousel", n = "bs.carousel", a = "." + n, l = t.fn[e],
      c = {interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0}, d = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean"
      }, u = {NEXT: "next", PREV: "prev", LEFT: "left", RIGHT: "right"}, p = {
        SLIDE: "slide" + a,
        SLID: "slid" + a,
        KEYDOWN: "keydown" + a,
        MOUSEENTER: "mouseenter" + a,
        MOUSELEAVE: "mouseleave" + a,
        TOUCHEND: "touchend" + a,
        LOAD_DATA_API: "load.bs.carousel.data-api",
        CLICK_DATA_API: "click.bs.carousel.data-api"
      }, f = {
        CAROUSEL: "carousel",
        ACTIVE: "active",
        SLIDE: "slide",
        RIGHT: "carousel-item-right",
        LEFT: "carousel-item-left",
        NEXT: "carousel-item-next",
        PREV: "carousel-item-prev",
        ITEM: "carousel-item"
      }, h = {
        ACTIVE: ".active",
        ACTIVE_ITEM: ".active.carousel-item",
        ITEM: ".carousel-item",
        NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
        INDICATORS: ".carousel-indicators",
        DATA_SLIDE: "[data-slide], [data-slide-to]",
        DATA_RIDE: '[data-ride="carousel"]'
      }, g = function () {
        function l(e, n) {
          r(this, l), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(h.INDICATORS)[0], this._addEventListeners()
        }

        return l.prototype.next = function () {
          this._isSliding || this._slide(u.NEXT)
        }, l.prototype.nextWhenVisible = function () {
          !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
        }, l.prototype.prev = function () {
          this._isSliding || this._slide(u.PREV)
        }, l.prototype.pause = function (e) {
          e || (this._isPaused = !0), t(this._element).find(h.NEXT_PREV)[0] && i.supportsTransitionEnd() && (i.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
        }, l.prototype.cycle = function (e) {
          e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }, l.prototype.to = function (e) {
          var n = this;
          this._activeElement = t(this._element).find(h.ACTIVE_ITEM)[0];
          var i = this._getItemIndex(this._activeElement);
          if (!(e > this._items.length - 1 || e < 0)) if (this._isSliding) t(this._element).one(p.SLID, function () {
            return n.to(e)
          }); else {
            if (i === e) return this.pause(), void this.cycle();
            var o = e > i ? u.NEXT : u.PREV;
            this._slide(o, this._items[e])
          }
        }, l.prototype.dispose = function () {
          t(this._element).off(a), t.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
        }, l.prototype._getConfig = function (n) {
          return n = t.extend({}, c, n), i.typeCheckConfig(e, n, d), n
        }, l.prototype._addEventListeners = function () {
          var e = this;
          this._config.keyboard && t(this._element).on(p.KEYDOWN, function (t) {
            return e._keydown(t)
          }), "hover" === this._config.pause && (t(this._element).on(p.MOUSEENTER, function (t) {
            return e.pause(t)
          }).on(p.MOUSELEAVE, function (t) {
            return e.cycle(t)
          }), "ontouchstart" in document.documentElement && t(this._element).on(p.TOUCHEND, function () {
            e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
              return e.cycle(t)
            }, 500 + e._config.interval)
          }))
        }, l.prototype._keydown = function (e) {
          if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
            case 37:
              e.preventDefault(), this.prev();
              break;
            case 39:
              e.preventDefault(), this.next();
              break;
            default:
              return
          }
        }, l.prototype._getItemIndex = function (e) {
          return this._items = t.makeArray(t(e).parent().find(h.ITEM)), this._items.indexOf(e)
        }, l.prototype._getItemByDirection = function (e, t) {
          var n = e === u.NEXT, i = e === u.PREV, o = this._getItemIndex(t), r = this._items.length - 1;
          if ((i && 0 === o || n && o === r) && !this._config.wrap) return t;
          var s = (o + (e === u.PREV ? -1 : 1)) % this._items.length;
          return -1 === s ? this._items[this._items.length - 1] : this._items[s]
        }, l.prototype._triggerSlideEvent = function (e, n) {
          var i = this._getItemIndex(e), o = this._getItemIndex(t(this._element).find(h.ACTIVE_ITEM)[0]),
            r = t.Event(p.SLIDE, {relatedTarget: e, direction: n, from: o, to: i});
          return t(this._element).trigger(r), r
        }, l.prototype._setActiveIndicatorElement = function (e) {
          if (this._indicatorsElement) {
            t(this._indicatorsElement).find(h.ACTIVE).removeClass(f.ACTIVE);
            var n = this._indicatorsElement.children[this._getItemIndex(e)];
            n && t(n).addClass(f.ACTIVE)
          }
        }, l.prototype._slide = function (e, n) {
          var o = this, r = t(this._element).find(h.ACTIVE_ITEM)[0], s = this._getItemIndex(r),
            a = n || r && this._getItemByDirection(e, r), l = this._getItemIndex(a), c = Boolean(this._interval),
            d = void 0, g = void 0, m = void 0;
          if (e === u.NEXT ? (d = f.LEFT, g = f.NEXT, m = u.LEFT) : (d = f.RIGHT, g = f.PREV, m = u.RIGHT), a && t(a).hasClass(f.ACTIVE)) this._isSliding = !1; else if (!this._triggerSlideEvent(a, m).isDefaultPrevented() && r && a) {
            this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(a);
            var v = t.Event(p.SLID, {relatedTarget: a, direction: m, from: s, to: l});
            i.supportsTransitionEnd() && t(this._element).hasClass(f.SLIDE) ? (t(a).addClass(g), i.reflow(a), t(r).addClass(d), t(a).addClass(d), t(r).one(i.TRANSITION_END, function () {
              t(a).removeClass(d + " " + g).addClass(f.ACTIVE), t(r).removeClass(f.ACTIVE + " " + g + " " + d), o._isSliding = !1, setTimeout(function () {
                return t(o._element).trigger(v)
              }, 0)
            }).emulateTransitionEnd(600)) : (t(r).removeClass(f.ACTIVE), t(a).addClass(f.ACTIVE), this._isSliding = !1, t(this._element).trigger(v)), c && this.cycle()
          }
        }, l._jQueryInterface = function (e) {
          return this.each(function () {
            var i = t(this).data(n), r = t.extend({}, c, t(this).data());
            "object" === ("undefined" == typeof e ? "undefined" : o(e)) && t.extend(r, e);
            var s = "string" == typeof e ? e : r.slide;
            if (i || (i = new l(this, r), t(this).data(n, i)), "number" == typeof e) i.to(e); else if ("string" == typeof s) {
              if ("undefined" == typeof i[s]) throw new Error('No method named "' + s + '"');
              i[s]()
            } else r.interval && (i.pause(), i.cycle())
          })
        }, l._dataApiClickHandler = function (e) {
          var o = i.getSelectorFromElement(this);
          if (o) {
            var r = t(o)[0];
            if (r && t(r).hasClass(f.CAROUSEL)) {
              var s = t.extend({}, t(r).data(), t(this).data()), a = this.getAttribute("data-slide-to");
              a && (s.interval = !1), l._jQueryInterface.call(t(r), s), a && t(r).data(n).to(a), e.preventDefault()
            }
          }
        }, s(l, null, [{
          key: "VERSION", get: function () {
            return "4.0.0-beta"
          }
        }, {
          key: "Default", get: function () {
            return c
          }
        }]), l
      }();
    return t(document).on(p.CLICK_DATA_API, h.DATA_SLIDE, g._dataApiClickHandler), t(window).on(p.LOAD_DATA_API, function () {
      t(h.DATA_RIDE).each(function () {
        var e = t(this);
        g._jQueryInterface.call(e, e.data())
      })
    }), t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function () {
      return t.fn[e] = l, g._jQueryInterface
    }, g
  }(jQuery), p = function () {
    var e = "collapse", n = "bs.collapse", a = t.fn[e], l = {toggle: !0, parent: ""},
      c = {toggle: "boolean", parent: "string"}, d = {
        SHOW: "show.bs.collapse",
        SHOWN: "shown.bs.collapse",
        HIDE: "hide.bs.collapse",
        HIDDEN: "hidden.bs.collapse",
        CLICK_DATA_API: "click.bs.collapse.data-api"
      }, u = {SHOW: "show", COLLAPSE: "collapse", COLLAPSING: "collapsing", COLLAPSED: "collapsed"},
      p = {WIDTH: "width", HEIGHT: "height"},
      f = {ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]'}, h = function () {
        function a(e, n) {
          r(this, a), this._isTransitioning = !1, this._element = e, this._config = this._getConfig(n), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
          for (var o = t(f.DATA_TOGGLE), s = 0; s < o.length; s++) {
            var l = o[s], c = i.getSelectorFromElement(l);
            null !== c && t(c).filter(e).length > 0 && this._triggerArray.push(l)
          }
          this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
        }

        return a.prototype.toggle = function () {
          t(this._element).hasClass(u.SHOW) ? this.hide() : this.show()
        }, a.prototype.show = function () {
          var e = this;
          if (!this._isTransitioning && !t(this._element).hasClass(u.SHOW)) {
            var o = void 0, r = void 0;
            if (this._parent && ((o = t.makeArray(t(this._parent).children().children(f.ACTIVES))).length || (o = null)), !(o && (r = t(o).data(n)) && r._isTransitioning)) {
              var s = t.Event(d.SHOW);
              if (t(this._element).trigger(s), !s.isDefaultPrevented()) {
                o && (a._jQueryInterface.call(t(o), "hide"), r || t(o).data(n, null));
                var l = this._getDimension();
                t(this._element).removeClass(u.COLLAPSE).addClass(u.COLLAPSING), this._element.style[l] = 0, this._triggerArray.length && t(this._triggerArray).removeClass(u.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                var c = function () {
                  t(e._element).removeClass(u.COLLAPSING).addClass(u.COLLAPSE).addClass(u.SHOW), e._element.style[l] = "", e.setTransitioning(!1), t(e._element).trigger(d.SHOWN)
                };
                if (i.supportsTransitionEnd()) {
                  var p = "scroll" + (l[0].toUpperCase() + l.slice(1));
                  t(this._element).one(i.TRANSITION_END, c).emulateTransitionEnd(600), this._element.style[l] = this._element[p] + "px"
                } else c()
              }
            }
          }
        }, a.prototype.hide = function () {
          var e = this;
          if (!this._isTransitioning && t(this._element).hasClass(u.SHOW)) {
            var n = t.Event(d.HIDE);
            if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
              var o = this._getDimension();
              if (this._element.style[o] = this._element.getBoundingClientRect()[o] + "px", i.reflow(this._element), t(this._element).addClass(u.COLLAPSING).removeClass(u.COLLAPSE).removeClass(u.SHOW), this._triggerArray.length) for (var r = 0; r < this._triggerArray.length; r++) {
                var s = this._triggerArray[r], a = i.getSelectorFromElement(s);
                null !== a && (t(a).hasClass(u.SHOW) || t(s).addClass(u.COLLAPSED).attr("aria-expanded", !1))
              }
              this.setTransitioning(!0);
              var l = function () {
                e.setTransitioning(!1), t(e._element).removeClass(u.COLLAPSING).addClass(u.COLLAPSE).trigger(d.HIDDEN)
              };
              this._element.style[o] = "", i.supportsTransitionEnd() ? t(this._element).one(i.TRANSITION_END, l).emulateTransitionEnd(600) : l()
            }
          }
        }, a.prototype.setTransitioning = function (e) {
          this._isTransitioning = e
        }, a.prototype.dispose = function () {
          t.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
        }, a.prototype._getConfig = function (n) {
          return n = t.extend({}, l, n), n.toggle = Boolean(n.toggle), i.typeCheckConfig(e, n, c), n
        }, a.prototype._getDimension = function () {
          return t(this._element).hasClass(p.WIDTH) ? p.WIDTH : p.HEIGHT
        }, a.prototype._getParent = function () {
          var e = this, n = t(this._config.parent)[0],
            i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
          return t(n).find(i).each(function (t, n) {
            e._addAriaAndCollapsedClass(a._getTargetFromElement(n), [n])
          }), n
        }, a.prototype._addAriaAndCollapsedClass = function (e, n) {
          if (e) {
            var i = t(e).hasClass(u.SHOW);
            n.length && t(n).toggleClass(u.COLLAPSED, !i).attr("aria-expanded", i)
          }
        }, a._getTargetFromElement = function (e) {
          var n = i.getSelectorFromElement(e);
          return n ? t(n)[0] : null
        }, a._jQueryInterface = function (e) {
          return this.each(function () {
            var i = t(this), r = i.data(n),
              s = t.extend({}, l, i.data(), "object" === ("undefined" == typeof e ? "undefined" : o(e)) && e);
            if (!r && s.toggle && /show|hide/.test(e) && (s.toggle = !1), r || (r = new a(this, s), i.data(n, r)), "string" == typeof e) {
              if ("undefined" == typeof r[e]) throw new Error('No method named "' + e + '"');
              r[e]()
            }
          })
        }, s(a, null, [{
          key: "VERSION", get: function () {
            return "4.0.0-beta"
          }
        }, {
          key: "Default", get: function () {
            return l
          }
        }]), a
      }();
    return t(document).on(d.CLICK_DATA_API, f.DATA_TOGGLE, function (e) {
      "A" === e.currentTarget.tagName && e.preventDefault();
      var o = t(this), r = i.getSelectorFromElement(this);
      t(r).each(function () {
        var e = t(this), i = e.data(n) ? "toggle" : o.data();
        h._jQueryInterface.call(e, i)
      })
    }), t.fn[e] = h._jQueryInterface, t.fn[e].Constructor = h, t.fn[e].noConflict = function () {
      return t.fn[e] = a, h._jQueryInterface
    }, h
  }(jQuery), f = function () {
    if ("undefined" == typeof n) throw new Error("Bootstrap dropdown require Popper.js (https://popper.js.org)");
    var e = "dropdown", a = "bs.dropdown", l = "." + a, c = t.fn[e], d = new RegExp("38|40|27"), u = {
        HIDE: "hide" + l,
        HIDDEN: "hidden" + l,
        SHOW: "show" + l,
        SHOWN: "shown" + l,
        CLICK: "click" + l,
        CLICK_DATA_API: "click.bs.dropdown.data-api",
        KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
        KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
      }, p = {
        DISABLED: "disabled",
        SHOW: "show",
        DROPUP: "dropup",
        MENURIGHT: "dropdown-menu-right",
        MENULEFT: "dropdown-menu-left"
      }, f = {
        DATA_TOGGLE: '[data-toggle="dropdown"]',
        FORM_CHILD: ".dropdown form",
        MENU: ".dropdown-menu",
        NAVBAR_NAV: ".navbar-nav",
        VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled)"
      }, h = {TOP: "top-start", TOPEND: "top-end", BOTTOM: "bottom-start", BOTTOMEND: "bottom-end"},
      g = {offset: 0, flip: !0}, m = {offset: "(number|string)", flip: "boolean"}, v = function () {
        function c(e, t) {
          r(this, c), this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
        }

        return c.prototype.toggle = function () {
          if (!this._element.disabled && !t(this._element).hasClass(p.DISABLED)) {
            var e = c._getParentFromElement(this._element), i = t(this._menu).hasClass(p.SHOW);
            if (c._clearMenus(), !i) {
              var o = {relatedTarget: this._element}, r = t.Event(u.SHOW, o);
              if (t(e).trigger(r), !r.isDefaultPrevented()) {
                var s = this._element;
                t(e).hasClass(p.DROPUP) && (t(this._menu).hasClass(p.MENULEFT) || t(this._menu).hasClass(p.MENURIGHT)) && (s = e), this._popper = new n(s, this._menu, this._getPopperConfig()), "ontouchstart" in document.documentElement && !t(e).closest(f.NAVBAR_NAV).length && t("body").children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(p.SHOW), t(e).toggleClass(p.SHOW).trigger(t.Event(u.SHOWN, o))
              }
            }
          }
        }, c.prototype.dispose = function () {
          t.removeData(this._element, a), t(this._element).off(l), this._element = null, this._menu = null, null !== this._popper && this._popper.destroy(), this._popper = null
        }, c.prototype.update = function () {
          this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
        }, c.prototype._addEventListeners = function () {
          var e = this;
          t(this._element).on(u.CLICK, function (t) {
            t.preventDefault(), t.stopPropagation(), e.toggle()
          })
        }, c.prototype._getConfig = function (n) {
          return n = t.extend({}, this.constructor.Default, t(this._element).data(), n), i.typeCheckConfig(e, n, this.constructor.DefaultType), n
        }, c.prototype._getMenuElement = function () {
          if (!this._menu) {
            var e = c._getParentFromElement(this._element);
            this._menu = t(e).find(f.MENU)[0]
          }
          return this._menu
        }, c.prototype._getPlacement = function () {
          var e = t(this._element).parent(), n = h.BOTTOM;
          return e.hasClass(p.DROPUP) ? (n = h.TOP, t(this._menu).hasClass(p.MENURIGHT) && (n = h.TOPEND)) : t(this._menu).hasClass(p.MENURIGHT) && (n = h.BOTTOMEND), n
        }, c.prototype._detectNavbar = function () {
          return t(this._element).closest(".navbar").length > 0
        }, c.prototype._getPopperConfig = function () {
          var e = {
            placement: this._getPlacement(),
            modifiers: {offset: {offset: this._config.offset}, flip: {enabled: this._config.flip}}
          };
          return this._inNavbar && (e.modifiers.applyStyle = {enabled: !this._inNavbar}), e
        }, c._jQueryInterface = function (e) {
          return this.each(function () {
            var n = t(this).data(a), i = "object" === ("undefined" == typeof e ? "undefined" : o(e)) ? e : null;
            if (n || (n = new c(this, i), t(this).data(a, n)), "string" == typeof e) {
              if ("undefined" == typeof n[e]) throw new Error('No method named "' + e + '"');
              n[e]()
            }
          })
        }, c._clearMenus = function (e) {
          if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which)) for (var n = t.makeArray(t(f.DATA_TOGGLE)), i = 0; i < n.length; i++) {
            var o = c._getParentFromElement(n[i]), r = t(n[i]).data(a), s = {relatedTarget: n[i]};
            if (r) {
              var l = r._menu;
              if (t(o).hasClass(p.SHOW) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && t.contains(o, e.target))) {
                var d = t.Event(u.HIDE, s);
                t(o).trigger(d), d.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), n[i].setAttribute("aria-expanded", "false"), t(l).removeClass(p.SHOW), t(o).removeClass(p.SHOW).trigger(t.Event(u.HIDDEN, s)))
              }
            }
          }
        }, c._getParentFromElement = function (e) {
          var n = void 0, o = i.getSelectorFromElement(e);
          return o && (n = t(o)[0]), n || e.parentNode
        }, c._dataApiKeydownHandler = function (e) {
          if (!(!d.test(e.which) || /button/i.test(e.target.tagName) && 32 === e.which || /input|textarea/i.test(e.target.tagName) || (e.preventDefault(), e.stopPropagation(), this.disabled || t(this).hasClass(p.DISABLED)))) {
            var n = c._getParentFromElement(this), i = t(n).hasClass(p.SHOW);
            if ((i || 27 === e.which && 32 === e.which) && (!i || 27 !== e.which && 32 !== e.which)) {
              var o = t(n).find(f.VISIBLE_ITEMS).get();
              if (o.length) {
                var r = o.indexOf(e.target);
                38 === e.which && r > 0 && r--, 40 === e.which && r < o.length - 1 && r++, r < 0 && (r = 0), o[r].focus()
              }
            } else {
              if (27 === e.which) {
                var s = t(n).find(f.DATA_TOGGLE)[0];
                t(s).trigger("focus")
              }
              t(this).trigger("click")
            }
          }
        }, s(c, null, [{
          key: "VERSION", get: function () {
            return "4.0.0-beta"
          }
        }, {
          key: "Default", get: function () {
            return g
          }
        }, {
          key: "DefaultType", get: function () {
            return m
          }
        }]), c
      }();
    return t(document).on(u.KEYDOWN_DATA_API, f.DATA_TOGGLE, v._dataApiKeydownHandler).on(u.KEYDOWN_DATA_API, f.MENU, v._dataApiKeydownHandler).on(u.CLICK_DATA_API + " " + u.KEYUP_DATA_API, v._clearMenus).on(u.CLICK_DATA_API, f.DATA_TOGGLE, function (e) {
      e.preventDefault(), e.stopPropagation(), v._jQueryInterface.call(t(this), "toggle")
    }).on(u.CLICK_DATA_API, f.FORM_CHILD, function (e) {
      e.stopPropagation()
    }), t.fn[e] = v._jQueryInterface, t.fn[e].Constructor = v, t.fn[e].noConflict = function () {
      return t.fn[e] = c, v._jQueryInterface
    }, v
  }(jQuery), h = function () {
    var e = "modal", n = ".bs.modal", a = t.fn[e], l = {backdrop: !0, keyboard: !0, focus: !0, show: !0},
      c = {backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean"}, d = {
        HIDE: "hide.bs.modal",
        HIDDEN: "hidden.bs.modal",
        SHOW: "show.bs.modal",
        SHOWN: "shown.bs.modal",
        FOCUSIN: "focusin.bs.modal",
        RESIZE: "resize.bs.modal",
        CLICK_DISMISS: "click.dismiss.bs.modal",
        KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
        MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
        MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
        CLICK_DATA_API: "click.bs.modal.data-api"
      }, u = {
        SCROLLBAR_MEASURER: "modal-scrollbar-measure",
        BACKDROP: "modal-backdrop",
        OPEN: "modal-open",
        FADE: "fade",
        SHOW: "show"
      }, p = {
        DIALOG: ".modal-dialog",
        DATA_TOGGLE: '[data-toggle="modal"]',
        DATA_DISMISS: '[data-dismiss="modal"]',
        FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        STICKY_CONTENT: ".sticky-top",
        NAVBAR_TOGGLER: ".navbar-toggler"
      }, f = function () {
        function a(e, n) {
          r(this, a), this._config = this._getConfig(n), this._element = e, this._dialog = t(e).find(p.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
        }

        return a.prototype.toggle = function (e) {
          return this._isShown ? this.hide() : this.show(e)
        }, a.prototype.show = function (e) {
          var n = this;
          if (!this._isTransitioning) {
            i.supportsTransitionEnd() && t(this._element).hasClass(u.FADE) && (this._isTransitioning = !0);
            var o = t.Event(d.SHOW, {relatedTarget: e});
            t(this._element).trigger(o), this._isShown || o.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), t(document.body).addClass(u.OPEN), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(d.CLICK_DISMISS, p.DATA_DISMISS, function (e) {
              return n.hide(e)
            }), t(this._dialog).on(d.MOUSEDOWN_DISMISS, function () {
              t(n._element).one(d.MOUSEUP_DISMISS, function (e) {
                t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
              })
            }), this._showBackdrop(function () {
              return n._showElement(e)
            }))
          }
        }, a.prototype.hide = function (e) {
          var n = this;
          if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
            var o = i.supportsTransitionEnd() && t(this._element).hasClass(u.FADE);
            o && (this._isTransitioning = !0);
            var r = t.Event(d.HIDE);
            t(this._element).trigger(r), this._isShown && !r.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), t(document).off(d.FOCUSIN), t(this._element).removeClass(u.SHOW), t(this._element).off(d.CLICK_DISMISS), t(this._dialog).off(d.MOUSEDOWN_DISMISS), o ? t(this._element).one(i.TRANSITION_END, function (e) {
              return n._hideModal(e)
            }).emulateTransitionEnd(300) : this._hideModal())
          }
        }, a.prototype.dispose = function () {
          t.removeData(this._element, "bs.modal"), t(window, document, this._element, this._backdrop).off(n), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
        }, a.prototype.handleUpdate = function () {
          this._adjustDialog()
        }, a.prototype._getConfig = function (n) {
          return n = t.extend({}, l, n), i.typeCheckConfig(e, n, c), n
        }, a.prototype._showElement = function (e) {
          var n = this, o = i.supportsTransitionEnd() && t(this._element).hasClass(u.FADE);
          this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, o && i.reflow(this._element), t(this._element).addClass(u.SHOW), this._config.focus && this._enforceFocus();
          var r = t.Event(d.SHOWN, {relatedTarget: e}), s = function () {
            n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(r)
          };
          o ? t(this._dialog).one(i.TRANSITION_END, s).emulateTransitionEnd(300) : s()
        }, a.prototype._enforceFocus = function () {
          var e = this;
          t(document).off(d.FOCUSIN).on(d.FOCUSIN, function (n) {
            document === n.target || e._element === n.target || t(e._element).has(n.target).length || e._element.focus()
          })
        }, a.prototype._setEscapeEvent = function () {
          var e = this;
          this._isShown && this._config.keyboard ? t(this._element).on(d.KEYDOWN_DISMISS, function (t) {
            27 === t.which && (t.preventDefault(), e.hide())
          }) : this._isShown || t(this._element).off(d.KEYDOWN_DISMISS)
        }, a.prototype._setResizeEvent = function () {
          var e = this;
          this._isShown ? t(window).on(d.RESIZE, function (t) {
            return e.handleUpdate(t)
          }) : t(window).off(d.RESIZE)
        }, a.prototype._hideModal = function () {
          var e = this;
          this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
            t(document.body).removeClass(u.OPEN), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(d.HIDDEN)
          })
        }, a.prototype._removeBackdrop = function () {
          this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
        }, a.prototype._showBackdrop = function (e) {
          var n = this, o = t(this._element).hasClass(u.FADE) ? u.FADE : "";
          if (this._isShown && this._config.backdrop) {
            var r = i.supportsTransitionEnd() && o;
            if (this._backdrop = document.createElement("div"), this._backdrop.className = u.BACKDROP, o && t(this._backdrop).addClass(o), t(this._backdrop).appendTo(document.body), t(this._element).on(d.CLICK_DISMISS, function (e) {
                n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
              }), r && i.reflow(this._backdrop), t(this._backdrop).addClass(u.SHOW), !e) return;
            if (!r) return void e();
            t(this._backdrop).one(i.TRANSITION_END, e).emulateTransitionEnd(150)
          } else if (!this._isShown && this._backdrop) {
            t(this._backdrop).removeClass(u.SHOW);
            var s = function () {
              n._removeBackdrop(), e && e()
            };
            i.supportsTransitionEnd() && t(this._element).hasClass(u.FADE) ? t(this._backdrop).one(i.TRANSITION_END, s).emulateTransitionEnd(150) : s()
          } else e && e()
        }, a.prototype._adjustDialog = function () {
          var e = this._element.scrollHeight > document.documentElement.clientHeight;
          !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }, a.prototype._resetAdjustments = function () {
          this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }, a.prototype._checkScrollbar = function () {
          var e = document.body.getBoundingClientRect();
          this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
        }, a.prototype._setScrollbar = function () {
          var e = this;
          if (this._isBodyOverflowing) {
            t(p.FIXED_CONTENT).each(function (n, i) {
              var o = t(i)[0].style.paddingRight, r = t(i).css("padding-right");
              t(i).data("padding-right", o).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px")
            }), t(p.STICKY_CONTENT).each(function (n, i) {
              var o = t(i)[0].style.marginRight, r = t(i).css("margin-right");
              t(i).data("margin-right", o).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px")
            }), t(p.NAVBAR_TOGGLER).each(function (n, i) {
              var o = t(i)[0].style.marginRight, r = t(i).css("margin-right");
              t(i).data("margin-right", o).css("margin-right", parseFloat(r) + e._scrollbarWidth + "px")
            });
            var n = document.body.style.paddingRight, i = t("body").css("padding-right");
            t("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
          }
        }, a.prototype._resetScrollbar = function () {
          t(p.FIXED_CONTENT).each(function (e, n) {
            var i = t(n).data("padding-right");
            "undefined" != typeof i && t(n).css("padding-right", i).removeData("padding-right")
          }), t(p.STICKY_CONTENT + ", " + p.NAVBAR_TOGGLER).each(function (e, n) {
            var i = t(n).data("margin-right");
            "undefined" != typeof i && t(n).css("margin-right", i).removeData("margin-right")
          });
          var e = t("body").data("padding-right");
          "undefined" != typeof e && t("body").css("padding-right", e).removeData("padding-right")
        }, a.prototype._getScrollbarWidth = function () {
          var e = document.createElement("div");
          e.className = u.SCROLLBAR_MEASURER, document.body.appendChild(e);
          var t = e.getBoundingClientRect().width - e.clientWidth;
          return document.body.removeChild(e), t
        }, a._jQueryInterface = function (e, n) {
          return this.each(function () {
            var i = t(this).data("bs.modal"),
              r = t.extend({}, a.Default, t(this).data(), "object" === ("undefined" == typeof e ? "undefined" : o(e)) && e);
            if (i || (i = new a(this, r), t(this).data("bs.modal", i)), "string" == typeof e) {
              if ("undefined" == typeof i[e]) throw new Error('No method named "' + e + '"');
              i[e](n)
            } else r.show && i.show(n)
          })
        }, s(a, null, [{
          key: "VERSION", get: function () {
            return "4.0.0-beta"
          }
        }, {
          key: "Default", get: function () {
            return l
          }
        }]), a
      }();
    return t(document).on(d.CLICK_DATA_API, p.DATA_TOGGLE, function (e) {
      var n = this, o = void 0, r = i.getSelectorFromElement(this);
      r && (o = t(r)[0]);
      var s = t(o).data("bs.modal") ? "toggle" : t.extend({}, t(o).data(), t(this).data());
      "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
      var a = t(o).one(d.SHOW, function (e) {
        e.isDefaultPrevented() || a.one(d.HIDDEN, function () {
          t(n).is(":visible") && n.focus()
        })
      });
      f._jQueryInterface.call(t(o), s, this)
    }), t.fn[e] = f._jQueryInterface, t.fn[e].Constructor = f, t.fn[e].noConflict = function () {
      return t.fn[e] = a, f._jQueryInterface
    }, f
  }(jQuery), g = function () {
    if ("undefined" == typeof n) throw new Error("Bootstrap tooltips require Popper.js (https://popper.js.org)");
    var e = "tooltip", a = ".bs.tooltip", l = t.fn[e], c = new RegExp("(^|\\s)bs-tooltip\\S+", "g"), d = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)"
      }, u = {AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"}, p = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip"
      }, f = {SHOW: "show", OUT: "out"}, h = {
        HIDE: "hide" + a,
        HIDDEN: "hidden" + a,
        SHOW: "show" + a,
        SHOWN: "shown" + a,
        INSERTED: "inserted" + a,
        CLICK: "click" + a,
        FOCUSIN: "focusin" + a,
        FOCUSOUT: "focusout" + a,
        MOUSEENTER: "mouseenter" + a,
        MOUSELEAVE: "mouseleave" + a
      }, g = {FADE: "fade", SHOW: "show"}, m = {TOOLTIP: ".tooltip", TOOLTIP_INNER: ".tooltip-inner", ARROW: ".arrow"},
      v = {HOVER: "hover", FOCUS: "focus", CLICK: "click", MANUAL: "manual"}, y = function () {
        function l(e, t) {
          r(this, l), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
        }

        return l.prototype.enable = function () {
          this._isEnabled = !0
        }, l.prototype.disable = function () {
          this._isEnabled = !1
        }, l.prototype.toggleEnabled = function () {
          this._isEnabled = !this._isEnabled
        }, l.prototype.toggle = function (e) {
          if (this._isEnabled) if (e) {
            var n = this.constructor.DATA_KEY, i = t(e.currentTarget).data(n);
            i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
          } else {
            if (t(this.getTipElement()).hasClass(g.SHOW)) return void this._leave(null, this);
            this._enter(null, this)
          }
        }, l.prototype.dispose = function () {
          clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
        }, l.prototype.show = function () {
          var e = this;
          if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
          var o = t.Event(this.constructor.Event.SHOW);
          if (this.isWithContent() && this._isEnabled) {
            t(this.element).trigger(o);
            var r = t.contains(this.element.ownerDocument.documentElement, this.element);
            if (o.isDefaultPrevented() || !r) return;
            var s = this.getTipElement(), a = i.getUID(this.constructor.NAME);
            s.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && t(s).addClass(g.FADE);
            var c = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
              d = this._getAttachment(c);
            this.addAttachmentClass(d);
            var u = !1 === this.config.container ? document.body : t(this.config.container);
            t(s).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(s).appendTo(u), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, s, {
              placement: d,
              modifiers: {
                offset: {offset: this.config.offset},
                flip: {behavior: this.config.fallbackPlacement},
                arrow: {element: m.ARROW}
              },
              onCreate: function (t) {
                t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
              },
              onUpdate: function (t) {
                e._handlePopperPlacementChange(t)
              }
            }), t(s).addClass(g.SHOW), "ontouchstart" in document.documentElement && t("body").children().on("mouseover", null, t.noop);
            var p = function () {
              e.config.animation && e._fixTransition();
              var n = e._hoverState;
              e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === f.OUT && e._leave(null, e)
            };
            i.supportsTransitionEnd() && t(this.tip).hasClass(g.FADE) ? t(this.tip).one(i.TRANSITION_END, p).emulateTransitionEnd(l._TRANSITION_DURATION) : p()
          }
        }, l.prototype.hide = function (e) {
          var n = this, o = this.getTipElement(), r = t.Event(this.constructor.Event.HIDE), s = function () {
            n._hoverState !== f.SHOW && o.parentNode && o.parentNode.removeChild(o), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
          };
          t(this.element).trigger(r), r.isDefaultPrevented() || (t(o).removeClass(g.SHOW), "ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), this._activeTrigger[v.CLICK] = !1, this._activeTrigger[v.FOCUS] = !1, this._activeTrigger[v.HOVER] = !1, i.supportsTransitionEnd() && t(this.tip).hasClass(g.FADE) ? t(o).one(i.TRANSITION_END, s).emulateTransitionEnd(150) : s(), this._hoverState = "")
        }, l.prototype.update = function () {
          null !== this._popper && this._popper.scheduleUpdate()
        }, l.prototype.isWithContent = function () {
          return Boolean(this.getTitle())
        }, l.prototype.addAttachmentClass = function (e) {
          t(this.getTipElement()).addClass("bs-tooltip-" + e)
        }, l.prototype.getTipElement = function () {
          return this.tip = this.tip || t(this.config.template)[0], this.tip
        }, l.prototype.setContent = function () {
          var e = t(this.getTipElement());
          this.setElementContent(e.find(m.TOOLTIP_INNER), this.getTitle()), e.removeClass(g.FADE + " " + g.SHOW)
        }, l.prototype.setElementContent = function (e, n) {
          var i = this.config.html;
          "object" === ("undefined" == typeof n ? "undefined" : o(n)) && (n.nodeType || n.jquery) ? i ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[i ? "html" : "text"](n)
        }, l.prototype.getTitle = function () {
          var e = this.element.getAttribute("data-original-title");
          return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
        }, l.prototype._getAttachment = function (e) {
          return u[e.toUpperCase()]
        }, l.prototype._setListeners = function () {
          var e = this;
          this.config.trigger.split(" ").forEach(function (n) {
            if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
              return e.toggle(t)
            }); else if (n !== v.MANUAL) {
              var i = n === v.HOVER ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                o = n === v.HOVER ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
              t(e.element).on(i, e.config.selector, function (t) {
                return e._enter(t)
              }).on(o, e.config.selector, function (t) {
                return e._leave(t)
              })
            }
            t(e.element).closest(".modal").on("hide.bs.modal", function () {
              return e.hide()
            })
          }), this.config.selector ? this.config = t.extend({}, this.config, {
            trigger: "manual",
            selector: ""
          }) : this._fixTitle()
        }, l.prototype._fixTitle = function () {
          var e = o(this.element.getAttribute("data-original-title"));
          (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
        }, l.prototype._enter = function (e, n) {
          var i = this.constructor.DATA_KEY;
          (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? v.FOCUS : v.HOVER] = !0), t(n.getTipElement()).hasClass(g.SHOW) || n._hoverState === f.SHOW ? n._hoverState = f.SHOW : (clearTimeout(n._timeout), n._hoverState = f.SHOW, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
            n._hoverState === f.SHOW && n.show()
          }, n.config.delay.show) : n.show())
        }, l.prototype._leave = function (e, n) {
          var i = this.constructor.DATA_KEY;
          (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? v.FOCUS : v.HOVER] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = f.OUT, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
            n._hoverState === f.OUT && n.hide()
          }, n.config.delay.hide) : n.hide())
        }, l.prototype._isWithActiveTrigger = function () {
          for (var e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
          return !1
        }, l.prototype._getConfig = function (n) {
          return "number" == typeof(n = t.extend({}, this.constructor.Default, t(this.element).data(), n)).delay && (n.delay = {
            show: n.delay,
            hide: n.delay
          }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), i.typeCheckConfig(e, n, this.constructor.DefaultType), n
        }, l.prototype._getDelegateConfig = function () {
          var e = {};
          if (this.config) for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
          return e
        }, l.prototype._cleanTipClass = function () {
          var e = t(this.getTipElement()), n = e.attr("class").match(c);
          null !== n && n.length > 0 && e.removeClass(n.join(""))
        }, l.prototype._handlePopperPlacementChange = function (e) {
          this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
        }, l.prototype._fixTransition = function () {
          var e = this.getTipElement(), n = this.config.animation;
          null === e.getAttribute("x-placement") && (t(e).removeClass(g.FADE), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
        }, l._jQueryInterface = function (e) {
          return this.each(function () {
            var n = t(this).data("bs.tooltip"), i = "object" === ("undefined" == typeof e ? "undefined" : o(e)) && e;
            if ((n || !/dispose|hide/.test(e)) && (n || (n = new l(this, i), t(this).data("bs.tooltip", n)), "string" == typeof e)) {
              if ("undefined" == typeof n[e]) throw new Error('No method named "' + e + '"');
              n[e]()
            }
          })
        }, s(l, null, [{
          key: "VERSION", get: function () {
            return "4.0.0-beta"
          }
        }, {
          key: "Default", get: function () {
            return p
          }
        }, {
          key: "NAME", get: function () {
            return e
          }
        }, {
          key: "DATA_KEY", get: function () {
            return "bs.tooltip"
          }
        }, {
          key: "Event", get: function () {
            return h
          }
        }, {
          key: "EVENT_KEY", get: function () {
            return a
          }
        }, {
          key: "DefaultType", get: function () {
            return d
          }
        }]), l
      }();
    return t.fn[e] = y._jQueryInterface, t.fn[e].Constructor = y, t.fn[e].noConflict = function () {
      return t.fn[e] = l, y._jQueryInterface
    }, y
  }(jQuery), m = function () {
    var e = "popover", n = ".bs.popover", i = t.fn[e], c = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      d = t.extend({}, g.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
      }), u = t.extend({}, g.DefaultType, {content: "(string|element|function)"}), p = {FADE: "fade", SHOW: "show"},
      f = {TITLE: ".popover-header", CONTENT: ".popover-body"}, h = {
        HIDE: "hide" + n,
        HIDDEN: "hidden" + n,
        SHOW: "show" + n,
        SHOWN: "shown" + n,
        INSERTED: "inserted" + n,
        CLICK: "click" + n,
        FOCUSIN: "focusin" + n,
        FOCUSOUT: "focusout" + n,
        MOUSEENTER: "mouseenter" + n,
        MOUSELEAVE: "mouseleave" + n
      }, m = function (i) {
        function g() {
          return r(this, g), l(this, i.apply(this, arguments))
        }

        return a(g, i), g.prototype.isWithContent = function () {
          return this.getTitle() || this._getContent()
        }, g.prototype.addAttachmentClass = function (e) {
          t(this.getTipElement()).addClass("bs-popover-" + e)
        }, g.prototype.getTipElement = function () {
          return this.tip = this.tip || t(this.config.template)[0], this.tip
        }, g.prototype.setContent = function () {
          var e = t(this.getTipElement());
          this.setElementContent(e.find(f.TITLE), this.getTitle()), this.setElementContent(e.find(f.CONTENT), this._getContent()), e.removeClass(p.FADE + " " + p.SHOW)
        }, g.prototype._getContent = function () {
          return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
        }, g.prototype._cleanTipClass = function () {
          var e = t(this.getTipElement()), n = e.attr("class").match(c);
          null !== n && n.length > 0 && e.removeClass(n.join(""))
        }, g._jQueryInterface = function (e) {
          return this.each(function () {
            var n = t(this).data("bs.popover"),
              i = "object" === ("undefined" == typeof e ? "undefined" : o(e)) ? e : null;
            if ((n || !/destroy|hide/.test(e)) && (n || (n = new g(this, i), t(this).data("bs.popover", n)), "string" == typeof e)) {
              if ("undefined" == typeof n[e]) throw new Error('No method named "' + e + '"');
              n[e]()
            }
          })
        }, s(g, null, [{
          key: "VERSION", get: function () {
            return "4.0.0-beta"
          }
        }, {
          key: "Default", get: function () {
            return d
          }
        }, {
          key: "NAME", get: function () {
            return e
          }
        }, {
          key: "DATA_KEY", get: function () {
            return "bs.popover"
          }
        }, {
          key: "Event", get: function () {
            return h
          }
        }, {
          key: "EVENT_KEY", get: function () {
            return n
          }
        }, {
          key: "DefaultType", get: function () {
            return u
          }
        }]), g
      }(g);
    return t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function () {
      return t.fn[e] = i, m._jQueryInterface
    }, m
  }(jQuery), v = function () {
    var e = "scrollspy", n = t.fn[e], a = {offset: 10, method: "auto", target: ""},
      l = {offset: "number", method: "string", target: "(string|element)"}, c = {
        ACTIVATE: "activate.bs.scrollspy",
        SCROLL: "scroll.bs.scrollspy",
        LOAD_DATA_API: "load.bs.scrollspy.data-api"
      }, d = {DROPDOWN_ITEM: "dropdown-item", DROPDOWN_MENU: "dropdown-menu", ACTIVE: "active"}, u = {
        DATA_SPY: '[data-spy="scroll"]',
        ACTIVE: ".active",
        NAV_LIST_GROUP: ".nav, .list-group",
        NAV_LINKS: ".nav-link",
        LIST_ITEMS: ".list-group-item",
        DROPDOWN: ".dropdown",
        DROPDOWN_ITEMS: ".dropdown-item",
        DROPDOWN_TOGGLE: ".dropdown-toggle"
      }, p = {OFFSET: "offset", POSITION: "position"}, f = function () {
        function n(e, i) {
          var o = this;
          r(this, n), this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(i), this._selector = this._config.target + " " + u.NAV_LINKS + "," + this._config.target + " " + u.LIST_ITEMS + "," + this._config.target + " " + u.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(c.SCROLL, function (e) {
            return o._process(e)
          }), this.refresh(), this._process()
        }

        return n.prototype.refresh = function () {
          var e = this, n = this._scrollElement !== this._scrollElement.window ? p.POSITION : p.OFFSET,
            o = "auto" === this._config.method ? n : this._config.method, r = o === p.POSITION ? this._getScrollTop() : 0;
          this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.makeArray(t(this._selector)).map(function (e) {
            var n = void 0, s = i.getSelectorFromElement(e);
            if (s && (n = t(s)[0]), n) {
              var a = n.getBoundingClientRect();
              if (a.width || a.height) return [t(n)[o]().top + r, s]
            }
            return null
          }).filter(function (e) {
            return e
          }).sort(function (e, t) {
            return e[0] - t[0]
          }).forEach(function (t) {
            e._offsets.push(t[0]), e._targets.push(t[1])
          })
        }, n.prototype.dispose = function () {
          t.removeData(this._element, "bs.scrollspy"), t(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
        }, n.prototype._getConfig = function (n) {
          if ("string" != typeof(n = t.extend({}, a, n)).target) {
            var o = t(n.target).attr("id");
            o || (o = i.getUID(e), t(n.target).attr("id", o)), n.target = "#" + o
          }
          return i.typeCheckConfig(e, n, l), n
        }, n.prototype._getScrollTop = function () {
          return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }, n.prototype._getScrollHeight = function () {
          return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }, n.prototype._getOffsetHeight = function () {
          return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }, n.prototype._process = function () {
          var e = this._getScrollTop() + this._config.offset, t = this._getScrollHeight(),
            n = this._config.offset + t - this._getOffsetHeight();
          if (this._scrollHeight !== t && this.refresh(), e >= n) {
            var i = this._targets[this._targets.length - 1];
            this._activeTarget !== i && this._activate(i)
          } else {
            if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
            for (var o = this._offsets.length; o--;) this._activeTarget !== this._targets[o] && e >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || e < this._offsets[o + 1]) && this._activate(this._targets[o])
          }
        }, n.prototype._activate = function (e) {
          this._activeTarget = e, this._clear();
          var n = this._selector.split(",");
          n = n.map(function (t) {
            return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
          });
          var i = t(n.join(","));
          i.hasClass(d.DROPDOWN_ITEM) ? (i.closest(u.DROPDOWN).find(u.DROPDOWN_TOGGLE).addClass(d.ACTIVE), i.addClass(d.ACTIVE)) : (i.addClass(d.ACTIVE), i.parents(u.NAV_LIST_GROUP).prev(u.NAV_LINKS + ", " + u.LIST_ITEMS).addClass(d.ACTIVE)), t(this._scrollElement).trigger(c.ACTIVATE, {relatedTarget: e})
        }, n.prototype._clear = function () {
          t(this._selector).filter(u.ACTIVE).removeClass(d.ACTIVE)
        }, n._jQueryInterface = function (e) {
          return this.each(function () {
            var i = t(this).data("bs.scrollspy"), r = "object" === ("undefined" == typeof e ? "undefined" : o(e)) && e;
            if (i || (i = new n(this, r), t(this).data("bs.scrollspy", i)), "string" == typeof e) {
              if ("undefined" == typeof i[e]) throw new Error('No method named "' + e + '"');
              i[e]()
            }
          })
        }, s(n, null, [{
          key: "VERSION", get: function () {
            return "4.0.0-beta"
          }
        }, {
          key: "Default", get: function () {
            return a
          }
        }]), n
      }();
    return t(window).on(c.LOAD_DATA_API, function () {
      for (var e = t.makeArray(t(u.DATA_SPY)), n = e.length; n--;) {
        var i = t(e[n]);
        f._jQueryInterface.call(i, i.data())
      }
    }), t.fn[e] = f._jQueryInterface, t.fn[e].Constructor = f, t.fn[e].noConflict = function () {
      return t.fn[e] = n, f._jQueryInterface
    }, f
  }(jQuery), y = function () {
    var e = t.fn.tab, n = {
      HIDE: "hide.bs.tab",
      HIDDEN: "hidden.bs.tab",
      SHOW: "show.bs.tab",
      SHOWN: "shown.bs.tab",
      CLICK_DATA_API: "click.bs.tab.data-api"
    }, o = {DROPDOWN_MENU: "dropdown-menu", ACTIVE: "active", DISABLED: "disabled", FADE: "fade", SHOW: "show"}, a = {
      DROPDOWN: ".dropdown",
      NAV_LIST_GROUP: ".nav, .list-group",
      ACTIVE: ".active",
      ACTIVE_UL: "> li > .active",
      DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      DROPDOWN_TOGGLE: ".dropdown-toggle",
      DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
    }, l = function () {
      function e(t) {
        r(this, e), this._element = t
      }

      return e.prototype.show = function () {
        var e = this;
        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(o.ACTIVE) || t(this._element).hasClass(o.DISABLED))) {
          var r = void 0, s = void 0, l = t(this._element).closest(a.NAV_LIST_GROUP)[0],
            c = i.getSelectorFromElement(this._element);
          if (l) {
            var d = "UL" === l.nodeName ? a.ACTIVE_UL : a.ACTIVE;
            s = t.makeArray(t(l).find(d)), s = s[s.length - 1]
          }
          var u = t.Event(n.HIDE, {relatedTarget: this._element}), p = t.Event(n.SHOW, {relatedTarget: s});
          if (s && t(s).trigger(u), t(this._element).trigger(p), !p.isDefaultPrevented() && !u.isDefaultPrevented()) {
            c && (r = t(c)[0]), this._activate(this._element, l);
            var f = function () {
              var i = t.Event(n.HIDDEN, {relatedTarget: e._element}), o = t.Event(n.SHOWN, {relatedTarget: s});
              t(s).trigger(i), t(e._element).trigger(o)
            };
            r ? this._activate(r, r.parentNode, f) : f()
          }
        }
      }, e.prototype.dispose = function () {
        t.removeData(this._element, "bs.tab"), this._element = null
      }, e.prototype._activate = function (e, n, r) {
        var s = this, l = void 0, c = (l = "UL" === n.nodeName ? t(n).find(a.ACTIVE_UL) : t(n).children(a.ACTIVE))[0],
          d = r && i.supportsTransitionEnd() && c && t(c).hasClass(o.FADE), u = function () {
            return s._transitionComplete(e, c, d, r)
          };
        c && d ? t(c).one(i.TRANSITION_END, u).emulateTransitionEnd(150) : u(), c && t(c).removeClass(o.SHOW)
      }, e.prototype._transitionComplete = function (e, n, r, s) {
        if (n) {
          t(n).removeClass(o.ACTIVE);
          var l = t(n.parentNode).find(a.DROPDOWN_ACTIVE_CHILD)[0];
          l && t(l).removeClass(o.ACTIVE), n.setAttribute("aria-expanded", !1)
        }
        if (t(e).addClass(o.ACTIVE), e.setAttribute("aria-expanded", !0), r ? (i.reflow(e), t(e).addClass(o.SHOW)) : t(e).removeClass(o.FADE), e.parentNode && t(e.parentNode).hasClass(o.DROPDOWN_MENU)) {
          var c = t(e).closest(a.DROPDOWN)[0];
          c && t(c).find(a.DROPDOWN_TOGGLE).addClass(o.ACTIVE), e.setAttribute("aria-expanded", !0)
        }
        s && s()
      }, e._jQueryInterface = function (n) {
        return this.each(function () {
          var i = t(this), o = i.data("bs.tab");
          if (o || (o = new e(this), i.data("bs.tab", o)), "string" == typeof n) {
            if ("undefined" == typeof o[n]) throw new Error('No method named "' + n + '"');
            o[n]()
          }
        })
      }, s(e, null, [{
        key: "VERSION", get: function () {
          return "4.0.0-beta"
        }
      }]), e
    }();
    return t(document).on(n.CLICK_DATA_API, a.DATA_TOGGLE, function (e) {
      e.preventDefault(), l._jQueryInterface.call(t(this), "show")
    }), t.fn.tab = l._jQueryInterface, t.fn.tab.Constructor = l, t.fn.tab.noConflict = function () {
      return t.fn.tab = e, l._jQueryInterface
    }, l
  }(jQuery);
  return function () {
    if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 3 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v3.0.0 but less than v4.0.0")
  }(jQuery), e.Util = i, e.Alert = c, e.Button = d, e.Carousel = u, e.Collapse = p, e.Dropdown = f, e.Modal = h, e.Popover = m, e.Scrollspy = v, e.Tab = y, e.Tooltip = g, e
}({}, $, Popper);