/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bootstrap/dist/js/bootstrap.js":
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap/dist/js/bootstrap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports, __webpack_require__(/*! jquery */ "jquery"), __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! jquery */ "jquery"), __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function (exports, $, Popper) {
  'use strict';

  $ = $ && Object.prototype.hasOwnProperty.call($, 'default') ? $['default'] : $;
  Popper = Popper && Object.prototype.hasOwnProperty.call(Popper, 'default') ? Popper['default'] : Popper;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.5.0): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */


  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    if (obj === null || typeof obj === 'undefined') {
      return "" + obj;
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined;
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $.fn.emulateTransitionEnd = transitionEndEmulator;
    $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (err) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $(element).css('transition-duration');
      var transitionDelay = $(element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(TRANSITION_END);
    },
    // TODO: Remove in v5
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    },
    jQueryDetection: function jQueryDetection() {
      if (typeof $ === 'undefined') {
        throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
      }

      var version = $.fn.jquery.split(' ')[0].split('.');
      var minMajor = 1;
      var ltMajor = 2;
      var minMinor = 9;
      var minPatch = 1;
      var maxMajor = 4;

      if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
      }
    }
  };
  Util.jQueryDetection();
  setTransitionEndSupport();
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.5.0';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var SELECTOR_DISMISS = '[data-dismiss="alert"]';
  var EVENT_CLOSE = "close" + EVENT_KEY;
  var EVENT_CLOSED = "closed" + EVENT_KEY;
  var EVENT_CLICK_DATA_API = "click" + EVENT_KEY + DATA_API_KEY;
  var CLASS_NAME_ALERT = 'alert';
  var CLASS_NAME_FADE = 'fade';
  var CLASS_NAME_SHOW = 'show';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert = /*#__PURE__*/function () {
    function Alert(element) {
      this._element = element;
    } // Getters


    var _proto = Alert.prototype; // Public

    _proto.close = function close(element) {
      var rootElement = this._element;

      if (element) {
        rootElement = this._getRootElement(element);
      }

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = document.querySelector(selector);
      }

      if (!parent) {
        parent = $(element).closest("." + CLASS_NAME_ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $.Event(EVENT_CLOSE);
      $(element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      $(element).removeClass(CLASS_NAME_SHOW);

      if (!$(element).hasClass(CLASS_NAME_FADE)) {
        this._destroyElement(element);

        return;
      }

      var transitionDuration = Util.getTransitionDurationFromElement(element);
      $(element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      $(element).detach().trigger(EVENT_CLOSED).remove();
    } // Static
    ;

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API, SELECTOR_DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Alert._jQueryInterface;
  $.fn[NAME].Constructor = Alert;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$1 = 'button';
  var VERSION$1 = '4.5.0';
  var DATA_KEY$1 = 'bs.button';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var DATA_API_KEY$1 = '.data-api';
  var JQUERY_NO_CONFLICT$1 = $.fn[NAME$1];
  var CLASS_NAME_ACTIVE = 'active';
  var CLASS_NAME_BUTTON = 'btn';
  var CLASS_NAME_FOCUS = 'focus';
  var SELECTOR_DATA_TOGGLE_CARROT = '[data-toggle^="button"]';
  var SELECTOR_DATA_TOGGLES = '[data-toggle="buttons"]';
  var SELECTOR_DATA_TOGGLE = '[data-toggle="button"]';
  var SELECTOR_DATA_TOGGLES_BUTTONS = '[data-toggle="buttons"] .btn';
  var SELECTOR_INPUT = 'input:not([type="hidden"])';
  var SELECTOR_ACTIVE = '.active';
  var SELECTOR_BUTTON = '.btn';
  var EVENT_CLICK_DATA_API$1 = "click" + EVENT_KEY$1 + DATA_API_KEY$1;
  var EVENT_FOCUS_BLUR_DATA_API = "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1);
  var EVENT_LOAD_DATA_API = "load" + EVENT_KEY$1 + DATA_API_KEY$1;
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button = /*#__PURE__*/function () {
    function Button(element) {
      this._element = element;
    } // Getters


    var _proto = Button.prototype; // Public

    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $(this._element).closest(SELECTOR_DATA_TOGGLES)[0];

      if (rootElement) {
        var input = this._element.querySelector(SELECTOR_INPUT);

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this._element.classList.contains(CLASS_NAME_ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = rootElement.querySelector(SELECTOR_ACTIVE);

              if (activeElement) {
                $(activeElement).removeClass(CLASS_NAME_ACTIVE);
              }
            }
          }

          if (triggerChangeEvent) {
            // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
            if (input.type === 'checkbox' || input.type === 'radio') {
              input.checked = !this._element.classList.contains(CLASS_NAME_ACTIVE);
            }

            $(input).trigger('change');
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (!(this._element.hasAttribute('disabled') || this._element.classList.contains('disabled'))) {
        if (addAriaPressed) {
          this._element.setAttribute('aria-pressed', !this._element.classList.contains(CLASS_NAME_ACTIVE));
        }

        if (triggerChangeEvent) {
          $(this._element).toggleClass(CLASS_NAME_ACTIVE);
        }
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$1);
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$1);

        if (!data) {
          data = new Button(this);
          $(this).data(DATA_KEY$1, data);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$1;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    var button = event.target;
    var initialButton = button;

    if (!$(button).hasClass(CLASS_NAME_BUTTON)) {
      button = $(button).closest(SELECTOR_BUTTON)[0];
    }

    if (!button || button.hasAttribute('disabled') || button.classList.contains('disabled')) {
      event.preventDefault(); // work around Firefox bug #1540995
    } else {
      var inputBtn = button.querySelector(SELECTOR_INPUT);

      if (inputBtn && (inputBtn.hasAttribute('disabled') || inputBtn.classList.contains('disabled'))) {
        event.preventDefault(); // work around Firefox bug #1540995

        return;
      }

      if (initialButton.tagName === 'LABEL' && inputBtn && inputBtn.type === 'checkbox') {
        event.preventDefault(); // work around event sent to label and input
      }

      Button._jQueryInterface.call($(button), 'toggle');
    }
  }).on(EVENT_FOCUS_BLUR_DATA_API, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    var button = $(event.target).closest(SELECTOR_BUTTON)[0];
    $(button).toggleClass(CLASS_NAME_FOCUS, /^focus(in)?$/.test(event.type));
  });
  $(window).on(EVENT_LOAD_DATA_API, function () {
    // ensure correct active class is set to match the controls' actual values/states
    // find all checkboxes/readio buttons inside data-toggle groups
    var buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLES_BUTTONS));

    for (var i = 0, len = buttons.length; i < len; i++) {
      var button = buttons[i];
      var input = button.querySelector(SELECTOR_INPUT);

      if (input.checked || input.hasAttribute('checked')) {
        button.classList.add(CLASS_NAME_ACTIVE);
      } else {
        button.classList.remove(CLASS_NAME_ACTIVE);
      }
    } // find all button toggles


    buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE));

    for (var _i = 0, _len = buttons.length; _i < _len; _i++) {
      var _button = buttons[_i];

      if (_button.getAttribute('aria-pressed') === 'true') {
        _button.classList.add(CLASS_NAME_ACTIVE);
      } else {
        _button.classList.remove(CLASS_NAME_ACTIVE);
      }
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$1] = Button._jQueryInterface;
  $.fn[NAME$1].Constructor = Button;

  $.fn[NAME$1].noConflict = function () {
    $.fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return Button._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$2 = 'carousel';
  var VERSION$2 = '4.5.0';
  var DATA_KEY$2 = 'bs.carousel';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var DATA_API_KEY$2 = '.data-api';
  var JQUERY_NO_CONFLICT$2 = $.fn[NAME$2];
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var DIRECTION_NEXT = 'next';
  var DIRECTION_PREV = 'prev';
  var DIRECTION_LEFT = 'left';
  var DIRECTION_RIGHT = 'right';
  var EVENT_SLIDE = "slide" + EVENT_KEY$2;
  var EVENT_SLID = "slid" + EVENT_KEY$2;
  var EVENT_KEYDOWN = "keydown" + EVENT_KEY$2;
  var EVENT_MOUSEENTER = "mouseenter" + EVENT_KEY$2;
  var EVENT_MOUSELEAVE = "mouseleave" + EVENT_KEY$2;
  var EVENT_TOUCHSTART = "touchstart" + EVENT_KEY$2;
  var EVENT_TOUCHMOVE = "touchmove" + EVENT_KEY$2;
  var EVENT_TOUCHEND = "touchend" + EVENT_KEY$2;
  var EVENT_POINTERDOWN = "pointerdown" + EVENT_KEY$2;
  var EVENT_POINTERUP = "pointerup" + EVENT_KEY$2;
  var EVENT_DRAG_START = "dragstart" + EVENT_KEY$2;
  var EVENT_LOAD_DATA_API$1 = "load" + EVENT_KEY$2 + DATA_API_KEY$2;
  var EVENT_CLICK_DATA_API$2 = "click" + EVENT_KEY$2 + DATA_API_KEY$2;
  var CLASS_NAME_CAROUSEL = 'carousel';
  var CLASS_NAME_ACTIVE$1 = 'active';
  var CLASS_NAME_SLIDE = 'slide';
  var CLASS_NAME_RIGHT = 'carousel-item-right';
  var CLASS_NAME_LEFT = 'carousel-item-left';
  var CLASS_NAME_NEXT = 'carousel-item-next';
  var CLASS_NAME_PREV = 'carousel-item-prev';
  var CLASS_NAME_POINTER_EVENT = 'pointer-event';
  var SELECTOR_ACTIVE$1 = '.active';
  var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
  var SELECTOR_ITEM = '.carousel-item';
  var SELECTOR_ITEM_IMG = '.carousel-item img';
  var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
  var SELECTOR_INDICATORS = '.carousel-indicators';
  var SELECTOR_DATA_SLIDE = '[data-slide], [data-slide-to]';
  var SELECTOR_DATA_RIDE = '[data-ride="carousel"]';
  var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel = /*#__PURE__*/function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._element = element;
      this._indicatorsElement = this._element.querySelector(SELECTOR_INDICATORS);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype; // Public

    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(DIRECTION_NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && $(this._element).is(':visible') && $(this._element).css('visibility') !== 'hidden') {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(DIRECTION_PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (this._element.querySelector(SELECTOR_NEXT_PREV)) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      this._activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $(this._element).one(EVENT_SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? DIRECTION_NEXT : DIRECTION_PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      $(this._element).off(EVENT_KEY$2);
      $.removeData(this._element, DATA_KEY$2);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2(_objectSpread2({}, Default), config);
      Util.typeCheckConfig(NAME$2, config, DefaultType);
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0; // swipe left

      if (direction > 0) {
        this.prev();
      } // swipe right


      if (direction < 0) {
        this.next();
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $(this._element).on(EVENT_KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $(this._element).on(EVENT_MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(EVENT_MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });
      }

      if (this._config.touch) {
        this._addTouchEventListeners();
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      if (!this._touchSupported) {
        return;
      }

      var start = function start(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchStartX = event.originalEvent.clientX;
        } else if (!_this3._pointerEvent) {
          _this3.touchStartX = event.originalEvent.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
          _this3.touchDeltaX = 0;
        } else {
          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
        }
      };

      var end = function end(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        }

        _this3._handleSwipe();

        if (_this3._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          if (_this3.touchTimeout) {
            clearTimeout(_this3.touchTimeout);
          }

          _this3.touchTimeout = setTimeout(function (event) {
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        }
      };

      $(this._element.querySelectorAll(SELECTOR_ITEM_IMG)).on(EVENT_DRAG_START, function (e) {
        return e.preventDefault();
      });

      if (this._pointerEvent) {
        $(this._element).on(EVENT_POINTERDOWN, function (event) {
          return start(event);
        });
        $(this._element).on(EVENT_POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        $(this._element).on(EVENT_TOUCHSTART, function (event) {
          return start(event);
        });
        $(this._element).on(EVENT_TOUCHMOVE, function (event) {
          return move(event);
        });
        $(this._element).on(EVENT_TOUCHEND, function (event) {
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(SELECTOR_ITEM)) : [];
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === DIRECTION_NEXT;
      var isPrevDirection = direction === DIRECTION_PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === DIRECTION_PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(this._element.querySelector(SELECTOR_ACTIVE_ITEM));

      var slideEvent = $.Event(EVENT_SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $(this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(SELECTOR_ACTIVE$1));
        $(indicators).removeClass(CLASS_NAME_ACTIVE$1);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $(nextIndicator).addClass(CLASS_NAME_ACTIVE$1);
        }
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      var activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === DIRECTION_NEXT) {
        directionalClassName = CLASS_NAME_LEFT;
        orderClassName = CLASS_NAME_NEXT;
        eventDirectionName = DIRECTION_LEFT;
      } else {
        directionalClassName = CLASS_NAME_RIGHT;
        orderClassName = CLASS_NAME_PREV;
        eventDirectionName = DIRECTION_RIGHT;
      }

      if (nextElement && $(nextElement).hasClass(CLASS_NAME_ACTIVE$1)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = $.Event(EVENT_SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if ($(this._element).hasClass(CLASS_NAME_SLIDE)) {
        $(nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $(activeElement).addClass(directionalClassName);
        $(nextElement).addClass(directionalClassName);
        var nextElementInterval = parseInt(nextElement.getAttribute('data-interval'), 10);

        if (nextElementInterval) {
          this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
          this._config.interval = nextElementInterval;
        } else {
          this._config.interval = this._config.defaultInterval || this._config.interval;
        }

        var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
        $(activeElement).one(Util.TRANSITION_END, function () {
          $(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(CLASS_NAME_ACTIVE$1);
          $(activeElement).removeClass(CLASS_NAME_ACTIVE$1 + " " + orderClassName + " " + directionalClassName);
          _this4._isSliding = false;
          setTimeout(function () {
            return $(_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        $(activeElement).removeClass(CLASS_NAME_ACTIVE$1);
        $(nextElement).addClass(CLASS_NAME_ACTIVE$1);
        this._isSliding = false;
        $(this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$2);

        var _config = _objectSpread2(_objectSpread2({}, Default), $(this).data());

        if (_typeof(config) === 'object') {
          _config = _objectSpread2(_objectSpread2({}, _config), config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $(this).data(DATA_KEY$2, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $(selector)[0];

      if (!target || !$(target).hasClass(CLASS_NAME_CAROUSEL)) {
        return;
      }

      var config = _objectSpread2(_objectSpread2({}, $(target).data()), $(this).data());

      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($(target), config);

      if (slideIndex) {
        $(target).data(DATA_KEY$2).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$2;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API$2, SELECTOR_DATA_SLIDE, Carousel._dataApiClickHandler);
  $(window).on(EVENT_LOAD_DATA_API$1, function () {
    var carousels = [].slice.call(document.querySelectorAll(SELECTOR_DATA_RIDE));

    for (var i = 0, len = carousels.length; i < len; i++) {
      var $carousel = $(carousels[i]);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$2] = Carousel._jQueryInterface;
  $.fn[NAME$2].Constructor = Carousel;

  $.fn[NAME$2].noConflict = function () {
    $.fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return Carousel._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$3 = 'collapse';
  var VERSION$3 = '4.5.0';
  var DATA_KEY$3 = 'bs.collapse';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var DATA_API_KEY$3 = '.data-api';
  var JQUERY_NO_CONFLICT$3 = $.fn[NAME$3];
  var Default$1 = {
    toggle: true,
    parent: ''
  };
  var DefaultType$1 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var EVENT_SHOW = "show" + EVENT_KEY$3;
  var EVENT_SHOWN = "shown" + EVENT_KEY$3;
  var EVENT_HIDE = "hide" + EVENT_KEY$3;
  var EVENT_HIDDEN = "hidden" + EVENT_KEY$3;
  var EVENT_CLICK_DATA_API$3 = "click" + EVENT_KEY$3 + DATA_API_KEY$3;
  var CLASS_NAME_SHOW$1 = 'show';
  var CLASS_NAME_COLLAPSE = 'collapse';
  var CLASS_NAME_COLLAPSING = 'collapsing';
  var CLASS_NAME_COLLAPSED = 'collapsed';
  var DIMENSION_WIDTH = 'width';
  var DIMENSION_HEIGHT = 'height';
  var SELECTOR_ACTIVES = '.show, .collapsing';
  var SELECTOR_DATA_TOGGLE$1 = '[data-toggle="collapse"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse = /*#__PURE__*/function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$1));

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = Util.getSelectorFromElement(elem);
        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          return foundElem === element;
        });

        if (selector !== null && filterElement.length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto = Collapse.prototype; // Public

    _proto.toggle = function toggle() {
      if ($(this._element).hasClass(CLASS_NAME_SHOW$1)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $(this._element).hasClass(CLASS_NAME_SHOW$1)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = [].slice.call(this._parent.querySelectorAll(SELECTOR_ACTIVES)).filter(function (elem) {
          if (typeof _this._config.parent === 'string') {
            return elem.getAttribute('data-parent') === _this._config.parent;
          }

          return elem.classList.contains(CLASS_NAME_COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $(actives).not(this._selector).data(DATA_KEY$3);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $.Event(EVENT_SHOW);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($(actives).not(this._selector), 'hide');

        if (!activesData) {
          $(actives).data(DATA_KEY$3, null);
        }
      }

      var dimension = this._getDimension();

      $(this._element).removeClass(CLASS_NAME_COLLAPSE).addClass(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $(this._triggerArray).removeClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $(_this._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $(_this._element).trigger(EVENT_SHOWN);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$(this._element).hasClass(CLASS_NAME_SHOW$1)) {
        return;
      }

      var startEvent = $.Event(EVENT_HIDE);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $(this._element).addClass(CLASS_NAME_COLLAPSING).removeClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1);
      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $([].slice.call(document.querySelectorAll(selector)));

            if (!$elem.hasClass(CLASS_NAME_SHOW$1)) {
              $(trigger).addClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $(_this2._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE).trigger(EVENT_HIDDEN);
      };

      this._element.style[dimension] = '';
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$3);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2(_objectSpread2({}, Default$1), config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME$3, config, DefaultType$1);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $(this._element).hasClass(DIMENSION_WIDTH);
      return hasWidth ? DIMENSION_WIDTH : DIMENSION_HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = document.querySelector(this._config.parent);
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      var children = [].slice.call(parent.querySelectorAll(selector));
      $(children).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen = $(element).hasClass(CLASS_NAME_SHOW$1);

      if (triggerArray.length) {
        $(triggerArray).toggleClass(CLASS_NAME_COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$3);

        var _config = _objectSpread2(_objectSpread2(_objectSpread2({}, Default$1), $this.data()), _typeof(config) === 'object' && config ? config : {});

        if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY$3, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$3;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }]);

    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$1, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $(this);
    var selector = Util.getSelectorFromElement(this);
    var selectors = [].slice.call(document.querySelectorAll(selector));
    $(selectors).each(function () {
      var $target = $(this);
      var data = $target.data(DATA_KEY$3);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$3] = Collapse._jQueryInterface;
  $.fn[NAME$3].Constructor = Collapse;

  $.fn[NAME$3].noConflict = function () {
    $.fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return Collapse._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$4 = 'dropdown';
  var VERSION$4 = '4.5.0';
  var DATA_KEY$4 = 'bs.dropdown';
  var EVENT_KEY$4 = "." + DATA_KEY$4;
  var DATA_API_KEY$4 = '.data-api';
  var JQUERY_NO_CONFLICT$4 = $.fn[NAME$4];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var EVENT_HIDE$1 = "hide" + EVENT_KEY$4;
  var EVENT_HIDDEN$1 = "hidden" + EVENT_KEY$4;
  var EVENT_SHOW$1 = "show" + EVENT_KEY$4;
  var EVENT_SHOWN$1 = "shown" + EVENT_KEY$4;
  var EVENT_CLICK = "click" + EVENT_KEY$4;
  var EVENT_CLICK_DATA_API$4 = "click" + EVENT_KEY$4 + DATA_API_KEY$4;
  var EVENT_KEYDOWN_DATA_API = "keydown" + EVENT_KEY$4 + DATA_API_KEY$4;
  var EVENT_KEYUP_DATA_API = "keyup" + EVENT_KEY$4 + DATA_API_KEY$4;
  var CLASS_NAME_DISABLED = 'disabled';
  var CLASS_NAME_SHOW$2 = 'show';
  var CLASS_NAME_DROPUP = 'dropup';
  var CLASS_NAME_DROPRIGHT = 'dropright';
  var CLASS_NAME_DROPLEFT = 'dropleft';
  var CLASS_NAME_MENURIGHT = 'dropdown-menu-right';
  var CLASS_NAME_POSITION_STATIC = 'position-static';
  var SELECTOR_DATA_TOGGLE$2 = '[data-toggle="dropdown"]';
  var SELECTOR_FORM_CHILD = '.dropdown form';
  var SELECTOR_MENU = '.dropdown-menu';
  var SELECTOR_NAVBAR_NAV = '.navbar-nav';
  var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  var PLACEMENT_TOP = 'top-start';
  var PLACEMENT_TOPEND = 'top-end';
  var PLACEMENT_BOTTOM = 'bottom-start';
  var PLACEMENT_BOTTOMEND = 'bottom-end';
  var PLACEMENT_RIGHT = 'right-start';
  var PLACEMENT_LEFT = 'left-start';
  var Default$2 = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null
  };
  var DefaultType$2 = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string',
    popperConfig: '(null|object)'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown = /*#__PURE__*/function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype; // Public

    _proto.toggle = function toggle() {
      if (this._element.disabled || $(this._element).hasClass(CLASS_NAME_DISABLED)) {
        return;
      }

      var isActive = $(this._menu).hasClass(CLASS_NAME_SHOW$2);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      this.show(true);
    };

    _proto.show = function show(usePopper) {
      if (usePopper === void 0) {
        usePopper = false;
      }

      if (this._element.disabled || $(this._element).hasClass(CLASS_NAME_DISABLED) || $(this._menu).hasClass(CLASS_NAME_SHOW$2)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $.Event(EVENT_SHOW$1, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Disable totally Popper.js for Dropdown in Navbar


      if (!this._inNavbar && usePopper) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (Util.isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $(parent).addClass(CLASS_NAME_POSITION_STATIC);
        }

        this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && $(parent).closest(SELECTOR_NAVBAR_NAV).length === 0) {
        $(document.body).children().on('mouseover', null, $.noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $(this._menu).toggleClass(CLASS_NAME_SHOW$2);
      $(parent).toggleClass(CLASS_NAME_SHOW$2).trigger($.Event(EVENT_SHOWN$1, relatedTarget));
    };

    _proto.hide = function hide() {
      if (this._element.disabled || $(this._element).hasClass(CLASS_NAME_DISABLED) || !$(this._menu).hasClass(CLASS_NAME_SHOW$2)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = $.Event(EVENT_HIDE$1, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      if (this._popper) {
        this._popper.destroy();
      }

      $(this._menu).toggleClass(CLASS_NAME_SHOW$2);
      $(parent).toggleClass(CLASS_NAME_SHOW$2).trigger($.Event(EVENT_HIDDEN$1, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$4);
      $(this._element).off(EVENT_KEY$4);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $(this._element).on(EVENT_CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2(_objectSpread2(_objectSpread2({}, this.constructor.Default), $(this._element).data()), config);
      Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        if (parent) {
          this._menu = parent.querySelector(SELECTOR_MENU);
        }
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $(this._element.parentNode);
      var placement = PLACEMENT_BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(CLASS_NAME_DROPUP)) {
        placement = $(this._menu).hasClass(CLASS_NAME_MENURIGHT) ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPRIGHT)) {
        placement = PLACEMENT_RIGHT;
      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPLEFT)) {
        placement = PLACEMENT_LEFT;
      } else if ($(this._menu).hasClass(CLASS_NAME_MENURIGHT)) {
        placement = PLACEMENT_BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $(this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      var offset = {};

      if (typeof this._config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread2(_objectSpread2({}, data.offsets), _this2._config.offset(data.offsets, _this2._element) || {});
          return data;
        };
      } else {
        offset.offset = this._config.offset;
      }

      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      }; // Disable Popper.js if we have a static display

      if (this._config.display === 'static') {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      }

      return _objectSpread2(_objectSpread2({}, popperConfig), this._config.popperConfig);
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$4);

        var _config = _typeof(config) === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $(this).data(DATA_KEY$4, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$2));

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $(toggles[i]).data(DATA_KEY$4);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$(parent).hasClass(CLASS_NAME_SHOW$2)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $.Event(EVENT_HIDE$1, relatedTarget);
        $(parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().off('mouseover', null, $.noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        if (context._popper) {
          context._popper.destroy();
        }

        $(dropdownMenu).removeClass(CLASS_NAME_SHOW$2);
        $(parent).removeClass(CLASS_NAME_SHOW$2).trigger($.Event(EVENT_HIDDEN$1, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = document.querySelector(selector);
      }

      return parent || element.parentNode;
    } // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $(event.target).closest(SELECTOR_MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      if (this.disabled || $(this).hasClass(CLASS_NAME_DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $(parent).hasClass(CLASS_NAME_SHOW$2);

      if (!isActive && event.which === ESCAPE_KEYCODE) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (!isActive || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
        if (event.which === ESCAPE_KEYCODE) {
          $(parent.querySelector(SELECTOR_DATA_TOGGLE$2)).trigger('focus');
        }

        $(this).trigger('click');
        return;
      }

      var items = [].slice.call(parent.querySelectorAll(SELECTOR_VISIBLE_ITEMS)).filter(function (item) {
        return $(item).is(':visible');
      });

      if (items.length === 0) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$4;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }]);

    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$2, Dropdown._dataApiKeydownHandler).on(EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown._dataApiKeydownHandler).on(EVENT_CLICK_DATA_API$4 + " " + EVENT_KEYUP_DATA_API, Dropdown._clearMenus).on(EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$2, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($(this), 'toggle');
  }).on(EVENT_CLICK_DATA_API$4, SELECTOR_FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$4] = Dropdown._jQueryInterface;
  $.fn[NAME$4].Constructor = Dropdown;

  $.fn[NAME$4].noConflict = function () {
    $.fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return Dropdown._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$5 = 'modal';
  var VERSION$5 = '4.5.0';
  var DATA_KEY$5 = 'bs.modal';
  var EVENT_KEY$5 = "." + DATA_KEY$5;
  var DATA_API_KEY$5 = '.data-api';
  var JQUERY_NO_CONFLICT$5 = $.fn[NAME$5];
  var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default$3 = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType$3 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var EVENT_HIDE$2 = "hide" + EVENT_KEY$5;
  var EVENT_HIDE_PREVENTED = "hidePrevented" + EVENT_KEY$5;
  var EVENT_HIDDEN$2 = "hidden" + EVENT_KEY$5;
  var EVENT_SHOW$2 = "show" + EVENT_KEY$5;
  var EVENT_SHOWN$2 = "shown" + EVENT_KEY$5;
  var EVENT_FOCUSIN = "focusin" + EVENT_KEY$5;
  var EVENT_RESIZE = "resize" + EVENT_KEY$5;
  var EVENT_CLICK_DISMISS = "click.dismiss" + EVENT_KEY$5;
  var EVENT_KEYDOWN_DISMISS = "keydown.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss" + EVENT_KEY$5;
  var EVENT_CLICK_DATA_API$5 = "click" + EVENT_KEY$5 + DATA_API_KEY$5;
  var CLASS_NAME_SCROLLABLE = 'modal-dialog-scrollable';
  var CLASS_NAME_SCROLLBAR_MEASURER = 'modal-scrollbar-measure';
  var CLASS_NAME_BACKDROP = 'modal-backdrop';
  var CLASS_NAME_OPEN = 'modal-open';
  var CLASS_NAME_FADE$1 = 'fade';
  var CLASS_NAME_SHOW$3 = 'show';
  var CLASS_NAME_STATIC = 'modal-static';
  var SELECTOR_DIALOG = '.modal-dialog';
  var SELECTOR_MODAL_BODY = '.modal-body';
  var SELECTOR_DATA_TOGGLE$3 = '[data-toggle="modal"]';
  var SELECTOR_DATA_DISMISS = '[data-dismiss="modal"]';
  var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  var SELECTOR_STICKY_CONTENT = '.sticky-top';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal = /*#__PURE__*/function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(SELECTOR_DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype; // Public

    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if ($(this._element).hasClass(CLASS_NAME_FADE$1)) {
        this._isTransitioning = true;
      }

      var showEvent = $.Event(EVENT_SHOW$2, {
        relatedTarget: relatedTarget
      });
      $(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $(this._element).on(EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $(this._dialog).on(EVENT_MOUSEDOWN_DISMISS, function () {
        $(_this._element).one(EVENT_MOUSEUP_DISMISS, function (event) {
          if ($(event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = $.Event(EVENT_HIDE$2);
      $(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = $(this._element).hasClass(CLASS_NAME_FADE$1);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $(document).off(EVENT_FOCUSIN);
      $(this._element).removeClass(CLASS_NAME_SHOW$3);
      $(this._element).off(EVENT_CLICK_DISMISS);
      $(this._dialog).off(EVENT_MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $(htmlElement).off(EVENT_KEY$5);
      });
      /**
       * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `EVENT_CLICK_DATA_API` event that should remain
       */

      $(document).off(EVENT_FOCUSIN);
      $.removeData(this._element, DATA_KEY$5);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2(_objectSpread2({}, Default$3), config);
      Util.typeCheckConfig(NAME$5, config, DefaultType$3);
      return config;
    };

    _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
      var _this3 = this;

      if (this._config.backdrop === 'static') {
        var hideEventPrevented = $.Event(EVENT_HIDE_PREVENTED);
        $(this._element).trigger(hideEventPrevented);

        if (hideEventPrevented.defaultPrevented) {
          return;
        }

        this._element.classList.add(CLASS_NAME_STATIC);

        var modalTransitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function () {
          _this3._element.classList.remove(CLASS_NAME_STATIC);
        }).emulateTransitionEnd(modalTransitionDuration);

        this._element.focus();
      } else {
        this.hide();
      }
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this4 = this;

      var transition = $(this._element).hasClass(CLASS_NAME_FADE$1);
      var modalBody = this._dialog ? this._dialog.querySelector(SELECTOR_MODAL_BODY) : null;

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      if ($(this._dialog).hasClass(CLASS_NAME_SCROLLABLE) && modalBody) {
        modalBody.scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        Util.reflow(this._element);
      }

      $(this._element).addClass(CLASS_NAME_SHOW$3);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $.Event(EVENT_SHOWN$2, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this4._config.focus) {
          _this4._element.focus();
        }

        _this4._isTransitioning = false;
        $(_this4._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this5 = this;

      $(document).off(EVENT_FOCUSIN) // Guard against infinite focus loop
      .on(EVENT_FOCUSIN, function (event) {
        if (document !== event.target && _this5._element !== event.target && $(_this5._element).has(event.target).length === 0) {
          _this5._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this6 = this;

      if (this._isShown) {
        $(this._element).on(EVENT_KEYDOWN_DISMISS, function (event) {
          if (_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1) {
            event.preventDefault();

            _this6.hide();
          } else if (!_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1) {
            _this6._triggerBackdropTransition();
          }
        });
      } else if (!this._isShown) {
        $(this._element).off(EVENT_KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this7 = this;

      if (this._isShown) {
        $(window).on(EVENT_RESIZE, function (event) {
          return _this7.handleUpdate(event);
        });
      } else {
        $(window).off(EVENT_RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this8 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $(document.body).removeClass(CLASS_NAME_OPEN);

        _this8._resetAdjustments();

        _this8._resetScrollbar();

        $(_this8._element).trigger(EVENT_HIDDEN$2);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this9 = this;

      var animate = $(this._element).hasClass(CLASS_NAME_FADE$1) ? CLASS_NAME_FADE$1 : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = CLASS_NAME_BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $(this._backdrop).appendTo(document.body);
        $(this._element).on(EVENT_CLICK_DISMISS, function (event) {
          if (_this9._ignoreBackdropClick) {
            _this9._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          _this9._triggerBackdropTransition();
        });

        if (animate) {
          Util.reflow(this._backdrop);
        }

        $(this._backdrop).addClass(CLASS_NAME_SHOW$3);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(CLASS_NAME_SHOW$3);

        var callbackRemove = function callbackRemove() {
          _this9._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($(this._element).hasClass(CLASS_NAME_FADE$1)) {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

          $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this10 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(SELECTOR_STICKY_CONTENT)); // Adjust fixed content padding

        $(fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $(element).css('padding-right');
          $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $(stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $(element).css('margin-right');
          $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $(document.body).css('padding-right');
        $(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $(document.body).addClass(CLASS_NAME_OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
      $(fixedContent).each(function (index, element) {
        var padding = $(element).data('padding-right');
        $(element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + SELECTOR_STICKY_CONTENT));
      $(elements).each(function (index, element) {
        var margin = $(element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $(element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $(document.body).data('padding-right');
      $(document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$5);

        var _config = _objectSpread2(_objectSpread2(_objectSpread2({}, Default$3), $(this).data()), _typeof(config) === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          $(this).data(DATA_KEY$5, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API$5, SELECTOR_DATA_TOGGLE$3, function (event) {
    var _this11 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $(target).data(DATA_KEY$5) ? 'toggle' : _objectSpread2(_objectSpread2({}, $(target).data()), $(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $(target).one(EVENT_SHOW$2, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(EVENT_HIDDEN$2, function () {
        if ($(_this11).is(':visible')) {
          _this11.focus();
        }
      });
    });

    Modal._jQueryInterface.call($(target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$5] = Modal._jQueryInterface;
  $.fn[NAME$5].Constructor = Modal;

  $.fn[NAME$5].noConflict = function () {
    $.fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return Modal._jQueryInterface;
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.5.0): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */


  var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.indexOf(attrName) !== -1) {
      if (uriAttrs.indexOf(attrName) !== -1) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, len = regExp.length; i < len; i++) {
      if (attrName.match(regExp[i])) {
        return true;
      }
    }

    return false;
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var whitelistKeys = Object.keys(whiteList);
    var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

    var _loop = function _loop(i, len) {
      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
        el.parentNode.removeChild(el);
        return "continue";
      }

      var attributeList = [].slice.call(el.attributes);
      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, whitelistedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$6 = 'tooltip';
  var VERSION$6 = '4.5.0';
  var DATA_KEY$6 = 'bs.tooltip';
  var EVENT_KEY$6 = "." + DATA_KEY$6;
  var JQUERY_NO_CONFLICT$6 = $.fn[NAME$6];
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
  var DefaultType$4 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object',
    popperConfig: '(null|object)'
  };
  var AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default$4 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist,
    popperConfig: null
  };
  var HOVER_STATE_SHOW = 'show';
  var HOVER_STATE_OUT = 'out';
  var Event = {
    HIDE: "hide" + EVENT_KEY$6,
    HIDDEN: "hidden" + EVENT_KEY$6,
    SHOW: "show" + EVENT_KEY$6,
    SHOWN: "shown" + EVENT_KEY$6,
    INSERTED: "inserted" + EVENT_KEY$6,
    CLICK: "click" + EVENT_KEY$6,
    FOCUSIN: "focusin" + EVENT_KEY$6,
    FOCUSOUT: "focusout" + EVENT_KEY$6,
    MOUSEENTER: "mouseenter" + EVENT_KEY$6,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$6
  };
  var CLASS_NAME_FADE$2 = 'fade';
  var CLASS_NAME_SHOW$4 = 'show';
  var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  var SELECTOR_ARROW = '.arrow';
  var TRIGGER_HOVER = 'hover';
  var TRIGGER_FOCUS = 'focus';
  var TRIGGER_CLICK = 'click';
  var TRIGGER_MANUAL = 'manual';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip = /*#__PURE__*/function () {
    function Tooltip(element, config) {
      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
      } // private


      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype; // Public

    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($(this.getTipElement()).hasClass(CLASS_NAME_SHOW$4)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $.removeData(this.element, this.constructor.DATA_KEY);
      $(this.element).off(this.constructor.EVENT_KEY);
      $(this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler);

      if (this.tip) {
        $(this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $(this.element).trigger(showEvent);
        var shadowRoot = Util.findShadowRoot(this.element);
        var isInTheDom = $.contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $(tip).addClass(CLASS_NAME_FADE$2);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);

        var container = this._getContainer();

        $(tip).data(this.constructor.DATA_KEY, this);

        if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
          $(tip).appendTo(container);
        }

        $(this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper(this.element, tip, this._getPopperConfig(attachment));
        $(tip).addClass(CLASS_NAME_SHOW$4); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().on('mouseover', null, $.noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $(_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HOVER_STATE_OUT) {
            _this._leave(null, _this);
          }
        };

        if ($(this.tip).hasClass(CLASS_NAME_FADE$2)) {
          var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
          $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $.Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HOVER_STATE_SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $(tip).removeClass(CLASS_NAME_SHOW$4); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $(document.body).children().off('mouseover', null, $.noop);
      }

      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;

      if ($(this.tip).hasClass(CLASS_NAME_FADE$2)) {
        var transitionDuration = Util.getTransitionDurationFromElement(tip);
        $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Protected
    ;

    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var tip = this.getTipElement();
      this.setElementContent($(tip.querySelectorAll(SELECTOR_TOOLTIP_INNER)), this.getTitle());
      $(tip).removeClass(CLASS_NAME_FADE$2 + " " + CLASS_NAME_SHOW$4);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      if (_typeof(content) === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (this.config.html) {
          if (!$(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($(content).text());
        }

        return;
      }

      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
        }

        $element.html(content);
      } else {
        $element.text(content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    } // Private
    ;

    _proto._getPopperConfig = function _getPopperConfig(attachment) {
      var _this3 = this;

      var defaultBsConfig = {
        placement: attachment,
        modifiers: {
          offset: this._getOffset(),
          flip: {
            behavior: this.config.fallbackPlacement
          },
          arrow: {
            element: SELECTOR_ARROW
          },
          preventOverflow: {
            boundariesElement: this.config.boundary
          }
        },
        onCreate: function onCreate(data) {
          if (data.originalPlacement !== data.placement) {
            _this3._handlePopperPlacementChange(data);
          }
        },
        onUpdate: function onUpdate(data) {
          return _this3._handlePopperPlacementChange(data);
        }
      };
      return _objectSpread2(_objectSpread2({}, defaultBsConfig), this.config.popperConfig);
    };

    _proto._getOffset = function _getOffset() {
      var _this4 = this;

      var offset = {};

      if (typeof this.config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread2(_objectSpread2({}, data.offsets), _this4.config.offset(data.offsets, _this4.element) || {});
          return data;
        };
      } else {
        offset.offset = this.config.offset;
      }

      return offset;
    };

    _proto._getContainer = function _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }

      if (Util.isElement(this.config.container)) {
        return $(this.config.container);
      }

      return $(document).find(this.config.container);
    };

    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this5 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $(_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
            return _this5.toggle(event);
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          var eventIn = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
          var eventOut = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
          $(_this5.element).on(eventIn, _this5.config.selector, function (event) {
            return _this5._enter(event);
          }).on(eventOut, _this5.config.selector, function (event) {
            return _this5._leave(event);
          });
        }
      });

      this._hideModalHandler = function () {
        if (_this5.element) {
          _this5.hide();
        }
      };

      $(this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler);

      if (this.config.selector) {
        this.config = _objectSpread2(_objectSpread2({}, this.config), {}, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = _typeof(this.element.getAttribute('data-original-title'));

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
      }

      if ($(context.getTipElement()).hasClass(CLASS_NAME_SHOW$4) || context._hoverState === HOVER_STATE_SHOW) {
        context._hoverState = HOVER_STATE_SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      var dataAttributes = $(this.element).data();
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
          delete dataAttributes[dataAttr];
        }
      });
      config = _objectSpread2(_objectSpread2(_objectSpread2({}, this.constructor.Default), dataAttributes), _typeof(config) === 'object' && config ? config : {});

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
      }

      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      this.tip = popperData.instance.popper;

      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $(tip).removeClass(CLASS_NAME_FADE$2);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    } // Static
    ;

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$6);

        var _config = _typeof(config) === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $(this).data(DATA_KEY$6, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$6;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$6;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$6;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$6;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$4;
      }
    }]);

    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$6] = Tooltip._jQueryInterface;
  $.fn[NAME$6].Constructor = Tooltip;

  $.fn[NAME$6].noConflict = function () {
    $.fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Tooltip._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$7 = 'popover';
  var VERSION$7 = '4.5.0';
  var DATA_KEY$7 = 'bs.popover';
  var EVENT_KEY$7 = "." + DATA_KEY$7;
  var JQUERY_NO_CONFLICT$7 = $.fn[NAME$7];
  var CLASS_PREFIX$1 = 'bs-popover';
  var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

  var Default$5 = _objectSpread2(_objectSpread2({}, Tooltip.Default), {}, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });

  var DefaultType$5 = _objectSpread2(_objectSpread2({}, Tooltip.DefaultType), {}, {
    content: '(string|element|function)'
  });

  var CLASS_NAME_FADE$3 = 'fade';
  var CLASS_NAME_SHOW$5 = 'show';
  var SELECTOR_TITLE = '.popover-header';
  var SELECTOR_CONTENT = '.popover-body';
  var Event$1 = {
    HIDE: "hide" + EVENT_KEY$7,
    HIDDEN: "hidden" + EVENT_KEY$7,
    SHOW: "show" + EVENT_KEY$7,
    SHOWN: "shown" + EVENT_KEY$7,
    INSERTED: "inserted" + EVENT_KEY$7,
    CLICK: "click" + EVENT_KEY$7,
    FOCUSIN: "focusin" + EVENT_KEY$7,
    FOCUSOUT: "focusout" + EVENT_KEY$7,
    MOUSEENTER: "mouseenter" + EVENT_KEY$7,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$7
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Popover = /*#__PURE__*/function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype; // Overrides

    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $(this.getTipElement()); // We use append for html objects to maintain js events

      this.setElementContent($tip.find(SELECTOR_TITLE), this.getTitle());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this.element);
      }

      this.setElementContent($tip.find(SELECTOR_CONTENT), content);
      $tip.removeClass(CLASS_NAME_FADE$3 + " " + CLASS_NAME_SHOW$5);
    } // Private
    ;

    _proto._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    } // Static
    ;

    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$7);

        var _config = _typeof(config) === 'object' ? config : null;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $(this).data(DATA_KEY$7, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        return VERSION$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$7;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$7;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$1;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$7;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$7] = Popover._jQueryInterface;
  $.fn[NAME$7].Constructor = Popover;

  $.fn[NAME$7].noConflict = function () {
    $.fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return Popover._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$8 = 'scrollspy';
  var VERSION$8 = '4.5.0';
  var DATA_KEY$8 = 'bs.scrollspy';
  var EVENT_KEY$8 = "." + DATA_KEY$8;
  var DATA_API_KEY$6 = '.data-api';
  var JQUERY_NO_CONFLICT$8 = $.fn[NAME$8];
  var Default$6 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$6 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var EVENT_ACTIVATE = "activate" + EVENT_KEY$8;
  var EVENT_SCROLL = "scroll" + EVENT_KEY$8;
  var EVENT_LOAD_DATA_API$2 = "load" + EVENT_KEY$8 + DATA_API_KEY$6;
  var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  var CLASS_NAME_ACTIVE$2 = 'active';
  var SELECTOR_DATA_SPY = '[data-spy="scroll"]';
  var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  var SELECTOR_NAV_LINKS = '.nav-link';
  var SELECTOR_NAV_ITEMS = '.nav-item';
  var SELECTOR_LIST_ITEMS = '.list-group-item';
  var SELECTOR_DROPDOWN = '.dropdown';
  var SELECTOR_DROPDOWN_ITEMS = '.dropdown-item';
  var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  var METHOD_OFFSET = 'offset';
  var METHOD_POSITION = 'position';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy = /*#__PURE__*/function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + SELECTOR_NAV_LINKS + "," + (this._config.target + " " + SELECTOR_LIST_ITEMS + ",") + (this._config.target + " " + SELECTOR_DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $(this._scrollElement).on(EVENT_SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // Getters


    var _proto = ScrollSpy.prototype; // Public

    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = [].slice.call(document.querySelectorAll(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = document.querySelector(targetSelector);
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$8);
      $(this._scrollElement).off(EVENT_KEY$8);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2(_objectSpread2({}, Default$6), _typeof(config) === 'object' && config ? config : {});

      if (typeof config.target !== 'string' && Util.isElement(config.target)) {
        var id = $(config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME$8);
          $(config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME$8, config, DefaultType$6);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      for (var i = this._offsets.length; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',').map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      });

      var $link = $([].slice.call(document.querySelectorAll(queries.join(','))));

      if ($link.hasClass(CLASS_NAME_DROPDOWN_ITEM)) {
        $link.closest(SELECTOR_DROPDOWN).find(SELECTOR_DROPDOWN_TOGGLE).addClass(CLASS_NAME_ACTIVE$2);
        $link.addClass(CLASS_NAME_ACTIVE$2);
      } else {
        // Set triggered link as active
        $link.addClass(CLASS_NAME_ACTIVE$2); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_LINKS + ", " + SELECTOR_LIST_ITEMS).addClass(CLASS_NAME_ACTIVE$2); // Handle special case when .nav-link is inside .nav-item

        $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_ITEMS).children(SELECTOR_NAV_LINKS).addClass(CLASS_NAME_ACTIVE$2);
      }

      $(this._scrollElement).trigger(EVENT_ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
        return node.classList.contains(CLASS_NAME_ACTIVE$2);
      }).forEach(function (node) {
        return node.classList.remove(CLASS_NAME_ACTIVE$2);
      });
    } // Static
    ;

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$8);

        var _config = _typeof(config) === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $(this).data(DATA_KEY$8, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$8;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }]);

    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(window).on(EVENT_LOAD_DATA_API$2, function () {
    var scrollSpys = [].slice.call(document.querySelectorAll(SELECTOR_DATA_SPY));
    var scrollSpysLength = scrollSpys.length;

    for (var i = scrollSpysLength; i--;) {
      var $spy = $(scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$8] = ScrollSpy._jQueryInterface;
  $.fn[NAME$8].Constructor = ScrollSpy;

  $.fn[NAME$8].noConflict = function () {
    $.fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return ScrollSpy._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$9 = 'tab';
  var VERSION$9 = '4.5.0';
  var DATA_KEY$9 = 'bs.tab';
  var EVENT_KEY$9 = "." + DATA_KEY$9;
  var DATA_API_KEY$7 = '.data-api';
  var JQUERY_NO_CONFLICT$9 = $.fn[NAME$9];
  var EVENT_HIDE$3 = "hide" + EVENT_KEY$9;
  var EVENT_HIDDEN$3 = "hidden" + EVENT_KEY$9;
  var EVENT_SHOW$3 = "show" + EVENT_KEY$9;
  var EVENT_SHOWN$3 = "shown" + EVENT_KEY$9;
  var EVENT_CLICK_DATA_API$6 = "click" + EVENT_KEY$9 + DATA_API_KEY$7;
  var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
  var CLASS_NAME_ACTIVE$3 = 'active';
  var CLASS_NAME_DISABLED$1 = 'disabled';
  var CLASS_NAME_FADE$4 = 'fade';
  var CLASS_NAME_SHOW$6 = 'show';
  var SELECTOR_DROPDOWN$1 = '.dropdown';
  var SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
  var SELECTOR_ACTIVE$2 = '.active';
  var SELECTOR_ACTIVE_UL = '> li > .active';
  var SELECTOR_DATA_TOGGLE$4 = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]';
  var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  var SELECTOR_DROPDOWN_ACTIVE_CHILD = '> .dropdown-menu .active';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab = /*#__PURE__*/function () {
    function Tab(element) {
      this._element = element;
    } // Getters


    var _proto = Tab.prototype; // Public

    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(CLASS_NAME_ACTIVE$3) || $(this._element).hasClass(CLASS_NAME_DISABLED$1)) {
        return;
      }

      var target;
      var previous;
      var listElement = $(this._element).closest(SELECTOR_NAV_LIST_GROUP$1)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE$2;
        previous = $.makeArray($(listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $.Event(EVENT_HIDE$3, {
        relatedTarget: this._element
      });
      var showEvent = $.Event(EVENT_SHOW$3, {
        relatedTarget: previous
      });

      if (previous) {
        $(previous).trigger(hideEvent);
      }

      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = document.querySelector(selector);
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $.Event(EVENT_HIDDEN$3, {
          relatedTarget: _this._element
        });
        var shownEvent = $.Event(EVENT_SHOWN$3, {
          relatedTarget: previous
        });
        $(previous).trigger(hiddenEvent);
        $(_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$9);
      this._element = null;
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $(container).find(SELECTOR_ACTIVE_UL) : $(container).children(SELECTOR_ACTIVE$2);
      var active = activeElements[0];
      var isTransitioning = callback && active && $(active).hasClass(CLASS_NAME_FADE$4);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        var transitionDuration = Util.getTransitionDurationFromElement(active);
        $(active).removeClass(CLASS_NAME_SHOW$6).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $(active).removeClass(CLASS_NAME_ACTIVE$3);
        var dropdownChild = $(active.parentNode).find(SELECTOR_DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $(dropdownChild).removeClass(CLASS_NAME_ACTIVE$3);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $(element).addClass(CLASS_NAME_ACTIVE$3);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);

      if (element.classList.contains(CLASS_NAME_FADE$4)) {
        element.classList.add(CLASS_NAME_SHOW$6);
      }

      if (element.parentNode && $(element.parentNode).hasClass(CLASS_NAME_DROPDOWN_MENU)) {
        var dropdownElement = $(element).closest(SELECTOR_DROPDOWN$1)[0];

        if (dropdownElement) {
          var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(SELECTOR_DROPDOWN_TOGGLE$1));
          $(dropdownToggleList).addClass(CLASS_NAME_ACTIVE$3);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static
    ;

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$9);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY$9, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$9;
      }
    }]);

    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$4, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($(this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$9] = Tab._jQueryInterface;
  $.fn[NAME$9].Constructor = Tab;

  $.fn[NAME$9].noConflict = function () {
    $.fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return Tab._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$a = 'toast';
  var VERSION$a = '4.5.0';
  var DATA_KEY$a = 'bs.toast';
  var EVENT_KEY$a = "." + DATA_KEY$a;
  var JQUERY_NO_CONFLICT$a = $.fn[NAME$a];
  var EVENT_CLICK_DISMISS$1 = "click.dismiss" + EVENT_KEY$a;
  var EVENT_HIDE$4 = "hide" + EVENT_KEY$a;
  var EVENT_HIDDEN$4 = "hidden" + EVENT_KEY$a;
  var EVENT_SHOW$4 = "show" + EVENT_KEY$a;
  var EVENT_SHOWN$4 = "shown" + EVENT_KEY$a;
  var CLASS_NAME_FADE$5 = 'fade';
  var CLASS_NAME_HIDE = 'hide';
  var CLASS_NAME_SHOW$7 = 'show';
  var CLASS_NAME_SHOWING = 'showing';
  var DefaultType$7 = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default$7 = {
    animation: true,
    autohide: true,
    delay: 500
  };
  var SELECTOR_DATA_DISMISS$1 = '[data-dismiss="toast"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Toast = /*#__PURE__*/function () {
    function Toast(element, config) {
      this._element = element;
      this._config = this._getConfig(config);
      this._timeout = null;

      this._setListeners();
    } // Getters


    var _proto = Toast.prototype; // Public

    _proto.show = function show() {
      var _this = this;

      var showEvent = $.Event(EVENT_SHOW$4);
      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE$5);
      }

      var complete = function complete() {
        _this._element.classList.remove(CLASS_NAME_SHOWING);

        _this._element.classList.add(CLASS_NAME_SHOW$7);

        $(_this._element).trigger(EVENT_SHOWN$4);

        if (_this._config.autohide) {
          _this._timeout = setTimeout(function () {
            _this.hide();
          }, _this._config.delay);
        }
      };

      this._element.classList.remove(CLASS_NAME_HIDE);

      Util.reflow(this._element);

      this._element.classList.add(CLASS_NAME_SHOWING);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto.hide = function hide() {
      if (!this._element.classList.contains(CLASS_NAME_SHOW$7)) {
        return;
      }

      var hideEvent = $.Event(EVENT_HIDE$4);
      $(this._element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      this._close();
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      this._timeout = null;

      if (this._element.classList.contains(CLASS_NAME_SHOW$7)) {
        this._element.classList.remove(CLASS_NAME_SHOW$7);
      }

      $(this._element).off(EVENT_CLICK_DISMISS$1);
      $.removeData(this._element, DATA_KEY$a);
      this._element = null;
      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2(_objectSpread2(_objectSpread2({}, Default$7), $(this._element).data()), _typeof(config) === 'object' && config ? config : {});
      Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this2 = this;

      $(this._element).on(EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, function () {
        return _this2.hide();
      });
    };

    _proto._close = function _close() {
      var _this3 = this;

      var complete = function complete() {
        _this3._element.classList.add(CLASS_NAME_HIDE);

        $(_this3._element).trigger(EVENT_HIDDEN$4);
      };

      this._element.classList.remove(CLASS_NAME_SHOW$7);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    } // Static
    ;

    Toast._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY$a);

        var _config = _typeof(config) === 'object' && config;

        if (!data) {
          data = new Toast(this, _config);
          $element.data(DATA_KEY$a, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$a;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$7;
      }
    }]);

    return Toast;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$a] = Toast._jQueryInterface;
  $.fn[NAME$a].Constructor = Toast;

  $.fn[NAME$a].noConflict = function () {
    $.fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return Toast._jQueryInterface;
  };

  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;
  exports.Util = Util;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];

  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }

  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }

    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;
/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/

var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;
/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */

function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}
/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */


function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  } // NOTE: 1 DOM access here


  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}
/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */


function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }

  return element.parentNode || element.host;
}
/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */


function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;

    case '#document':
      return element.body;
  } // Firefox want us to check `-x` and `-y` variations as well


  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}
/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */


function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */

function isIE(version) {
  if (version === 11) {
    return isIE11;
  }

  if (version === 10) {
    return isIE10;
  }

  return isIE11 || isIE10;
}
/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */


function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null; // NOTE: 1 DOM access here

  var offsetParent = element.offsetParent || null; // Skip hidden elements which don't have an offsetParent

  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  } // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...


  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }

  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}
/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */


function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}
/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */


function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  } // Here we make sure to give as "start" the element that comes first in the DOM


  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1; // Get common ancestor container

  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer; // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  } // one of the nodes is inside shadowDOM, find which one


  var element1root = getRoot(element1);

  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}
/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */


function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}
/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */


function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}
/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */


function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);
  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */


function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}
/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */


function getBoundingClientRect(element) {
  var rect = {}; // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11

  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  }; // subtract scrollbar size from sizes

  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;
  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height; // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons

  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');
    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);
  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth); // In cases where the parent is fixed, we must ignore negative scroll in offset calc

  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }

  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0; // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.

  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);
    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft; // Attach marginTop and marginLeft because in some circumstances we may need them

    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);
  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };
  return getClientRect(offset);
}
/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */


function isFixed(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }

  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }

  var parentNode = getParentNode(element);

  if (!parentNode) {
    return false;
  }

  return isFixed(parentNode);
}
/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */


function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }

  var el = element.parentElement;

  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }

  return el || document.documentElement;
}
/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */


function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false; // NOTE: 1 DOM access here

  var boundaries = {
    top: 0,
    left: 0
  };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference)); // Handle viewport case

  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;

    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));

      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition); // In case of HTML, we need a different computation

    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  } // Add paddings


  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;
  return width * height;
}
/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };
  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });
  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });
  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
  var variation = placement.split('-')[1];
  return computedPlacement + (variation ? '-' + variation : '');
}
/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */


function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}
/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */


function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}
/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */


function getOppositePlacement(placement) {
  var hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */


function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0]; // Get popper node sizes

  var popperRect = getOuterSizes(popper); // Add position, width and height to our offsets object

  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  }; // depending by the popper placement we have to compute its offsets slightly differently

  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';
  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;

  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}
/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */


function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  } // use `filter` to obtain the same behavior of `find`


  return arr.filter(check)[0];
}
/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */


function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  } // use `find` + `indexOf` if `findIndex` isn't supported


  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}
/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */


function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));
  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }

    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation

    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);
      data = fn(data, modifier);
    }
  });
  return data;
}
/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */


function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  }; // compute reference element offsets

  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed); // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value

  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding); // store the computed placement inside `originalPlacement`

  data.originalPlacement = data.placement;
  data.positionFixed = this.options.positionFixed; // compute the popper offsets

  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute'; // run the modifiers

  data = runModifiers(this.modifiers, data); // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback

  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}
/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */


function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}
/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */


function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;

    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }

  return null;
}
/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */


function destroy() {
  this.state.isDestroyed = true; // touch DOM only if `applyStyle` modifier is enabled

  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners(); // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it

  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }

  return this;
}
/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */


function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, {
    passive: true
  });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }

  scrollParents.push(target);
}
/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */


function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, {
    passive: true
  }); // Scroll event listener on scroll parents

  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;
  return state;
}
/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */


function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}
/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */


function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound); // Remove scroll event listener on scroll parents

  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  }); // Reset state

  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}
/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */


function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}
/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */


function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}
/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */


function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = ''; // add unit if the value is numeric and is one of the following

    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }

    element.style[prop] = styles[prop] + unit;
  });
}
/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */


function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];

    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */


function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles); // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element

  setAttributes(data.instance.popper, data.attributes); // if arrowElement is defined and arrowStyles has some properties

  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}
/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */


function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed); // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value

  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
  popper.setAttribute('x-placement', placement); // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations

  setStyles(popper, {
    position: options.positionFixed ? 'fixed' : 'absolute'
  });
  return options;
}
/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */


function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);
  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;
  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */

function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper; // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;

  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }

  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent); // Styles

  var styles = {
    position: popper.position
  };
  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right'; // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed

  var prefixedProperty = getSupportedPropertyName('transform'); // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.

  var left = void 0,
      top = void 0;

  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }

  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }

  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  } // Attributes


  var attributes = {
    'x-placement': data.placement
  }; // Update `data` attributes, styles and arrowStyles

  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);
  return data;
}
/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */


function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });
  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';

    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }

  return isRequired;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function arrow(data, options) {
  var _data$offsets$arrow; // arrow depends on keepTogether in order to work


  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element; // if arrowElement is a string, suppose it's a CSS selector

  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement); // if arrowElement is not found, don't run the modifier

    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isVertical = ['left', 'right'].indexOf(placement) !== -1;
  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len]; //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //
  // top/left side

  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  } // bottom/right side


  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }

  data.offsets.popper = getClientRect(data.offsets.popper); // compute center of the popper

  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2; // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available

  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide; // prevent arrowElement from being placed not contiguously to its popper

  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
  return data;
}
/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */


function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }

  return variation;
}
/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */


var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']; // Get rid of `auto` `auto-start` and `auto-end`

var validPlacements = placements.slice(3);
/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */

function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */

function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';
  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;

    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;

    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;

    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);
    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference; // using floor because the reference offsets may contain decimals we are not going to consider here

    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);
    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom; // flip the variation if required

    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1; // flips variation if reference element overflows boundaries

    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom); // flips variation if popper content overflows boundaries

    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);
    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : ''); // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future

      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }

  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}
/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */


function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2]; // If it's not a number it's an operator, I guess

  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;

    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;

      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;

    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }

    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}
/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */


function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0]; // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one

  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1; // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)

  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  }); // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space

  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  } // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.


  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments]; // Convert the values with units to absolute pixels to allow our computations

  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, []) // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  }); // Loop trough the offsets arrays and execute the operations

  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */


function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var basePlacement = placement.split('-')[0];
  var offsets = void 0;

  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper); // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken

  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  } // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself


  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification

  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];
  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed); // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed

  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;
  options.boundaries = boundaries;
  var order = options.priority;
  var popper = data.offsets.popper;
  var check = {
    primary: function primary(placement) {
      var value = popper[placement];

      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }

      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];

      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }

      return defineProperty({}, mainSide, value);
    }
  };
  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });
  data.offsets.popper = popper;
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1]; // if shift shiftvariation is specified, run the modifier

  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;
    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';
    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };
    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;
  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;
  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);
  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);
  return data;
}
/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */


var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: offset,

    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: preventOverflow,

    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],

    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,

    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: arrow,

    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: flip,

    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',

    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,

    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',

    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,

    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,

    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,

    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: computeStyle,

    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,

    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',

    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: applyStyle,

    /** @prop {Function} */
    onLoad: applyStyleOnLoad,

    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};
/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */

var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};
/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */
// Utils
// Methods

var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    }; // make update() debounced, so that it only runs at most once-per-tick


    this.update = debounce(this.update.bind(this)); // with {} we create a new object with the options inside it

    this.options = _extends({}, Popper.Defaults, options); // init state

    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    }; // get reference and popper elements (allow jQuery wrappers)

    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper; // Deep merge modifiers options

    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    }); // Refactoring modifiers' list (Object => Array)

    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    }) // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    }); // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!

    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    }); // fire the first update to position the popper in the right place

    this.update();
    var eventsEnabled = this.options.eventsEnabled;

    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  } // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }
    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */

    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();
/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;
/* harmony default export */ __webpack_exports__["default"] = (Popper);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {//
});

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./src/js/main.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Domurga\Documents\Digital Campus\Edumag\edumag\Edumag\src\js\main.js */"./src/js/main.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy91dGlsLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvYWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL2NvbGxhcHNlLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3Rvb2xzL3Nhbml0aXplci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vanMvc3JjL3Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2pzL3NyYy9wb3BvdmVyLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvc2Nyb2xsc3B5LmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvdGFiLmpzIiwid2VicGFjazovLy8uLi8uLi9qcy9zcmMvdG9hc3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9pc0Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9kZWJvdW5jZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRQYXJlbnROb2RlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0U2Nyb2xsUGFyZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0UmVmZXJlbmNlTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2lzSUUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRPZmZzZXRQYXJlbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9pc09mZnNldENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldFJvb3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9maW5kQ29tbW9uT2Zmc2V0UGFyZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0U2Nyb2xsLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvaW5jbHVkZVNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldEJvcmRlcnNTaXplLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0V2luZG93U2l6ZXMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRDbGllbnRSZWN0LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvaXNGaXhlZC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRCb3VuZGFyaWVzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9nZXRSZWZlcmVuY2VPZmZzZXRzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0T3V0ZXJTaXplcy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2dldE9wcG9zaXRlUGxhY2VtZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0UG9wcGVyT2Zmc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2ZpbmQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9maW5kSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9ydW5Nb2RpZmllcnMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tZXRob2RzL3VwZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3V0aWxzL2lzTW9kaWZpZXJFbmFibGVkLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbWV0aG9kcy9kZXN0cm95LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0V2luZG93LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvc2V0dXBFdmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21ldGhvZHMvZW5hYmxlRXZlbnRMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9yZW1vdmVFdmVudExpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21ldGhvZHMvZGlzYWJsZUV2ZW50TGlzdGVuZXJzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvaXNOdW1lcmljLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvc2V0U3R5bGVzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvc2V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21vZGlmaWVycy9hcHBseVN0eWxlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0Um91bmRlZE9mZnNldHMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tb2RpZmllcnMvY29tcHV0ZVN0eWxlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvaXNNb2RpZmllclJlcXVpcmVkLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbW9kaWZpZXJzL2Fycm93LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdXRpbHMvZ2V0T3Bwb3NpdGVWYXJpYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tZXRob2RzL3BsYWNlbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy91dGlscy9jbG9ja3dpc2UuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tb2RpZmllcnMvZmxpcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21vZGlmaWVycy9rZWVwVG9nZXRoZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tb2RpZmllcnMvb2Zmc2V0LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbW9kaWZpZXJzL3ByZXZlbnRPdmVyZmxvdy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21vZGlmaWVycy9zaGlmdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21vZGlmaWVycy9oaWRlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbW9kaWZpZXJzL2lubmVyLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbW9kaWZpZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbWV0aG9kcy9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiXSwibmFtZXMiOlsiVFJBTlNJVElPTl9FTkQiLCJNQVhfVUlEIiwiTUlMTElTRUNPTkRTX01VTFRJUExJRVIiLCJvYmoiLCJiaW5kVHlwZSIsImRlbGVnYXRlVHlwZSIsImhhbmRsZSIsIiQiLCJldmVudCIsImNhbGxlZCIsIlV0aWwiLCJzZXRUaW1lb3V0IiwiZ2V0U3BlY2lhbFRyYW5zaXRpb25FbmRFdmVudCIsImdldFVJRCIsInByZWZpeCIsIk1hdGgiLCJkb2N1bWVudCIsImdldFNlbGVjdG9yRnJvbUVsZW1lbnQiLCJzZWxlY3RvciIsImVsZW1lbnQiLCJocmVmQXR0ciIsImdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwidHJhbnNpdGlvbkRlbGF5IiwiZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24iLCJwYXJzZUZsb2F0IiwiZmxvYXRUcmFuc2l0aW9uRGVsYXkiLCJyZWZsb3ciLCJ0cmlnZ2VyVHJhbnNpdGlvbkVuZCIsInN1cHBvcnRzVHJhbnNpdGlvbkVuZCIsIkJvb2xlYW4iLCJpc0VsZW1lbnQiLCJ0eXBlQ2hlY2tDb25maWciLCJPYmplY3QiLCJleHBlY3RlZFR5cGVzIiwiY29uZmlnVHlwZXMiLCJ2YWx1ZSIsImNvbmZpZyIsInZhbHVlVHlwZSIsInRvVHlwZSIsImNvbXBvbmVudE5hbWUiLCJmaW5kU2hhZG93Um9vdCIsInJvb3QiLCJqUXVlcnlEZXRlY3Rpb24iLCJ2ZXJzaW9uIiwibWluTWFqb3IiLCJsdE1ham9yIiwibWluTWlub3IiLCJtaW5QYXRjaCIsIm1heE1ham9yIiwic2V0VHJhbnNpdGlvbkVuZFN1cHBvcnQiLCJOQU1FIiwiVkVSU0lPTiIsIkRBVEFfS0VZIiwiRVZFTlRfS0VZIiwiREFUQV9BUElfS0VZIiwiSlFVRVJZX05PX0NPTkZMSUNUIiwiU0VMRUNUT1JfRElTTUlTUyIsIkVWRU5UX0NMT1NFIiwiRVZFTlRfQ0xPU0VEIiwiRVZFTlRfQ0xJQ0tfREFUQV9BUEkiLCJDTEFTU19OQU1FX0FMRVJUIiwiQ0xBU1NfTkFNRV9GQURFIiwiQ0xBU1NfTkFNRV9TSE9XIiwiQWxlcnQiLCJjbG9zZSIsInJvb3RFbGVtZW50IiwiY3VzdG9tRXZlbnQiLCJkaXNwb3NlIiwiX2dldFJvb3RFbGVtZW50IiwicGFyZW50IiwiX3RyaWdnZXJDbG9zZUV2ZW50IiwiY2xvc2VFdmVudCIsIl9yZW1vdmVFbGVtZW50IiwiX2Rlc3Ryb3lFbGVtZW50IiwiX2pRdWVyeUludGVyZmFjZSIsIiRlbGVtZW50IiwiZGF0YSIsIl9oYW5kbGVEaXNtaXNzIiwiYWxlcnRJbnN0YW5jZSIsIkNMQVNTX05BTUVfQUNUSVZFIiwiQ0xBU1NfTkFNRV9CVVRUT04iLCJDTEFTU19OQU1FX0ZPQ1VTIiwiU0VMRUNUT1JfREFUQV9UT0dHTEVfQ0FSUk9UIiwiU0VMRUNUT1JfREFUQV9UT0dHTEVTIiwiU0VMRUNUT1JfREFUQV9UT0dHTEUiLCJTRUxFQ1RPUl9EQVRBX1RPR0dMRVNfQlVUVE9OUyIsIlNFTEVDVE9SX0lOUFVUIiwiU0VMRUNUT1JfQUNUSVZFIiwiU0VMRUNUT1JfQlVUVE9OIiwiRVZFTlRfRk9DVVNfQkxVUl9EQVRBX0FQSSIsIkVWRU5UX0xPQURfREFUQV9BUEkiLCJCdXR0b24iLCJ0b2dnbGUiLCJ0cmlnZ2VyQ2hhbmdlRXZlbnQiLCJhZGRBcmlhUHJlc3NlZCIsImlucHV0IiwiYWN0aXZlRWxlbWVudCIsImJ1dHRvbiIsImluaXRpYWxCdXR0b24iLCJpbnB1dEJ0biIsImJ1dHRvbnMiLCJpIiwibGVuIiwiQVJST1dfTEVGVF9LRVlDT0RFIiwiQVJST1dfUklHSFRfS0VZQ09ERSIsIlRPVUNIRVZFTlRfQ09NUEFUX1dBSVQiLCJTV0lQRV9USFJFU0hPTEQiLCJEZWZhdWx0IiwiaW50ZXJ2YWwiLCJrZXlib2FyZCIsInNsaWRlIiwicGF1c2UiLCJ3cmFwIiwidG91Y2giLCJEZWZhdWx0VHlwZSIsIkRJUkVDVElPTl9ORVhUIiwiRElSRUNUSU9OX1BSRVYiLCJESVJFQ1RJT05fTEVGVCIsIkRJUkVDVElPTl9SSUdIVCIsIkVWRU5UX1NMSURFIiwiRVZFTlRfU0xJRCIsIkVWRU5UX0tFWURPV04iLCJFVkVOVF9NT1VTRUVOVEVSIiwiRVZFTlRfTU9VU0VMRUFWRSIsIkVWRU5UX1RPVUNIU1RBUlQiLCJFVkVOVF9UT1VDSE1PVkUiLCJFVkVOVF9UT1VDSEVORCIsIkVWRU5UX1BPSU5URVJET1dOIiwiRVZFTlRfUE9JTlRFUlVQIiwiRVZFTlRfRFJBR19TVEFSVCIsIkNMQVNTX05BTUVfQ0FST1VTRUwiLCJDTEFTU19OQU1FX1NMSURFIiwiQ0xBU1NfTkFNRV9SSUdIVCIsIkNMQVNTX05BTUVfTEVGVCIsIkNMQVNTX05BTUVfTkVYVCIsIkNMQVNTX05BTUVfUFJFViIsIkNMQVNTX05BTUVfUE9JTlRFUl9FVkVOVCIsIlNFTEVDVE9SX0FDVElWRV9JVEVNIiwiU0VMRUNUT1JfSVRFTSIsIlNFTEVDVE9SX0lURU1fSU1HIiwiU0VMRUNUT1JfTkVYVF9QUkVWIiwiU0VMRUNUT1JfSU5ESUNBVE9SUyIsIlNFTEVDVE9SX0RBVEFfU0xJREUiLCJTRUxFQ1RPUl9EQVRBX1JJREUiLCJQb2ludGVyVHlwZSIsIlRPVUNIIiwiUEVOIiwiQ2Fyb3VzZWwiLCJuYXZpZ2F0b3IiLCJ3aW5kb3ciLCJuZXh0IiwibmV4dFdoZW5WaXNpYmxlIiwicHJldiIsImNsZWFySW50ZXJ2YWwiLCJjeWNsZSIsInNldEludGVydmFsIiwidG8iLCJhY3RpdmVJbmRleCIsImluZGV4IiwiZGlyZWN0aW9uIiwiX2dldENvbmZpZyIsIl9oYW5kbGVTd2lwZSIsImFic0RlbHRheCIsIl9hZGRFdmVudExpc3RlbmVycyIsIl9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzIiwic3RhcnQiLCJtb3ZlIiwiZW5kIiwiY2xlYXJUaW1lb3V0IiwiZSIsIl9rZXlkb3duIiwiX2dldEl0ZW1JbmRleCIsIl9nZXRJdGVtQnlEaXJlY3Rpb24iLCJpc05leHREaXJlY3Rpb24iLCJpc1ByZXZEaXJlY3Rpb24iLCJsYXN0SXRlbUluZGV4IiwiaXNHb2luZ1RvV3JhcCIsImRlbHRhIiwiaXRlbUluZGV4IiwiX3RyaWdnZXJTbGlkZUV2ZW50IiwidGFyZ2V0SW5kZXgiLCJmcm9tSW5kZXgiLCJzbGlkZUV2ZW50IiwicmVsYXRlZFRhcmdldCIsImZyb20iLCJfc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudCIsImluZGljYXRvcnMiLCJuZXh0SW5kaWNhdG9yIiwiX3NsaWRlIiwiYWN0aXZlRWxlbWVudEluZGV4IiwibmV4dEVsZW1lbnQiLCJuZXh0RWxlbWVudEluZGV4IiwiaXNDeWNsaW5nIiwiZGlyZWN0aW9uYWxDbGFzc05hbWUiLCJvcmRlckNsYXNzTmFtZSIsImV2ZW50RGlyZWN0aW9uTmFtZSIsInNsaWRFdmVudCIsIm5leHRFbGVtZW50SW50ZXJ2YWwiLCJwYXJzZUludCIsIl9jb25maWciLCJhY3Rpb24iLCJfZGF0YUFwaUNsaWNrSGFuZGxlciIsInRhcmdldCIsInNsaWRlSW5kZXgiLCJjYXJvdXNlbHMiLCIkY2Fyb3VzZWwiLCJFVkVOVF9TSE9XIiwiRVZFTlRfU0hPV04iLCJFVkVOVF9ISURFIiwiRVZFTlRfSElEREVOIiwiQ0xBU1NfTkFNRV9DT0xMQVBTRSIsIkNMQVNTX05BTUVfQ09MTEFQU0lORyIsIkNMQVNTX05BTUVfQ09MTEFQU0VEIiwiRElNRU5TSU9OX1dJRFRIIiwiRElNRU5TSU9OX0hFSUdIVCIsIlNFTEVDVE9SX0FDVElWRVMiLCJDb2xsYXBzZSIsInRvZ2dsZUxpc3QiLCJlbGVtIiwiZmlsdGVyRWxlbWVudCIsImZvdW5kRWxlbSIsInNob3ciLCJhY3RpdmVzIiwiYWN0aXZlc0RhdGEiLCJzdGFydEV2ZW50IiwiZGltZW5zaW9uIiwiY29tcGxldGUiLCJjYXBpdGFsaXplZERpbWVuc2lvbiIsInNjcm9sbFNpemUiLCJoaWRlIiwidHJpZ2dlckFycmF5TGVuZ3RoIiwidHJpZ2dlciIsIiRlbGVtIiwic2V0VHJhbnNpdGlvbmluZyIsIl9nZXREaW1lbnNpb24iLCJoYXNXaWR0aCIsIl9nZXRQYXJlbnQiLCJjaGlsZHJlbiIsIl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MiLCJpc09wZW4iLCJ0cmlnZ2VyQXJyYXkiLCJfZ2V0VGFyZ2V0RnJvbUVsZW1lbnQiLCIkdGhpcyIsIiR0cmlnZ2VyIiwic2VsZWN0b3JzIiwiJHRhcmdldCIsIkVTQ0FQRV9LRVlDT0RFIiwiU1BBQ0VfS0VZQ09ERSIsIlRBQl9LRVlDT0RFIiwiQVJST1dfVVBfS0VZQ09ERSIsIkFSUk9XX0RPV05fS0VZQ09ERSIsIlJJR0hUX01PVVNFX0JVVFRPTl9XSElDSCIsIlJFR0VYUF9LRVlET1dOIiwiRVZFTlRfQ0xJQ0siLCJFVkVOVF9LRVlET1dOX0RBVEFfQVBJIiwiRVZFTlRfS0VZVVBfREFUQV9BUEkiLCJDTEFTU19OQU1FX0RJU0FCTEVEIiwiQ0xBU1NfTkFNRV9EUk9QVVAiLCJDTEFTU19OQU1FX0RST1BSSUdIVCIsIkNMQVNTX05BTUVfRFJPUExFRlQiLCJDTEFTU19OQU1FX01FTlVSSUdIVCIsIkNMQVNTX05BTUVfUE9TSVRJT05fU1RBVElDIiwiU0VMRUNUT1JfRk9STV9DSElMRCIsIlNFTEVDVE9SX01FTlUiLCJTRUxFQ1RPUl9OQVZCQVJfTkFWIiwiU0VMRUNUT1JfVklTSUJMRV9JVEVNUyIsIlBMQUNFTUVOVF9UT1AiLCJQTEFDRU1FTlRfVE9QRU5EIiwiUExBQ0VNRU5UX0JPVFRPTSIsIlBMQUNFTUVOVF9CT1RUT01FTkQiLCJQTEFDRU1FTlRfUklHSFQiLCJQTEFDRU1FTlRfTEVGVCIsIm9mZnNldCIsImZsaXAiLCJib3VuZGFyeSIsInJlZmVyZW5jZSIsImRpc3BsYXkiLCJwb3BwZXJDb25maWciLCJEcm9wZG93biIsImlzQWN0aXZlIiwidXNlUG9wcGVyIiwiX2VsZW1lbnQiLCJzaG93RXZlbnQiLCJyZWZlcmVuY2VFbGVtZW50IiwiaGlkZUV2ZW50IiwidXBkYXRlIiwiX2dldE1lbnVFbGVtZW50IiwiX2dldFBsYWNlbWVudCIsIiRwYXJlbnREcm9wZG93biIsInBsYWNlbWVudCIsIl9kZXRlY3ROYXZiYXIiLCJfZ2V0T2Zmc2V0IiwiX2dldFBvcHBlckNvbmZpZyIsIm1vZGlmaWVycyIsImVuYWJsZWQiLCJwcmV2ZW50T3ZlcmZsb3ciLCJib3VuZGFyaWVzRWxlbWVudCIsIl9jbGVhck1lbnVzIiwidG9nZ2xlcyIsImNvbnRleHQiLCJkcm9wZG93bk1lbnUiLCJfZ2V0UGFyZW50RnJvbUVsZW1lbnQiLCJfZGF0YUFwaUtleWRvd25IYW5kbGVyIiwiaXRlbXMiLCJiYWNrZHJvcCIsImZvY3VzIiwiRVZFTlRfSElERV9QUkVWRU5URUQiLCJFVkVOVF9GT0NVU0lOIiwiRVZFTlRfUkVTSVpFIiwiRVZFTlRfQ0xJQ0tfRElTTUlTUyIsIkVWRU5UX0tFWURPV05fRElTTUlTUyIsIkVWRU5UX01PVVNFVVBfRElTTUlTUyIsIkVWRU5UX01PVVNFRE9XTl9ESVNNSVNTIiwiQ0xBU1NfTkFNRV9TQ1JPTExBQkxFIiwiQ0xBU1NfTkFNRV9TQ1JPTExCQVJfTUVBU1VSRVIiLCJDTEFTU19OQU1FX0JBQ0tEUk9QIiwiQ0xBU1NfTkFNRV9PUEVOIiwiQ0xBU1NfTkFNRV9TVEFUSUMiLCJTRUxFQ1RPUl9ESUFMT0ciLCJTRUxFQ1RPUl9NT0RBTF9CT0RZIiwiU0VMRUNUT1JfREFUQV9ESVNNSVNTIiwiU0VMRUNUT1JfRklYRURfQ09OVEVOVCIsIlNFTEVDVE9SX1NUSUNLWV9DT05URU5UIiwiTW9kYWwiLCJ0cmFuc2l0aW9uIiwiaGFuZGxlVXBkYXRlIiwiX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24iLCJoaWRlRXZlbnRQcmV2ZW50ZWQiLCJtb2RhbFRyYW5zaXRpb25EdXJhdGlvbiIsIl9zaG93RWxlbWVudCIsIm1vZGFsQm9keSIsIk5vZGUiLCJzaG93bkV2ZW50IiwidHJhbnNpdGlvbkNvbXBsZXRlIiwiX2VuZm9yY2VGb2N1cyIsIl9zZXRFc2NhcGVFdmVudCIsIl9zZXRSZXNpemVFdmVudCIsIl9oaWRlTW9kYWwiLCJfcmVtb3ZlQmFja2Ryb3AiLCJfc2hvd0JhY2tkcm9wIiwiYW5pbWF0ZSIsImNhbGxiYWNrIiwiYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24iLCJjYWxsYmFja1JlbW92ZSIsIl9hZGp1c3REaWFsb2ciLCJpc01vZGFsT3ZlcmZsb3dpbmciLCJfcmVzZXRBZGp1c3RtZW50cyIsIl9jaGVja1Njcm9sbGJhciIsInJlY3QiLCJfc2V0U2Nyb2xsYmFyIiwiZml4ZWRDb250ZW50Iiwic3RpY2t5Q29udGVudCIsImFjdHVhbFBhZGRpbmciLCJjYWxjdWxhdGVkUGFkZGluZyIsImFjdHVhbE1hcmdpbiIsImNhbGN1bGF0ZWRNYXJnaW4iLCJfcmVzZXRTY3JvbGxiYXIiLCJwYWRkaW5nIiwiZWxlbWVudHMiLCJtYXJnaW4iLCJfZ2V0U2Nyb2xsYmFyV2lkdGgiLCJzY3JvbGxEaXYiLCJzY3JvbGxiYXJXaWR0aCIsInVyaUF0dHJzIiwiQVJJQV9BVFRSSUJVVEVfUEFUVEVSTiIsIkRlZmF1bHRXaGl0ZWxpc3QiLCJhIiwiYXJlYSIsImIiLCJiciIsImNvbCIsImNvZGUiLCJkaXYiLCJlbSIsImhyIiwiaDEiLCJoMiIsImgzIiwiaDQiLCJoNSIsImg2IiwiaW1nIiwibGkiLCJvbCIsInAiLCJwcmUiLCJzIiwic21hbGwiLCJzcGFuIiwic3ViIiwic3VwIiwic3Ryb25nIiwidSIsInVsIiwiU0FGRV9VUkxfUEFUVEVSTiIsIkRBVEFfVVJMX1BBVFRFUk4iLCJhdHRyTmFtZSIsImF0dHIiLCJhbGxvd2VkQXR0cmlidXRlTGlzdCIsInJlZ0V4cCIsImF0dHJSZWdleCIsInVuc2FmZUh0bWwiLCJzYW5pdGl6ZUZuIiwiZG9tUGFyc2VyIiwiY3JlYXRlZERvY3VtZW50Iiwid2hpdGVsaXN0S2V5cyIsImVsIiwiZWxOYW1lIiwiYXR0cmlidXRlTGlzdCIsIndoaXRlbGlzdGVkQXR0cmlidXRlcyIsIndoaXRlTGlzdCIsImFsbG93ZWRBdHRyaWJ1dGUiLCJDTEFTU19QUkVGSVgiLCJCU0NMU19QUkVGSVhfUkVHRVgiLCJESVNBTExPV0VEX0FUVFJJQlVURVMiLCJhbmltYXRpb24iLCJ0ZW1wbGF0ZSIsInRpdGxlIiwiZGVsYXkiLCJodG1sIiwiY29udGFpbmVyIiwiZmFsbGJhY2tQbGFjZW1lbnQiLCJzYW5pdGl6ZSIsIkF0dGFjaG1lbnRNYXAiLCJBVVRPIiwiVE9QIiwiUklHSFQiLCJCT1RUT00iLCJMRUZUIiwiSE9WRVJfU1RBVEVfU0hPVyIsIkhPVkVSX1NUQVRFX09VVCIsIkV2ZW50IiwiSElERSIsIkhJRERFTiIsIlNIT1ciLCJTSE9XTiIsIklOU0VSVEVEIiwiQ0xJQ0siLCJGT0NVU0lOIiwiRk9DVVNPVVQiLCJNT1VTRUVOVEVSIiwiTU9VU0VMRUFWRSIsIlNFTEVDVE9SX1RPT0xUSVBfSU5ORVIiLCJTRUxFQ1RPUl9BUlJPVyIsIlRSSUdHRVJfSE9WRVIiLCJUUklHR0VSX0ZPQ1VTIiwiVFJJR0dFUl9DTElDSyIsIlRSSUdHRVJfTUFOVUFMIiwiVG9vbHRpcCIsImVuYWJsZSIsImRpc2FibGUiLCJ0b2dnbGVFbmFibGVkIiwiZGF0YUtleSIsInNoYWRvd1Jvb3QiLCJpc0luVGhlRG9tIiwidGlwIiwidGlwSWQiLCJhdHRhY2htZW50IiwicHJldkhvdmVyU3RhdGUiLCJpc1dpdGhDb250ZW50IiwiYWRkQXR0YWNobWVudENsYXNzIiwiZ2V0VGlwRWxlbWVudCIsInNldENvbnRlbnQiLCJzZXRFbGVtZW50Q29udGVudCIsImNvbnRlbnQiLCJzYW5pdGl6ZUh0bWwiLCJnZXRUaXRsZSIsImRlZmF1bHRCc0NvbmZpZyIsImJlaGF2aW9yIiwiYXJyb3ciLCJvbkNyZWF0ZSIsIm9uVXBkYXRlIiwiX2dldENvbnRhaW5lciIsIl9nZXRBdHRhY2htZW50IiwiX3NldExpc3RlbmVycyIsInRyaWdnZXJzIiwiZXZlbnRJbiIsImV2ZW50T3V0IiwiX2ZpeFRpdGxlIiwidGl0bGVUeXBlIiwiX2VudGVyIiwiX2xlYXZlIiwiX2lzV2l0aEFjdGl2ZVRyaWdnZXIiLCJkYXRhQXR0cmlidXRlcyIsIl9nZXREZWxlZ2F0ZUNvbmZpZyIsIl9jbGVhblRpcENsYXNzIiwiJHRpcCIsInRhYkNsYXNzIiwiX2hhbmRsZVBvcHBlclBsYWNlbWVudENoYW5nZSIsInBvcHBlckRhdGEiLCJfZml4VHJhbnNpdGlvbiIsImluaXRDb25maWdBbmltYXRpb24iLCJTRUxFQ1RPUl9USVRMRSIsIlNFTEVDVE9SX0NPTlRFTlQiLCJQb3BvdmVyIiwiX2dldENvbnRlbnQiLCJtZXRob2QiLCJFVkVOVF9BQ1RJVkFURSIsIkVWRU5UX1NDUk9MTCIsIkNMQVNTX05BTUVfRFJPUERPV05fSVRFTSIsIlNFTEVDVE9SX0RBVEFfU1BZIiwiU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVAiLCJTRUxFQ1RPUl9OQVZfTElOS1MiLCJTRUxFQ1RPUl9OQVZfSVRFTVMiLCJTRUxFQ1RPUl9MSVNUX0lURU1TIiwiU0VMRUNUT1JfRFJPUERPV04iLCJTRUxFQ1RPUl9EUk9QRE9XTl9JVEVNUyIsIlNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSIsIk1FVEhPRF9PRkZTRVQiLCJNRVRIT0RfUE9TSVRJT04iLCJTY3JvbGxTcHkiLCJyZWZyZXNoIiwiYXV0b01ldGhvZCIsIm9mZnNldE1ldGhvZCIsIm9mZnNldEJhc2UiLCJ0YXJnZXRzIiwidGFyZ2V0U2VsZWN0b3IiLCJ0YXJnZXRCQ1IiLCJpdGVtIiwiaWQiLCJfZ2V0U2Nyb2xsVG9wIiwiX2dldFNjcm9sbEhlaWdodCIsIl9nZXRPZmZzZXRIZWlnaHQiLCJfcHJvY2VzcyIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsIm1heFNjcm9sbCIsImlzQWN0aXZlVGFyZ2V0IiwiX2FjdGl2YXRlIiwicXVlcmllcyIsIiRsaW5rIiwiX2NsZWFyIiwibm9kZSIsInNjcm9sbFNweXMiLCJzY3JvbGxTcHlzTGVuZ3RoIiwiJHNweSIsIkNMQVNTX05BTUVfRFJPUERPV05fTUVOVSIsIlNFTEVDVE9SX0FDVElWRV9VTCIsIlNFTEVDVE9SX0RST1BET1dOX0FDVElWRV9DSElMRCIsIlRhYiIsImxpc3RFbGVtZW50IiwiaXRlbVNlbGVjdG9yIiwicHJldmlvdXMiLCJoaWRkZW5FdmVudCIsImFjdGl2ZUVsZW1lbnRzIiwiYWN0aXZlIiwiaXNUcmFuc2l0aW9uaW5nIiwiX3RyYW5zaXRpb25Db21wbGV0ZSIsImRyb3Bkb3duQ2hpbGQiLCJkcm9wZG93bkVsZW1lbnQiLCJkcm9wZG93blRvZ2dsZUxpc3QiLCJDTEFTU19OQU1FX0hJREUiLCJDTEFTU19OQU1FX1NIT1dJTkciLCJhdXRvaGlkZSIsIlRvYXN0IiwiX2Nsb3NlIiwidGltZW91dER1cmF0aW9uIiwibG9uZ2VyVGltZW91dEJyb3dzZXJzIiwiaXNCcm93c2VyIiwic2NoZWR1bGVkIiwic3VwcG9ydHNNaWNyb1Rhc2tzIiwiZ2V0VHlwZSIsImZ1bmN0aW9uVG9DaGVjayIsImNzcyIsInByb3BlcnR5IiwiZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5Iiwib3ZlcmZsb3ciLCJvdmVyZmxvd1giLCJvdmVyZmxvd1kiLCJnZXRTY3JvbGxQYXJlbnQiLCJnZXRQYXJlbnROb2RlIiwiaXNJRTExIiwiaXNJRTEwIiwibm9PZmZzZXRQYXJlbnQiLCJpc0lFIiwib2Zmc2V0UGFyZW50Iiwibm9kZU5hbWUiLCJnZXRPZmZzZXRQYXJlbnQiLCJnZXRSb290IiwiZWxlbWVudDEiLCJlbGVtZW50MiIsIm9yZGVyIiwicmFuZ2UiLCJjb21tb25BbmNlc3RvckNvbnRhaW5lciIsImlzT2Zmc2V0Q29udGFpbmVyIiwiZWxlbWVudDFyb290IiwiZmluZENvbW1vbk9mZnNldFBhcmVudCIsInNpZGUiLCJ1cHBlclNpZGUiLCJzY3JvbGxpbmdFbGVtZW50Iiwic3VidHJhY3QiLCJnZXRTY3JvbGwiLCJzY3JvbGxMZWZ0IiwibW9kaWZpZXIiLCJzaWRlQSIsImF4aXMiLCJzaWRlQiIsInN0eWxlcyIsImJvZHkiLCJjb21wdXRlZFN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFNpemUiLCJvZmZzZXRzIiwiaGVpZ2h0IiwicmVzdWx0IiwidG9wIiwic2l6ZXMiLCJnZXRXaW5kb3dTaXplcyIsIndpZHRoIiwiaG9yaXpTY3JvbGxiYXIiLCJ2ZXJ0U2Nyb2xsYmFyIiwiZ2V0Qm9yZGVyc1NpemUiLCJnZXRDbGllbnRSZWN0IiwiZml4ZWRQb3NpdGlvbiIsInJ1bklzSUUiLCJpc0hUTUwiLCJjaGlsZHJlblJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYXJlbnRSZWN0Iiwic2Nyb2xsUGFyZW50IiwiYm9yZGVyVG9wV2lkdGgiLCJib3JkZXJMZWZ0V2lkdGgiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwiaW5jbHVkZVNjcm9sbCIsImV4Y2x1ZGVTY3JvbGwiLCJyZWxhdGl2ZU9mZnNldCIsImdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZSIsInBhcmVudE5vZGUiLCJpc0ZpeGVkIiwiYm91bmRhcmllcyIsImxlZnQiLCJnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50IiwiZ2V0UmVmZXJlbmNlTm9kZSIsImdldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZSIsImJvdW5kYXJpZXNOb2RlIiwicG9wcGVyIiwiaXNQYWRkaW5nTnVtYmVyIiwiZ2V0Qm91bmRhcmllcyIsInJlY3RzIiwicmVmUmVjdCIsImJvdHRvbSIsInNvcnRlZEFyZWFzIiwiZ2V0QXJlYSIsImZpbHRlcmVkQXJlYXMiLCJjb21wdXRlZFBsYWNlbWVudCIsInZhcmlhdGlvbiIsImNvbW1vbk9mZnNldFBhcmVudCIsIngiLCJ5IiwiaGFzaCIsInJpZ2h0IiwicG9wcGVyUmVjdCIsImdldE91dGVyU2l6ZXMiLCJwb3BwZXJPZmZzZXRzIiwiaXNIb3JpeiIsIm1haW5TaWRlIiwic2Vjb25kYXJ5U2lkZSIsIm1lYXN1cmVtZW50Iiwic2Vjb25kYXJ5TWVhc3VyZW1lbnQiLCJyZWZlcmVuY2VPZmZzZXRzIiwiZ2V0T3Bwb3NpdGVQbGFjZW1lbnQiLCJBcnJheSIsImFyciIsImN1ciIsIm1hdGNoIiwibW9kaWZpZXJzVG9SdW4iLCJlbmRzIiwiZmluZEluZGV4IiwiZm4iLCJpc0Z1bmN0aW9uIiwiZ2V0UmVmZXJlbmNlT2Zmc2V0cyIsImNvbXB1dGVBdXRvUGxhY2VtZW50IiwiZ2V0UG9wcGVyT2Zmc2V0cyIsInJ1bk1vZGlmaWVycyIsIm5hbWUiLCJwcmVmaXhlcyIsInVwcGVyUHJvcCIsInRvQ2hlY2siLCJpc01vZGlmaWVyRW5hYmxlZCIsImdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSIsIm93bmVyRG9jdW1lbnQiLCJpc0JvZHkiLCJwYXNzaXZlIiwic3RhdGUiLCJzY3JvbGxFbGVtZW50Iiwic2V0dXBFdmVudExpc3RlbmVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwibiIsImlzTmFOIiwiaXNGaW5pdGUiLCJ1bml0IiwiaXNOdW1lcmljIiwiYXR0cmlidXRlcyIsIm9wdGlvbnMiLCJwb3NpdGlvbiIsInJvdW5kIiwiZmxvb3IiLCJub1JvdW5kIiwicmVmZXJlbmNlV2lkdGgiLCJwb3BwZXJXaWR0aCIsImlzVmVydGljYWwiLCJpc1ZhcmlhdGlvbiIsInNhbWVXaWR0aFBhcml0eSIsImJvdGhPZGRXaWR0aCIsImhvcml6b250YWxUb0ludGVnZXIiLCJ2ZXJ0aWNhbFRvSW50ZWdlciIsImlzRmlyZWZveCIsImxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvbiIsImdwdUFjY2VsZXJhdGlvbiIsIm9mZnNldFBhcmVudFJlY3QiLCJnZXRSb3VuZGVkT2Zmc2V0cyIsInByZWZpeGVkUHJvcGVydHkiLCJpbnZlcnRUb3AiLCJpbnZlcnRMZWZ0IiwicmVxdWVzdGluZyIsImlzUmVxdWlyZWQiLCJyZXF1ZXN0ZWQiLCJpc01vZGlmaWVyUmVxdWlyZWQiLCJhcnJvd0VsZW1lbnQiLCJzaWRlQ2FwaXRhbGl6ZWQiLCJhbHRTaWRlIiwib3BTaWRlIiwiYXJyb3dFbGVtZW50U2l6ZSIsImNlbnRlciIsInBvcHBlck1hcmdpblNpZGUiLCJwb3BwZXJCb3JkZXJTaWRlIiwic2lkZVZhbHVlIiwidmFsaWRQbGFjZW1lbnRzIiwicGxhY2VtZW50cyIsImNvdW50ZXIiLCJCRUhBVklPUlMiLCJwbGFjZW1lbnRPcHBvc2l0ZSIsImZsaXBPcmRlciIsImNsb2Nrd2lzZSIsInJlZk9mZnNldHMiLCJvdmVybGFwc1JlZiIsIm92ZXJmbG93c0xlZnQiLCJvdmVyZmxvd3NSaWdodCIsIm92ZXJmbG93c1RvcCIsIm92ZXJmbG93c0JvdHRvbSIsIm92ZXJmbG93c0JvdW5kYXJpZXMiLCJmbGlwcGVkVmFyaWF0aW9uQnlSZWYiLCJmbGlwcGVkVmFyaWF0aW9uQnlDb250ZW50IiwiZmxpcHBlZFZhcmlhdGlvbiIsImdldE9wcG9zaXRlVmFyaWF0aW9uIiwic3BsaXQiLCJzdHIiLCJzaXplIiwidXNlSGVpZ2h0IiwiZnJhZ21lbnRzIiwiZnJhZyIsImRpdmlkZXIiLCJzcGxpdFJlZ2V4Iiwib3BzIiwibWVyZ2VXaXRoUHJldmlvdXMiLCJ0b1ZhbHVlIiwib3AiLCJpbmRleDIiLCJiYXNlUGxhY2VtZW50IiwicGFyc2VPZmZzZXQiLCJ0cmFuc2Zvcm1Qcm9wIiwicG9wcGVyU3R5bGVzIiwidHJhbnNmb3JtIiwiY2hlY2siLCJzaGlmdHZhcmlhdGlvbiIsInNoaWZ0T2Zmc2V0cyIsImJvdW5kIiwic3VidHJhY3RMZW5ndGgiLCJzaGlmdCIsImtlZXBUb2dldGhlciIsImlubmVyIiwidW5kZWZpbmVkIiwiUG9wcGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZGVib3VuY2UiLCJtb2RpZmllck9wdGlvbnMiLCJldmVudHNFbmFibGVkIiwiZGVzdHJveSIsImVuYWJsZUV2ZW50TGlzdGVuZXJzIiwiZGlzYWJsZUV2ZW50TGlzdGVuZXJzIiwiVXRpbHMiLCJQb3BwZXJVdGlscyIsIkRlZmF1bHRzIiwiZyIsIkZ1bmN0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlYWR5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QUFQLEdBQWlCSCxDQUFqQixDOzs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTF3Qiw2Q0FBQyxDQUFDUyxRQUFELENBQUQsQ0FBWXF3QixLQUFaLENBQWtCLFlBQVksQ0FFOUI7QUFFQyxDQUpELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkEsd0IiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNS4wKTogdXRpbC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUHJpdmF0ZSBUcmFuc2l0aW9uRW5kIEhlbHBlcnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IFRSQU5TSVRJT05fRU5EID0gJ3RyYW5zaXRpb25lbmQnXG5jb25zdCBNQVhfVUlEID0gMTAwMDAwMFxuY29uc3QgTUlMTElTRUNPTkRTX01VTFRJUExJRVIgPSAxMDAwXG5cbi8vIFNob3V0b3V0IEFuZ3VzQ3JvbGwgKGh0dHBzOi8vZ29vLmdsL3B4d1FHcClcbmZ1bmN0aW9uIHRvVHlwZShvYmopIHtcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBgJHtvYmp9YFxuICB9XG5cbiAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwob2JqKS5tYXRjaCgvXFxzKFthLXpdKykvaSlbMV0udG9Mb3dlckNhc2UoKVxufVxuXG5mdW5jdGlvbiBnZXRTcGVjaWFsVHJhbnNpdGlvbkVuZEV2ZW50KCkge1xuICByZXR1cm4ge1xuICAgIGJpbmRUeXBlOiBUUkFOU0lUSU9OX0VORCxcbiAgICBkZWxlZ2F0ZVR5cGU6IFRSQU5TSVRJT05fRU5ELFxuICAgIGhhbmRsZShldmVudCkge1xuICAgICAgaWYgKCQoZXZlbnQudGFyZ2V0KS5pcyh0aGlzKSkge1xuICAgICAgICByZXR1cm4gZXZlbnQuaGFuZGxlT2JqLmhhbmRsZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2l0aW9uRW5kRW11bGF0b3IoZHVyYXRpb24pIHtcbiAgbGV0IGNhbGxlZCA9IGZhbHNlXG5cbiAgJCh0aGlzKS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgKCkgPT4ge1xuICAgIGNhbGxlZCA9IHRydWVcbiAgfSlcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgVXRpbC50cmlnZ2VyVHJhbnNpdGlvbkVuZCh0aGlzKVxuICAgIH1cbiAgfSwgZHVyYXRpb24pXG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuZnVuY3Rpb24gc2V0VHJhbnNpdGlvbkVuZFN1cHBvcnQoKSB7XG4gICQuZm4uZW11bGF0ZVRyYW5zaXRpb25FbmQgPSB0cmFuc2l0aW9uRW5kRW11bGF0b3JcbiAgJC5ldmVudC5zcGVjaWFsW1V0aWwuVFJBTlNJVElPTl9FTkRdID0gZ2V0U3BlY2lhbFRyYW5zaXRpb25FbmRFdmVudCgpXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFB1YmxpYyBVdGlsIEFwaVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBVdGlsID0ge1xuICBUUkFOU0lUSU9OX0VORDogJ2JzVHJhbnNpdGlvbkVuZCcsXG5cbiAgZ2V0VUlEKHByZWZpeCkge1xuICAgIGRvIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gICAgICBwcmVmaXggKz0gfn4oTWF0aC5yYW5kb20oKSAqIE1BWF9VSUQpIC8vIFwifn5cIiBhY3RzIGxpa2UgYSBmYXN0ZXIgTWF0aC5mbG9vcigpIGhlcmVcbiAgICB9IHdoaWxlIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmVmaXgpKVxuICAgIHJldHVybiBwcmVmaXhcbiAgfSxcblxuICBnZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICBsZXQgc2VsZWN0b3IgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKVxuXG4gICAgaWYgKCFzZWxlY3RvciB8fCBzZWxlY3RvciA9PT0gJyMnKSB7XG4gICAgICBjb25zdCBocmVmQXR0ciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgIHNlbGVjdG9yID0gaHJlZkF0dHIgJiYgaHJlZkF0dHIgIT09ICcjJyA/IGhyZWZBdHRyLnRyaW0oKSA6ICcnXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogbnVsbFxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH0sXG5cbiAgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG5cbiAgICAvLyBHZXQgdHJhbnNpdGlvbi1kdXJhdGlvbiBvZiB0aGUgZWxlbWVudFxuICAgIGxldCB0cmFuc2l0aW9uRHVyYXRpb24gPSAkKGVsZW1lbnQpLmNzcygndHJhbnNpdGlvbi1kdXJhdGlvbicpXG4gICAgbGV0IHRyYW5zaXRpb25EZWxheSA9ICQoZWxlbWVudCkuY3NzKCd0cmFuc2l0aW9uLWRlbGF5JylcblxuICAgIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uID0gcGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgY29uc3QgZmxvYXRUcmFuc2l0aW9uRGVsYXkgPSBwYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSlcblxuICAgIC8vIFJldHVybiAwIGlmIGVsZW1lbnQgb3IgdHJhbnNpdGlvbiBkdXJhdGlvbiBpcyBub3QgZm91bmRcbiAgICBpZiAoIWZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uICYmICFmbG9hdFRyYW5zaXRpb25EZWxheSkge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG5cbiAgICAvLyBJZiBtdWx0aXBsZSBkdXJhdGlvbnMgYXJlIGRlZmluZWQsIHRha2UgdGhlIGZpcnN0XG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uLnNwbGl0KCcsJylbMF1cbiAgICB0cmFuc2l0aW9uRGVsYXkgPSB0cmFuc2l0aW9uRGVsYXkuc3BsaXQoJywnKVswXVxuXG4gICAgcmV0dXJuIChwYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbikgKyBwYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSkpICogTUlMTElTRUNPTkRTX01VTFRJUExJRVJcbiAgfSxcblxuICByZWZsb3coZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50Lm9mZnNldEhlaWdodFxuICB9LFxuXG4gIHRyaWdnZXJUcmFuc2l0aW9uRW5kKGVsZW1lbnQpIHtcbiAgICAkKGVsZW1lbnQpLnRyaWdnZXIoVFJBTlNJVElPTl9FTkQpXG4gIH0sXG5cbiAgLy8gVE9ETzogUmVtb3ZlIGluIHY1XG4gIHN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpIHtcbiAgICByZXR1cm4gQm9vbGVhbihUUkFOU0lUSU9OX0VORClcbiAgfSxcblxuICBpc0VsZW1lbnQob2JqKSB7XG4gICAgcmV0dXJuIChvYmpbMF0gfHwgb2JqKS5ub2RlVHlwZVxuICB9LFxuXG4gIHR5cGVDaGVja0NvbmZpZyhjb21wb25lbnROYW1lLCBjb25maWcsIGNvbmZpZ1R5cGVzKSB7XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBjb25maWdUeXBlcykge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjb25maWdUeXBlcywgcHJvcGVydHkpKSB7XG4gICAgICAgIGNvbnN0IGV4cGVjdGVkVHlwZXMgPSBjb25maWdUeXBlc1twcm9wZXJ0eV1cbiAgICAgICAgY29uc3QgdmFsdWUgICAgICAgICA9IGNvbmZpZ1twcm9wZXJ0eV1cbiAgICAgICAgY29uc3QgdmFsdWVUeXBlICAgICA9IHZhbHVlICYmIFV0aWwuaXNFbGVtZW50KHZhbHVlKVxuICAgICAgICAgID8gJ2VsZW1lbnQnIDogdG9UeXBlKHZhbHVlKVxuXG4gICAgICAgIGlmICghbmV3IFJlZ0V4cChleHBlY3RlZFR5cGVzKS50ZXN0KHZhbHVlVHlwZSkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgJHtjb21wb25lbnROYW1lLnRvVXBwZXJDYXNlKCl9OiBgICtcbiAgICAgICAgICAgIGBPcHRpb24gXCIke3Byb3BlcnR5fVwiIHByb3ZpZGVkIHR5cGUgXCIke3ZhbHVlVHlwZX1cIiBgICtcbiAgICAgICAgICAgIGBidXQgZXhwZWN0ZWQgdHlwZSBcIiR7ZXhwZWN0ZWRUeXBlc31cIi5gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGZpbmRTaGFkb3dSb290KGVsZW1lbnQpIHtcbiAgICBpZiAoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hdHRhY2hTaGFkb3cpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgLy8gQ2FuIGZpbmQgdGhlIHNoYWRvdyByb290IG90aGVyd2lzZSBpdCdsbCByZXR1cm4gdGhlIGRvY3VtZW50XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50LmdldFJvb3ROb2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCByb290ID0gZWxlbWVudC5nZXRSb290Tm9kZSgpXG4gICAgICByZXR1cm4gcm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgPyByb290IDogbnVsbFxuICAgIH1cblxuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU2hhZG93Um9vdCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICB9XG5cbiAgICAvLyB3aGVuIHdlIGRvbid0IGZpbmQgYSBzaGFkb3cgcm9vdFxuICAgIGlmICghZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBVdGlsLmZpbmRTaGFkb3dSb290KGVsZW1lbnQucGFyZW50Tm9kZSlcbiAgfSxcblxuICBqUXVlcnlEZXRlY3Rpb24oKSB7XG4gICAgaWYgKHR5cGVvZiAkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyBKYXZhU2NyaXB0IHJlcXVpcmVzIGpRdWVyeS4galF1ZXJ5IG11c3QgYmUgaW5jbHVkZWQgYmVmb3JlIEJvb3RzdHJhcFxcJ3MgSmF2YVNjcmlwdC4nKVxuICAgIH1cblxuICAgIGNvbnN0IHZlcnNpb24gPSAkLmZuLmpxdWVyeS5zcGxpdCgnICcpWzBdLnNwbGl0KCcuJylcbiAgICBjb25zdCBtaW5NYWpvciA9IDFcbiAgICBjb25zdCBsdE1ham9yID0gMlxuICAgIGNvbnN0IG1pbk1pbm9yID0gOVxuICAgIGNvbnN0IG1pblBhdGNoID0gMVxuICAgIGNvbnN0IG1heE1ham9yID0gNFxuXG4gICAgaWYgKHZlcnNpb25bMF0gPCBsdE1ham9yICYmIHZlcnNpb25bMV0gPCBtaW5NaW5vciB8fCB2ZXJzaW9uWzBdID09PSBtaW5NYWpvciAmJiB2ZXJzaW9uWzFdID09PSBtaW5NaW5vciAmJiB2ZXJzaW9uWzJdIDwgbWluUGF0Y2ggfHwgdmVyc2lvblswXSA+PSBtYXhNYWpvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdCb290c3RyYXBcXCdzIEphdmFTY3JpcHQgcmVxdWlyZXMgYXQgbGVhc3QgalF1ZXJ5IHYxLjkuMSBidXQgbGVzcyB0aGFuIHY0LjAuMCcpXG4gICAgfVxuICB9XG59XG5cblV0aWwualF1ZXJ5RGV0ZWN0aW9uKClcbnNldFRyYW5zaXRpb25FbmRTdXBwb3J0KClcblxuZXhwb3J0IGRlZmF1bHQgVXRpbFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC41LjApOiBhbGVydC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FICAgICAgICAgICAgICAgID0gJ2FsZXJ0J1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgICA9ICc0LjUuMCdcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICAgPSAnYnMuYWxlcnQnXG5jb25zdCBFVkVOVF9LRVkgICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSAgICAgICAgPSAnLmRhdGEtYXBpJ1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUICA9ICQuZm5bTkFNRV1cblxuY29uc3QgU0VMRUNUT1JfRElTTUlTUyA9ICdbZGF0YS1kaXNtaXNzPVwiYWxlcnRcIl0nXG5cbmNvbnN0IEVWRU5UX0NMT1NFICAgICAgICAgID0gYGNsb3NlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xPU0VEICAgICAgICAgPSBgY2xvc2VkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfQUxFUlQgPSAnYWxlcnQnXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgID0gJ3Nob3cnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBBbGVydCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudFxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgLy8gUHVibGljXG5cbiAgY2xvc2UoZWxlbWVudCkge1xuICAgIGxldCByb290RWxlbWVudCA9IHRoaXMuX2VsZW1lbnRcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgcm9vdEVsZW1lbnQgPSB0aGlzLl9nZXRSb290RWxlbWVudChlbGVtZW50KVxuICAgIH1cblxuICAgIGNvbnN0IGN1c3RvbUV2ZW50ID0gdGhpcy5fdHJpZ2dlckNsb3NlRXZlbnQocm9vdEVsZW1lbnQpXG5cbiAgICBpZiAoY3VzdG9tRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX3JlbW92ZUVsZW1lbnQocm9vdEVsZW1lbnQpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRSb290RWxlbWVudChlbGVtZW50KSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudClcbiAgICBsZXQgcGFyZW50ICAgICA9IGZhbHNlXG5cbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgfVxuXG4gICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgIHBhcmVudCA9ICQoZWxlbWVudCkuY2xvc2VzdChgLiR7Q0xBU1NfTkFNRV9BTEVSVH1gKVswXVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRcbiAgfVxuXG4gIF90cmlnZ2VyQ2xvc2VFdmVudChlbGVtZW50KSB7XG4gICAgY29uc3QgY2xvc2VFdmVudCA9ICQuRXZlbnQoRVZFTlRfQ0xPU0UpXG5cbiAgICAkKGVsZW1lbnQpLnRyaWdnZXIoY2xvc2VFdmVudClcbiAgICByZXR1cm4gY2xvc2VFdmVudFxuICB9XG5cbiAgX3JlbW92ZUVsZW1lbnQoZWxlbWVudCkge1xuICAgICQoZWxlbWVudCkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgaWYgKCEkKGVsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfRkFERSkpIHtcbiAgICAgIHRoaXMuX2Rlc3Ryb3lFbGVtZW50KGVsZW1lbnQpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KGVsZW1lbnQpXG5cbiAgICAkKGVsZW1lbnQpXG4gICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIChldmVudCkgPT4gdGhpcy5fZGVzdHJveUVsZW1lbnQoZWxlbWVudCwgZXZlbnQpKVxuICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgfVxuXG4gIF9kZXN0cm95RWxlbWVudChlbGVtZW50KSB7XG4gICAgJChlbGVtZW50KVxuICAgICAgLmRldGFjaCgpXG4gICAgICAudHJpZ2dlcihFVkVOVF9DTE9TRUQpXG4gICAgICAucmVtb3ZlKClcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgJGVsZW1lbnQgPSAkKHRoaXMpXG4gICAgICBsZXQgZGF0YSAgICAgICA9ICRlbGVtZW50LmRhdGEoREFUQV9LRVkpXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IEFsZXJ0KHRoaXMpXG4gICAgICAgICRlbGVtZW50LmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcgPT09ICdjbG9zZScpIHtcbiAgICAgICAgZGF0YVtjb25maWddKHRoaXMpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBfaGFuZGxlRGlzbWlzcyhhbGVydEluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIH1cblxuICAgICAgYWxlcnRJbnN0YW5jZS5jbG9zZSh0aGlzKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQoZG9jdW1lbnQpLm9uKFxuICBFVkVOVF9DTElDS19EQVRBX0FQSSxcbiAgU0VMRUNUT1JfRElTTUlTUyxcbiAgQWxlcnQuX2hhbmRsZURpc21pc3MobmV3IEFsZXJ0KCkpXG4pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gICAgICAgICAgICAgPSBBbGVydC5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQWxlcnRcbiQuZm5bTkFNRV0ubm9Db25mbGljdCAgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIEFsZXJ0Ll9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWxlcnRcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNS4wKTogYnV0dG9uLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgICAgICAgICAgICAgICAgPSAnYnV0dG9uJ1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgICA9ICc0LjUuMCdcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICAgPSAnYnMuYnV0dG9uJ1xuY29uc3QgRVZFTlRfS0VZICAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgICAgICAgID0gJy5kYXRhLWFwaSdcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCAgPSAkLmZuW05BTUVdXG5cbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcbmNvbnN0IENMQVNTX05BTUVfQlVUVE9OID0gJ2J0bidcbmNvbnN0IENMQVNTX05BTUVfRk9DVVMgID0gJ2ZvY3VzJ1xuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRV9DQVJST1QgICA9ICdbZGF0YS10b2dnbGVePVwiYnV0dG9uXCJdJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEVTICAgICAgICAgPSAnW2RhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiXSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFICAgICAgICAgID0gJ1tkYXRhLXRvZ2dsZT1cImJ1dHRvblwiXSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFU19CVVRUT05TID0gJ1tkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIl0gLmJ0bidcbmNvbnN0IFNFTEVDVE9SX0lOUFVUICAgICAgICAgICAgICAgID0gJ2lucHV0Om5vdChbdHlwZT1cImhpZGRlblwiXSknXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkUgICAgICAgICAgICAgICA9ICcuYWN0aXZlJ1xuY29uc3QgU0VMRUNUT1JfQlVUVE9OICAgICAgICAgICAgICAgPSAnLmJ0bidcblxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgICAgICA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0ZPQ1VTX0JMVVJfREFUQV9BUEkgPSBgZm9jdXMke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX0gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGBibHVyJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSAgICAgICA9IGBsb2FkJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgQnV0dG9uIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUoKSB7XG4gICAgbGV0IHRyaWdnZXJDaGFuZ2VFdmVudCA9IHRydWVcbiAgICBsZXQgYWRkQXJpYVByZXNzZWQgPSB0cnVlXG4gICAgY29uc3Qgcm9vdEVsZW1lbnQgPSAkKHRoaXMuX2VsZW1lbnQpLmNsb3Nlc3QoXG4gICAgICBTRUxFQ1RPUl9EQVRBX1RPR0dMRVNcbiAgICApWzBdXG5cbiAgICBpZiAocm9vdEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SX0lOUFVUKVxuXG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgaWYgKGlucHV0LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICBpZiAoaW5wdXQuY2hlY2tlZCAmJlxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9BQ1RJVkUpKSB7XG4gICAgICAgICAgICB0cmlnZ2VyQ2hhbmdlRXZlbnQgPSBmYWxzZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVFbGVtZW50ID0gcm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcihTRUxFQ1RPUl9BQ1RJVkUpXG5cbiAgICAgICAgICAgIGlmIChhY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICQoYWN0aXZlRWxlbWVudCkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRyaWdnZXJDaGFuZ2VFdmVudCkge1xuICAgICAgICAgIC8vIGlmIGl0J3Mgbm90IGEgcmFkaW8gYnV0dG9uIG9yIGNoZWNrYm94IGRvbid0IGFkZCBhIHBvaW50bGVzcy9pbnZhbGlkIGNoZWNrZWQgcHJvcGVydHkgdG8gdGhlIGlucHV0XG4gICAgICAgICAgaWYgKGlucHV0LnR5cGUgPT09ICdjaGVja2JveCcgfHwgaW5wdXQudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgICAgaW5wdXQuY2hlY2tlZCA9ICF0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0FDVElWRSlcbiAgICAgICAgICB9XG4gICAgICAgICAgJChpbnB1dCkudHJpZ2dlcignY2hhbmdlJylcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0LmZvY3VzKClcbiAgICAgICAgYWRkQXJpYVByZXNzZWQgPSBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKHRoaXMuX2VsZW1lbnQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpIHx8IHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSkge1xuICAgICAgaWYgKGFkZEFyaWFQcmVzc2VkKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLFxuICAgICAgICAgICF0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0FDVElWRSkpXG4gICAgICB9XG5cbiAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlRXZlbnQpIHtcbiAgICAgICAgJCh0aGlzLl9lbGVtZW50KS50b2dnbGVDbGFzcyhDTEFTU19OQU1FX0FDVElWRSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgQnV0dG9uKHRoaXMpXG4gICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZyA9PT0gJ3RvZ2dsZScpIHtcbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJChkb2N1bWVudClcbiAgLm9uKEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRV9DQVJST1QsIChldmVudCkgPT4ge1xuICAgIGxldCBidXR0b24gPSBldmVudC50YXJnZXRcbiAgICBjb25zdCBpbml0aWFsQnV0dG9uID0gYnV0dG9uXG5cbiAgICBpZiAoISQoYnV0dG9uKS5oYXNDbGFzcyhDTEFTU19OQU1FX0JVVFRPTikpIHtcbiAgICAgIGJ1dHRvbiA9ICQoYnV0dG9uKS5jbG9zZXN0KFNFTEVDVE9SX0JVVFRPTilbMF1cbiAgICB9XG5cbiAgICBpZiAoIWJ1dHRvbiB8fCBidXR0b24uaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpIHx8IGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgLy8gd29yayBhcm91bmQgRmlyZWZveCBidWcgIzE1NDA5OTVcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5wdXRCdG4gPSBidXR0b24ucXVlcnlTZWxlY3RvcihTRUxFQ1RPUl9JTlBVVClcblxuICAgICAgaWYgKGlucHV0QnRuICYmIChpbnB1dEJ0bi5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgfHwgaW5wdXRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpIC8vIHdvcmsgYXJvdW5kIEZpcmVmb3ggYnVnICMxNTQwOTk1XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoaW5pdGlhbEJ1dHRvbi50YWdOYW1lID09PSAnTEFCRUwnICYmIGlucHV0QnRuICYmIGlucHV0QnRuLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKSAvLyB3b3JrIGFyb3VuZCBldmVudCBzZW50IHRvIGxhYmVsIGFuZCBpbnB1dFxuICAgICAgfVxuICAgICAgQnV0dG9uLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKGJ1dHRvbiksICd0b2dnbGUnKVxuICAgIH1cbiAgfSlcbiAgLm9uKEVWRU5UX0ZPQ1VTX0JMVVJfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFX0NBUlJPVCwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gJChldmVudC50YXJnZXQpLmNsb3Nlc3QoU0VMRUNUT1JfQlVUVE9OKVswXVxuICAgICQoYnV0dG9uKS50b2dnbGVDbGFzcyhDTEFTU19OQU1FX0ZPQ1VTLCAvXmZvY3VzKGluKT8kLy50ZXN0KGV2ZW50LnR5cGUpKVxuICB9KVxuXG4kKHdpbmRvdykub24oRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICAvLyBlbnN1cmUgY29ycmVjdCBhY3RpdmUgY2xhc3MgaXMgc2V0IHRvIG1hdGNoIHRoZSBjb250cm9scycgYWN0dWFsIHZhbHVlcy9zdGF0ZXNcblxuICAvLyBmaW5kIGFsbCBjaGVja2JveGVzL3JlYWRpbyBidXR0b25zIGluc2lkZSBkYXRhLXRvZ2dsZSBncm91cHNcbiAgbGV0IGJ1dHRvbnMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfREFUQV9UT0dHTEVTX0JVVFRPTlMpKVxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gYnV0dG9ucy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGJ1dHRvbnNbaV1cbiAgICBjb25zdCBpbnB1dCA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SX0lOUFVUKVxuICAgIGlmIChpbnB1dC5jaGVja2VkIHx8IGlucHV0Lmhhc0F0dHJpYnV0ZSgnY2hlY2tlZCcpKSB7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcbiAgICB9IGVsc2Uge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgfVxuICB9XG5cbiAgLy8gZmluZCBhbGwgYnV0dG9uIHRvZ2dsZXNcbiAgYnV0dG9ucyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUl9EQVRBX1RPR0dMRSkpXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBidXR0b25zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgYnV0dG9uID0gYnV0dG9uc1tpXVxuICAgIGlmIChidXR0b24uZ2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcbiAgICB9IGVsc2Uge1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgfVxuICB9XG59KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdID0gQnV0dG9uLl9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBCdXR0b25cbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gQnV0dG9uLl9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjUuMCk6IGNhcm91c2VsLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgICAgICAgICAgICAgICAgICAgPSAnY2Fyb3VzZWwnXG5jb25zdCBWRVJTSU9OICAgICAgICAgICAgICAgID0gJzQuNS4wJ1xuY29uc3QgREFUQV9LRVkgICAgICAgICAgICAgICA9ICdicy5jYXJvdXNlbCdcbmNvbnN0IEVWRU5UX0tFWSAgICAgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZICAgICAgICAgICA9ICcuZGF0YS1hcGknXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgICAgID0gJC5mbltOQU1FXVxuY29uc3QgQVJST1dfTEVGVF9LRVlDT0RFICAgICA9IDM3IC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIGxlZnQgYXJyb3cga2V5XG5jb25zdCBBUlJPV19SSUdIVF9LRVlDT0RFICAgID0gMzkgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgcmlnaHQgYXJyb3cga2V5XG5jb25zdCBUT1VDSEVWRU5UX0NPTVBBVF9XQUlUID0gNTAwIC8vIFRpbWUgZm9yIG1vdXNlIGNvbXBhdCBldmVudHMgdG8gZmlyZSBhZnRlciB0b3VjaFxuY29uc3QgU1dJUEVfVEhSRVNIT0xEICAgICAgICA9IDQwXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGludGVydmFsIDogNTAwMCxcbiAga2V5Ym9hcmQgOiB0cnVlLFxuICBzbGlkZSAgICA6IGZhbHNlLFxuICBwYXVzZSAgICA6ICdob3ZlcicsXG4gIHdyYXAgICAgIDogdHJ1ZSxcbiAgdG91Y2ggICAgOiB0cnVlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBpbnRlcnZhbCA6ICcobnVtYmVyfGJvb2xlYW4pJyxcbiAga2V5Ym9hcmQgOiAnYm9vbGVhbicsXG4gIHNsaWRlICAgIDogJyhib29sZWFufHN0cmluZyknLFxuICBwYXVzZSAgICA6ICcoc3RyaW5nfGJvb2xlYW4pJyxcbiAgd3JhcCAgICAgOiAnYm9vbGVhbicsXG4gIHRvdWNoICAgIDogJ2Jvb2xlYW4nXG59XG5cbmNvbnN0IERJUkVDVElPTl9ORVhUICAgICA9ICduZXh0J1xuY29uc3QgRElSRUNUSU9OX1BSRVYgICAgID0gJ3ByZXYnXG5jb25zdCBESVJFQ1RJT05fTEVGVCAgICAgPSAnbGVmdCdcbmNvbnN0IERJUkVDVElPTl9SSUdIVCAgICA9ICdyaWdodCdcblxuY29uc3QgRVZFTlRfU0xJREUgICAgICAgICAgPSBgc2xpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TTElEICAgICAgICAgICA9IGBzbGlkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTiAgICAgICAgPSBga2V5ZG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFRU5URVIgICAgID0gYG1vdXNlZW50ZXIke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9NT1VTRUxFQVZFICAgICA9IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfVE9VQ0hTVEFSVCAgICAgPSBgdG91Y2hzdGFydCR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1RPVUNITU9WRSAgICAgID0gYHRvdWNobW92ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1RPVUNIRU5EICAgICAgID0gYHRvdWNoZW5kJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUE9JTlRFUkRPV04gICAgPSBgcG9pbnRlcmRvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9QT0lOVEVSVVAgICAgICA9IGBwb2ludGVydXAke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9EUkFHX1NUQVJUICAgICA9IGBkcmFnc3RhcnQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJICA9IGBsb2FkJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfQ0FST1VTRUwgICAgICA9ICdjYXJvdXNlbCdcbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFICAgICAgICA9ICdhY3RpdmUnXG5jb25zdCBDTEFTU19OQU1FX1NMSURFICAgICAgICAgPSAnc2xpZGUnXG5jb25zdCBDTEFTU19OQU1FX1JJR0hUICAgICAgICAgPSAnY2Fyb3VzZWwtaXRlbS1yaWdodCdcbmNvbnN0IENMQVNTX05BTUVfTEVGVCAgICAgICAgICA9ICdjYXJvdXNlbC1pdGVtLWxlZnQnXG5jb25zdCBDTEFTU19OQU1FX05FWFQgICAgICAgICAgPSAnY2Fyb3VzZWwtaXRlbS1uZXh0J1xuY29uc3QgQ0xBU1NfTkFNRV9QUkVWICAgICAgICAgID0gJ2Nhcm91c2VsLWl0ZW0tcHJldidcbmNvbnN0IENMQVNTX05BTUVfUE9JTlRFUl9FVkVOVCA9ICdwb2ludGVyLWV2ZW50J1xuXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkUgICAgICA9ICcuYWN0aXZlJ1xuY29uc3QgU0VMRUNUT1JfQUNUSVZFX0lURU0gPSAnLmFjdGl2ZS5jYXJvdXNlbC1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfSVRFTSAgICAgICAgPSAnLmNhcm91c2VsLWl0ZW0nXG5jb25zdCBTRUxFQ1RPUl9JVEVNX0lNRyAgICA9ICcuY2Fyb3VzZWwtaXRlbSBpbWcnXG5jb25zdCBTRUxFQ1RPUl9ORVhUX1BSRVYgICA9ICcuY2Fyb3VzZWwtaXRlbS1uZXh0LCAuY2Fyb3VzZWwtaXRlbS1wcmV2J1xuY29uc3QgU0VMRUNUT1JfSU5ESUNBVE9SUyAgPSAnLmNhcm91c2VsLWluZGljYXRvcnMnXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1NMSURFICA9ICdbZGF0YS1zbGlkZV0sIFtkYXRhLXNsaWRlLXRvXSdcbmNvbnN0IFNFTEVDVE9SX0RBVEFfUklERSAgID0gJ1tkYXRhLXJpZGU9XCJjYXJvdXNlbFwiXSdcblxuY29uc3QgUG9pbnRlclR5cGUgPSB7XG4gIFRPVUNIIDogJ3RvdWNoJyxcbiAgUEVOICAgOiAncGVuJ1xufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbmNsYXNzIENhcm91c2VsIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdGhpcy5faXRlbXMgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9pbnRlcnZhbCAgICAgID0gbnVsbFxuICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnQgPSBudWxsXG4gICAgdGhpcy5faXNQYXVzZWQgICAgICA9IGZhbHNlXG4gICAgdGhpcy5faXNTbGlkaW5nICAgICA9IGZhbHNlXG4gICAgdGhpcy50b3VjaFRpbWVvdXQgICA9IG51bGxcbiAgICB0aGlzLnRvdWNoU3RhcnRYICAgID0gMFxuICAgIHRoaXMudG91Y2hEZWx0YVggICAgPSAwXG5cbiAgICB0aGlzLl9jb25maWcgICAgICAgICAgICA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fZWxlbWVudCAgICAgICAgICAgPSBlbGVtZW50XG4gICAgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JfSU5ESUNBVE9SUylcbiAgICB0aGlzLl90b3VjaFN1cHBvcnRlZCAgICA9ICdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fCBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAwXG4gICAgdGhpcy5fcG9pbnRlckV2ZW50ICAgICAgPSBCb29sZWFuKHdpbmRvdy5Qb2ludGVyRXZlbnQgfHwgd2luZG93Lk1TUG9pbnRlckV2ZW50KVxuXG4gICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBuZXh0KCkge1xuICAgIGlmICghdGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICB0aGlzLl9zbGlkZShESVJFQ1RJT05fTkVYVClcbiAgICB9XG4gIH1cblxuICBuZXh0V2hlblZpc2libGUoKSB7XG4gICAgLy8gRG9uJ3QgY2FsbCBuZXh0IHdoZW4gdGhlIHBhZ2UgaXNuJ3QgdmlzaWJsZVxuICAgIC8vIG9yIHRoZSBjYXJvdXNlbCBvciBpdHMgcGFyZW50IGlzbid0IHZpc2libGVcbiAgICBpZiAoIWRvY3VtZW50LmhpZGRlbiAmJlxuICAgICAgKCQodGhpcy5fZWxlbWVudCkuaXMoJzp2aXNpYmxlJykgJiYgJCh0aGlzLl9lbGVtZW50KS5jc3MoJ3Zpc2liaWxpdHknKSAhPT0gJ2hpZGRlbicpKSB7XG4gICAgICB0aGlzLm5leHQoKVxuICAgIH1cbiAgfVxuXG4gIHByZXYoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIHRoaXMuX3NsaWRlKERJUkVDVElPTl9QUkVWKVxuICAgIH1cbiAgfVxuXG4gIHBhdXNlKGV2ZW50KSB7XG4gICAgaWYgKCFldmVudCkge1xuICAgICAgdGhpcy5faXNQYXVzZWQgPSB0cnVlXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihTRUxFQ1RPUl9ORVhUX1BSRVYpKSB7XG4gICAgICBVdGlsLnRyaWdnZXJUcmFuc2l0aW9uRW5kKHRoaXMuX2VsZW1lbnQpXG4gICAgICB0aGlzLmN5Y2xlKHRydWUpXG4gICAgfVxuXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbClcbiAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGxcbiAgfVxuXG4gIGN5Y2xlKGV2ZW50KSB7XG4gICAgaWYgKCFldmVudCkge1xuICAgICAgdGhpcy5faXNQYXVzZWQgPSBmYWxzZVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbnRlcnZhbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbClcbiAgICAgIHRoaXMuX2ludGVydmFsID0gbnVsbFxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcuaW50ZXJ2YWwgJiYgIXRoaXMuX2lzUGF1c2VkKSB7XG4gICAgICB0aGlzLl9pbnRlcnZhbCA9IHNldEludGVydmFsKFxuICAgICAgICAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID8gdGhpcy5uZXh0V2hlblZpc2libGUgOiB0aGlzLm5leHQpLmJpbmQodGhpcyksXG4gICAgICAgIHRoaXMuX2NvbmZpZy5pbnRlcnZhbFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHRvKGluZGV4KSB7XG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihTRUxFQ1RPUl9BQ1RJVkVfSVRFTSlcblxuICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KHRoaXMuX2FjdGl2ZUVsZW1lbnQpXG5cbiAgICBpZiAoaW5kZXggPiB0aGlzLl9pdGVtcy5sZW5ndGggLSAxIHx8IGluZGV4IDwgMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbmUoRVZFTlRfU0xJRCwgKCkgPT4gdGhpcy50byhpbmRleCkpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlSW5kZXggPT09IGluZGV4KSB7XG4gICAgICB0aGlzLnBhdXNlKClcbiAgICAgIHRoaXMuY3ljbGUoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZGlyZWN0aW9uID0gaW5kZXggPiBhY3RpdmVJbmRleFxuICAgICAgPyBESVJFQ1RJT05fTkVYVFxuICAgICAgOiBESVJFQ1RJT05fUFJFVlxuXG4gICAgdGhpcy5fc2xpZGUoZGlyZWN0aW9uLCB0aGlzLl9pdGVtc1tpbmRleF0pXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgICQodGhpcy5fZWxlbWVudCkub2ZmKEVWRU5UX0tFWSlcbiAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG5cbiAgICB0aGlzLl9pdGVtcyAgICAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9jb25maWcgICAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9lbGVtZW50ICAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9pbnRlcnZhbCAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9pc1BhdXNlZCAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9pc1NsaWRpbmcgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9hY3RpdmVFbGVtZW50ICAgICA9IG51bGxcbiAgICB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudCA9IG51bGxcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi5jb25maWdcbiAgICB9XG4gICAgVXRpbC50eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfaGFuZGxlU3dpcGUoKSB7XG4gICAgY29uc3QgYWJzRGVsdGF4ID0gTWF0aC5hYnModGhpcy50b3VjaERlbHRhWClcblxuICAgIGlmIChhYnNEZWx0YXggPD0gU1dJUEVfVEhSRVNIT0xEKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSBhYnNEZWx0YXggLyB0aGlzLnRvdWNoRGVsdGFYXG5cbiAgICB0aGlzLnRvdWNoRGVsdGFYID0gMFxuXG4gICAgLy8gc3dpcGUgbGVmdFxuICAgIGlmIChkaXJlY3Rpb24gPiAwKSB7XG4gICAgICB0aGlzLnByZXYoKVxuICAgIH1cblxuICAgIC8vIHN3aXBlIHJpZ2h0XG4gICAgaWYgKGRpcmVjdGlvbiA8IDApIHtcbiAgICAgIHRoaXMubmV4dCgpXG4gICAgfVxuICB9XG5cbiAgX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGlmICh0aGlzLl9jb25maWcua2V5Ym9hcmQpIHtcbiAgICAgICQodGhpcy5fZWxlbWVudCkub24oRVZFTlRfS0VZRE9XTiwgKGV2ZW50KSA9PiB0aGlzLl9rZXlkb3duKGV2ZW50KSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnBhdXNlID09PSAnaG92ZXInKSB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5vbihFVkVOVF9NT1VTRUVOVEVSLCAoZXZlbnQpID0+IHRoaXMucGF1c2UoZXZlbnQpKVxuICAgICAgICAub24oRVZFTlRfTU9VU0VMRUFWRSwgKGV2ZW50KSA9PiB0aGlzLmN5Y2xlKGV2ZW50KSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLnRvdWNoKSB7XG4gICAgICB0aGlzLl9hZGRUb3VjaEV2ZW50TGlzdGVuZXJzKClcbiAgICB9XG4gIH1cblxuICBfYWRkVG91Y2hFdmVudExpc3RlbmVycygpIHtcbiAgICBpZiAoIXRoaXMuX3RvdWNoU3VwcG9ydGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzdGFydCA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3BvaW50ZXJFdmVudCAmJiBQb2ludGVyVHlwZVtldmVudC5vcmlnaW5hbEV2ZW50LnBvaW50ZXJUeXBlLnRvVXBwZXJDYXNlKCldKSB7XG4gICAgICAgIHRoaXMudG91Y2hTdGFydFggPSBldmVudC5vcmlnaW5hbEV2ZW50LmNsaWVudFhcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX3BvaW50ZXJFdmVudCkge1xuICAgICAgICB0aGlzLnRvdWNoU3RhcnRYID0gZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdLmNsaWVudFhcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBtb3ZlID0gKGV2ZW50KSA9PiB7XG4gICAgICAvLyBlbnN1cmUgc3dpcGluZyB3aXRoIG9uZSB0b3VjaCBhbmQgbm90IHBpbmNoaW5nXG4gICAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHRoaXMudG91Y2hEZWx0YVggPSAwXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRvdWNoRGVsdGFYID0gZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdLmNsaWVudFggLSB0aGlzLnRvdWNoU3RhcnRYXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZW5kID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5fcG9pbnRlckV2ZW50ICYmIFBvaW50ZXJUeXBlW2V2ZW50Lm9yaWdpbmFsRXZlbnQucG9pbnRlclR5cGUudG9VcHBlckNhc2UoKV0pIHtcbiAgICAgICAgdGhpcy50b3VjaERlbHRhWCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQuY2xpZW50WCAtIHRoaXMudG91Y2hTdGFydFhcbiAgICAgIH1cblxuICAgICAgdGhpcy5faGFuZGxlU3dpcGUoKVxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5wYXVzZSA9PT0gJ2hvdmVyJykge1xuICAgICAgICAvLyBJZiBpdCdzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2UsIG1vdXNlZW50ZXIvbGVhdmUgYXJlIGZpcmVkIGFzXG4gICAgICAgIC8vIHBhcnQgb2YgdGhlIG1vdXNlIGNvbXBhdGliaWxpdHkgZXZlbnRzIG9uIGZpcnN0IHRhcCAtIHRoZSBjYXJvdXNlbFxuICAgICAgICAvLyB3b3VsZCBzdG9wIGN5Y2xpbmcgdW50aWwgdXNlciB0YXBwZWQgb3V0IG9mIGl0O1xuICAgICAgICAvLyBoZXJlLCB3ZSBsaXN0ZW4gZm9yIHRvdWNoZW5kLCBleHBsaWNpdGx5IHBhdXNlIHRoZSBjYXJvdXNlbFxuICAgICAgICAvLyAoYXMgaWYgaXQncyB0aGUgc2Vjb25kIHRpbWUgd2UgdGFwIG9uIGl0LCBtb3VzZWVudGVyIGNvbXBhdCBldmVudFxuICAgICAgICAvLyBpcyBOT1QgZmlyZWQpIGFuZCBhZnRlciBhIHRpbWVvdXQgKHRvIGFsbG93IGZvciBtb3VzZSBjb21wYXRpYmlsaXR5XG4gICAgICAgIC8vIGV2ZW50cyB0byBmaXJlKSB3ZSBleHBsaWNpdGx5IHJlc3RhcnQgY3ljbGluZ1xuXG4gICAgICAgIHRoaXMucGF1c2UoKVxuICAgICAgICBpZiAodGhpcy50b3VjaFRpbWVvdXQpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50b3VjaFRpbWVvdXQpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b3VjaFRpbWVvdXQgPSBzZXRUaW1lb3V0KChldmVudCkgPT4gdGhpcy5jeWNsZShldmVudCksIFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgKyB0aGlzLl9jb25maWcuaW50ZXJ2YWwpXG4gICAgICB9XG4gICAgfVxuXG4gICAgJCh0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfSVRFTV9JTUcpKVxuICAgICAgLm9uKEVWRU5UX0RSQUdfU1RBUlQsIChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCkpXG5cbiAgICBpZiAodGhpcy5fcG9pbnRlckV2ZW50KSB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEVWRU5UX1BPSU5URVJET1dOLCAoZXZlbnQpID0+IHN0YXJ0KGV2ZW50KSlcbiAgICAgICQodGhpcy5fZWxlbWVudCkub24oRVZFTlRfUE9JTlRFUlVQLCAoZXZlbnQpID0+IGVuZChldmVudCkpXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1BPSU5URVJfRVZFTlQpXG4gICAgfSBlbHNlIHtcbiAgICAgICQodGhpcy5fZWxlbWVudCkub24oRVZFTlRfVE9VQ0hTVEFSVCwgKGV2ZW50KSA9PiBzdGFydChldmVudCkpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEVWRU5UX1RPVUNITU9WRSwgKGV2ZW50KSA9PiBtb3ZlKGV2ZW50KSlcbiAgICAgICQodGhpcy5fZWxlbWVudCkub24oRVZFTlRfVE9VQ0hFTkQsIChldmVudCkgPT4gZW5kKGV2ZW50KSlcbiAgICB9XG4gIH1cblxuICBfa2V5ZG93bihldmVudCkge1xuICAgIGlmICgvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgc3dpdGNoIChldmVudC53aGljaCkge1xuICAgICAgY2FzZSBBUlJPV19MRUZUX0tFWUNPREU6XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgdGhpcy5wcmV2KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgQVJST1dfUklHSFRfS0VZQ09ERTpcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICB0aGlzLm5leHQoKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH1cblxuICBfZ2V0SXRlbUluZGV4KGVsZW1lbnQpIHtcbiAgICB0aGlzLl9pdGVtcyA9IGVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICA/IFtdLnNsaWNlLmNhbGwoZWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfSVRFTSkpXG4gICAgICA6IFtdXG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmluZGV4T2YoZWxlbWVudClcbiAgfVxuXG4gIF9nZXRJdGVtQnlEaXJlY3Rpb24oZGlyZWN0aW9uLCBhY3RpdmVFbGVtZW50KSB7XG4gICAgY29uc3QgaXNOZXh0RGlyZWN0aW9uID0gZGlyZWN0aW9uID09PSBESVJFQ1RJT05fTkVYVFxuICAgIGNvbnN0IGlzUHJldkRpcmVjdGlvbiA9IGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OX1BSRVZcbiAgICBjb25zdCBhY3RpdmVJbmRleCAgICAgPSB0aGlzLl9nZXRJdGVtSW5kZXgoYWN0aXZlRWxlbWVudClcbiAgICBjb25zdCBsYXN0SXRlbUluZGV4ICAgPSB0aGlzLl9pdGVtcy5sZW5ndGggLSAxXG4gICAgY29uc3QgaXNHb2luZ1RvV3JhcCAgID0gaXNQcmV2RGlyZWN0aW9uICYmIGFjdGl2ZUluZGV4ID09PSAwIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNOZXh0RGlyZWN0aW9uICYmIGFjdGl2ZUluZGV4ID09PSBsYXN0SXRlbUluZGV4XG5cbiAgICBpZiAoaXNHb2luZ1RvV3JhcCAmJiAhdGhpcy5fY29uZmlnLndyYXApIHtcbiAgICAgIHJldHVybiBhY3RpdmVFbGVtZW50XG4gICAgfVxuXG4gICAgY29uc3QgZGVsdGEgICAgID0gZGlyZWN0aW9uID09PSBESVJFQ1RJT05fUFJFViA/IC0xIDogMVxuICAgIGNvbnN0IGl0ZW1JbmRleCA9IChhY3RpdmVJbmRleCArIGRlbHRhKSAlIHRoaXMuX2l0ZW1zLmxlbmd0aFxuXG4gICAgcmV0dXJuIGl0ZW1JbmRleCA9PT0gLTFcbiAgICAgID8gdGhpcy5faXRlbXNbdGhpcy5faXRlbXMubGVuZ3RoIC0gMV0gOiB0aGlzLl9pdGVtc1tpdGVtSW5kZXhdXG4gIH1cblxuICBfdHJpZ2dlclNsaWRlRXZlbnQocmVsYXRlZFRhcmdldCwgZXZlbnREaXJlY3Rpb25OYW1lKSB7XG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgocmVsYXRlZFRhcmdldClcbiAgICBjb25zdCBmcm9tSW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgodGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SX0FDVElWRV9JVEVNKSlcbiAgICBjb25zdCBzbGlkZUV2ZW50ID0gJC5FdmVudChFVkVOVF9TTElERSwge1xuICAgICAgcmVsYXRlZFRhcmdldCxcbiAgICAgIGRpcmVjdGlvbjogZXZlbnREaXJlY3Rpb25OYW1lLFxuICAgICAgZnJvbTogZnJvbUluZGV4LFxuICAgICAgdG86IHRhcmdldEluZGV4XG4gICAgfSlcblxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzbGlkZUV2ZW50KVxuXG4gICAgcmV0dXJuIHNsaWRlRXZlbnRcbiAgfVxuXG4gIF9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBpZiAodGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGluZGljYXRvcnMgPSBbXS5zbGljZS5jYWxsKHRoaXMuX2luZGljYXRvcnNFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfQUNUSVZFKSlcbiAgICAgICQoaW5kaWNhdG9ycykucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9BQ1RJVkUpXG5cbiAgICAgIGNvbnN0IG5leHRJbmRpY2F0b3IgPSB0aGlzLl9pbmRpY2F0b3JzRWxlbWVudC5jaGlsZHJlbltcbiAgICAgICAgdGhpcy5fZ2V0SXRlbUluZGV4KGVsZW1lbnQpXG4gICAgICBdXG5cbiAgICAgIGlmIChuZXh0SW5kaWNhdG9yKSB7XG4gICAgICAgICQobmV4dEluZGljYXRvcikuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX3NsaWRlKGRpcmVjdGlvbiwgZWxlbWVudCkge1xuICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JfQUNUSVZFX0lURU0pXG4gICAgY29uc3QgYWN0aXZlRWxlbWVudEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KGFjdGl2ZUVsZW1lbnQpXG4gICAgY29uc3QgbmV4dEVsZW1lbnQgICA9IGVsZW1lbnQgfHwgYWN0aXZlRWxlbWVudCAmJlxuICAgICAgdGhpcy5fZ2V0SXRlbUJ5RGlyZWN0aW9uKGRpcmVjdGlvbiwgYWN0aXZlRWxlbWVudClcbiAgICBjb25zdCBuZXh0RWxlbWVudEluZGV4ID0gdGhpcy5fZ2V0SXRlbUluZGV4KG5leHRFbGVtZW50KVxuICAgIGNvbnN0IGlzQ3ljbGluZyA9IEJvb2xlYW4odGhpcy5faW50ZXJ2YWwpXG5cbiAgICBsZXQgZGlyZWN0aW9uYWxDbGFzc05hbWVcbiAgICBsZXQgb3JkZXJDbGFzc05hbWVcbiAgICBsZXQgZXZlbnREaXJlY3Rpb25OYW1lXG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSBESVJFQ1RJT05fTkVYVCkge1xuICAgICAgZGlyZWN0aW9uYWxDbGFzc05hbWUgPSBDTEFTU19OQU1FX0xFRlRcbiAgICAgIG9yZGVyQ2xhc3NOYW1lID0gQ0xBU1NfTkFNRV9ORVhUXG4gICAgICBldmVudERpcmVjdGlvbk5hbWUgPSBESVJFQ1RJT05fTEVGVFxuICAgIH0gZWxzZSB7XG4gICAgICBkaXJlY3Rpb25hbENsYXNzTmFtZSA9IENMQVNTX05BTUVfUklHSFRcbiAgICAgIG9yZGVyQ2xhc3NOYW1lID0gQ0xBU1NfTkFNRV9QUkVWXG4gICAgICBldmVudERpcmVjdGlvbk5hbWUgPSBESVJFQ1RJT05fUklHSFRcbiAgICB9XG5cbiAgICBpZiAobmV4dEVsZW1lbnQgJiYgJChuZXh0RWxlbWVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9BQ1RJVkUpKSB7XG4gICAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2xpZGVFdmVudCA9IHRoaXMuX3RyaWdnZXJTbGlkZUV2ZW50KG5leHRFbGVtZW50LCBldmVudERpcmVjdGlvbk5hbWUpXG4gICAgaWYgKHNsaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghYWN0aXZlRWxlbWVudCB8fCAhbmV4dEVsZW1lbnQpIHtcbiAgICAgIC8vIFNvbWUgd2VpcmRuZXNzIGlzIGhhcHBlbmluZywgc28gd2UgYmFpbFxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNTbGlkaW5nID0gdHJ1ZVxuXG4gICAgaWYgKGlzQ3ljbGluZykge1xuICAgICAgdGhpcy5wYXVzZSgpXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0QWN0aXZlSW5kaWNhdG9yRWxlbWVudChuZXh0RWxlbWVudClcblxuICAgIGNvbnN0IHNsaWRFdmVudCA9ICQuRXZlbnQoRVZFTlRfU0xJRCwge1xuICAgICAgcmVsYXRlZFRhcmdldDogbmV4dEVsZW1lbnQsXG4gICAgICBkaXJlY3Rpb246IGV2ZW50RGlyZWN0aW9uTmFtZSxcbiAgICAgIGZyb206IGFjdGl2ZUVsZW1lbnRJbmRleCxcbiAgICAgIHRvOiBuZXh0RWxlbWVudEluZGV4XG4gICAgfSlcblxuICAgIGlmICgkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfU0xJREUpKSB7XG4gICAgICAkKG5leHRFbGVtZW50KS5hZGRDbGFzcyhvcmRlckNsYXNzTmFtZSlcblxuICAgICAgVXRpbC5yZWZsb3cobmV4dEVsZW1lbnQpXG5cbiAgICAgICQoYWN0aXZlRWxlbWVudCkuYWRkQ2xhc3MoZGlyZWN0aW9uYWxDbGFzc05hbWUpXG4gICAgICAkKG5leHRFbGVtZW50KS5hZGRDbGFzcyhkaXJlY3Rpb25hbENsYXNzTmFtZSlcblxuICAgICAgY29uc3QgbmV4dEVsZW1lbnRJbnRlcnZhbCA9IHBhcnNlSW50KG5leHRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pbnRlcnZhbCcpLCAxMClcbiAgICAgIGlmIChuZXh0RWxlbWVudEludGVydmFsKSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZy5kZWZhdWx0SW50ZXJ2YWwgPSB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsIHx8IHRoaXMuX2NvbmZpZy5pbnRlcnZhbFxuICAgICAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWwgPSBuZXh0RWxlbWVudEludGVydmFsXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9jb25maWcuaW50ZXJ2YWwgPSB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsIHx8IHRoaXMuX2NvbmZpZy5pbnRlcnZhbFxuICAgICAgfVxuXG4gICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KGFjdGl2ZUVsZW1lbnQpXG5cbiAgICAgICQoYWN0aXZlRWxlbWVudClcbiAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCAoKSA9PiB7XG4gICAgICAgICAgJChuZXh0RWxlbWVudClcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhgJHtkaXJlY3Rpb25hbENsYXNzTmFtZX0gJHtvcmRlckNsYXNzTmFtZX1gKVxuICAgICAgICAgICAgLmFkZENsYXNzKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgICAgICAgJChhY3RpdmVFbGVtZW50KS5yZW1vdmVDbGFzcyhgJHtDTEFTU19OQU1FX0FDVElWRX0gJHtvcmRlckNsYXNzTmFtZX0gJHtkaXJlY3Rpb25hbENsYXNzTmFtZX1gKVxuXG4gICAgICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2VcblxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNsaWRFdmVudCksIDApXG4gICAgICAgIH0pXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgICQoYWN0aXZlRWxlbWVudCkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICAkKG5leHRFbGVtZW50KS5hZGRDbGFzcyhDTEFTU19OQU1FX0FDVElWRSlcblxuICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2VcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzbGlkRXZlbnQpXG4gICAgfVxuXG4gICAgaWYgKGlzQ3ljbGluZykge1xuICAgICAgdGhpcy5jeWNsZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgIGxldCBfY29uZmlnID0ge1xuICAgICAgICAuLi5EZWZhdWx0LFxuICAgICAgICAuLi4kKHRoaXMpLmRhdGEoKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgX2NvbmZpZyA9IHtcbiAgICAgICAgICAuLi5fY29uZmlnLFxuICAgICAgICAgIC4uLmNvbmZpZ1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFjdGlvbiA9IHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnID8gY29uZmlnIDogX2NvbmZpZy5zbGlkZVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBDYXJvdXNlbCh0aGlzLCBfY29uZmlnKVxuICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnbnVtYmVyJykge1xuICAgICAgICBkYXRhLnRvKGNvbmZpZylcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2FjdGlvbl0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHthY3Rpb259XCJgKVxuICAgICAgICB9XG4gICAgICAgIGRhdGFbYWN0aW9uXSgpXG4gICAgICB9IGVsc2UgaWYgKF9jb25maWcuaW50ZXJ2YWwgJiYgX2NvbmZpZy5yaWRlKSB7XG4gICAgICAgIGRhdGEucGF1c2UoKVxuICAgICAgICBkYXRhLmN5Y2xlKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIF9kYXRhQXBpQ2xpY2tIYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQodGhpcylcblxuICAgIGlmICghc2VsZWN0b3IpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldCA9ICQoc2VsZWN0b3IpWzBdXG5cbiAgICBpZiAoIXRhcmdldCB8fCAhJCh0YXJnZXQpLmhhc0NsYXNzKENMQVNTX05BTUVfQ0FST1VTRUwpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAuLi4kKHRhcmdldCkuZGF0YSgpLFxuICAgICAgLi4uJCh0aGlzKS5kYXRhKClcbiAgICB9XG4gICAgY29uc3Qgc2xpZGVJbmRleCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlLXRvJylcblxuICAgIGlmIChzbGlkZUluZGV4KSB7XG4gICAgICBjb25maWcuaW50ZXJ2YWwgPSBmYWxzZVxuICAgIH1cblxuICAgIENhcm91c2VsLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRhcmdldCksIGNvbmZpZylcblxuICAgIGlmIChzbGlkZUluZGV4KSB7XG4gICAgICAkKHRhcmdldCkuZGF0YShEQVRBX0tFWSkudG8oc2xpZGVJbmRleClcbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kKGRvY3VtZW50KS5vbihFVkVOVF9DTElDS19EQVRBX0FQSSwgU0VMRUNUT1JfREFUQV9TTElERSwgQ2Fyb3VzZWwuX2RhdGFBcGlDbGlja0hhbmRsZXIpXG5cbiQod2luZG93KS5vbihFVkVOVF9MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gIGNvbnN0IGNhcm91c2VscyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUl9EQVRBX1JJREUpKVxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gY2Fyb3VzZWxzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3QgJGNhcm91c2VsID0gJChjYXJvdXNlbHNbaV0pXG4gICAgQ2Fyb3VzZWwuX2pRdWVyeUludGVyZmFjZS5jYWxsKCRjYXJvdXNlbCwgJGNhcm91c2VsLmRhdGEoKSlcbiAgfVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSA9IENhcm91c2VsLl9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBDYXJvdXNlbFxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBDYXJvdXNlbC5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjUuMCk6IGNvbGxhcHNlLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgVXRpbCBmcm9tICcuL3V0aWwnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgICAgICAgICAgICAgICAgPSAnY29sbGFwc2UnXG5jb25zdCBWRVJTSU9OICAgICAgICAgICAgID0gJzQuNS4wJ1xuY29uc3QgREFUQV9LRVkgICAgICAgICAgICA9ICdicy5jb2xsYXBzZSdcbmNvbnN0IEVWRU5UX0tFWSAgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZICAgICAgICA9ICcuZGF0YS1hcGknXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgID0gJC5mbltOQU1FXVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICB0b2dnbGUgOiB0cnVlLFxuICBwYXJlbnQgOiAnJ1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgdG9nZ2xlIDogJ2Jvb2xlYW4nLFxuICBwYXJlbnQgOiAnKHN0cmluZ3xlbGVtZW50KSdcbn1cblxuY29uc3QgRVZFTlRfU0hPVyAgICAgICAgICAgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOICAgICAgICAgID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERSAgICAgICAgICAgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiAgICAgICAgID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgICAgICAgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0UgICA9ICdjb2xsYXBzZSdcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0lORyA9ICdjb2xsYXBzaW5nJ1xuY29uc3QgQ0xBU1NfTkFNRV9DT0xMQVBTRUQgID0gJ2NvbGxhcHNlZCdcblxuY29uc3QgRElNRU5TSU9OX1dJRFRIICA9ICd3aWR0aCdcbmNvbnN0IERJTUVOU0lPTl9IRUlHSFQgPSAnaGVpZ2h0J1xuXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkVTICAgICA9ICcuc2hvdywgLmNvbGxhcHNpbmcnXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIENvbGxhcHNlIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICB0aGlzLl9lbGVtZW50ICAgICAgICAgPSBlbGVtZW50XG4gICAgdGhpcy5fY29uZmlnICAgICAgICAgID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl90cmlnZ2VyQXJyYXkgICAgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBgW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1baHJlZj1cIiMke2VsZW1lbnQuaWR9XCJdLGAgK1xuICAgICAgYFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2RhdGEtdGFyZ2V0PVwiIyR7ZWxlbWVudC5pZH1cIl1gXG4gICAgKSlcblxuICAgIGNvbnN0IHRvZ2dsZUxpc3QgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfREFUQV9UT0dHTEUpKVxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0b2dnbGVMaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtID0gdG9nZ2xlTGlzdFtpXVxuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbSlcbiAgICAgIGNvbnN0IGZpbHRlckVsZW1lbnQgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKVxuICAgICAgICAuZmlsdGVyKChmb3VuZEVsZW0pID0+IGZvdW5kRWxlbSA9PT0gZWxlbWVudClcblxuICAgICAgaWYgKHNlbGVjdG9yICE9PSBudWxsICYmIGZpbHRlckVsZW1lbnQubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLl9zZWxlY3RvciA9IHNlbGVjdG9yXG4gICAgICAgIHRoaXMuX3RyaWdnZXJBcnJheS5wdXNoKGVsZW0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fcGFyZW50ID0gdGhpcy5fY29uZmlnLnBhcmVudCA/IHRoaXMuX2dldFBhcmVudCgpIDogbnVsbFxuXG4gICAgaWYgKCF0aGlzLl9jb25maWcucGFyZW50KSB7XG4gICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModGhpcy5fZWxlbWVudCwgdGhpcy5fdHJpZ2dlckFycmF5KVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcudG9nZ2xlKSB7XG4gICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKCQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgdGhpcy5oaWRlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93KClcbiAgICB9XG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHxcbiAgICAgICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IGFjdGl2ZXNcbiAgICBsZXQgYWN0aXZlc0RhdGFcblxuICAgIGlmICh0aGlzLl9wYXJlbnQpIHtcbiAgICAgIGFjdGl2ZXMgPSBbXS5zbGljZS5jYWxsKHRoaXMuX3BhcmVudC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX0FDVElWRVMpKVxuICAgICAgICAuZmlsdGVyKChlbGVtKSA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcucGFyZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXBhcmVudCcpID09PSB0aGlzLl9jb25maWcucGFyZW50XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfQ09MTEFQU0UpXG4gICAgICAgIH0pXG5cbiAgICAgIGlmIChhY3RpdmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBhY3RpdmVzID0gbnVsbFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhY3RpdmVzKSB7XG4gICAgICBhY3RpdmVzRGF0YSA9ICQoYWN0aXZlcykubm90KHRoaXMuX3NlbGVjdG9yKS5kYXRhKERBVEFfS0VZKVxuICAgICAgaWYgKGFjdGl2ZXNEYXRhICYmIGFjdGl2ZXNEYXRhLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRFdmVudCA9ICQuRXZlbnQoRVZFTlRfU0hPVylcbiAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc3RhcnRFdmVudClcbiAgICBpZiAoc3RhcnRFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZXMpIHtcbiAgICAgIENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKGFjdGl2ZXMpLm5vdCh0aGlzLl9zZWxlY3RvciksICdoaWRlJylcbiAgICAgIGlmICghYWN0aXZlc0RhdGEpIHtcbiAgICAgICAgJChhY3RpdmVzKS5kYXRhKERBVEFfS0VZLCBudWxsKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTRSlcbiAgICAgIC5hZGRDbGFzcyhDTEFTU19OQU1FX0NPTExBUFNJTkcpXG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAwXG5cbiAgICBpZiAodGhpcy5fdHJpZ2dlckFycmF5Lmxlbmd0aCkge1xuICAgICAgJCh0aGlzLl90cmlnZ2VyQXJyYXkpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0NPTExBUFNFRClcbiAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuICAgIH1cblxuICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyh0cnVlKVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0NPTExBUFNJTkcpXG4gICAgICAgIC5hZGRDbGFzcyhgJHtDTEFTU19OQU1FX0NPTExBUFNFfSAke0NMQVNTX05BTUVfU0hPV31gKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAnJ1xuXG4gICAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcoZmFsc2UpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihFVkVOVF9TSE9XTilcbiAgICB9XG5cbiAgICBjb25zdCBjYXBpdGFsaXplZERpbWVuc2lvbiA9IGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpXG4gICAgY29uc3Qgc2Nyb2xsU2l6ZSA9IGBzY3JvbGwke2NhcGl0YWxpemVkRGltZW5zaW9ufWBcbiAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IGAke3RoaXMuX2VsZW1lbnRbc2Nyb2xsU2l6ZV19cHhgXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHxcbiAgICAgICEkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSAkLkV2ZW50KEVWRU5UX0hJREUpXG4gICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHN0YXJ0RXZlbnQpXG4gICAgaWYgKHN0YXJ0RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSBgJHt0aGlzLl9lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpW2RpbWVuc2lvbl19cHhgXG5cbiAgICBVdGlsLnJlZmxvdyh0aGlzLl9lbGVtZW50KVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgLmFkZENsYXNzKENMQVNTX05BTUVfQ09MTEFQU0lORylcbiAgICAgIC5yZW1vdmVDbGFzcyhgJHtDTEFTU19OQU1FX0NPTExBUFNFfSAke0NMQVNTX05BTUVfU0hPV31gKVxuXG4gICAgY29uc3QgdHJpZ2dlckFycmF5TGVuZ3RoID0gdGhpcy5fdHJpZ2dlckFycmF5Lmxlbmd0aFxuICAgIGlmICh0cmlnZ2VyQXJyYXlMZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyaWdnZXJBcnJheUxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRyaWdnZXIgPSB0aGlzLl90cmlnZ2VyQXJyYXlbaV1cbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQodHJpZ2dlcilcblxuICAgICAgICBpZiAoc2VsZWN0b3IgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCAkZWxlbSA9ICQoW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkpXG4gICAgICAgICAgaWYgKCEkZWxlbS5oYXNDbGFzcyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICAgICAgICAkKHRyaWdnZXIpLmFkZENsYXNzKENMQVNTX05BTUVfQ09MTEFQU0VEKVxuICAgICAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyh0cnVlKVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcoZmFsc2UpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0NPTExBUFNJTkcpXG4gICAgICAgIC5hZGRDbGFzcyhDTEFTU19OQU1FX0NPTExBUFNFKVxuICAgICAgICAudHJpZ2dlcihFVkVOVF9ISURERU4pXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJydcbiAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgfVxuXG4gIHNldFRyYW5zaXRpb25pbmcoaXNUcmFuc2l0aW9uaW5nKSB7XG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gaXNUcmFuc2l0aW9uaW5nXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcblxuICAgIHRoaXMuX2NvbmZpZyAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9wYXJlbnQgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5fZWxlbWVudCAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX3RyaWdnZXJBcnJheSAgICA9IG51bGxcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBudWxsXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uY29uZmlnXG4gICAgfVxuICAgIGNvbmZpZy50b2dnbGUgPSBCb29sZWFuKGNvbmZpZy50b2dnbGUpIC8vIENvZXJjZSBzdHJpbmcgdmFsdWVzXG4gICAgVXRpbC50eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0RGltZW5zaW9uKCkge1xuICAgIGNvbnN0IGhhc1dpZHRoID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhESU1FTlNJT05fV0lEVEgpXG4gICAgcmV0dXJuIGhhc1dpZHRoID8gRElNRU5TSU9OX1dJRFRIIDogRElNRU5TSU9OX0hFSUdIVFxuICB9XG5cbiAgX2dldFBhcmVudCgpIHtcbiAgICBsZXQgcGFyZW50XG5cbiAgICBpZiAoVXRpbC5pc0VsZW1lbnQodGhpcy5fY29uZmlnLnBhcmVudCkpIHtcbiAgICAgIHBhcmVudCA9IHRoaXMuX2NvbmZpZy5wYXJlbnRcblxuICAgICAgLy8gSXQncyBhIGpRdWVyeSBvYmplY3RcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLnBhcmVudC5qcXVlcnkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHBhcmVudCA9IHRoaXMuX2NvbmZpZy5wYXJlbnRbMF1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9jb25maWcucGFyZW50KVxuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdG9yID0gYFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2RhdGEtcGFyZW50PVwiJHt0aGlzLl9jb25maWcucGFyZW50fVwiXWBcbiAgICBjb25zdCBjaGlsZHJlbiA9IFtdLnNsaWNlLmNhbGwocGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKVxuXG4gICAgJChjaGlsZHJlbikuZWFjaCgoaSwgZWxlbWVudCkgPT4ge1xuICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKFxuICAgICAgICBDb2xsYXBzZS5fZ2V0VGFyZ2V0RnJvbUVsZW1lbnQoZWxlbWVudCksXG4gICAgICAgIFtlbGVtZW50XVxuICAgICAgKVxuICAgIH0pXG5cbiAgICByZXR1cm4gcGFyZW50XG4gIH1cblxuICBfYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKGVsZW1lbnQsIHRyaWdnZXJBcnJheSkge1xuICAgIGNvbnN0IGlzT3BlbiA9ICQoZWxlbWVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgaWYgKHRyaWdnZXJBcnJheS5sZW5ndGgpIHtcbiAgICAgICQodHJpZ2dlckFycmF5KVxuICAgICAgICAudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9DT0xMQVBTRUQsICFpc09wZW4pXG4gICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgaXNPcGVuKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfZ2V0VGFyZ2V0RnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpXG4gICAgcmV0dXJuIHNlbGVjdG9yID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgOiBudWxsXG4gIH1cblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0ICR0aGlzICAgPSAkKHRoaXMpXG4gICAgICBsZXQgZGF0YSAgICAgID0gJHRoaXMuZGF0YShEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgPSB7XG4gICAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAgIC4uLiR0aGlzLmRhdGEoKSxcbiAgICAgICAgLi4udHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge31cbiAgICAgIH1cblxuICAgICAgaWYgKCFkYXRhICYmIF9jb25maWcudG9nZ2xlICYmIHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnICYmIC9zaG93fGhpZGUvLnRlc3QoY29uZmlnKSkge1xuICAgICAgICBfY29uZmlnLnRvZ2dsZSA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IENvbGxhcHNlKHRoaXMsIF9jb25maWcpXG4gICAgICAgICR0aGlzLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJChkb2N1bWVudCkub24oRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLy8gcHJldmVudERlZmF1bHQgb25seSBmb3IgPGE+IGVsZW1lbnRzICh3aGljaCBjaGFuZ2UgdGhlIFVSTCkgbm90IGluc2lkZSB0aGUgY29sbGFwc2libGUgZWxlbWVudFxuICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC50YWdOYW1lID09PSAnQScpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBjb25zdCAkdHJpZ2dlciA9ICQodGhpcylcbiAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQodGhpcylcbiAgY29uc3Qgc2VsZWN0b3JzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSlcblxuICAkKHNlbGVjdG9ycykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgJHRhcmdldCA9ICQodGhpcylcbiAgICBjb25zdCBkYXRhICAgID0gJHRhcmdldC5kYXRhKERBVEFfS0VZKVxuICAgIGNvbnN0IGNvbmZpZyAgPSBkYXRhID8gJ3RvZ2dsZScgOiAkdHJpZ2dlci5kYXRhKClcbiAgICBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJHRhcmdldCwgY29uZmlnKVxuICB9KVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSA9IENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBDb2xsYXBzZVxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbGxhcHNlXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjUuMCk6IGRyb3Bkb3duLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgUG9wcGVyIGZyb20gJ3BvcHBlci5qcydcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSAgICAgICAgICAgICAgICAgICAgID0gJ2Ryb3Bkb3duJ1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgICAgICAgID0gJzQuNS4wJ1xuY29uc3QgREFUQV9LRVkgICAgICAgICAgICAgICAgID0gJ2JzLmRyb3Bkb3duJ1xuY29uc3QgRVZFTlRfS0VZICAgICAgICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSAgICAgICAgICAgICA9ICcuZGF0YS1hcGknXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgICAgICAgPSAkLmZuW05BTUVdXG5jb25zdCBFU0NBUEVfS0VZQ09ERSAgICAgICAgICAgPSAyNyAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBFc2NhcGUgKEVzYykga2V5XG5jb25zdCBTUEFDRV9LRVlDT0RFICAgICAgICAgICAgPSAzMiAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBzcGFjZSBrZXlcbmNvbnN0IFRBQl9LRVlDT0RFICAgICAgICAgICAgICA9IDkgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgdGFiIGtleVxuY29uc3QgQVJST1dfVVBfS0VZQ09ERSAgICAgICAgID0gMzggLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgdXAgYXJyb3cga2V5XG5jb25zdCBBUlJPV19ET1dOX0tFWUNPREUgICAgICAgPSA0MCAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBkb3duIGFycm93IGtleVxuY29uc3QgUklHSFRfTU9VU0VfQlVUVE9OX1dISUNIID0gMyAvLyBNb3VzZUV2ZW50LndoaWNoIHZhbHVlIGZvciB0aGUgcmlnaHQgYnV0dG9uIChhc3N1bWluZyBhIHJpZ2h0LWhhbmRlZCBtb3VzZSlcbmNvbnN0IFJFR0VYUF9LRVlET1dOICAgICAgICAgICA9IG5ldyBSZWdFeHAoYCR7QVJST1dfVVBfS0VZQ09ERX18JHtBUlJPV19ET1dOX0tFWUNPREV9fCR7RVNDQVBFX0tFWUNPREV9YClcblxuY29uc3QgRVZFTlRfSElERSAgICAgICAgICAgICA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOICAgICAgICAgICA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XICAgICAgICAgICAgID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiAgICAgICAgICAgID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0sgICAgICAgICAgICA9IGBjbGljayR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJICAgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJID0gYGtleWRvd24ke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9LRVlVUF9EQVRBX0FQSSAgID0gYGtleXVwJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0RJU0FCTEVEICAgICAgICA9ICdkaXNhYmxlZCdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyAgICAgICAgICAgID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX0RST1BVUCAgICAgICAgICA9ICdkcm9wdXAnXG5jb25zdCBDTEFTU19OQU1FX0RST1BSSUdIVCAgICAgICA9ICdkcm9wcmlnaHQnXG5jb25zdCBDTEFTU19OQU1FX0RST1BMRUZUICAgICAgICA9ICdkcm9wbGVmdCdcbmNvbnN0IENMQVNTX05BTUVfTUVOVVJJR0hUICAgICAgID0gJ2Ryb3Bkb3duLW1lbnUtcmlnaHQnXG5jb25zdCBDTEFTU19OQU1FX1BPU0lUSU9OX1NUQVRJQyA9ICdwb3NpdGlvbi1zdGF0aWMnXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFICAgPSAnW2RhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIl0nXG5jb25zdCBTRUxFQ1RPUl9GT1JNX0NISUxEICAgID0gJy5kcm9wZG93biBmb3JtJ1xuY29uc3QgU0VMRUNUT1JfTUVOVSAgICAgICAgICA9ICcuZHJvcGRvd24tbWVudSdcbmNvbnN0IFNFTEVDVE9SX05BVkJBUl9OQVYgICAgPSAnLm5hdmJhci1uYXYnXG5jb25zdCBTRUxFQ1RPUl9WSVNJQkxFX0lURU1TID0gJy5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpJ1xuXG5jb25zdCBQTEFDRU1FTlRfVE9QICAgICAgID0gJ3RvcC1zdGFydCdcbmNvbnN0IFBMQUNFTUVOVF9UT1BFTkQgICAgPSAndG9wLWVuZCdcbmNvbnN0IFBMQUNFTUVOVF9CT1RUT00gICAgPSAnYm90dG9tLXN0YXJ0J1xuY29uc3QgUExBQ0VNRU5UX0JPVFRPTUVORCA9ICdib3R0b20tZW5kJ1xuY29uc3QgUExBQ0VNRU5UX1JJR0hUICAgICA9ICdyaWdodC1zdGFydCdcbmNvbnN0IFBMQUNFTUVOVF9MRUZUICAgICAgPSAnbGVmdC1zdGFydCdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgb2Zmc2V0ICAgICAgIDogMCxcbiAgZmxpcCAgICAgICAgIDogdHJ1ZSxcbiAgYm91bmRhcnkgICAgIDogJ3Njcm9sbFBhcmVudCcsXG4gIHJlZmVyZW5jZSAgICA6ICd0b2dnbGUnLFxuICBkaXNwbGF5ICAgICAgOiAnZHluYW1pYycsXG4gIHBvcHBlckNvbmZpZyA6IG51bGxcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIG9mZnNldCAgICAgICA6ICcobnVtYmVyfHN0cmluZ3xmdW5jdGlvbiknLFxuICBmbGlwICAgICAgICAgOiAnYm9vbGVhbicsXG4gIGJvdW5kYXJ5ICAgICA6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgcmVmZXJlbmNlICAgIDogJyhzdHJpbmd8ZWxlbWVudCknLFxuICBkaXNwbGF5ICAgICAgOiAnc3RyaW5nJyxcbiAgcG9wcGVyQ29uZmlnIDogJyhudWxsfG9iamVjdCknXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBEcm9wZG93biB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHRoaXMuX2VsZW1lbnQgID0gZWxlbWVudFxuICAgIHRoaXMuX3BvcHBlciAgID0gbnVsbFxuICAgIHRoaXMuX2NvbmZpZyAgID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9tZW51ICAgICA9IHRoaXMuX2dldE1lbnVFbGVtZW50KClcbiAgICB0aGlzLl9pbk5hdmJhciA9IHRoaXMuX2RldGVjdE5hdmJhcigpXG5cbiAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuZGlzYWJsZWQgfHwgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDTEFTU19OQU1FX0RJU0FCTEVEKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXNBY3RpdmUgPSAkKHRoaXMuX21lbnUpLmhhc0NsYXNzKENMQVNTX05BTUVfU0hPVylcblxuICAgIERyb3Bkb3duLl9jbGVhck1lbnVzKClcblxuICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5zaG93KHRydWUpXG4gIH1cblxuICBzaG93KHVzZVBvcHBlciA9IGZhbHNlKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuZGlzYWJsZWQgfHwgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDTEFTU19OQU1FX0RJU0FCTEVEKSB8fCAkKHRoaXMuX21lbnUpLmhhc0NsYXNzKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgfVxuICAgIGNvbnN0IHNob3dFdmVudCA9ICQuRXZlbnQoRVZFTlRfU0hPVywgcmVsYXRlZFRhcmdldClcbiAgICBjb25zdCBwYXJlbnQgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICQocGFyZW50KS50cmlnZ2VyKHNob3dFdmVudClcblxuICAgIGlmIChzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIERpc2FibGUgdG90YWxseSBQb3BwZXIuanMgZm9yIERyb3Bkb3duIGluIE5hdmJhclxuICAgIGlmICghdGhpcy5faW5OYXZiYXIgJiYgdXNlUG9wcGVyKSB7XG4gICAgICAvKipcbiAgICAgICAqIENoZWNrIGZvciBQb3BwZXIgZGVwZW5kZW5jeVxuICAgICAgICogUG9wcGVyIC0gaHR0cHM6Ly9wb3BwZXIuanMub3JnXG4gICAgICAgKi9cbiAgICAgIGlmICh0eXBlb2YgUG9wcGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIGRyb3Bkb3ducyByZXF1aXJlIFBvcHBlci5qcyAoaHR0cHM6Ly9wb3BwZXIuanMub3JnLyknKVxuICAgICAgfVxuXG4gICAgICBsZXQgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnRcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UgPT09ICdwYXJlbnQnKSB7XG4gICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSBwYXJlbnRcbiAgICAgIH0gZWxzZSBpZiAoVXRpbC5pc0VsZW1lbnQodGhpcy5fY29uZmlnLnJlZmVyZW5jZSkpIHtcbiAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2NvbmZpZy5yZWZlcmVuY2VcblxuICAgICAgICAvLyBDaGVjayBpZiBpdCdzIGpRdWVyeSBlbGVtZW50XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLnJlZmVyZW5jZS5qcXVlcnkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2NvbmZpZy5yZWZlcmVuY2VbMF1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBib3VuZGFyeSBpcyBub3QgYHNjcm9sbFBhcmVudGAsIHRoZW4gc2V0IHBvc2l0aW9uIHRvIGBzdGF0aWNgXG4gICAgICAvLyB0byBhbGxvdyB0aGUgbWVudSB0byBcImVzY2FwZVwiIHRoZSBzY3JvbGwgcGFyZW50J3MgYm91bmRhcmllc1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8yNDI1MVxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5ib3VuZGFyeSAhPT0gJ3Njcm9sbFBhcmVudCcpIHtcbiAgICAgICAgJChwYXJlbnQpLmFkZENsYXNzKENMQVNTX05BTUVfUE9TSVRJT05fU1RBVElDKVxuICAgICAgfVxuICAgICAgdGhpcy5fcG9wcGVyID0gbmV3IFBvcHBlcihyZWZlcmVuY2VFbGVtZW50LCB0aGlzLl9tZW51LCB0aGlzLl9nZXRQb3BwZXJDb25maWcoKSlcbiAgICB9XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAvLyBvbmx5IG5lZWRlZCBiZWNhdXNlIG9mIGJyb2tlbiBldmVudCBkZWxlZ2F0aW9uIG9uIGlPU1xuICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiZcbiAgICAgICAgJChwYXJlbnQpLmNsb3Nlc3QoU0VMRUNUT1JfTkFWQkFSX05BVikubGVuZ3RoID09PSAwKSB7XG4gICAgICAkKGRvY3VtZW50LmJvZHkpLmNoaWxkcmVuKCkub24oJ21vdXNlb3ZlcicsIG51bGwsICQubm9vcClcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LmZvY3VzKClcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHRydWUpXG5cbiAgICAkKHRoaXMuX21lbnUpLnRvZ2dsZUNsYXNzKENMQVNTX05BTUVfU0hPVylcbiAgICAkKHBhcmVudClcbiAgICAgIC50b2dnbGVDbGFzcyhDTEFTU19OQU1FX1NIT1cpXG4gICAgICAudHJpZ2dlcigkLkV2ZW50KEVWRU5UX1NIT1dOLCByZWxhdGVkVGFyZ2V0KSlcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuZGlzYWJsZWQgfHwgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDTEFTU19OQU1FX0RJU0FCTEVEKSB8fCAhJCh0aGlzLl9tZW51KS5oYXNDbGFzcyhDTEFTU19OQU1FX1NIT1cpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgIH1cbiAgICBjb25zdCBoaWRlRXZlbnQgPSAkLkV2ZW50KEVWRU5UX0hJREUsIHJlbGF0ZWRUYXJnZXQpXG4gICAgY29uc3QgcGFyZW50ID0gRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAkKHBhcmVudCkudHJpZ2dlcihoaWRlRXZlbnQpXG5cbiAgICBpZiAoaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgJCh0aGlzLl9tZW51KS50b2dnbGVDbGFzcyhDTEFTU19OQU1FX1NIT1cpXG4gICAgJChwYXJlbnQpXG4gICAgICAudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKVxuICAgICAgLnRyaWdnZXIoJC5FdmVudChFVkVOVF9ISURERU4sIHJlbGF0ZWRUYXJnZXQpKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG4gICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRVZFTlRfS0VZKVxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsXG4gICAgdGhpcy5fbWVudSA9IG51bGxcbiAgICBpZiAodGhpcy5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgICB0aGlzLl9wb3BwZXIgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuX2luTmF2YmFyID0gdGhpcy5fZGV0ZWN0TmF2YmFyKClcbiAgICBpZiAodGhpcy5fcG9wcGVyICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuc2NoZWR1bGVVcGRhdGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgJCh0aGlzLl9lbGVtZW50KS5vbihFVkVOVF9DTElDSywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgdGhpcy50b2dnbGUoKVxuICAgIH0pXG4gIH1cblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLnRoaXMuY29uc3RydWN0b3IuRGVmYXVsdCxcbiAgICAgIC4uLiQodGhpcy5fZWxlbWVudCkuZGF0YSgpLFxuICAgICAgLi4uY29uZmlnXG4gICAgfVxuXG4gICAgVXRpbC50eXBlQ2hlY2tDb25maWcoXG4gICAgICBOQU1FLFxuICAgICAgY29uZmlnLFxuICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZVxuICAgIClcblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9nZXRNZW51RWxlbWVudCgpIHtcbiAgICBpZiAoIXRoaXMuX21lbnUpIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIHRoaXMuX21lbnUgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihTRUxFQ1RPUl9NRU5VKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbWVudVxuICB9XG5cbiAgX2dldFBsYWNlbWVudCgpIHtcbiAgICBjb25zdCAkcGFyZW50RHJvcGRvd24gPSAkKHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSlcbiAgICBsZXQgcGxhY2VtZW50ID0gUExBQ0VNRU5UX0JPVFRPTVxuXG4gICAgLy8gSGFuZGxlIGRyb3B1cFxuICAgIGlmICgkcGFyZW50RHJvcGRvd24uaGFzQ2xhc3MoQ0xBU1NfTkFNRV9EUk9QVVApKSB7XG4gICAgICBwbGFjZW1lbnQgPSAkKHRoaXMuX21lbnUpLmhhc0NsYXNzKENMQVNTX05BTUVfTUVOVVJJR0hUKVxuICAgICAgICA/IFBMQUNFTUVOVF9UT1BFTkRcbiAgICAgICAgOiBQTEFDRU1FTlRfVE9QXG4gICAgfSBlbHNlIGlmICgkcGFyZW50RHJvcGRvd24uaGFzQ2xhc3MoQ0xBU1NfTkFNRV9EUk9QUklHSFQpKSB7XG4gICAgICBwbGFjZW1lbnQgPSBQTEFDRU1FTlRfUklHSFRcbiAgICB9IGVsc2UgaWYgKCRwYXJlbnREcm9wZG93bi5oYXNDbGFzcyhDTEFTU19OQU1FX0RST1BMRUZUKSkge1xuICAgICAgcGxhY2VtZW50ID0gUExBQ0VNRU5UX0xFRlRcbiAgICB9IGVsc2UgaWYgKCQodGhpcy5fbWVudSkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9NRU5VUklHSFQpKSB7XG4gICAgICBwbGFjZW1lbnQgPSBQTEFDRU1FTlRfQk9UVE9NRU5EXG4gICAgfVxuICAgIHJldHVybiBwbGFjZW1lbnRcbiAgfVxuXG4gIF9kZXRlY3ROYXZiYXIoKSB7XG4gICAgcmV0dXJuICQodGhpcy5fZWxlbWVudCkuY2xvc2VzdCgnLm5hdmJhcicpLmxlbmd0aCA+IDBcbiAgfVxuXG4gIF9nZXRPZmZzZXQoKSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0ge31cblxuICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLm9mZnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb2Zmc2V0LmZuID0gKGRhdGEpID0+IHtcbiAgICAgICAgZGF0YS5vZmZzZXRzID0ge1xuICAgICAgICAgIC4uLmRhdGEub2Zmc2V0cyxcbiAgICAgICAgICAuLi50aGlzLl9jb25maWcub2Zmc2V0KGRhdGEub2Zmc2V0cywgdGhpcy5fZWxlbWVudCkgfHwge31cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9mZnNldC5vZmZzZXQgPSB0aGlzLl9jb25maWcub2Zmc2V0XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldFxuICB9XG5cbiAgX2dldFBvcHBlckNvbmZpZygpIHtcbiAgICBjb25zdCBwb3BwZXJDb25maWcgPSB7XG4gICAgICBwbGFjZW1lbnQ6IHRoaXMuX2dldFBsYWNlbWVudCgpLFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIG9mZnNldDogdGhpcy5fZ2V0T2Zmc2V0KCksXG4gICAgICAgIGZsaXA6IHtcbiAgICAgICAgICBlbmFibGVkOiB0aGlzLl9jb25maWcuZmxpcFxuICAgICAgICB9LFxuICAgICAgICBwcmV2ZW50T3ZlcmZsb3c6IHtcbiAgICAgICAgICBib3VuZGFyaWVzRWxlbWVudDogdGhpcy5fY29uZmlnLmJvdW5kYXJ5XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEaXNhYmxlIFBvcHBlci5qcyBpZiB3ZSBoYXZlIGEgc3RhdGljIGRpc3BsYXlcbiAgICBpZiAodGhpcy5fY29uZmlnLmRpc3BsYXkgPT09ICdzdGF0aWMnKSB7XG4gICAgICBwb3BwZXJDb25maWcubW9kaWZpZXJzLmFwcGx5U3R5bGUgPSB7XG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnBvcHBlckNvbmZpZyxcbiAgICAgIC4uLnRoaXMuX2NvbmZpZy5wb3BwZXJDb25maWdcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogbnVsbFxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBEcm9wZG93bih0aGlzLCBfY29uZmlnKVxuICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIF9jbGVhck1lbnVzKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50ICYmIChldmVudC53aGljaCA9PT0gUklHSFRfTU9VU0VfQlVUVE9OX1dISUNIIHx8XG4gICAgICBldmVudC50eXBlID09PSAna2V5dXAnICYmIGV2ZW50LndoaWNoICE9PSBUQUJfS0VZQ09ERSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZXMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfREFUQV9UT0dHTEUpKVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRvZ2dsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0b2dnbGVzW2ldKVxuICAgICAgY29uc3QgY29udGV4dCA9ICQodG9nZ2xlc1tpXSkuZGF0YShEQVRBX0tFWSlcbiAgICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRvZ2dsZXNbaV1cbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50LnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldC5jbGlja0V2ZW50ID0gZXZlbnRcbiAgICAgIH1cblxuICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRyb3Bkb3duTWVudSA9IGNvbnRleHQuX21lbnVcbiAgICAgIGlmICghJChwYXJlbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50ICYmIChldmVudC50eXBlID09PSAnY2xpY2snICYmXG4gICAgICAgICAgL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkgfHwgZXZlbnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldmVudC53aGljaCA9PT0gVEFCX0tFWUNPREUpICYmXG4gICAgICAgICAgJC5jb250YWlucyhwYXJlbnQsIGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgaGlkZUV2ZW50ID0gJC5FdmVudChFVkVOVF9ISURFLCByZWxhdGVkVGFyZ2V0KVxuICAgICAgJChwYXJlbnQpLnRyaWdnZXIoaGlkZUV2ZW50KVxuICAgICAgaWYgKGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgcmVtb3ZlIHRoZSBleHRyYVxuICAgICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB3ZSBhZGRlZCBmb3IgaU9TIHN1cHBvcnRcbiAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgJChkb2N1bWVudC5ib2R5KS5jaGlsZHJlbigpLm9mZignbW91c2VvdmVyJywgbnVsbCwgJC5ub29wKVxuICAgICAgfVxuXG4gICAgICB0b2dnbGVzW2ldLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXG5cbiAgICAgIGlmIChjb250ZXh0Ll9wb3BwZXIpIHtcbiAgICAgICAgY29udGV4dC5fcG9wcGVyLmRlc3Ryb3koKVxuICAgICAgfVxuXG4gICAgICAkKGRyb3Bkb3duTWVudSkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKVxuICAgICAgJChwYXJlbnQpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX1NIT1cpXG4gICAgICAgIC50cmlnZ2VyKCQuRXZlbnQoRVZFTlRfSElEREVOLCByZWxhdGVkVGFyZ2V0KSlcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgX2dldFBhcmVudEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICBsZXQgcGFyZW50XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudClcblxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50IHx8IGVsZW1lbnQucGFyZW50Tm9kZVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbiAgc3RhdGljIF9kYXRhQXBpS2V5ZG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICAvLyBJZiBub3QgaW5wdXQvdGV4dGFyZWE6XG4gICAgLy8gIC0gQW5kIG5vdCBhIGtleSBpbiBSRUdFWFBfS0VZRE9XTiA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgLy8gSWYgaW5wdXQvdGV4dGFyZWE6XG4gICAgLy8gIC0gSWYgc3BhY2Uga2V5ID0+IG5vdCBhIGRyb3Bkb3duIGNvbW1hbmRcbiAgICAvLyAgLSBJZiBrZXkgaXMgb3RoZXIgdGhhbiBlc2NhcGVcbiAgICAvLyAgICAtIElmIGtleSBpcyBub3QgdXAgb3IgZG93biA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgLy8gICAgLSBJZiB0cmlnZ2VyIGluc2lkZSB0aGUgbWVudSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgaWYgKC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpXG4gICAgICA/IGV2ZW50LndoaWNoID09PSBTUEFDRV9LRVlDT0RFIHx8IGV2ZW50LndoaWNoICE9PSBFU0NBUEVfS0VZQ09ERSAmJlxuICAgICAgKGV2ZW50LndoaWNoICE9PSBBUlJPV19ET1dOX0tFWUNPREUgJiYgZXZlbnQud2hpY2ggIT09IEFSUk9XX1VQX0tFWUNPREUgfHxcbiAgICAgICAgJChldmVudC50YXJnZXQpLmNsb3Nlc3QoU0VMRUNUT1JfTUVOVSkubGVuZ3RoKSA6ICFSRUdFWFBfS0VZRE9XTi50ZXN0KGV2ZW50LndoaWNoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgJCh0aGlzKS5oYXNDbGFzcyhDTEFTU19OQU1FX0RJU0FCTEVEKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50ICAgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodGhpcylcbiAgICBjb25zdCBpc0FjdGl2ZSA9ICQocGFyZW50KS5oYXNDbGFzcyhDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBpZiAoIWlzQWN0aXZlICYmIGV2ZW50LndoaWNoID09PSBFU0NBUEVfS0VZQ09ERSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICBpZiAoIWlzQWN0aXZlIHx8IGlzQWN0aXZlICYmIChldmVudC53aGljaCA9PT0gRVNDQVBFX0tFWUNPREUgfHwgZXZlbnQud2hpY2ggPT09IFNQQUNFX0tFWUNPREUpKSB7XG4gICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEVTQ0FQRV9LRVlDT0RFKSB7XG4gICAgICAgICQocGFyZW50LnF1ZXJ5U2VsZWN0b3IoU0VMRUNUT1JfREFUQV9UT0dHTEUpKS50cmlnZ2VyKCdmb2N1cycpXG4gICAgICB9XG5cbiAgICAgICQodGhpcykudHJpZ2dlcignY2xpY2snKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaXRlbXMgPSBbXS5zbGljZS5jYWxsKHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX1ZJU0lCTEVfSVRFTVMpKVxuICAgICAgLmZpbHRlcigoaXRlbSkgPT4gJChpdGVtKS5pcygnOnZpc2libGUnKSlcblxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBpbmRleCA9IGl0ZW1zLmluZGV4T2YoZXZlbnQudGFyZ2V0KVxuXG4gICAgaWYgKGV2ZW50LndoaWNoID09PSBBUlJPV19VUF9LRVlDT0RFICYmIGluZGV4ID4gMCkgeyAvLyBVcFxuICAgICAgaW5kZXgtLVxuICAgIH1cblxuICAgIGlmIChldmVudC53aGljaCA9PT0gQVJST1dfRE9XTl9LRVlDT0RFICYmIGluZGV4IDwgaXRlbXMubGVuZ3RoIC0gMSkgeyAvLyBEb3duXG4gICAgICBpbmRleCsrXG4gICAgfVxuXG4gICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgaW5kZXggPSAwXG4gICAgfVxuXG4gICAgaXRlbXNbaW5kZXhdLmZvY3VzKClcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQoZG9jdW1lbnQpXG4gIC5vbihFVkVOVF9LRVlET1dOX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgRHJvcGRvd24uX2RhdGFBcGlLZXlkb3duSGFuZGxlcilcbiAgLm9uKEVWRU5UX0tFWURPV05fREFUQV9BUEksIFNFTEVDVE9SX01FTlUsIERyb3Bkb3duLl9kYXRhQXBpS2V5ZG93bkhhbmRsZXIpXG4gIC5vbihgJHtFVkVOVF9DTElDS19EQVRBX0FQSX0gJHtFVkVOVF9LRVlVUF9EQVRBX0FQSX1gLCBEcm9wZG93bi5fY2xlYXJNZW51cylcbiAgLm9uKEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgRHJvcGRvd24uX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGhpcyksICd0b2dnbGUnKVxuICB9KVxuICAub24oRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0ZPUk1fQ0hJTEQsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICB9KVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdID0gRHJvcGRvd24uX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IERyb3Bkb3duXG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNS4wKTogbW9kYWwuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSAgICAgICAgICAgICAgID0gJ21vZGFsJ1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgID0gJzQuNS4wJ1xuY29uc3QgREFUQV9LRVkgICAgICAgICAgID0gJ2JzLm1vZGFsJ1xuY29uc3QgRVZFTlRfS0VZICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSAgICAgICA9ICcuZGF0YS1hcGknXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5jb25zdCBFU0NBUEVfS0VZQ09ERSAgICAgPSAyNyAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBFc2NhcGUgKEVzYykga2V5XG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGJhY2tkcm9wIDogdHJ1ZSxcbiAga2V5Ym9hcmQgOiB0cnVlLFxuICBmb2N1cyAgICA6IHRydWUsXG4gIHNob3cgICAgIDogdHJ1ZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYmFja2Ryb3AgOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gIGtleWJvYXJkIDogJ2Jvb2xlYW4nLFxuICBmb2N1cyAgICA6ICdib29sZWFuJyxcbiAgc2hvdyAgICAgOiAnYm9vbGVhbidcbn1cblxuY29uc3QgRVZFTlRfSElERSAgICAgICAgICAgICAgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJREVfUFJFVkVOVEVEICAgID0gYGhpZGVQcmV2ZW50ZWQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gICAgICAgICAgICA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XICAgICAgICAgICAgICA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gICAgICAgICAgICAgPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9GT0NVU0lOICAgICAgICAgICA9IGBmb2N1c2luJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUkVTSVpFICAgICAgICAgICAgPSBgcmVzaXplJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfRElTTUlTUyAgICAgPSBgY2xpY2suZGlzbWlzcyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV05fRElTTUlTUyAgID0gYGtleWRvd24uZGlzbWlzcyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFVVBfRElTTUlTUyAgID0gYG1vdXNldXAuZGlzbWlzcyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX01PVVNFRE9XTl9ESVNNSVNTID0gYG1vdXNlZG93bi5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0tfREFUQV9BUEkgICAgPSBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfU0NST0xMQUJMRSAgICAgICAgID0gJ21vZGFsLWRpYWxvZy1zY3JvbGxhYmxlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TQ1JPTExCQVJfTUVBU1VSRVIgPSAnbW9kYWwtc2Nyb2xsYmFyLW1lYXN1cmUnXG5jb25zdCBDTEFTU19OQU1FX0JBQ0tEUk9QICAgICAgICAgICA9ICdtb2RhbC1iYWNrZHJvcCdcbmNvbnN0IENMQVNTX05BTUVfT1BFTiAgICAgICAgICAgICAgID0gJ21vZGFsLW9wZW4nXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgICAgICAgICAgICAgICA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XICAgICAgICAgICAgICAgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfU1RBVElDICAgICAgICAgICAgID0gJ21vZGFsLXN0YXRpYydcblxuY29uc3QgU0VMRUNUT1JfRElBTE9HICAgICAgICAgPSAnLm1vZGFsLWRpYWxvZydcbmNvbnN0IFNFTEVDVE9SX01PREFMX0JPRFkgICAgID0gJy5tb2RhbC1ib2R5J1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgICAgPSAnW2RhdGEtdG9nZ2xlPVwibW9kYWxcIl0nXG5jb25zdCBTRUxFQ1RPUl9EQVRBX0RJU01JU1MgICA9ICdbZGF0YS1kaXNtaXNzPVwibW9kYWxcIl0nXG5jb25zdCBTRUxFQ1RPUl9GSVhFRF9DT05URU5UICA9ICcuZml4ZWQtdG9wLCAuZml4ZWQtYm90dG9tLCAuaXMtZml4ZWQsIC5zdGlja3ktdG9wJ1xuY29uc3QgU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQgPSAnLnN0aWNreS10b3AnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBNb2RhbCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHRoaXMuX2NvbmZpZyAgICAgICAgICAgICAgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX2VsZW1lbnQgICAgICAgICAgICAgPSBlbGVtZW50XG4gICAgdGhpcy5fZGlhbG9nICAgICAgICAgICAgICA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihTRUxFQ1RPUl9ESUFMT0cpXG4gICAgdGhpcy5fYmFja2Ryb3AgICAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9pc1Nob3duICAgICAgICAgICAgID0gZmFsc2VcbiAgICB0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyAgID0gZmFsc2VcbiAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gZmFsc2VcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgICAgID0gZmFsc2VcbiAgICB0aGlzLl9zY3JvbGxiYXJXaWR0aCAgICAgID0gMFxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUocmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLl9pc1Nob3duID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3cocmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIHNob3cocmVsYXRlZFRhcmdldCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GQURFKSkge1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFdmVudCA9ICQuRXZlbnQoRVZFTlRfU0hPVywge1xuICAgICAgcmVsYXRlZFRhcmdldFxuICAgIH0pXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2hvd0V2ZW50KVxuXG4gICAgaWYgKHRoaXMuX2lzU2hvd24gfHwgc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1Nob3duID0gdHJ1ZVxuXG4gICAgdGhpcy5fY2hlY2tTY3JvbGxiYXIoKVxuICAgIHRoaXMuX3NldFNjcm9sbGJhcigpXG5cbiAgICB0aGlzLl9hZGp1c3REaWFsb2coKVxuXG4gICAgdGhpcy5fc2V0RXNjYXBlRXZlbnQoKVxuICAgIHRoaXMuX3NldFJlc2l6ZUV2ZW50KClcblxuICAgICQodGhpcy5fZWxlbWVudCkub24oXG4gICAgICBFVkVOVF9DTElDS19ESVNNSVNTLFxuICAgICAgU0VMRUNUT1JfREFUQV9ESVNNSVNTLFxuICAgICAgKGV2ZW50KSA9PiB0aGlzLmhpZGUoZXZlbnQpXG4gICAgKVxuXG4gICAgJCh0aGlzLl9kaWFsb2cpLm9uKEVWRU5UX01PVVNFRE9XTl9ESVNNSVNTLCAoKSA9PiB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uZShFVkVOVF9NT1VTRVVQX0RJU01JU1MsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoJChldmVudC50YXJnZXQpLmlzKHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICAgICAgdGhpcy5faWdub3JlQmFja2Ryb3BDbGljayA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgdGhpcy5fc2hvd0JhY2tkcm9wKCgpID0+IHRoaXMuX3Nob3dFbGVtZW50KHJlbGF0ZWRUYXJnZXQpKVxuICB9XG5cbiAgaGlkZShldmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIGlmICghdGhpcy5faXNTaG93biB8fCB0aGlzLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9ICQuRXZlbnQoRVZFTlRfSElERSlcblxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihoaWRlRXZlbnQpXG5cbiAgICBpZiAoIXRoaXMuX2lzU2hvd24gfHwgaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9pc1Nob3duID0gZmFsc2VcbiAgICBjb25zdCB0cmFuc2l0aW9uID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDTEFTU19OQU1FX0ZBREUpXG5cbiAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gdHJ1ZVxuICAgIH1cblxuICAgIHRoaXMuX3NldEVzY2FwZUV2ZW50KClcbiAgICB0aGlzLl9zZXRSZXNpemVFdmVudCgpXG5cbiAgICAkKGRvY3VtZW50KS5vZmYoRVZFTlRfRk9DVVNJTilcblxuICAgICQodGhpcy5fZWxlbWVudCkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRVZFTlRfQ0xJQ0tfRElTTUlTUylcbiAgICAkKHRoaXMuX2RpYWxvZykub2ZmKEVWRU5UX01PVVNFRE9XTl9ESVNNSVNTKVxuXG4gICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiAgPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCAoZXZlbnQpID0+IHRoaXMuX2hpZGVNb2RhbChldmVudCkpXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hpZGVNb2RhbCgpXG4gICAgfVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBbd2luZG93LCB0aGlzLl9lbGVtZW50LCB0aGlzLl9kaWFsb2ddXG4gICAgICAuZm9yRWFjaCgoaHRtbEVsZW1lbnQpID0+ICQoaHRtbEVsZW1lbnQpLm9mZihFVkVOVF9LRVkpKVxuXG4gICAgLyoqXG4gICAgICogYGRvY3VtZW50YCBoYXMgMiBldmVudHMgYEVWRU5UX0ZPQ1VTSU5gIGFuZCBgRVZFTlRfQ0xJQ0tfREFUQV9BUElgXG4gICAgICogRG8gbm90IG1vdmUgYGRvY3VtZW50YCBpbiBgaHRtbEVsZW1lbnRzYCBhcnJheVxuICAgICAqIEl0IHdpbGwgcmVtb3ZlIGBFVkVOVF9DTElDS19EQVRBX0FQSWAgZXZlbnQgdGhhdCBzaG91bGQgcmVtYWluXG4gICAgICovXG4gICAgJChkb2N1bWVudCkub2ZmKEVWRU5UX0ZPQ1VTSU4pXG5cbiAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG5cbiAgICB0aGlzLl9jb25maWcgICAgICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2VsZW1lbnQgICAgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5fZGlhbG9nICAgICAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9iYWNrZHJvcCAgICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2lzU2hvd24gICAgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgICA9IG51bGxcbiAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gbnVsbFxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyAgICAgPSBudWxsXG4gICAgdGhpcy5fc2Nyb2xsYmFyV2lkdGggICAgICA9IG51bGxcbiAgfVxuXG4gIGhhbmRsZVVwZGF0ZSgpIHtcbiAgICB0aGlzLl9hZGp1c3REaWFsb2coKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLmNvbmZpZ1xuICAgIH1cbiAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKCkge1xuICAgIGlmICh0aGlzLl9jb25maWcuYmFja2Ryb3AgPT09ICdzdGF0aWMnKSB7XG4gICAgICBjb25zdCBoaWRlRXZlbnRQcmV2ZW50ZWQgPSAkLkV2ZW50KEVWRU5UX0hJREVfUFJFVkVOVEVEKVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoaGlkZUV2ZW50UHJldmVudGVkKVxuICAgICAgaWYgKGhpZGVFdmVudFByZXZlbnRlZC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TVEFUSUMpXG5cbiAgICAgIGNvbnN0IG1vZGFsVHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9lbGVtZW50KVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NUQVRJQylcbiAgICAgIH0pXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZChtb2RhbFRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhpZGUoKVxuICAgIH1cbiAgfVxuXG4gIF9zaG93RWxlbWVudChyZWxhdGVkVGFyZ2V0KSB7XG4gICAgY29uc3QgdHJhbnNpdGlvbiA9ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GQURFKVxuICAgIGNvbnN0IG1vZGFsQm9keSA9IHRoaXMuX2RpYWxvZyA/IHRoaXMuX2RpYWxvZy5xdWVyeVNlbGVjdG9yKFNFTEVDVE9SX01PREFMX0JPRFkpIDogbnVsbFxuXG4gICAgaWYgKCF0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUgfHxcbiAgICAgICAgdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgLy8gRG9uJ3QgbW92ZSBtb2RhbCdzIERPTSBwb3NpdGlvblxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLW1vZGFsJywgdHJ1ZSlcblxuICAgIGlmICgkKHRoaXMuX2RpYWxvZykuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9TQ1JPTExBQkxFKSAmJiBtb2RhbEJvZHkpIHtcbiAgICAgIG1vZGFsQm9keS5zY3JvbGxUb3AgPSAwXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2Nyb2xsVG9wID0gMFxuICAgIH1cblxuICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICBVdGlsLnJlZmxvdyh0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgICQodGhpcy5fZWxlbWVudCkuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5mb2N1cykge1xuICAgICAgdGhpcy5fZW5mb3JjZUZvY3VzKClcbiAgICB9XG5cbiAgICBjb25zdCBzaG93bkV2ZW50ID0gJC5FdmVudChFVkVOVF9TSE9XTiwge1xuICAgICAgcmVsYXRlZFRhcmdldFxuICAgIH0pXG5cbiAgICBjb25zdCB0cmFuc2l0aW9uQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmZvY3VzKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgICAgfVxuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93bkV2ZW50KVxuICAgIH1cblxuICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9kaWFsb2cpXG5cbiAgICAgICQodGhpcy5fZGlhbG9nKVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIHRyYW5zaXRpb25Db21wbGV0ZSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNpdGlvbkNvbXBsZXRlKClcbiAgICB9XG4gIH1cblxuICBfZW5mb3JjZUZvY3VzKCkge1xuICAgICQoZG9jdW1lbnQpXG4gICAgICAub2ZmKEVWRU5UX0ZPQ1VTSU4pIC8vIEd1YXJkIGFnYWluc3QgaW5maW5pdGUgZm9jdXMgbG9vcFxuICAgICAgLm9uKEVWRU5UX0ZPQ1VTSU4sIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZG9jdW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJlxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudCAhPT0gZXZlbnQudGFyZ2V0ICYmXG4gICAgICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLmhhcyhldmVudC50YXJnZXQpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG5cbiAgX3NldEVzY2FwZUV2ZW50KCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duKSB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEVWRU5UX0tFWURPV05fRElTTUlTUywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9jb25maWcua2V5Ym9hcmQgJiYgZXZlbnQud2hpY2ggPT09IEVTQ0FQRV9LRVlDT0RFKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX2NvbmZpZy5rZXlib2FyZCAmJiBldmVudC53aGljaCA9PT0gRVNDQVBFX0tFWUNPREUpIHtcbiAgICAgICAgICB0aGlzLl90cmlnZ2VyQmFja2Ryb3BUcmFuc2l0aW9uKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKCF0aGlzLl9pc1Nob3duKSB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9mZihFVkVOVF9LRVlET1dOX0RJU01JU1MpXG4gICAgfVxuICB9XG5cbiAgX3NldFJlc2l6ZUV2ZW50KCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duKSB7XG4gICAgICAkKHdpbmRvdykub24oRVZFTlRfUkVTSVpFLCAoZXZlbnQpID0+IHRoaXMuaGFuZGxlVXBkYXRlKGV2ZW50KSlcbiAgICB9IGVsc2Uge1xuICAgICAgJCh3aW5kb3cpLm9mZihFVkVOVF9SRVNJWkUpXG4gICAgfVxuICB9XG5cbiAgX2hpZGVNb2RhbCgpIHtcbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKVxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLW1vZGFsJylcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBmYWxzZVxuICAgIHRoaXMuX3Nob3dCYWNrZHJvcCgoKSA9PiB7XG4gICAgICAkKGRvY3VtZW50LmJvZHkpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfT1BFTilcbiAgICAgIHRoaXMuX3Jlc2V0QWRqdXN0bWVudHMoKVxuICAgICAgdGhpcy5fcmVzZXRTY3JvbGxiYXIoKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKEVWRU5UX0hJRERFTilcbiAgICB9KVxuICB9XG5cbiAgX3JlbW92ZUJhY2tkcm9wKCkge1xuICAgIGlmICh0aGlzLl9iYWNrZHJvcCkge1xuICAgICAgJCh0aGlzLl9iYWNrZHJvcCkucmVtb3ZlKClcbiAgICAgIHRoaXMuX2JhY2tkcm9wID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIF9zaG93QmFja2Ryb3AoY2FsbGJhY2spIHtcbiAgICBjb25zdCBhbmltYXRlID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDTEFTU19OQU1FX0ZBREUpXG4gICAgICA/IENMQVNTX05BTUVfRkFERSA6ICcnXG5cbiAgICBpZiAodGhpcy5faXNTaG93biAmJiB0aGlzLl9jb25maWcuYmFja2Ryb3ApIHtcbiAgICAgIHRoaXMuX2JhY2tkcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIHRoaXMuX2JhY2tkcm9wLmNsYXNzTmFtZSA9IENMQVNTX05BTUVfQkFDS0RST1BcblxuICAgICAgaWYgKGFuaW1hdGUpIHtcbiAgICAgICAgdGhpcy5fYmFja2Ryb3AuY2xhc3NMaXN0LmFkZChhbmltYXRlKVxuICAgICAgfVxuXG4gICAgICAkKHRoaXMuX2JhY2tkcm9wKS5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEVWRU5UX0NMSUNLX0RJU01JU1MsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5faWdub3JlQmFja2Ryb3BDbGljaykge1xuICAgICAgICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBmYWxzZVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3RyaWdnZXJCYWNrZHJvcFRyYW5zaXRpb24oKVxuICAgICAgfSlcblxuICAgICAgaWYgKGFuaW1hdGUpIHtcbiAgICAgICAgVXRpbC5yZWZsb3codGhpcy5fYmFja2Ryb3ApXG4gICAgICB9XG5cbiAgICAgICQodGhpcy5fYmFja2Ryb3ApLmFkZENsYXNzKENMQVNTX05BTUVfU0hPVylcblxuICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKCFhbmltYXRlKSB7XG4gICAgICAgIGNhbGxiYWNrKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9iYWNrZHJvcClcblxuICAgICAgJCh0aGlzLl9iYWNrZHJvcClcbiAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjYWxsYmFjaylcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSBpZiAoIXRoaXMuX2lzU2hvd24gJiYgdGhpcy5fYmFja2Ryb3ApIHtcbiAgICAgICQodGhpcy5fYmFja2Ryb3ApLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfU0hPVylcblxuICAgICAgY29uc3QgY2FsbGJhY2tSZW1vdmUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3JlbW92ZUJhY2tkcm9wKClcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfRkFERSkpIHtcbiAgICAgICAgY29uc3QgYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2JhY2tkcm9wKVxuXG4gICAgICAgICQodGhpcy5fYmFja2Ryb3ApXG4gICAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjYWxsYmFja1JlbW92ZSlcbiAgICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFja1JlbW92ZSgpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soKVxuICAgIH1cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gdGhlIGZvbGxvd2luZyBtZXRob2RzIGFyZSB1c2VkIHRvIGhhbmRsZSBvdmVyZmxvd2luZyBtb2RhbHNcbiAgLy8gdG9kbyAoZmF0KTogdGhlc2Ugc2hvdWxkIHByb2JhYmx5IGJlIHJlZmFjdG9yZWQgb3V0IG9mIG1vZGFsLmpzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBfYWRqdXN0RGlhbG9nKCkge1xuICAgIGNvbnN0IGlzTW9kYWxPdmVyZmxvd2luZyA9XG4gICAgICB0aGlzLl9lbGVtZW50LnNjcm9sbEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcblxuICAgIGlmICghdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgJiYgaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdMZWZ0ID0gYCR7dGhpcy5fc2Nyb2xsYmFyV2lkdGh9cHhgXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzQm9keU92ZXJmbG93aW5nICYmICFpc01vZGFsT3ZlcmZsb3dpbmcpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7dGhpcy5fc2Nyb2xsYmFyV2lkdGh9cHhgXG4gICAgfVxuICB9XG5cbiAgX3Jlc2V0QWRqdXN0bWVudHMoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nTGVmdCA9ICcnXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJ1xuICB9XG5cbiAgX2NoZWNrU2Nyb2xsYmFyKCkge1xuICAgIGNvbnN0IHJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgdGhpcy5faXNCb2R5T3ZlcmZsb3dpbmcgPSBNYXRoLnJvdW5kKHJlY3QubGVmdCArIHJlY3QucmlnaHQpIDwgd2luZG93LmlubmVyV2lkdGhcbiAgICB0aGlzLl9zY3JvbGxiYXJXaWR0aCA9IHRoaXMuX2dldFNjcm9sbGJhcldpZHRoKClcbiAgfVxuXG4gIF9zZXRTY3JvbGxiYXIoKSB7XG4gICAgaWYgKHRoaXMuX2lzQm9keU92ZXJmbG93aW5nKSB7XG4gICAgICAvLyBOb3RlOiBET01Ob2RlLnN0eWxlLnBhZGRpbmdSaWdodCByZXR1cm5zIHRoZSBhY3R1YWwgdmFsdWUgb3IgJycgaWYgbm90IHNldFxuICAgICAgLy8gICB3aGlsZSAkKERPTU5vZGUpLmNzcygncGFkZGluZy1yaWdodCcpIHJldHVybnMgdGhlIGNhbGN1bGF0ZWQgdmFsdWUgb3IgMCBpZiBub3Qgc2V0XG4gICAgICBjb25zdCBmaXhlZENvbnRlbnQgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfRklYRURfQ09OVEVOVCkpXG4gICAgICBjb25zdCBzdGlja3lDb250ZW50ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SX1NUSUNLWV9DT05URU5UKSlcblxuICAgICAgLy8gQWRqdXN0IGZpeGVkIGNvbnRlbnQgcGFkZGluZ1xuICAgICAgJChmaXhlZENvbnRlbnQpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdHVhbFBhZGRpbmcgPSBlbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodFxuICAgICAgICBjb25zdCBjYWxjdWxhdGVkUGFkZGluZyA9ICQoZWxlbWVudCkuY3NzKCdwYWRkaW5nLXJpZ2h0JylcbiAgICAgICAgJChlbGVtZW50KVxuICAgICAgICAgIC5kYXRhKCdwYWRkaW5nLXJpZ2h0JywgYWN0dWFsUGFkZGluZylcbiAgICAgICAgICAuY3NzKCdwYWRkaW5nLXJpZ2h0JywgYCR7cGFyc2VGbG9hdChjYWxjdWxhdGVkUGFkZGluZykgKyB0aGlzLl9zY3JvbGxiYXJXaWR0aH1weGApXG4gICAgICB9KVxuXG4gICAgICAvLyBBZGp1c3Qgc3RpY2t5IGNvbnRlbnQgbWFyZ2luXG4gICAgICAkKHN0aWNreUNvbnRlbnQpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdHVhbE1hcmdpbiA9IGVsZW1lbnQuc3R5bGUubWFyZ2luUmlnaHRcbiAgICAgICAgY29uc3QgY2FsY3VsYXRlZE1hcmdpbiA9ICQoZWxlbWVudCkuY3NzKCdtYXJnaW4tcmlnaHQnKVxuICAgICAgICAkKGVsZW1lbnQpXG4gICAgICAgICAgLmRhdGEoJ21hcmdpbi1yaWdodCcsIGFjdHVhbE1hcmdpbilcbiAgICAgICAgICAuY3NzKCdtYXJnaW4tcmlnaHQnLCBgJHtwYXJzZUZsb2F0KGNhbGN1bGF0ZWRNYXJnaW4pIC0gdGhpcy5fc2Nyb2xsYmFyV2lkdGh9cHhgKVxuICAgICAgfSlcblxuICAgICAgLy8gQWRqdXN0IGJvZHkgcGFkZGluZ1xuICAgICAgY29uc3QgYWN0dWFsUGFkZGluZyA9IGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0XG4gICAgICBjb25zdCBjYWxjdWxhdGVkUGFkZGluZyA9ICQoZG9jdW1lbnQuYm9keSkuY3NzKCdwYWRkaW5nLXJpZ2h0JylcbiAgICAgICQoZG9jdW1lbnQuYm9keSlcbiAgICAgICAgLmRhdGEoJ3BhZGRpbmctcmlnaHQnLCBhY3R1YWxQYWRkaW5nKVxuICAgICAgICAuY3NzKCdwYWRkaW5nLXJpZ2h0JywgYCR7cGFyc2VGbG9hdChjYWxjdWxhdGVkUGFkZGluZykgKyB0aGlzLl9zY3JvbGxiYXJXaWR0aH1weGApXG4gICAgfVxuXG4gICAgJChkb2N1bWVudC5ib2R5KS5hZGRDbGFzcyhDTEFTU19OQU1FX09QRU4pXG4gIH1cblxuICBfcmVzZXRTY3JvbGxiYXIoKSB7XG4gICAgLy8gUmVzdG9yZSBmaXhlZCBjb250ZW50IHBhZGRpbmdcbiAgICBjb25zdCBmaXhlZENvbnRlbnQgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfRklYRURfQ09OVEVOVCkpXG4gICAgJChmaXhlZENvbnRlbnQpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBwYWRkaW5nID0gJChlbGVtZW50KS5kYXRhKCdwYWRkaW5nLXJpZ2h0JylcbiAgICAgICQoZWxlbWVudCkucmVtb3ZlRGF0YSgncGFkZGluZy1yaWdodCcpXG4gICAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9IHBhZGRpbmcgPyBwYWRkaW5nIDogJydcbiAgICB9KVxuXG4gICAgLy8gUmVzdG9yZSBzdGlja3kgY29udGVudFxuICAgIGNvbnN0IGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAke1NFTEVDVE9SX1NUSUNLWV9DT05URU5UfWApKVxuICAgICQoZWxlbWVudHMpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBtYXJnaW4gPSAkKGVsZW1lbnQpLmRhdGEoJ21hcmdpbi1yaWdodCcpXG4gICAgICBpZiAodHlwZW9mIG1hcmdpbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgJChlbGVtZW50KS5jc3MoJ21hcmdpbi1yaWdodCcsIG1hcmdpbikucmVtb3ZlRGF0YSgnbWFyZ2luLXJpZ2h0JylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gUmVzdG9yZSBib2R5IHBhZGRpbmdcbiAgICBjb25zdCBwYWRkaW5nID0gJChkb2N1bWVudC5ib2R5KS5kYXRhKCdwYWRkaW5nLXJpZ2h0JylcbiAgICAkKGRvY3VtZW50LmJvZHkpLnJlbW92ZURhdGEoJ3BhZGRpbmctcmlnaHQnKVxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gcGFkZGluZyA/IHBhZGRpbmcgOiAnJ1xuICB9XG5cbiAgX2dldFNjcm9sbGJhcldpZHRoKCkgeyAvLyB0aHggZC53YWxzaFxuICAgIGNvbnN0IHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2Nyb2xsRGl2LmNsYXNzTmFtZSA9IENMQVNTX05BTUVfU0NST0xMQkFSX01FQVNVUkVSXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxEaXYpXG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSBzY3JvbGxEaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGhcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdilcbiAgICByZXR1cm4gc2Nyb2xsYmFyV2lkdGhcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZywgcmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnID0ge1xuICAgICAgICAuLi5EZWZhdWx0LFxuICAgICAgICAuLi4kKHRoaXMpLmRhdGEoKSxcbiAgICAgICAgLi4udHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge31cbiAgICAgIH1cblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgTW9kYWwodGhpcywgX2NvbmZpZylcbiAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXShyZWxhdGVkVGFyZ2V0KVxuICAgICAgfSBlbHNlIGlmIChfY29uZmlnLnNob3cpIHtcbiAgICAgICAgZGF0YS5zaG93KHJlbGF0ZWRUYXJnZXQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQoZG9jdW1lbnQpLm9uKEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGxldCB0YXJnZXRcbiAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQodGhpcylcblxuICBpZiAoc2VsZWN0b3IpIHtcbiAgICB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxuICB9XG5cbiAgY29uc3QgY29uZmlnID0gJCh0YXJnZXQpLmRhdGEoREFUQV9LRVkpXG4gICAgPyAndG9nZ2xlJyA6IHtcbiAgICAgIC4uLiQodGFyZ2V0KS5kYXRhKCksXG4gICAgICAuLi4kKHRoaXMpLmRhdGEoKVxuICAgIH1cblxuICBpZiAodGhpcy50YWdOYW1lID09PSAnQScgfHwgdGhpcy50YWdOYW1lID09PSAnQVJFQScpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBjb25zdCAkdGFyZ2V0ID0gJCh0YXJnZXQpLm9uZShFVkVOVF9TSE9XLCAoc2hvd0V2ZW50KSA9PiB7XG4gICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgLy8gT25seSByZWdpc3RlciBmb2N1cyByZXN0b3JlciBpZiBtb2RhbCB3aWxsIGFjdHVhbGx5IGdldCBzaG93blxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgJHRhcmdldC5vbmUoRVZFTlRfSElEREVOLCAoKSA9PiB7XG4gICAgICBpZiAoJCh0aGlzKS5pcygnOnZpc2libGUnKSkge1xuICAgICAgICB0aGlzLmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIE1vZGFsLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRhcmdldCksIGNvbmZpZywgdGhpcylcbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gPSBNb2RhbC5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gTW9kYWxcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gTW9kYWwuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC41LjApOiB0b29scy9zYW5pdGl6ZXIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IHVyaUF0dHJzID0gW1xuICAnYmFja2dyb3VuZCcsXG4gICdjaXRlJyxcbiAgJ2hyZWYnLFxuICAnaXRlbXR5cGUnLFxuICAnbG9uZ2Rlc2MnLFxuICAncG9zdGVyJyxcbiAgJ3NyYycsXG4gICd4bGluazpocmVmJ1xuXVxuXG5jb25zdCBBUklBX0FUVFJJQlVURV9QQVRURVJOID0gL15hcmlhLVtcXHctXSokL2lcblxuZXhwb3J0IGNvbnN0IERlZmF1bHRXaGl0ZWxpc3QgPSB7XG4gIC8vIEdsb2JhbCBhdHRyaWJ1dGVzIGFsbG93ZWQgb24gYW55IHN1cHBsaWVkIGVsZW1lbnQgYmVsb3cuXG4gICcqJzogWydjbGFzcycsICdkaXInLCAnaWQnLCAnbGFuZycsICdyb2xlJywgQVJJQV9BVFRSSUJVVEVfUEFUVEVSTl0sXG4gIGE6IFsndGFyZ2V0JywgJ2hyZWYnLCAndGl0bGUnLCAncmVsJ10sXG4gIGFyZWE6IFtdLFxuICBiOiBbXSxcbiAgYnI6IFtdLFxuICBjb2w6IFtdLFxuICBjb2RlOiBbXSxcbiAgZGl2OiBbXSxcbiAgZW06IFtdLFxuICBocjogW10sXG4gIGgxOiBbXSxcbiAgaDI6IFtdLFxuICBoMzogW10sXG4gIGg0OiBbXSxcbiAgaDU6IFtdLFxuICBoNjogW10sXG4gIGk6IFtdLFxuICBpbWc6IFsnc3JjJywgJ3NyY3NldCcsICdhbHQnLCAndGl0bGUnLCAnd2lkdGgnLCAnaGVpZ2h0J10sXG4gIGxpOiBbXSxcbiAgb2w6IFtdLFxuICBwOiBbXSxcbiAgcHJlOiBbXSxcbiAgczogW10sXG4gIHNtYWxsOiBbXSxcbiAgc3BhbjogW10sXG4gIHN1YjogW10sXG4gIHN1cDogW10sXG4gIHN0cm9uZzogW10sXG4gIHU6IFtdLFxuICB1bDogW11cbn1cblxuLyoqXG4gKiBBIHBhdHRlcm4gdGhhdCByZWNvZ25pemVzIGEgY29tbW9ubHkgdXNlZnVsIHN1YnNldCBvZiBVUkxzIHRoYXQgYXJlIHNhZmUuXG4gKlxuICogU2hvdXRvdXQgdG8gQW5ndWxhciA3IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi83LjIuNC9wYWNrYWdlcy9jb3JlL3NyYy9zYW5pdGl6YXRpb24vdXJsX3Nhbml0aXplci50c1xuICovXG5jb25zdCBTQUZFX1VSTF9QQVRURVJOID0gL14oPzooPzpodHRwcz98bWFpbHRvfGZ0cHx0ZWx8ZmlsZSk6fFteIyYvOj9dKig/OlsjLz9dfCQpKS9naVxuXG4vKipcbiAqIEEgcGF0dGVybiB0aGF0IG1hdGNoZXMgc2FmZSBkYXRhIFVSTHMuIE9ubHkgbWF0Y2hlcyBpbWFnZSwgdmlkZW8gYW5kIGF1ZGlvIHR5cGVzLlxuICpcbiAqIFNob3V0b3V0IHRvIEFuZ3VsYXIgNyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNy4yLjQvcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3VybF9zYW5pdGl6ZXIudHNcbiAqL1xuY29uc3QgREFUQV9VUkxfUEFUVEVSTiA9IC9eZGF0YTooPzppbWFnZVxcLyg/OmJtcHxnaWZ8anBlZ3xqcGd8cG5nfHRpZmZ8d2VicCl8dmlkZW9cXC8oPzptcGVnfG1wNHxvZ2d8d2VibSl8YXVkaW9cXC8oPzptcDN8b2dhfG9nZ3xvcHVzKSk7YmFzZTY0LFtcXGQrL2Etel0rPSokL2lcblxuZnVuY3Rpb24gYWxsb3dlZEF0dHJpYnV0ZShhdHRyLCBhbGxvd2VkQXR0cmlidXRlTGlzdCkge1xuICBjb25zdCBhdHRyTmFtZSA9IGF0dHIubm9kZU5hbWUudG9Mb3dlckNhc2UoKVxuXG4gIGlmIChhbGxvd2VkQXR0cmlidXRlTGlzdC5pbmRleE9mKGF0dHJOYW1lKSAhPT0gLTEpIHtcbiAgICBpZiAodXJpQXR0cnMuaW5kZXhPZihhdHRyTmFtZSkgIT09IC0xKSB7XG4gICAgICByZXR1cm4gQm9vbGVhbihhdHRyLm5vZGVWYWx1ZS5tYXRjaChTQUZFX1VSTF9QQVRURVJOKSB8fCBhdHRyLm5vZGVWYWx1ZS5tYXRjaChEQVRBX1VSTF9QQVRURVJOKSlcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgY29uc3QgcmVnRXhwID0gYWxsb3dlZEF0dHJpYnV0ZUxpc3QuZmlsdGVyKChhdHRyUmVnZXgpID0+IGF0dHJSZWdleCBpbnN0YW5jZW9mIFJlZ0V4cClcblxuICAvLyBDaGVjayBpZiBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB2YWxpZGF0ZXMgdGhlIGF0dHJpYnV0ZS5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHJlZ0V4cC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChhdHRyTmFtZS5tYXRjaChyZWdFeHBbaV0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemVIdG1sKHVuc2FmZUh0bWwsIHdoaXRlTGlzdCwgc2FuaXRpemVGbikge1xuICBpZiAodW5zYWZlSHRtbC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdW5zYWZlSHRtbFxuICB9XG5cbiAgaWYgKHNhbml0aXplRm4gJiYgdHlwZW9mIHNhbml0aXplRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gc2FuaXRpemVGbih1bnNhZmVIdG1sKVxuICB9XG5cbiAgY29uc3QgZG9tUGFyc2VyID0gbmV3IHdpbmRvdy5ET01QYXJzZXIoKVxuICBjb25zdCBjcmVhdGVkRG9jdW1lbnQgPSBkb21QYXJzZXIucGFyc2VGcm9tU3RyaW5nKHVuc2FmZUh0bWwsICd0ZXh0L2h0bWwnKVxuICBjb25zdCB3aGl0ZWxpc3RLZXlzID0gT2JqZWN0LmtleXMod2hpdGVMaXN0KVxuICBjb25zdCBlbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoY3JlYXRlZERvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgnKicpKVxuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBlbGVtZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IGVsID0gZWxlbWVudHNbaV1cbiAgICBjb25zdCBlbE5hbWUgPSBlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXG5cbiAgICBpZiAod2hpdGVsaXN0S2V5cy5pbmRleE9mKGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpID09PSAtMSkge1xuICAgICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbClcblxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBjb25zdCBhdHRyaWJ1dGVMaXN0ID0gW10uc2xpY2UuY2FsbChlbC5hdHRyaWJ1dGVzKVxuICAgIGNvbnN0IHdoaXRlbGlzdGVkQXR0cmlidXRlcyA9IFtdLmNvbmNhdCh3aGl0ZUxpc3RbJyonXSB8fCBbXSwgd2hpdGVMaXN0W2VsTmFtZV0gfHwgW10pXG5cbiAgICBhdHRyaWJ1dGVMaXN0LmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgIGlmICghYWxsb3dlZEF0dHJpYnV0ZShhdHRyLCB3aGl0ZWxpc3RlZEF0dHJpYnV0ZXMpKSB7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShhdHRyLm5vZGVOYW1lKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gY3JlYXRlZERvY3VtZW50LmJvZHkuaW5uZXJIVE1MXG59XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjUuMCk6IHRvb2x0aXAuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7XG4gIERlZmF1bHRXaGl0ZWxpc3QsXG4gIHNhbml0aXplSHRtbFxufSBmcm9tICcuL3Rvb2xzL3Nhbml0aXplcidcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBQb3BwZXIgZnJvbSAncG9wcGVyLmpzJ1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FICAgICAgICAgICAgICAgICAgPSAndG9vbHRpcCdcbmNvbnN0IFZFUlNJT04gICAgICAgICAgICAgICA9ICc0LjUuMCdcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICAgICA9ICdicy50b29sdGlwJ1xuY29uc3QgRVZFTlRfS0VZICAgICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCAgICA9ICQuZm5bTkFNRV1cbmNvbnN0IENMQVNTX1BSRUZJWCAgICAgICAgICA9ICdicy10b29sdGlwJ1xuY29uc3QgQlNDTFNfUFJFRklYX1JFR0VYICAgID0gbmV3IFJlZ0V4cChgKF58XFxcXHMpJHtDTEFTU19QUkVGSVh9XFxcXFMrYCwgJ2cnKVxuY29uc3QgRElTQUxMT1dFRF9BVFRSSUJVVEVTID0gWydzYW5pdGl6ZScsICd3aGl0ZUxpc3QnLCAnc2FuaXRpemVGbiddXG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBhbmltYXRpb24gICAgICAgICA6ICdib29sZWFuJyxcbiAgdGVtcGxhdGUgICAgICAgICAgOiAnc3RyaW5nJyxcbiAgdGl0bGUgICAgICAgICAgICAgOiAnKHN0cmluZ3xlbGVtZW50fGZ1bmN0aW9uKScsXG4gIHRyaWdnZXIgICAgICAgICAgIDogJ3N0cmluZycsXG4gIGRlbGF5ICAgICAgICAgICAgIDogJyhudW1iZXJ8b2JqZWN0KScsXG4gIGh0bWwgICAgICAgICAgICAgIDogJ2Jvb2xlYW4nLFxuICBzZWxlY3RvciAgICAgICAgICA6ICcoc3RyaW5nfGJvb2xlYW4pJyxcbiAgcGxhY2VtZW50ICAgICAgICAgOiAnKHN0cmluZ3xmdW5jdGlvbiknLFxuICBvZmZzZXQgICAgICAgICAgICA6ICcobnVtYmVyfHN0cmluZ3xmdW5jdGlvbiknLFxuICBjb250YWluZXIgICAgICAgICA6ICcoc3RyaW5nfGVsZW1lbnR8Ym9vbGVhbiknLFxuICBmYWxsYmFja1BsYWNlbWVudCA6ICcoc3RyaW5nfGFycmF5KScsXG4gIGJvdW5kYXJ5ICAgICAgICAgIDogJyhzdHJpbmd8ZWxlbWVudCknLFxuICBzYW5pdGl6ZSAgICAgICAgICA6ICdib29sZWFuJyxcbiAgc2FuaXRpemVGbiAgICAgICAgOiAnKG51bGx8ZnVuY3Rpb24pJyxcbiAgd2hpdGVMaXN0ICAgICAgICAgOiAnb2JqZWN0JyxcbiAgcG9wcGVyQ29uZmlnICAgICAgOiAnKG51bGx8b2JqZWN0KSdcbn1cblxuY29uc3QgQXR0YWNobWVudE1hcCA9IHtcbiAgQVVUTyAgIDogJ2F1dG8nLFxuICBUT1AgICAgOiAndG9wJyxcbiAgUklHSFQgIDogJ3JpZ2h0JyxcbiAgQk9UVE9NIDogJ2JvdHRvbScsXG4gIExFRlQgICA6ICdsZWZ0J1xufVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBhbmltYXRpb24gICAgICAgICA6IHRydWUsXG4gIHRlbXBsYXRlICAgICAgICAgIDogJzxkaXYgY2xhc3M9XCJ0b29sdGlwXCIgcm9sZT1cInRvb2x0aXBcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJhcnJvd1wiPjwvZGl2PicgK1xuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj48L2Rpdj4nLFxuICB0cmlnZ2VyICAgICAgICAgICA6ICdob3ZlciBmb2N1cycsXG4gIHRpdGxlICAgICAgICAgICAgIDogJycsXG4gIGRlbGF5ICAgICAgICAgICAgIDogMCxcbiAgaHRtbCAgICAgICAgICAgICAgOiBmYWxzZSxcbiAgc2VsZWN0b3IgICAgICAgICAgOiBmYWxzZSxcbiAgcGxhY2VtZW50ICAgICAgICAgOiAndG9wJyxcbiAgb2Zmc2V0ICAgICAgICAgICAgOiAwLFxuICBjb250YWluZXIgICAgICAgICA6IGZhbHNlLFxuICBmYWxsYmFja1BsYWNlbWVudCA6ICdmbGlwJyxcbiAgYm91bmRhcnkgICAgICAgICAgOiAnc2Nyb2xsUGFyZW50JyxcbiAgc2FuaXRpemUgICAgICAgICAgOiB0cnVlLFxuICBzYW5pdGl6ZUZuICAgICAgICA6IG51bGwsXG4gIHdoaXRlTGlzdCAgICAgICAgIDogRGVmYXVsdFdoaXRlbGlzdCxcbiAgcG9wcGVyQ29uZmlnICAgICAgOiBudWxsXG59XG5cbmNvbnN0IEhPVkVSX1NUQVRFX1NIT1cgPSAnc2hvdydcbmNvbnN0IEhPVkVSX1NUQVRFX09VVCAgPSAnb3V0J1xuXG5jb25zdCBFdmVudCA9IHtcbiAgSElERSAgICAgICA6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgSElEREVOICAgICA6IGBoaWRkZW4ke0VWRU5UX0tFWX1gLFxuICBTSE9XICAgICAgIDogYHNob3cke0VWRU5UX0tFWX1gLFxuICBTSE9XTiAgICAgIDogYHNob3duJHtFVkVOVF9LRVl9YCxcbiAgSU5TRVJURUQgICA6IGBpbnNlcnRlZCR7RVZFTlRfS0VZfWAsXG4gIENMSUNLICAgICAgOiBgY2xpY2ske0VWRU5UX0tFWX1gLFxuICBGT0NVU0lOICAgIDogYGZvY3VzaW4ke0VWRU5UX0tFWX1gLFxuICBGT0NVU09VVCAgIDogYGZvY3Vzb3V0JHtFVkVOVF9LRVl9YCxcbiAgTU9VU0VFTlRFUiA6IGBtb3VzZWVudGVyJHtFVkVOVF9LRVl9YCxcbiAgTU9VU0VMRUFWRSA6IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVl9YFxufVxuXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuXG5jb25zdCBTRUxFQ1RPUl9UT09MVElQX0lOTkVSID0gJy50b29sdGlwLWlubmVyJ1xuY29uc3QgU0VMRUNUT1JfQVJST1cgICAgICAgICA9ICcuYXJyb3cnXG5cbmNvbnN0IFRSSUdHRVJfSE9WRVIgID0gJ2hvdmVyJ1xuY29uc3QgVFJJR0dFUl9GT0NVUyAgPSAnZm9jdXMnXG5jb25zdCBUUklHR0VSX0NMSUNLICA9ICdjbGljaydcbmNvbnN0IFRSSUdHRVJfTUFOVUFMID0gJ21hbnVhbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFRvb2x0aXAge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBpZiAodHlwZW9mIFBvcHBlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Jvb3RzdHJhcFxcJ3MgdG9vbHRpcHMgcmVxdWlyZSBQb3BwZXIuanMgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZy8pJylcbiAgICB9XG5cbiAgICAvLyBwcml2YXRlXG4gICAgdGhpcy5faXNFbmFibGVkICAgICA9IHRydWVcbiAgICB0aGlzLl90aW1lb3V0ICAgICAgID0gMFxuICAgIHRoaXMuX2hvdmVyU3RhdGUgICAgPSAnJ1xuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIgPSB7fVxuICAgIHRoaXMuX3BvcHBlciAgICAgICAgPSBudWxsXG5cbiAgICAvLyBQcm90ZWN0ZWRcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5jb25maWcgID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLnRpcCAgICAgPSBudWxsXG5cbiAgICB0aGlzLl9zZXRMaXN0ZW5lcnMoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgcmV0dXJuIERBVEFfS0VZXG4gIH1cblxuICBzdGF0aWMgZ2V0IEV2ZW50KCkge1xuICAgIHJldHVybiBFdmVudFxuICB9XG5cbiAgc3RhdGljIGdldCBFVkVOVF9LRVkoKSB7XG4gICAgcmV0dXJuIEVWRU5UX0tFWVxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSB0cnVlXG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9IGZhbHNlXG4gIH1cblxuICB0b2dnbGVFbmFibGVkKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9ICF0aGlzLl9pc0VuYWJsZWRcbiAgfVxuXG4gIHRvZ2dsZShldmVudCkge1xuICAgIGlmICghdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGNvbnN0IGRhdGFLZXkgPSB0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZXG4gICAgICBsZXQgY29udGV4dCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5KVxuXG4gICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgY29udGV4dCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKFxuICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQsXG4gICAgICAgICAgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKVxuICAgICAgICApXG4gICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YShkYXRhS2V5LCBjb250ZXh0KVxuICAgICAgfVxuXG4gICAgICBjb250ZXh0Ll9hY3RpdmVUcmlnZ2VyLmNsaWNrID0gIWNvbnRleHQuX2FjdGl2ZVRyaWdnZXIuY2xpY2tcblxuICAgICAgaWYgKGNvbnRleHQuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgICBjb250ZXh0Ll9lbnRlcihudWxsLCBjb250ZXh0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5fbGVhdmUobnVsbCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCQodGhpcy5nZXRUaXBFbGVtZW50KCkpLmhhc0NsYXNzKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgICAgdGhpcy5fbGVhdmUobnVsbCwgdGhpcylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VudGVyKG51bGwsIHRoaXMpXG4gICAgfVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dClcblxuICAgICQucmVtb3ZlRGF0YSh0aGlzLmVsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVkpXG5cbiAgICAkKHRoaXMuZWxlbWVudCkub2ZmKHRoaXMuY29uc3RydWN0b3IuRVZFTlRfS0VZKVxuICAgICQodGhpcy5lbGVtZW50KS5jbG9zZXN0KCcubW9kYWwnKS5vZmYoJ2hpZGUuYnMubW9kYWwnLCB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyKVxuXG4gICAgaWYgKHRoaXMudGlwKSB7XG4gICAgICAkKHRoaXMudGlwKS5yZW1vdmUoKVxuICAgIH1cblxuICAgIHRoaXMuX2lzRW5hYmxlZCAgICAgPSBudWxsXG4gICAgdGhpcy5fdGltZW91dCAgICAgICA9IG51bGxcbiAgICB0aGlzLl9ob3ZlclN0YXRlICAgID0gbnVsbFxuICAgIHRoaXMuX2FjdGl2ZVRyaWdnZXIgPSBudWxsXG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIHRoaXMuX3BvcHBlciA9IG51bGxcbiAgICB0aGlzLmVsZW1lbnQgPSBudWxsXG4gICAgdGhpcy5jb25maWcgID0gbnVsbFxuICAgIHRoaXMudGlwICAgICA9IG51bGxcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKCQodGhpcy5lbGVtZW50KS5jc3MoJ2Rpc3BsYXknKSA9PT0gJ25vbmUnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSB1c2Ugc2hvdyBvbiB2aXNpYmxlIGVsZW1lbnRzJylcbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSAkLkV2ZW50KHRoaXMuY29uc3RydWN0b3IuRXZlbnQuU0hPVylcbiAgICBpZiAodGhpcy5pc1dpdGhDb250ZW50KCkgJiYgdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcihzaG93RXZlbnQpXG5cbiAgICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBVdGlsLmZpbmRTaGFkb3dSb290KHRoaXMuZWxlbWVudClcbiAgICAgIGNvbnN0IGlzSW5UaGVEb20gPSAkLmNvbnRhaW5zKFxuICAgICAgICBzaGFkb3dSb290ICE9PSBudWxsID8gc2hhZG93Um9vdCA6IHRoaXMuZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgICAgdGhpcy5lbGVtZW50XG4gICAgICApXG5cbiAgICAgIGlmIChzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgIWlzSW5UaGVEb20pIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRpcCAgID0gdGhpcy5nZXRUaXBFbGVtZW50KClcbiAgICAgIGNvbnN0IHRpcElkID0gVXRpbC5nZXRVSUQodGhpcy5jb25zdHJ1Y3Rvci5OQU1FKVxuXG4gICAgICB0aXAuc2V0QXR0cmlidXRlKCdpZCcsIHRpcElkKVxuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIHRpcElkKVxuXG4gICAgICB0aGlzLnNldENvbnRlbnQoKVxuXG4gICAgICBpZiAodGhpcy5jb25maWcuYW5pbWF0aW9uKSB7XG4gICAgICAgICQodGlwKS5hZGRDbGFzcyhDTEFTU19OQU1FX0ZBREUpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBsYWNlbWVudCAgPSB0eXBlb2YgdGhpcy5jb25maWcucGxhY2VtZW50ID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gdGhpcy5jb25maWcucGxhY2VtZW50LmNhbGwodGhpcywgdGlwLCB0aGlzLmVsZW1lbnQpXG4gICAgICAgIDogdGhpcy5jb25maWcucGxhY2VtZW50XG5cbiAgICAgIGNvbnN0IGF0dGFjaG1lbnQgPSB0aGlzLl9nZXRBdHRhY2htZW50KHBsYWNlbWVudClcbiAgICAgIHRoaXMuYWRkQXR0YWNobWVudENsYXNzKGF0dGFjaG1lbnQpXG5cbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuX2dldENvbnRhaW5lcigpXG4gICAgICAkKHRpcCkuZGF0YSh0aGlzLmNvbnN0cnVjdG9yLkRBVEFfS0VZLCB0aGlzKVxuXG4gICAgICBpZiAoISQuY29udGFpbnModGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB0aGlzLnRpcCkpIHtcbiAgICAgICAgJCh0aXApLmFwcGVuZFRvKGNvbnRhaW5lcilcbiAgICAgIH1cblxuICAgICAgJCh0aGlzLmVsZW1lbnQpLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5JTlNFUlRFRClcblxuICAgICAgdGhpcy5fcG9wcGVyID0gbmV3IFBvcHBlcih0aGlzLmVsZW1lbnQsIHRpcCwgdGhpcy5fZ2V0UG9wcGVyQ29uZmlnKGF0dGFjaG1lbnQpKVxuXG4gICAgICAkKHRpcCkuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgICAgLy8gb25seSBuZWVkZWQgYmVjYXVzZSBvZiBicm9rZW4gZXZlbnQgZGVsZWdhdGlvbiBvbiBpT1NcbiAgICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICAkKGRvY3VtZW50LmJvZHkpLmNoaWxkcmVuKCkub24oJ21vdXNlb3ZlcicsIG51bGwsICQubm9vcClcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgICAgICB0aGlzLl9maXhUcmFuc2l0aW9uKClcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcmV2SG92ZXJTdGF0ZSA9IHRoaXMuX2hvdmVyU3RhdGVcbiAgICAgICAgdGhpcy5faG92ZXJTdGF0ZSAgICAgPSBudWxsXG5cbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLnRyaWdnZXIodGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5TSE9XTilcblxuICAgICAgICBpZiAocHJldkhvdmVyU3RhdGUgPT09IEhPVkVSX1NUQVRFX09VVCkge1xuICAgICAgICAgIHRoaXMuX2xlYXZlKG51bGwsIHRoaXMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCQodGhpcy50aXApLmhhc0NsYXNzKENMQVNTX05BTUVfRkFERSkpIHtcbiAgICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLnRpcClcblxuICAgICAgICAkKHRoaXMudGlwKVxuICAgICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpXG4gICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBsZXRlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoaWRlKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdGlwICAgICAgID0gdGhpcy5nZXRUaXBFbGVtZW50KClcbiAgICBjb25zdCBoaWRlRXZlbnQgPSAkLkV2ZW50KHRoaXMuY29uc3RydWN0b3IuRXZlbnQuSElERSlcbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9ob3ZlclN0YXRlICE9PSBIT1ZFUl9TVEFURV9TSE9XICYmIHRpcC5wYXJlbnROb2RlKSB7XG4gICAgICAgIHRpcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRpcClcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY2xlYW5UaXBDbGFzcygpXG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JylcbiAgICAgICQodGhpcy5lbGVtZW50KS50cmlnZ2VyKHRoaXMuY29uc3RydWN0b3IuRXZlbnQuSElEREVOKVxuICAgICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgICB9XG5cbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjaygpXG4gICAgICB9XG4gICAgfVxuXG4gICAgJCh0aGlzLmVsZW1lbnQpLnRyaWdnZXIoaGlkZUV2ZW50KVxuXG4gICAgaWYgKGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgJCh0aXApLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfU0hPVylcblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSByZW1vdmUgdGhlIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB3ZSBhZGRlZCBmb3IgaU9TIHN1cHBvcnRcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAkKGRvY3VtZW50LmJvZHkpLmNoaWxkcmVuKCkub2ZmKCdtb3VzZW92ZXInLCBudWxsLCAkLm5vb3ApXG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0NMSUNLXSA9IGZhbHNlXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0ZPQ1VTXSA9IGZhbHNlXG4gICAgdGhpcy5fYWN0aXZlVHJpZ2dlcltUUklHR0VSX0hPVkVSXSA9IGZhbHNlXG5cbiAgICBpZiAoJCh0aGlzLnRpcCkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9GQURFKSkge1xuICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aXApXG5cbiAgICAgICQodGlwKVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpXG4gICAgfVxuXG4gICAgdGhpcy5faG92ZXJTdGF0ZSA9ICcnXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHBlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5fcG9wcGVyLnNjaGVkdWxlVXBkYXRlKClcbiAgICB9XG4gIH1cblxuICAvLyBQcm90ZWN0ZWRcblxuICBpc1dpdGhDb250ZW50KCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMuZ2V0VGl0bGUoKSlcbiAgfVxuXG4gIGFkZEF0dGFjaG1lbnRDbGFzcyhhdHRhY2htZW50KSB7XG4gICAgJCh0aGlzLmdldFRpcEVsZW1lbnQoKSkuYWRkQ2xhc3MoYCR7Q0xBU1NfUFJFRklYfS0ke2F0dGFjaG1lbnR9YClcbiAgfVxuXG4gIGdldFRpcEVsZW1lbnQoKSB7XG4gICAgdGhpcy50aXAgPSB0aGlzLnRpcCB8fCAkKHRoaXMuY29uZmlnLnRlbXBsYXRlKVswXVxuICAgIHJldHVybiB0aGlzLnRpcFxuICB9XG5cbiAgc2V0Q29udGVudCgpIHtcbiAgICBjb25zdCB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgIHRoaXMuc2V0RWxlbWVudENvbnRlbnQoJCh0aXAucXVlcnlTZWxlY3RvckFsbChTRUxFQ1RPUl9UT09MVElQX0lOTkVSKSksIHRoaXMuZ2V0VGl0bGUoKSlcbiAgICAkKHRpcCkucmVtb3ZlQ2xhc3MoYCR7Q0xBU1NfTkFNRV9GQURFfSAke0NMQVNTX05BTUVfU0hPV31gKVxuICB9XG5cbiAgc2V0RWxlbWVudENvbnRlbnQoJGVsZW1lbnQsIGNvbnRlbnQpIHtcbiAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdvYmplY3QnICYmIChjb250ZW50Lm5vZGVUeXBlIHx8IGNvbnRlbnQuanF1ZXJ5KSkge1xuICAgICAgLy8gQ29udGVudCBpcyBhIERPTSBub2RlIG9yIGEgalF1ZXJ5XG4gICAgICBpZiAodGhpcy5jb25maWcuaHRtbCkge1xuICAgICAgICBpZiAoISQoY29udGVudCkucGFyZW50KCkuaXMoJGVsZW1lbnQpKSB7XG4gICAgICAgICAgJGVsZW1lbnQuZW1wdHkoKS5hcHBlbmQoY29udGVudClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJGVsZW1lbnQudGV4dCgkKGNvbnRlbnQpLnRleHQoKSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29uZmlnLmh0bWwpIHtcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5zYW5pdGl6ZSkge1xuICAgICAgICBjb250ZW50ID0gc2FuaXRpemVIdG1sKGNvbnRlbnQsIHRoaXMuY29uZmlnLndoaXRlTGlzdCwgdGhpcy5jb25maWcuc2FuaXRpemVGbilcbiAgICAgIH1cblxuICAgICAgJGVsZW1lbnQuaHRtbChjb250ZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICAkZWxlbWVudC50ZXh0KGNvbnRlbnQpXG4gICAgfVxuICB9XG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgbGV0IHRpdGxlID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vcmlnaW5hbC10aXRsZScpXG5cbiAgICBpZiAoIXRpdGxlKSB7XG4gICAgICB0aXRsZSA9IHR5cGVvZiB0aGlzLmNvbmZpZy50aXRsZSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHRoaXMuY29uZmlnLnRpdGxlLmNhbGwodGhpcy5lbGVtZW50KVxuICAgICAgICA6IHRoaXMuY29uZmlnLnRpdGxlXG4gICAgfVxuXG4gICAgcmV0dXJuIHRpdGxlXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldFBvcHBlckNvbmZpZyhhdHRhY2htZW50KSB7XG4gICAgY29uc3QgZGVmYXVsdEJzQ29uZmlnID0ge1xuICAgICAgcGxhY2VtZW50OiBhdHRhY2htZW50LFxuICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgIG9mZnNldDogdGhpcy5fZ2V0T2Zmc2V0KCksXG4gICAgICAgIGZsaXA6IHtcbiAgICAgICAgICBiZWhhdmlvcjogdGhpcy5jb25maWcuZmFsbGJhY2tQbGFjZW1lbnRcbiAgICAgICAgfSxcbiAgICAgICAgYXJyb3c6IHtcbiAgICAgICAgICBlbGVtZW50OiBTRUxFQ1RPUl9BUlJPV1xuICAgICAgICB9LFxuICAgICAgICBwcmV2ZW50T3ZlcmZsb3c6IHtcbiAgICAgICAgICBib3VuZGFyaWVzRWxlbWVudDogdGhpcy5jb25maWcuYm91bmRhcnlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uQ3JlYXRlOiAoZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZGF0YS5vcmlnaW5hbFBsYWNlbWVudCAhPT0gZGF0YS5wbGFjZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLl9oYW5kbGVQb3BwZXJQbGFjZW1lbnRDaGFuZ2UoZGF0YSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uVXBkYXRlOiAoZGF0YSkgPT4gdGhpcy5faGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlKGRhdGEpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRlZmF1bHRCc0NvbmZpZyxcbiAgICAgIC4uLnRoaXMuY29uZmlnLnBvcHBlckNvbmZpZ1xuICAgIH1cbiAgfVxuXG4gIF9nZXRPZmZzZXQoKSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0ge31cblxuICAgIGlmICh0eXBlb2YgdGhpcy5jb25maWcub2Zmc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvZmZzZXQuZm4gPSAoZGF0YSkgPT4ge1xuICAgICAgICBkYXRhLm9mZnNldHMgPSB7XG4gICAgICAgICAgLi4uZGF0YS5vZmZzZXRzLFxuICAgICAgICAgIC4uLnRoaXMuY29uZmlnLm9mZnNldChkYXRhLm9mZnNldHMsIHRoaXMuZWxlbWVudCkgfHwge31cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9mZnNldC5vZmZzZXQgPSB0aGlzLmNvbmZpZy5vZmZzZXRcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0XG4gIH1cblxuICBfZ2V0Q29udGFpbmVyKCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy5jb250YWluZXIgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuYm9keVxuICAgIH1cblxuICAgIGlmIChVdGlsLmlzRWxlbWVudCh0aGlzLmNvbmZpZy5jb250YWluZXIpKSB7XG4gICAgICByZXR1cm4gJCh0aGlzLmNvbmZpZy5jb250YWluZXIpXG4gICAgfVxuXG4gICAgcmV0dXJuICQoZG9jdW1lbnQpLmZpbmQodGhpcy5jb25maWcuY29udGFpbmVyKVxuICB9XG5cbiAgX2dldEF0dGFjaG1lbnQocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIEF0dGFjaG1lbnRNYXBbcGxhY2VtZW50LnRvVXBwZXJDYXNlKCldXG4gIH1cblxuICBfc2V0TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IHRyaWdnZXJzID0gdGhpcy5jb25maWcudHJpZ2dlci5zcGxpdCgnICcpXG5cbiAgICB0cmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyKSA9PiB7XG4gICAgICBpZiAodHJpZ2dlciA9PT0gJ2NsaWNrJykge1xuICAgICAgICAkKHRoaXMuZWxlbWVudCkub24oXG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5DTElDSyxcbiAgICAgICAgICB0aGlzLmNvbmZpZy5zZWxlY3RvcixcbiAgICAgICAgICAoZXZlbnQpID0+IHRoaXMudG9nZ2xlKGV2ZW50KVxuICAgICAgICApXG4gICAgICB9IGVsc2UgaWYgKHRyaWdnZXIgIT09IFRSSUdHRVJfTUFOVUFMKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50SW4gPSB0cmlnZ2VyID09PSBUUklHR0VSX0hPVkVSXG4gICAgICAgICAgPyB0aGlzLmNvbnN0cnVjdG9yLkV2ZW50Lk1PVVNFRU5URVJcbiAgICAgICAgICA6IHRoaXMuY29uc3RydWN0b3IuRXZlbnQuRk9DVVNJTlxuICAgICAgICBjb25zdCBldmVudE91dCA9IHRyaWdnZXIgPT09IFRSSUdHRVJfSE9WRVJcbiAgICAgICAgICA/IHRoaXMuY29uc3RydWN0b3IuRXZlbnQuTU9VU0VMRUFWRVxuICAgICAgICAgIDogdGhpcy5jb25zdHJ1Y3Rvci5FdmVudC5GT0NVU09VVFxuXG4gICAgICAgICQodGhpcy5lbGVtZW50KVxuICAgICAgICAgIC5vbihldmVudEluLCB0aGlzLmNvbmZpZy5zZWxlY3RvciwgKGV2ZW50KSA9PiB0aGlzLl9lbnRlcihldmVudCkpXG4gICAgICAgICAgLm9uKGV2ZW50T3V0LCB0aGlzLmNvbmZpZy5zZWxlY3RvciwgKGV2ZW50KSA9PiB0aGlzLl9sZWF2ZShldmVudCkpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuX2hpZGVNb2RhbEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgJCh0aGlzLmVsZW1lbnQpLmNsb3Nlc3QoJy5tb2RhbCcpLm9uKCdoaWRlLmJzLm1vZGFsJywgdGhpcy5faGlkZU1vZGFsSGFuZGxlcilcblxuICAgIGlmICh0aGlzLmNvbmZpZy5zZWxlY3Rvcikge1xuICAgICAgdGhpcy5jb25maWcgPSB7XG4gICAgICAgIC4uLnRoaXMuY29uZmlnLFxuICAgICAgICB0cmlnZ2VyOiAnbWFudWFsJyxcbiAgICAgICAgc2VsZWN0b3I6ICcnXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2ZpeFRpdGxlKClcbiAgICB9XG4gIH1cblxuICBfZml4VGl0bGUoKSB7XG4gICAgY29uc3QgdGl0bGVUeXBlID0gdHlwZW9mIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtdGl0bGUnKVxuXG4gICAgaWYgKHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJykgfHwgdGl0bGVUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcbiAgICAgICAgJ2RhdGEtb3JpZ2luYWwtdGl0bGUnLFxuICAgICAgICB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aXRsZScpIHx8ICcnXG4gICAgICApXG5cbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJycpXG4gICAgfVxuICB9XG5cbiAgX2VudGVyKGV2ZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVlcbiAgICBjb250ZXh0ID0gY29udGV4dCB8fCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSlcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgY29udGV4dCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKFxuICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgICB0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpXG4gICAgICApXG4gICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSwgY29udGV4dClcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbXG4gICAgICAgIGV2ZW50LnR5cGUgPT09ICdmb2N1c2luJyA/IFRSSUdHRVJfRk9DVVMgOiBUUklHR0VSX0hPVkVSXG4gICAgICBdID0gdHJ1ZVxuICAgIH1cblxuICAgIGlmICgkKGNvbnRleHQuZ2V0VGlwRWxlbWVudCgpKS5oYXNDbGFzcyhDTEFTU19OQU1FX1NIT1cpIHx8IGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhPVkVSX1NUQVRFX1NIT1cpIHtcbiAgICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIT1ZFUl9TVEFURV9TSE9XXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjbGVhclRpbWVvdXQoY29udGV4dC5fdGltZW91dClcblxuICAgIGNvbnRleHQuX2hvdmVyU3RhdGUgPSBIT1ZFUl9TVEFURV9TSE9XXG5cbiAgICBpZiAoIWNvbnRleHQuY29uZmlnLmRlbGF5IHx8ICFjb250ZXh0LmNvbmZpZy5kZWxheS5zaG93KSB7XG4gICAgICBjb250ZXh0LnNob3coKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29udGV4dC5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhPVkVSX1NUQVRFX1NIT1cpIHtcbiAgICAgICAgY29udGV4dC5zaG93KClcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0LmNvbmZpZy5kZWxheS5zaG93KVxuICB9XG5cbiAgX2xlYXZlKGV2ZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3QgZGF0YUtleSA9IHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVlcbiAgICBjb250ZXh0ID0gY29udGV4dCB8fCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSlcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgY29udGV4dCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKFxuICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgICB0aGlzLl9nZXREZWxlZ2F0ZUNvbmZpZygpXG4gICAgICApXG4gICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoZGF0YUtleSwgY29udGV4dClcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGNvbnRleHQuX2FjdGl2ZVRyaWdnZXJbXG4gICAgICAgIGV2ZW50LnR5cGUgPT09ICdmb2N1c291dCcgPyBUUklHR0VSX0ZPQ1VTIDogVFJJR0dFUl9IT1ZFUlxuICAgICAgXSA9IGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY2xlYXJUaW1lb3V0KGNvbnRleHQuX3RpbWVvdXQpXG5cbiAgICBjb250ZXh0Ll9ob3ZlclN0YXRlID0gSE9WRVJfU1RBVEVfT1VUXG5cbiAgICBpZiAoIWNvbnRleHQuY29uZmlnLmRlbGF5IHx8ICFjb250ZXh0LmNvbmZpZy5kZWxheS5oaWRlKSB7XG4gICAgICBjb250ZXh0LmhpZGUoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29udGV4dC5fdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGNvbnRleHQuX2hvdmVyU3RhdGUgPT09IEhPVkVSX1NUQVRFX09VVCkge1xuICAgICAgICBjb250ZXh0LmhpZGUoKVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQuY29uZmlnLmRlbGF5LmhpZGUpXG4gIH1cblxuICBfaXNXaXRoQWN0aXZlVHJpZ2dlcigpIHtcbiAgICBmb3IgKGNvbnN0IHRyaWdnZXIgaW4gdGhpcy5fYWN0aXZlVHJpZ2dlcikge1xuICAgICAgaWYgKHRoaXMuX2FjdGl2ZVRyaWdnZXJbdHJpZ2dlcl0pIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uc3QgZGF0YUF0dHJpYnV0ZXMgPSAkKHRoaXMuZWxlbWVudCkuZGF0YSgpXG5cbiAgICBPYmplY3Qua2V5cyhkYXRhQXR0cmlidXRlcylcbiAgICAgIC5mb3JFYWNoKChkYXRhQXR0cikgPT4ge1xuICAgICAgICBpZiAoRElTQUxMT1dFRF9BVFRSSUJVVEVTLmluZGV4T2YoZGF0YUF0dHIpICE9PSAtMSkge1xuICAgICAgICAgIGRlbGV0ZSBkYXRhQXR0cmlidXRlc1tkYXRhQXR0cl1cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLnRoaXMuY29uc3RydWN0b3IuRGVmYXVsdCxcbiAgICAgIC4uLmRhdGFBdHRyaWJ1dGVzLFxuICAgICAgLi4udHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge31cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5kZWxheSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbmZpZy5kZWxheSA9IHtcbiAgICAgICAgc2hvdzogY29uZmlnLmRlbGF5LFxuICAgICAgICBoaWRlOiBjb25maWcuZGVsYXlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy50aXRsZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbmZpZy50aXRsZSA9IGNvbmZpZy50aXRsZS50b1N0cmluZygpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcuY29udGVudCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbmZpZy5jb250ZW50ID0gY29uZmlnLmNvbnRlbnQudG9TdHJpbmcoKVxuICAgIH1cblxuICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKFxuICAgICAgTkFNRSxcbiAgICAgIGNvbmZpZyxcbiAgICAgIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGVcbiAgICApXG5cbiAgICBpZiAoY29uZmlnLnNhbml0aXplKSB7XG4gICAgICBjb25maWcudGVtcGxhdGUgPSBzYW5pdGl6ZUh0bWwoY29uZmlnLnRlbXBsYXRlLCBjb25maWcud2hpdGVMaXN0LCBjb25maWcuc2FuaXRpemVGbilcbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0RGVsZWdhdGVDb25maWcoKSB7XG4gICAgY29uc3QgY29uZmlnID0ge31cblxuICAgIGlmICh0aGlzLmNvbmZpZykge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5jb25maWcpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFtrZXldICE9PSB0aGlzLmNvbmZpZ1trZXldKSB7XG4gICAgICAgICAgY29uZmlnW2tleV0gPSB0aGlzLmNvbmZpZ1trZXldXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfY2xlYW5UaXBDbGFzcygpIHtcbiAgICBjb25zdCAkdGlwID0gJCh0aGlzLmdldFRpcEVsZW1lbnQoKSlcbiAgICBjb25zdCB0YWJDbGFzcyA9ICR0aXAuYXR0cignY2xhc3MnKS5tYXRjaChCU0NMU19QUkVGSVhfUkVHRVgpXG4gICAgaWYgKHRhYkNsYXNzICE9PSBudWxsICYmIHRhYkNsYXNzLmxlbmd0aCkge1xuICAgICAgJHRpcC5yZW1vdmVDbGFzcyh0YWJDbGFzcy5qb2luKCcnKSlcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlUG9wcGVyUGxhY2VtZW50Q2hhbmdlKHBvcHBlckRhdGEpIHtcbiAgICB0aGlzLnRpcCA9IHBvcHBlckRhdGEuaW5zdGFuY2UucG9wcGVyXG4gICAgdGhpcy5fY2xlYW5UaXBDbGFzcygpXG4gICAgdGhpcy5hZGRBdHRhY2htZW50Q2xhc3ModGhpcy5fZ2V0QXR0YWNobWVudChwb3BwZXJEYXRhLnBsYWNlbWVudCkpXG4gIH1cblxuICBfZml4VHJhbnNpdGlvbigpIHtcbiAgICBjb25zdCB0aXAgPSB0aGlzLmdldFRpcEVsZW1lbnQoKVxuICAgIGNvbnN0IGluaXRDb25maWdBbmltYXRpb24gPSB0aGlzLmNvbmZpZy5hbmltYXRpb25cblxuICAgIGlmICh0aXAuZ2V0QXR0cmlidXRlKCd4LXBsYWNlbWVudCcpICE9PSBudWxsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAkKHRpcCkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9GQURFKVxuICAgIHRoaXMuY29uZmlnLmFuaW1hdGlvbiA9IGZhbHNlXG4gICAgdGhpcy5oaWRlKClcbiAgICB0aGlzLnNob3coKVxuICAgIHRoaXMuY29uZmlnLmFuaW1hdGlvbiA9IGluaXRDb25maWdBbmltYXRpb25cbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnXG5cbiAgICAgIGlmICghZGF0YSAmJiAvZGlzcG9zZXxoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IFRvb2x0aXAodGhpcywgX2NvbmZpZylcbiAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogalF1ZXJ5XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kLmZuW05BTUVdID0gVG9vbHRpcC5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gVG9vbHRpcFxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBUb29sdGlwLl9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcFxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC41LjApOiBwb3BvdmVyLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL3Rvb2x0aXAnXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgICAgICAgICAgICAgICAgPSAncG9wb3ZlcidcbmNvbnN0IFZFUlNJT04gICAgICAgICAgICAgPSAnNC41LjAnXG5jb25zdCBEQVRBX0tFWSAgICAgICAgICAgID0gJ2JzLnBvcG92ZXInXG5jb25zdCBFVkVOVF9LRVkgICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCAgPSAkLmZuW05BTUVdXG5jb25zdCBDTEFTU19QUkVGSVggICAgICAgID0gJ2JzLXBvcG92ZXInXG5jb25zdCBCU0NMU19QUkVGSVhfUkVHRVggID0gbmV3IFJlZ0V4cChgKF58XFxcXHMpJHtDTEFTU19QUkVGSVh9XFxcXFMrYCwgJ2cnKVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICAuLi5Ub29sdGlwLkRlZmF1bHQsXG4gIHBsYWNlbWVudCA6ICdyaWdodCcsXG4gIHRyaWdnZXIgICA6ICdjbGljaycsXG4gIGNvbnRlbnQgICA6ICcnLFxuICB0ZW1wbGF0ZSAgOiAnPGRpdiBjbGFzcz1cInBvcG92ZXJcIiByb2xlPVwidG9vbHRpcFwiPicgK1xuICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImFycm93XCI+PC9kaXY+JyArXG4gICAgICAgICAgICAgICc8aDMgY2xhc3M9XCJwb3BvdmVyLWhlYWRlclwiPjwvaDM+JyArXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicG9wb3Zlci1ib2R5XCI+PC9kaXY+PC9kaXY+J1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgLi4uVG9vbHRpcC5EZWZhdWx0VHlwZSxcbiAgY29udGVudCA6ICcoc3RyaW5nfGVsZW1lbnR8ZnVuY3Rpb24pJ1xufVxuXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuXG5jb25zdCBTRUxFQ1RPUl9USVRMRSAgID0gJy5wb3BvdmVyLWhlYWRlcidcbmNvbnN0IFNFTEVDVE9SX0NPTlRFTlQgPSAnLnBvcG92ZXItYm9keSdcblxuY29uc3QgRXZlbnQgPSB7XG4gIEhJREUgICAgICAgOiBgaGlkZSR7RVZFTlRfS0VZfWAsXG4gIEhJRERFTiAgICAgOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgU0hPVyAgICAgICA6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgU0hPV04gICAgICA6IGBzaG93biR7RVZFTlRfS0VZfWAsXG4gIElOU0VSVEVEICAgOiBgaW5zZXJ0ZWQke0VWRU5UX0tFWX1gLFxuICBDTElDSyAgICAgIDogYGNsaWNrJHtFVkVOVF9LRVl9YCxcbiAgRk9DVVNJTiAgICA6IGBmb2N1c2luJHtFVkVOVF9LRVl9YCxcbiAgRk9DVVNPVVQgICA6IGBmb2N1c291dCR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFRU5URVIgOiBgbW91c2VlbnRlciR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFTEVBVkUgOiBgbW91c2VsZWF2ZSR7RVZFTlRfS0VZfWBcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFBvcG92ZXIgZXh0ZW5kcyBUb29sdGlwIHtcbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgREFUQV9LRVkoKSB7XG4gICAgcmV0dXJuIERBVEFfS0VZXG4gIH1cblxuICBzdGF0aWMgZ2V0IEV2ZW50KCkge1xuICAgIHJldHVybiBFdmVudFxuICB9XG5cbiAgc3RhdGljIGdldCBFVkVOVF9LRVkoKSB7XG4gICAgcmV0dXJuIEVWRU5UX0tFWVxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIC8vIE92ZXJyaWRlc1xuXG4gIGlzV2l0aENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGl0bGUoKSB8fCB0aGlzLl9nZXRDb250ZW50KClcbiAgfVxuXG4gIGFkZEF0dGFjaG1lbnRDbGFzcyhhdHRhY2htZW50KSB7XG4gICAgJCh0aGlzLmdldFRpcEVsZW1lbnQoKSkuYWRkQ2xhc3MoYCR7Q0xBU1NfUFJFRklYfS0ke2F0dGFjaG1lbnR9YClcbiAgfVxuXG4gIGdldFRpcEVsZW1lbnQoKSB7XG4gICAgdGhpcy50aXAgPSB0aGlzLnRpcCB8fCAkKHRoaXMuY29uZmlnLnRlbXBsYXRlKVswXVxuICAgIHJldHVybiB0aGlzLnRpcFxuICB9XG5cbiAgc2V0Q29udGVudCgpIHtcbiAgICBjb25zdCAkdGlwID0gJCh0aGlzLmdldFRpcEVsZW1lbnQoKSlcblxuICAgIC8vIFdlIHVzZSBhcHBlbmQgZm9yIGh0bWwgb2JqZWN0cyB0byBtYWludGFpbiBqcyBldmVudHNcbiAgICB0aGlzLnNldEVsZW1lbnRDb250ZW50KCR0aXAuZmluZChTRUxFQ1RPUl9USVRMRSksIHRoaXMuZ2V0VGl0bGUoKSlcbiAgICBsZXQgY29udGVudCA9IHRoaXMuX2dldENvbnRlbnQoKVxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29udGVudCA9IGNvbnRlbnQuY2FsbCh0aGlzLmVsZW1lbnQpXG4gICAgfVxuICAgIHRoaXMuc2V0RWxlbWVudENvbnRlbnQoJHRpcC5maW5kKFNFTEVDVE9SX0NPTlRFTlQpLCBjb250ZW50KVxuXG4gICAgJHRpcC5yZW1vdmVDbGFzcyhgJHtDTEFTU19OQU1FX0ZBREV9ICR7Q0xBU1NfTkFNRV9TSE9XfWApXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGVudCcpIHx8XG4gICAgICB0aGlzLmNvbmZpZy5jb250ZW50XG4gIH1cblxuICBfY2xlYW5UaXBDbGFzcygpIHtcbiAgICBjb25zdCAkdGlwID0gJCh0aGlzLmdldFRpcEVsZW1lbnQoKSlcbiAgICBjb25zdCB0YWJDbGFzcyA9ICR0aXAuYXR0cignY2xhc3MnKS5tYXRjaChCU0NMU19QUkVGSVhfUkVHRVgpXG4gICAgaWYgKHRhYkNsYXNzICE9PSBudWxsICYmIHRhYkNsYXNzLmxlbmd0aCA+IDApIHtcbiAgICAgICR0aXAucmVtb3ZlQ2xhc3ModGFiQ2xhc3Muam9pbignJykpXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyA/IGNvbmZpZyA6IG51bGxcblxuICAgICAgaWYgKCFkYXRhICYmIC9kaXNwb3NlfGhpZGUvLnRlc3QoY29uZmlnKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBuZXcgUG9wb3Zlcih0aGlzLCBfY29uZmlnKVxuICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gPSBQb3BvdmVyLl9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBQb3BvdmVyXG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIFBvcG92ZXIuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3BvdmVyXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjUuMCk6IHNjcm9sbHNweS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FICAgICAgICAgICAgICAgPSAnc2Nyb2xsc3B5J1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgID0gJzQuNS4wJ1xuY29uc3QgREFUQV9LRVkgICAgICAgICAgID0gJ2JzLnNjcm9sbHNweSdcbmNvbnN0IEVWRU5UX0tFWSAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgICAgICAgPSAnLmRhdGEtYXBpJ1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBvZmZzZXQgOiAxMCxcbiAgbWV0aG9kIDogJ2F1dG8nLFxuICB0YXJnZXQgOiAnJ1xufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgb2Zmc2V0IDogJ251bWJlcicsXG4gIG1ldGhvZCA6ICdzdHJpbmcnLFxuICB0YXJnZXQgOiAnKHN0cmluZ3xlbGVtZW50KSdcbn1cblxuY29uc3QgRVZFTlRfQUNUSVZBVEUgICAgICA9IGBhY3RpdmF0ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NDUk9MTCAgICAgICAgPSBgc2Nyb2xsJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSA9IGBsb2FkJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0RST1BET1dOX0lURU0gPSAnZHJvcGRvd24taXRlbSdcbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFICAgICAgICA9ICdhY3RpdmUnXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfU1BZICAgICAgICA9ICdbZGF0YS1zcHk9XCJzY3JvbGxcIl0nXG5jb25zdCBTRUxFQ1RPUl9OQVZfTElTVF9HUk9VUCAgPSAnLm5hdiwgLmxpc3QtZ3JvdXAnXG5jb25zdCBTRUxFQ1RPUl9OQVZfTElOS1MgICAgICAgPSAnLm5hdi1saW5rJ1xuY29uc3QgU0VMRUNUT1JfTkFWX0lURU1TICAgICAgID0gJy5uYXYtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0xJU1RfSVRFTVMgICAgICA9ICcubGlzdC1ncm91cC1pdGVtJ1xuY29uc3QgU0VMRUNUT1JfRFJPUERPV04gICAgICAgID0gJy5kcm9wZG93bidcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOX0lURU1TICA9ICcuZHJvcGRvd24taXRlbSdcbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSA9ICcuZHJvcGRvd24tdG9nZ2xlJ1xuXG5jb25zdCBNRVRIT0RfT0ZGU0VUICAgPSAnb2Zmc2V0J1xuY29uc3QgTUVUSE9EX1BPU0lUSU9OID0gJ3Bvc2l0aW9uJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgU2Nyb2xsU3B5IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdGhpcy5fZWxlbWVudCAgICAgICA9IGVsZW1lbnRcbiAgICB0aGlzLl9zY3JvbGxFbGVtZW50ID0gZWxlbWVudC50YWdOYW1lID09PSAnQk9EWScgPyB3aW5kb3cgOiBlbGVtZW50XG4gICAgdGhpcy5fY29uZmlnICAgICAgICA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gICAgdGhpcy5fc2VsZWN0b3IgICAgICA9IGAke3RoaXMuX2NvbmZpZy50YXJnZXR9ICR7U0VMRUNUT1JfTkFWX0xJTktTfSxgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7dGhpcy5fY29uZmlnLnRhcmdldH0gJHtTRUxFQ1RPUl9MSVNUX0lURU1TfSxgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7dGhpcy5fY29uZmlnLnRhcmdldH0gJHtTRUxFQ1RPUl9EUk9QRE9XTl9JVEVNU31gXG4gICAgdGhpcy5fb2Zmc2V0cyAgICAgICA9IFtdXG4gICAgdGhpcy5fdGFyZ2V0cyAgICAgICA9IFtdXG4gICAgdGhpcy5fYWN0aXZlVGFyZ2V0ICA9IG51bGxcbiAgICB0aGlzLl9zY3JvbGxIZWlnaHQgID0gMFxuXG4gICAgJCh0aGlzLl9zY3JvbGxFbGVtZW50KS5vbihFVkVOVF9TQ1JPTEwsIChldmVudCkgPT4gdGhpcy5fcHJvY2VzcyhldmVudCkpXG5cbiAgICB0aGlzLnJlZnJlc2goKVxuICAgIHRoaXMuX3Byb2Nlc3MoKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICAvLyBQdWJsaWNcblxuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IGF1dG9NZXRob2QgPSB0aGlzLl9zY3JvbGxFbGVtZW50ID09PSB0aGlzLl9zY3JvbGxFbGVtZW50LndpbmRvd1xuICAgICAgPyBNRVRIT0RfT0ZGU0VUIDogTUVUSE9EX1BPU0lUSU9OXG5cbiAgICBjb25zdCBvZmZzZXRNZXRob2QgPSB0aGlzLl9jb25maWcubWV0aG9kID09PSAnYXV0bydcbiAgICAgID8gYXV0b01ldGhvZCA6IHRoaXMuX2NvbmZpZy5tZXRob2RcblxuICAgIGNvbnN0IG9mZnNldEJhc2UgPSBvZmZzZXRNZXRob2QgPT09IE1FVEhPRF9QT1NJVElPTlxuICAgICAgPyB0aGlzLl9nZXRTY3JvbGxUb3AoKSA6IDBcblxuICAgIHRoaXMuX29mZnNldHMgPSBbXVxuICAgIHRoaXMuX3RhcmdldHMgPSBbXVxuXG4gICAgdGhpcy5fc2Nyb2xsSGVpZ2h0ID0gdGhpcy5fZ2V0U2Nyb2xsSGVpZ2h0KClcblxuICAgIGNvbnN0IHRhcmdldHMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fc2VsZWN0b3IpKVxuXG4gICAgdGFyZ2V0c1xuICAgICAgLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBsZXQgdGFyZ2V0XG4gICAgICAgIGNvbnN0IHRhcmdldFNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpXG5cbiAgICAgICAgaWYgKHRhcmdldFNlbGVjdG9yKSB7XG4gICAgICAgICAgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXRTZWxlY3RvcilcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICBjb25zdCB0YXJnZXRCQ1IgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICBpZiAodGFyZ2V0QkNSLndpZHRoIHx8IHRhcmdldEJDUi5oZWlnaHQpIHtcbiAgICAgICAgICAgIC8vIFRPRE8gKGZhdCk6IHJlbW92ZSBza2V0Y2ggcmVsaWFuY2Ugb24galF1ZXJ5IHBvc2l0aW9uL29mZnNldFxuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgJCh0YXJnZXQpW29mZnNldE1ldGhvZF0oKS50b3AgKyBvZmZzZXRCYXNlLFxuICAgICAgICAgICAgICB0YXJnZXRTZWxlY3RvclxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0pXG4gICAgICAuc29ydCgoYSwgYikgPT4gYVswXSAtIGJbMF0pXG4gICAgICAuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICB0aGlzLl9vZmZzZXRzLnB1c2goaXRlbVswXSlcbiAgICAgICAgdGhpcy5fdGFyZ2V0cy5wdXNoKGl0ZW1bMV0pXG4gICAgICB9KVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG4gICAgJCh0aGlzLl9zY3JvbGxFbGVtZW50KS5vZmYoRVZFTlRfS0VZKVxuXG4gICAgdGhpcy5fZWxlbWVudCAgICAgICA9IG51bGxcbiAgICB0aGlzLl9zY3JvbGxFbGVtZW50ID0gbnVsbFxuICAgIHRoaXMuX2NvbmZpZyAgICAgICAgPSBudWxsXG4gICAgdGhpcy5fc2VsZWN0b3IgICAgICA9IG51bGxcbiAgICB0aGlzLl9vZmZzZXRzICAgICAgID0gbnVsbFxuICAgIHRoaXMuX3RhcmdldHMgICAgICAgPSBudWxsXG4gICAgdGhpcy5fYWN0aXZlVGFyZ2V0ICA9IG51bGxcbiAgICB0aGlzLl9zY3JvbGxIZWlnaHQgID0gbnVsbFxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uRGVmYXVsdCxcbiAgICAgIC4uLnR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcudGFyZ2V0ICE9PSAnc3RyaW5nJyAmJiBVdGlsLmlzRWxlbWVudChjb25maWcudGFyZ2V0KSkge1xuICAgICAgbGV0IGlkID0gJChjb25maWcudGFyZ2V0KS5hdHRyKCdpZCcpXG4gICAgICBpZiAoIWlkKSB7XG4gICAgICAgIGlkID0gVXRpbC5nZXRVSUQoTkFNRSlcbiAgICAgICAgJChjb25maWcudGFyZ2V0KS5hdHRyKCdpZCcsIGlkKVxuICAgICAgfVxuICAgICAgY29uZmlnLnRhcmdldCA9IGAjJHtpZH1gXG4gICAgfVxuXG4gICAgVXRpbC50eXBlQ2hlY2tDb25maWcoTkFNRSwgY29uZmlnLCBEZWZhdWx0VHlwZSlcblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9nZXRTY3JvbGxUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbEVsZW1lbnQgPT09IHdpbmRvd1xuICAgICAgPyB0aGlzLl9zY3JvbGxFbGVtZW50LnBhZ2VZT2Zmc2V0IDogdGhpcy5fc2Nyb2xsRWxlbWVudC5zY3JvbGxUb3BcbiAgfVxuXG4gIF9nZXRTY3JvbGxIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IHx8IE1hdGgubWF4KFxuICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0XG4gICAgKVxuICB9XG5cbiAgX2dldE9mZnNldEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsRWxlbWVudCA9PT0gd2luZG93XG4gICAgICA/IHdpbmRvdy5pbm5lckhlaWdodCA6IHRoaXMuX3Njcm9sbEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG4gIH1cblxuICBfcHJvY2VzcygpIHtcbiAgICBjb25zdCBzY3JvbGxUb3AgICAgPSB0aGlzLl9nZXRTY3JvbGxUb3AoKSArIHRoaXMuX2NvbmZpZy5vZmZzZXRcbiAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSB0aGlzLl9nZXRTY3JvbGxIZWlnaHQoKVxuICAgIGNvbnN0IG1heFNjcm9sbCAgICA9IHRoaXMuX2NvbmZpZy5vZmZzZXQgKyBzY3JvbGxIZWlnaHQgLSB0aGlzLl9nZXRPZmZzZXRIZWlnaHQoKVxuXG4gICAgaWYgKHRoaXMuX3Njcm9sbEhlaWdodCAhPT0gc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICB0aGlzLnJlZnJlc2goKVxuICAgIH1cblxuICAgIGlmIChzY3JvbGxUb3AgPj0gbWF4U2Nyb2xsKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLl90YXJnZXRzW3RoaXMuX3RhcmdldHMubGVuZ3RoIC0gMV1cblxuICAgICAgaWYgKHRoaXMuX2FjdGl2ZVRhcmdldCAhPT0gdGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuX2FjdGl2YXRlKHRhcmdldClcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9hY3RpdmVUYXJnZXQgJiYgc2Nyb2xsVG9wIDwgdGhpcy5fb2Zmc2V0c1swXSAmJiB0aGlzLl9vZmZzZXRzWzBdID4gMCkge1xuICAgICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gbnVsbFxuICAgICAgdGhpcy5fY2xlYXIoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IHRoaXMuX29mZnNldHMubGVuZ3RoOyBpLS07KSB7XG4gICAgICBjb25zdCBpc0FjdGl2ZVRhcmdldCA9IHRoaXMuX2FjdGl2ZVRhcmdldCAhPT0gdGhpcy5fdGFyZ2V0c1tpXSAmJlxuICAgICAgICAgIHNjcm9sbFRvcCA+PSB0aGlzLl9vZmZzZXRzW2ldICYmXG4gICAgICAgICAgKHR5cGVvZiB0aGlzLl9vZmZzZXRzW2kgKyAxXSA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgICAgICAgc2Nyb2xsVG9wIDwgdGhpcy5fb2Zmc2V0c1tpICsgMV0pXG5cbiAgICAgIGlmIChpc0FjdGl2ZVRhcmdldCkge1xuICAgICAgICB0aGlzLl9hY3RpdmF0ZSh0aGlzLl90YXJnZXRzW2ldKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9hY3RpdmF0ZSh0YXJnZXQpIHtcbiAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSB0YXJnZXRcblxuICAgIHRoaXMuX2NsZWFyKClcblxuICAgIGNvbnN0IHF1ZXJpZXMgPSB0aGlzLl9zZWxlY3RvclxuICAgICAgLnNwbGl0KCcsJylcbiAgICAgIC5tYXAoKHNlbGVjdG9yKSA9PiBgJHtzZWxlY3Rvcn1bZGF0YS10YXJnZXQ9XCIke3RhcmdldH1cIl0sJHtzZWxlY3Rvcn1baHJlZj1cIiR7dGFyZ2V0fVwiXWApXG5cbiAgICBjb25zdCAkbGluayA9ICQoW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJpZXMuam9pbignLCcpKSkpXG5cbiAgICBpZiAoJGxpbmsuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9EUk9QRE9XTl9JVEVNKSkge1xuICAgICAgJGxpbmsuY2xvc2VzdChTRUxFQ1RPUl9EUk9QRE9XTilcbiAgICAgICAgLmZpbmQoU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFKVxuICAgICAgICAuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICAkbGluay5hZGRDbGFzcyhDTEFTU19OQU1FX0FDVElWRSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2V0IHRyaWdnZXJlZCBsaW5rIGFzIGFjdGl2ZVxuICAgICAgJGxpbmsuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICAvLyBTZXQgdHJpZ2dlcmVkIGxpbmtzIHBhcmVudHMgYXMgYWN0aXZlXG4gICAgICAvLyBXaXRoIGJvdGggPHVsPiBhbmQgPG5hdj4gbWFya3VwIGEgcGFyZW50IGlzIHRoZSBwcmV2aW91cyBzaWJsaW5nIG9mIGFueSBuYXYgYW5jZXN0b3JcbiAgICAgICRsaW5rLnBhcmVudHMoU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVApXG4gICAgICAgIC5wcmV2KGAke1NFTEVDVE9SX05BVl9MSU5LU30sICR7U0VMRUNUT1JfTElTVF9JVEVNU31gKVxuICAgICAgICAuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICAvLyBIYW5kbGUgc3BlY2lhbCBjYXNlIHdoZW4gLm5hdi1saW5rIGlzIGluc2lkZSAubmF2LWl0ZW1cbiAgICAgICRsaW5rLnBhcmVudHMoU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVApXG4gICAgICAgIC5wcmV2KFNFTEVDVE9SX05BVl9JVEVNUylcbiAgICAgICAgLmNoaWxkcmVuKFNFTEVDVE9SX05BVl9MSU5LUylcbiAgICAgICAgLmFkZENsYXNzKENMQVNTX05BTUVfQUNUSVZFKVxuICAgIH1cblxuICAgICQodGhpcy5fc2Nyb2xsRWxlbWVudCkudHJpZ2dlcihFVkVOVF9BQ1RJVkFURSwge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGFyZ2V0XG4gICAgfSlcbiAgfVxuXG4gIF9jbGVhcigpIHtcbiAgICBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fc2VsZWN0b3IpKVxuICAgICAgLmZpbHRlcigobm9kZSkgPT4gbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9BQ1RJVkUpKVxuICAgICAgLmZvckVhY2goKG5vZGUpID0+IG5vZGUuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSkpXG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gJCh0aGlzKS5kYXRhKERBVEFfS0VZKVxuICAgICAgY29uc3QgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZ1xuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBTY3JvbGxTcHkodGhpcywgX2NvbmZpZylcbiAgICAgICAgJCh0aGlzKS5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQod2luZG93KS5vbihFVkVOVF9MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gIGNvbnN0IHNjcm9sbFNweXMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfREFUQV9TUFkpKVxuICBjb25zdCBzY3JvbGxTcHlzTGVuZ3RoID0gc2Nyb2xsU3B5cy5sZW5ndGhcblxuICBmb3IgKGxldCBpID0gc2Nyb2xsU3B5c0xlbmd0aDsgaS0tOykge1xuICAgIGNvbnN0ICRzcHkgPSAkKHNjcm9sbFNweXNbaV0pXG4gICAgU2Nyb2xsU3B5Ll9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkc3B5LCAkc3B5LmRhdGEoKSlcbiAgfVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSA9IFNjcm9sbFNweS5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gU2Nyb2xsU3B5XG4kLmZuW05BTUVdLm5vQ29uZmxpY3QgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIFNjcm9sbFNweS5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbFNweVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC41LjApOiB0YWIuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSAgICAgICAgICAgICAgID0gJ3RhYidcbmNvbnN0IFZFUlNJT04gICAgICAgICAgICA9ICc0LjUuMCdcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICA9ICdicy50YWInXG5jb25zdCBFVkVOVF9LRVkgICAgICAgICAgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZICAgICAgID0gJy5kYXRhLWFwaSdcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cblxuY29uc3QgRVZFTlRfSElERSAgICAgICAgICAgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiAgICAgICAgID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1cgICAgICAgICAgID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiAgICAgICAgICA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0RST1BET1dOX01FTlUgPSAnZHJvcGRvd24tbWVudSdcbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFICAgICAgICA9ICdhY3RpdmUnXG5jb25zdCBDTEFTU19OQU1FX0RJU0FCTEVEICAgICAgPSAnZGlzYWJsZWQnXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgICAgICAgICAgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyAgICAgICAgICA9ICdzaG93J1xuXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTiAgICAgICAgICAgICAgPSAnLmRyb3Bkb3duJ1xuY29uc3QgU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVAgICAgICAgID0gJy5uYXYsIC5saXN0LWdyb3VwJ1xuY29uc3QgU0VMRUNUT1JfQUNUSVZFICAgICAgICAgICAgICAgID0gJy5hY3RpdmUnXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkVfVUwgICAgICAgICAgICAgPSAnPiBsaSA+IC5hY3RpdmUnXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSAgICAgICAgICAgPSAnW2RhdGEtdG9nZ2xlPVwidGFiXCJdLCBbZGF0YS10b2dnbGU9XCJwaWxsXCJdLCBbZGF0YS10b2dnbGU9XCJsaXN0XCJdJ1xuY29uc3QgU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFICAgICAgID0gJy5kcm9wZG93bi10b2dnbGUnXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9BQ1RJVkVfQ0hJTEQgPSAnPiAuZHJvcGRvd24tbWVudSAuYWN0aXZlJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgVGFiIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUgJiZcbiAgICAgICAgdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSAmJlxuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfQUNUSVZFKSB8fFxuICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENMQVNTX05BTUVfRElTQUJMRUQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgdGFyZ2V0XG4gICAgbGV0IHByZXZpb3VzXG4gICAgY29uc3QgbGlzdEVsZW1lbnQgPSAkKHRoaXMuX2VsZW1lbnQpLmNsb3Nlc3QoU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVApWzBdXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgIGlmIChsaXN0RWxlbWVudCkge1xuICAgICAgY29uc3QgaXRlbVNlbGVjdG9yID0gbGlzdEVsZW1lbnQubm9kZU5hbWUgPT09ICdVTCcgfHwgbGlzdEVsZW1lbnQubm9kZU5hbWUgPT09ICdPTCcgPyBTRUxFQ1RPUl9BQ1RJVkVfVUwgOiBTRUxFQ1RPUl9BQ1RJVkVcbiAgICAgIHByZXZpb3VzID0gJC5tYWtlQXJyYXkoJChsaXN0RWxlbWVudCkuZmluZChpdGVtU2VsZWN0b3IpKVxuICAgICAgcHJldmlvdXMgPSBwcmV2aW91c1twcmV2aW91cy5sZW5ndGggLSAxXVxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9ICQuRXZlbnQoRVZFTlRfSElERSwge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgIH0pXG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSAkLkV2ZW50KEVWRU5UX1NIT1csIHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHByZXZpb3VzXG4gICAgfSlcblxuICAgIGlmIChwcmV2aW91cykge1xuICAgICAgJChwcmV2aW91cykudHJpZ2dlcihoaWRlRXZlbnQpXG4gICAgfVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKHNob3dFdmVudClcblxuICAgIGlmIChzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHxcbiAgICAgICAgaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZhdGUoXG4gICAgICB0aGlzLl9lbGVtZW50LFxuICAgICAgbGlzdEVsZW1lbnRcbiAgICApXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGhpZGRlbkV2ZW50ID0gJC5FdmVudChFVkVOVF9ISURERU4sIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgICAgfSlcblxuICAgICAgY29uc3Qgc2hvd25FdmVudCA9ICQuRXZlbnQoRVZFTlRfU0hPV04sIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogcHJldmlvdXNcbiAgICAgIH0pXG5cbiAgICAgICQocHJldmlvdXMpLnRyaWdnZXIoaGlkZGVuRXZlbnQpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc2hvd25FdmVudClcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0KSB7XG4gICAgICB0aGlzLl9hY3RpdmF0ZSh0YXJnZXQsIHRhcmdldC5wYXJlbnROb2RlLCBjb21wbGV0ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcGxldGUoKVxuICAgIH1cbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2FjdGl2YXRlKGVsZW1lbnQsIGNvbnRhaW5lciwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBhY3RpdmVFbGVtZW50cyA9IGNvbnRhaW5lciAmJiAoY29udGFpbmVyLm5vZGVOYW1lID09PSAnVUwnIHx8IGNvbnRhaW5lci5ub2RlTmFtZSA9PT0gJ09MJylcbiAgICAgID8gJChjb250YWluZXIpLmZpbmQoU0VMRUNUT1JfQUNUSVZFX1VMKVxuICAgICAgOiAkKGNvbnRhaW5lcikuY2hpbGRyZW4oU0VMRUNUT1JfQUNUSVZFKVxuXG4gICAgY29uc3QgYWN0aXZlID0gYWN0aXZlRWxlbWVudHNbMF1cbiAgICBjb25zdCBpc1RyYW5zaXRpb25pbmcgPSBjYWxsYmFjayAmJiAoYWN0aXZlICYmICQoYWN0aXZlKS5oYXNDbGFzcyhDTEFTU19OQU1FX0ZBREUpKVxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4gdGhpcy5fdHJhbnNpdGlvbkNvbXBsZXRlKFxuICAgICAgZWxlbWVudCxcbiAgICAgIGFjdGl2ZSxcbiAgICAgIGNhbGxiYWNrXG4gICAgKVxuXG4gICAgaWYgKGFjdGl2ZSAmJiBpc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQoYWN0aXZlKVxuXG4gICAgICAkKGFjdGl2ZSlcbiAgICAgICAgLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfU0hPVylcbiAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjb21wbGV0ZSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcGxldGUoKVxuICAgIH1cbiAgfVxuXG4gIF90cmFuc2l0aW9uQ29tcGxldGUoZWxlbWVudCwgYWN0aXZlLCBjYWxsYmFjaykge1xuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICQoYWN0aXZlKS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0FDVElWRSlcblxuICAgICAgY29uc3QgZHJvcGRvd25DaGlsZCA9ICQoYWN0aXZlLnBhcmVudE5vZGUpLmZpbmQoXG4gICAgICAgIFNFTEVDVE9SX0RST1BET1dOX0FDVElWRV9DSElMRFxuICAgICAgKVswXVxuXG4gICAgICBpZiAoZHJvcGRvd25DaGlsZCkge1xuICAgICAgICAkKGRyb3Bkb3duQ2hpbGQpLnJlbW92ZUNsYXNzKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aXZlLmdldEF0dHJpYnV0ZSgncm9sZScpID09PSAndGFiJykge1xuICAgICAgICBhY3RpdmUuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpXG4gICAgICB9XG4gICAgfVxuXG4gICAgJChlbGVtZW50KS5hZGRDbGFzcyhDTEFTU19OQU1FX0FDVElWRSlcbiAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSA9PT0gJ3RhYicpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgdHJ1ZSlcbiAgICB9XG5cbiAgICBVdGlsLnJlZmxvdyhlbGVtZW50KVxuXG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRkFERSkpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAmJiAkKGVsZW1lbnQucGFyZW50Tm9kZSkuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9EUk9QRE9XTl9NRU5VKSkge1xuICAgICAgY29uc3QgZHJvcGRvd25FbGVtZW50ID0gJChlbGVtZW50KS5jbG9zZXN0KFNFTEVDVE9SX0RST1BET1dOKVswXVxuXG4gICAgICBpZiAoZHJvcGRvd25FbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duVG9nZ2xlTGlzdCA9IFtdLnNsaWNlLmNhbGwoZHJvcGRvd25FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFKSlcblxuICAgICAgICAkKGRyb3Bkb3duVG9nZ2xlTGlzdCkuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcbiAgICB9XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKClcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKVxuICAgICAgbGV0IGRhdGEgPSAkdGhpcy5kYXRhKERBVEFfS0VZKVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBUYWIodGhpcylcbiAgICAgICAgJHRoaXMuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kKGRvY3VtZW50KVxuICAub24oRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgVGFiLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRoaXMpLCAnc2hvdycpXG4gIH0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gPSBUYWIuX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFRhYlxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBUYWIuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuNS4wKTogdG9hc3QuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSAgICAgICAgICAgICAgID0gJ3RvYXN0J1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgID0gJzQuNS4wJ1xuY29uc3QgREFUQV9LRVkgICAgICAgICAgID0gJ2JzLnRvYXN0J1xuY29uc3QgRVZFTlRfS0VZICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV1cblxuY29uc3QgRVZFTlRfQ0xJQ0tfRElTTUlTUyA9IGBjbGljay5kaXNtaXNzJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERSAgICAgICAgICA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOICAgICAgICA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XICAgICAgICAgID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiAgICAgICAgID0gYHNob3duJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgICAgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfSElERSAgICA9ICdoaWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XICAgID0gJ3Nob3cnXG5jb25zdCBDTEFTU19OQU1FX1NIT1dJTkcgPSAnc2hvd2luZydcblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGFuaW1hdGlvbiA6ICdib29sZWFuJyxcbiAgYXV0b2hpZGUgIDogJ2Jvb2xlYW4nLFxuICBkZWxheSAgICAgOiAnbnVtYmVyJ1xufVxuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBhbmltYXRpb24gOiB0cnVlLFxuICBhdXRvaGlkZSAgOiB0cnVlLFxuICBkZWxheSAgICAgOiA1MDBcbn1cblxuY29uc3QgU0VMRUNUT1JfREFUQV9ESVNNSVNTID0gJ1tkYXRhLWRpc21pc3M9XCJ0b2FzdFwiXSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIFRvYXN0IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLl9jb25maWcgID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl90aW1lb3V0ID0gbnVsbFxuICAgIHRoaXMuX3NldExpc3RlbmVycygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICAvLyBQdWJsaWNcblxuICBzaG93KCkge1xuICAgIGNvbnN0IHNob3dFdmVudCA9ICQuRXZlbnQoRVZFTlRfU0hPVylcblxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93RXZlbnQpXG4gICAgaWYgKHNob3dFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0ZBREUpXG4gICAgfVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XSU5HKVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKEVWRU5UX1NIT1dOKVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmF1dG9oaWRlKSB7XG4gICAgICAgIHRoaXMuX3RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgICB9LCB0aGlzLl9jb25maWcuZGVsYXkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfSElERSlcbiAgICBVdGlsLnJlZmxvdyh0aGlzLl9lbGVtZW50KVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1dJTkcpXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9ICQuRXZlbnQoRVZFTlRfSElERSlcblxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihoaWRlRXZlbnQpXG4gICAgaWYgKGhpZGVFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fY2xvc2UoKVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dClcbiAgICB0aGlzLl90aW1lb3V0ID0gbnVsbFxuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfU0hPVykpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgfVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRVZFTlRfQ0xJQ0tfRElTTUlTUylcblxuICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbFxuICAgIHRoaXMuX2NvbmZpZyAgPSBudWxsXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uJCh0aGlzLl9lbGVtZW50KS5kYXRhKCksXG4gICAgICAuLi50eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fVxuICAgIH1cblxuICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKFxuICAgICAgTkFNRSxcbiAgICAgIGNvbmZpZyxcbiAgICAgIHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFR5cGVcbiAgICApXG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfc2V0TGlzdGVuZXJzKCkge1xuICAgICQodGhpcy5fZWxlbWVudCkub24oRVZFTlRfQ0xJQ0tfRElTTUlTUywgU0VMRUNUT1JfREFUQV9ESVNNSVNTLCAoKSA9PiB0aGlzLmhpZGUoKSlcbiAgfVxuXG4gIF9jbG9zZSgpIHtcbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0hJREUpXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoRVZFTlRfSElEREVOKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5hbmltYXRpb24pIHtcbiAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCAkZWxlbWVudCA9ICQodGhpcylcbiAgICAgIGxldCBkYXRhICAgICAgID0gJGVsZW1lbnQuZGF0YShEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IFRvYXN0KHRoaXMsIF9jb25maWcpXG4gICAgICAgICRlbGVtZW50LmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10odGhpcylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gICAgICAgICAgICAgPSBUb2FzdC5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gVG9hc3RcbiQuZm5bTkFNRV0ubm9Db25mbGljdCAgPSAoKSA9PiB7XG4gICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1RcbiAgcmV0dXJuIFRvYXN0Ll9qUXVlcnlJbnRlcmZhY2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9hc3RcbiIsImV4cG9ydCBkZWZhdWx0IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCc7XG4iLCJpbXBvcnQgaXNCcm93c2VyIGZyb20gJy4vaXNCcm93c2VyJztcblxuY29uc3QgdGltZW91dER1cmF0aW9uID0gKGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGxvbmdlclRpbWVvdXRCcm93c2VycyA9IFsnRWRnZScsICdUcmlkZW50JywgJ0ZpcmVmb3gnXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb25nZXJUaW1lb3V0QnJvd3NlcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoaXNCcm93c2VyICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihsb25nZXJUaW1lb3V0QnJvd3NlcnNbaV0pID49IDApIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfVxuICByZXR1cm4gMDtcbn0oKSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWNyb3Rhc2tEZWJvdW5jZShmbikge1xuICBsZXQgY2FsbGVkID0gZmFsc2VcbiAgcmV0dXJuICgpID0+IHtcbiAgICBpZiAoY2FsbGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY2FsbGVkID0gdHJ1ZVxuICAgIHdpbmRvdy5Qcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIGNhbGxlZCA9IGZhbHNlXG4gICAgICBmbigpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGFza0RlYm91bmNlKGZuKSB7XG4gIGxldCBzY2hlZHVsZWQgPSBmYWxzZTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBpZiAoIXNjaGVkdWxlZCkge1xuICAgICAgc2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzY2hlZHVsZWQgPSBmYWxzZTtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0sIHRpbWVvdXREdXJhdGlvbik7XG4gICAgfVxuICB9O1xufVxuXG5jb25zdCBzdXBwb3J0c01pY3JvVGFza3MgPSBpc0Jyb3dzZXIgJiYgd2luZG93LlByb21pc2VcblxuXG4vKipcbiogQ3JlYXRlIGEgZGVib3VuY2VkIHZlcnNpb24gb2YgYSBtZXRob2QsIHRoYXQncyBhc3luY2hyb25vdXNseSBkZWZlcnJlZFxuKiBidXQgY2FsbGVkIGluIHRoZSBtaW5pbXVtIHRpbWUgcG9zc2libGUuXG4qXG4qIEBtZXRob2RcbiogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuKiBAYXJndW1lbnQge0Z1bmN0aW9ufSBmblxuKiBAcmV0dXJucyB7RnVuY3Rpb259XG4qL1xuZXhwb3J0IGRlZmF1bHQgKHN1cHBvcnRzTWljcm9UYXNrc1xuICA/IG1pY3JvdGFza0RlYm91bmNlXG4gIDogdGFza0RlYm91bmNlKTtcbiIsIi8qKlxuICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhcmlhYmxlIGlzIGEgZnVuY3Rpb25cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7QW55fSBmdW5jdGlvblRvQ2hlY2sgLSB2YXJpYWJsZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IGFuc3dlciB0bzogaXMgYSBmdW5jdGlvbj9cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNGdW5jdGlvbihmdW5jdGlvblRvQ2hlY2spIHtcbiAgY29uc3QgZ2V0VHlwZSA9IHt9O1xuICByZXR1cm4gKFxuICAgIGZ1bmN0aW9uVG9DaGVjayAmJlxuICAgIGdldFR5cGUudG9TdHJpbmcuY2FsbChmdW5jdGlvblRvQ2hlY2spID09PSAnW29iamVjdCBGdW5jdGlvbl0nXG4gICk7XG59XG4iLCIvKipcbiAqIEdldCBDU1MgY29tcHV0ZWQgcHJvcGVydHkgb2YgdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWVtZW50fSBlbGVtZW50XG4gKiBAYXJndW1lbnQge1N0cmluZ30gcHJvcGVydHlcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQsIHByb3BlcnR5KSB7XG4gIGlmIChlbGVtZW50Lm5vZGVUeXBlICE9PSAxKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIC8vIE5PVEU6IDEgRE9NIGFjY2VzcyBoZXJlXG4gIGNvbnN0IHdpbmRvdyA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgY29uc3QgY3NzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbCk7XG4gIHJldHVybiBwcm9wZXJ0eSA/IGNzc1twcm9wZXJ0eV0gOiBjc3M7XG59XG4iLCIvKipcbiAqIFJldHVybnMgdGhlIHBhcmVudE5vZGUgb3IgdGhlIGhvc3Qgb2YgdGhlIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge0VsZW1lbnR9IHBhcmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQYXJlbnROb2RlKGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQubm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG4gIHJldHVybiBlbGVtZW50LnBhcmVudE5vZGUgfHwgZWxlbWVudC5ob3N0O1xufVxuIiwiaW1wb3J0IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSBmcm9tICcuL2dldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSc7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tICcuL2dldFBhcmVudE5vZGUnO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIHNjcm9sbGluZyBwYXJlbnQgb2YgdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge0VsZW1lbnR9IHNjcm9sbCBwYXJlbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQpIHtcbiAgLy8gUmV0dXJuIGJvZHksIGBnZXRTY3JvbGxgIHdpbGwgdGFrZSBjYXJlIHRvIGdldCB0aGUgY29ycmVjdCBgc2Nyb2xsVG9wYCBmcm9tIGl0XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybiBkb2N1bWVudC5ib2R5XG4gIH1cblxuICBzd2l0Y2ggKGVsZW1lbnQubm9kZU5hbWUpIHtcbiAgICBjYXNlICdIVE1MJzpcbiAgICBjYXNlICdCT0RZJzpcbiAgICAgIHJldHVybiBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYm9keVxuICAgIGNhc2UgJyNkb2N1bWVudCc6XG4gICAgICByZXR1cm4gZWxlbWVudC5ib2R5XG4gIH1cblxuICAvLyBGaXJlZm94IHdhbnQgdXMgdG8gY2hlY2sgYC14YCBhbmQgYC15YCB2YXJpYXRpb25zIGFzIHdlbGxcbiAgY29uc3QgeyBvdmVyZmxvdywgb3ZlcmZsb3dYLCBvdmVyZmxvd1kgfSA9IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbGVtZW50KTtcbiAgaWYgKC8oYXV0b3xzY3JvbGx8b3ZlcmxheSkvLnRlc3Qob3ZlcmZsb3cgKyBvdmVyZmxvd1kgKyBvdmVyZmxvd1gpKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4gZ2V0U2Nyb2xsUGFyZW50KGdldFBhcmVudE5vZGUoZWxlbWVudCkpO1xufVxuIiwiLyoqXG4gKiBSZXR1cm5zIHRoZSByZWZlcmVuY2Ugbm9kZSBvZiB0aGUgcmVmZXJlbmNlIG9iamVjdCwgb3IgdGhlIHJlZmVyZW5jZSBvYmplY3QgaXRzZWxmLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtFbGVtZW50fE9iamVjdH0gcmVmZXJlbmNlIC0gdGhlIHJlZmVyZW5jZSBlbGVtZW50ICh0aGUgcG9wcGVyIHdpbGwgYmUgcmVsYXRpdmUgdG8gdGhpcylcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBwYXJlbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UmVmZXJlbmNlTm9kZShyZWZlcmVuY2UpIHtcbiAgcmV0dXJuIHJlZmVyZW5jZSAmJiByZWZlcmVuY2UucmVmZXJlbmNlTm9kZSA/IHJlZmVyZW5jZS5yZWZlcmVuY2VOb2RlIDogcmVmZXJlbmNlO1xufVxuIiwiaW1wb3J0IGlzQnJvd3NlciBmcm9tICcuL2lzQnJvd3Nlcic7XG5cbmNvbnN0IGlzSUUxMSA9IGlzQnJvd3NlciAmJiAhISh3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgZG9jdW1lbnQuZG9jdW1lbnRNb2RlKTtcbmNvbnN0IGlzSUUxMCA9IGlzQnJvd3NlciAmJiAvTVNJRSAxMC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIHRoZSBicm93c2VyIGlzIEludGVybmV0IEV4cGxvcmVyXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge051bWJlcn0gdmVyc2lvbiB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IGlzSUVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNJRSh2ZXJzaW9uKSB7XG4gIGlmICh2ZXJzaW9uID09PSAxMSkge1xuICAgIHJldHVybiBpc0lFMTE7XG4gIH1cbiAgaWYgKHZlcnNpb24gPT09IDEwKSB7XG4gICAgcmV0dXJuIGlzSUUxMDtcbiAgfVxuICByZXR1cm4gaXNJRTExIHx8IGlzSUUxMDtcbn1cbiIsImltcG9ydCBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkgZnJvbSAnLi9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHknO1xuaW1wb3J0IGlzSUUgZnJvbSAnLi9pc0lFJztcbi8qKlxuICogUmV0dXJucyB0aGUgb2Zmc2V0IHBhcmVudCBvZiB0aGUgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudH0gb2Zmc2V0IHBhcmVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9XG5cbiAgY29uc3Qgbm9PZmZzZXRQYXJlbnQgPSBpc0lFKDEwKSA/IGRvY3VtZW50LmJvZHkgOiBudWxsO1xuXG4gIC8vIE5PVEU6IDEgRE9NIGFjY2VzcyBoZXJlXG4gIGxldCBvZmZzZXRQYXJlbnQgPSBlbGVtZW50Lm9mZnNldFBhcmVudCB8fCBudWxsO1xuICAvLyBTa2lwIGhpZGRlbiBlbGVtZW50cyB3aGljaCBkb24ndCBoYXZlIGFuIG9mZnNldFBhcmVudFxuICB3aGlsZSAob2Zmc2V0UGFyZW50ID09PSBub09mZnNldFBhcmVudCAmJiBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZykge1xuICAgIG9mZnNldFBhcmVudCA9IChlbGVtZW50ID0gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcpLm9mZnNldFBhcmVudDtcbiAgfVxuXG4gIGNvbnN0IG5vZGVOYW1lID0gb2Zmc2V0UGFyZW50ICYmIG9mZnNldFBhcmVudC5ub2RlTmFtZTtcblxuICBpZiAoIW5vZGVOYW1lIHx8IG5vZGVOYW1lID09PSAnQk9EWScgfHwgbm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgIHJldHVybiBlbGVtZW50ID8gZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfVxuXG4gIC8vIC5vZmZzZXRQYXJlbnQgd2lsbCByZXR1cm4gdGhlIGNsb3Nlc3QgVEgsIFREIG9yIFRBQkxFIGluIGNhc2VcbiAgLy8gbm8gb2Zmc2V0UGFyZW50IGlzIHByZXNlbnQsIEkgaGF0ZSB0aGlzIGpvYi4uLlxuICBpZiAoXG4gICAgWydUSCcsICdURCcsICdUQUJMRSddLmluZGV4T2Yob2Zmc2V0UGFyZW50Lm5vZGVOYW1lKSAhPT0gLTEgJiZcbiAgICBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkob2Zmc2V0UGFyZW50LCAncG9zaXRpb24nKSA9PT0gJ3N0YXRpYydcbiAgKSB7XG4gICAgcmV0dXJuIGdldE9mZnNldFBhcmVudChvZmZzZXRQYXJlbnQpO1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldFBhcmVudDtcbn1cbiIsImltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSAnLi9nZXRPZmZzZXRQYXJlbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc09mZnNldENvbnRhaW5lcihlbGVtZW50KSB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGVsZW1lbnQ7XG4gIGlmIChub2RlTmFtZSA9PT0gJ0JPRFknKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgbm9kZU5hbWUgPT09ICdIVE1MJyB8fCBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCkgPT09IGVsZW1lbnRcbiAgKTtcbn1cbiIsIi8qKlxuICogRmluZHMgdGhlIHJvb3Qgbm9kZSAoZG9jdW1lbnQsIHNoYWRvd0RPTSByb290KSBvZiB0aGUgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBub2RlXG4gKiBAcmV0dXJucyB7RWxlbWVudH0gcm9vdCBub2RlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFJvb3Qobm9kZSkge1xuICBpZiAobm9kZS5wYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIGdldFJvb3Qobm9kZS5wYXJlbnROb2RlKTtcbiAgfVxuXG4gIHJldHVybiBub2RlO1xufVxuIiwiaW1wb3J0IGlzT2Zmc2V0Q29udGFpbmVyIGZyb20gJy4vaXNPZmZzZXRDb250YWluZXInO1xuaW1wb3J0IGdldFJvb3QgZnJvbSAnLi9nZXRSb290JztcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSAnLi9nZXRPZmZzZXRQYXJlbnQnO1xuXG4vKipcbiAqIEZpbmRzIHRoZSBvZmZzZXQgcGFyZW50IGNvbW1vbiB0byB0aGUgdHdvIHByb3ZpZGVkIG5vZGVzXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnQxXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnQyXG4gKiBAcmV0dXJucyB7RWxlbWVudH0gY29tbW9uIG9mZnNldCBwYXJlbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluZENvbW1vbk9mZnNldFBhcmVudChlbGVtZW50MSwgZWxlbWVudDIpIHtcbiAgLy8gVGhpcyBjaGVjayBpcyBuZWVkZWQgdG8gYXZvaWQgZXJyb3JzIGluIGNhc2Ugb25lIG9mIHRoZSBlbGVtZW50cyBpc24ndCBkZWZpbmVkIGZvciBhbnkgcmVhc29uXG4gIGlmICghZWxlbWVudDEgfHwgIWVsZW1lbnQxLm5vZGVUeXBlIHx8ICFlbGVtZW50MiB8fCAhZWxlbWVudDIubm9kZVR5cGUpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9XG5cbiAgLy8gSGVyZSB3ZSBtYWtlIHN1cmUgdG8gZ2l2ZSBhcyBcInN0YXJ0XCIgdGhlIGVsZW1lbnQgdGhhdCBjb21lcyBmaXJzdCBpbiB0aGUgRE9NXG4gIGNvbnN0IG9yZGVyID1cbiAgICBlbGVtZW50MS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlbGVtZW50MikgJlxuICAgIE5vZGUuRE9DVU1FTlRfUE9TSVRJT05fRk9MTE9XSU5HO1xuICBjb25zdCBzdGFydCA9IG9yZGVyID8gZWxlbWVudDEgOiBlbGVtZW50MjtcbiAgY29uc3QgZW5kID0gb3JkZXIgPyBlbGVtZW50MiA6IGVsZW1lbnQxO1xuXG4gIC8vIEdldCBjb21tb24gYW5jZXN0b3IgY29udGFpbmVyXG4gIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgcmFuZ2Uuc2V0U3RhcnQoc3RhcnQsIDApO1xuICByYW5nZS5zZXRFbmQoZW5kLCAwKTtcbiAgY29uc3QgeyBjb21tb25BbmNlc3RvckNvbnRhaW5lciB9ID0gcmFuZ2U7XG5cbiAgLy8gQm90aCBub2RlcyBhcmUgaW5zaWRlICNkb2N1bWVudFxuICBpZiAoXG4gICAgKGVsZW1lbnQxICE9PSBjb21tb25BbmNlc3RvckNvbnRhaW5lciAmJlxuICAgICAgZWxlbWVudDIgIT09IGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyKSB8fFxuICAgIHN0YXJ0LmNvbnRhaW5zKGVuZClcbiAgKSB7XG4gICAgaWYgKGlzT2Zmc2V0Q29udGFpbmVyKGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyKSkge1xuICAgICAgcmV0dXJuIGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyO1xuICAgIH1cblxuICAgIHJldHVybiBnZXRPZmZzZXRQYXJlbnQoY29tbW9uQW5jZXN0b3JDb250YWluZXIpO1xuICB9XG5cbiAgLy8gb25lIG9mIHRoZSBub2RlcyBpcyBpbnNpZGUgc2hhZG93RE9NLCBmaW5kIHdoaWNoIG9uZVxuICBjb25zdCBlbGVtZW50MXJvb3QgPSBnZXRSb290KGVsZW1lbnQxKTtcbiAgaWYgKGVsZW1lbnQxcm9vdC5ob3N0KSB7XG4gICAgcmV0dXJuIGZpbmRDb21tb25PZmZzZXRQYXJlbnQoZWxlbWVudDFyb290Lmhvc3QsIGVsZW1lbnQyKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmluZENvbW1vbk9mZnNldFBhcmVudChlbGVtZW50MSwgZ2V0Um9vdChlbGVtZW50MikuaG9zdCk7XG4gIH1cbn1cbiIsIi8qKlxuICogR2V0cyB0aGUgc2Nyb2xsIHZhbHVlIG9mIHRoZSBnaXZlbiBlbGVtZW50IGluIHRoZSBnaXZlbiBzaWRlICh0b3AgYW5kIGxlZnQpXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBzaWRlIGB0b3BgIG9yIGBsZWZ0YFxuICogQHJldHVybnMge251bWJlcn0gYW1vdW50IG9mIHNjcm9sbGVkIHBpeGVsc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTY3JvbGwoZWxlbWVudCwgc2lkZSA9ICd0b3AnKSB7XG4gIGNvbnN0IHVwcGVyU2lkZSA9IHNpZGUgPT09ICd0b3AnID8gJ3Njcm9sbFRvcCcgOiAnc2Nyb2xsTGVmdCc7XG4gIGNvbnN0IG5vZGVOYW1lID0gZWxlbWVudC5ub2RlTmFtZTtcblxuICBpZiAobm9kZU5hbWUgPT09ICdCT0RZJyB8fCBub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgY29uc3QgaHRtbCA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgY29uc3Qgc2Nyb2xsaW5nRWxlbWVudCA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50IHx8IGh0bWw7XG4gICAgcmV0dXJuIHNjcm9sbGluZ0VsZW1lbnRbdXBwZXJTaWRlXTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50W3VwcGVyU2lkZV07XG59XG4iLCJpbXBvcnQgZ2V0U2Nyb2xsIGZyb20gJy4vZ2V0U2Nyb2xsJztcblxuLypcbiAqIFN1bSBvciBzdWJ0cmFjdCB0aGUgZWxlbWVudCBzY3JvbGwgdmFsdWVzIChsZWZ0IGFuZCB0b3ApIGZyb20gYSBnaXZlbiByZWN0IG9iamVjdFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtPYmplY3R9IHJlY3QgLSBSZWN0IG9iamVjdCB5b3Ugd2FudCB0byBjaGFuZ2VcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZWxlbWVudCBmcm9tIHRoZSBmdW5jdGlvbiByZWFkcyB0aGUgc2Nyb2xsIHZhbHVlc1xuICogQHBhcmFtIHtCb29sZWFufSBzdWJ0cmFjdCAtIHNldCB0byB0cnVlIGlmIHlvdSB3YW50IHRvIHN1YnRyYWN0IHRoZSBzY3JvbGwgdmFsdWVzXG4gKiBAcmV0dXJuIHtPYmplY3R9IHJlY3QgLSBUaGUgbW9kaWZpZXIgcmVjdCBvYmplY3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5jbHVkZVNjcm9sbChyZWN0LCBlbGVtZW50LCBzdWJ0cmFjdCA9IGZhbHNlKSB7XG4gIGNvbnN0IHNjcm9sbFRvcCA9IGdldFNjcm9sbChlbGVtZW50LCAndG9wJyk7XG4gIGNvbnN0IHNjcm9sbExlZnQgPSBnZXRTY3JvbGwoZWxlbWVudCwgJ2xlZnQnKTtcbiAgY29uc3QgbW9kaWZpZXIgPSBzdWJ0cmFjdCA/IC0xIDogMTtcbiAgcmVjdC50b3AgKz0gc2Nyb2xsVG9wICogbW9kaWZpZXI7XG4gIHJlY3QuYm90dG9tICs9IHNjcm9sbFRvcCAqIG1vZGlmaWVyO1xuICByZWN0LmxlZnQgKz0gc2Nyb2xsTGVmdCAqIG1vZGlmaWVyO1xuICByZWN0LnJpZ2h0ICs9IHNjcm9sbExlZnQgKiBtb2RpZmllcjtcbiAgcmV0dXJuIHJlY3Q7XG59XG4iLCIvKlxuICogSGVscGVyIHRvIGRldGVjdCBib3JkZXJzIG9mIGEgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtDU1NTdHlsZURlY2xhcmF0aW9ufSBzdHlsZXNcbiAqIFJlc3VsdCBvZiBgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5YCBvbiB0aGUgZ2l2ZW4gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IGF4aXMgLSBgeGAgb3IgYHlgXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGJvcmRlcnMgLSBUaGUgYm9yZGVycyBzaXplIG9mIHRoZSBnaXZlbiBheGlzXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCBheGlzKSB7XG4gIGNvbnN0IHNpZGVBID0gYXhpcyA9PT0gJ3gnID8gJ0xlZnQnIDogJ1RvcCc7XG4gIGNvbnN0IHNpZGVCID0gc2lkZUEgPT09ICdMZWZ0JyA/ICdSaWdodCcgOiAnQm90dG9tJztcblxuICByZXR1cm4gKFxuICAgIHBhcnNlRmxvYXQoc3R5bGVzW2Bib3JkZXIke3NpZGVBfVdpZHRoYF0pICtcbiAgICBwYXJzZUZsb2F0KHN0eWxlc1tgYm9yZGVyJHtzaWRlQn1XaWR0aGBdKVxuICApO1xufVxuIiwiaW1wb3J0IGlzSUUgZnJvbSAnLi9pc0lFJztcblxuZnVuY3Rpb24gZ2V0U2l6ZShheGlzLCBib2R5LCBodG1sLCBjb21wdXRlZFN0eWxlKSB7XG4gIHJldHVybiBNYXRoLm1heChcbiAgICBib2R5W2BvZmZzZXQke2F4aXN9YF0sXG4gICAgYm9keVtgc2Nyb2xsJHtheGlzfWBdLFxuICAgIGh0bWxbYGNsaWVudCR7YXhpc31gXSxcbiAgICBodG1sW2BvZmZzZXQke2F4aXN9YF0sXG4gICAgaHRtbFtgc2Nyb2xsJHtheGlzfWBdLFxuICAgIGlzSUUoMTApXG4gICAgICA/IChwYXJzZUludChodG1sW2BvZmZzZXQke2F4aXN9YF0pICsgXG4gICAgICBwYXJzZUludChjb21wdXRlZFN0eWxlW2BtYXJnaW4ke2F4aXMgPT09ICdIZWlnaHQnID8gJ1RvcCcgOiAnTGVmdCd9YF0pICsgXG4gICAgICBwYXJzZUludChjb21wdXRlZFN0eWxlW2BtYXJnaW4ke2F4aXMgPT09ICdIZWlnaHQnID8gJ0JvdHRvbScgOiAnUmlnaHQnfWBdKSlcbiAgICA6IDAgXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvd1NpemVzKGRvY3VtZW50KSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICBjb25zdCBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBjb25zdCBjb21wdXRlZFN0eWxlID0gaXNJRSgxMCkgJiYgZ2V0Q29tcHV0ZWRTdHlsZShodG1sKTtcblxuICByZXR1cm4ge1xuICAgIGhlaWdodDogZ2V0U2l6ZSgnSGVpZ2h0JywgYm9keSwgaHRtbCwgY29tcHV0ZWRTdHlsZSksXG4gICAgd2lkdGg6IGdldFNpemUoJ1dpZHRoJywgYm9keSwgaHRtbCwgY29tcHV0ZWRTdHlsZSksXG4gIH07XG59XG4iLCIvKipcbiAqIEdpdmVuIGVsZW1lbnQgb2Zmc2V0cywgZ2VuZXJhdGUgYW4gb3V0cHV0IHNpbWlsYXIgdG8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge09iamVjdH0gb2Zmc2V0c1xuICogQHJldHVybnMge09iamVjdH0gQ2xpZW50UmVjdCBsaWtlIG91dHB1dFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDbGllbnRSZWN0KG9mZnNldHMpIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5vZmZzZXRzLFxuICAgIHJpZ2h0OiBvZmZzZXRzLmxlZnQgKyBvZmZzZXRzLndpZHRoLFxuICAgIGJvdHRvbTogb2Zmc2V0cy50b3AgKyBvZmZzZXRzLmhlaWdodCxcbiAgfTtcbn1cbiIsImltcG9ydCBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkgZnJvbSAnLi9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHknO1xuaW1wb3J0IGdldEJvcmRlcnNTaXplIGZyb20gJy4vZ2V0Qm9yZGVyc1NpemUnO1xuaW1wb3J0IGdldFdpbmRvd1NpemVzIGZyb20gJy4vZ2V0V2luZG93U2l6ZXMnO1xuaW1wb3J0IGdldFNjcm9sbCBmcm9tICcuL2dldFNjcm9sbCc7XG5pbXBvcnQgZ2V0Q2xpZW50UmVjdCBmcm9tICcuL2dldENsaWVudFJlY3QnO1xuaW1wb3J0IGlzSUUgZnJvbSAnLi9pc0lFJztcblxuLyoqXG4gKiBHZXQgYm91bmRpbmcgY2xpZW50IHJlY3Qgb2YgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybiB7T2JqZWN0fSBjbGllbnQgcmVjdFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCkge1xuICBsZXQgcmVjdCA9IHt9O1xuXG4gIC8vIElFMTAgMTAgRklYOiBQbGVhc2UsIGRvbid0IGFzaywgdGhlIGVsZW1lbnQgaXNuJ3RcbiAgLy8gY29uc2lkZXJlZCBpbiBET00gaW4gc29tZSBjaXJjdW1zdGFuY2VzLi4uXG4gIC8vIFRoaXMgaXNuJ3QgcmVwcm9kdWNpYmxlIGluIElFMTAgY29tcGF0aWJpbGl0eSBtb2RlIG9mIElFMTFcbiAgdHJ5IHtcbiAgICBpZiAoaXNJRSgxMCkpIHtcbiAgICAgIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICd0b3AnKTtcbiAgICAgIGNvbnN0IHNjcm9sbExlZnQgPSBnZXRTY3JvbGwoZWxlbWVudCwgJ2xlZnQnKTtcbiAgICAgIHJlY3QudG9wICs9IHNjcm9sbFRvcDtcbiAgICAgIHJlY3QubGVmdCArPSBzY3JvbGxMZWZ0O1xuICAgICAgcmVjdC5ib3R0b20gKz0gc2Nyb2xsVG9wO1xuICAgICAgcmVjdC5yaWdodCArPSBzY3JvbGxMZWZ0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH1cbiAgfVxuICBjYXRjaChlKXt9XG5cbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICB0b3A6IHJlY3QudG9wLFxuICAgIHdpZHRoOiByZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0LFxuICAgIGhlaWdodDogcmVjdC5ib3R0b20gLSByZWN0LnRvcCxcbiAgfTtcblxuICAvLyBzdWJ0cmFjdCBzY3JvbGxiYXIgc2l6ZSBmcm9tIHNpemVzXG4gIGNvbnN0IHNpemVzID0gZWxlbWVudC5ub2RlTmFtZSA9PT0gJ0hUTUwnID8gZ2V0V2luZG93U2l6ZXMoZWxlbWVudC5vd25lckRvY3VtZW50KSA6IHt9O1xuICBjb25zdCB3aWR0aCA9XG4gICAgc2l6ZXMud2lkdGggfHwgZWxlbWVudC5jbGllbnRXaWR0aCB8fCByZXN1bHQud2lkdGg7XG4gIGNvbnN0IGhlaWdodCA9XG4gICAgc2l6ZXMuaGVpZ2h0IHx8IGVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IHJlc3VsdC5oZWlnaHQ7XG5cbiAgbGV0IGhvcml6U2Nyb2xsYmFyID0gZWxlbWVudC5vZmZzZXRXaWR0aCAtIHdpZHRoO1xuICBsZXQgdmVydFNjcm9sbGJhciA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0IC0gaGVpZ2h0O1xuXG4gIC8vIGlmIGFuIGh5cG90aGV0aWNhbCBzY3JvbGxiYXIgaXMgZGV0ZWN0ZWQsIHdlIG11c3QgYmUgc3VyZSBpdCdzIG5vdCBhIGBib3JkZXJgXG4gIC8vIHdlIG1ha2UgdGhpcyBjaGVjayBjb25kaXRpb25hbCBmb3IgcGVyZm9ybWFuY2UgcmVhc29uc1xuICBpZiAoaG9yaXpTY3JvbGxiYXIgfHwgdmVydFNjcm9sbGJhcikge1xuICAgIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbGVtZW50KTtcbiAgICBob3JpelNjcm9sbGJhciAtPSBnZXRCb3JkZXJzU2l6ZShzdHlsZXMsICd4Jyk7XG4gICAgdmVydFNjcm9sbGJhciAtPSBnZXRCb3JkZXJzU2l6ZShzdHlsZXMsICd5Jyk7XG5cbiAgICByZXN1bHQud2lkdGggLT0gaG9yaXpTY3JvbGxiYXI7XG4gICAgcmVzdWx0LmhlaWdodCAtPSB2ZXJ0U2Nyb2xsYmFyO1xuICB9XG5cbiAgcmV0dXJuIGdldENsaWVudFJlY3QocmVzdWx0KTtcbn1cbiIsImltcG9ydCBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkgZnJvbSAnLi9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHknO1xuaW1wb3J0IGluY2x1ZGVTY3JvbGwgZnJvbSAnLi9pbmNsdWRlU2Nyb2xsJztcbmltcG9ydCBnZXRTY3JvbGxQYXJlbnQgZnJvbSAnLi9nZXRTY3JvbGxQYXJlbnQnO1xuaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tICcuL2dldEJvdW5kaW5nQ2xpZW50UmVjdCc7XG5pbXBvcnQgcnVuSXNJRSBmcm9tICcuL2lzSUUnO1xuaW1wb3J0IGdldENsaWVudFJlY3QgZnJvbSAnLi9nZXRDbGllbnRSZWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKGNoaWxkcmVuLCBwYXJlbnQsIGZpeGVkUG9zaXRpb24gPSBmYWxzZSkge1xuICBjb25zdCBpc0lFMTAgPSBydW5Jc0lFKDEwKTtcbiAgY29uc3QgaXNIVE1MID0gcGFyZW50Lm5vZGVOYW1lID09PSAnSFRNTCc7XG4gIGNvbnN0IGNoaWxkcmVuUmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChjaGlsZHJlbik7XG4gIGNvbnN0IHBhcmVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QocGFyZW50KTtcbiAgY29uc3Qgc2Nyb2xsUGFyZW50ID0gZ2V0U2Nyb2xsUGFyZW50KGNoaWxkcmVuKTtcblxuICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkocGFyZW50KTtcbiAgY29uc3QgYm9yZGVyVG9wV2lkdGggPSBwYXJzZUZsb2F0KHN0eWxlcy5ib3JkZXJUb3BXaWR0aCk7XG4gIGNvbnN0IGJvcmRlckxlZnRXaWR0aCA9IHBhcnNlRmxvYXQoc3R5bGVzLmJvcmRlckxlZnRXaWR0aCk7XG5cbiAgLy8gSW4gY2FzZXMgd2hlcmUgdGhlIHBhcmVudCBpcyBmaXhlZCwgd2UgbXVzdCBpZ25vcmUgbmVnYXRpdmUgc2Nyb2xsIGluIG9mZnNldCBjYWxjXG4gIGlmKGZpeGVkUG9zaXRpb24gJiYgaXNIVE1MKSB7XG4gICAgcGFyZW50UmVjdC50b3AgPSBNYXRoLm1heChwYXJlbnRSZWN0LnRvcCwgMCk7XG4gICAgcGFyZW50UmVjdC5sZWZ0ID0gTWF0aC5tYXgocGFyZW50UmVjdC5sZWZ0LCAwKTtcbiAgfVxuICBsZXQgb2Zmc2V0cyA9IGdldENsaWVudFJlY3Qoe1xuICAgIHRvcDogY2hpbGRyZW5SZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wIC0gYm9yZGVyVG9wV2lkdGgsXG4gICAgbGVmdDogY2hpbGRyZW5SZWN0LmxlZnQgLSBwYXJlbnRSZWN0LmxlZnQgLSBib3JkZXJMZWZ0V2lkdGgsXG4gICAgd2lkdGg6IGNoaWxkcmVuUmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IGNoaWxkcmVuUmVjdC5oZWlnaHQsXG4gIH0pO1xuICBvZmZzZXRzLm1hcmdpblRvcCA9IDA7XG4gIG9mZnNldHMubWFyZ2luTGVmdCA9IDA7XG5cbiAgLy8gU3VidHJhY3QgbWFyZ2lucyBvZiBkb2N1bWVudEVsZW1lbnQgaW4gY2FzZSBpdCdzIGJlaW5nIHVzZWQgYXMgcGFyZW50XG4gIC8vIHdlIGRvIHRoaXMgb25seSBvbiBIVE1MIGJlY2F1c2UgaXQncyB0aGUgb25seSBlbGVtZW50IHRoYXQgYmVoYXZlc1xuICAvLyBkaWZmZXJlbnRseSB3aGVuIG1hcmdpbnMgYXJlIGFwcGxpZWQgdG8gaXQuIFRoZSBtYXJnaW5zIGFyZSBpbmNsdWRlZCBpblxuICAvLyB0aGUgYm94IG9mIHRoZSBkb2N1bWVudEVsZW1lbnQsIGluIHRoZSBvdGhlciBjYXNlcyBub3QuXG4gIGlmICghaXNJRTEwICYmIGlzSFRNTCkge1xuICAgIGNvbnN0IG1hcmdpblRvcCA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpblRvcCk7XG4gICAgY29uc3QgbWFyZ2luTGVmdCA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpbkxlZnQpO1xuXG4gICAgb2Zmc2V0cy50b3AgLT0gYm9yZGVyVG9wV2lkdGggLSBtYXJnaW5Ub3A7XG4gICAgb2Zmc2V0cy5ib3R0b20gLT0gYm9yZGVyVG9wV2lkdGggLSBtYXJnaW5Ub3A7XG4gICAgb2Zmc2V0cy5sZWZ0IC09IGJvcmRlckxlZnRXaWR0aCAtIG1hcmdpbkxlZnQ7XG4gICAgb2Zmc2V0cy5yaWdodCAtPSBib3JkZXJMZWZ0V2lkdGggLSBtYXJnaW5MZWZ0O1xuXG4gICAgLy8gQXR0YWNoIG1hcmdpblRvcCBhbmQgbWFyZ2luTGVmdCBiZWNhdXNlIGluIHNvbWUgY2lyY3Vtc3RhbmNlcyB3ZSBtYXkgbmVlZCB0aGVtXG4gICAgb2Zmc2V0cy5tYXJnaW5Ub3AgPSBtYXJnaW5Ub3A7XG4gICAgb2Zmc2V0cy5tYXJnaW5MZWZ0ID0gbWFyZ2luTGVmdDtcbiAgfVxuXG4gIGlmIChcbiAgICBpc0lFMTAgJiYgIWZpeGVkUG9zaXRpb25cbiAgICAgID8gcGFyZW50LmNvbnRhaW5zKHNjcm9sbFBhcmVudClcbiAgICAgIDogcGFyZW50ID09PSBzY3JvbGxQYXJlbnQgJiYgc2Nyb2xsUGFyZW50Lm5vZGVOYW1lICE9PSAnQk9EWSdcbiAgKSB7XG4gICAgb2Zmc2V0cyA9IGluY2x1ZGVTY3JvbGwob2Zmc2V0cywgcGFyZW50KTtcbiAgfVxuXG4gIHJldHVybiBvZmZzZXRzO1xufVxuIiwiaW1wb3J0IGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZSBmcm9tICcuL2dldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZSc7XG5pbXBvcnQgZ2V0U2Nyb2xsIGZyb20gJy4vZ2V0U2Nyb2xsJztcbmltcG9ydCBnZXRDbGllbnRSZWN0IGZyb20gJy4vZ2V0Q2xpZW50UmVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZShlbGVtZW50LCBleGNsdWRlU2Nyb2xsID0gZmFsc2UpIHtcbiAgY29uc3QgaHRtbCA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIGNvbnN0IHJlbGF0aXZlT2Zmc2V0ID0gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKGVsZW1lbnQsIGh0bWwpO1xuICBjb25zdCB3aWR0aCA9IE1hdGgubWF4KGh0bWwuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApO1xuICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heChodG1sLmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApO1xuXG4gIGNvbnN0IHNjcm9sbFRvcCA9ICFleGNsdWRlU2Nyb2xsID8gZ2V0U2Nyb2xsKGh0bWwpIDogMDtcbiAgY29uc3Qgc2Nyb2xsTGVmdCA9ICFleGNsdWRlU2Nyb2xsID8gZ2V0U2Nyb2xsKGh0bWwsICdsZWZ0JykgOiAwO1xuXG4gIGNvbnN0IG9mZnNldCA9IHtcbiAgICB0b3A6IHNjcm9sbFRvcCAtIHJlbGF0aXZlT2Zmc2V0LnRvcCArIHJlbGF0aXZlT2Zmc2V0Lm1hcmdpblRvcCxcbiAgICBsZWZ0OiBzY3JvbGxMZWZ0IC0gcmVsYXRpdmVPZmZzZXQubGVmdCArIHJlbGF0aXZlT2Zmc2V0Lm1hcmdpbkxlZnQsXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICB9O1xuXG4gIHJldHVybiBnZXRDbGllbnRSZWN0KG9mZnNldCk7XG59XG4iLCJpbXBvcnQgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5IGZyb20gJy4vZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5JztcbmltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gJy4vZ2V0UGFyZW50Tm9kZSc7XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGdpdmVuIGVsZW1lbnQgaXMgZml4ZWQgb3IgaXMgaW5zaWRlIGEgZml4ZWQgcGFyZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gY3VzdG9tQ29udGFpbmVyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gYW5zd2VyIHRvIFwiaXNGaXhlZD9cIlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0ZpeGVkKGVsZW1lbnQpIHtcbiAgY29uc3Qgbm9kZU5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lO1xuICBpZiAobm9kZU5hbWUgPT09ICdCT0RZJyB8fCBub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWxlbWVudCwgJ3Bvc2l0aW9uJykgPT09ICdmaXhlZCcpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb25zdCBwYXJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcbiAgaWYgKCFwYXJlbnROb2RlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBpc0ZpeGVkKHBhcmVudE5vZGUpO1xufVxuIiwiaW1wb3J0IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSBmcm9tICcuL2dldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSc7XG5pbXBvcnQgaXNJRSBmcm9tICcuL2lzSUUnO1xuLyoqXG4gKiBGaW5kcyB0aGUgZmlyc3QgcGFyZW50IG9mIGFuIGVsZW1lbnQgdGhhdCBoYXMgYSB0cmFuc2Zvcm1lZCBwcm9wZXJ0eSBkZWZpbmVkXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBmaXJzdCB0cmFuc2Zvcm1lZCBwYXJlbnQgb3IgZG9jdW1lbnRFbGVtZW50XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIC8vIFRoaXMgY2hlY2sgaXMgbmVlZGVkIHRvIGF2b2lkIGVycm9ycyBpbiBjYXNlIG9uZSBvZiB0aGUgZWxlbWVudHMgaXNuJ3QgZGVmaW5lZCBmb3IgYW55IHJlYXNvblxuICAgaWYgKCFlbGVtZW50IHx8ICFlbGVtZW50LnBhcmVudEVsZW1lbnQgfHwgaXNJRSgpKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfVxuICBsZXQgZWwgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gIHdoaWxlIChlbCAmJiBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWwsICd0cmFuc2Zvcm0nKSA9PT0gJ25vbmUnKSB7XG4gICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICB9XG4gIHJldHVybiBlbCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbn1cbiIsImltcG9ydCBnZXRTY3JvbGxQYXJlbnQgZnJvbSAnLi9nZXRTY3JvbGxQYXJlbnQnO1xuaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSAnLi9nZXRQYXJlbnROb2RlJztcbmltcG9ydCBnZXRSZWZlcmVuY2VOb2RlIGZyb20gJy4vZ2V0UmVmZXJlbmNlTm9kZSc7XG5pbXBvcnQgZmluZENvbW1vbk9mZnNldFBhcmVudCBmcm9tICcuL2ZpbmRDb21tb25PZmZzZXRQYXJlbnQnO1xuaW1wb3J0IGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZSBmcm9tICcuL2dldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZSc7XG5pbXBvcnQgZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlIGZyb20gJy4vZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlJztcbmltcG9ydCBnZXRXaW5kb3dTaXplcyBmcm9tICcuL2dldFdpbmRvd1NpemVzJztcbmltcG9ydCBpc0ZpeGVkIGZyb20gJy4vaXNGaXhlZCc7XG5pbXBvcnQgZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudCBmcm9tICcuL2dldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQnO1xuXG4vKipcbiAqIENvbXB1dGVkIHRoZSBib3VuZGFyaWVzIGxpbWl0cyBhbmQgcmV0dXJuIHRoZW1cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHBlclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcmVmZXJlbmNlXG4gKiBAcGFyYW0ge251bWJlcn0gcGFkZGluZ1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gYm91bmRhcmllc0VsZW1lbnQgLSBFbGVtZW50IHVzZWQgdG8gZGVmaW5lIHRoZSBib3VuZGFyaWVzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGZpeGVkUG9zaXRpb24gLSBJcyBpbiBmaXhlZCBwb3NpdGlvbiBtb2RlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBDb29yZGluYXRlcyBvZiB0aGUgYm91bmRhcmllc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRCb3VuZGFyaWVzKFxuICBwb3BwZXIsXG4gIHJlZmVyZW5jZSxcbiAgcGFkZGluZyxcbiAgYm91bmRhcmllc0VsZW1lbnQsXG4gIGZpeGVkUG9zaXRpb24gPSBmYWxzZVxuKSB7XG4gIC8vIE5PVEU6IDEgRE9NIGFjY2VzcyBoZXJlXG5cbiAgbGV0IGJvdW5kYXJpZXMgPSB7IHRvcDogMCwgbGVmdDogMCB9O1xuICBjb25zdCBvZmZzZXRQYXJlbnQgPSBmaXhlZFBvc2l0aW9uID8gZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudChwb3BwZXIpIDogZmluZENvbW1vbk9mZnNldFBhcmVudChwb3BwZXIsIGdldFJlZmVyZW5jZU5vZGUocmVmZXJlbmNlKSk7XG5cbiAgLy8gSGFuZGxlIHZpZXdwb3J0IGNhc2VcbiAgaWYgKGJvdW5kYXJpZXNFbGVtZW50ID09PSAndmlld3BvcnQnICkge1xuICAgIGJvdW5kYXJpZXMgPSBnZXRWaWV3cG9ydE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJ0Yml0cmFyeU5vZGUob2Zmc2V0UGFyZW50LCBmaXhlZFBvc2l0aW9uKTtcbiAgfVxuXG4gIGVsc2Uge1xuICAgIC8vIEhhbmRsZSBvdGhlciBjYXNlcyBiYXNlZCBvbiBET00gZWxlbWVudCB1c2VkIGFzIGJvdW5kYXJpZXNcbiAgICBsZXQgYm91bmRhcmllc05vZGU7XG4gICAgaWYgKGJvdW5kYXJpZXNFbGVtZW50ID09PSAnc2Nyb2xsUGFyZW50Jykge1xuICAgICAgYm91bmRhcmllc05vZGUgPSBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShyZWZlcmVuY2UpKTtcbiAgICAgIGlmIChib3VuZGFyaWVzTm9kZS5ub2RlTmFtZSA9PT0gJ0JPRFknKSB7XG4gICAgICAgIGJvdW5kYXJpZXNOb2RlID0gcG9wcGVyLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYm91bmRhcmllc0VsZW1lbnQgPT09ICd3aW5kb3cnKSB7XG4gICAgICBib3VuZGFyaWVzTm9kZSA9IHBvcHBlci5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgYm91bmRhcmllc05vZGUgPSBib3VuZGFyaWVzRWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCBvZmZzZXRzID0gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKFxuICAgICAgYm91bmRhcmllc05vZGUsXG4gICAgICBvZmZzZXRQYXJlbnQsXG4gICAgICBmaXhlZFBvc2l0aW9uXG4gICAgKTtcblxuICAgIC8vIEluIGNhc2Ugb2YgSFRNTCwgd2UgbmVlZCBhIGRpZmZlcmVudCBjb21wdXRhdGlvblxuICAgIGlmIChib3VuZGFyaWVzTm9kZS5ub2RlTmFtZSA9PT0gJ0hUTUwnICYmICFpc0ZpeGVkKG9mZnNldFBhcmVudCkpIHtcbiAgICAgIGNvbnN0IHsgaGVpZ2h0LCB3aWR0aCB9ID0gZ2V0V2luZG93U2l6ZXMocG9wcGVyLm93bmVyRG9jdW1lbnQpO1xuICAgICAgYm91bmRhcmllcy50b3AgKz0gb2Zmc2V0cy50b3AgLSBvZmZzZXRzLm1hcmdpblRvcDtcbiAgICAgIGJvdW5kYXJpZXMuYm90dG9tID0gaGVpZ2h0ICsgb2Zmc2V0cy50b3A7XG4gICAgICBib3VuZGFyaWVzLmxlZnQgKz0gb2Zmc2V0cy5sZWZ0IC0gb2Zmc2V0cy5tYXJnaW5MZWZ0O1xuICAgICAgYm91bmRhcmllcy5yaWdodCA9IHdpZHRoICsgb2Zmc2V0cy5sZWZ0O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmb3IgYWxsIHRoZSBvdGhlciBET00gZWxlbWVudHMsIHRoaXMgb25lIGlzIGdvb2RcbiAgICAgIGJvdW5kYXJpZXMgPSBvZmZzZXRzO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCBwYWRkaW5nc1xuICBwYWRkaW5nID0gcGFkZGluZyB8fCAwO1xuICBjb25zdCBpc1BhZGRpbmdOdW1iZXIgPSB0eXBlb2YgcGFkZGluZyA9PT0gJ251bWJlcic7XG4gIGJvdW5kYXJpZXMubGVmdCArPSBpc1BhZGRpbmdOdW1iZXIgPyBwYWRkaW5nIDogcGFkZGluZy5sZWZ0IHx8IDA7IFxuICBib3VuZGFyaWVzLnRvcCArPSBpc1BhZGRpbmdOdW1iZXIgPyBwYWRkaW5nIDogcGFkZGluZy50b3AgfHwgMDsgXG4gIGJvdW5kYXJpZXMucmlnaHQgLT0gaXNQYWRkaW5nTnVtYmVyID8gcGFkZGluZyA6IHBhZGRpbmcucmlnaHQgfHwgMDsgXG4gIGJvdW5kYXJpZXMuYm90dG9tIC09IGlzUGFkZGluZ051bWJlciA/IHBhZGRpbmcgOiBwYWRkaW5nLmJvdHRvbSB8fCAwOyBcblxuICByZXR1cm4gYm91bmRhcmllcztcbn1cbiIsImltcG9ydCBnZXRCb3VuZGFyaWVzIGZyb20gJy4uL3V0aWxzL2dldEJvdW5kYXJpZXMnO1xuXG5mdW5jdGlvbiBnZXRBcmVhKHsgd2lkdGgsIGhlaWdodCB9KSB7XG4gIHJldHVybiB3aWR0aCAqIGhlaWdodDtcbn1cblxuLyoqXG4gKiBVdGlsaXR5IHVzZWQgdG8gdHJhbnNmb3JtIHRoZSBgYXV0b2AgcGxhY2VtZW50IHRvIHRoZSBwbGFjZW1lbnQgd2l0aCBtb3JlXG4gKiBhdmFpbGFibGUgc3BhY2UuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlQXV0b1BsYWNlbWVudChcbiAgcGxhY2VtZW50LFxuICByZWZSZWN0LFxuICBwb3BwZXIsXG4gIHJlZmVyZW5jZSxcbiAgYm91bmRhcmllc0VsZW1lbnQsXG4gIHBhZGRpbmcgPSAwXG4pIHtcbiAgaWYgKHBsYWNlbWVudC5pbmRleE9mKCdhdXRvJykgPT09IC0xKSB7XG4gICAgcmV0dXJuIHBsYWNlbWVudDtcbiAgfVxuXG4gIGNvbnN0IGJvdW5kYXJpZXMgPSBnZXRCb3VuZGFyaWVzKFxuICAgIHBvcHBlcixcbiAgICByZWZlcmVuY2UsXG4gICAgcGFkZGluZyxcbiAgICBib3VuZGFyaWVzRWxlbWVudFxuICApO1xuXG4gIGNvbnN0IHJlY3RzID0ge1xuICAgIHRvcDoge1xuICAgICAgd2lkdGg6IGJvdW5kYXJpZXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHJlZlJlY3QudG9wIC0gYm91bmRhcmllcy50b3AsXG4gICAgfSxcbiAgICByaWdodDoge1xuICAgICAgd2lkdGg6IGJvdW5kYXJpZXMucmlnaHQgLSByZWZSZWN0LnJpZ2h0LFxuICAgICAgaGVpZ2h0OiBib3VuZGFyaWVzLmhlaWdodCxcbiAgICB9LFxuICAgIGJvdHRvbToge1xuICAgICAgd2lkdGg6IGJvdW5kYXJpZXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IGJvdW5kYXJpZXMuYm90dG9tIC0gcmVmUmVjdC5ib3R0b20sXG4gICAgfSxcbiAgICBsZWZ0OiB7XG4gICAgICB3aWR0aDogcmVmUmVjdC5sZWZ0IC0gYm91bmRhcmllcy5sZWZ0LFxuICAgICAgaGVpZ2h0OiBib3VuZGFyaWVzLmhlaWdodCxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IHNvcnRlZEFyZWFzID0gT2JqZWN0LmtleXMocmVjdHMpXG4gICAgLm1hcChrZXkgPT4gKHtcbiAgICAgIGtleSxcbiAgICAgIC4uLnJlY3RzW2tleV0sXG4gICAgICBhcmVhOiBnZXRBcmVhKHJlY3RzW2tleV0pLFxuICAgIH0pKVxuICAgIC5zb3J0KChhLCBiKSA9PiBiLmFyZWEgLSBhLmFyZWEpO1xuXG4gIGNvbnN0IGZpbHRlcmVkQXJlYXMgPSBzb3J0ZWRBcmVhcy5maWx0ZXIoXG4gICAgKHsgd2lkdGgsIGhlaWdodCB9KSA9PlxuICAgICAgd2lkdGggPj0gcG9wcGVyLmNsaWVudFdpZHRoICYmIGhlaWdodCA+PSBwb3BwZXIuY2xpZW50SGVpZ2h0XG4gICk7XG5cbiAgY29uc3QgY29tcHV0ZWRQbGFjZW1lbnQgPSBmaWx0ZXJlZEFyZWFzLmxlbmd0aCA+IDBcbiAgICA/IGZpbHRlcmVkQXJlYXNbMF0ua2V5XG4gICAgOiBzb3J0ZWRBcmVhc1swXS5rZXk7XG5cbiAgY29uc3QgdmFyaWF0aW9uID0gcGxhY2VtZW50LnNwbGl0KCctJylbMV07XG5cbiAgcmV0dXJuIGNvbXB1dGVkUGxhY2VtZW50ICsgKHZhcmlhdGlvbiA/IGAtJHt2YXJpYXRpb259YCA6ICcnKTtcbn1cbiIsImltcG9ydCBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50IGZyb20gJy4vZmluZENvbW1vbk9mZnNldFBhcmVudCc7XG5pbXBvcnQgZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlIGZyb20gJy4vZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlJztcbmltcG9ydCBnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50IGZyb20gJy4vZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudCc7XG5pbXBvcnQgZ2V0UmVmZXJlbmNlTm9kZSBmcm9tICcuL2dldFJlZmVyZW5jZU5vZGUnO1xuXG4vKipcbiAqIEdldCBvZmZzZXRzIHRvIHRoZSByZWZlcmVuY2UgZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHBvcHBlciAtIHRoZSBwb3BwZXIgZWxlbWVudFxuICogQHBhcmFtIHtFbGVtZW50fSByZWZlcmVuY2UgLSB0aGUgcmVmZXJlbmNlIGVsZW1lbnQgKHRoZSBwb3BwZXIgd2lsbCBiZSByZWxhdGl2ZSB0byB0aGlzKVxuICogQHBhcmFtIHtFbGVtZW50fSBmaXhlZFBvc2l0aW9uIC0gaXMgaW4gZml4ZWQgcG9zaXRpb24gbW9kZVxuICogQHJldHVybnMge09iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9mZnNldHMgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UmVmZXJlbmNlT2Zmc2V0cyhzdGF0ZSwgcG9wcGVyLCByZWZlcmVuY2UsIGZpeGVkUG9zaXRpb24gPSBudWxsKSB7XG4gIGNvbnN0IGNvbW1vbk9mZnNldFBhcmVudCA9IGZpeGVkUG9zaXRpb24gPyBnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50KHBvcHBlcikgOiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KHBvcHBlciwgZ2V0UmVmZXJlbmNlTm9kZShyZWZlcmVuY2UpKTtcbiAgcmV0dXJuIGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShyZWZlcmVuY2UsIGNvbW1vbk9mZnNldFBhcmVudCwgZml4ZWRQb3NpdGlvbik7XG59XG4iLCIvKipcbiAqIEdldCB0aGUgb3V0ZXIgc2l6ZXMgb2YgdGhlIGdpdmVuIGVsZW1lbnQgKG9mZnNldCBzaXplICsgbWFyZ2lucylcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge09iamVjdH0gb2JqZWN0IGNvbnRhaW5pbmcgd2lkdGggYW5kIGhlaWdodCBwcm9wZXJ0aWVzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE91dGVyU2l6ZXMoZWxlbWVudCkge1xuICBjb25zdCB3aW5kb3cgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gIGNvbnN0IHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICBjb25zdCB4ID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luVG9wIHx8IDApICsgcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luQm90dG9tIHx8IDApO1xuICBjb25zdCB5ID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luTGVmdCB8fCAwKSArIHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpblJpZ2h0IHx8IDApO1xuICBjb25zdCByZXN1bHQgPSB7XG4gICAgd2lkdGg6IGVsZW1lbnQub2Zmc2V0V2lkdGggKyB5LFxuICAgIGhlaWdodDogZWxlbWVudC5vZmZzZXRIZWlnaHQgKyB4LFxuICB9O1xuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiLyoqXG4gKiBHZXQgdGhlIG9wcG9zaXRlIHBsYWNlbWVudCBvZiB0aGUgZ2l2ZW4gb25lXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gcGxhY2VtZW50XG4gKiBAcmV0dXJucyB7U3RyaW5nfSBmbGlwcGVkIHBsYWNlbWVudFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgY29uc3QgaGFzaCA9IHsgbGVmdDogJ3JpZ2h0JywgcmlnaHQ6ICdsZWZ0JywgYm90dG9tOiAndG9wJywgdG9wOiAnYm90dG9tJyB9O1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL2xlZnR8cmlnaHR8Ym90dG9tfHRvcC9nLCBtYXRjaGVkID0+IGhhc2hbbWF0Y2hlZF0pO1xufVxuIiwiaW1wb3J0IGdldE91dGVyU2l6ZXMgZnJvbSAnLi9nZXRPdXRlclNpemVzJztcbmltcG9ydCBnZXRPcHBvc2l0ZVBsYWNlbWVudCBmcm9tICcuL2dldE9wcG9zaXRlUGxhY2VtZW50JztcblxuLyoqXG4gKiBHZXQgb2Zmc2V0cyB0byB0aGUgcG9wcGVyXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge09iamVjdH0gcG9zaXRpb24gLSBDU1MgcG9zaXRpb24gdGhlIFBvcHBlciB3aWxsIGdldCBhcHBsaWVkXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3BwZXIgLSB0aGUgcG9wcGVyIGVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWZlcmVuY2VPZmZzZXRzIC0gdGhlIHJlZmVyZW5jZSBvZmZzZXRzICh0aGUgcG9wcGVyIHdpbGwgYmUgcmVsYXRpdmUgdG8gdGhpcylcbiAqIEBwYXJhbSB7U3RyaW5nfSBwbGFjZW1lbnQgLSBvbmUgb2YgdGhlIHZhbGlkIHBsYWNlbWVudCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBwb3BwZXJPZmZzZXRzIC0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9mZnNldHMgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UG9wcGVyT2Zmc2V0cyhwb3BwZXIsIHJlZmVyZW5jZU9mZnNldHMsIHBsYWNlbWVudCkge1xuICBwbGFjZW1lbnQgPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcblxuICAvLyBHZXQgcG9wcGVyIG5vZGUgc2l6ZXNcbiAgY29uc3QgcG9wcGVyUmVjdCA9IGdldE91dGVyU2l6ZXMocG9wcGVyKTtcblxuICAvLyBBZGQgcG9zaXRpb24sIHdpZHRoIGFuZCBoZWlnaHQgdG8gb3VyIG9mZnNldHMgb2JqZWN0XG4gIGNvbnN0IHBvcHBlck9mZnNldHMgPSB7XG4gICAgd2lkdGg6IHBvcHBlclJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiBwb3BwZXJSZWN0LmhlaWdodCxcbiAgfTtcblxuICAvLyBkZXBlbmRpbmcgYnkgdGhlIHBvcHBlciBwbGFjZW1lbnQgd2UgaGF2ZSB0byBjb21wdXRlIGl0cyBvZmZzZXRzIHNsaWdodGx5IGRpZmZlcmVudGx5XG4gIGNvbnN0IGlzSG9yaXogPSBbJ3JpZ2h0JywgJ2xlZnQnXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xuICBjb25zdCBtYWluU2lkZSA9IGlzSG9yaXogPyAndG9wJyA6ICdsZWZ0JztcbiAgY29uc3Qgc2Vjb25kYXJ5U2lkZSA9IGlzSG9yaXogPyAnbGVmdCcgOiAndG9wJztcbiAgY29uc3QgbWVhc3VyZW1lbnQgPSBpc0hvcml6ID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICBjb25zdCBzZWNvbmRhcnlNZWFzdXJlbWVudCA9ICFpc0hvcml6ID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gIHBvcHBlck9mZnNldHNbbWFpblNpZGVdID1cbiAgICByZWZlcmVuY2VPZmZzZXRzW21haW5TaWRlXSArXG4gICAgcmVmZXJlbmNlT2Zmc2V0c1ttZWFzdXJlbWVudF0gLyAyIC1cbiAgICBwb3BwZXJSZWN0W21lYXN1cmVtZW50XSAvIDI7XG4gIGlmIChwbGFjZW1lbnQgPT09IHNlY29uZGFyeVNpZGUpIHtcbiAgICBwb3BwZXJPZmZzZXRzW3NlY29uZGFyeVNpZGVdID1cbiAgICAgIHJlZmVyZW5jZU9mZnNldHNbc2Vjb25kYXJ5U2lkZV0gLSBwb3BwZXJSZWN0W3NlY29uZGFyeU1lYXN1cmVtZW50XTtcbiAgfSBlbHNlIHtcbiAgICBwb3BwZXJPZmZzZXRzW3NlY29uZGFyeVNpZGVdID1cbiAgICAgIHJlZmVyZW5jZU9mZnNldHNbZ2V0T3Bwb3NpdGVQbGFjZW1lbnQoc2Vjb25kYXJ5U2lkZSldO1xuICB9XG5cbiAgcmV0dXJuIHBvcHBlck9mZnNldHM7XG59XG4iLCIvKipcbiAqIE1pbWljcyB0aGUgYGZpbmRgIG1ldGhvZCBvZiBBcnJheVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtBcnJheX0gYXJyXG4gKiBAYXJndW1lbnQgcHJvcFxuICogQGFyZ3VtZW50IHZhbHVlXG4gKiBAcmV0dXJucyBpbmRleCBvciAtMVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5kKGFyciwgY2hlY2spIHtcbiAgLy8gdXNlIG5hdGl2ZSBmaW5kIGlmIHN1cHBvcnRlZFxuICBpZiAoQXJyYXkucHJvdG90eXBlLmZpbmQpIHtcbiAgICByZXR1cm4gYXJyLmZpbmQoY2hlY2spO1xuICB9XG5cbiAgLy8gdXNlIGBmaWx0ZXJgIHRvIG9idGFpbiB0aGUgc2FtZSBiZWhhdmlvciBvZiBgZmluZGBcbiAgcmV0dXJuIGFyci5maWx0ZXIoY2hlY2spWzBdO1xufVxuIiwiaW1wb3J0IGZpbmQgZnJvbSAnLi9maW5kJztcblxuLyoqXG4gKiBSZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBtYXRjaGluZyBvYmplY3RcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7QXJyYXl9IGFyclxuICogQGFyZ3VtZW50IHByb3BcbiAqIEBhcmd1bWVudCB2YWx1ZVxuICogQHJldHVybnMgaW5kZXggb3IgLTFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluZEluZGV4KGFyciwgcHJvcCwgdmFsdWUpIHtcbiAgLy8gdXNlIG5hdGl2ZSBmaW5kSW5kZXggaWYgc3VwcG9ydGVkXG4gIGlmIChBcnJheS5wcm90b3R5cGUuZmluZEluZGV4KSB7XG4gICAgcmV0dXJuIGFyci5maW5kSW5kZXgoY3VyID0+IGN1cltwcm9wXSA9PT0gdmFsdWUpO1xuICB9XG5cbiAgLy8gdXNlIGBmaW5kYCArIGBpbmRleE9mYCBpZiBgZmluZEluZGV4YCBpc24ndCBzdXBwb3J0ZWRcbiAgY29uc3QgbWF0Y2ggPSBmaW5kKGFyciwgb2JqID0+IG9ialtwcm9wXSA9PT0gdmFsdWUpO1xuICByZXR1cm4gYXJyLmluZGV4T2YobWF0Y2gpO1xufVxuIiwiaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnLi9pc0Z1bmN0aW9uJztcbmltcG9ydCBmaW5kSW5kZXggZnJvbSAnLi9maW5kSW5kZXgnO1xuaW1wb3J0IGdldENsaWVudFJlY3QgZnJvbSAnLi4vdXRpbHMvZ2V0Q2xpZW50UmVjdCc7XG5cbi8qKlxuICogTG9vcCB0cm91Z2ggdGhlIGxpc3Qgb2YgbW9kaWZpZXJzIGFuZCBydW4gdGhlbSBpbiBvcmRlcixcbiAqIGVhY2ggb2YgdGhlbSB3aWxsIHRoZW4gZWRpdCB0aGUgZGF0YSBvYmplY3QuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge2RhdGFPYmplY3R9IGRhdGFcbiAqIEBwYXJhbSB7QXJyYXl9IG1vZGlmaWVyc1xuICogQHBhcmFtIHtTdHJpbmd9IGVuZHMgLSBPcHRpb25hbCBtb2RpZmllciBuYW1lIHVzZWQgYXMgc3RvcHBlclxuICogQHJldHVybnMge2RhdGFPYmplY3R9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJ1bk1vZGlmaWVycyhtb2RpZmllcnMsIGRhdGEsIGVuZHMpIHtcbiAgY29uc3QgbW9kaWZpZXJzVG9SdW4gPSBlbmRzID09PSB1bmRlZmluZWRcbiAgICA/IG1vZGlmaWVyc1xuICAgIDogbW9kaWZpZXJzLnNsaWNlKDAsIGZpbmRJbmRleChtb2RpZmllcnMsICduYW1lJywgZW5kcykpO1xuXG4gIG1vZGlmaWVyc1RvUnVuLmZvckVhY2gobW9kaWZpZXIgPT4ge1xuICAgIGlmIChtb2RpZmllclsnZnVuY3Rpb24nXSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgICAgY29uc29sZS53YXJuKCdgbW9kaWZpZXIuZnVuY3Rpb25gIGlzIGRlcHJlY2F0ZWQsIHVzZSBgbW9kaWZpZXIuZm5gIScpO1xuICAgIH1cbiAgICBjb25zdCBmbiA9IG1vZGlmaWVyWydmdW5jdGlvbiddIHx8IG1vZGlmaWVyLmZuOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgIGlmIChtb2RpZmllci5lbmFibGVkICYmIGlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICAvLyBBZGQgcHJvcGVydGllcyB0byBvZmZzZXRzIHRvIG1ha2UgdGhlbSBhIGNvbXBsZXRlIGNsaWVudFJlY3Qgb2JqZWN0XG4gICAgICAvLyB3ZSBkbyB0aGlzIGJlZm9yZSBlYWNoIG1vZGlmaWVyIHRvIG1ha2Ugc3VyZSB0aGUgcHJldmlvdXMgb25lIGRvZXNuJ3RcbiAgICAgIC8vIG1lc3Mgd2l0aCB0aGVzZSB2YWx1ZXNcbiAgICAgIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBnZXRDbGllbnRSZWN0KGRhdGEub2Zmc2V0cy5wb3BwZXIpO1xuICAgICAgZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSA9IGdldENsaWVudFJlY3QoZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSk7XG5cbiAgICAgIGRhdGEgPSBmbihkYXRhLCBtb2RpZmllcik7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn1cbiIsImltcG9ydCBjb21wdXRlQXV0b1BsYWNlbWVudCBmcm9tICcuLi91dGlscy9jb21wdXRlQXV0b1BsYWNlbWVudCc7XG5pbXBvcnQgZ2V0UmVmZXJlbmNlT2Zmc2V0cyBmcm9tICcuLi91dGlscy9nZXRSZWZlcmVuY2VPZmZzZXRzJztcbmltcG9ydCBnZXRQb3BwZXJPZmZzZXRzIGZyb20gJy4uL3V0aWxzL2dldFBvcHBlck9mZnNldHMnO1xuaW1wb3J0IHJ1bk1vZGlmaWVycyBmcm9tICcuLi91dGlscy9ydW5Nb2RpZmllcnMnO1xuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBwb3BwZXIsIGNvbXB1dGluZyB0aGUgbmV3IG9mZnNldHMgYW5kIGFwcGx5aW5nXG4gKiB0aGUgbmV3IHN0eWxlLjxiciAvPlxuICogUHJlZmVyIGBzY2hlZHVsZVVwZGF0ZWAgb3ZlciBgdXBkYXRlYCBiZWNhdXNlIG9mIHBlcmZvcm1hbmNlIHJlYXNvbnMuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgLy8gaWYgcG9wcGVyIGlzIGRlc3Ryb3llZCwgZG9uJ3QgcGVyZm9ybSBhbnkgZnVydGhlciB1cGRhdGVcbiAgaWYgKHRoaXMuc3RhdGUuaXNEZXN0cm95ZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgZGF0YSA9IHtcbiAgICBpbnN0YW5jZTogdGhpcyxcbiAgICBzdHlsZXM6IHt9LFxuICAgIGFycm93U3R5bGVzOiB7fSxcbiAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICBmbGlwcGVkOiBmYWxzZSxcbiAgICBvZmZzZXRzOiB7fSxcbiAgfTtcblxuICAvLyBjb21wdXRlIHJlZmVyZW5jZSBlbGVtZW50IG9mZnNldHNcbiAgZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSA9IGdldFJlZmVyZW5jZU9mZnNldHMoXG4gICAgdGhpcy5zdGF0ZSxcbiAgICB0aGlzLnBvcHBlcixcbiAgICB0aGlzLnJlZmVyZW5jZSxcbiAgICB0aGlzLm9wdGlvbnMucG9zaXRpb25GaXhlZFxuICApO1xuXG4gIC8vIGNvbXB1dGUgYXV0byBwbGFjZW1lbnQsIHN0b3JlIHBsYWNlbWVudCBpbnNpZGUgdGhlIGRhdGEgb2JqZWN0LFxuICAvLyBtb2RpZmllcnMgd2lsbCBiZSBhYmxlIHRvIGVkaXQgYHBsYWNlbWVudGAgaWYgbmVlZGVkXG4gIC8vIGFuZCByZWZlciB0byBvcmlnaW5hbFBsYWNlbWVudCB0byBrbm93IHRoZSBvcmlnaW5hbCB2YWx1ZVxuICBkYXRhLnBsYWNlbWVudCA9IGNvbXB1dGVBdXRvUGxhY2VtZW50KFxuICAgIHRoaXMub3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSxcbiAgICB0aGlzLnBvcHBlcixcbiAgICB0aGlzLnJlZmVyZW5jZSxcbiAgICB0aGlzLm9wdGlvbnMubW9kaWZpZXJzLmZsaXAuYm91bmRhcmllc0VsZW1lbnQsXG4gICAgdGhpcy5vcHRpb25zLm1vZGlmaWVycy5mbGlwLnBhZGRpbmdcbiAgKTtcblxuICAvLyBzdG9yZSB0aGUgY29tcHV0ZWQgcGxhY2VtZW50IGluc2lkZSBgb3JpZ2luYWxQbGFjZW1lbnRgXG4gIGRhdGEub3JpZ2luYWxQbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudDtcblxuICBkYXRhLnBvc2l0aW9uRml4ZWQgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25GaXhlZDtcblxuICAvLyBjb21wdXRlIHRoZSBwb3BwZXIgb2Zmc2V0c1xuICBkYXRhLm9mZnNldHMucG9wcGVyID0gZ2V0UG9wcGVyT2Zmc2V0cyhcbiAgICB0aGlzLnBvcHBlcixcbiAgICBkYXRhLm9mZnNldHMucmVmZXJlbmNlLFxuICAgIGRhdGEucGxhY2VtZW50XG4gICk7XG5cbiAgZGF0YS5vZmZzZXRzLnBvcHBlci5wb3NpdGlvbiA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbkZpeGVkXG4gICAgPyAnZml4ZWQnXG4gICAgOiAnYWJzb2x1dGUnO1xuXG4gIC8vIHJ1biB0aGUgbW9kaWZpZXJzXG4gIGRhdGEgPSBydW5Nb2RpZmllcnModGhpcy5tb2RpZmllcnMsIGRhdGEpO1xuXG4gIC8vIHRoZSBmaXJzdCBgdXBkYXRlYCB3aWxsIGNhbGwgYG9uQ3JlYXRlYCBjYWxsYmFja1xuICAvLyB0aGUgb3RoZXIgb25lcyB3aWxsIGNhbGwgYG9uVXBkYXRlYCBjYWxsYmFja1xuICBpZiAoIXRoaXMuc3RhdGUuaXNDcmVhdGVkKSB7XG4gICAgdGhpcy5zdGF0ZS5pc0NyZWF0ZWQgPSB0cnVlO1xuICAgIHRoaXMub3B0aW9ucy5vbkNyZWF0ZShkYXRhKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLm9wdGlvbnMub25VcGRhdGUoZGF0YSk7XG4gIH1cbn1cbiIsIi8qKlxuICogSGVscGVyIHVzZWQgdG8ga25vdyBpZiB0aGUgZ2l2ZW4gbW9kaWZpZXIgaXMgZW5hYmxlZC5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc01vZGlmaWVyRW5hYmxlZChtb2RpZmllcnMsIG1vZGlmaWVyTmFtZSkge1xuICByZXR1cm4gbW9kaWZpZXJzLnNvbWUoXG4gICAgKHsgbmFtZSwgZW5hYmxlZCB9KSA9PiBlbmFibGVkICYmIG5hbWUgPT09IG1vZGlmaWVyTmFtZVxuICApO1xufVxuIiwiLyoqXG4gKiBHZXQgdGhlIHByZWZpeGVkIHN1cHBvcnRlZCBwcm9wZXJ0eSBuYW1lXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gcHJvcGVydHkgKGNhbWVsQ2FzZSlcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHByZWZpeGVkIHByb3BlcnR5IChjYW1lbENhc2Ugb3IgUGFzY2FsQ2FzZSwgZGVwZW5kaW5nIG9uIHRoZSB2ZW5kb3IgcHJlZml4KVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUocHJvcGVydHkpIHtcbiAgY29uc3QgcHJlZml4ZXMgPSBbZmFsc2UsICdtcycsICdXZWJraXQnLCAnTW96JywgJ08nXTtcbiAgY29uc3QgdXBwZXJQcm9wID0gcHJvcGVydHkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wZXJ0eS5zbGljZSgxKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcHJlZml4ID0gcHJlZml4ZXNbaV07XG4gICAgY29uc3QgdG9DaGVjayA9IHByZWZpeCA/IGAke3ByZWZpeH0ke3VwcGVyUHJvcH1gIDogcHJvcGVydHk7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudC5ib2R5LnN0eWxlW3RvQ2hlY2tdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHRvQ2hlY2s7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuIiwiaW1wb3J0IGlzTW9kaWZpZXJFbmFibGVkIGZyb20gJy4uL3V0aWxzL2lzTW9kaWZpZXJFbmFibGVkJztcbmltcG9ydCBnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUgZnJvbSAnLi4vdXRpbHMvZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lJztcblxuLyoqXG4gKiBEZXN0cm95cyB0aGUgcG9wcGVyLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXN0cm95KCkge1xuICB0aGlzLnN0YXRlLmlzRGVzdHJveWVkID0gdHJ1ZTtcblxuICAvLyB0b3VjaCBET00gb25seSBpZiBgYXBwbHlTdHlsZWAgbW9kaWZpZXIgaXMgZW5hYmxlZFxuICBpZiAoaXNNb2RpZmllckVuYWJsZWQodGhpcy5tb2RpZmllcnMsICdhcHBseVN0eWxlJykpIHtcbiAgICB0aGlzLnBvcHBlci5yZW1vdmVBdHRyaWJ1dGUoJ3gtcGxhY2VtZW50Jyk7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUucG9zaXRpb24gPSAnJztcbiAgICB0aGlzLnBvcHBlci5zdHlsZS50b3AgPSAnJztcbiAgICB0aGlzLnBvcHBlci5zdHlsZS5sZWZ0ID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUucmlnaHQgPSAnJztcbiAgICB0aGlzLnBvcHBlci5zdHlsZS5ib3R0b20gPSAnJztcbiAgICB0aGlzLnBvcHBlci5zdHlsZS53aWxsQ2hhbmdlID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGVbZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKCd0cmFuc2Zvcm0nKV0gPSAnJztcbiAgfVxuXG4gIHRoaXMuZGlzYWJsZUV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgLy8gcmVtb3ZlIHRoZSBwb3BwZXIgaWYgdXNlciBleHBsaWNpdGx5IGFza2VkIGZvciB0aGUgZGVsZXRpb24gb24gZGVzdHJveVxuICAvLyBkbyBub3QgdXNlIGByZW1vdmVgIGJlY2F1c2UgSUUxMSBkb2Vzbid0IHN1cHBvcnQgaXRcbiAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmVPbkRlc3Ryb3kpIHtcbiAgICB0aGlzLnBvcHBlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMucG9wcGVyKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cbiIsIi8qKlxuICogR2V0IHRoZSB3aW5kb3cgYXNzb2NpYXRlZCB3aXRoIHRoZSBlbGVtZW50XG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtXaW5kb3d9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvdyhlbGVtZW50KSB7XG4gIGNvbnN0IG93bmVyRG9jdW1lbnQgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQ7XG4gIHJldHVybiBvd25lckRvY3VtZW50ID8gb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyA6IHdpbmRvdztcbn1cbiIsImltcG9ydCBnZXRTY3JvbGxQYXJlbnQgZnJvbSAnLi9nZXRTY3JvbGxQYXJlbnQnO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tICcuL2dldFdpbmRvdyc7XG5cbmZ1bmN0aW9uIGF0dGFjaFRvU2Nyb2xsUGFyZW50cyhzY3JvbGxQYXJlbnQsIGV2ZW50LCBjYWxsYmFjaywgc2Nyb2xsUGFyZW50cykge1xuICBjb25zdCBpc0JvZHkgPSBzY3JvbGxQYXJlbnQubm9kZU5hbWUgPT09ICdCT0RZJztcbiAgY29uc3QgdGFyZ2V0ID0gaXNCb2R5ID8gc2Nyb2xsUGFyZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgOiBzY3JvbGxQYXJlbnQ7XG4gIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaywgeyBwYXNzaXZlOiB0cnVlIH0pO1xuXG4gIGlmICghaXNCb2R5KSB7XG4gICAgYXR0YWNoVG9TY3JvbGxQYXJlbnRzKFxuICAgICAgZ2V0U2Nyb2xsUGFyZW50KHRhcmdldC5wYXJlbnROb2RlKSxcbiAgICAgIGV2ZW50LFxuICAgICAgY2FsbGJhY2ssXG4gICAgICBzY3JvbGxQYXJlbnRzXG4gICAgKTtcbiAgfVxuICBzY3JvbGxQYXJlbnRzLnB1c2godGFyZ2V0KTtcbn1cblxuLyoqXG4gKiBTZXR1cCBuZWVkZWQgZXZlbnQgbGlzdGVuZXJzIHVzZWQgdG8gdXBkYXRlIHRoZSBwb3BwZXIgcG9zaXRpb25cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldHVwRXZlbnRMaXN0ZW5lcnMoXG4gIHJlZmVyZW5jZSxcbiAgb3B0aW9ucyxcbiAgc3RhdGUsXG4gIHVwZGF0ZUJvdW5kXG4pIHtcbiAgLy8gUmVzaXplIGV2ZW50IGxpc3RlbmVyIG9uIHdpbmRvd1xuICBzdGF0ZS51cGRhdGVCb3VuZCA9IHVwZGF0ZUJvdW5kO1xuICBnZXRXaW5kb3cocmVmZXJlbmNlKS5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzdGF0ZS51cGRhdGVCb3VuZCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuXG4gIC8vIFNjcm9sbCBldmVudCBsaXN0ZW5lciBvbiBzY3JvbGwgcGFyZW50c1xuICBjb25zdCBzY3JvbGxFbGVtZW50ID0gZ2V0U2Nyb2xsUGFyZW50KHJlZmVyZW5jZSk7XG4gIGF0dGFjaFRvU2Nyb2xsUGFyZW50cyhcbiAgICBzY3JvbGxFbGVtZW50LFxuICAgICdzY3JvbGwnLFxuICAgIHN0YXRlLnVwZGF0ZUJvdW5kLFxuICAgIHN0YXRlLnNjcm9sbFBhcmVudHNcbiAgKTtcbiAgc3RhdGUuc2Nyb2xsRWxlbWVudCA9IHNjcm9sbEVsZW1lbnQ7XG4gIHN0YXRlLmV2ZW50c0VuYWJsZWQgPSB0cnVlO1xuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiIsImltcG9ydCBzZXR1cEV2ZW50TGlzdGVuZXJzIGZyb20gJy4uL3V0aWxzL3NldHVwRXZlbnRMaXN0ZW5lcnMnO1xuXG4vKipcbiAqIEl0IHdpbGwgYWRkIHJlc2l6ZS9zY3JvbGwgZXZlbnRzIGFuZCBzdGFydCByZWNhbGN1bGF0aW5nXG4gKiBwb3NpdGlvbiBvZiB0aGUgcG9wcGVyIGVsZW1lbnQgd2hlbiB0aGV5IGFyZSB0cmlnZ2VyZWQuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVuYWJsZUV2ZW50TGlzdGVuZXJzKCkge1xuICBpZiAoIXRoaXMuc3RhdGUuZXZlbnRzRW5hYmxlZCkge1xuICAgIHRoaXMuc3RhdGUgPSBzZXR1cEV2ZW50TGlzdGVuZXJzKFxuICAgICAgdGhpcy5yZWZlcmVuY2UsXG4gICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICB0aGlzLnN0YXRlLFxuICAgICAgdGhpcy5zY2hlZHVsZVVwZGF0ZVxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSAnLi9nZXRXaW5kb3cnO1xuXG4vKipcbiAqIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMgdXNlZCB0byB1cGRhdGUgdGhlIHBvcHBlciBwb3NpdGlvblxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcnMocmVmZXJlbmNlLCBzdGF0ZSkge1xuICAvLyBSZW1vdmUgcmVzaXplIGV2ZW50IGxpc3RlbmVyIG9uIHdpbmRvd1xuICBnZXRXaW5kb3cocmVmZXJlbmNlKS5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzdGF0ZS51cGRhdGVCb3VuZCk7XG5cbiAgLy8gUmVtb3ZlIHNjcm9sbCBldmVudCBsaXN0ZW5lciBvbiBzY3JvbGwgcGFyZW50c1xuICBzdGF0ZS5zY3JvbGxQYXJlbnRzLmZvckVhY2godGFyZ2V0ID0+IHtcbiAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc3RhdGUudXBkYXRlQm91bmQpO1xuICB9KTtcblxuICAvLyBSZXNldCBzdGF0ZVxuICBzdGF0ZS51cGRhdGVCb3VuZCA9IG51bGw7XG4gIHN0YXRlLnNjcm9sbFBhcmVudHMgPSBbXTtcbiAgc3RhdGUuc2Nyb2xsRWxlbWVudCA9IG51bGw7XG4gIHN0YXRlLmV2ZW50c0VuYWJsZWQgPSBmYWxzZTtcbiAgcmV0dXJuIHN0YXRlO1xufVxuIiwiaW1wb3J0IHJlbW92ZUV2ZW50TGlzdGVuZXJzIGZyb20gJy4uL3V0aWxzL3JlbW92ZUV2ZW50TGlzdGVuZXJzJztcblxuLyoqXG4gKiBJdCB3aWxsIHJlbW92ZSByZXNpemUvc2Nyb2xsIGV2ZW50cyBhbmQgd29uJ3QgcmVjYWxjdWxhdGUgcG9wcGVyIHBvc2l0aW9uXG4gKiB3aGVuIHRoZXkgYXJlIHRyaWdnZXJlZC4gSXQgYWxzbyB3b24ndCB0cmlnZ2VyIGBvblVwZGF0ZWAgY2FsbGJhY2sgYW55bW9yZSxcbiAqIHVubGVzcyB5b3UgY2FsbCBgdXBkYXRlYCBtZXRob2QgbWFudWFsbHkuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc2FibGVFdmVudExpc3RlbmVycygpIHtcbiAgaWYgKHRoaXMuc3RhdGUuZXZlbnRzRW5hYmxlZCkge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuc2NoZWR1bGVVcGRhdGUpO1xuICAgIHRoaXMuc3RhdGUgPSByZW1vdmVFdmVudExpc3RlbmVycyh0aGlzLnJlZmVyZW5jZSwgdGhpcy5zdGF0ZSk7XG4gIH1cbn1cbiIsIi8qKlxuICogVGVsbHMgaWYgYSBnaXZlbiBpbnB1dCBpcyBhIG51bWJlclxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHsqfSBpbnB1dCB0byBjaGVja1xuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNOdW1lcmljKG4pIHtcbiAgcmV0dXJuIG4gIT09ICcnICYmICFpc05hTihwYXJzZUZsb2F0KG4pKSAmJiBpc0Zpbml0ZShuKTtcbn1cbiIsImltcG9ydCBpc051bWVyaWMgZnJvbSAnLi9pc051bWVyaWMnO1xuXG4vKipcbiAqIFNldCB0aGUgc3R5bGUgdG8gdGhlIGdpdmVuIHBvcHBlclxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50IC0gRWxlbWVudCB0byBhcHBseSB0aGUgc3R5bGUgdG9cbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBzdHlsZXNcbiAqIE9iamVjdCB3aXRoIGEgbGlzdCBvZiBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXMgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBlbGVtZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFN0eWxlcyhlbGVtZW50LCBzdHlsZXMpIHtcbiAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKHByb3AgPT4ge1xuICAgIGxldCB1bml0ID0gJyc7XG4gICAgLy8gYWRkIHVuaXQgaWYgdGhlIHZhbHVlIGlzIG51bWVyaWMgYW5kIGlzIG9uZSBvZiB0aGUgZm9sbG93aW5nXG4gICAgaWYgKFxuICAgICAgWyd3aWR0aCcsICdoZWlnaHQnLCAndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J10uaW5kZXhPZihwcm9wKSAhPT1cbiAgICAgICAgLTEgJiZcbiAgICAgIGlzTnVtZXJpYyhzdHlsZXNbcHJvcF0pXG4gICAgKSB7XG4gICAgICB1bml0ID0gJ3B4JztcbiAgICB9XG4gICAgZWxlbWVudC5zdHlsZVtwcm9wXSA9IHN0eWxlc1twcm9wXSArIHVuaXQ7XG4gIH0pO1xufVxuIiwiLyoqXG4gKiBTZXQgdGhlIGF0dHJpYnV0ZXMgdG8gdGhlIGdpdmVuIHBvcHBlclxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50IC0gRWxlbWVudCB0byBhcHBseSB0aGUgYXR0cmlidXRlcyB0b1xuICogQGFyZ3VtZW50IHtPYmplY3R9IHN0eWxlc1xuICogT2JqZWN0IHdpdGggYSBsaXN0IG9mIHByb3BlcnRpZXMgYW5kIHZhbHVlcyB3aGljaCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24ocHJvcCkge1xuICAgIGNvbnN0IHZhbHVlID0gYXR0cmlidXRlc1twcm9wXTtcbiAgICBpZiAodmFsdWUgIT09IGZhbHNlKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShwcm9wLCBhdHRyaWJ1dGVzW3Byb3BdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUocHJvcCk7XG4gICAgfVxuICB9KTtcbn1cbiIsImltcG9ydCBzZXRTdHlsZXMgZnJvbSAnLi4vdXRpbHMvc2V0U3R5bGVzJztcbmltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gJy4uL3V0aWxzL3NldEF0dHJpYnV0ZXMnO1xuaW1wb3J0IGdldFJlZmVyZW5jZU9mZnNldHMgZnJvbSAnLi4vdXRpbHMvZ2V0UmVmZXJlbmNlT2Zmc2V0cyc7XG5pbXBvcnQgY29tcHV0ZUF1dG9QbGFjZW1lbnQgZnJvbSAnLi4vdXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQnO1xuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEuc3R5bGVzIC0gTGlzdCBvZiBzdHlsZSBwcm9wZXJ0aWVzIC0gdmFsdWVzIHRvIGFwcGx5IHRvIHBvcHBlciBlbGVtZW50XG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YS5hdHRyaWJ1dGVzIC0gTGlzdCBvZiBhdHRyaWJ1dGUgcHJvcGVydGllcyAtIHZhbHVlcyB0byBhcHBseSB0byBwb3BwZXIgZWxlbWVudFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIHNhbWUgZGF0YSBvYmplY3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwbHlTdHlsZShkYXRhKSB7XG4gIC8vIGFueSBwcm9wZXJ0eSBwcmVzZW50IGluIGBkYXRhLnN0eWxlc2Agd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIsXG4gIC8vIGluIHRoaXMgd2F5IHdlIGNhbiBtYWtlIHRoZSAzcmQgcGFydHkgbW9kaWZpZXJzIGFkZCBjdXN0b20gc3R5bGVzIHRvIGl0XG4gIC8vIEJlIGF3YXJlLCBtb2RpZmllcnMgY291bGQgb3ZlcnJpZGUgdGhlIHByb3BlcnRpZXMgZGVmaW5lZCBpbiB0aGUgcHJldmlvdXNcbiAgLy8gbGluZXMgb2YgdGhpcyBtb2RpZmllciFcbiAgc2V0U3R5bGVzKGRhdGEuaW5zdGFuY2UucG9wcGVyLCBkYXRhLnN0eWxlcyk7XG5cbiAgLy8gYW55IHByb3BlcnR5IHByZXNlbnQgaW4gYGRhdGEuYXR0cmlidXRlc2Agd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIsXG4gIC8vIHRoZXkgd2lsbCBiZSBzZXQgYXMgSFRNTCBhdHRyaWJ1dGVzIG9mIHRoZSBlbGVtZW50XG4gIHNldEF0dHJpYnV0ZXMoZGF0YS5pbnN0YW5jZS5wb3BwZXIsIGRhdGEuYXR0cmlidXRlcyk7XG5cbiAgLy8gaWYgYXJyb3dFbGVtZW50IGlzIGRlZmluZWQgYW5kIGFycm93U3R5bGVzIGhhcyBzb21lIHByb3BlcnRpZXNcbiAgaWYgKGRhdGEuYXJyb3dFbGVtZW50ICYmIE9iamVjdC5rZXlzKGRhdGEuYXJyb3dTdHlsZXMpLmxlbmd0aCkge1xuICAgIHNldFN0eWxlcyhkYXRhLmFycm93RWxlbWVudCwgZGF0YS5hcnJvd1N0eWxlcyk7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIHgtcGxhY2VtZW50IGF0dHJpYnV0ZSBiZWZvcmUgZXZlcnl0aGluZyBlbHNlIGJlY2F1c2UgaXQgY291bGQgYmUgdXNlZFxuICogdG8gYWRkIG1hcmdpbnMgdG8gdGhlIHBvcHBlciBtYXJnaW5zIG5lZWRzIHRvIGJlIGNhbGN1bGF0ZWQgdG8gZ2V0IHRoZVxuICogY29ycmVjdCBwb3BwZXIgb2Zmc2V0cy5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIubW9kaWZpZXJzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByZWZlcmVuY2UgLSBUaGUgcmVmZXJlbmNlIGVsZW1lbnQgdXNlZCB0byBwb3NpdGlvbiB0aGUgcG9wcGVyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3BwZXIgLSBUaGUgSFRNTCBlbGVtZW50IHVzZWQgYXMgcG9wcGVyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFBvcHBlci5qcyBvcHRpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVN0eWxlT25Mb2FkKFxuICByZWZlcmVuY2UsXG4gIHBvcHBlcixcbiAgb3B0aW9ucyxcbiAgbW9kaWZpZXJPcHRpb25zLFxuICBzdGF0ZVxuKSB7XG4gIC8vIGNvbXB1dGUgcmVmZXJlbmNlIGVsZW1lbnQgb2Zmc2V0c1xuICBjb25zdCByZWZlcmVuY2VPZmZzZXRzID0gZ2V0UmVmZXJlbmNlT2Zmc2V0cyhzdGF0ZSwgcG9wcGVyLCByZWZlcmVuY2UsIG9wdGlvbnMucG9zaXRpb25GaXhlZCk7XG5cbiAgLy8gY29tcHV0ZSBhdXRvIHBsYWNlbWVudCwgc3RvcmUgcGxhY2VtZW50IGluc2lkZSB0aGUgZGF0YSBvYmplY3QsXG4gIC8vIG1vZGlmaWVycyB3aWxsIGJlIGFibGUgdG8gZWRpdCBgcGxhY2VtZW50YCBpZiBuZWVkZWRcbiAgLy8gYW5kIHJlZmVyIHRvIG9yaWdpbmFsUGxhY2VtZW50IHRvIGtub3cgdGhlIG9yaWdpbmFsIHZhbHVlXG4gIGNvbnN0IHBsYWNlbWVudCA9IGNvbXB1dGVBdXRvUGxhY2VtZW50KFxuICAgIG9wdGlvbnMucGxhY2VtZW50LFxuICAgIHJlZmVyZW5jZU9mZnNldHMsXG4gICAgcG9wcGVyLFxuICAgIHJlZmVyZW5jZSxcbiAgICBvcHRpb25zLm1vZGlmaWVycy5mbGlwLmJvdW5kYXJpZXNFbGVtZW50LFxuICAgIG9wdGlvbnMubW9kaWZpZXJzLmZsaXAucGFkZGluZ1xuICApO1xuXG4gIHBvcHBlci5zZXRBdHRyaWJ1dGUoJ3gtcGxhY2VtZW50JywgcGxhY2VtZW50KTtcblxuICAvLyBBcHBseSBgcG9zaXRpb25gIHRvIHBvcHBlciBiZWZvcmUgYW55dGhpbmcgZWxzZSBiZWNhdXNlXG4gIC8vIHdpdGhvdXQgdGhlIHBvc2l0aW9uIGFwcGxpZWQgd2UgY2FuJ3QgZ3VhcmFudGVlIGNvcnJlY3QgY29tcHV0YXRpb25zXG4gIHNldFN0eWxlcyhwb3BwZXIsIHsgcG9zaXRpb246IG9wdGlvbnMucG9zaXRpb25GaXhlZCA/ICdmaXhlZCcgOiAnYWJzb2x1dGUnIH0pO1xuXG4gIHJldHVybiBvcHRpb25zO1xufVxuIiwiLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7Qm9vbGVhbn0gc2hvdWxkUm91bmQgLSBJZiB0aGUgb2Zmc2V0cyBzaG91bGQgYmUgcm91bmRlZCBhdCBhbGxcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBwb3BwZXIncyBwb3NpdGlvbiBvZmZzZXRzIHJvdW5kZWRcbiAqXG4gKiBUaGUgdGFsZSBvZiBwaXhlbC1wZXJmZWN0IHBvc2l0aW9uaW5nLiBJdCdzIHN0aWxsIG5vdCAxMDAlIHBlcmZlY3QsIGJ1dCBhc1xuICogZ29vZCBhcyBpdCBjYW4gYmUgd2l0aGluIHJlYXNvbi5cbiAqIERpc2N1c3Npb24gaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL0ZlelZyYXN0YS9wb3BwZXIuanMvcHVsbC83MTVcbiAqXG4gKiBMb3cgRFBJIHNjcmVlbnMgY2F1c2UgYSBwb3BwZXIgdG8gYmUgYmx1cnJ5IGlmIG5vdCB1c2luZyBmdWxsIHBpeGVscyAoU2FmYXJpXG4gKiBhcyB3ZWxsIG9uIEhpZ2ggRFBJIHNjcmVlbnMpLlxuICpcbiAqIEZpcmVmb3ggcHJlZmVycyBubyByb3VuZGluZyBmb3IgcG9zaXRpb25pbmcgYW5kIGRvZXMgbm90IGhhdmUgYmx1cnJpbmVzcyBvblxuICogaGlnaCBEUEkgc2NyZWVucy5cbiAqXG4gKiBPbmx5IGhvcml6b250YWwgcGxhY2VtZW50IGFuZCBsZWZ0L3JpZ2h0IHZhbHVlcyBuZWVkIHRvIGJlIGNvbnNpZGVyZWQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFJvdW5kZWRPZmZzZXRzKGRhdGEsIHNob3VsZFJvdW5kKSB7XG4gIGNvbnN0IHsgcG9wcGVyLCByZWZlcmVuY2UgfSA9IGRhdGEub2Zmc2V0cztcbiAgY29uc3QgeyByb3VuZCwgZmxvb3IgfSA9IE1hdGg7XG4gIGNvbnN0IG5vUm91bmQgPSB2ID0+IHY7XG4gIFxuICBjb25zdCByZWZlcmVuY2VXaWR0aCA9IHJvdW5kKHJlZmVyZW5jZS53aWR0aCk7XG4gIGNvbnN0IHBvcHBlcldpZHRoID0gcm91bmQocG9wcGVyLndpZHRoKTtcbiAgXG4gIGNvbnN0IGlzVmVydGljYWwgPSBbJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKGRhdGEucGxhY2VtZW50KSAhPT0gLTE7XG4gIGNvbnN0IGlzVmFyaWF0aW9uID0gZGF0YS5wbGFjZW1lbnQuaW5kZXhPZignLScpICE9PSAtMTtcbiAgY29uc3Qgc2FtZVdpZHRoUGFyaXR5ID0gcmVmZXJlbmNlV2lkdGggJSAyID09PSBwb3BwZXJXaWR0aCAlIDI7XG4gIGNvbnN0IGJvdGhPZGRXaWR0aCA9IHJlZmVyZW5jZVdpZHRoICUgMiA9PT0gMSAmJiBwb3BwZXJXaWR0aCAlIDIgPT09IDE7XG5cbiAgY29uc3QgaG9yaXpvbnRhbFRvSW50ZWdlciA9ICFzaG91bGRSb3VuZFxuICAgID8gbm9Sb3VuZFxuICAgIDogaXNWZXJ0aWNhbCB8fCBpc1ZhcmlhdGlvbiB8fCBzYW1lV2lkdGhQYXJpdHlcbiAgICA/IHJvdW5kXG4gICAgOiBmbG9vcjtcbiAgY29uc3QgdmVydGljYWxUb0ludGVnZXIgPSAhc2hvdWxkUm91bmQgPyBub1JvdW5kIDogcm91bmQ7XG5cbiAgcmV0dXJuIHtcbiAgICBsZWZ0OiBob3Jpem9udGFsVG9JbnRlZ2VyKFxuICAgICAgYm90aE9kZFdpZHRoICYmICFpc1ZhcmlhdGlvbiAmJiBzaG91bGRSb3VuZFxuICAgICAgICA/IHBvcHBlci5sZWZ0IC0gMVxuICAgICAgICA6IHBvcHBlci5sZWZ0XG4gICAgKSxcbiAgICB0b3A6IHZlcnRpY2FsVG9JbnRlZ2VyKHBvcHBlci50b3ApLFxuICAgIGJvdHRvbTogdmVydGljYWxUb0ludGVnZXIocG9wcGVyLmJvdHRvbSksXG4gICAgcmlnaHQ6IGhvcml6b250YWxUb0ludGVnZXIocG9wcGVyLnJpZ2h0KSxcbiAgfTtcbn1cbiIsImltcG9ydCBnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUgZnJvbSAnLi4vdXRpbHMvZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lJztcbmltcG9ydCBmaW5kIGZyb20gJy4uL3V0aWxzL2ZpbmQnO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tICcuLi91dGlscy9nZXRPZmZzZXRQYXJlbnQnO1xuaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tICcuLi91dGlscy9nZXRCb3VuZGluZ0NsaWVudFJlY3QnO1xuaW1wb3J0IGdldFJvdW5kZWRPZmZzZXRzIGZyb20gJy4uL3V0aWxzL2dldFJvdW5kZWRPZmZzZXRzJztcbmltcG9ydCBpc0Jyb3dzZXIgZnJvbSAnLi4vdXRpbHMvaXNCcm93c2VyJztcblxuY29uc3QgaXNGaXJlZm94ID0gaXNCcm93c2VyICYmIC9GaXJlZm94L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZVN0eWxlKGRhdGEsIG9wdGlvbnMpIHtcbiAgY29uc3QgeyB4LCB5IH0gPSBvcHRpb25zO1xuICBjb25zdCB7IHBvcHBlciB9ID0gZGF0YS5vZmZzZXRzO1xuXG4gIC8vIFJlbW92ZSB0aGlzIGxlZ2FjeSBzdXBwb3J0IGluIFBvcHBlci5qcyB2MlxuICBjb25zdCBsZWdhY3lHcHVBY2NlbGVyYXRpb25PcHRpb24gPSBmaW5kKFxuICAgIGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLFxuICAgIG1vZGlmaWVyID0+IG1vZGlmaWVyLm5hbWUgPT09ICdhcHBseVN0eWxlJ1xuICApLmdwdUFjY2VsZXJhdGlvbjtcbiAgaWYgKGxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgJ1dBUk5JTkc6IGBncHVBY2NlbGVyYXRpb25gIG9wdGlvbiBtb3ZlZCB0byBgY29tcHV0ZVN0eWxlYCBtb2RpZmllciBhbmQgd2lsbCBub3QgYmUgc3VwcG9ydGVkIGluIGZ1dHVyZSB2ZXJzaW9ucyBvZiBQb3BwZXIuanMhJ1xuICAgICk7XG4gIH1cbiAgY29uc3QgZ3B1QWNjZWxlcmF0aW9uID1cbiAgICBsZWdhY3lHcHVBY2NlbGVyYXRpb25PcHRpb24gIT09IHVuZGVmaW5lZFxuICAgICAgPyBsZWdhY3lHcHVBY2NlbGVyYXRpb25PcHRpb25cbiAgICAgIDogb3B0aW9ucy5ncHVBY2NlbGVyYXRpb247XG5cbiAgY29uc3Qgb2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KGRhdGEuaW5zdGFuY2UucG9wcGVyKTtcbiAgY29uc3Qgb2Zmc2V0UGFyZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQpO1xuXG4gIC8vIFN0eWxlc1xuICBjb25zdCBzdHlsZXMgPSB7XG4gICAgcG9zaXRpb246IHBvcHBlci5wb3NpdGlvbixcbiAgfTtcblxuICBjb25zdCBvZmZzZXRzID0gZ2V0Um91bmRlZE9mZnNldHMoXG4gICAgZGF0YSxcbiAgICB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA8IDIgfHwgIWlzRmlyZWZveFxuICApO1xuXG4gIGNvbnN0IHNpZGVBID0geCA9PT0gJ2JvdHRvbScgPyAndG9wJyA6ICdib3R0b20nO1xuICBjb25zdCBzaWRlQiA9IHkgPT09ICdyaWdodCcgPyAnbGVmdCcgOiAncmlnaHQnO1xuXG4gIC8vIGlmIGdwdUFjY2VsZXJhdGlvbiBpcyBzZXQgdG8gYHRydWVgIGFuZCB0cmFuc2Zvcm0gaXMgc3VwcG9ydGVkLFxuICAvLyAgd2UgdXNlIGB0cmFuc2xhdGUzZGAgdG8gYXBwbHkgdGhlIHBvc2l0aW9uIHRvIHRoZSBwb3BwZXIgd2VcbiAgLy8gYXV0b21hdGljYWxseSB1c2UgdGhlIHN1cHBvcnRlZCBwcmVmaXhlZCB2ZXJzaW9uIGlmIG5lZWRlZFxuICBjb25zdCBwcmVmaXhlZFByb3BlcnR5ID0gZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKCd0cmFuc2Zvcm0nKTtcblxuICAvLyBub3csIGxldCdzIG1ha2UgYSBzdGVwIGJhY2sgYW5kIGxvb2sgYXQgdGhpcyBjb2RlIGNsb3NlbHkgKHd0Zj8pXG4gIC8vIElmIHRoZSBjb250ZW50IG9mIHRoZSBwb3BwZXIgZ3Jvd3Mgb25jZSBpdCdzIGJlZW4gcG9zaXRpb25lZCwgaXRcbiAgLy8gbWF5IGhhcHBlbiB0aGF0IHRoZSBwb3BwZXIgZ2V0cyBtaXNwbGFjZWQgYmVjYXVzZSBvZiB0aGUgbmV3IGNvbnRlbnRcbiAgLy8gb3ZlcmZsb3dpbmcgaXRzIHJlZmVyZW5jZSBlbGVtZW50XG4gIC8vIFRvIGF2b2lkIHRoaXMgcHJvYmxlbSwgd2UgcHJvdmlkZSB0d28gb3B0aW9ucyAoeCBhbmQgeSksIHdoaWNoIGFsbG93XG4gIC8vIHRoZSBjb25zdW1lciB0byBkZWZpbmUgdGhlIG9mZnNldCBvcmlnaW4uXG4gIC8vIElmIHdlIHBvc2l0aW9uIGEgcG9wcGVyIG9uIHRvcCBvZiBhIHJlZmVyZW5jZSBlbGVtZW50LCB3ZSBjYW4gc2V0XG4gIC8vIGB4YCB0byBgdG9wYCB0byBtYWtlIHRoZSBwb3BwZXIgZ3JvdyB0b3dhcmRzIGl0cyB0b3AgaW5zdGVhZCBvZlxuICAvLyBpdHMgYm90dG9tLlxuICBsZXQgbGVmdCwgdG9wO1xuICBpZiAoc2lkZUEgPT09ICdib3R0b20nKSB7XG4gICAgLy8gd2hlbiBvZmZzZXRQYXJlbnQgaXMgPGh0bWw+IHRoZSBwb3NpdGlvbmluZyBpcyByZWxhdGl2ZSB0byB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW4gKGV4Y2x1ZGluZyB0aGUgc2Nyb2xsYmFyKVxuICAgIC8vIGFuZCBub3QgdGhlIGJvdHRvbSBvZiB0aGUgaHRtbCBlbGVtZW50XG4gICAgaWYgKG9mZnNldFBhcmVudC5ub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgICB0b3AgPSAtb2Zmc2V0UGFyZW50LmNsaWVudEhlaWdodCArIG9mZnNldHMuYm90dG9tO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b3AgPSAtb2Zmc2V0UGFyZW50UmVjdC5oZWlnaHQgKyBvZmZzZXRzLmJvdHRvbTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdG9wID0gb2Zmc2V0cy50b3A7XG4gIH1cbiAgaWYgKHNpZGVCID09PSAncmlnaHQnKSB7XG4gICAgaWYgKG9mZnNldFBhcmVudC5ub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgICBsZWZ0ID0gLW9mZnNldFBhcmVudC5jbGllbnRXaWR0aCArIG9mZnNldHMucmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlZnQgPSAtb2Zmc2V0UGFyZW50UmVjdC53aWR0aCArIG9mZnNldHMucmlnaHQ7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxlZnQgPSBvZmZzZXRzLmxlZnQ7XG4gIH1cbiAgaWYgKGdwdUFjY2VsZXJhdGlvbiAmJiBwcmVmaXhlZFByb3BlcnR5KSB7XG4gICAgc3R5bGVzW3ByZWZpeGVkUHJvcGVydHldID0gYHRyYW5zbGF0ZTNkKCR7bGVmdH1weCwgJHt0b3B9cHgsIDApYDtcbiAgICBzdHlsZXNbc2lkZUFdID0gMDtcbiAgICBzdHlsZXNbc2lkZUJdID0gMDtcbiAgICBzdHlsZXMud2lsbENoYW5nZSA9ICd0cmFuc2Zvcm0nO1xuICB9IGVsc2Uge1xuICAgIC8vIG90aHdlcmlzZSwgd2UgdXNlIHRoZSBzdGFuZGFyZCBgdG9wYCwgYGxlZnRgLCBgYm90dG9tYCBhbmQgYHJpZ2h0YCBwcm9wZXJ0aWVzXG4gICAgY29uc3QgaW52ZXJ0VG9wID0gc2lkZUEgPT09ICdib3R0b20nID8gLTEgOiAxO1xuICAgIGNvbnN0IGludmVydExlZnQgPSBzaWRlQiA9PT0gJ3JpZ2h0JyA/IC0xIDogMTtcbiAgICBzdHlsZXNbc2lkZUFdID0gdG9wICogaW52ZXJ0VG9wO1xuICAgIHN0eWxlc1tzaWRlQl0gPSBsZWZ0ICogaW52ZXJ0TGVmdDtcbiAgICBzdHlsZXMud2lsbENoYW5nZSA9IGAke3NpZGVBfSwgJHtzaWRlQn1gO1xuICB9XG5cbiAgLy8gQXR0cmlidXRlc1xuICBjb25zdCBhdHRyaWJ1dGVzID0ge1xuICAgICd4LXBsYWNlbWVudCc6IGRhdGEucGxhY2VtZW50LFxuICB9O1xuXG4gIC8vIFVwZGF0ZSBgZGF0YWAgYXR0cmlidXRlcywgc3R5bGVzIGFuZCBhcnJvd1N0eWxlc1xuICBkYXRhLmF0dHJpYnV0ZXMgPSB7IC4uLmF0dHJpYnV0ZXMsIC4uLmRhdGEuYXR0cmlidXRlcyB9O1xuICBkYXRhLnN0eWxlcyA9IHsgLi4uc3R5bGVzLCAuLi5kYXRhLnN0eWxlcyB9O1xuICBkYXRhLmFycm93U3R5bGVzID0geyAuLi5kYXRhLm9mZnNldHMuYXJyb3csIC4uLmRhdGEuYXJyb3dTdHlsZXMgfTtcblxuICByZXR1cm4gZGF0YTtcbn1cbiIsImltcG9ydCBmaW5kIGZyb20gJy4vZmluZCc7XG5cbi8qKlxuICogSGVscGVyIHVzZWQgdG8ga25vdyBpZiB0aGUgZ2l2ZW4gbW9kaWZpZXIgZGVwZW5kcyBmcm9tIGFub3RoZXIgb25lLjxiciAvPlxuICogSXQgY2hlY2tzIGlmIHRoZSBuZWVkZWQgbW9kaWZpZXIgaXMgbGlzdGVkIGFuZCBlbmFibGVkLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzIC0gbGlzdCBvZiBtb2RpZmllcnNcbiAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0aW5nTmFtZSAtIG5hbWUgb2YgcmVxdWVzdGluZyBtb2RpZmllclxuICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RlZE5hbWUgLSBuYW1lIG9mIHJlcXVlc3RlZCBtb2RpZmllclxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzTW9kaWZpZXJSZXF1aXJlZChcbiAgbW9kaWZpZXJzLFxuICByZXF1ZXN0aW5nTmFtZSxcbiAgcmVxdWVzdGVkTmFtZVxuKSB7XG4gIGNvbnN0IHJlcXVlc3RpbmcgPSBmaW5kKG1vZGlmaWVycywgKHsgbmFtZSB9KSA9PiBuYW1lID09PSByZXF1ZXN0aW5nTmFtZSk7XG5cbiAgY29uc3QgaXNSZXF1aXJlZCA9XG4gICAgISFyZXF1ZXN0aW5nICYmXG4gICAgbW9kaWZpZXJzLnNvbWUobW9kaWZpZXIgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgbW9kaWZpZXIubmFtZSA9PT0gcmVxdWVzdGVkTmFtZSAmJlxuICAgICAgICBtb2RpZmllci5lbmFibGVkICYmXG4gICAgICAgIG1vZGlmaWVyLm9yZGVyIDwgcmVxdWVzdGluZy5vcmRlclxuICAgICAgKTtcbiAgICB9KTtcblxuICBpZiAoIWlzUmVxdWlyZWQpIHtcbiAgICBjb25zdCByZXF1ZXN0aW5nID0gYFxcYCR7cmVxdWVzdGluZ05hbWV9XFxgYDtcbiAgICBjb25zdCByZXF1ZXN0ZWQgPSBgXFxgJHtyZXF1ZXN0ZWROYW1lfVxcYGA7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYCR7cmVxdWVzdGVkfSBtb2RpZmllciBpcyByZXF1aXJlZCBieSAke3JlcXVlc3Rpbmd9IG1vZGlmaWVyIGluIG9yZGVyIHRvIHdvcmssIGJlIHN1cmUgdG8gaW5jbHVkZSBpdCBiZWZvcmUgJHtyZXF1ZXN0aW5nfSFgXG4gICAgKTtcbiAgfVxuICByZXR1cm4gaXNSZXF1aXJlZDtcbn1cbiIsImltcG9ydCBnZXRDbGllbnRSZWN0IGZyb20gJy4uL3V0aWxzL2dldENsaWVudFJlY3QnO1xuaW1wb3J0IGdldE91dGVyU2l6ZXMgZnJvbSAnLi4vdXRpbHMvZ2V0T3V0ZXJTaXplcyc7XG5pbXBvcnQgaXNNb2RpZmllclJlcXVpcmVkIGZyb20gJy4uL3V0aWxzL2lzTW9kaWZpZXJSZXF1aXJlZCc7XG5pbXBvcnQgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5IGZyb20gJy4uL3V0aWxzL2dldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSc7XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcnJvdyhkYXRhLCBvcHRpb25zKSB7XG4gIC8vIGFycm93IGRlcGVuZHMgb24ga2VlcFRvZ2V0aGVyIGluIG9yZGVyIHRvIHdvcmtcbiAgaWYgKCFpc01vZGlmaWVyUmVxdWlyZWQoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsICdhcnJvdycsICdrZWVwVG9nZXRoZXInKSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgbGV0IGFycm93RWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudDtcblxuICAvLyBpZiBhcnJvd0VsZW1lbnQgaXMgYSBzdHJpbmcsIHN1cHBvc2UgaXQncyBhIENTUyBzZWxlY3RvclxuICBpZiAodHlwZW9mIGFycm93RWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICBhcnJvd0VsZW1lbnQgPSBkYXRhLmluc3RhbmNlLnBvcHBlci5xdWVyeVNlbGVjdG9yKGFycm93RWxlbWVudCk7XG5cbiAgICAvLyBpZiBhcnJvd0VsZW1lbnQgaXMgbm90IGZvdW5kLCBkb24ndCBydW4gdGhlIG1vZGlmaWVyXG4gICAgaWYgKCFhcnJvd0VsZW1lbnQpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBpZiB0aGUgYXJyb3dFbGVtZW50IGlzbid0IGEgcXVlcnkgc2VsZWN0b3Igd2UgbXVzdCBjaGVjayB0aGF0IHRoZVxuICAgIC8vIHByb3ZpZGVkIERPTSBub2RlIGlzIGNoaWxkIG9mIGl0cyBwb3BwZXIgbm9kZVxuICAgIGlmICghZGF0YS5pbnN0YW5jZS5wb3BwZXIuY29udGFpbnMoYXJyb3dFbGVtZW50KSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnV0FSTklORzogYGFycm93LmVsZW1lbnRgIG11c3QgYmUgY2hpbGQgb2YgaXRzIHBvcHBlciBlbGVtZW50ISdcbiAgICAgICk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICBjb25zdCB7IHBvcHBlciwgcmVmZXJlbmNlIH0gPSBkYXRhLm9mZnNldHM7XG4gIGNvbnN0IGlzVmVydGljYWwgPSBbJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xuXG4gIGNvbnN0IGxlbiA9IGlzVmVydGljYWwgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG4gIGNvbnN0IHNpZGVDYXBpdGFsaXplZCA9IGlzVmVydGljYWwgPyAnVG9wJyA6ICdMZWZ0JztcbiAgY29uc3Qgc2lkZSA9IHNpZGVDYXBpdGFsaXplZC50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCBhbHRTaWRlID0gaXNWZXJ0aWNhbCA/ICdsZWZ0JyA6ICd0b3AnO1xuICBjb25zdCBvcFNpZGUgPSBpc1ZlcnRpY2FsID8gJ2JvdHRvbScgOiAncmlnaHQnO1xuICBjb25zdCBhcnJvd0VsZW1lbnRTaXplID0gZ2V0T3V0ZXJTaXplcyhhcnJvd0VsZW1lbnQpW2xlbl07XG5cbiAgLy9cbiAgLy8gZXh0ZW5kcyBrZWVwVG9nZXRoZXIgYmVoYXZpb3IgbWFraW5nIHN1cmUgdGhlIHBvcHBlciBhbmQgaXRzXG4gIC8vIHJlZmVyZW5jZSBoYXZlIGVub3VnaCBwaXhlbHMgaW4gY29uanVuY3Rpb25cbiAgLy9cblxuICAvLyB0b3AvbGVmdCBzaWRlXG4gIGlmIChyZWZlcmVuY2Vbb3BTaWRlXSAtIGFycm93RWxlbWVudFNpemUgPCBwb3BwZXJbc2lkZV0pIHtcbiAgICBkYXRhLm9mZnNldHMucG9wcGVyW3NpZGVdIC09XG4gICAgICBwb3BwZXJbc2lkZV0gLSAocmVmZXJlbmNlW29wU2lkZV0gLSBhcnJvd0VsZW1lbnRTaXplKTtcbiAgfVxuICAvLyBib3R0b20vcmlnaHQgc2lkZVxuICBpZiAocmVmZXJlbmNlW3NpZGVdICsgYXJyb3dFbGVtZW50U2l6ZSA+IHBvcHBlcltvcFNpZGVdKSB7XG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlcltzaWRlXSArPVxuICAgICAgcmVmZXJlbmNlW3NpZGVdICsgYXJyb3dFbGVtZW50U2l6ZSAtIHBvcHBlcltvcFNpZGVdO1xuICB9XG4gIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBnZXRDbGllbnRSZWN0KGRhdGEub2Zmc2V0cy5wb3BwZXIpO1xuXG4gIC8vIGNvbXB1dGUgY2VudGVyIG9mIHRoZSBwb3BwZXJcbiAgY29uc3QgY2VudGVyID0gcmVmZXJlbmNlW3NpZGVdICsgcmVmZXJlbmNlW2xlbl0gLyAyIC0gYXJyb3dFbGVtZW50U2l6ZSAvIDI7XG5cbiAgLy8gQ29tcHV0ZSB0aGUgc2lkZVZhbHVlIHVzaW5nIHRoZSB1cGRhdGVkIHBvcHBlciBvZmZzZXRzXG4gIC8vIHRha2UgcG9wcGVyIG1hcmdpbiBpbiBhY2NvdW50IGJlY2F1c2Ugd2UgZG9uJ3QgaGF2ZSB0aGlzIGluZm8gYXZhaWxhYmxlXG4gIGNvbnN0IGNzcyA9IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShkYXRhLmluc3RhbmNlLnBvcHBlcik7XG4gIGNvbnN0IHBvcHBlck1hcmdpblNpZGUgPSBwYXJzZUZsb2F0KGNzc1tgbWFyZ2luJHtzaWRlQ2FwaXRhbGl6ZWR9YF0pO1xuICBjb25zdCBwb3BwZXJCb3JkZXJTaWRlID0gcGFyc2VGbG9hdChjc3NbYGJvcmRlciR7c2lkZUNhcGl0YWxpemVkfVdpZHRoYF0pO1xuICBsZXQgc2lkZVZhbHVlID1cbiAgICBjZW50ZXIgLSBkYXRhLm9mZnNldHMucG9wcGVyW3NpZGVdIC0gcG9wcGVyTWFyZ2luU2lkZSAtIHBvcHBlckJvcmRlclNpZGU7XG5cbiAgLy8gcHJldmVudCBhcnJvd0VsZW1lbnQgZnJvbSBiZWluZyBwbGFjZWQgbm90IGNvbnRpZ3VvdXNseSB0byBpdHMgcG9wcGVyXG4gIHNpZGVWYWx1ZSA9IE1hdGgubWF4KE1hdGgubWluKHBvcHBlcltsZW5dIC0gYXJyb3dFbGVtZW50U2l6ZSwgc2lkZVZhbHVlKSwgMCk7XG5cbiAgZGF0YS5hcnJvd0VsZW1lbnQgPSBhcnJvd0VsZW1lbnQ7XG4gIGRhdGEub2Zmc2V0cy5hcnJvdyA9IHtcbiAgICBbc2lkZV06IE1hdGgucm91bmQoc2lkZVZhbHVlKSxcbiAgICBbYWx0U2lkZV06ICcnLCAvLyBtYWtlIHN1cmUgdG8gdW5zZXQgYW55IGV2ZW50dWFsIGFsdFNpZGUgdmFsdWUgZnJvbSB0aGUgRE9NIG5vZGVcbiAgfTtcblxuICByZXR1cm4gZGF0YTtcbn1cbiIsIi8qKlxuICogR2V0IHRoZSBvcHBvc2l0ZSBwbGFjZW1lbnQgdmFyaWF0aW9uIG9mIHRoZSBnaXZlbiBvbmVcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBwbGFjZW1lbnQgdmFyaWF0aW9uXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBmbGlwcGVkIHBsYWNlbWVudCB2YXJpYXRpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVWYXJpYXRpb24odmFyaWF0aW9uKSB7XG4gIGlmICh2YXJpYXRpb24gPT09ICdlbmQnKSB7XG4gICAgcmV0dXJuICdzdGFydCc7XG4gIH0gZWxzZSBpZiAodmFyaWF0aW9uID09PSAnc3RhcnQnKSB7XG4gICAgcmV0dXJuICdlbmQnO1xuICB9XG4gIHJldHVybiB2YXJpYXRpb247XG59XG4iLCIvKipcbiAqIExpc3Qgb2YgYWNjZXB0ZWQgcGxhY2VtZW50cyB0byB1c2UgYXMgdmFsdWVzIG9mIHRoZSBgcGxhY2VtZW50YCBvcHRpb24uPGJyIC8+XG4gKiBWYWxpZCBwbGFjZW1lbnRzIGFyZTpcbiAqIC0gYGF1dG9gXG4gKiAtIGB0b3BgXG4gKiAtIGByaWdodGBcbiAqIC0gYGJvdHRvbWBcbiAqIC0gYGxlZnRgXG4gKlxuICogRWFjaCBwbGFjZW1lbnQgY2FuIGhhdmUgYSB2YXJpYXRpb24gZnJvbSB0aGlzIGxpc3Q6XG4gKiAtIGAtc3RhcnRgXG4gKiAtIGAtZW5kYFxuICpcbiAqIFZhcmlhdGlvbnMgYXJlIGludGVycHJldGVkIGVhc2lseSBpZiB5b3UgdGhpbmsgb2YgdGhlbSBhcyB0aGUgbGVmdCB0byByaWdodFxuICogd3JpdHRlbiBsYW5ndWFnZXMuIEhvcml6b250YWxseSAoYHRvcGAgYW5kIGBib3R0b21gKSwgYHN0YXJ0YCBpcyBsZWZ0IGFuZCBgZW5kYFxuICogaXMgcmlnaHQuPGJyIC8+XG4gKiBWZXJ0aWNhbGx5IChgbGVmdGAgYW5kIGByaWdodGApLCBgc3RhcnRgIGlzIHRvcCBhbmQgYGVuZGAgaXMgYm90dG9tLlxuICpcbiAqIFNvbWUgdmFsaWQgZXhhbXBsZXMgYXJlOlxuICogLSBgdG9wLWVuZGAgKG9uIHRvcCBvZiByZWZlcmVuY2UsIHJpZ2h0IGFsaWduZWQpXG4gKiAtIGByaWdodC1zdGFydGAgKG9uIHJpZ2h0IG9mIHJlZmVyZW5jZSwgdG9wIGFsaWduZWQpXG4gKiAtIGBib3R0b21gIChvbiBib3R0b20sIGNlbnRlcmVkKVxuICogLSBgYXV0by1lbmRgIChvbiB0aGUgc2lkZSB3aXRoIG1vcmUgc3BhY2UgYXZhaWxhYmxlLCBhbGlnbm1lbnQgZGVwZW5kcyBieSBwbGFjZW1lbnQpXG4gKlxuICogQHN0YXRpY1xuICogQHR5cGUge0FycmF5fVxuICogQGVudW0ge1N0cmluZ31cbiAqIEByZWFkb25seVxuICogQG1ldGhvZCBwbGFjZW1lbnRzXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IFtcbiAgJ2F1dG8tc3RhcnQnLFxuICAnYXV0bycsXG4gICdhdXRvLWVuZCcsXG4gICd0b3Atc3RhcnQnLFxuICAndG9wJyxcbiAgJ3RvcC1lbmQnLFxuICAncmlnaHQtc3RhcnQnLFxuICAncmlnaHQnLFxuICAncmlnaHQtZW5kJyxcbiAgJ2JvdHRvbS1lbmQnLFxuICAnYm90dG9tJyxcbiAgJ2JvdHRvbS1zdGFydCcsXG4gICdsZWZ0LWVuZCcsXG4gICdsZWZ0JyxcbiAgJ2xlZnQtc3RhcnQnLFxuXTtcbiIsImltcG9ydCBwbGFjZW1lbnRzIGZyb20gJy4uL21ldGhvZHMvcGxhY2VtZW50cyc7XG5cbi8vIEdldCByaWQgb2YgYGF1dG9gIGBhdXRvLXN0YXJ0YCBhbmQgYGF1dG8tZW5kYFxuY29uc3QgdmFsaWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cy5zbGljZSgzKTtcblxuLyoqXG4gKiBHaXZlbiBhbiBpbml0aWFsIHBsYWNlbWVudCwgcmV0dXJucyBhbGwgdGhlIHN1YnNlcXVlbnQgcGxhY2VtZW50c1xuICogY2xvY2t3aXNlIChvciBjb3VudGVyLWNsb2Nrd2lzZSkuXG4gKlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IHBsYWNlbWVudCAtIEEgdmFsaWQgcGxhY2VtZW50IChpdCBhY2NlcHRzIHZhcmlhdGlvbnMpXG4gKiBAYXJndW1lbnQge0Jvb2xlYW59IGNvdW50ZXIgLSBTZXQgdG8gdHJ1ZSB0byB3YWxrIHRoZSBwbGFjZW1lbnRzIGNvdW50ZXJjbG9ja3dpc2VcbiAqIEByZXR1cm5zIHtBcnJheX0gcGxhY2VtZW50cyBpbmNsdWRpbmcgdGhlaXIgdmFyaWF0aW9uc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbG9ja3dpc2UocGxhY2VtZW50LCBjb3VudGVyID0gZmFsc2UpIHtcbiAgY29uc3QgaW5kZXggPSB2YWxpZFBsYWNlbWVudHMuaW5kZXhPZihwbGFjZW1lbnQpO1xuICBjb25zdCBhcnIgPSB2YWxpZFBsYWNlbWVudHNcbiAgICAuc2xpY2UoaW5kZXggKyAxKVxuICAgIC5jb25jYXQodmFsaWRQbGFjZW1lbnRzLnNsaWNlKDAsIGluZGV4KSk7XG4gIHJldHVybiBjb3VudGVyID8gYXJyLnJldmVyc2UoKSA6IGFycjtcbn1cbiIsImltcG9ydCBnZXRPcHBvc2l0ZVBsYWNlbWVudCBmcm9tICcuLi91dGlscy9nZXRPcHBvc2l0ZVBsYWNlbWVudCc7XG5pbXBvcnQgZ2V0T3Bwb3NpdGVWYXJpYXRpb24gZnJvbSAnLi4vdXRpbHMvZ2V0T3Bwb3NpdGVWYXJpYXRpb24nO1xuaW1wb3J0IGdldFBvcHBlck9mZnNldHMgZnJvbSAnLi4vdXRpbHMvZ2V0UG9wcGVyT2Zmc2V0cyc7XG5pbXBvcnQgcnVuTW9kaWZpZXJzIGZyb20gJy4uL3V0aWxzL3J1bk1vZGlmaWVycyc7XG5pbXBvcnQgZ2V0Qm91bmRhcmllcyBmcm9tICcuLi91dGlscy9nZXRCb3VuZGFyaWVzJztcbmltcG9ydCBpc01vZGlmaWVyRW5hYmxlZCBmcm9tICcuLi91dGlscy9pc01vZGlmaWVyRW5hYmxlZCc7XG5pbXBvcnQgY2xvY2t3aXNlIGZyb20gJy4uL3V0aWxzL2Nsb2Nrd2lzZSc7XG5cbmNvbnN0IEJFSEFWSU9SUyA9IHtcbiAgRkxJUDogJ2ZsaXAnLFxuICBDTE9DS1dJU0U6ICdjbG9ja3dpc2UnLFxuICBDT1VOVEVSQ0xPQ0tXSVNFOiAnY291bnRlcmNsb2Nrd2lzZScsXG59O1xuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmxpcChkYXRhLCBvcHRpb25zKSB7XG4gIC8vIGlmIGBpbm5lcmAgbW9kaWZpZXIgaXMgZW5hYmxlZCwgd2UgY2FuJ3QgdXNlIHRoZSBgZmxpcGAgbW9kaWZpZXJcbiAgaWYgKGlzTW9kaWZpZXJFbmFibGVkKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCAnaW5uZXInKSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgaWYgKGRhdGEuZmxpcHBlZCAmJiBkYXRhLnBsYWNlbWVudCA9PT0gZGF0YS5vcmlnaW5hbFBsYWNlbWVudCkge1xuICAgIC8vIHNlZW1zIGxpa2UgZmxpcCBpcyB0cnlpbmcgdG8gbG9vcCwgcHJvYmFibHkgdGhlcmUncyBub3QgZW5vdWdoIHNwYWNlIG9uIGFueSBvZiB0aGUgZmxpcHBhYmxlIHNpZGVzXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBjb25zdCBib3VuZGFyaWVzID0gZ2V0Qm91bmRhcmllcyhcbiAgICBkYXRhLmluc3RhbmNlLnBvcHBlcixcbiAgICBkYXRhLmluc3RhbmNlLnJlZmVyZW5jZSxcbiAgICBvcHRpb25zLnBhZGRpbmcsXG4gICAgb3B0aW9ucy5ib3VuZGFyaWVzRWxlbWVudCxcbiAgICBkYXRhLnBvc2l0aW9uRml4ZWRcbiAgKTtcblxuICBsZXQgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgbGV0IHBsYWNlbWVudE9wcG9zaXRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgbGV0IHZhcmlhdGlvbiA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCctJylbMV0gfHwgJyc7XG5cbiAgbGV0IGZsaXBPcmRlciA9IFtdO1xuXG4gIHN3aXRjaCAob3B0aW9ucy5iZWhhdmlvcikge1xuICAgIGNhc2UgQkVIQVZJT1JTLkZMSVA6XG4gICAgICBmbGlwT3JkZXIgPSBbcGxhY2VtZW50LCBwbGFjZW1lbnRPcHBvc2l0ZV07XG4gICAgICBicmVhaztcbiAgICBjYXNlIEJFSEFWSU9SUy5DTE9DS1dJU0U6XG4gICAgICBmbGlwT3JkZXIgPSBjbG9ja3dpc2UocGxhY2VtZW50KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQkVIQVZJT1JTLkNPVU5URVJDTE9DS1dJU0U6XG4gICAgICBmbGlwT3JkZXIgPSBjbG9ja3dpc2UocGxhY2VtZW50LCB0cnVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBmbGlwT3JkZXIgPSBvcHRpb25zLmJlaGF2aW9yO1xuICB9XG5cbiAgZmxpcE9yZGVyLmZvckVhY2goKHN0ZXAsIGluZGV4KSA9PiB7XG4gICAgaWYgKHBsYWNlbWVudCAhPT0gc3RlcCB8fCBmbGlwT3JkZXIubGVuZ3RoID09PSBpbmRleCArIDEpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gICAgcGxhY2VtZW50T3Bwb3NpdGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuXG4gICAgY29uc3QgcG9wcGVyT2Zmc2V0cyA9IGRhdGEub2Zmc2V0cy5wb3BwZXI7XG4gICAgY29uc3QgcmVmT2Zmc2V0cyA9IGRhdGEub2Zmc2V0cy5yZWZlcmVuY2U7XG5cbiAgICAvLyB1c2luZyBmbG9vciBiZWNhdXNlIHRoZSByZWZlcmVuY2Ugb2Zmc2V0cyBtYXkgY29udGFpbiBkZWNpbWFscyB3ZSBhcmUgbm90IGdvaW5nIHRvIGNvbnNpZGVyIGhlcmVcbiAgICBjb25zdCBmbG9vciA9IE1hdGguZmxvb3I7XG4gICAgY29uc3Qgb3ZlcmxhcHNSZWYgPVxuICAgICAgKHBsYWNlbWVudCA9PT0gJ2xlZnQnICYmXG4gICAgICAgIGZsb29yKHBvcHBlck9mZnNldHMucmlnaHQpID4gZmxvb3IocmVmT2Zmc2V0cy5sZWZ0KSkgfHxcbiAgICAgIChwbGFjZW1lbnQgPT09ICdyaWdodCcgJiZcbiAgICAgICAgZmxvb3IocG9wcGVyT2Zmc2V0cy5sZWZ0KSA8IGZsb29yKHJlZk9mZnNldHMucmlnaHQpKSB8fFxuICAgICAgKHBsYWNlbWVudCA9PT0gJ3RvcCcgJiZcbiAgICAgICAgZmxvb3IocG9wcGVyT2Zmc2V0cy5ib3R0b20pID4gZmxvb3IocmVmT2Zmc2V0cy50b3ApKSB8fFxuICAgICAgKHBsYWNlbWVudCA9PT0gJ2JvdHRvbScgJiZcbiAgICAgICAgZmxvb3IocG9wcGVyT2Zmc2V0cy50b3ApIDwgZmxvb3IocmVmT2Zmc2V0cy5ib3R0b20pKTtcblxuICAgIGNvbnN0IG92ZXJmbG93c0xlZnQgPSBmbG9vcihwb3BwZXJPZmZzZXRzLmxlZnQpIDwgZmxvb3IoYm91bmRhcmllcy5sZWZ0KTtcbiAgICBjb25zdCBvdmVyZmxvd3NSaWdodCA9IGZsb29yKHBvcHBlck9mZnNldHMucmlnaHQpID4gZmxvb3IoYm91bmRhcmllcy5yaWdodCk7XG4gICAgY29uc3Qgb3ZlcmZsb3dzVG9wID0gZmxvb3IocG9wcGVyT2Zmc2V0cy50b3ApIDwgZmxvb3IoYm91bmRhcmllcy50b3ApO1xuICAgIGNvbnN0IG92ZXJmbG93c0JvdHRvbSA9XG4gICAgICBmbG9vcihwb3BwZXJPZmZzZXRzLmJvdHRvbSkgPiBmbG9vcihib3VuZGFyaWVzLmJvdHRvbSk7XG5cbiAgICBjb25zdCBvdmVyZmxvd3NCb3VuZGFyaWVzID1cbiAgICAgIChwbGFjZW1lbnQgPT09ICdsZWZ0JyAmJiBvdmVyZmxvd3NMZWZ0KSB8fFxuICAgICAgKHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyAmJiBvdmVyZmxvd3NSaWdodCkgfHxcbiAgICAgIChwbGFjZW1lbnQgPT09ICd0b3AnICYmIG92ZXJmbG93c1RvcCkgfHxcbiAgICAgIChwbGFjZW1lbnQgPT09ICdib3R0b20nICYmIG92ZXJmbG93c0JvdHRvbSk7XG5cbiAgICAvLyBmbGlwIHRoZSB2YXJpYXRpb24gaWYgcmVxdWlyZWRcbiAgICBjb25zdCBpc1ZlcnRpY2FsID0gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMTtcblxuICAgIC8vIGZsaXBzIHZhcmlhdGlvbiBpZiByZWZlcmVuY2UgZWxlbWVudCBvdmVyZmxvd3MgYm91bmRhcmllc1xuICAgIGNvbnN0IGZsaXBwZWRWYXJpYXRpb25CeVJlZiA9XG4gICAgICAhIW9wdGlvbnMuZmxpcFZhcmlhdGlvbnMgJiZcbiAgICAgICgoaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdzdGFydCcgJiYgb3ZlcmZsb3dzTGVmdCkgfHxcbiAgICAgICAgKGlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnZW5kJyAmJiBvdmVyZmxvd3NSaWdodCkgfHxcbiAgICAgICAgKCFpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ3N0YXJ0JyAmJiBvdmVyZmxvd3NUb3ApIHx8XG4gICAgICAgICghaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdlbmQnICYmIG92ZXJmbG93c0JvdHRvbSkpO1xuXG4gICAgLy8gZmxpcHMgdmFyaWF0aW9uIGlmIHBvcHBlciBjb250ZW50IG92ZXJmbG93cyBib3VuZGFyaWVzXG4gICAgY29uc3QgZmxpcHBlZFZhcmlhdGlvbkJ5Q29udGVudCA9XG4gICAgICAhIW9wdGlvbnMuZmxpcFZhcmlhdGlvbnNCeUNvbnRlbnQgJiZcbiAgICAgICgoaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdzdGFydCcgJiYgb3ZlcmZsb3dzUmlnaHQpIHx8XG4gICAgICAgIChpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ2VuZCcgJiYgb3ZlcmZsb3dzTGVmdCkgfHxcbiAgICAgICAgKCFpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ3N0YXJ0JyAmJiBvdmVyZmxvd3NCb3R0b20pIHx8XG4gICAgICAgICghaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdlbmQnICYmIG92ZXJmbG93c1RvcCkpO1xuXG4gICAgY29uc3QgZmxpcHBlZFZhcmlhdGlvbiA9IGZsaXBwZWRWYXJpYXRpb25CeVJlZiB8fCBmbGlwcGVkVmFyaWF0aW9uQnlDb250ZW50O1xuXG4gICAgaWYgKG92ZXJsYXBzUmVmIHx8IG92ZXJmbG93c0JvdW5kYXJpZXMgfHwgZmxpcHBlZFZhcmlhdGlvbikge1xuICAgICAgLy8gdGhpcyBib29sZWFuIHRvIGRldGVjdCBhbnkgZmxpcCBsb29wXG4gICAgICBkYXRhLmZsaXBwZWQgPSB0cnVlO1xuXG4gICAgICBpZiAob3ZlcmxhcHNSZWYgfHwgb3ZlcmZsb3dzQm91bmRhcmllcykge1xuICAgICAgICBwbGFjZW1lbnQgPSBmbGlwT3JkZXJbaW5kZXggKyAxXTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZsaXBwZWRWYXJpYXRpb24pIHtcbiAgICAgICAgdmFyaWF0aW9uID0gZ2V0T3Bwb3NpdGVWYXJpYXRpb24odmFyaWF0aW9uKTtcbiAgICAgIH1cblxuICAgICAgZGF0YS5wbGFjZW1lbnQgPSBwbGFjZW1lbnQgKyAodmFyaWF0aW9uID8gJy0nICsgdmFyaWF0aW9uIDogJycpO1xuXG4gICAgICAvLyB0aGlzIG9iamVjdCBjb250YWlucyBgcG9zaXRpb25gLCB3ZSB3YW50IHRvIHByZXNlcnZlIGl0IGFsb25nIHdpdGhcbiAgICAgIC8vIGFueSBhZGRpdGlvbmFsIHByb3BlcnR5IHdlIG1heSBhZGQgaW4gdGhlIGZ1dHVyZVxuICAgICAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IHtcbiAgICAgICAgLi4uZGF0YS5vZmZzZXRzLnBvcHBlcixcbiAgICAgICAgLi4uZ2V0UG9wcGVyT2Zmc2V0cyhcbiAgICAgICAgICBkYXRhLmluc3RhbmNlLnBvcHBlcixcbiAgICAgICAgICBkYXRhLm9mZnNldHMucmVmZXJlbmNlLFxuICAgICAgICAgIGRhdGEucGxhY2VtZW50XG4gICAgICAgICksXG4gICAgICB9O1xuXG4gICAgICBkYXRhID0gcnVuTW9kaWZpZXJzKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCBkYXRhLCAnZmxpcCcpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBkYXRhO1xufVxuIiwiLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGtlZXBUb2dldGhlcihkYXRhKSB7XG4gIGNvbnN0IHsgcG9wcGVyLCByZWZlcmVuY2UgfSA9IGRhdGEub2Zmc2V0cztcbiAgY29uc3QgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgY29uc3QgZmxvb3IgPSBNYXRoLmZsb29yO1xuICBjb25zdCBpc1ZlcnRpY2FsID0gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMTtcbiAgY29uc3Qgc2lkZSA9IGlzVmVydGljYWwgPyAncmlnaHQnIDogJ2JvdHRvbSc7XG4gIGNvbnN0IG9wU2lkZSA9IGlzVmVydGljYWwgPyAnbGVmdCcgOiAndG9wJztcbiAgY29uc3QgbWVhc3VyZW1lbnQgPSBpc1ZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuXG4gIGlmIChwb3BwZXJbc2lkZV0gPCBmbG9vcihyZWZlcmVuY2Vbb3BTaWRlXSkpIHtcbiAgICBkYXRhLm9mZnNldHMucG9wcGVyW29wU2lkZV0gPVxuICAgICAgZmxvb3IocmVmZXJlbmNlW29wU2lkZV0pIC0gcG9wcGVyW21lYXN1cmVtZW50XTtcbiAgfVxuICBpZiAocG9wcGVyW29wU2lkZV0gPiBmbG9vcihyZWZlcmVuY2Vbc2lkZV0pKSB7XG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlcltvcFNpZGVdID0gZmxvb3IocmVmZXJlbmNlW3NpZGVdKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuIiwiaW1wb3J0IGlzTnVtZXJpYyBmcm9tICcuLi91dGlscy9pc051bWVyaWMnO1xuaW1wb3J0IGdldENsaWVudFJlY3QgZnJvbSAnLi4vdXRpbHMvZ2V0Q2xpZW50UmVjdCc7XG5pbXBvcnQgZmluZCBmcm9tICcuLi91dGlscy9maW5kJztcblxuLyoqXG4gKiBDb252ZXJ0cyBhIHN0cmluZyBjb250YWluaW5nIHZhbHVlICsgdW5pdCBpbnRvIGEgcHggdmFsdWUgbnVtYmVyXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiB7bW9kaWZpZXJzfm9mZnNldH1cbiAqIEBwcml2YXRlXG4gKiBAYXJndW1lbnQge1N0cmluZ30gc3RyIC0gVmFsdWUgKyB1bml0IHN0cmluZ1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IG1lYXN1cmVtZW50IC0gYGhlaWdodGAgb3IgYHdpZHRoYFxuICogQGFyZ3VtZW50IHtPYmplY3R9IHBvcHBlck9mZnNldHNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSByZWZlcmVuY2VPZmZzZXRzXG4gKiBAcmV0dXJucyB7TnVtYmVyfFN0cmluZ31cbiAqIFZhbHVlIGluIHBpeGVscywgb3Igb3JpZ2luYWwgc3RyaW5nIGlmIG5vIHZhbHVlcyB3ZXJlIGV4dHJhY3RlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9WYWx1ZShzdHIsIG1lYXN1cmVtZW50LCBwb3BwZXJPZmZzZXRzLCByZWZlcmVuY2VPZmZzZXRzKSB7XG4gIC8vIHNlcGFyYXRlIHZhbHVlIGZyb20gdW5pdFxuICBjb25zdCBzcGxpdCA9IHN0ci5tYXRjaCgvKCg/OlxcLXxcXCspP1xcZCpcXC4/XFxkKikoLiopLyk7XG4gIGNvbnN0IHZhbHVlID0gK3NwbGl0WzFdO1xuICBjb25zdCB1bml0ID0gc3BsaXRbMl07XG5cbiAgLy8gSWYgaXQncyBub3QgYSBudW1iZXIgaXQncyBhbiBvcGVyYXRvciwgSSBndWVzc1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIGlmICh1bml0LmluZGV4T2YoJyUnKSA9PT0gMCkge1xuICAgIGxldCBlbGVtZW50O1xuICAgIHN3aXRjaCAodW5pdCkge1xuICAgICAgY2FzZSAnJXAnOlxuICAgICAgICBlbGVtZW50ID0gcG9wcGVyT2Zmc2V0cztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICclJzpcbiAgICAgIGNhc2UgJyVyJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGVsZW1lbnQgPSByZWZlcmVuY2VPZmZzZXRzO1xuICAgIH1cblxuICAgIGNvbnN0IHJlY3QgPSBnZXRDbGllbnRSZWN0KGVsZW1lbnQpO1xuICAgIHJldHVybiByZWN0W21lYXN1cmVtZW50XSAvIDEwMCAqIHZhbHVlO1xuICB9IGVsc2UgaWYgKHVuaXQgPT09ICd2aCcgfHwgdW5pdCA9PT0gJ3Z3Jykge1xuICAgIC8vIGlmIGlzIGEgdmggb3IgdncsIHdlIGNhbGN1bGF0ZSB0aGUgc2l6ZSBiYXNlZCBvbiB0aGUgdmlld3BvcnRcbiAgICBsZXQgc2l6ZTtcbiAgICBpZiAodW5pdCA9PT0gJ3ZoJykge1xuICAgICAgc2l6ZSA9IE1hdGgubWF4KFxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2l6ZSA9IE1hdGgubWF4KFxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgICAgIHdpbmRvdy5pbm5lcldpZHRoIHx8IDBcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBzaXplIC8gMTAwICogdmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgLy8gaWYgaXMgYW4gZXhwbGljaXQgcGl4ZWwgdW5pdCwgd2UgZ2V0IHJpZCBvZiB0aGUgdW5pdCBhbmQga2VlcCB0aGUgdmFsdWVcbiAgICAvLyBpZiBpcyBhbiBpbXBsaWNpdCB1bml0LCBpdCdzIHB4LCBhbmQgd2UgcmV0dXJuIGp1c3QgdGhlIHZhbHVlXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59XG5cbi8qKlxuICogUGFyc2UgYW4gYG9mZnNldGAgc3RyaW5nIHRvIGV4dHJhcG9sYXRlIGB4YCBhbmQgYHlgIG51bWVyaWMgb2Zmc2V0cy5cbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIHttb2RpZmllcnN+b2Zmc2V0fVxuICogQHByaXZhdGVcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBvZmZzZXRcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBwb3BwZXJPZmZzZXRzXG4gKiBAYXJndW1lbnQge09iamVjdH0gcmVmZXJlbmNlT2Zmc2V0c1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IGJhc2VQbGFjZW1lbnRcbiAqIEByZXR1cm5zIHtBcnJheX0gYSB0d28gY2VsbHMgYXJyYXkgd2l0aCB4IGFuZCB5IG9mZnNldHMgaW4gbnVtYmVyc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VPZmZzZXQoXG4gIG9mZnNldCxcbiAgcG9wcGVyT2Zmc2V0cyxcbiAgcmVmZXJlbmNlT2Zmc2V0cyxcbiAgYmFzZVBsYWNlbWVudFxuKSB7XG4gIGNvbnN0IG9mZnNldHMgPSBbMCwgMF07XG5cbiAgLy8gVXNlIGhlaWdodCBpZiBwbGFjZW1lbnQgaXMgbGVmdCBvciByaWdodCBhbmQgaW5kZXggaXMgMCBvdGhlcndpc2UgdXNlIHdpZHRoXG4gIC8vIGluIHRoaXMgd2F5IHRoZSBmaXJzdCBvZmZzZXQgd2lsbCB1c2UgYW4gYXhpcyBhbmQgdGhlIHNlY29uZCBvbmVcbiAgLy8gd2lsbCB1c2UgdGhlIG90aGVyIG9uZVxuICBjb25zdCB1c2VIZWlnaHQgPSBbJ3JpZ2h0JywgJ2xlZnQnXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpICE9PSAtMTtcblxuICAvLyBTcGxpdCB0aGUgb2Zmc2V0IHN0cmluZyB0byBvYnRhaW4gYSBsaXN0IG9mIHZhbHVlcyBhbmQgb3BlcmFuZHNcbiAgLy8gVGhlIHJlZ2V4IGFkZHJlc3NlcyB2YWx1ZXMgd2l0aCB0aGUgcGx1cyBvciBtaW51cyBzaWduIGluIGZyb250ICgrMTAsIC0yMCwgZXRjKVxuICBjb25zdCBmcmFnbWVudHMgPSBvZmZzZXQuc3BsaXQoLyhcXCt8XFwtKS8pLm1hcChmcmFnID0+IGZyYWcudHJpbSgpKTtcblxuICAvLyBEZXRlY3QgaWYgdGhlIG9mZnNldCBzdHJpbmcgY29udGFpbnMgYSBwYWlyIG9mIHZhbHVlcyBvciBhIHNpbmdsZSBvbmVcbiAgLy8gdGhleSBjb3VsZCBiZSBzZXBhcmF0ZWQgYnkgY29tbWEgb3Igc3BhY2VcbiAgY29uc3QgZGl2aWRlciA9IGZyYWdtZW50cy5pbmRleE9mKFxuICAgIGZpbmQoZnJhZ21lbnRzLCBmcmFnID0+IGZyYWcuc2VhcmNoKC8sfFxccy8pICE9PSAtMSlcbiAgKTtcblxuICBpZiAoZnJhZ21lbnRzW2RpdmlkZXJdICYmIGZyYWdtZW50c1tkaXZpZGVyXS5pbmRleE9mKCcsJykgPT09IC0xKSB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgJ09mZnNldHMgc2VwYXJhdGVkIGJ5IHdoaXRlIHNwYWNlKHMpIGFyZSBkZXByZWNhdGVkLCB1c2UgYSBjb21tYSAoLCkgaW5zdGVhZC4nXG4gICAgKTtcbiAgfVxuXG4gIC8vIElmIGRpdmlkZXIgaXMgZm91bmQsIHdlIGRpdmlkZSB0aGUgbGlzdCBvZiB2YWx1ZXMgYW5kIG9wZXJhbmRzIHRvIGRpdmlkZVxuICAvLyB0aGVtIGJ5IG9mc2V0IFggYW5kIFkuXG4gIGNvbnN0IHNwbGl0UmVnZXggPSAvXFxzKixcXHMqfFxccysvO1xuICBsZXQgb3BzID0gZGl2aWRlciAhPT0gLTFcbiAgICA/IFtcbiAgICAgICAgZnJhZ21lbnRzXG4gICAgICAgICAgLnNsaWNlKDAsIGRpdmlkZXIpXG4gICAgICAgICAgLmNvbmNhdChbZnJhZ21lbnRzW2RpdmlkZXJdLnNwbGl0KHNwbGl0UmVnZXgpWzBdXSksXG4gICAgICAgIFtmcmFnbWVudHNbZGl2aWRlcl0uc3BsaXQoc3BsaXRSZWdleClbMV1dLmNvbmNhdChcbiAgICAgICAgICBmcmFnbWVudHMuc2xpY2UoZGl2aWRlciArIDEpXG4gICAgICAgICksXG4gICAgICBdXG4gICAgOiBbZnJhZ21lbnRzXTtcblxuICAvLyBDb252ZXJ0IHRoZSB2YWx1ZXMgd2l0aCB1bml0cyB0byBhYnNvbHV0ZSBwaXhlbHMgdG8gYWxsb3cgb3VyIGNvbXB1dGF0aW9uc1xuICBvcHMgPSBvcHMubWFwKChvcCwgaW5kZXgpID0+IHtcbiAgICAvLyBNb3N0IG9mIHRoZSB1bml0cyByZWx5IG9uIHRoZSBvcmllbnRhdGlvbiBvZiB0aGUgcG9wcGVyXG4gICAgY29uc3QgbWVhc3VyZW1lbnQgPSAoaW5kZXggPT09IDEgPyAhdXNlSGVpZ2h0IDogdXNlSGVpZ2h0KVxuICAgICAgPyAnaGVpZ2h0J1xuICAgICAgOiAnd2lkdGgnO1xuICAgIGxldCBtZXJnZVdpdGhQcmV2aW91cyA9IGZhbHNlO1xuICAgIHJldHVybiAoXG4gICAgICBvcFxuICAgICAgICAvLyBUaGlzIGFnZ3JlZ2F0ZXMgYW55IGArYCBvciBgLWAgc2lnbiB0aGF0IGFyZW4ndCBjb25zaWRlcmVkIG9wZXJhdG9yc1xuICAgICAgICAvLyBlLmcuOiAxMCArICs1ID0+IFsxMCwgKywgKzVdXG4gICAgICAgIC5yZWR1Y2UoKGEsIGIpID0+IHtcbiAgICAgICAgICBpZiAoYVthLmxlbmd0aCAtIDFdID09PSAnJyAmJiBbJysnLCAnLSddLmluZGV4T2YoYikgIT09IC0xKSB7XG4gICAgICAgICAgICBhW2EubGVuZ3RoIC0gMV0gPSBiO1xuICAgICAgICAgICAgbWVyZ2VXaXRoUHJldmlvdXMgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgICAgfSBlbHNlIGlmIChtZXJnZVdpdGhQcmV2aW91cykge1xuICAgICAgICAgICAgYVthLmxlbmd0aCAtIDFdICs9IGI7XG4gICAgICAgICAgICBtZXJnZVdpdGhQcmV2aW91cyA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBhLmNvbmNhdChiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIFtdKVxuICAgICAgICAvLyBIZXJlIHdlIGNvbnZlcnQgdGhlIHN0cmluZyB2YWx1ZXMgaW50byBudW1iZXIgdmFsdWVzIChpbiBweClcbiAgICAgICAgLm1hcChzdHIgPT4gdG9WYWx1ZShzdHIsIG1lYXN1cmVtZW50LCBwb3BwZXJPZmZzZXRzLCByZWZlcmVuY2VPZmZzZXRzKSlcbiAgICApO1xuICB9KTtcblxuICAvLyBMb29wIHRyb3VnaCB0aGUgb2Zmc2V0cyBhcnJheXMgYW5kIGV4ZWN1dGUgdGhlIG9wZXJhdGlvbnNcbiAgb3BzLmZvckVhY2goKG9wLCBpbmRleCkgPT4ge1xuICAgIG9wLmZvckVhY2goKGZyYWcsIGluZGV4MikgPT4ge1xuICAgICAgaWYgKGlzTnVtZXJpYyhmcmFnKSkge1xuICAgICAgICBvZmZzZXRzW2luZGV4XSArPSBmcmFnICogKG9wW2luZGV4MiAtIDFdID09PSAnLScgPyAtMSA6IDEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIG9mZnNldHM7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQGFyZ3VtZW50IHtOdW1iZXJ8U3RyaW5nfSBvcHRpb25zLm9mZnNldD0wXG4gKiBUaGUgb2Zmc2V0IHZhbHVlIGFzIGRlc2NyaWJlZCBpbiB0aGUgbW9kaWZpZXIgZGVzY3JpcHRpb25cbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb2Zmc2V0KGRhdGEsIHsgb2Zmc2V0IH0pIHtcbiAgY29uc3QgeyBwbGFjZW1lbnQsIG9mZnNldHM6IHsgcG9wcGVyLCByZWZlcmVuY2UgfSB9ID0gZGF0YTtcbiAgY29uc3QgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuXG4gIGxldCBvZmZzZXRzO1xuICBpZiAoaXNOdW1lcmljKCtvZmZzZXQpKSB7XG4gICAgb2Zmc2V0cyA9IFsrb2Zmc2V0LCAwXTtcbiAgfSBlbHNlIHtcbiAgICBvZmZzZXRzID0gcGFyc2VPZmZzZXQob2Zmc2V0LCBwb3BwZXIsIHJlZmVyZW5jZSwgYmFzZVBsYWNlbWVudCk7XG4gIH1cblxuICBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ2xlZnQnKSB7XG4gICAgcG9wcGVyLnRvcCArPSBvZmZzZXRzWzBdO1xuICAgIHBvcHBlci5sZWZ0IC09IG9mZnNldHNbMV07XG4gIH0gZWxzZSBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ3JpZ2h0Jykge1xuICAgIHBvcHBlci50b3AgKz0gb2Zmc2V0c1swXTtcbiAgICBwb3BwZXIubGVmdCArPSBvZmZzZXRzWzFdO1xuICB9IGVsc2UgaWYgKGJhc2VQbGFjZW1lbnQgPT09ICd0b3AnKSB7XG4gICAgcG9wcGVyLmxlZnQgKz0gb2Zmc2V0c1swXTtcbiAgICBwb3BwZXIudG9wIC09IG9mZnNldHNbMV07XG4gIH0gZWxzZSBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ2JvdHRvbScpIHtcbiAgICBwb3BwZXIubGVmdCArPSBvZmZzZXRzWzBdO1xuICAgIHBvcHBlci50b3AgKz0gb2Zmc2V0c1sxXTtcbiAgfVxuXG4gIGRhdGEucG9wcGVyID0gcG9wcGVyO1xuICByZXR1cm4gZGF0YTtcbn1cbiIsImltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSAnLi4vdXRpbHMvZ2V0T2Zmc2V0UGFyZW50JztcbmltcG9ydCBnZXRCb3VuZGFyaWVzIGZyb20gJy4uL3V0aWxzL2dldEJvdW5kYXJpZXMnO1xuaW1wb3J0IGdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSBmcm9tICcuLi91dGlscy9nZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUnO1xuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmV2ZW50T3ZlcmZsb3coZGF0YSwgb3B0aW9ucykge1xuICBsZXQgYm91bmRhcmllc0VsZW1lbnQgPVxuICAgIG9wdGlvbnMuYm91bmRhcmllc0VsZW1lbnQgfHwgZ2V0T2Zmc2V0UGFyZW50KGRhdGEuaW5zdGFuY2UucG9wcGVyKTtcblxuICAvLyBJZiBvZmZzZXRQYXJlbnQgaXMgdGhlIHJlZmVyZW5jZSBlbGVtZW50LCB3ZSByZWFsbHkgd2FudCB0b1xuICAvLyBnbyBvbmUgc3RlcCB1cCBhbmQgdXNlIHRoZSBuZXh0IG9mZnNldFBhcmVudCBhcyByZWZlcmVuY2UgdG9cbiAgLy8gYXZvaWQgdG8gbWFrZSB0aGlzIG1vZGlmaWVyIGNvbXBsZXRlbHkgdXNlbGVzcyBhbmQgbG9vayBsaWtlIGJyb2tlblxuICBpZiAoZGF0YS5pbnN0YW5jZS5yZWZlcmVuY2UgPT09IGJvdW5kYXJpZXNFbGVtZW50KSB7XG4gICAgYm91bmRhcmllc0VsZW1lbnQgPSBnZXRPZmZzZXRQYXJlbnQoYm91bmRhcmllc0VsZW1lbnQpO1xuICB9XG5cbiAgLy8gTk9URTogRE9NIGFjY2VzcyBoZXJlXG4gIC8vIHJlc2V0cyB0aGUgcG9wcGVyJ3MgcG9zaXRpb24gc28gdGhhdCB0aGUgZG9jdW1lbnQgc2l6ZSBjYW4gYmUgY2FsY3VsYXRlZCBleGNsdWRpbmdcbiAgLy8gdGhlIHNpemUgb2YgdGhlIHBvcHBlciBlbGVtZW50IGl0c2VsZlxuICBjb25zdCB0cmFuc2Zvcm1Qcm9wID0gZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKCd0cmFuc2Zvcm0nKTtcbiAgY29uc3QgcG9wcGVyU3R5bGVzID0gZGF0YS5pbnN0YW5jZS5wb3BwZXIuc3R5bGU7IC8vIGFzc2lnbm1lbnQgdG8gaGVscCBtaW5pZmljYXRpb25cbiAgY29uc3QgeyB0b3AsIGxlZnQsIFt0cmFuc2Zvcm1Qcm9wXTogdHJhbnNmb3JtIH0gPSBwb3BwZXJTdHlsZXM7XG4gIHBvcHBlclN0eWxlcy50b3AgPSAnJztcbiAgcG9wcGVyU3R5bGVzLmxlZnQgPSAnJztcbiAgcG9wcGVyU3R5bGVzW3RyYW5zZm9ybVByb3BdID0gJyc7XG5cbiAgY29uc3QgYm91bmRhcmllcyA9IGdldEJvdW5kYXJpZXMoXG4gICAgZGF0YS5pbnN0YW5jZS5wb3BwZXIsXG4gICAgZGF0YS5pbnN0YW5jZS5yZWZlcmVuY2UsXG4gICAgb3B0aW9ucy5wYWRkaW5nLFxuICAgIGJvdW5kYXJpZXNFbGVtZW50LFxuICAgIGRhdGEucG9zaXRpb25GaXhlZFxuICApO1xuXG4gIC8vIE5PVEU6IERPTSBhY2Nlc3MgaGVyZVxuICAvLyByZXN0b3JlcyB0aGUgb3JpZ2luYWwgc3R5bGUgcHJvcGVydGllcyBhZnRlciB0aGUgb2Zmc2V0cyBoYXZlIGJlZW4gY29tcHV0ZWRcbiAgcG9wcGVyU3R5bGVzLnRvcCA9IHRvcDtcbiAgcG9wcGVyU3R5bGVzLmxlZnQgPSBsZWZ0O1xuICBwb3BwZXJTdHlsZXNbdHJhbnNmb3JtUHJvcF0gPSB0cmFuc2Zvcm07XG5cbiAgb3B0aW9ucy5ib3VuZGFyaWVzID0gYm91bmRhcmllcztcblxuICBjb25zdCBvcmRlciA9IG9wdGlvbnMucHJpb3JpdHk7XG4gIGxldCBwb3BwZXIgPSBkYXRhLm9mZnNldHMucG9wcGVyO1xuXG4gIGNvbnN0IGNoZWNrID0ge1xuICAgIHByaW1hcnkocGxhY2VtZW50KSB7XG4gICAgICBsZXQgdmFsdWUgPSBwb3BwZXJbcGxhY2VtZW50XTtcbiAgICAgIGlmIChcbiAgICAgICAgcG9wcGVyW3BsYWNlbWVudF0gPCBib3VuZGFyaWVzW3BsYWNlbWVudF0gJiZcbiAgICAgICAgIW9wdGlvbnMuZXNjYXBlV2l0aFJlZmVyZW5jZVxuICAgICAgKSB7XG4gICAgICAgIHZhbHVlID0gTWF0aC5tYXgocG9wcGVyW3BsYWNlbWVudF0sIGJvdW5kYXJpZXNbcGxhY2VtZW50XSk7XG4gICAgICB9XG4gICAgICByZXR1cm4geyBbcGxhY2VtZW50XTogdmFsdWUgfTtcbiAgICB9LFxuICAgIHNlY29uZGFyeShwbGFjZW1lbnQpIHtcbiAgICAgIGNvbnN0IG1haW5TaWRlID0gcGxhY2VtZW50ID09PSAncmlnaHQnID8gJ2xlZnQnIDogJ3RvcCc7XG4gICAgICBsZXQgdmFsdWUgPSBwb3BwZXJbbWFpblNpZGVdO1xuICAgICAgaWYgKFxuICAgICAgICBwb3BwZXJbcGxhY2VtZW50XSA+IGJvdW5kYXJpZXNbcGxhY2VtZW50XSAmJlxuICAgICAgICAhb3B0aW9ucy5lc2NhcGVXaXRoUmVmZXJlbmNlXG4gICAgICApIHtcbiAgICAgICAgdmFsdWUgPSBNYXRoLm1pbihcbiAgICAgICAgICBwb3BwZXJbbWFpblNpZGVdLFxuICAgICAgICAgIGJvdW5kYXJpZXNbcGxhY2VtZW50XSAtXG4gICAgICAgICAgICAocGxhY2VtZW50ID09PSAncmlnaHQnID8gcG9wcGVyLndpZHRoIDogcG9wcGVyLmhlaWdodClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IFttYWluU2lkZV06IHZhbHVlIH07XG4gICAgfSxcbiAgfTtcblxuICBvcmRlci5mb3JFYWNoKHBsYWNlbWVudCA9PiB7XG4gICAgY29uc3Qgc2lkZSA9XG4gICAgICBbJ2xlZnQnLCAndG9wJ10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMSA/ICdwcmltYXJ5JyA6ICdzZWNvbmRhcnknO1xuICAgIHBvcHBlciA9IHsgLi4ucG9wcGVyLCAuLi5jaGVja1tzaWRlXShwbGFjZW1lbnQpIH07XG4gIH0pO1xuXG4gIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBwb3BwZXI7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG4iLCIvKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaGlmdChkYXRhKSB7XG4gIGNvbnN0IHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50O1xuICBjb25zdCBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gIGNvbnN0IHNoaWZ0dmFyaWF0aW9uID0gcGxhY2VtZW50LnNwbGl0KCctJylbMV07XG5cbiAgLy8gaWYgc2hpZnQgc2hpZnR2YXJpYXRpb24gaXMgc3BlY2lmaWVkLCBydW4gdGhlIG1vZGlmaWVyXG4gIGlmIChzaGlmdHZhcmlhdGlvbikge1xuICAgIGNvbnN0IHsgcmVmZXJlbmNlLCBwb3BwZXIgfSA9IGRhdGEub2Zmc2V0cztcbiAgICBjb25zdCBpc1ZlcnRpY2FsID0gWydib3R0b20nLCAndG9wJ10uaW5kZXhPZihiYXNlUGxhY2VtZW50KSAhPT0gLTE7XG4gICAgY29uc3Qgc2lkZSA9IGlzVmVydGljYWwgPyAnbGVmdCcgOiAndG9wJztcbiAgICBjb25zdCBtZWFzdXJlbWVudCA9IGlzVmVydGljYWwgPyAnd2lkdGgnIDogJ2hlaWdodCc7XG5cbiAgICBjb25zdCBzaGlmdE9mZnNldHMgPSB7XG4gICAgICBzdGFydDogeyBbc2lkZV06IHJlZmVyZW5jZVtzaWRlXSB9LFxuICAgICAgZW5kOiB7XG4gICAgICAgIFtzaWRlXTogcmVmZXJlbmNlW3NpZGVdICsgcmVmZXJlbmNlW21lYXN1cmVtZW50XSAtIHBvcHBlclttZWFzdXJlbWVudF0sXG4gICAgICB9LFxuICAgIH07XG5cbiAgICBkYXRhLm9mZnNldHMucG9wcGVyID0geyAuLi5wb3BwZXIsIC4uLnNoaWZ0T2Zmc2V0c1tzaGlmdHZhcmlhdGlvbl0gfTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuIiwiaW1wb3J0IGlzTW9kaWZpZXJSZXF1aXJlZCBmcm9tICcuLi91dGlscy9pc01vZGlmaWVyUmVxdWlyZWQnO1xuaW1wb3J0IGZpbmQgZnJvbSAnLi4vdXRpbHMvZmluZCc7XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoaWRlKGRhdGEpIHtcbiAgaWYgKCFpc01vZGlmaWVyUmVxdWlyZWQoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsICdoaWRlJywgJ3ByZXZlbnRPdmVyZmxvdycpKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBjb25zdCByZWZSZWN0ID0gZGF0YS5vZmZzZXRzLnJlZmVyZW5jZTtcbiAgY29uc3QgYm91bmQgPSBmaW5kKFxuICAgIGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLFxuICAgIG1vZGlmaWVyID0+IG1vZGlmaWVyLm5hbWUgPT09ICdwcmV2ZW50T3ZlcmZsb3cnXG4gICkuYm91bmRhcmllcztcblxuICBpZiAoXG4gICAgcmVmUmVjdC5ib3R0b20gPCBib3VuZC50b3AgfHxcbiAgICByZWZSZWN0LmxlZnQgPiBib3VuZC5yaWdodCB8fFxuICAgIHJlZlJlY3QudG9wID4gYm91bmQuYm90dG9tIHx8XG4gICAgcmVmUmVjdC5yaWdodCA8IGJvdW5kLmxlZnRcbiAgKSB7XG4gICAgLy8gQXZvaWQgdW5uZWNlc3NhcnkgRE9NIGFjY2VzcyBpZiB2aXNpYmlsaXR5IGhhc24ndCBjaGFuZ2VkXG4gICAgaWYgKGRhdGEuaGlkZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgZGF0YS5oaWRlID0gdHJ1ZTtcbiAgICBkYXRhLmF0dHJpYnV0ZXNbJ3gtb3V0LW9mLWJvdW5kYXJpZXMnXSA9ICcnO1xuICB9IGVsc2Uge1xuICAgIC8vIEF2b2lkIHVubmVjZXNzYXJ5IERPTSBhY2Nlc3MgaWYgdmlzaWJpbGl0eSBoYXNuJ3QgY2hhbmdlZFxuICAgIGlmIChkYXRhLmhpZGUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBkYXRhLmhpZGUgPSBmYWxzZTtcbiAgICBkYXRhLmF0dHJpYnV0ZXNbJ3gtb3V0LW9mLWJvdW5kYXJpZXMnXSA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG4iLCJpbXBvcnQgZ2V0Q2xpZW50UmVjdCBmcm9tICcuLi91dGlscy9nZXRDbGllbnRSZWN0JztcbmltcG9ydCBnZXRPcHBvc2l0ZVBsYWNlbWVudCBmcm9tICcuLi91dGlscy9nZXRPcHBvc2l0ZVBsYWNlbWVudCc7XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlubmVyKGRhdGEpIHtcbiAgY29uc3QgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQ7XG4gIGNvbnN0IGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgY29uc3QgeyBwb3BwZXIsIHJlZmVyZW5jZSB9ID0gZGF0YS5vZmZzZXRzO1xuICBjb25zdCBpc0hvcml6ID0gWydsZWZ0JywgJ3JpZ2h0J10uaW5kZXhPZihiYXNlUGxhY2VtZW50KSAhPT0gLTE7XG5cbiAgY29uc3Qgc3VidHJhY3RMZW5ndGggPSBbJ3RvcCcsICdsZWZ0J10uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA9PT0gLTE7XG5cbiAgcG9wcGVyW2lzSG9yaXogPyAnbGVmdCcgOiAndG9wJ10gPVxuICAgIHJlZmVyZW5jZVtiYXNlUGxhY2VtZW50XSAtXG4gICAgKHN1YnRyYWN0TGVuZ3RoID8gcG9wcGVyW2lzSG9yaXogPyAnd2lkdGgnIDogJ2hlaWdodCddIDogMCk7XG5cbiAgZGF0YS5wbGFjZW1lbnQgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICBkYXRhLm9mZnNldHMucG9wcGVyID0gZ2V0Q2xpZW50UmVjdChwb3BwZXIpO1xuXG4gIHJldHVybiBkYXRhO1xufVxuIiwiaW1wb3J0IGFwcGx5U3R5bGUsIHsgYXBwbHlTdHlsZU9uTG9hZCB9IGZyb20gJy4vYXBwbHlTdHlsZSc7XG5pbXBvcnQgY29tcHV0ZVN0eWxlIGZyb20gJy4vY29tcHV0ZVN0eWxlJztcbmltcG9ydCBhcnJvdyBmcm9tICcuL2Fycm93JztcbmltcG9ydCBmbGlwIGZyb20gJy4vZmxpcCc7XG5pbXBvcnQga2VlcFRvZ2V0aGVyIGZyb20gJy4va2VlcFRvZ2V0aGVyJztcbmltcG9ydCBvZmZzZXQgZnJvbSAnLi9vZmZzZXQnO1xuaW1wb3J0IHByZXZlbnRPdmVyZmxvdyBmcm9tICcuL3ByZXZlbnRPdmVyZmxvdyc7XG5pbXBvcnQgc2hpZnQgZnJvbSAnLi9zaGlmdCc7XG5pbXBvcnQgaGlkZSBmcm9tICcuL2hpZGUnO1xuaW1wb3J0IGlubmVyIGZyb20gJy4vaW5uZXInO1xuXG4vKipcbiAqIE1vZGlmaWVyIGZ1bmN0aW9uLCBlYWNoIG1vZGlmaWVyIGNhbiBoYXZlIGEgZnVuY3Rpb24gb2YgdGhpcyB0eXBlIGFzc2lnbmVkXG4gKiB0byBpdHMgYGZuYCBwcm9wZXJ0eS48YnIgLz5cbiAqIFRoZXNlIGZ1bmN0aW9ucyB3aWxsIGJlIGNhbGxlZCBvbiBlYWNoIHVwZGF0ZSwgdGhpcyBtZWFucyB0aGF0IHlvdSBtdXN0XG4gKiBtYWtlIHN1cmUgdGhleSBhcmUgcGVyZm9ybWFudCBlbm91Z2ggdG8gYXZvaWQgcGVyZm9ybWFuY2UgYm90dGxlbmVja3MuXG4gKlxuICogQGZ1bmN0aW9uIE1vZGlmaWVyRm5cbiAqIEBhcmd1bWVudCB7ZGF0YU9iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7ZGF0YU9iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5cbi8qKlxuICogTW9kaWZpZXJzIGFyZSBwbHVnaW5zIHVzZWQgdG8gYWx0ZXIgdGhlIGJlaGF2aW9yIG9mIHlvdXIgcG9wcGVycy48YnIgLz5cbiAqIFBvcHBlci5qcyB1c2VzIGEgc2V0IG9mIDkgbW9kaWZpZXJzIHRvIHByb3ZpZGUgYWxsIHRoZSBiYXNpYyBmdW5jdGlvbmFsaXRpZXNcbiAqIG5lZWRlZCBieSB0aGUgbGlicmFyeS5cbiAqXG4gKiBVc3VhbGx5IHlvdSBkb24ndCB3YW50IHRvIG92ZXJyaWRlIHRoZSBgb3JkZXJgLCBgZm5gIGFuZCBgb25Mb2FkYCBwcm9wcy5cbiAqIEFsbCB0aGUgb3RoZXIgcHJvcGVydGllcyBhcmUgY29uZmlndXJhdGlvbnMgdGhhdCBjb3VsZCBiZSB0d2Vha2VkLlxuICogQG5hbWVzcGFjZSBtb2RpZmllcnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBzaGlmdCB0aGUgcG9wcGVyIG9uIHRoZSBzdGFydCBvciBlbmQgb2YgaXRzIHJlZmVyZW5jZVxuICAgKiBlbGVtZW50LjxiciAvPlxuICAgKiBJdCB3aWxsIHJlYWQgdGhlIHZhcmlhdGlvbiBvZiB0aGUgYHBsYWNlbWVudGAgcHJvcGVydHkuPGJyIC8+XG4gICAqIEl0IGNhbiBiZSBvbmUgZWl0aGVyIGAtZW5kYCBvciBgLXN0YXJ0YC5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIHNoaWZ0OiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTEwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogMTAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogc2hpZnQsXG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBgb2Zmc2V0YCBtb2RpZmllciBjYW4gc2hpZnQgeW91ciBwb3BwZXIgb24gYm90aCBpdHMgYXhpcy5cbiAgICpcbiAgICogSXQgYWNjZXB0cyB0aGUgZm9sbG93aW5nIHVuaXRzOlxuICAgKiAtIGBweGAgb3IgdW5pdC1sZXNzLCBpbnRlcnByZXRlZCBhcyBwaXhlbHNcbiAgICogLSBgJWAgb3IgYCVyYCwgcGVyY2VudGFnZSByZWxhdGl2ZSB0byB0aGUgbGVuZ3RoIG9mIHRoZSByZWZlcmVuY2UgZWxlbWVudFxuICAgKiAtIGAlcGAsIHBlcmNlbnRhZ2UgcmVsYXRpdmUgdG8gdGhlIGxlbmd0aCBvZiB0aGUgcG9wcGVyIGVsZW1lbnRcbiAgICogLSBgdndgLCBDU1Mgdmlld3BvcnQgd2lkdGggdW5pdFxuICAgKiAtIGB2aGAsIENTUyB2aWV3cG9ydCBoZWlnaHQgdW5pdFxuICAgKlxuICAgKiBGb3IgbGVuZ3RoIGlzIGludGVuZGVkIHRoZSBtYWluIGF4aXMgcmVsYXRpdmUgdG8gdGhlIHBsYWNlbWVudCBvZiB0aGUgcG9wcGVyLjxiciAvPlxuICAgKiBUaGlzIG1lYW5zIHRoYXQgaWYgdGhlIHBsYWNlbWVudCBpcyBgdG9wYCBvciBgYm90dG9tYCwgdGhlIGxlbmd0aCB3aWxsIGJlIHRoZVxuICAgKiBgd2lkdGhgLiBJbiBjYXNlIG9mIGBsZWZ0YCBvciBgcmlnaHRgLCBpdCB3aWxsIGJlIHRoZSBgaGVpZ2h0YC5cbiAgICpcbiAgICogWW91IGNhbiBwcm92aWRlIGEgc2luZ2xlIHZhbHVlIChhcyBgTnVtYmVyYCBvciBgU3RyaW5nYCksIG9yIGEgcGFpciBvZiB2YWx1ZXNcbiAgICogYXMgYFN0cmluZ2AgZGl2aWRlZCBieSBhIGNvbW1hIG9yIG9uZSAob3IgbW9yZSkgd2hpdGUgc3BhY2VzLjxiciAvPlxuICAgKiBUaGUgbGF0dGVyIGlzIGEgZGVwcmVjYXRlZCBtZXRob2QgYmVjYXVzZSBpdCBsZWFkcyB0byBjb25mdXNpb24gYW5kIHdpbGwgYmVcbiAgICogcmVtb3ZlZCBpbiB2Mi48YnIgLz5cbiAgICogQWRkaXRpb25hbGx5LCBpdCBhY2NlcHRzIGFkZGl0aW9ucyBhbmQgc3VidHJhY3Rpb25zIGJldHdlZW4gZGlmZmVyZW50IHVuaXRzLlxuICAgKiBOb3RlIHRoYXQgbXVsdGlwbGljYXRpb25zIGFuZCBkaXZpc2lvbnMgYXJlbid0IHN1cHBvcnRlZC5cbiAgICpcbiAgICogVmFsaWQgZXhhbXBsZXMgYXJlOlxuICAgKiBgYGBcbiAgICogMTBcbiAgICogJzEwJSdcbiAgICogJzEwLCAxMCdcbiAgICogJzEwJSwgMTAnXG4gICAqICcxMCArIDEwJSdcbiAgICogJzEwIC0gNXZoICsgMyUnXG4gICAqICctMTBweCArIDV2aCwgNXB4IC0gNiUnXG4gICAqIGBgYFxuICAgKiA+ICoqTkIqKjogSWYgeW91IGRlc2lyZSB0byBhcHBseSBvZmZzZXRzIHRvIHlvdXIgcG9wcGVycyBpbiBhIHdheSB0aGF0IG1heSBtYWtlIHRoZW0gb3ZlcmxhcFxuICAgKiA+IHdpdGggdGhlaXIgcmVmZXJlbmNlIGVsZW1lbnQsIHVuZm9ydHVuYXRlbHksIHlvdSB3aWxsIGhhdmUgdG8gZGlzYWJsZSB0aGUgYGZsaXBgIG1vZGlmaWVyLlxuICAgKiA+IFlvdSBjYW4gcmVhZCBtb3JlIG9uIHRoaXMgYXQgdGhpcyBbaXNzdWVdKGh0dHBzOi8vZ2l0aHViLmNvbS9GZXpWcmFzdGEvcG9wcGVyLmpzL2lzc3Vlcy8zNzMpLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgb2Zmc2V0OiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTIwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogMjAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogb2Zmc2V0LFxuICAgIC8qKiBAcHJvcCB7TnVtYmVyfFN0cmluZ30gb2Zmc2V0PTBcbiAgICAgKiBUaGUgb2Zmc2V0IHZhbHVlIGFzIGRlc2NyaWJlZCBpbiB0aGUgbW9kaWZpZXIgZGVzY3JpcHRpb25cbiAgICAgKi9cbiAgICBvZmZzZXQ6IDAsXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gcHJldmVudCB0aGUgcG9wcGVyIGZyb20gYmVpbmcgcG9zaXRpb25lZCBvdXRzaWRlIHRoZSBib3VuZGFyeS5cbiAgICpcbiAgICogQSBzY2VuYXJpbyBleGlzdHMgd2hlcmUgdGhlIHJlZmVyZW5jZSBpdHNlbGYgaXMgbm90IHdpdGhpbiB0aGUgYm91bmRhcmllcy48YnIgLz5cbiAgICogV2UgY2FuIHNheSBpdCBoYXMgXCJlc2NhcGVkIHRoZSBib3VuZGFyaWVzXCIg4oCUIG9yIGp1c3QgXCJlc2NhcGVkXCIuPGJyIC8+XG4gICAqIEluIHRoaXMgY2FzZSB3ZSBuZWVkIHRvIGRlY2lkZSB3aGV0aGVyIHRoZSBwb3BwZXIgc2hvdWxkIGVpdGhlcjpcbiAgICpcbiAgICogLSBkZXRhY2ggZnJvbSB0aGUgcmVmZXJlbmNlIGFuZCByZW1haW4gXCJ0cmFwcGVkXCIgaW4gdGhlIGJvdW5kYXJpZXMsIG9yXG4gICAqIC0gaWYgaXQgc2hvdWxkIGlnbm9yZSB0aGUgYm91bmRhcnkgYW5kIFwiZXNjYXBlIHdpdGggaXRzIHJlZmVyZW5jZVwiXG4gICAqXG4gICAqIFdoZW4gYGVzY2FwZVdpdGhSZWZlcmVuY2VgIGlzIHNldCB0b2B0cnVlYCBhbmQgcmVmZXJlbmNlIGlzIGNvbXBsZXRlbHlcbiAgICogb3V0c2lkZSBpdHMgYm91bmRhcmllcywgdGhlIHBvcHBlciB3aWxsIG92ZXJmbG93IChvciBjb21wbGV0ZWx5IGxlYXZlKVxuICAgKiB0aGUgYm91bmRhcmllcyBpbiBvcmRlciB0byByZW1haW4gYXR0YWNoZWQgdG8gdGhlIGVkZ2Ugb2YgdGhlIHJlZmVyZW5jZS5cbiAgICpcbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIHByZXZlbnRPdmVyZmxvdzoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj0zMDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDMwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IHByZXZlbnRPdmVyZmxvdyxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7QXJyYXl9IFtwcmlvcml0eT1bJ2xlZnQnLCdyaWdodCcsJ3RvcCcsJ2JvdHRvbSddXVxuICAgICAqIFBvcHBlciB3aWxsIHRyeSB0byBwcmV2ZW50IG92ZXJmbG93IGZvbGxvd2luZyB0aGVzZSBwcmlvcml0aWVzIGJ5IGRlZmF1bHQsXG4gICAgICogdGhlbiwgaXQgY291bGQgb3ZlcmZsb3cgb24gdGhlIGxlZnQgYW5kIG9uIHRvcCBvZiB0aGUgYGJvdW5kYXJpZXNFbGVtZW50YFxuICAgICAqL1xuICAgIHByaW9yaXR5OiBbJ2xlZnQnLCAncmlnaHQnLCAndG9wJywgJ2JvdHRvbSddLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtudW1iZXJ9IHBhZGRpbmc9NVxuICAgICAqIEFtb3VudCBvZiBwaXhlbCB1c2VkIHRvIGRlZmluZSBhIG1pbmltdW0gZGlzdGFuY2UgYmV0d2VlbiB0aGUgYm91bmRhcmllc1xuICAgICAqIGFuZCB0aGUgcG9wcGVyLiBUaGlzIG1ha2VzIHN1cmUgdGhlIHBvcHBlciBhbHdheXMgaGFzIGEgbGl0dGxlIHBhZGRpbmdcbiAgICAgKiBiZXR3ZWVuIHRoZSBlZGdlcyBvZiBpdHMgY29udGFpbmVyXG4gICAgICovXG4gICAgcGFkZGluZzogNSxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7U3RyaW5nfEhUTUxFbGVtZW50fSBib3VuZGFyaWVzRWxlbWVudD0nc2Nyb2xsUGFyZW50J1xuICAgICAqIEJvdW5kYXJpZXMgdXNlZCBieSB0aGUgbW9kaWZpZXIuIENhbiBiZSBgc2Nyb2xsUGFyZW50YCwgYHdpbmRvd2AsXG4gICAgICogYHZpZXdwb3J0YCBvciBhbnkgRE9NIGVsZW1lbnQuXG4gICAgICovXG4gICAgYm91bmRhcmllc0VsZW1lbnQ6ICdzY3JvbGxQYXJlbnQnLFxuICB9LFxuXG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIG1ha2Ugc3VyZSB0aGUgcmVmZXJlbmNlIGFuZCBpdHMgcG9wcGVyIHN0YXkgbmVhciBlYWNoIG90aGVyXG4gICAqIHdpdGhvdXQgbGVhdmluZyBhbnkgZ2FwIGJldHdlZW4gdGhlIHR3by4gRXNwZWNpYWxseSB1c2VmdWwgd2hlbiB0aGUgYXJyb3cgaXNcbiAgICogZW5hYmxlZCBhbmQgeW91IHdhbnQgdG8gZW5zdXJlIHRoYXQgaXQgcG9pbnRzIHRvIGl0cyByZWZlcmVuY2UgZWxlbWVudC5cbiAgICogSXQgY2FyZXMgb25seSBhYm91dCB0aGUgZmlyc3QgYXhpcy4gWW91IGNhbiBzdGlsbCBoYXZlIHBvcHBlcnMgd2l0aCBtYXJnaW5cbiAgICogYmV0d2VlbiB0aGUgcG9wcGVyIGFuZCBpdHMgcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBrZWVwVG9nZXRoZXI6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9NDAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA0MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBrZWVwVG9nZXRoZXIsXG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoaXMgbW9kaWZpZXIgaXMgdXNlZCB0byBtb3ZlIHRoZSBgYXJyb3dFbGVtZW50YCBvZiB0aGUgcG9wcGVyIHRvIG1ha2VcbiAgICogc3VyZSBpdCBpcyBwb3NpdGlvbmVkIGJldHdlZW4gdGhlIHJlZmVyZW5jZSBlbGVtZW50IGFuZCBpdHMgcG9wcGVyIGVsZW1lbnQuXG4gICAqIEl0IHdpbGwgcmVhZCB0aGUgb3V0ZXIgc2l6ZSBvZiB0aGUgYGFycm93RWxlbWVudGAgbm9kZSB0byBkZXRlY3QgaG93IG1hbnlcbiAgICogcGl4ZWxzIG9mIGNvbmp1bmN0aW9uIGFyZSBuZWVkZWQuXG4gICAqXG4gICAqIEl0IGhhcyBubyBlZmZlY3QgaWYgbm8gYGFycm93RWxlbWVudGAgaXMgcHJvdmlkZWQuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBhcnJvdzoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj01MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDUwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGFycm93LFxuICAgIC8qKiBAcHJvcCB7U3RyaW5nfEhUTUxFbGVtZW50fSBlbGVtZW50PSdbeC1hcnJvd10nIC0gU2VsZWN0b3Igb3Igbm9kZSB1c2VkIGFzIGFycm93ICovXG4gICAgZWxlbWVudDogJ1t4LWFycm93XScsXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gZmxpcCB0aGUgcG9wcGVyJ3MgcGxhY2VtZW50IHdoZW4gaXQgc3RhcnRzIHRvIG92ZXJsYXAgaXRzXG4gICAqIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgKlxuICAgKiBSZXF1aXJlcyB0aGUgYHByZXZlbnRPdmVyZmxvd2AgbW9kaWZpZXIgYmVmb3JlIGl0IGluIG9yZGVyIHRvIHdvcmsuXG4gICAqXG4gICAqICoqTk9URToqKiB0aGlzIG1vZGlmaWVyIHdpbGwgaW50ZXJydXB0IHRoZSBjdXJyZW50IHVwZGF0ZSBjeWNsZSBhbmQgd2lsbFxuICAgKiByZXN0YXJ0IGl0IGlmIGl0IGRldGVjdHMgdGhlIG5lZWQgdG8gZmxpcCB0aGUgcGxhY2VtZW50LlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgZmxpcDoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj02MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDYwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGZsaXAsXG4gICAgLyoqXG4gICAgICogQHByb3Age1N0cmluZ3xBcnJheX0gYmVoYXZpb3I9J2ZsaXAnXG4gICAgICogVGhlIGJlaGF2aW9yIHVzZWQgdG8gY2hhbmdlIHRoZSBwb3BwZXIncyBwbGFjZW1lbnQuIEl0IGNhbiBiZSBvbmUgb2ZcbiAgICAgKiBgZmxpcGAsIGBjbG9ja3dpc2VgLCBgY291bnRlcmNsb2Nrd2lzZWAgb3IgYW4gYXJyYXkgd2l0aCBhIGxpc3Qgb2YgdmFsaWRcbiAgICAgKiBwbGFjZW1lbnRzICh3aXRoIG9wdGlvbmFsIHZhcmlhdGlvbnMpXG4gICAgICovXG4gICAgYmVoYXZpb3I6ICdmbGlwJyxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7bnVtYmVyfSBwYWRkaW5nPTVcbiAgICAgKiBUaGUgcG9wcGVyIHdpbGwgZmxpcCBpZiBpdCBoaXRzIHRoZSBlZGdlcyBvZiB0aGUgYGJvdW5kYXJpZXNFbGVtZW50YFxuICAgICAqL1xuICAgIHBhZGRpbmc6IDUsXG4gICAgLyoqXG4gICAgICogQHByb3Age1N0cmluZ3xIVE1MRWxlbWVudH0gYm91bmRhcmllc0VsZW1lbnQ9J3ZpZXdwb3J0J1xuICAgICAqIFRoZSBlbGVtZW50IHdoaWNoIHdpbGwgZGVmaW5lIHRoZSBib3VuZGFyaWVzIG9mIHRoZSBwb3BwZXIgcG9zaXRpb24uXG4gICAgICogVGhlIHBvcHBlciB3aWxsIG5ldmVyIGJlIHBsYWNlZCBvdXRzaWRlIG9mIHRoZSBkZWZpbmVkIGJvdW5kYXJpZXNcbiAgICAgKiAoZXhjZXB0IGlmIGBrZWVwVG9nZXRoZXJgIGlzIGVuYWJsZWQpXG4gICAgICovXG4gICAgYm91bmRhcmllc0VsZW1lbnQ6ICd2aWV3cG9ydCcsXG4gICAgLyoqXG4gICAgICogQHByb3Age0Jvb2xlYW59IGZsaXBWYXJpYXRpb25zPWZhbHNlXG4gICAgICogVGhlIHBvcHBlciB3aWxsIHN3aXRjaCBwbGFjZW1lbnQgdmFyaWF0aW9uIGJldHdlZW4gYC1zdGFydGAgYW5kIGAtZW5kYCB3aGVuXG4gICAgICogdGhlIHJlZmVyZW5jZSBlbGVtZW50IG92ZXJsYXBzIGl0cyBib3VuZGFyaWVzLlxuICAgICAqXG4gICAgICogVGhlIG9yaWdpbmFsIHBsYWNlbWVudCBzaG91bGQgaGF2ZSBhIHNldCB2YXJpYXRpb24uXG4gICAgICovXG4gICAgZmxpcFZhcmlhdGlvbnM6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtCb29sZWFufSBmbGlwVmFyaWF0aW9uc0J5Q29udGVudD1mYWxzZVxuICAgICAqIFRoZSBwb3BwZXIgd2lsbCBzd2l0Y2ggcGxhY2VtZW50IHZhcmlhdGlvbiBiZXR3ZWVuIGAtc3RhcnRgIGFuZCBgLWVuZGAgd2hlblxuICAgICAqIHRoZSBwb3BwZXIgZWxlbWVudCBvdmVybGFwcyBpdHMgcmVmZXJlbmNlIGJvdW5kYXJpZXMuXG4gICAgICpcbiAgICAgKiBUaGUgb3JpZ2luYWwgcGxhY2VtZW50IHNob3VsZCBoYXZlIGEgc2V0IHZhcmlhdGlvbi5cbiAgICAgKi9cbiAgICBmbGlwVmFyaWF0aW9uc0J5Q29udGVudDogZmFsc2UsXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gbWFrZSB0aGUgcG9wcGVyIGZsb3cgdG93YXJkIHRoZSBpbm5lciBvZiB0aGUgcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAqIEJ5IGRlZmF1bHQsIHdoZW4gdGhpcyBtb2RpZmllciBpcyBkaXNhYmxlZCwgdGhlIHBvcHBlciB3aWxsIGJlIHBsYWNlZCBvdXRzaWRlXG4gICAqIHRoZSByZWZlcmVuY2UgZWxlbWVudC5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGlubmVyOiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTcwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogNzAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD1mYWxzZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogZmFsc2UsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBpbm5lcixcbiAgfSxcblxuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBoaWRlIHRoZSBwb3BwZXIgd2hlbiBpdHMgcmVmZXJlbmNlIGVsZW1lbnQgaXMgb3V0c2lkZSBvZiB0aGVcbiAgICogcG9wcGVyIGJvdW5kYXJpZXMuIEl0IHdpbGwgc2V0IGEgYHgtb3V0LW9mLWJvdW5kYXJpZXNgIGF0dHJpYnV0ZSB3aGljaCBjYW5cbiAgICogYmUgdXNlZCB0byBoaWRlIHdpdGggYSBDU1Mgc2VsZWN0b3IgdGhlIHBvcHBlciB3aGVuIGl0cyByZWZlcmVuY2UgaXNcbiAgICogb3V0IG9mIGJvdW5kYXJpZXMuXG4gICAqXG4gICAqIFJlcXVpcmVzIHRoZSBgcHJldmVudE92ZXJmbG93YCBtb2RpZmllciBiZWZvcmUgaXQgaW4gb3JkZXIgdG8gd29yay5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGhpZGU6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9ODAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA4MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBoaWRlLFxuICB9LFxuXG4gIC8qKlxuICAgKiBDb21wdXRlcyB0aGUgc3R5bGUgdGhhdCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlciBlbGVtZW50IHRvIGdldHNcbiAgICogcHJvcGVybHkgcG9zaXRpb25lZC5cbiAgICpcbiAgICogTm90ZSB0aGF0IHRoaXMgbW9kaWZpZXIgd2lsbCBub3QgdG91Y2ggdGhlIERPTSwgaXQganVzdCBwcmVwYXJlcyB0aGUgc3R5bGVzXG4gICAqIHNvIHRoYXQgYGFwcGx5U3R5bGVgIG1vZGlmaWVyIGNhbiBhcHBseSBpdC4gVGhpcyBzZXBhcmF0aW9uIGlzIHVzZWZ1bFxuICAgKiBpbiBjYXNlIHlvdSBuZWVkIHRvIHJlcGxhY2UgYGFwcGx5U3R5bGVgIHdpdGggYSBjdXN0b20gaW1wbGVtZW50YXRpb24uXG4gICAqXG4gICAqIFRoaXMgbW9kaWZpZXIgaGFzIGA4NTBgIGFzIGBvcmRlcmAgdmFsdWUgdG8gbWFpbnRhaW4gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICAgKiB3aXRoIHByZXZpb3VzIHZlcnNpb25zIG9mIFBvcHBlci5qcy4gRXhwZWN0IHRoZSBtb2RpZmllcnMgb3JkZXJpbmcgbWV0aG9kXG4gICAqIHRvIGNoYW5nZSBpbiBmdXR1cmUgbWFqb3IgdmVyc2lvbnMgb2YgdGhlIGxpYnJhcnkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBjb21wdXRlU3R5bGU6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9ODUwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA4NTAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBjb21wdXRlU3R5bGUsXG4gICAgLyoqXG4gICAgICogQHByb3Age0Jvb2xlYW59IGdwdUFjY2VsZXJhdGlvbj10cnVlXG4gICAgICogSWYgdHJ1ZSwgaXQgdXNlcyB0aGUgQ1NTIDNEIHRyYW5zZm9ybWF0aW9uIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXIuXG4gICAgICogT3RoZXJ3aXNlLCBpdCB3aWxsIHVzZSB0aGUgYHRvcGAgYW5kIGBsZWZ0YCBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgZ3B1QWNjZWxlcmF0aW9uOiB0cnVlLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtzdHJpbmd9IFt4PSdib3R0b20nXVxuICAgICAqIFdoZXJlIHRvIGFuY2hvciB0aGUgWCBheGlzIChgYm90dG9tYCBvciBgdG9wYCkuIEFLQSBYIG9mZnNldCBvcmlnaW4uXG4gICAgICogQ2hhbmdlIHRoaXMgaWYgeW91ciBwb3BwZXIgc2hvdWxkIGdyb3cgaW4gYSBkaXJlY3Rpb24gZGlmZmVyZW50IGZyb20gYGJvdHRvbWBcbiAgICAgKi9cbiAgICB4OiAnYm90dG9tJyxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7c3RyaW5nfSBbeD0nbGVmdCddXG4gICAgICogV2hlcmUgdG8gYW5jaG9yIHRoZSBZIGF4aXMgKGBsZWZ0YCBvciBgcmlnaHRgKS4gQUtBIFkgb2Zmc2V0IG9yaWdpbi5cbiAgICAgKiBDaGFuZ2UgdGhpcyBpZiB5b3VyIHBvcHBlciBzaG91bGQgZ3JvdyBpbiBhIGRpcmVjdGlvbiBkaWZmZXJlbnQgZnJvbSBgcmlnaHRgXG4gICAgICovXG4gICAgeTogJ3JpZ2h0JyxcbiAgfSxcblxuICAvKipcbiAgICogQXBwbGllcyB0aGUgY29tcHV0ZWQgc3R5bGVzIHRvIHRoZSBwb3BwZXIgZWxlbWVudC5cbiAgICpcbiAgICogQWxsIHRoZSBET00gbWFuaXB1bGF0aW9ucyBhcmUgbGltaXRlZCB0byB0aGlzIG1vZGlmaWVyLiBUaGlzIGlzIHVzZWZ1bCBpbiBjYXNlXG4gICAqIHlvdSB3YW50IHRvIGludGVncmF0ZSBQb3BwZXIuanMgaW5zaWRlIGEgZnJhbWV3b3JrIG9yIHZpZXcgbGlicmFyeSBhbmQgeW91XG4gICAqIHdhbnQgdG8gZGVsZWdhdGUgYWxsIHRoZSBET00gbWFuaXB1bGF0aW9ucyB0byBpdC5cbiAgICpcbiAgICogTm90ZSB0aGF0IGlmIHlvdSBkaXNhYmxlIHRoaXMgbW9kaWZpZXIsIHlvdSBtdXN0IG1ha2Ugc3VyZSB0aGUgcG9wcGVyIGVsZW1lbnRcbiAgICogaGFzIGl0cyBwb3NpdGlvbiBzZXQgdG8gYGFic29sdXRlYCBiZWZvcmUgUG9wcGVyLmpzIGNhbiBkbyBpdHMgd29yayFcbiAgICpcbiAgICogSnVzdCBkaXNhYmxlIHRoaXMgbW9kaWZpZXIgYW5kIGRlZmluZSB5b3VyIG93biB0byBhY2hpZXZlIHRoZSBkZXNpcmVkIGVmZmVjdC5cbiAgICpcbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGFwcGx5U3R5bGU6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9OTAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA5MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBhcHBseVN0eWxlLFxuICAgIC8qKiBAcHJvcCB7RnVuY3Rpb259ICovXG4gICAgb25Mb2FkOiBhcHBseVN0eWxlT25Mb2FkLFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4xMC4wLCB0aGUgcHJvcGVydHkgbW92ZWQgdG8gYGNvbXB1dGVTdHlsZWAgbW9kaWZpZXJcbiAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gZ3B1QWNjZWxlcmF0aW9uPXRydWVcbiAgICAgKiBJZiB0cnVlLCBpdCB1c2VzIHRoZSBDU1MgM0QgdHJhbnNmb3JtYXRpb24gdG8gcG9zaXRpb24gdGhlIHBvcHBlci5cbiAgICAgKiBPdGhlcndpc2UsIGl0IHdpbGwgdXNlIHRoZSBgdG9wYCBhbmQgYGxlZnRgIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBncHVBY2NlbGVyYXRpb246IHVuZGVmaW5lZCxcbiAgfSxcbn07XG5cbi8qKlxuICogVGhlIGBkYXRhT2JqZWN0YCBpcyBhbiBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIGluZm9ybWF0aW9uIHVzZWQgYnkgUG9wcGVyLmpzLlxuICogVGhpcyBvYmplY3QgaXMgcGFzc2VkIHRvIG1vZGlmaWVycyBhbmQgdG8gdGhlIGBvbkNyZWF0ZWAgYW5kIGBvblVwZGF0ZWAgY2FsbGJhY2tzLlxuICogQG5hbWUgZGF0YU9iamVjdFxuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEuaW5zdGFuY2UgVGhlIFBvcHBlci5qcyBpbnN0YW5jZVxuICogQHByb3BlcnR5IHtTdHJpbmd9IGRhdGEucGxhY2VtZW50IFBsYWNlbWVudCBhcHBsaWVkIHRvIHBvcHBlclxuICogQHByb3BlcnR5IHtTdHJpbmd9IGRhdGEub3JpZ2luYWxQbGFjZW1lbnQgUGxhY2VtZW50IG9yaWdpbmFsbHkgZGVmaW5lZCBvbiBpbml0XG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IGRhdGEuZmxpcHBlZCBUcnVlIGlmIHBvcHBlciBoYXMgYmVlbiBmbGlwcGVkIGJ5IGZsaXAgbW9kaWZpZXJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gZGF0YS5oaWRlIFRydWUgaWYgdGhlIHJlZmVyZW5jZSBlbGVtZW50IGlzIG91dCBvZiBib3VuZGFyaWVzLCB1c2VmdWwgdG8ga25vdyB3aGVuIHRvIGhpZGUgdGhlIHBvcHBlclxuICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gZGF0YS5hcnJvd0VsZW1lbnQgTm9kZSB1c2VkIGFzIGFycm93IGJ5IGFycm93IG1vZGlmaWVyXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5zdHlsZXMgQW55IENTUyBwcm9wZXJ0eSBkZWZpbmVkIGhlcmUgd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIuIEl0IGV4cGVjdHMgdGhlIEphdmFTY3JpcHQgbm9tZW5jbGF0dXJlIChlZy4gYG1hcmdpbkJvdHRvbWApXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5hcnJvd1N0eWxlcyBBbnkgQ1NTIHByb3BlcnR5IGRlZmluZWQgaGVyZSB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlciBhcnJvdy4gSXQgZXhwZWN0cyB0aGUgSmF2YVNjcmlwdCBub21lbmNsYXR1cmUgKGVnLiBgbWFyZ2luQm90dG9tYClcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLmJvdW5kYXJpZXMgT2Zmc2V0cyBvZiB0aGUgcG9wcGVyIGJvdW5kYXJpZXNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLm9mZnNldHMgVGhlIG1lYXN1cmVtZW50cyBvZiBwb3BwZXIsIHJlZmVyZW5jZSBhbmQgYXJyb3cgZWxlbWVudHNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLm9mZnNldHMucG9wcGVyIGB0b3BgLCBgbGVmdGAsIGB3aWR0aGAsIGBoZWlnaHRgIHZhbHVlc1xuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UgYHRvcGAsIGBsZWZ0YCwgYHdpZHRoYCwgYGhlaWdodGAgdmFsdWVzXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5vZmZzZXRzLmFycm93XSBgdG9wYCBhbmQgYGxlZnRgIG9mZnNldHMsIG9ubHkgb25lIG9mIHRoZW0gd2lsbCBiZSBkaWZmZXJlbnQgZnJvbSAwXG4gKi9cbiIsImltcG9ydCBtb2RpZmllcnMgZnJvbSAnLi4vbW9kaWZpZXJzL2luZGV4JztcblxuLyoqXG4gKiBEZWZhdWx0IG9wdGlvbnMgcHJvdmlkZWQgdG8gUG9wcGVyLmpzIGNvbnN0cnVjdG9yLjxiciAvPlxuICogVGhlc2UgY2FuIGJlIG92ZXJyaWRkZW4gdXNpbmcgdGhlIGBvcHRpb25zYCBhcmd1bWVudCBvZiBQb3BwZXIuanMuPGJyIC8+XG4gKiBUbyBvdmVycmlkZSBhbiBvcHRpb24sIHNpbXBseSBwYXNzIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lXG4gKiBzdHJ1Y3R1cmUgb2YgdGhlIGBvcHRpb25zYCBvYmplY3QsIGFzIHRoZSAzcmQgYXJndW1lbnQuIEZvciBleGFtcGxlOlxuICogYGBgXG4gKiBuZXcgUG9wcGVyKHJlZiwgcG9wLCB7XG4gKiAgIG1vZGlmaWVyczoge1xuICogICAgIHByZXZlbnRPdmVyZmxvdzogeyBlbmFibGVkOiBmYWxzZSB9XG4gKiAgIH1cbiAqIH0pXG4gKiBgYGBcbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLyoqXG4gICAqIFBvcHBlcidzIHBsYWNlbWVudC5cbiAgICogQHByb3Age1BvcHBlci5wbGFjZW1lbnRzfSBwbGFjZW1lbnQ9J2JvdHRvbSdcbiAgICovXG4gIHBsYWNlbWVudDogJ2JvdHRvbScsXG5cbiAgLyoqXG4gICAqIFNldCB0aGlzIHRvIHRydWUgaWYgeW91IHdhbnQgcG9wcGVyIHRvIHBvc2l0aW9uIGl0IHNlbGYgaW4gJ2ZpeGVkJyBtb2RlXG4gICAqIEBwcm9wIHtCb29sZWFufSBwb3NpdGlvbkZpeGVkPWZhbHNlXG4gICAqL1xuICBwb3NpdGlvbkZpeGVkOiBmYWxzZSxcblxuICAvKipcbiAgICogV2hldGhlciBldmVudHMgKHJlc2l6ZSwgc2Nyb2xsKSBhcmUgaW5pdGlhbGx5IGVuYWJsZWQuXG4gICAqIEBwcm9wIHtCb29sZWFufSBldmVudHNFbmFibGVkPXRydWVcbiAgICovXG4gIGV2ZW50c0VuYWJsZWQ6IHRydWUsXG5cbiAgLyoqXG4gICAqIFNldCB0byB0cnVlIGlmIHlvdSB3YW50IHRvIGF1dG9tYXRpY2FsbHkgcmVtb3ZlIHRoZSBwb3BwZXIgd2hlblxuICAgKiB5b3UgY2FsbCB0aGUgYGRlc3Ryb3lgIG1ldGhvZC5cbiAgICogQHByb3Age0Jvb2xlYW59IHJlbW92ZU9uRGVzdHJveT1mYWxzZVxuICAgKi9cbiAgcmVtb3ZlT25EZXN0cm95OiBmYWxzZSxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIHBvcHBlciBpcyBjcmVhdGVkLjxiciAvPlxuICAgKiBCeSBkZWZhdWx0LCBpdCBpcyBzZXQgdG8gbm8tb3AuPGJyIC8+XG4gICAqIEFjY2VzcyBQb3BwZXIuanMgaW5zdGFuY2Ugd2l0aCBgZGF0YS5pbnN0YW5jZWAuXG4gICAqIEBwcm9wIHtvbkNyZWF0ZX1cbiAgICovXG4gIG9uQ3JlYXRlOiAoKSA9PiB7fSxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIHBvcHBlciBpcyB1cGRhdGVkLiBUaGlzIGNhbGxiYWNrIGlzIG5vdCBjYWxsZWRcbiAgICogb24gdGhlIGluaXRpYWxpemF0aW9uL2NyZWF0aW9uIG9mIHRoZSBwb3BwZXIsIGJ1dCBvbmx5IG9uIHN1YnNlcXVlbnRcbiAgICogdXBkYXRlcy48YnIgLz5cbiAgICogQnkgZGVmYXVsdCwgaXQgaXMgc2V0IHRvIG5vLW9wLjxiciAvPlxuICAgKiBBY2Nlc3MgUG9wcGVyLmpzIGluc3RhbmNlIHdpdGggYGRhdGEuaW5zdGFuY2VgLlxuICAgKiBAcHJvcCB7b25VcGRhdGV9XG4gICAqL1xuICBvblVwZGF0ZTogKCkgPT4ge30sXG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgbW9kaWZpZXJzIHVzZWQgdG8gbW9kaWZ5IHRoZSBvZmZzZXRzIGJlZm9yZSB0aGV5IGFyZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIuXG4gICAqIFRoZXkgcHJvdmlkZSBtb3N0IG9mIHRoZSBmdW5jdGlvbmFsaXRpZXMgb2YgUG9wcGVyLmpzLlxuICAgKiBAcHJvcCB7bW9kaWZpZXJzfVxuICAgKi9cbiAgbW9kaWZpZXJzLFxufTtcblxuLyoqXG4gKiBAY2FsbGJhY2sgb25DcmVhdGVcbiAqIEBwYXJhbSB7ZGF0YU9iamVjdH0gZGF0YVxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIG9uVXBkYXRlXG4gKiBAcGFyYW0ge2RhdGFPYmplY3R9IGRhdGFcbiAqL1xuIiwiLy8gVXRpbHNcbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuL3V0aWxzL2RlYm91bmNlJztcbmltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4vdXRpbHMvaXNGdW5jdGlvbic7XG5cbi8vIE1ldGhvZHNcbmltcG9ydCB1cGRhdGUgZnJvbSAnLi9tZXRob2RzL3VwZGF0ZSc7XG5pbXBvcnQgZGVzdHJveSBmcm9tICcuL21ldGhvZHMvZGVzdHJveSc7XG5pbXBvcnQgZW5hYmxlRXZlbnRMaXN0ZW5lcnMgZnJvbSAnLi9tZXRob2RzL2VuYWJsZUV2ZW50TGlzdGVuZXJzJztcbmltcG9ydCBkaXNhYmxlRXZlbnRMaXN0ZW5lcnMgZnJvbSAnLi9tZXRob2RzL2Rpc2FibGVFdmVudExpc3RlbmVycyc7XG5pbXBvcnQgRGVmYXVsdHMgZnJvbSAnLi9tZXRob2RzL2RlZmF1bHRzJztcbmltcG9ydCBwbGFjZW1lbnRzIGZyb20gJy4vbWV0aG9kcy9wbGFjZW1lbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wcGVyIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgUG9wcGVyLmpzIGluc3RhbmNlLlxuICAgKiBAY2xhc3MgUG9wcGVyXG4gICAqIEBwYXJhbSB7RWxlbWVudHxyZWZlcmVuY2VPYmplY3R9IHJlZmVyZW5jZSAtIFRoZSByZWZlcmVuY2UgZWxlbWVudCB1c2VkIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXJcbiAgICogQHBhcmFtIHtFbGVtZW50fSBwb3BwZXIgLSBUaGUgSFRNTCAvIFhNTCBlbGVtZW50IHVzZWQgYXMgdGhlIHBvcHBlclxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFlvdXIgY3VzdG9tIG9wdGlvbnMgdG8gb3ZlcnJpZGUgdGhlIG9uZXMgZGVmaW5lZCBpbiBbRGVmYXVsdHNdKCNkZWZhdWx0cylcbiAgICogQHJldHVybiB7T2JqZWN0fSBpbnN0YW5jZSAtIFRoZSBnZW5lcmF0ZWQgUG9wcGVyLmpzIGluc3RhbmNlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihyZWZlcmVuY2UsIHBvcHBlciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgLy8gbWFrZSB1cGRhdGUoKSBkZWJvdW5jZWQsIHNvIHRoYXQgaXQgb25seSBydW5zIGF0IG1vc3Qgb25jZS1wZXItdGlja1xuICAgIHRoaXMudXBkYXRlID0gZGVib3VuY2UodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cbiAgICAvLyB3aXRoIHt9IHdlIGNyZWF0ZSBhIG5ldyBvYmplY3Qgd2l0aCB0aGUgb3B0aW9ucyBpbnNpZGUgaXRcbiAgICB0aGlzLm9wdGlvbnMgPSB7IC4uLlBvcHBlci5EZWZhdWx0cywgLi4ub3B0aW9ucyB9O1xuXG4gICAgLy8gaW5pdCBzdGF0ZVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0Rlc3Ryb3llZDogZmFsc2UsXG4gICAgICBpc0NyZWF0ZWQ6IGZhbHNlLFxuICAgICAgc2Nyb2xsUGFyZW50czogW10sXG4gICAgfTtcblxuICAgIC8vIGdldCByZWZlcmVuY2UgYW5kIHBvcHBlciBlbGVtZW50cyAoYWxsb3cgalF1ZXJ5IHdyYXBwZXJzKVxuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlICYmIHJlZmVyZW5jZS5qcXVlcnkgPyByZWZlcmVuY2VbMF0gOiByZWZlcmVuY2U7XG4gICAgdGhpcy5wb3BwZXIgPSBwb3BwZXIgJiYgcG9wcGVyLmpxdWVyeSA/IHBvcHBlclswXSA6IHBvcHBlcjtcblxuICAgIC8vIERlZXAgbWVyZ2UgbW9kaWZpZXJzIG9wdGlvbnNcbiAgICB0aGlzLm9wdGlvbnMubW9kaWZpZXJzID0ge307XG4gICAgT2JqZWN0LmtleXMoe1xuICAgICAgLi4uUG9wcGVyLkRlZmF1bHRzLm1vZGlmaWVycyxcbiAgICAgIC4uLm9wdGlvbnMubW9kaWZpZXJzLFxuICAgIH0pLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICB0aGlzLm9wdGlvbnMubW9kaWZpZXJzW25hbWVdID0ge1xuICAgICAgICAvLyBJZiBpdCdzIGEgYnVpbHQtaW4gbW9kaWZpZXIsIHVzZSBpdCBhcyBiYXNlXG4gICAgICAgIC4uLihQb3BwZXIuRGVmYXVsdHMubW9kaWZpZXJzW25hbWVdIHx8IHt9KSxcbiAgICAgICAgLy8gSWYgdGhlcmUgYXJlIGN1c3RvbSBvcHRpb25zLCBvdmVycmlkZSBhbmQgbWVyZ2Ugd2l0aCBkZWZhdWx0IG9uZXNcbiAgICAgICAgLi4uKG9wdGlvbnMubW9kaWZpZXJzID8gb3B0aW9ucy5tb2RpZmllcnNbbmFtZV0gOiB7fSksXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgLy8gUmVmYWN0b3JpbmcgbW9kaWZpZXJzJyBsaXN0IChPYmplY3QgPT4gQXJyYXkpXG4gICAgdGhpcy5tb2RpZmllcnMgPSBPYmplY3Qua2V5cyh0aGlzLm9wdGlvbnMubW9kaWZpZXJzKVxuICAgICAgLm1hcChuYW1lID0+ICh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIC4uLnRoaXMub3B0aW9ucy5tb2RpZmllcnNbbmFtZV0sXG4gICAgICB9KSlcbiAgICAgIC8vIHNvcnQgdGhlIG1vZGlmaWVycyBieSBvcmRlclxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKTtcblxuICAgIC8vIG1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIGV4ZWN1dGUgYXJiaXRyYXJ5IGNvZGUgd2hlbiBQb3BwZXIuanMgZ2V0IGluaXRlZFxuICAgIC8vIHN1Y2ggY29kZSBpcyBleGVjdXRlZCBpbiB0aGUgc2FtZSBvcmRlciBvZiBpdHMgbW9kaWZpZXJcbiAgICAvLyB0aGV5IGNvdWxkIGFkZCBuZXcgcHJvcGVydGllcyB0byB0aGVpciBvcHRpb25zIGNvbmZpZ3VyYXRpb25cbiAgICAvLyBCRSBBV0FSRTogZG9uJ3QgYWRkIG9wdGlvbnMgdG8gYG9wdGlvbnMubW9kaWZpZXJzLm5hbWVgIGJ1dCB0byBgbW9kaWZpZXJPcHRpb25zYCFcbiAgICB0aGlzLm1vZGlmaWVycy5mb3JFYWNoKG1vZGlmaWVyT3B0aW9ucyA9PiB7XG4gICAgICBpZiAobW9kaWZpZXJPcHRpb25zLmVuYWJsZWQgJiYgaXNGdW5jdGlvbihtb2RpZmllck9wdGlvbnMub25Mb2FkKSkge1xuICAgICAgICBtb2RpZmllck9wdGlvbnMub25Mb2FkKFxuICAgICAgICAgIHRoaXMucmVmZXJlbmNlLFxuICAgICAgICAgIHRoaXMucG9wcGVyLFxuICAgICAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgICAgICBtb2RpZmllck9wdGlvbnMsXG4gICAgICAgICAgdGhpcy5zdGF0ZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gZmlyZSB0aGUgZmlyc3QgdXBkYXRlIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXIgaW4gdGhlIHJpZ2h0IHBsYWNlXG4gICAgdGhpcy51cGRhdGUoKTtcblxuICAgIGNvbnN0IGV2ZW50c0VuYWJsZWQgPSB0aGlzLm9wdGlvbnMuZXZlbnRzRW5hYmxlZDtcbiAgICBpZiAoZXZlbnRzRW5hYmxlZCkge1xuICAgICAgLy8gc2V0dXAgZXZlbnQgbGlzdGVuZXJzLCB0aGV5IHdpbGwgdGFrZSBjYXJlIG9mIHVwZGF0ZSB0aGUgcG9zaXRpb24gaW4gc3BlY2lmaWMgc2l0dWF0aW9uc1xuICAgICAgdGhpcy5lbmFibGVFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUuZXZlbnRzRW5hYmxlZCA9IGV2ZW50c0VuYWJsZWQ7XG4gIH1cblxuICAvLyBXZSBjYW4ndCB1c2UgY2xhc3MgcHJvcGVydGllcyBiZWNhdXNlIHRoZXkgZG9uJ3QgZ2V0IGxpc3RlZCBpbiB0aGVcbiAgLy8gY2xhc3MgcHJvdG90eXBlIGFuZCBicmVhayBzdHVmZiBsaWtlIFNpbm9uIHN0dWJzXG4gIHVwZGF0ZSgpIHtcbiAgICByZXR1cm4gdXBkYXRlLmNhbGwodGhpcyk7XG4gIH1cbiAgZGVzdHJveSgpIHtcbiAgICByZXR1cm4gZGVzdHJveS5jYWxsKHRoaXMpO1xuICB9XG4gIGVuYWJsZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHJldHVybiBlbmFibGVFdmVudExpc3RlbmVycy5jYWxsKHRoaXMpO1xuICB9XG4gIGRpc2FibGVFdmVudExpc3RlbmVycygpIHtcbiAgICByZXR1cm4gZGlzYWJsZUV2ZW50TGlzdGVuZXJzLmNhbGwodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogU2NoZWR1bGVzIGFuIHVwZGF0ZS4gSXQgd2lsbCBydW4gb24gdGhlIG5leHQgVUkgdXBkYXRlIGF2YWlsYWJsZS5cbiAgICogQG1ldGhvZCBzY2hlZHVsZVVwZGF0ZVxuICAgKiBAbWVtYmVyb2YgUG9wcGVyXG4gICAqL1xuICBzY2hlZHVsZVVwZGF0ZSA9ICgpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZSk7XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgdXRpbGl0aWVzIHVzZWZ1bCB3aGVuIHdyaXRpbmcgY3VzdG9tIG1vZGlmaWVycy5cbiAgICogU3RhcnRpbmcgZnJvbSB2ZXJzaW9uIDEuNywgdGhpcyBtZXRob2QgaXMgYXZhaWxhYmxlIG9ubHkgaWYgeW91XG4gICAqIGluY2x1ZGUgYHBvcHBlci11dGlscy5qc2AgYmVmb3JlIGBwb3BwZXIuanNgLlxuICAgKlxuICAgKiAqKkRFUFJFQ0FUSU9OKio6IFRoaXMgd2F5IHRvIGFjY2VzcyBQb3BwZXJVdGlscyBpcyBkZXByZWNhdGVkXG4gICAqIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdjIhIFVzZSB0aGUgUG9wcGVyVXRpbHMgbW9kdWxlIGRpcmVjdGx5IGluc3RlYWQuXG4gICAqIER1ZSB0byB0aGUgaGlnaCBpbnN0YWJpbGl0eSBvZiB0aGUgbWV0aG9kcyBjb250YWluZWQgaW4gVXRpbHMsIHdlIGNhbid0XG4gICAqIGd1YXJhbnRlZSB0aGVtIHRvIGZvbGxvdyBzZW12ZXIuIFVzZSB0aGVtIGF0IHlvdXIgb3duIHJpc2shXG4gICAqIEBzdGF0aWNcbiAgICogQHByaXZhdGVcbiAgICogQHR5cGUge09iamVjdH1cbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjhcbiAgICogQG1lbWJlciBVdGlsc1xuICAgKiBAbWVtYmVyb2YgUG9wcGVyXG4gICAqL1xuICBzdGF0aWMgVXRpbHMgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWwpLlBvcHBlclV0aWxzO1xuXG4gIHN0YXRpYyBwbGFjZW1lbnRzID0gcGxhY2VtZW50cztcblxuICBzdGF0aWMgRGVmYXVsdHMgPSBEZWZhdWx0cztcbn1cblxuLyoqXG4gKiBUaGUgYHJlZmVyZW5jZU9iamVjdGAgaXMgYW4gb2JqZWN0IHRoYXQgcHJvdmlkZXMgYW4gaW50ZXJmYWNlIGNvbXBhdGlibGUgd2l0aCBQb3BwZXIuanNcbiAqIGFuZCBsZXRzIHlvdSB1c2UgaXQgYXMgcmVwbGFjZW1lbnQgb2YgYSByZWFsIERPTSBub2RlLjxiciAvPlxuICogWW91IGNhbiB1c2UgdGhpcyBtZXRob2QgdG8gcG9zaXRpb24gYSBwb3BwZXIgcmVsYXRpdmVseSB0byBhIHNldCBvZiBjb29yZGluYXRlc1xuICogaW4gY2FzZSB5b3UgZG9uJ3QgaGF2ZSBhIERPTSBub2RlIHRvIHVzZSBhcyByZWZlcmVuY2UuXG4gKlxuICogYGBgXG4gKiBuZXcgUG9wcGVyKHJlZmVyZW5jZU9iamVjdCwgcG9wcGVyTm9kZSk7XG4gKiBgYGBcbiAqXG4gKiBOQjogVGhpcyBmZWF0dXJlIGlzbid0IHN1cHBvcnRlZCBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMC5cbiAqIEBuYW1lIHJlZmVyZW5jZU9iamVjdFxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gZGF0YS5nZXRCb3VuZGluZ0NsaWVudFJlY3RcbiAqIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgc2V0IG9mIGNvb3JkaW5hdGVzIGNvbXBhdGlibGUgd2l0aCB0aGUgbmF0aXZlIGBnZXRCb3VuZGluZ0NsaWVudFJlY3RgIG1ldGhvZC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBkYXRhLmNsaWVudFdpZHRoXG4gKiBBbiBFUzYgZ2V0dGVyIHRoYXQgd2lsbCByZXR1cm4gdGhlIHdpZHRoIG9mIHRoZSB2aXJ0dWFsIHJlZmVyZW5jZSBlbGVtZW50LlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGRhdGEuY2xpZW50SGVpZ2h0XG4gKiBBbiBFUzYgZ2V0dGVyIHRoYXQgd2lsbCByZXR1cm4gdGhlIGhlaWdodCBvZiB0aGUgdmlydHVhbCByZWZlcmVuY2UgZWxlbWVudC5cbiAqL1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0ICdib290c3RyYXAnO1xyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbi8vXHJcblxyXG59KTsiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9