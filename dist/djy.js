(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.djy = factory());
}(this, (function () { 'use strict';

/* global getComputedStyle */

var isFunction = function (func) { return Object.prototype.toString.apply(func).slice(8, -1) === 'Function'; };
var hasSelector = function (element, selector) {
  var matches = element.matches || element.webkitMatchesSelector || element.mozMatchesSelector || element.msMatchesSelector || element.oMatchesSelector;
  return matches.call(element, selector)
};
var Djy = function (selector) {
  if (!(this instanceof Djy)) { return new Djy(selector) }

  if (isFunction(selector)) {
    if (document.readyState !== 'loading') {
      selector();
    } else {
      document.addEventListener('DOMContentLoaded', selector);
    }
  } else {
    this.elements = document.querySelectorAll(selector);
  }
};

Djy.fn = Djy.prototype = {

  each: function each (cb) {
    this.elements.forEach(cb);
    return this
  },

  attr: function attr (name, val) {
    if (val) {
      this.each(function (element) { return element.setAttribute(name, val); });
    } else if (!val) {
      return this.elements.length === 1
        ? this.elements[0].getAttribute(name)
        : this.elements.map(function (element) { return element.getAttribute(name); })
    }
    return this
  },

  val: function val (val$1) {
    if (val$1) {
      this.each(function (element) {
        element.value = val$1;
      });
    } else {
      return this.elements.length === 1
        ? this.elements[0].value
        : this.elements.map(function (element) { return element.value; })
    }

    return this
  },

  addClass: function addClass (className) {
    this.each(function (element) { return element.classList.add(className); });
    return this
  },

  removeClass: function removeClass (className) {
    this.each(function (element) {
      element.classList.remove(className);
    });

    return this
  },

  hasClass: function hasClass (className) {
    var classExists = false;
    this.each(function (element) {
      classExists = element.classList.contains(className);
    });
    return classExists
  },

  toggleClass: function toggleClass (className) {
    this.each(function (element) {
      element.classList.toggle(className);
    });
    return this
  },

  clone: function clone () {
    var newElements = [];
    this.each(function (element) {
      newElements.push(element.cloneNode(true));
    });

    var djy = new Djy();
    djy.elements = newElements;
    djy.length = newElements.length;
    return djy
  },

  html: function (html) {
    if (html) {
      this.each(function (element) {
        element.innerHTML = html;
      });
    } else {
      return this.elements.length === 1
        ? (this.elements[0].innerHTML || '')
        : this.elements.map(function (element) { return element.innerHTML || ''; })
    }

    return this
  },
  css: function css (rule, attr) {
    if (rule) {
      this.each(function (element) {
        element.style[rule] = attr;
      });
    } else if (!attr) {
      return this.elements.length === 1
        ? getComputedStyle(this.elements[0])[rule]
        : this.elements.map(function (element) { return getComputedStyle(element)[rule]; })
    }
    return this
  },

  text: function text (content) {
    if (!content) {
      return this.elements.length === 1
        ? this.elements[0].textContent
        : this.elements.map(function (element) { return element.textContent; })
    }
    return this.each(function (v) { v.textContent = content; })
  },

  children: function children (selector) {
    var elements = [];
    this.each(function (element) { elements.push(element.children); });

    return !selector ? elements
      : elements.filter(function (element) { return hasSelector(element, selector); })
  },

  on: function on (event, cb) {
    return this.each(function (element) {
      element.addEventListener(event, cb);
    })
  },

  off: function off (event, cb) {
    return this.each(function (element) {
      element.removeEventListener(event, cb);
    })
  },

  trigger: function trigger (eventName, data) {
    var event = document.createEvent('HTMLEvents');
    event.data = data;
    event.initEvent(eventName, true, false);
    return this.each(function (element) { return element.dispatchEvent(event); })
  }
};

return Djy;

})));
