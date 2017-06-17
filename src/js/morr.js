/* morr.js */
/* manage dom classes, no more no less */

const morr = (() => {
  'use strict';

  // constructor
  function morr(selector) {
    // keep a record of state booleans
    this.go = null;

    // check our selector
    let type = Array.isArray(selector) ? 'array' : typeof selector;
    // get the selector
    this.sel = type == "string" ? selector : "local";

    // get the element
    this.el = ((sel) => {
      if (type == "string") return document.querySelectorAll(selector);
      if (type == "array") return selector;
      return [selector];
    })(selector)
  }

  // library
  morr.prototype = {

    // non-chaining functions
    do: function process(cb) {
      // check if element exists,
      // and process cb if state permits
      if (this.el && this.go != false) {
        Array.prototype.forEach.call(this.el, cb);
      }
      // reset state after step
      this.go = null;
    },

    has: function hasClass(str) {
      // check if el has class str
      let result = false;
      let regtst = new RegExp('(^| )' + str + '( |$)', 'gi');

      this.do((el) => {
        if (el.classList && el.classList.contains(str)) result = true;
        if (!el.classList && regtst.test(el.className)) result = true;
      });

      return result;
    },

    // Public (chaining) functions
    is: function isClass(str) {
      this.go = this.has(str);
      return this;
    },

    isnt: function isntClass(str) {
      this.go = !this.has(str);
      return this;
    },

    holds: function hasChild(str) {
      // check if el has child sel = str
      this.go = this.el.querySelector(str) != null;
      return this;
    },

    add: function addClass(str) {
      let cl = str.split(' ');

      this.do((el) => {
        cl.forEach((name) => {
          if (el.classList) el.classList.add(name);
          else el.className += ' ' + name;
        });
      });

      return this;
    },

    remove: function removeClass(str) {
      let cl = str.split(' ').join('|');
      let rg = new RegExp('(^|\\b)' + cl + '(\\b|$)', 'gi');

      this.do((el) => {
        if (el.classList) el.classList.remove(cl);
        else el.className = el.className.replace(rg, ' ');
      });

      return this;
    },

    toggle: function toggleClass(str) {
      if (this.has(str)) this.remove(str);
      else this.add(str);

      return this;
    },

    delete: function deleteElement(cb) {
      this.do((el) => { el.parentNode.removeChild(el); });
      if (cb) cb();

      return this;
    },

    then: function thenYesOrNo(yes, no) {
      // if true, do yes, else do no
      if (this.go != false) yes(this.el);
      if (this.go == false && no) no(this.el);
      this.go = null;

      return this;
    }
  };

  return morr;

})();

const rr = function domorr(selector) {
  return new morr(selector);
};
