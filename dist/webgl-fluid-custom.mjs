(function(h, f) {
  typeof exports == "object" && typeof module < "u" ? f(exports) : typeof define == "function" && define.amd ? define(["exports"], f) : f(h.dat = {});
})(globalThis, function(h) {
  function f(e, t) {
    var i = e.__state.conversionName.toString(), n = Math.round(e.r), l = Math.round(e.g), d = Math.round(e.b), _ = e.a, x = Math.round(e.h), E = e.s.toFixed(1), g = e.v.toFixed(1);
    if (t || i === "THREE_CHAR_HEX" || i === "SIX_CHAR_HEX") {
      for (var A = e.hex.toString(16); A.length < 6; )
        A = "0" + A;
      return "#" + A;
    }
    return i === "CSS_RGB" ? "rgb(" + n + "," + l + "," + d + ")" : i === "CSS_RGBA" ? "rgba(" + n + "," + l + "," + d + "," + _ + ")" : i === "HEX" ? "0x" + e.hex.toString(16) : i === "RGB_ARRAY" ? "[" + n + "," + l + "," + d + "]" : i === "RGBA_ARRAY" ? "[" + n + "," + l + "," + d + "," + _ + "]" : i === "RGB_OBJ" ? "{r:" + n + ",g:" + l + ",b:" + d + "}" : i === "RGBA_OBJ" ? "{r:" + n + ",g:" + l + ",b:" + d + ",a:" + _ + "}" : i === "HSV_OBJ" ? "{h:" + x + ",s:" + E + ",v:" + g + "}" : i === "HSVA_OBJ" ? "{h:" + x + ",s:" + E + ",v:" + g + ",a:" + _ + "}" : "unknown format";
  }
  function p(e, t, i) {
    Object.defineProperty(e, t, { get: function() {
      return this.__state.space === "RGB" ? this.__state[t] : (F.recalculateRGB(this, t, i), this.__state[t]);
    }, set: function(n) {
      this.__state.space !== "RGB" && (F.recalculateRGB(this, t, i), this.__state.space = "RGB"), this.__state[t] = n;
    } });
  }
  function T(e, t) {
    Object.defineProperty(e, t, { get: function() {
      return this.__state.space === "HSV" ? this.__state[t] : (F.recalculateHSV(this), this.__state[t]);
    }, set: function(i) {
      this.__state.space !== "HSV" && (F.recalculateHSV(this), this.__state.space = "HSV"), this.__state[t] = i;
    } });
  }
  function y(e) {
    if (e === "0" || c.isUndefined(e))
      return 0;
    var t = e.match(Ye);
    return c.isNull(t) ? 0 : parseFloat(t[1]);
  }
  function N(e) {
    var t = e.toString();
    return t.indexOf(".") > -1 ? t.length - t.indexOf(".") - 1 : 0;
  }
  function H(e, t) {
    var i = Math.pow(10, t);
    return Math.round(e * i) / i;
  }
  function o(e, t, i, n, l) {
    return n + (e - t) / (i - t) * (l - n);
  }
  function B(e, t, i, n) {
    e.style.background = "", c.each(Fe, function(l) {
      e.style.cssText += "background: " + l + "linear-gradient(" + t + ", " + i + " 0%, " + n + " 100%); ";
    });
  }
  function ue(e) {
    e.style.background = "", e.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", e.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";
  }
  function z(e, t, i) {
    var n = document.createElement("li");
    return t && n.appendChild(t), i ? e.__ul.insertBefore(n, i) : e.__ul.appendChild(n), e.onResize(), n;
  }
  function Ce(e) {
    a.unbind(window, "resize", e.__resizeHandler), e.saveToLocalStorageIfPossible && a.unbind(window, "unload", e.saveToLocalStorageIfPossible);
  }
  function ve(e, t) {
    var i = e.__preset_select[e.__preset_select.selectedIndex];
    i.innerHTML = t ? i.value + "*" : i.value;
  }
  function G(e, t, i) {
    if (i.__li = t, i.__gui = e, c.extend(i, { options: function(d) {
      if (arguments.length > 1) {
        var _ = i.__li.nextElementSibling;
        return i.remove(), M(e, i.object, i.property, { before: _, factoryArgs: [c.toArray(arguments)] });
      }
      if (c.isArray(d) || c.isObject(d)) {
        var x = i.__li.nextElementSibling;
        return i.remove(), M(e, i.object, i.property, { before: x, factoryArgs: [d] });
      }
    }, name: function(d) {
      return i.__li.firstElementChild.firstElementChild.innerHTML = d, i;
    }, listen: function() {
      return i.__gui.listen(i), i;
    }, remove: function() {
      return i.__gui.remove(i), i;
    } }), i instanceof ee) {
      var n = new $(i.object, i.property, { min: i.__min, max: i.__max, step: i.__step });
      c.each(["updateDisplay", "onChange", "onFinishChange", "step"], function(d) {
        var _ = i[d], x = n[d];
        i[d] = n[d] = function() {
          var E = Array.prototype.slice.call(arguments);
          return x.apply(n, E), _.apply(i, E);
        };
      }), a.addClass(t, "has-slider"), i.domElement.insertBefore(n.domElement, i.domElement.firstElementChild);
    } else if (i instanceof $) {
      var l = function(d) {
        if (c.isNumber(i.__min) && c.isNumber(i.__max)) {
          var _ = i.__li.firstElementChild.firstElementChild.innerHTML, x = i.__gui.__listening.indexOf(i) > -1;
          i.remove();
          var E = M(e, i.object, i.property, { before: i.__li.nextElementSibling, factoryArgs: [i.__min, i.__max, i.__step] });
          return E.name(_), x && E.listen(), E;
        }
        return d;
      };
      i.min = c.compose(l, i.min), i.max = c.compose(l, i.max);
    } else
      i instanceof ye ? (a.bind(t, "click", function() {
        a.fakeEvent(i.__checkbox, "click");
      }), a.bind(i.__checkbox, "click", function(d) {
        d.stopPropagation();
      })) : i instanceof ne ? (a.bind(t, "click", function() {
        a.fakeEvent(i.__button, "click");
      }), a.bind(t, "mouseover", function() {
        a.addClass(i.__button, "hover");
      }), a.bind(t, "mouseout", function() {
        a.removeClass(i.__button, "hover");
      })) : i instanceof he && (a.addClass(t, "color"), i.updateDisplay = c.compose(function(d) {
        return t.style.borderLeftColor = i.__color.toString(), d;
      }, i.updateDisplay), i.updateDisplay());
    i.setValue = c.compose(function(d) {
      return e.getRoot().__preset_select && i.isModified() && ve(e.getRoot(), !0), d;
    }, i.setValue);
  }
  function Ge(e, t) {
    var i = e.getRoot(), n = i.__rememberedObjects.indexOf(t.object);
    if (n !== -1) {
      var l = i.__rememberedObjectIndecesToControllers[n];
      if (l === void 0 && (l = {}, i.__rememberedObjectIndecesToControllers[n] = l), l[t.property] = t, i.load && i.load.remembered) {
        var d = i.load.remembered, _ = void 0;
        if (d[e.preset])
          _ = d[e.preset];
        else {
          if (!d[ie])
            return;
          _ = d[ie];
        }
        if (_[n] && _[n][t.property] !== void 0) {
          var x = _[n][t.property];
          t.initialValue = x, t.setValue(x);
        }
      }
    }
  }
  function M(e, t, i, n) {
    if (t[i] === void 0)
      throw new Error('Object "' + t + '" has no property "' + i + '"');
    var l = void 0;
    if (n.color)
      l = new he(t, i);
    else {
      var d = [t, i].concat(n.factoryArgs);
      l = X.apply(e, d);
    }
    n.before instanceof K && (n.before = n.before.__li), Ge(e, l), a.addClass(l.domElement, "c");
    var _ = document.createElement("span");
    a.addClass(_, "property-name"), _.innerHTML = l.property;
    var x = document.createElement("div");
    x.appendChild(_), x.appendChild(l.domElement);
    var E = z(e, x, n.before);
    return a.addClass(E, L.CLASS_CONTROLLER_ROW), l instanceof he ? a.addClass(E, "color") : a.addClass(E, ot(l.getValue())), G(e, E, l), e.__controllers.push(l), l;
  }
  function re(e, t) {
    return document.location.href + "." + t;
  }
  function Oe(e, t, i) {
    var n = document.createElement("option");
    n.innerHTML = t, n.value = t, e.__preset_select.appendChild(n), i && (e.__preset_select.selectedIndex = e.__preset_select.length - 1);
  }
  function ze(e, t) {
    t.style.display = e.useLocalStorage ? "block" : "none";
  }
  function $e(e) {
    var t = e.__save_row = document.createElement("li");
    a.addClass(e.domElement, "has-save"), e.__ul.insertBefore(t, e.__ul.firstChild), a.addClass(t, "save-row");
    var i = document.createElement("span");
    i.innerHTML = "&nbsp;", a.addClass(i, "button gears");
    var n = document.createElement("span");
    n.innerHTML = "Save", a.addClass(n, "button"), a.addClass(n, "save");
    var l = document.createElement("span");
    l.innerHTML = "New", a.addClass(l, "button"), a.addClass(l, "save-as");
    var d = document.createElement("span");
    d.innerHTML = "Revert", a.addClass(d, "button"), a.addClass(d, "revert");
    var _ = e.__preset_select = document.createElement("select");
    if (e.load && e.load.remembered ? c.each(e.load.remembered, function(A, w) {
      Oe(e, w, w === e.preset);
    }) : Oe(e, ie, !1), a.bind(_, "change", function() {
      for (var A = 0; A < e.__preset_select.length; A++)
        e.__preset_select[A].innerHTML = e.__preset_select[A].value;
      e.preset = this.value;
    }), t.appendChild(_), t.appendChild(i), t.appendChild(n), t.appendChild(l), t.appendChild(d), oe) {
      var x = document.getElementById("dg-local-explain"), E = document.getElementById("dg-local-storage");
      document.getElementById("dg-save-locally").style.display = "block", localStorage.getItem(re(e, "isLocal")) === "true" && E.setAttribute("checked", "checked"), ze(e, x), a.bind(E, "change", function() {
        e.useLocalStorage = !e.useLocalStorage, ze(e, x);
      });
    }
    var g = document.getElementById("dg-new-constructor");
    a.bind(g, "keydown", function(A) {
      !A.metaKey || A.which !== 67 && A.keyCode !== 67 || V.hide();
    }), a.bind(i, "click", function() {
      g.innerHTML = JSON.stringify(e.getSaveObject(), void 0, 2), V.show(), g.focus(), g.select();
    }), a.bind(n, "click", function() {
      e.save();
    }), a.bind(l, "click", function() {
      var A = prompt("Enter a new preset name.");
      A && e.saveAs(A);
    }), a.bind(d, "click", function() {
      e.revert();
    });
  }
  function et(e) {
    function t(d) {
      return d.preventDefault(), e.width += l - d.clientX, e.onResize(), l = d.clientX, !1;
    }
    function i() {
      a.removeClass(e.__closeButton, L.CLASS_DRAG), a.unbind(window, "mousemove", t), a.unbind(window, "mouseup", i);
    }
    function n(d) {
      return d.preventDefault(), l = d.clientX, a.addClass(e.__closeButton, L.CLASS_DRAG), a.bind(window, "mousemove", t), a.bind(window, "mouseup", i), !1;
    }
    var l = void 0;
    e.__resize_handle = document.createElement("div"), c.extend(e.__resize_handle.style, { width: "6px", marginLeft: "-3px", height: "200px", cursor: "ew-resize", position: "absolute" }), a.bind(e.__resize_handle, "mousedown", n), a.bind(e.__closeButton, "mousedown", n), e.domElement.insertBefore(e.__resize_handle, e.domElement.firstElementChild);
  }
  function De(e, t) {
    e.domElement.style.width = t + "px", e.__save_row && e.autoPlace && (e.__save_row.style.width = t + "px"), e.__closeButton && (e.__closeButton.style.width = t + "px");
  }
  function ge(e, t) {
    var i = {};
    return c.each(e.__rememberedObjects, function(n, l) {
      var d = {}, _ = e.__rememberedObjectIndecesToControllers[l];
      c.each(_, function(x, E) {
        d[E] = t ? x.initialValue : x.getValue();
      }), i[l] = d;
    }), i;
  }
  function tt(e) {
    for (var t = 0; t < e.__preset_select.length; t++)
      e.__preset_select[t].value === e.preset && (e.__preset_select.selectedIndex = t);
  }
  function He(e) {
    e.length !== 0 && Ne.call(window, function() {
      He(e);
    }), c.each(e, function(t) {
      t.updateDisplay();
    });
  }
  var Xe = Array.prototype.forEach, de = Array.prototype.slice, c = { BREAK: {}, extend: function(e) {
    return this.each(de.call(arguments, 1), function(t) {
      (this.isObject(t) ? Object.keys(t) : []).forEach(function(i) {
        this.isUndefined(t[i]) || (e[i] = t[i]);
      }.bind(this));
    }, this), e;
  }, defaults: function(e) {
    return this.each(de.call(arguments, 1), function(t) {
      (this.isObject(t) ? Object.keys(t) : []).forEach(function(i) {
        this.isUndefined(e[i]) && (e[i] = t[i]);
      }.bind(this));
    }, this), e;
  }, compose: function() {
    var e = de.call(arguments);
    return function() {
      for (var t = de.call(arguments), i = e.length - 1; i >= 0; i--)
        t = [e[i].apply(this, t)];
      return t[0];
    };
  }, each: function(e, t, i) {
    if (e) {
      if (Xe && e.forEach && e.forEach === Xe)
        e.forEach(t, i);
      else if (e.length === e.length + 0) {
        var n = void 0, l = void 0;
        for (n = 0, l = e.length; n < l; n++)
          if (n in e && t.call(i, e[n], n) === this.BREAK)
            return;
      } else
        for (var d in e)
          if (t.call(i, e[d], d) === this.BREAK)
            return;
    }
  }, defer: function(e) {
    setTimeout(e, 0);
  }, debounce: function(e, t, i) {
    var n = void 0;
    return function() {
      var l = this, d = arguments, _ = i || !n;
      clearTimeout(n), n = setTimeout(function() {
        n = null, i || e.apply(l, d);
      }, t), _ && e.apply(l, d);
    };
  }, toArray: function(e) {
    return e.toArray ? e.toArray() : de.call(e);
  }, isUndefined: function(e) {
    return e === void 0;
  }, isNull: function(e) {
    return e === null;
  }, isNaN: function(e) {
    function t(i) {
      return e.apply(this, arguments);
    }
    return t.toString = function() {
      return e.toString();
    }, t;
  }(function(e) {
    return isNaN(e);
  }), isArray: Array.isArray || function(e) {
    return e.constructor === Array;
  }, isObject: function(e) {
    return e === Object(e);
  }, isNumber: function(e) {
    return e === e + 0;
  }, isString: function(e) {
    return e === e + "";
  }, isBoolean: function(e) {
    return e === !1 || e === !0;
  }, isFunction: function(e) {
    return Object.prototype.toString.call(e) === "[object Function]";
  } }, it = [{ litmus: c.isString, conversions: { THREE_CHAR_HEX: { read: function(e) {
    var t = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
    return t !== null && { space: "HEX", hex: parseInt("0x" + t[1].toString() + t[1].toString() + t[2].toString() + t[2].toString() + t[3].toString() + t[3].toString(), 0) };
  }, write: f }, SIX_CHAR_HEX: { read: function(e) {
    var t = e.match(/^#([A-F0-9]{6})$/i);
    return t !== null && { space: "HEX", hex: parseInt("0x" + t[1].toString(), 0) };
  }, write: f }, CSS_RGB: { read: function(e) {
    var t = e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
    return t !== null && { space: "RGB", r: parseFloat(t[1]), g: parseFloat(t[2]), b: parseFloat(t[3]) };
  }, write: f }, CSS_RGBA: { read: function(e) {
    var t = e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
    return t !== null && { space: "RGB", r: parseFloat(t[1]), g: parseFloat(t[2]), b: parseFloat(t[3]), a: parseFloat(t[4]) };
  }, write: f } } }, { litmus: c.isNumber, conversions: { HEX: { read: function(e) {
    return { space: "HEX", hex: e, conversionName: "HEX" };
  }, write: function(e) {
    return e.hex;
  } } } }, { litmus: c.isArray, conversions: { RGB_ARRAY: { read: function(e) {
    return e.length === 3 && { space: "RGB", r: e[0], g: e[1], b: e[2] };
  }, write: function(e) {
    return [e.r, e.g, e.b];
  } }, RGBA_ARRAY: { read: function(e) {
    return e.length === 4 && { space: "RGB", r: e[0], g: e[1], b: e[2], a: e[3] };
  }, write: function(e) {
    return [e.r, e.g, e.b, e.a];
  } } } }, { litmus: c.isObject, conversions: { RGBA_OBJ: { read: function(e) {
    return !!(c.isNumber(e.r) && c.isNumber(e.g) && c.isNumber(e.b) && c.isNumber(e.a)) && { space: "RGB", r: e.r, g: e.g, b: e.b, a: e.a };
  }, write: function(e) {
    return { r: e.r, g: e.g, b: e.b, a: e.a };
  } }, RGB_OBJ: { read: function(e) {
    return !!(c.isNumber(e.r) && c.isNumber(e.g) && c.isNumber(e.b)) && { space: "RGB", r: e.r, g: e.g, b: e.b };
  }, write: function(e) {
    return { r: e.r, g: e.g, b: e.b };
  } }, HSVA_OBJ: { read: function(e) {
    return !!(c.isNumber(e.h) && c.isNumber(e.s) && c.isNumber(e.v) && c.isNumber(e.a)) && { space: "HSV", h: e.h, s: e.s, v: e.v, a: e.a };
  }, write: function(e) {
    return { h: e.h, s: e.s, v: e.v, a: e.a };
  } }, HSV_OBJ: { read: function(e) {
    return !!(c.isNumber(e.h) && c.isNumber(e.s) && c.isNumber(e.v)) && { space: "HSV", h: e.h, s: e.s, v: e.v };
  }, write: function(e) {
    return { h: e.h, s: e.s, v: e.v };
  } } } }], ce = void 0, be = void 0, xe = function() {
    be = !1;
    var e = arguments.length > 1 ? c.toArray(arguments) : arguments[0];
    return c.each(it, function(t) {
      if (t.litmus(e))
        return c.each(t.conversions, function(i, n) {
          if (ce = i.read(e), be === !1 && ce !== !1)
            return be = ce, ce.conversionName = n, ce.conversion = i, c.BREAK;
        }), c.BREAK;
    }), be;
  }, Ve = void 0, fe = { hsv_to_rgb: function(e, t, i) {
    var n = Math.floor(e / 60) % 6, l = e / 60 - Math.floor(e / 60), d = i * (1 - t), _ = i * (1 - l * t), x = i * (1 - (1 - l) * t), E = [[i, x, d], [_, i, d], [d, i, x], [d, _, i], [x, d, i], [i, d, _]][n];
    return { r: 255 * E[0], g: 255 * E[1], b: 255 * E[2] };
  }, rgb_to_hsv: function(e, t, i) {
    var n = Math.min(e, t, i), l = Math.max(e, t, i), d = l - n, _ = void 0, x = void 0;
    return l === 0 ? { h: NaN, s: 0, v: 0 } : (x = d / l, _ = e === l ? (t - i) / d : t === l ? 2 + (i - e) / d : 4 + (e - t) / d, (_ /= 6) < 0 && (_ += 1), { h: 360 * _, s: x, v: l / 255 });
  }, rgb_to_hex: function(e, t, i) {
    var n = this.hex_with_component(0, 2, e);
    return n = this.hex_with_component(n, 1, t), n = this.hex_with_component(n, 0, i);
  }, component_from_hex: function(e, t) {
    return e >> 8 * t & 255;
  }, hex_with_component: function(e, t, i) {
    return i << (Ve = 8 * t) | e & ~(255 << Ve);
  } }, ot = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, R = function(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }, C = function() {
    function e(t, i) {
      for (var n = 0; n < i.length; n++) {
        var l = i[n];
        l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(t, l.key, l);
      }
    }
    return function(t, i, n) {
      return i && e(t.prototype, i), n && e(t, n), t;
    };
  }(), S = function e(t, i, n) {
    t === null && (t = Function.prototype);
    var l = Object.getOwnPropertyDescriptor(t, i);
    if (l === void 0) {
      var d = Object.getPrototypeOf(t);
      return d === null ? void 0 : e(d, i, n);
    }
    if ("value" in l)
      return l.value;
    var _ = l.get;
    if (_ !== void 0)
      return _.call(n);
  }, j = function(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }, W = function(e, t) {
    if (!e)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || typeof t != "object" && typeof t != "function" ? e : t;
  }, F = function() {
    function e() {
      if (R(this, e), this.__state = xe.apply(this, arguments), this.__state === !1)
        throw new Error("Failed to interpret color arguments");
      this.__state.a = this.__state.a || 1;
    }
    return C(e, [{ key: "toString", value: function() {
      return f(this);
    } }, { key: "toHexString", value: function() {
      return f(this, !0);
    } }, { key: "toOriginal", value: function() {
      return this.__state.conversion.write(this);
    } }]), e;
  }();
  F.recalculateRGB = function(e, t, i) {
    if (e.__state.space === "HEX")
      e.__state[t] = fe.component_from_hex(e.__state.hex, i);
    else {
      if (e.__state.space !== "HSV")
        throw new Error("Corrupted color state");
      c.extend(e.__state, fe.hsv_to_rgb(e.__state.h, e.__state.s, e.__state.v));
    }
  }, F.recalculateHSV = function(e) {
    var t = fe.rgb_to_hsv(e.r, e.g, e.b);
    c.extend(e.__state, { s: t.s, v: t.v }), c.isNaN(t.h) ? c.isUndefined(e.__state.h) && (e.__state.h = 0) : e.__state.h = t.h;
  }, F.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"], p(F.prototype, "r", 2), p(F.prototype, "g", 1), p(F.prototype, "b", 0), T(F.prototype, "h"), T(F.prototype, "s"), T(F.prototype, "v"), Object.defineProperty(F.prototype, "a", { get: function() {
    return this.__state.a;
  }, set: function(e) {
    this.__state.a = e;
  } }), Object.defineProperty(F.prototype, "hex", { get: function() {
    return !this.__state.space !== "HEX" && (this.__state.hex = fe.rgb_to_hex(this.r, this.g, this.b)), this.__state.hex;
  }, set: function(e) {
    this.__state.space = "HEX", this.__state.hex = e;
  } });
  var K = function() {
    function e(t, i) {
      R(this, e), this.initialValue = t[i], this.domElement = document.createElement("div"), this.object = t, this.property = i, this.__onChange = void 0, this.__onFinishChange = void 0;
    }
    return C(e, [{ key: "onChange", value: function(t) {
      return this.__onChange = t, this;
    } }, { key: "onFinishChange", value: function(t) {
      return this.__onFinishChange = t, this;
    } }, { key: "setValue", value: function(t) {
      return this.object[this.property] = t, this.__onChange && this.__onChange.call(this, t), this.updateDisplay(), this;
    } }, { key: "getValue", value: function() {
      return this.object[this.property];
    } }, { key: "updateDisplay", value: function() {
      return this;
    } }, { key: "isModified", value: function() {
      return this.initialValue !== this.getValue();
    } }]), e;
  }(), Ee = { HTMLEvents: ["change"], MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"], KeyboardEvents: ["keydown"] }, Le = {};
  c.each(Ee, function(e, t) {
    c.each(e, function(i) {
      Le[i] = t;
    });
  });
  var Ye = /(\d+(\.\d+)?)px/, a = { makeSelectable: function(e, t) {
    e !== void 0 && e.style !== void 0 && (e.onselectstart = t ? function() {
      return !1;
    } : function() {
    }, e.style.MozUserSelect = t ? "auto" : "none", e.style.KhtmlUserSelect = t ? "auto" : "none", e.unselectable = t ? "on" : "off");
  }, makeFullscreen: function(e, t, i) {
    var n = i, l = t;
    c.isUndefined(l) && (l = !0), c.isUndefined(n) && (n = !0), e.style.position = "absolute", l && (e.style.left = 0, e.style.right = 0), n && (e.style.top = 0, e.style.bottom = 0);
  }, fakeEvent: function(e, t, i, n) {
    var l = i || {}, d = Le[t];
    if (!d)
      throw new Error("Event type " + t + " not supported.");
    var _ = document.createEvent(d);
    switch (d) {
      case "MouseEvents":
        var x = l.x || l.clientX || 0, E = l.y || l.clientY || 0;
        _.initMouseEvent(t, l.bubbles || !1, l.cancelable || !0, window, l.clickCount || 1, 0, 0, x, E, !1, !1, !1, !1, 0, null);
        break;
      case "KeyboardEvents":
        var g = _.initKeyboardEvent || _.initKeyEvent;
        c.defaults(l, { cancelable: !0, ctrlKey: !1, altKey: !1, shiftKey: !1, metaKey: !1, keyCode: void 0, charCode: void 0 }), g(t, l.bubbles || !1, l.cancelable, window, l.ctrlKey, l.altKey, l.shiftKey, l.metaKey, l.keyCode, l.charCode);
        break;
      default:
        _.initEvent(t, l.bubbles || !1, l.cancelable || !0);
    }
    c.defaults(_, n), e.dispatchEvent(_);
  }, bind: function(e, t, i, n) {
    var l = n || !1;
    return e.addEventListener ? e.addEventListener(t, i, l) : e.attachEvent && e.attachEvent("on" + t, i), a;
  }, unbind: function(e, t, i, n) {
    var l = n || !1;
    return e.removeEventListener ? e.removeEventListener(t, i, l) : e.detachEvent && e.detachEvent("on" + t, i), a;
  }, addClass: function(e, t) {
    if (e.className === void 0)
      e.className = t;
    else if (e.className !== t) {
      var i = e.className.split(/ +/);
      i.indexOf(t) === -1 && (i.push(t), e.className = i.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""));
    }
    return a;
  }, removeClass: function(e, t) {
    if (t)
      if (e.className === t)
        e.removeAttribute("class");
      else {
        var i = e.className.split(/ +/), n = i.indexOf(t);
        n !== -1 && (i.splice(n, 1), e.className = i.join(" "));
      }
    else
      e.className = void 0;
    return a;
  }, hasClass: function(e, t) {
    return new RegExp("(?:^|\\s+)" + t + "(?:\\s+|$)").test(e.className) || !1;
  }, getWidth: function(e) {
    var t = getComputedStyle(e);
    return y(t["border-left-width"]) + y(t["border-right-width"]) + y(t["padding-left"]) + y(t["padding-right"]) + y(t.width);
  }, getHeight: function(e) {
    var t = getComputedStyle(e);
    return y(t["border-top-width"]) + y(t["border-bottom-width"]) + y(t["padding-top"]) + y(t["padding-bottom"]) + y(t.height);
  }, getOffset: function(e) {
    var t = e, i = { left: 0, top: 0 };
    if (t.offsetParent)
      do
        i.left += t.offsetLeft, i.top += t.offsetTop, t = t.offsetParent;
      while (t);
    return i;
  }, isActive: function(e) {
    return e === document.activeElement && (e.type || e.href);
  } }, ye = function(e) {
    function t(i, n) {
      R(this, t);
      var l = W(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i, n)), d = l;
      return l.__prev = l.getValue(), l.__checkbox = document.createElement("input"), l.__checkbox.setAttribute("type", "checkbox"), a.bind(l.__checkbox, "change", function() {
        d.setValue(!d.__prev);
      }, !1), l.domElement.appendChild(l.__checkbox), l.updateDisplay(), l;
    }
    return j(t, K), C(t, [{ key: "setValue", value: function(i) {
      var n = S(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setValue", this).call(this, i);
      return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), n;
    } }, { key: "updateDisplay", value: function() {
      return this.getValue() === !0 ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = !0, this.__prev = !0) : (this.__checkbox.checked = !1, this.__prev = !1), S(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this);
    } }]), t;
  }(), Se = function(e) {
    function t(i, n, l) {
      R(this, t);
      var d = W(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i, n)), _ = l, x = d;
      if (d.__select = document.createElement("select"), c.isArray(_)) {
        var E = {};
        c.each(_, function(g) {
          E[g] = g;
        }), _ = E;
      }
      return c.each(_, function(g, A) {
        var w = document.createElement("option");
        w.innerHTML = A, w.setAttribute("value", g), x.__select.appendChild(w);
      }), d.updateDisplay(), a.bind(d.__select, "change", function() {
        var g = this.options[this.selectedIndex].value;
        x.setValue(g);
      }), d.domElement.appendChild(d.__select), d;
    }
    return j(t, K), C(t, [{ key: "setValue", value: function(i) {
      var n = S(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setValue", this).call(this, i);
      return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), n;
    } }, { key: "updateDisplay", value: function() {
      return a.isActive(this.__select) ? this : (this.__select.value = this.getValue(), S(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this));
    } }]), t;
  }(), Ue = function(e) {
    function t(i, n) {
      function l() {
        _.setValue(_.__input.value);
      }
      R(this, t);
      var d = W(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i, n)), _ = d;
      return d.__input = document.createElement("input"), d.__input.setAttribute("type", "text"), a.bind(d.__input, "keyup", l), a.bind(d.__input, "change", l), a.bind(d.__input, "blur", function() {
        _.__onFinishChange && _.__onFinishChange.call(_, _.getValue());
      }), a.bind(d.__input, "keydown", function(x) {
        x.keyCode === 13 && this.blur();
      }), d.updateDisplay(), d.domElement.appendChild(d.__input), d;
    }
    return j(t, K), C(t, [{ key: "updateDisplay", value: function() {
      return a.isActive(this.__input) || (this.__input.value = this.getValue()), S(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this);
    } }]), t;
  }(), Te = function(e) {
    function t(i, n, l) {
      R(this, t);
      var d = W(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i, n)), _ = l || {};
      return d.__min = _.min, d.__max = _.max, d.__step = _.step, c.isUndefined(d.__step) ? d.initialValue === 0 ? d.__impliedStep = 1 : d.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(d.initialValue)) / Math.LN10)) / 10 : d.__impliedStep = d.__step, d.__precision = N(d.__impliedStep), d;
    }
    return j(t, K), C(t, [{ key: "setValue", value: function(i) {
      var n = i;
      return this.__min !== void 0 && n < this.__min ? n = this.__min : this.__max !== void 0 && n > this.__max && (n = this.__max), this.__step !== void 0 && n % this.__step != 0 && (n = Math.round(n / this.__step) * this.__step), S(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setValue", this).call(this, n);
    } }, { key: "min", value: function(i) {
      return this.__min = i, this;
    } }, { key: "max", value: function(i) {
      return this.__max = i, this;
    } }, { key: "step", value: function(i) {
      return this.__step = i, this.__impliedStep = i, this.__precision = N(i), this;
    } }]), t;
  }(), $ = function(e) {
    function t(i, n, l) {
      function d() {
        g.__onFinishChange && g.__onFinishChange.call(g, g.getValue());
      }
      function _(w) {
        var v = A - w.clientY;
        g.setValue(g.getValue() + v * g.__impliedStep), A = w.clientY;
      }
      function x() {
        a.unbind(window, "mousemove", _), a.unbind(window, "mouseup", x), d();
      }
      R(this, t);
      var E = W(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i, n, l));
      E.__truncationSuspended = !1;
      var g = E, A = void 0;
      return E.__input = document.createElement("input"), E.__input.setAttribute("type", "text"), a.bind(E.__input, "change", function() {
        var w = parseFloat(g.__input.value);
        c.isNaN(w) || g.setValue(w);
      }), a.bind(E.__input, "blur", function() {
        d();
      }), a.bind(E.__input, "mousedown", function(w) {
        a.bind(window, "mousemove", _), a.bind(window, "mouseup", x), A = w.clientY;
      }), a.bind(E.__input, "keydown", function(w) {
        w.keyCode === 13 && (g.__truncationSuspended = !0, this.blur(), g.__truncationSuspended = !1, d());
      }), E.updateDisplay(), E.domElement.appendChild(E.__input), E;
    }
    return j(t, Te), C(t, [{ key: "updateDisplay", value: function() {
      return this.__input.value = this.__truncationSuspended ? this.getValue() : H(this.getValue(), this.__precision), S(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this);
    } }]), t;
  }(), ee = function(e) {
    function t(i, n, l, d, _) {
      function x(U) {
        U.preventDefault();
        var Z = v.__background.getBoundingClientRect();
        return v.setValue(o(U.clientX, Z.left, Z.right, v.__min, v.__max)), !1;
      }
      function E() {
        a.unbind(window, "mousemove", x), a.unbind(window, "mouseup", E), v.__onFinishChange && v.__onFinishChange.call(v, v.getValue());
      }
      function g(U) {
        var Z = U.touches[0].clientX, k = v.__background.getBoundingClientRect();
        v.setValue(o(Z, k.left, k.right, v.__min, v.__max));
      }
      function A() {
        a.unbind(window, "touchmove", g), a.unbind(window, "touchend", A), v.__onFinishChange && v.__onFinishChange.call(v, v.getValue());
      }
      R(this, t);
      var w = W(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i, n, { min: l, max: d, step: _ })), v = w;
      return w.__background = document.createElement("div"), w.__foreground = document.createElement("div"), a.bind(w.__background, "mousedown", function(U) {
        document.activeElement.blur(), a.bind(window, "mousemove", x), a.bind(window, "mouseup", E), x(U);
      }), a.bind(w.__background, "touchstart", function(U) {
        U.touches.length === 1 && (a.bind(window, "touchmove", g), a.bind(window, "touchend", A), g(U));
      }), a.addClass(w.__background, "slider"), a.addClass(w.__foreground, "slider-fg"), w.updateDisplay(), w.__background.appendChild(w.__foreground), w.domElement.appendChild(w.__background), w;
    }
    return j(t, Te), C(t, [{ key: "updateDisplay", value: function() {
      var i = (this.getValue() - this.__min) / (this.__max - this.__min);
      return this.__foreground.style.width = 100 * i + "%", S(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "updateDisplay", this).call(this);
    } }]), t;
  }(), ne = function(e) {
    function t(i, n, l) {
      R(this, t);
      var d = W(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i, n)), _ = d;
      return d.__button = document.createElement("div"), d.__button.innerHTML = l === void 0 ? "Fire" : l, a.bind(d.__button, "click", function(x) {
        return x.preventDefault(), _.fire(), !1;
      }), a.addClass(d.__button, "button"), d.domElement.appendChild(d.__button), d;
    }
    return j(t, K), C(t, [{ key: "fire", value: function() {
      this.__onChange && this.__onChange.call(this), this.getValue().call(this.object), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue());
    } }]), t;
  }(), he = function(e) {
    function t(i, n) {
      function l(k) {
        A(k), a.bind(window, "mousemove", A), a.bind(window, "touchmove", A), a.bind(window, "mouseup", _), a.bind(window, "touchend", _);
      }
      function d(k) {
        w(k), a.bind(window, "mousemove", w), a.bind(window, "touchmove", w), a.bind(window, "mouseup", x), a.bind(window, "touchend", x);
      }
      function _() {
        a.unbind(window, "mousemove", A), a.unbind(window, "touchmove", A), a.unbind(window, "mouseup", _), a.unbind(window, "touchend", _), g();
      }
      function x() {
        a.unbind(window, "mousemove", w), a.unbind(window, "touchmove", w), a.unbind(window, "mouseup", x), a.unbind(window, "touchend", x), g();
      }
      function E() {
        var k = xe(this.value);
        k !== !1 ? (U.__color.__state = k, U.setValue(U.__color.toOriginal())) : this.value = U.__color.toString();
      }
      function g() {
        U.__onFinishChange && U.__onFinishChange.call(U, U.__color.toOriginal());
      }
      function A(k) {
        k.type.indexOf("touch") === -1 && k.preventDefault();
        var Q = U.__saturation_field.getBoundingClientRect(), J = k.touches && k.touches[0] || k, Ke = J.clientX, Qe = J.clientY, me = (Ke - Q.left) / (Q.right - Q.left), _e = 1 - (Qe - Q.top) / (Q.bottom - Q.top);
        return _e > 1 ? _e = 1 : _e < 0 && (_e = 0), me > 1 ? me = 1 : me < 0 && (me = 0), U.__color.v = _e, U.__color.s = me, U.setValue(U.__color.toOriginal()), !1;
      }
      function w(k) {
        k.type.indexOf("touch") === -1 && k.preventDefault();
        var Q = U.__hue_field.getBoundingClientRect(), J = 1 - ((k.touches && k.touches[0] || k).clientY - Q.top) / (Q.bottom - Q.top);
        return J > 1 ? J = 1 : J < 0 && (J = 0), U.__color.h = 360 * J, U.setValue(U.__color.toOriginal()), !1;
      }
      R(this, t);
      var v = W(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i, n));
      v.__color = new F(v.getValue()), v.__temp = new F(0);
      var U = v;
      v.domElement = document.createElement("div"), a.makeSelectable(v.domElement, !1), v.__selector = document.createElement("div"), v.__selector.className = "selector", v.__saturation_field = document.createElement("div"), v.__saturation_field.className = "saturation-field", v.__field_knob = document.createElement("div"), v.__field_knob.className = "field-knob", v.__field_knob_border = "2px solid ", v.__hue_knob = document.createElement("div"), v.__hue_knob.className = "hue-knob", v.__hue_field = document.createElement("div"), v.__hue_field.className = "hue-field", v.__input = document.createElement("input"), v.__input.type = "text", v.__input_textShadow = "0 1px 1px ", a.bind(v.__input, "keydown", function(k) {
        k.keyCode === 13 && E.call(this);
      }), a.bind(v.__input, "blur", E), a.bind(v.__selector, "mousedown", function() {
        a.addClass(this, "drag").bind(window, "mouseup", function() {
          a.removeClass(U.__selector, "drag");
        });
      }), a.bind(v.__selector, "touchstart", function() {
        a.addClass(this, "drag").bind(window, "touchend", function() {
          a.removeClass(U.__selector, "drag");
        });
      });
      var Z = document.createElement("div");
      return c.extend(v.__selector.style, { width: "122px", height: "102px", padding: "3px", backgroundColor: "#222", boxShadow: "0px 1px 3px rgba(0,0,0,0.3)" }), c.extend(v.__field_knob.style, { position: "absolute", width: "12px", height: "12px", border: v.__field_knob_border + (v.__color.v < 0.5 ? "#fff" : "#000"), boxShadow: "0px 1px 3px rgba(0,0,0,0.5)", borderRadius: "12px", zIndex: 1 }), c.extend(v.__hue_knob.style, { position: "absolute", width: "15px", height: "2px", borderRight: "4px solid #fff", zIndex: 1 }), c.extend(v.__saturation_field.style, { width: "100px", height: "100px", border: "1px solid #555", marginRight: "3px", display: "inline-block", cursor: "pointer" }), c.extend(Z.style, { width: "100%", height: "100%", background: "none" }), B(Z, "top", "rgba(0,0,0,0)", "#000"), c.extend(v.__hue_field.style, { width: "15px", height: "100px", border: "1px solid #555", cursor: "ns-resize", position: "absolute", top: "3px", right: "3px" }), ue(v.__hue_field), c.extend(v.__input.style, { outline: "none", textAlign: "center", color: "#fff", border: 0, fontWeight: "bold", textShadow: v.__input_textShadow + "rgba(0,0,0,0.7)" }), a.bind(v.__saturation_field, "mousedown", l), a.bind(v.__saturation_field, "touchstart", l), a.bind(v.__field_knob, "mousedown", l), a.bind(v.__field_knob, "touchstart", l), a.bind(v.__hue_field, "mousedown", d), a.bind(v.__hue_field, "touchstart", d), v.__saturation_field.appendChild(Z), v.__selector.appendChild(v.__field_knob), v.__selector.appendChild(v.__saturation_field), v.__selector.appendChild(v.__hue_field), v.__hue_field.appendChild(v.__hue_knob), v.domElement.appendChild(v.__input), v.domElement.appendChild(v.__selector), v.updateDisplay(), v;
    }
    return j(t, K), C(t, [{ key: "updateDisplay", value: function() {
      var i = xe(this.getValue());
      if (i !== !1) {
        var n = !1;
        c.each(F.COMPONENTS, function(_) {
          if (!c.isUndefined(i[_]) && !c.isUndefined(this.__color.__state[_]) && i[_] !== this.__color.__state[_])
            return n = !0, {};
        }, this), n && c.extend(this.__color.__state, i);
      }
      c.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1;
      var l = this.__color.v < 0.5 || this.__color.s > 0.5 ? 255 : 0, d = 255 - l;
      c.extend(this.__field_knob.style, { marginLeft: 100 * this.__color.s - 7 + "px", marginTop: 100 * (1 - this.__color.v) - 7 + "px", backgroundColor: this.__temp.toHexString(), border: this.__field_knob_border + "rgb(" + l + "," + l + "," + l + ")" }), this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px", this.__temp.s = 1, this.__temp.v = 1, B(this.__saturation_field, "left", "#fff", this.__temp.toHexString()), this.__input.value = this.__color.toString(), c.extend(this.__input.style, { backgroundColor: this.__color.toHexString(), color: "rgb(" + l + "," + l + "," + l + ")", textShadow: this.__input_textShadow + "rgba(" + d + "," + d + "," + d + ",.7)" });
    } }]), t;
  }(), Fe = ["-moz-", "-o-", "-webkit-", "-ms-", ""], te = { load: function(e, t) {
    var i = t || document, n = i.createElement("link");
    n.type = "text/css", n.rel = "stylesheet", n.href = e, i.getElementsByTagName("head")[0].appendChild(n);
  }, inject: function(e, t) {
    var i = t || document, n = document.createElement("style");
    n.type = "text/css", n.innerHTML = e;
    var l = i.getElementsByTagName("head")[0];
    try {
      l.appendChild(n);
    } catch {
    }
  } }, X = function(e, t) {
    var i = e[t];
    return c.isArray(arguments[2]) || c.isObject(arguments[2]) ? new Se(e, t, arguments[2]) : c.isNumber(i) ? c.isNumber(arguments[2]) && c.isNumber(arguments[3]) ? c.isNumber(arguments[4]) ? new ee(e, t, arguments[2], arguments[3], arguments[4]) : new ee(e, t, arguments[2], arguments[3]) : c.isNumber(arguments[4]) ? new $(e, t, { min: arguments[2], max: arguments[3], step: arguments[4] }) : new $(e, t, { min: arguments[2], max: arguments[3] }) : c.isString(i) ? new Ue(e, t) : c.isFunction(i) ? new ne(e, t, "") : c.isBoolean(i) ? new ye(e, t) : null;
  }, Ne = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
    setTimeout(e, 1e3 / 60);
  }, Be = function() {
    function e() {
      R(this, e), this.backgroundElement = document.createElement("div"), c.extend(this.backgroundElement.style, { backgroundColor: "rgba(0,0,0,0.8)", top: 0, left: 0, display: "none", zIndex: "1000", opacity: 0, WebkitTransition: "opacity 0.2s linear", transition: "opacity 0.2s linear" }), a.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), c.extend(this.domElement.style, { position: "fixed", display: "none", zIndex: "1001", opacity: 0, WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear", transition: "transform 0.2s ease-out, opacity 0.2s linear" }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement);
      var t = this;
      a.bind(this.backgroundElement, "click", function() {
        t.hide();
      });
    }
    return C(e, [{ key: "show", value: function() {
      var t = this;
      this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), c.defer(function() {
        t.backgroundElement.style.opacity = 1, t.domElement.style.opacity = 1, t.domElement.style.webkitTransform = "scale(1)";
      });
    } }, { key: "hide", value: function() {
      var t = this, i = function n() {
        t.domElement.style.display = "none", t.backgroundElement.style.display = "none", a.unbind(t.domElement, "webkitTransitionEnd", n), a.unbind(t.domElement, "transitionend", n), a.unbind(t.domElement, "oTransitionEnd", n);
      };
      a.bind(this.domElement, "webkitTransitionEnd", i), a.bind(this.domElement, "transitionend", i), a.bind(this.domElement, "oTransitionEnd", i), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)";
    } }, { key: "layout", value: function() {
      this.domElement.style.left = window.innerWidth / 2 - a.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - a.getHeight(this.domElement) / 2 + "px";
    } }]), e;
  }(), ae = function(e) {
    if (e && typeof window < "u") {
      var t = document.createElement("style");
      return t.setAttribute("type", "text/css"), t.innerHTML = e, document.head.appendChild(t), e;
    }
  }(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);
  te.inject(ae);
  var ie = "Default", oe = function() {
    try {
      return !!window.localStorage;
    } catch {
      return !1;
    }
  }(), V = void 0, we = !0, se = void 0, ke = !1, Y = [], L = function e(t) {
    var i = this, n = t || {};
    this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), a.addClass(this.domElement, "dg"), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], n = c.defaults(n, { closeOnTop: !1, autoPlace: !0, width: e.DEFAULT_WIDTH }), n = c.defaults(n, { resizable: n.autoPlace, hideable: n.autoPlace }), c.isUndefined(n.load) ? n.load = { preset: ie } : n.preset && (n.load.preset = n.preset), c.isUndefined(n.parent) && n.hideable && Y.push(this), n.resizable = c.isUndefined(n.parent) && n.resizable, n.autoPlace && c.isUndefined(n.scrollable) && (n.scrollable = !0);
    var l = oe && localStorage.getItem(re(this, "isLocal")) === "true", d = void 0, _ = void 0;
    if (Object.defineProperties(this, { parent: { get: function() {
      return n.parent;
    } }, scrollable: { get: function() {
      return n.scrollable;
    } }, autoPlace: { get: function() {
      return n.autoPlace;
    } }, closeOnTop: { get: function() {
      return n.closeOnTop;
    } }, preset: { get: function() {
      return i.parent ? i.getRoot().preset : n.load.preset;
    }, set: function(g) {
      i.parent ? i.getRoot().preset = g : n.load.preset = g, tt(this), i.revert();
    } }, width: { get: function() {
      return n.width;
    }, set: function(g) {
      n.width = g, De(i, g);
    } }, name: { get: function() {
      return n.name;
    }, set: function(g) {
      n.name = g, _ && (_.innerHTML = n.name);
    } }, closed: { get: function() {
      return n.closed;
    }, set: function(g) {
      n.closed = g, n.closed ? a.addClass(i.__ul, e.CLASS_CLOSED) : a.removeClass(i.__ul, e.CLASS_CLOSED), this.onResize(), i.__closeButton && (i.__closeButton.innerHTML = g ? e.TEXT_OPEN : e.TEXT_CLOSED);
    } }, load: { get: function() {
      return n.load;
    } }, useLocalStorage: { get: function() {
      return l;
    }, set: function(g) {
      oe && (l = g, g ? a.bind(window, "unload", d) : a.unbind(window, "unload", d), localStorage.setItem(re(i, "isLocal"), g));
    } } }), c.isUndefined(n.parent)) {
      if (n.closed = !1, a.addClass(this.domElement, e.CLASS_MAIN), a.makeSelectable(this.domElement, !1), oe && l) {
        i.useLocalStorage = !0;
        var x = localStorage.getItem(re(this, "gui"));
        x && (n.load = JSON.parse(x));
      }
      this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = e.TEXT_CLOSED, a.addClass(this.__closeButton, e.CLASS_CLOSE_BUTTON), n.closeOnTop ? (a.addClass(this.__closeButton, e.CLASS_CLOSE_TOP), this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0])) : (a.addClass(this.__closeButton, e.CLASS_CLOSE_BOTTOM), this.domElement.appendChild(this.__closeButton)), a.bind(this.__closeButton, "click", function() {
        i.closed = !i.closed;
      });
    } else {
      n.closed === void 0 && (n.closed = !0);
      var E = document.createTextNode(n.name);
      a.addClass(E, "controller-name"), _ = z(i, E), a.addClass(this.__ul, e.CLASS_CLOSED), a.addClass(_, "title"), a.bind(_, "click", function(g) {
        return g.preventDefault(), i.closed = !i.closed, !1;
      }), n.closed || (this.closed = !1);
    }
    n.autoPlace && (c.isUndefined(n.parent) && (we && (se = document.createElement("div"), a.addClass(se, "dg"), a.addClass(se, e.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(se), we = !1), se.appendChild(this.domElement), a.addClass(this.domElement, e.CLASS_AUTO_PLACE)), this.parent || De(i, n.width)), this.__resizeHandler = function() {
      i.onResizeDebounced();
    }, a.bind(window, "resize", this.__resizeHandler), a.bind(this.__ul, "webkitTransitionEnd", this.__resizeHandler), a.bind(this.__ul, "transitionend", this.__resizeHandler), a.bind(this.__ul, "oTransitionEnd", this.__resizeHandler), this.onResize(), n.resizable && et(this), d = function() {
      oe && localStorage.getItem(re(i, "isLocal")) === "true" && localStorage.setItem(re(i, "gui"), JSON.stringify(i.getSaveObject()));
    }, this.saveToLocalStorageIfPossible = d, n.parent || function() {
      var g = i.getRoot();
      g.width += 1, c.defer(function() {
        g.width -= 1;
      });
    }();
  };
  L.toggleHide = function() {
    ke = !ke, c.each(Y, function(e) {
      e.domElement.style.display = ke ? "none" : "";
    });
  }, L.CLASS_AUTO_PLACE = "a", L.CLASS_AUTO_PLACE_CONTAINER = "ac", L.CLASS_MAIN = "main", L.CLASS_CONTROLLER_ROW = "cr", L.CLASS_TOO_TALL = "taller-than-window", L.CLASS_CLOSED = "closed", L.CLASS_CLOSE_BUTTON = "close-button", L.CLASS_CLOSE_TOP = "close-top", L.CLASS_CLOSE_BOTTOM = "close-bottom", L.CLASS_DRAG = "drag", L.DEFAULT_WIDTH = 245, L.TEXT_CLOSED = "Close Controls", L.TEXT_OPEN = "Open Controls", L._keydownHandler = function(e) {
    document.activeElement.type === "text" || e.which !== 72 && e.keyCode !== 72 || L.toggleHide();
  }, a.bind(window, "keydown", L._keydownHandler, !1), c.extend(L.prototype, { add: function(e, t) {
    return M(this, e, t, { factoryArgs: Array.prototype.slice.call(arguments, 2) });
  }, addColor: function(e, t) {
    return M(this, e, t, { color: !0 });
  }, remove: function(e) {
    this.__ul.removeChild(e.__li), this.__controllers.splice(this.__controllers.indexOf(e), 1);
    var t = this;
    c.defer(function() {
      t.onResize();
    });
  }, destroy: function() {
    if (this.parent)
      throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");
    this.autoPlace && se.removeChild(this.domElement);
    var e = this;
    c.each(this.__folders, function(t) {
      e.removeFolder(t);
    }), a.unbind(window, "keydown", L._keydownHandler, !1), Ce(this);
  }, addFolder: function(e) {
    if (this.__folders[e] !== void 0)
      throw new Error('You already have a folder in this GUI by the name "' + e + '"');
    var t = { name: e, parent: this };
    t.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[e] && (t.closed = this.load.folders[e].closed, t.load = this.load.folders[e]);
    var i = new L(t);
    this.__folders[e] = i;
    var n = z(this, i.domElement);
    return a.addClass(n, "folder"), i;
  }, removeFolder: function(e) {
    this.__ul.removeChild(e.domElement.parentElement), delete this.__folders[e.name], this.load && this.load.folders && this.load.folders[e.name] && delete this.load.folders[e.name], Ce(e);
    var t = this;
    c.each(e.__folders, function(i) {
      e.removeFolder(i);
    }), c.defer(function() {
      t.onResize();
    });
  }, open: function() {
    this.closed = !1;
  }, close: function() {
    this.closed = !0;
  }, onResize: function() {
    var e = this.getRoot();
    if (e.scrollable) {
      var t = a.getOffset(e.__ul).top, i = 0;
      c.each(e.__ul.childNodes, function(n) {
        e.autoPlace && n === e.__save_row || (i += a.getHeight(n));
      }), window.innerHeight - t - 20 < i ? (a.addClass(e.domElement, L.CLASS_TOO_TALL), e.__ul.style.height = window.innerHeight - t - 20 + "px") : (a.removeClass(e.domElement, L.CLASS_TOO_TALL), e.__ul.style.height = "auto");
    }
    e.__resize_handle && c.defer(function() {
      e.__resize_handle.style.height = e.__ul.offsetHeight + "px";
    }), e.__closeButton && (e.__closeButton.style.width = e.width + "px");
  }, onResizeDebounced: c.debounce(function() {
    this.onResize();
  }, 50), remember: function() {
    if (c.isUndefined(V) && ((V = new Be()).domElement.innerHTML = `<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`), this.parent)
      throw new Error("You can only call remember on a top level GUI.");
    var e = this;
    c.each(Array.prototype.slice.call(arguments), function(t) {
      e.__rememberedObjects.length === 0 && $e(e), e.__rememberedObjects.indexOf(t) === -1 && e.__rememberedObjects.push(t);
    }), this.autoPlace && De(this, this.width);
  }, getRoot: function() {
    for (var e = this; e.parent; )
      e = e.parent;
    return e;
  }, getSaveObject: function() {
    var e = this.load;
    return e.closed = this.closed, this.__rememberedObjects.length > 0 && (e.preset = this.preset, e.remembered || (e.remembered = {}), e.remembered[this.preset] = ge(this)), e.folders = {}, c.each(this.__folders, function(t, i) {
      e.folders[i] = t.getSaveObject();
    }), e;
  }, save: function() {
    this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = ge(this), ve(this, !1), this.saveToLocalStorageIfPossible();
  }, saveAs: function(e) {
    this.load.remembered || (this.load.remembered = {}, this.load.remembered[ie] = ge(this, !0)), this.load.remembered[e] = ge(this), this.preset = e, Oe(this, e, !0), this.saveToLocalStorageIfPossible();
  }, revert: function(e) {
    c.each(this.__controllers, function(t) {
      this.getRoot().load.remembered ? Ge(e || this.getRoot(), t) : t.setValue(t.initialValue), t.__onFinishChange && t.__onFinishChange.call(t, t.getValue());
    }, this), c.each(this.__folders, function(t) {
      t.revert(t);
    }), e || ve(this.getRoot(), !1);
  }, listen: function(e) {
    var t = this.__listening.length === 0;
    this.__listening.push(e), t && He(this.__listening);
  }, updateDisplay: function() {
    c.each(this.__controllers, function(e) {
      e.updateDisplay();
    }), c.each(this.__folders, function(e) {
      e.updateDisplay();
    });
  } });
  var je = { Color: F, math: fe, interpret: xe }, Ie = { Controller: K, BooleanController: ye, OptionController: Se, StringController: Ue, NumberController: Te, NumberControllerBox: $, NumberControllerSlider: ee, FunctionController: ne, ColorController: he }, We = { dom: a }, Pe = { GUI: L }, Me = L, Re = { color: je, controllers: Ie, dom: We, gui: Pe, GUI: Me };
  h.color = je, h.controllers = Ie, h.dom = We, h.gui = Pe, h.GUI = Me, h.default = Re, Object.defineProperty(h, "__esModule", { value: !0 });
});
function nt() {
  return /Mobi|Android/i.test(navigator.userAgent);
}
function ct(h, f, p, T) {
  let y = h.createTexture();
  h.bindTexture(h.TEXTURE_2D, y), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, h.NEAREST), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, h.NEAREST), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE), h.texImage2D(h.TEXTURE_2D, 0, f, 4, 4, 0, p, T, null);
  let N = h.createFramebuffer();
  return h.bindFramebuffer(h.FRAMEBUFFER, N), h.framebufferTexture2D(h.FRAMEBUFFER, h.COLOR_ATTACHMENT0, h.TEXTURE_2D, y, 0), h.checkFramebufferStatus(h.FRAMEBUFFER) == h.FRAMEBUFFER_COMPLETE;
}
function le(h, f, p, T) {
  if (!ct(h, f, p, T))
    switch (f) {
      case h.R16F:
        return le(h, h.RG16F, h.RG, T);
      case h.RG16F:
        return le(h, h.RGBA16F, h.RGBA, T);
      default:
        return null;
    }
  return {
    internalFormat: f,
    format: p
  };
}
function ft(h) {
  const f = { alpha: !0, depth: !1, stencil: !1, antialias: !1, preserveDrawingBuffer: !1 };
  let p = h.getContext("webgl2", f);
  const T = !!p;
  T || (p = h.getContext("webgl", f) || h.getContext("experimental-webgl", f));
  let y, N;
  T ? (p.getExtension("EXT_color_buffer_float"), N = p.getExtension("OES_texture_float_linear")) : (y = p.getExtension("OES_texture_half_float"), N = p.getExtension("OES_texture_half_float_linear")), p.clearColor(0, 0, 0, 1);
  const H = T ? p.HALF_FLOAT : y.HALF_FLOAT_OES;
  let o, B, ue;
  return T ? (o = le(p, p.RGBA16F, p.RGBA, H), B = le(p, p.RG16F, p.RG, H), ue = le(p, p.R16F, p.RED, H)) : (o = le(p, p.RGBA, p.RGBA, H), B = le(p, p.RGBA, p.RGBA, H), ue = le(p, p.RGBA, p.RGBA, H)), {
    gl: p,
    ext: {
      formatRGBA: o,
      formatRG: B,
      formatR: ue,
      halfFloatTexType: H,
      supportLinearFiltering: N
    }
  };
}
function qe() {
  this.id = -1, this.texcoordX = 0, this.texcoordY = 0, this.prevTexcoordX = 0, this.prevTexcoordY = 0, this.deltaX = 0, this.deltaY = 0, this.down = !1, this.moved = !1, this.color = [30, 0, 300];
}
const ht = `
precision highp float;
attribute vec2 aPosition;
varying vec2 vUv;
varying vec2 vL;
varying vec2 vR;
uniform vec2 texelSize;
void main () {
    vUv = aPosition * 0.5 + 0.5;
    float offset = 1.33333333;
    vL = vUv - texelSize * offset;
    vR = vUv + texelSize * offset;
    gl_Position = vec4(aPosition, 0.0, 1.0);
}
`, mt = `
precision highp float;
attribute vec2 aPosition;
varying vec2 vUv;
varying vec2 vL;
varying vec2 vR;
varying vec2 vT;
varying vec2 vB;
uniform vec2 texelSize;
void main () {
    vUv = aPosition * 0.5 + 0.5;
    vL = vUv - vec2(texelSize.x, 0.0);
    vR = vUv + vec2(texelSize.x, 0.0);
    vT = vUv + vec2(0.0, texelSize.y);
    vB = vUv - vec2(0.0, texelSize.y);
    gl_Position = vec4(aPosition, 0.0, 1.0);
}
`, _t = `
precision mediump float;
precision mediump sampler2D;
varying vec2 vUv;
varying vec2 vL;
varying vec2 vR;
uniform sampler2D uTexture;
void main () {
    vec4 sum = texture2D(uTexture, vUv) * 0.29411764;
    sum += texture2D(uTexture, vL) * 0.35294117;
    sum += texture2D(uTexture, vR) * 0.35294117;
    gl_FragColor = sum;
}
`, pt = `
precision mediump float;
precision mediump sampler2D;
varying highp vec2 vUv;
uniform sampler2D uTexture;
void main () {
    gl_FragColor = texture2D(uTexture, vUv);
}
`, vt = `
precision mediump float;
precision mediump sampler2D;
varying highp vec2 vUv;
uniform sampler2D uTexture;
uniform float value;
void main () {
    gl_FragColor = value * texture2D(uTexture, vUv);
}
`, gt = `
precision mediump float;
uniform vec4 color;
void main () {
    gl_FragColor = color;
}
`, bt = `
  precision highp float;
  precision highp sampler2D;
  varying vec2 vUv;
  uniform sampler2D uTexture;
  uniform float aspectRatio;
  #define SCALE 25.0
  void main () {
      vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));
      float v = mod(uv.x + uv.y, 2.0);
      v = v * 0.1 + 0.8;
      gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
  }
  `, xt = `
precision highp float;
precision highp sampler2D;
varying vec2 vUv;
uniform sampler2D uTexture;
uniform float aspectRatio;
#define SCALE 25.0
void main () {
    vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));
    float v = mod(uv.x + uv.y, 2.0);
    v = v * 0.1 + 0.8;
    gl_FragColor = vec4(vec3(v), 1.0);
}
`, Et = `
precision highp float;
precision highp sampler2D;
varying vec2 vUv;
varying vec2 vL;
varying vec2 vR;
varying vec2 vT;
varying vec2 vB;
uniform sampler2D uTexture;
uniform sampler2D uBloom;
uniform sampler2D uSunrays;
uniform sampler2D uDithering;
uniform vec2 ditherScale;
uniform vec2 texelSize;
vec3 linearToGamma (vec3 color) {
    color = max(color, vec3(0));
    return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
}
void main () {
    vec3 c = texture2D(uTexture, vUv).rgb;
#ifdef SHADING
    vec3 lc = texture2D(uTexture, vL).rgb;
    vec3 rc = texture2D(uTexture, vR).rgb;
    vec3 tc = texture2D(uTexture, vT).rgb;
    vec3 bc = texture2D(uTexture, vB).rgb;
    float dx = length(rc) - length(lc);
    float dy = length(tc) - length(bc);
    vec3 n = normalize(vec3(dx, dy, length(texelSize)));
    vec3 l = vec3(0.0, 0.0, 1.0);
    float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
    c *= diffuse;
#endif
#ifdef BLOOM
    vec3 bloom = texture2D(uBloom, vUv).rgb;
#endif
#ifdef SUNRAYS
    float sunrays = texture2D(uSunrays, vUv).r;
    c *= sunrays;
#ifdef BLOOM
    bloom *= sunrays;
#endif
#endif
#ifdef BLOOM
    float noise = texture2D(uDithering, vUv * ditherScale).r;
    noise = noise * 2.0 - 1.0;
    bloom += noise / 255.0;
    bloom = linearToGamma(bloom);
    c += bloom;
#endif
    float a = max(c.r, max(c.g, c.b));
    gl_FragColor = vec4(c, a);
}
`, yt = `
precision mediump float;
precision mediump sampler2D;
varying vec2 vUv;
uniform sampler2D uTexture;
uniform vec3 curve;
uniform float threshold;
void main () {
    vec3 c = texture2D(uTexture, vUv).rgb;
    float br = max(c.r, max(c.g, c.b));
    float rq = clamp(br - curve.x, 0.0, curve.y);
    rq = curve.z * rq * rq;
    c *= max(rq, br - threshold) / max(br, 0.0001);
    gl_FragColor = vec4(c, 0.0);
}
`, St = `
precision mediump float;
precision mediump sampler2D;
varying vec2 vL;
varying vec2 vR;
varying vec2 vT;
varying vec2 vB;
uniform sampler2D uTexture;
void main () {
    vec4 sum = vec4(0.0);
    sum += texture2D(uTexture, vL);
    sum += texture2D(uTexture, vR);
    sum += texture2D(uTexture, vT);
    sum += texture2D(uTexture, vB);
    sum *= 0.25;
    gl_FragColor = sum;
}
`, Tt = `
precision mediump float;
precision mediump sampler2D;
varying vec2 vL;
varying vec2 vR;
varying vec2 vT;
varying vec2 vB;
uniform sampler2D uTexture;
uniform float intensity;
void main () {
    vec4 sum = vec4(0.0);
    sum += texture2D(uTexture, vL);
    sum += texture2D(uTexture, vR);
    sum += texture2D(uTexture, vT);
    sum += texture2D(uTexture, vB);
    sum *= 0.25;
    gl_FragColor = sum * intensity;
}
`, wt = `
precision highp float;
precision highp sampler2D;
varying vec2 vUv;
uniform sampler2D uTexture;
void main () {
    vec4 c = texture2D(uTexture, vUv);
    float br = max(c.r, max(c.g, c.b));
    c.a = 1.0 - min(max(br * 20.0, 0.0), 0.8);
    gl_FragColor = c;
}
`, Rt = `
precision highp float;
precision highp sampler2D;
varying vec2 vUv;
uniform sampler2D uTexture;
uniform float weight;
#define ITERATIONS 16
void main () {
    float Density = 0.3;
    float Decay = 0.95;
    float Exposure = 0.7;
    vec2 coord = vUv;
    vec2 dir = vUv - 0.5;
    dir *= 1.0 / float(ITERATIONS) * Density;
    float illuminationDecay = 1.0;
    float color = texture2D(uTexture, vUv).a;
    for (int i = 0; i < ITERATIONS; i++)
    {
        coord -= dir;
        float col = texture2D(uTexture, coord).a;
        color += col * illuminationDecay * weight;
        illuminationDecay *= Decay;
    }
    gl_FragColor = vec4(color * Exposure, 0.0, 0.0, 1.0);
}
`, At = `
precision highp float;
precision highp sampler2D;
varying vec2 vUv;
uniform sampler2D uTarget;
uniform float aspectRatio;
uniform vec3 color;
uniform vec2 point;
uniform float radius;
void main () {
    vec2 p = vUv - point.xy;
    p.x *= aspectRatio;
    vec3 splat = exp(-dot(p, p) / radius) * color;
    vec3 base = texture2D(uTarget, vUv).xyz;
    gl_FragColor = vec4(base + splat, 1.0);
}
`, Ct = `
precision highp float;
precision highp sampler2D;
varying vec2 vUv;
uniform sampler2D uVelocity;
uniform sampler2D uSource;
uniform vec2 texelSize;
uniform vec2 dyeTexelSize;
uniform float dt;
uniform float dissipation;
vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
    vec2 st = uv / tsize - 0.5;
    vec2 iuv = floor(st);
    vec2 fuv = fract(st);
    vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
    vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
    vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
    vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);
    return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
}
void main () {
#ifdef MANUAL_FILTERING
    vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
    vec4 result = bilerp(uSource, coord, dyeTexelSize);
#else
    vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
    vec4 result = texture2D(uSource, coord);
#endif
    float decay = 1.0 + dissipation * dt;
    gl_FragColor = result / decay;
}`, Ot = `
precision mediump float;
precision mediump sampler2D;
varying highp vec2 vUv;
varying highp vec2 vL;
varying highp vec2 vR;
varying highp vec2 vT;
varying highp vec2 vB;
uniform sampler2D uVelocity;
void main () {
    float L = texture2D(uVelocity, vL).x;
    float R = texture2D(uVelocity, vR).x;
    float T = texture2D(uVelocity, vT).y;
    float B = texture2D(uVelocity, vB).y;
    vec2 C = texture2D(uVelocity, vUv).xy;
    if (vL.x < 0.0) { L = -C.x; }
    if (vR.x > 1.0) { R = -C.x; }
    if (vT.y > 1.0) { T = -C.y; }
    if (vB.y < 0.0) { B = -C.y; }
    float div = 0.5 * (R - L + T - B);
    gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
}
`, Dt = `
precision mediump float;
precision mediump sampler2D;
varying highp vec2 vUv;
varying highp vec2 vL;
varying highp vec2 vR;
varying highp vec2 vT;
varying highp vec2 vB;
uniform sampler2D uVelocity;
void main () {
    float L = texture2D(uVelocity, vL).y;
    float R = texture2D(uVelocity, vR).y;
    float T = texture2D(uVelocity, vT).x;
    float B = texture2D(uVelocity, vB).x;
    float vorticity = R - L - T + B;
    gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
}
`, Lt = `
precision highp float;
precision highp sampler2D;
varying vec2 vUv;
varying vec2 vL;
varying vec2 vR;
varying vec2 vT;
varying vec2 vB;
uniform sampler2D uVelocity;
uniform sampler2D uCurl;
uniform float curl;
uniform float dt;
void main () {
    float L = texture2D(uCurl, vL).x;
    float R = texture2D(uCurl, vR).x;
    float T = texture2D(uCurl, vT).x;
    float B = texture2D(uCurl, vB).x;
    float C = texture2D(uCurl, vUv).x;
    vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
    force /= length(force) + 0.0001;
    force *= curl * C;
    force.y *= -1.0;
    vec2 vel = texture2D(uVelocity, vUv).xy;
    gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);
}
`, Ut = `
precision mediump float;
precision mediump sampler2D;
varying highp vec2 vUv;
varying highp vec2 vL;
varying highp vec2 vR;
varying highp vec2 vT;
varying highp vec2 vB;
uniform sampler2D uPressure;
uniform sampler2D uDivergence;
void main () {
    float L = texture2D(uPressure, vL).x;
    float R = texture2D(uPressure, vR).x;
    float T = texture2D(uPressure, vT).x;
    float B = texture2D(uPressure, vB).x;
    float C = texture2D(uPressure, vUv).x;
    float divergence = texture2D(uDivergence, vUv).x;
    float pressure = (L + R + B + T - divergence) * 0.25;
    gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
}
`, Ft = `
precision mediump float;
precision mediump sampler2D;
varying highp vec2 vUv;
varying highp vec2 vL;
varying highp vec2 vR;
varying highp vec2 vT;
varying highp vec2 vB;
uniform sampler2D uPressure;
uniform sampler2D uVelocity;
void main () {
    float L = texture2D(uPressure, vL).x;
    float R = texture2D(uPressure, vR).x;
    float T = texture2D(uPressure, vT).x;
    float B = texture2D(uPressure, vB).x;
    vec2 velocity = texture2D(uVelocity, vUv).xy;
    velocity.xy -= vec2(R - L, T - B);
    gl_FragColor = vec4(velocity, 0.0, 1.0);
}
`;
function Nt(h, f, p, T) {
  var y = new dat.GUI({ width: 300 });
  y.add(h, "DYE_RESOLUTION", {
    high: 1024,
    medium: 512,
    low: 256,
    "very low": 128
  }).name("quality").onFinishChange(p), y.add(h, "SIM_RESOLUTION", {
    32: 32,
    64: 64,
    128: 128,
    256: 256
  }).name("sim resolution").onFinishChange(p), y.add(h, "DENSITY_DISSIPATION", 0, 4).name("density diffusion"), y.add(h, "VELOCITY_DISSIPATION", 0, 4).name("velocity diffusion"), y.add(h, "PRESSURE", 0, 1).name("pressure"), y.add(h, "CURL", 0, 50).name("vorticity").step(1), y.add(h, "SPLAT_RADIUS", 0.01, 1).name("splat radius"), y.add(h, "SHADING").name("shading").onFinishChange(f), y.add(h, "COLORFUL").name("colorful"), y.add(h, "PAUSED").name("paused").listen(), y.add({
    fun: () => {
      T.push(parseInt(Math.random() * 20) + 5);
    }
  }, "fun").name("Random splats");
  let N = y.addFolder("Bloom");
  N.add(h, "BLOOM").name("enabled").onFinishChange(f), N.add(h, "BLOOM_INTENSITY", 0.1, 2).name("intensity"), N.add(h, "BLOOM_THRESHOLD", 0, 1).name("threshold");
  let H = y.addFolder("Sunrays");
  H.add(h, "SUNRAYS").name("enabled").onFinishChange(f), H.add(h, "SUNRAYS_WEIGHT", 0.3, 1).name("weight");
  let o = y.addFolder("Unique Color");
  o.add(h, "UNIQUE_COLOR").name("enabled").onFinishChange(f), o.addColor(h, "COLOR").name("color");
  let B = y.addFolder("Capture");
  B.addColor(h, "BACK_COLOR").name("background color"), B.add(h, "TRANSPARENT").name("transparent"), B.add({ fun: Bt }, "fun").name("take screenshot"), nt() && y.close();
}
function Bt() {
  let h = getResolution(config.CAPTURE_RESOLUTION), f = createFBO(h.width, h.height, ext.formatRGBA.internalFormat, ext.formatRGBA.format, ext.halfFloatTexType, gl.NEAREST);
  render(f);
  let p = kt(f);
  p = It(p, f.width, f.height);
  let y = Pt(p, f.width, f.height).toDataURL();
  Mt("fluid.png", y), URL.revokeObjectURL(y);
}
function kt(h) {
  gl.bindFramebuffer(gl.FRAMEBUFFER, h.fbo);
  let f = h.width * h.height * 4, p = new Float32Array(f);
  return gl.readPixels(0, 0, h.width, h.height, gl.RGBA, gl.FLOAT, p), p;
}
function It(h, f, p) {
  let T = new Uint8Array(h.length), y = 0;
  for (let N = p - 1; N >= 0; N--)
    for (let H = 0; H < f; H++) {
      let o = N * f * 4 + H * 4;
      T[o + 0] = Ze(h[y + 0]) * 255, T[o + 1] = Ze(h[y + 1]) * 255, T[o + 2] = Ze(h[y + 2]) * 255, T[o + 3] = Ze(h[y + 3]) * 255, y += 4;
    }
  return T;
}
function Ze(h) {
  return Math.min(Math.max(h, 0), 1);
}
function Pt(h, f, p) {
  let T = document.createElement("canvas"), y = T.getContext("2d");
  T.width = f, T.height = p;
  let N = y.createImageData(f, p);
  return N.data.set(h), y.putImageData(N, 0, 0), T;
}
function Mt(h, f) {
  let p = document.createElement("a");
  p.download = h, p.href = f, document.body.appendChild(p), p.click(), document.body.removeChild(p);
}
function Gt(h, f) {
  const p = h;
  i(), f = {
    IMMEDIATE: !0,
    TRIGGER: "hover",
    SIM_RESOLUTION: 128,
    DYE_RESOLUTION: 1024,
    CAPTURE_RESOLUTION: 512,
    DENSITY_DISSIPATION: 1,
    VELOCITY_DISSIPATION: 0.2,
    PRESSURE: 0.8,
    PRESSURE_ITERATIONS: 20,
    CURL: 30,
    SPLAT_RADIUS: 0.25,
    SPLAT_FORCE: 6e3,
    SHADING: !0,
    COLORFUL: !0,
    UNIQUE_COLOR: !1,
    COLOR: { r: 0.5, g: 1, b: 1 },
    COLOR_UPDATE_SPEED: 10,
    PAUSED: !1,
    BACK_COLOR: { r: 0, g: 0, b: 0 },
    TRANSPARENT: !0,
    BLOOM: !0,
    BLOOM_ITERATIONS: 8,
    BLOOM_RESOLUTION: 256,
    BLOOM_INTENSITY: 0.8,
    BLOOM_THRESHOLD: 0.6,
    BLOOM_SOFT_KNEE: 0.7,
    SUNRAYS: !1,
    SUNRAYS_RESOLUTION: 196,
    SUNRAYS_WEIGHT: 1,
    GUI: !0,
    ...f
  };
  let T = [], y = [], N = [], H = f.COLOR || {};
  if (f.COLOR && f.UNIQUE_COLOR) {
    let r = f.COLOR;
    r.r /= 255, r.g /= 255, r.b /= 255, H = r;
  }
  T.push(new qe());
  const { gl: o, ext: B } = ft(p);
  nt() && (f.DYE_RESOLUTION = 512), B.supportLinearFiltering || (f.DYE_RESOLUTION = 512, f.SHADING = !1, f.BLOOM = !1, f.SUNRAYS = !1), f.GUI && Nt(f, Pe, we, y);
  class ue {
    constructor(s, u) {
      this.vertexShader = s, this.fragmentShaderSource = u, this.programs = [], this.activeProgram = null, this.uniforms = [];
    }
    setKeywords(s) {
      let u = 0;
      for (let b = 0; b < s.length; b++)
        u += dt(s[b]);
      let m = this.programs[u];
      if (m == null) {
        let b = G(o.FRAGMENT_SHADER, this.fragmentShaderSource, s);
        m = Ce(this.vertexShader, b), this.programs[u] = m;
      }
      m != this.activeProgram && (this.uniforms = ve(m), this.activeProgram = m);
    }
    bind() {
      o.useProgram(this.activeProgram);
    }
  }
  class z {
    constructor(s, u) {
      this.uniforms = {}, this.program = Ce(s, u), this.uniforms = ve(this.program);
    }
    bind() {
      o.useProgram(this.program);
    }
  }
  function Ce(r, s) {
    let u = o.createProgram();
    if (o.attachShader(u, r), o.attachShader(u, s), o.linkProgram(u), !o.getProgramParameter(u, o.LINK_STATUS))
      throw o.getProgramInfoLog(u);
    return u;
  }
  function ve(r) {
    let s = [], u = o.getProgramParameter(r, o.ACTIVE_UNIFORMS);
    for (let m = 0; m < u; m++) {
      let b = o.getActiveUniform(r, m).name;
      s[b] = o.getUniformLocation(r, b);
    }
    return s;
  }
  function G(r, s, u) {
    s = Ge(s, u);
    const m = o.createShader(r);
    if (o.shaderSource(m, s), o.compileShader(m), !o.getShaderParameter(m, o.COMPILE_STATUS))
      throw o.getShaderInfoLog(m);
    return m;
  }
  function Ge(r, s) {
    if (s == null)
      return r;
    let u = "";
    return s.forEach((m) => {
      u += "#define " + m + `
`;
    }), u + r;
  }
  const M = G(o.VERTEX_SHADER, mt), re = G(o.VERTEX_SHADER, ht), Oe = G(o.FRAGMENT_SHADER, _t), ze = G(o.FRAGMENT_SHADER, pt), $e = G(o.FRAGMENT_SHADER, vt), et = G(o.FRAGMENT_SHADER, gt), De = G(o.FRAGMENT_SHADER, f.TRANSPARENT ? bt : xt), ge = Et, tt = G(o.FRAGMENT_SHADER, yt), He = G(o.FRAGMENT_SHADER, St), Xe = G(o.FRAGMENT_SHADER, Tt), de = G(o.FRAGMENT_SHADER, wt), c = G(o.FRAGMENT_SHADER, Rt), it = G(o.FRAGMENT_SHADER, At), ce = G(
    o.FRAGMENT_SHADER,
    Ct,
    B.supportLinearFiltering ? null : ["MANUAL_FILTERING"]
  ), be = G(o.FRAGMENT_SHADER, Ot), xe = G(o.FRAGMENT_SHADER, Dt), Ve = G(o.FRAGMENT_SHADER, Lt), fe = G(o.FRAGMENT_SHADER, Ut), ot = G(o.FRAGMENT_SHADER, Ft), R = (() => (o.bindBuffer(o.ARRAY_BUFFER, o.createBuffer()), o.bufferData(o.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), o.STATIC_DRAW), o.bindBuffer(o.ELEMENT_ARRAY_BUFFER, o.createBuffer()), o.bufferData(o.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), o.STATIC_DRAW), o.vertexAttribPointer(0, 2, o.FLOAT, !1, 0, 0), o.enableVertexAttribArray(0), (r) => {
    o.bindFramebuffer(o.FRAMEBUFFER, r), o.drawElements(o.TRIANGLES, 6, o.UNSIGNED_SHORT, 0);
  }))();
  let C, S, j, W, F, K, Ee, Le, Ye = We();
  const a = new z(re, Oe), ye = new z(M, ze), Se = new z(M, $e), Ue = new z(M, et), Te = new z(M, De), $ = new z(M, tt), ee = new z(M, He), ne = new z(M, Xe), he = new z(M, de), Fe = new z(M, c), te = new z(M, it), X = new z(M, ce), Ne = new z(M, be), Be = new z(M, xe), ae = new z(M, Ve), ie = new z(M, fe), oe = new z(M, ot), V = new ue(M, ge);
  function we() {
    let r = Je(f.SIM_RESOLUTION), s = Je(f.DYE_RESOLUTION);
    const u = B.halfFloatTexType, m = B.formatRGBA, b = B.formatRG, O = B.formatR, D = B.supportLinearFiltering ? o.LINEAR : o.NEAREST;
    C == null ? C = L(s.width, s.height, m.internalFormat, m.format, u, D) : C = Ie(C, s.width, s.height, m.internalFormat, m.format, u, D), S == null ? S = L(r.width, r.height, b.internalFormat, b.format, u, D) : S = Ie(S, r.width, r.height, b.internalFormat, b.format, u, D), j = Y(r.width, r.height, O.internalFormat, O.format, u, o.NEAREST), W = Y(r.width, r.height, O.internalFormat, O.format, u, o.NEAREST), F = L(r.width, r.height, O.internalFormat, O.format, u, o.NEAREST), se(), ke();
  }
  function se() {
    let r = Je(f.BLOOM_RESOLUTION);
    const s = B.halfFloatTexType, u = B.formatRGBA, m = B.supportLinearFiltering ? o.LINEAR : o.NEAREST;
    K = Y(r.width, r.height, u.internalFormat, u.format, s, m), N.length = 0;
    for (let b = 0; b < f.BLOOM_ITERATIONS; b++) {
      let O = r.width >> b + 1, D = r.height >> b + 1;
      if (O < 2 || D < 2)
        break;
      let P = Y(O, D, u.internalFormat, u.format, s, m);
      N.push(P);
    }
  }
  function ke() {
    let r = Je(f.SUNRAYS_RESOLUTION);
    const s = B.halfFloatTexType, u = B.formatR, m = B.supportLinearFiltering ? o.LINEAR : o.NEAREST;
    Ee = Y(r.width, r.height, u.internalFormat, u.format, s, m), Le = Y(r.width, r.height, u.internalFormat, u.format, s, m);
  }
  function Y(r, s, u, m, b, O) {
    o.activeTexture(o.TEXTURE0);
    let D = o.createTexture();
    o.bindTexture(o.TEXTURE_2D, D), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_MIN_FILTER, O), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_MAG_FILTER, O), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_S, o.CLAMP_TO_EDGE), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_T, o.CLAMP_TO_EDGE), o.texImage2D(o.TEXTURE_2D, 0, u, r, s, 0, m, b, null);
    let P = o.createFramebuffer();
    o.bindFramebuffer(o.FRAMEBUFFER, P), o.framebufferTexture2D(o.FRAMEBUFFER, o.COLOR_ATTACHMENT0, o.TEXTURE_2D, D, 0), o.viewport(0, 0, r, s), o.clear(o.COLOR_BUFFER_BIT);
    let I = 1 / r, Ae = 1 / s;
    return {
      texture: D,
      fbo: P,
      width: r,
      height: s,
      texelSizeX: I,
      texelSizeY: Ae,
      attach(pe) {
        return o.activeTexture(o.TEXTURE0 + pe), o.bindTexture(o.TEXTURE_2D, D), pe;
      }
    };
  }
  function L(r, s, u, m, b, O) {
    let D = Y(r, s, u, m, b, O), P = Y(r, s, u, m, b, O);
    return {
      width: r,
      height: s,
      texelSizeX: D.texelSizeX,
      texelSizeY: D.texelSizeY,
      get read() {
        return D;
      },
      set read(I) {
        D = I;
      },
      get write() {
        return P;
      },
      set write(I) {
        P = I;
      },
      swap() {
        let I = D;
        D = P, P = I;
      }
    };
  }
  function je(r, s, u, m, b, O, D) {
    let P = Y(s, u, m, b, O, D);
    return ye.bind(), o.uniform1i(ye.uniforms.uTexture, r.attach(0)), R(P.fbo), P;
  }
  function Ie(r, s, u, m, b, O, D) {
    return r.width == s && r.height == u || (r.read = je(r.read, s, u, m, b, O, D), r.write = Y(s, u, m, b, O, D), r.width = s, r.height = u, r.texelSizeX = 1 / s, r.texelSizeY = 1 / u), r;
  }
  function We(r) {
    let s = o.createTexture();
    o.bindTexture(o.TEXTURE_2D, s), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_MIN_FILTER, o.LINEAR), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_MAG_FILTER, o.LINEAR), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_S, o.REPEAT), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_T, o.REPEAT), o.texImage2D(o.TEXTURE_2D, 0, o.RGB, 1, 1, 0, o.RGB, o.UNSIGNED_BYTE, new Uint8Array([255, 255, 255]));
    let u = {
      texture: s,
      width: 1,
      height: 1,
      attach(b) {
        return o.activeTexture(o.TEXTURE0 + b), o.bindTexture(o.TEXTURE_2D, s), b;
      }
    }, m = new Image();
    return m.onload = () => {
      u.width = m.width, u.height = m.height, o.bindTexture(o.TEXTURE_2D, s), o.texImage2D(o.TEXTURE_2D, 0, o.RGB, o.RGB, o.UNSIGNED_BYTE, m);
    }, m.src = r, u;
  }
  function Pe() {
    let r = [];
    f.SHADING && r.push("SHADING"), f.BLOOM && r.push("BLOOM"), f.SUNRAYS && r.push("SUNRAYS"), V.setKeywords(r);
  }
  Pe(), we(), f.IMMEDIATE && Z(parseInt(Math.random() * 20) + 5);
  let Me = Date.now(), Re = 0;
  e();
  function e() {
    const r = t();
    i() && we(), n(r), l(), f.PAUSED || d(r), _(null), requestAnimationFrame(e);
  }
  function t() {
    let r = Date.now(), s = (r - Me) / 1e3;
    return s = Math.min(s, 0.016666), Me = r, s;
  }
  function i() {
    let r = q(p.clientWidth), s = q(p.clientHeight);
    return p.width != r || p.height != s ? (p.width = r, p.height = s, !0) : !1;
  }
  function n(r) {
    f.COLORFUL && (Re += r * f.COLOR_UPDATE_SPEED, Re >= 1 && !f.UNIQUE_COLOR && (Re = lt(Re, 0, 1), T.forEach((s) => {
      s.color = rt();
    })));
  }
  function l() {
    y.length > 0 && Z(y.pop()), T.forEach((r) => {
      r.moved && (r.moved = !1, U(r));
    });
  }
  function d(r) {
    o.disable(o.BLEND), o.viewport(0, 0, S.width, S.height), Be.bind(), o.uniform2f(Be.uniforms.texelSize, S.texelSizeX, S.texelSizeY), o.uniform1i(Be.uniforms.uVelocity, S.read.attach(0)), R(W.fbo), ae.bind(), o.uniform2f(ae.uniforms.texelSize, S.texelSizeX, S.texelSizeY), o.uniform1i(ae.uniforms.uVelocity, S.read.attach(0)), o.uniform1i(ae.uniforms.uCurl, W.attach(1)), o.uniform1f(ae.uniforms.curl, f.CURL), o.uniform1f(ae.uniforms.dt, r), R(S.write.fbo), S.swap(), Ne.bind(), o.uniform2f(Ne.uniforms.texelSize, S.texelSizeX, S.texelSizeY), o.uniform1i(Ne.uniforms.uVelocity, S.read.attach(0)), R(j.fbo), Se.bind(), o.uniform1i(Se.uniforms.uTexture, F.read.attach(0)), o.uniform1f(Se.uniforms.value, f.PRESSURE), R(F.write.fbo), F.swap(), ie.bind(), o.uniform2f(ie.uniforms.texelSize, S.texelSizeX, S.texelSizeY), o.uniform1i(ie.uniforms.uDivergence, j.attach(0));
    for (let u = 0; u < f.PRESSURE_ITERATIONS; u++)
      o.uniform1i(ie.uniforms.uPressure, F.read.attach(1)), R(F.write.fbo), F.swap();
    oe.bind(), o.uniform2f(oe.uniforms.texelSize, S.texelSizeX, S.texelSizeY), o.uniform1i(oe.uniforms.uPressure, F.read.attach(0)), o.uniform1i(oe.uniforms.uVelocity, S.read.attach(1)), R(S.write.fbo), S.swap(), X.bind(), o.uniform2f(X.uniforms.texelSize, S.texelSizeX, S.texelSizeY), B.supportLinearFiltering || o.uniform2f(X.uniforms.dyeTexelSize, S.texelSizeX, S.texelSizeY);
    let s = S.read.attach(0);
    o.uniform1i(X.uniforms.uVelocity, s), o.uniform1i(X.uniforms.uSource, s), o.uniform1f(X.uniforms.dt, r), o.uniform1f(X.uniforms.dissipation, f.VELOCITY_DISSIPATION), R(S.write.fbo), S.swap(), o.viewport(0, 0, C.width, C.height), B.supportLinearFiltering || o.uniform2f(X.uniforms.dyeTexelSize, C.texelSizeX, C.texelSizeY), o.uniform1i(X.uniforms.uVelocity, S.read.attach(0)), o.uniform1i(X.uniforms.uSource, C.read.attach(1)), o.uniform1f(X.uniforms.dissipation, f.DENSITY_DISSIPATION), R(C.write.fbo), C.swap();
  }
  function _(r) {
    f.BLOOM && A(C.read, K), f.SUNRAYS && (w(C.read, C.write, Ee), v(Ee, Le, 1)), r == null || !f.TRANSPARENT ? (o.blendFunc(o.ONE, o.ONE_MINUS_SRC_ALPHA), o.enable(o.BLEND)) : o.disable(o.BLEND);
    let s = r == null ? o.drawingBufferWidth : r.width, u = r == null ? o.drawingBufferHeight : r.height;
    o.viewport(0, 0, s, u);
    let m = r == null ? null : r.fbo;
    f.TRANSPARENT || x(m, st(f.BACK_COLOR)), r == null && f.TRANSPARENT && E(m), g(m, s, u);
  }
  function x(r, s) {
    Ue.bind(), o.uniform4f(Ue.uniforms.color, s.r, s.g, s.b, 1), R(r);
  }
  function E(r) {
    Te.bind(), o.uniform1f(Te.uniforms.aspectRatio, p.width / p.height), R(r);
  }
  function g(r, s, u) {
    if (V.bind(), f.SHADING && o.uniform2f(V.uniforms.texelSize, 1 / s, 1 / u), o.uniform1i(V.uniforms.uTexture, C.read.attach(0)), f.BLOOM) {
      o.uniform1i(V.uniforms.uBloom, K.attach(1)), o.uniform1i(V.uniforms.uDithering, Ye.attach(2));
      let m = ut(Ye, s, u);
      o.uniform2f(V.uniforms.ditherScale, m.x, m.y);
    }
    f.SUNRAYS && o.uniform1i(V.uniforms.uSunrays, Ee.attach(3)), R(r);
  }
  function A(r, s) {
    if (N.length < 2)
      return;
    let u = s;
    o.disable(o.BLEND), $.bind();
    let m = f.BLOOM_THRESHOLD * f.BLOOM_SOFT_KNEE + 1e-4, b = f.BLOOM_THRESHOLD - m, O = m * 2, D = 0.25 / m;
    o.uniform3f($.uniforms.curve, b, O, D), o.uniform1f($.uniforms.threshold, f.BLOOM_THRESHOLD), o.uniform1i($.uniforms.uTexture, r.attach(0)), o.viewport(0, 0, u.width, u.height), R(u.fbo), ee.bind();
    for (let P = 0; P < N.length; P++) {
      let I = N[P];
      o.uniform2f(ee.uniforms.texelSize, u.texelSizeX, u.texelSizeY), o.uniform1i(ee.uniforms.uTexture, u.attach(0)), o.viewport(0, 0, I.width, I.height), R(I.fbo), u = I;
    }
    o.blendFunc(o.ONE, o.ONE), o.enable(o.BLEND);
    for (let P = N.length - 2; P >= 0; P--) {
      let I = N[P];
      o.uniform2f(ee.uniforms.texelSize, u.texelSizeX, u.texelSizeY), o.uniform1i(ee.uniforms.uTexture, u.attach(0)), o.viewport(0, 0, I.width, I.height), R(I.fbo), u = I;
    }
    o.disable(o.BLEND), ne.bind(), o.uniform2f(ne.uniforms.texelSize, u.texelSizeX, u.texelSizeY), o.uniform1i(ne.uniforms.uTexture, u.attach(0)), o.uniform1f(ne.uniforms.intensity, f.BLOOM_INTENSITY), o.viewport(0, 0, s.width, s.height), R(s.fbo);
  }
  function w(r, s, u) {
    o.disable(o.BLEND), he.bind(), o.uniform1i(he.uniforms.uTexture, r.attach(0)), o.viewport(0, 0, s.width, s.height), R(s.fbo), Fe.bind(), o.uniform1f(Fe.uniforms.weight, f.SUNRAYS_WEIGHT), o.uniform1i(Fe.uniforms.uTexture, s.attach(0)), o.viewport(0, 0, u.width, u.height), R(u.fbo);
  }
  function v(r, s, u) {
    a.bind();
    for (let m = 0; m < u; m++)
      o.uniform2f(a.uniforms.texelSize, r.texelSizeX, 0), o.uniform1i(a.uniforms.uTexture, r.attach(0)), R(s.fbo), o.uniform2f(a.uniforms.texelSize, 0, r.texelSizeY), o.uniform1i(a.uniforms.uTexture, s.attach(0)), R(r.fbo);
  }
  function U(r) {
    let s = r.deltaX * f.SPLAT_FORCE, u = r.deltaY * f.SPLAT_FORCE;
    k(r.texcoordX, r.texcoordY, s, u, r.color);
  }
  function Z(r) {
    for (let s = 0; s < r; s++) {
      const u = rt();
      u.r *= f.UNIQUE_COLOR && f.COLOR ? 1 : 10, u.g *= f.UNIQUE_COLOR && f.COLOR ? 1 : 10, u.b *= f.UNIQUE_COLOR && f.COLOR ? 1 : 10;
      const m = Math.random(), b = Math.random(), O = 1e3 * (Math.random() - 0.5), D = 1e3 * (Math.random() - 0.5);
      k(m, b, O, D, u);
    }
  }
  function k(r, s, u, m, b) {
    o.viewport(0, 0, S.width, S.height), te.bind(), o.uniform1i(te.uniforms.uTarget, S.read.attach(0)), o.uniform1f(te.uniforms.aspectRatio, p.width / p.height), o.uniform2f(te.uniforms.point, r, s), o.uniform3f(te.uniforms.color, u, m, 0), o.uniform1f(te.uniforms.radius, Q(f.SPLAT_RADIUS / 100)), R(S.write.fbo), S.swap(), o.viewport(0, 0, C.width, C.height), o.uniform1i(te.uniforms.uTarget, C.read.attach(0)), o.uniform3f(te.uniforms.color, b.r, b.g, b.b), R(C.write.fbo), C.swap();
  }
  function Q(r) {
    let s = p.width / p.height;
    return s > 1 && (r *= s), r;
  }
  f.TRIGGER === "hover" && p.addEventListener("mouseenter", (r) => {
    let s = q(r.offsetX), u = q(r.offsetY), m = T.find((b) => b.id == -1);
    m == null && (m = new qe()), J(m, -1, s, u);
  }), f.TRIGGER === "click" && p.addEventListener("mousedown", (r) => {
    let s = q(r.offsetX), u = q(r.offsetY), m = T.find((b) => b.id == -1);
    m == null && (m = new qe()), J(m, -1, s, u);
  }), setTimeout(() => {
    p.addEventListener("mousemove", (r) => {
      let s = q(r.offsetX), u = q(r.offsetY);
      Ke(T[0], s, u);
    });
  }, 500), window.addEventListener("mouseup", () => {
    Qe(T[0]);
  }), p.addEventListener("touchstart", (r) => {
    r.preventDefault();
    const s = r.targetTouches;
    for (; s.length >= T.length; )
      T.push(new qe());
    for (let u = 0; u < s.length; u++) {
      let m = q(s[u].pageX), b = q(s[u].pageY);
      J(T[u + 1], s[u].identifier, m, b);
    }
  }), p.addEventListener("touchmove", (r) => {
    r.preventDefault();
    const s = r.targetTouches;
    for (let u = 0; u < s.length; u++) {
      let m = q(s[u].pageX), b = q(s[u].pageY);
      Ke(T[u + 1], m, b);
    }
  }, !1), window.addEventListener("touchend", (r) => {
    const s = r.changedTouches;
    for (let u = 0; u < s.length; u++) {
      let m = T.find((b) => b.id == s[u].identifier);
      Qe(m);
    }
  }), f.GUI && window.addEventListener("keydown", (r) => {
    r.code === "KeyP" && (f.PAUSED = !f.PAUSED), r.key === " " && y.push(parseInt(Math.random() * 20) + 5);
  });
  function J(r, s, u, m) {
    r.id = s, r.down = !0, r.moved = !1, r.texcoordX = u / p.width, r.texcoordY = 1 - m / p.height, r.prevTexcoordX = r.texcoordX, r.prevTexcoordY = r.texcoordY, r.deltaX = 0, r.deltaY = 0, r.color = rt();
  }
  function Ke(r, s, u) {
    f.TRIGGER === "click" && (r.moved = r.down), r.prevTexcoordX = r.texcoordX, r.prevTexcoordY = r.texcoordY, r.texcoordX = s / p.width, r.texcoordY = 1 - u / p.height, r.deltaX = me(r.texcoordX - r.prevTexcoordX), r.deltaY = _e(r.texcoordY - r.prevTexcoordY), f.TRIGGER === "hover" && (r.moved = Math.abs(r.deltaX) > 0 || Math.abs(r.deltaY) > 0);
  }
  function Qe(r) {
    r.down = !1;
  }
  function me(r) {
    let s = p.width / p.height;
    return s < 1 && (r *= s), r;
  }
  function _e(r) {
    let s = p.width / p.height;
    return s > 1 && (r /= s), r;
  }
  function rt() {
    if (f.COLOR && f.UNIQUE_COLOR)
      return H;
    {
      let r = at(Math.random(), 1, 1);
      return r.r *= 0.15, r.g *= 0.15, r.b *= 0.15, r;
    }
  }
  function at(r, s, u) {
    let m, b, O, D, P, I, Ae, pe;
    switch (D = Math.floor(r * 6), P = r * 6 - D, I = u * (1 - s), Ae = u * (1 - P * s), pe = u * (1 - (1 - P) * s), D % 6) {
      case 0:
        m = u, b = pe, O = I;
        break;
      case 1:
        m = Ae, b = u, O = I;
        break;
      case 2:
        m = I, b = u, O = pe;
        break;
      case 3:
        m = I, b = Ae, O = u;
        break;
      case 4:
        m = pe, b = I, O = u;
        break;
      case 5:
        m = u, b = I, O = Ae;
        break;
    }
    return {
      r: m,
      g: b,
      b: O
    };
  }
  function st(r) {
    return {
      r: r.r / 255,
      g: r.g / 255,
      b: r.b / 255
    };
  }
  function lt(r, s, u) {
    let m = u - s;
    return m == 0 ? s : (r - s) % m + s;
  }
  function Je(r) {
    let s = o.drawingBufferWidth / o.drawingBufferHeight;
    s < 1 && (s = 1 / s);
    let u = Math.round(r), m = Math.round(r * s);
    return o.drawingBufferWidth > o.drawingBufferHeight ? { width: m, height: u } : { width: u, height: m };
  }
  function ut(r, s, u) {
    return {
      x: s / r.width,
      y: u / r.height
    };
  }
  function q(r) {
    let s = window.devicePixelRatio || 1;
    return Math.floor(r * s);
  }
  function dt(r) {
    if (r.length == 0)
      return 0;
    let s = 0;
    for (let u = 0; u < r.length; u++)
      s = (s << 5) - s + r.charCodeAt(u), s |= 0;
    return s;
  }
}
export {
  Gt as default
};
//# sourceMappingURL=webgl-fluid-custom.mjs.map
