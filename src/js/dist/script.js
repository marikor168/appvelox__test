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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/classlist-polyfill/src/index.js":
/*!******************************************************!*\
  !*** ./node_modules/classlist-polyfill/src/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * classList.js: Cross-browser full element.classList implementation.
 * 1.1.20170427
 *
 * By Eli Grey, http://eligrey.com
 * License: Dedicated to the public domain.
 *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md
 */

/*global self, document, DOMException */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */

if ("document" in window.self) {

// Full polyfill for browsers with no classList support
// Including IE < Edge missing SVGElement.classList
if (!("classList" in document.createElement("_")) 
	|| document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg","g"))) {

(function (view) {

"use strict";

if (!('Element' in view)) return;

var
	  classListProp = "classList"
	, protoProp = "prototype"
	, elemCtrProto = view.Element[protoProp]
	, objCtr = Object
	, strTrim = String[protoProp].trim || function () {
		return this.replace(/^\s+|\s+$/g, "");
	}
	, arrIndexOf = Array[protoProp].indexOf || function (item) {
		var
			  i = 0
			, len = this.length
		;
		for (; i < len; i++) {
			if (i in this && this[i] === item) {
				return i;
			}
		}
		return -1;
	}
	// Vendors: please allow content code to instantiate DOMExceptions
	, DOMEx = function (type, message) {
		this.name = type;
		this.code = DOMException[type];
		this.message = message;
	}
	, checkTokenAndGetIndex = function (classList, token) {
		if (token === "") {
			throw new DOMEx(
				  "SYNTAX_ERR"
				, "An invalid or illegal string was specified"
			);
		}
		if (/\s/.test(token)) {
			throw new DOMEx(
				  "INVALID_CHARACTER_ERR"
				, "String contains an invalid character"
			);
		}
		return arrIndexOf.call(classList, token);
	}
	, ClassList = function (elem) {
		var
			  trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
			, classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
			, i = 0
			, len = classes.length
		;
		for (; i < len; i++) {
			this.push(classes[i]);
		}
		this._updateClassName = function () {
			elem.setAttribute("class", this.toString());
		};
	}
	, classListProto = ClassList[protoProp] = []
	, classListGetter = function () {
		return new ClassList(this);
	}
;
// Most DOMException implementations don't allow calling DOMException's toString()
// on non-DOMExceptions. Error's toString() is sufficient here.
DOMEx[protoProp] = Error[protoProp];
classListProto.item = function (i) {
	return this[i] || null;
};
classListProto.contains = function (token) {
	token += "";
	return checkTokenAndGetIndex(this, token) !== -1;
};
classListProto.add = function () {
	var
		  tokens = arguments
		, i = 0
		, l = tokens.length
		, token
		, updated = false
	;
	do {
		token = tokens[i] + "";
		if (checkTokenAndGetIndex(this, token) === -1) {
			this.push(token);
			updated = true;
		}
	}
	while (++i < l);

	if (updated) {
		this._updateClassName();
	}
};
classListProto.remove = function () {
	var
		  tokens = arguments
		, i = 0
		, l = tokens.length
		, token
		, updated = false
		, index
	;
	do {
		token = tokens[i] + "";
		index = checkTokenAndGetIndex(this, token);
		while (index !== -1) {
			this.splice(index, 1);
			updated = true;
			index = checkTokenAndGetIndex(this, token);
		}
	}
	while (++i < l);

	if (updated) {
		this._updateClassName();
	}
};
classListProto.toggle = function (token, force) {
	token += "";

	var
		  result = this.contains(token)
		, method = result ?
			force !== true && "remove"
		:
			force !== false && "add"
	;

	if (method) {
		this[method](token);
	}

	if (force === true || force === false) {
		return force;
	} else {
		return !result;
	}
};
classListProto.toString = function () {
	return this.join(" ");
};

if (objCtr.defineProperty) {
	var classListPropDesc = {
		  get: classListGetter
		, enumerable: true
		, configurable: true
	};
	try {
		objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	} catch (ex) { // IE 8 doesn't support enumerable:true
		// adding undefined to fight this issue https://github.com/eligrey/classList.js/issues/36
		// modernie IE8-MSW7 machine has IE8 8.0.6001.18702 and is affected
		if (ex.number === undefined || ex.number === -0x7FF5EC54) {
			classListPropDesc.enumerable = false;
			objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
		}
	}
} else if (objCtr[protoProp].__defineGetter__) {
	elemCtrProto.__defineGetter__(classListProp, classListGetter);
}

}(window.self));

}

// There is full or partial native classList support, so just check if we need
// to normalize the add/remove and toggle APIs.

(function () {
	"use strict";

	var testElement = document.createElement("_");

	testElement.classList.add("c1", "c2");

	// Polyfill for IE 10/11 and Firefox <26, where classList.add and
	// classList.remove exist but support only one argument at a time.
	if (!testElement.classList.contains("c2")) {
		var createMethod = function(method) {
			var original = DOMTokenList.prototype[method];

			DOMTokenList.prototype[method] = function(token) {
				var i, len = arguments.length;

				for (i = 0; i < len; i++) {
					token = arguments[i];
					original.call(this, token);
				}
			};
		};
		createMethod('add');
		createMethod('remove');
	}

	testElement.classList.toggle("c3", false);

	// Polyfill for IE 10 and Firefox <24, where classList.toggle does not
	// support the second argument.
	if (testElement.classList.contains("c3")) {
		var _toggle = DOMTokenList.prototype.toggle;

		DOMTokenList.prototype.toggle = function(token, force) {
			if (1 in arguments && !this.contains(token) === !force) {
				return force;
			} else {
				return _toggle.call(this, token);
			}
		};

	}

	testElement = null;
}());

}


/***/ }),

/***/ "./node_modules/nodelist-foreach-polyfill/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/nodelist-foreach-polyfill/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}


/***/ }),

/***/ "./src/js/parts/hideHeader.js":
/*!************************************!*\
  !*** ./src/js/parts/hideHeader.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function hideHeader() {
  var scrollPosition = window.pageYOffset,
      header = document.querySelector('.header-nav');
  window.addEventListener('scroll', function () {
    var services = document.querySelector('.services'),
        position = services.getBoundingClientRect(),
        servicesY = position.top;

    if (scrollPosition >= servicesY) {
      header.style.display = 'none';
    } else {
      header.style.display = 'block';
    }

    scrollPosition = 0;
  });
}

module.exports = hideHeader;

/***/ }),

/***/ "./src/js/parts/menu.js":
/*!******************************!*\
  !*** ./src/js/parts/menu.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function menu() {
  var menu = document.querySelector('.popup-menu'),
      hamburger = document.querySelector('.hamburger'),
      hambMenu = document.querySelectorAll('.header-menu__link')[0];
  var menuShow = 0;
  hamburger.addEventListener('click', function () {
    if (menuShow == 0) {
      menu.style.display = 'block';
      menuShow = 1;
    } else {
      menu.style.display = 'none';
      menuShow = 0;
    }
  });
  hambMenu.addEventListener('click', function () {
    if (menuShow == 0) {
      menu.style.display = 'block';
      menuShow = 1;
    } else {
      menu.style.display = 'none';
      menuShow = 0;
    }
  });
}

module.exports = menu;

/***/ }),

/***/ "./src/js/parts/principles.js":
/*!************************************!*\
  !*** ./src/js/parts/principles.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function principles() {
  var slideIndex = 1,
      slides = document.querySelectorAll('.principles-block'),
      prev = document.querySelector('.principles-wrap .prev'),
      next = document.querySelector('.principles-wrap .next'),
      dotsWrap = document.querySelector('.principles-dots'),
      dots = document.querySelectorAll('.principles-dots .dot');
  prev.classList.remove('hide');
  next.classList.remove('hide');
  dotsWrap.classList.remove('hide');
  showSlides(slideIndex);

  function showSlides(n) {
    // меняем стрелочки
    if (n == 1) {
      prev.style.backgroundImage = 'url(./img/navigation/ShapeCopy.png)';

      if (prev.classList.contains('mirrorY')) {
        prev.classList.remove('mirrorY');
      }

      next.style.backgroundImage = 'url(./img/navigation/Shape.png)';

      if (next.classList.contains('mirrorY')) {
        next.classList.remove('mirrorY');
      }
    }

    if (n > 1 && n < slides.length) {
      prev.style.backgroundImage = 'url(./img/navigation/Shape.png)';
      prev.classList.add('mirrorY');
      next.style.backgroundImage = 'url(./img/navigation/Shape.png)';

      if (next.classList.contains('mirrorY')) {
        next.classList.remove('mirrorY');
      }
    }

    if (n == slides.length) {
      prev.style.backgroundImage = 'url(./img/navigation/Shape.png)';
      prev.classList.add('mirrorY');
      next.style.backgroundImage = 'url(./img/navigation/ShapeCopy.png)';
      next.classList.add('mirrorY');
    }

    slides.forEach(function (item) {
      return item.style.display = 'none';
    });
    dots.forEach(function (item) {
      return item.classList.remove('dot-active');
    });
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  } // определяем текущий слайд и устанавливаем его


  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  prev.addEventListener('click', function () {
    if (slideIndex > 1 && slideIndex <= slides.length) {
      plusSlides(-1);
    }
  });
  next.addEventListener('click', function () {
    if (slideIndex >= 1 && slideIndex < slides.length) {
      plusSlides(1);
    }
  });
  dotsWrap.addEventListener('click', function (event) {
    for (var i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });
  var touchstartX = 0;
  var touchendX = 0;
  var gestureZone = document.querySelector('.principles');
  gestureZone.addEventListener('touchstart', function (event) {
    touchstartX = event.changedTouches[0].screenX;
  }, false);
  gestureZone.addEventListener('touchend', function (event) {
    touchendX = event.changedTouches[0].screenX;
    handleGesture();
  }, false);

  function handleGesture() {
    if (touchendX <= touchstartX) {
      if (slideIndex >= 1 && slideIndex < slides.length) {
        plusSlides(1);
      }
    }

    if (touchendX >= touchstartX) {
      if (slideIndex > 1 && slideIndex <= slides.length) {
        plusSlides(-1);
      }
    }
  }
}

module.exports = principles;

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
  // тот слайд, который показывается в текущий момент
  var slideIndex = 1,
      slides = document.querySelectorAll('.slider-block'),
      prev = document.querySelector('.slider-wrap .prev'),
      next = document.querySelector('.slider-wrap .next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.slider-dots .dot');
  showSlides(slideIndex);

  function showSlides(n) {
    // меняем стрелочки
    if (n == 1) {
      prev.style.backgroundImage = 'url(./img/navigation/ShapeCopy.png)';

      if (prev.classList.contains('mirrorY')) {
        prev.classList.remove('mirrorY');
      }

      next.style.backgroundImage = 'url(./img/navigation/Shape.png)';

      if (next.classList.contains('mirrorY')) {
        next.classList.remove('mirrorY');
      }
    }

    if (n > 1 && n < slides.length) {
      prev.style.backgroundImage = 'url(./img/navigation/Shape.png)';
      prev.classList.add('mirrorY');
      next.style.backgroundImage = 'url(./img/navigation/Shape.png)';

      if (next.classList.contains('mirrorY')) {
        next.classList.remove('mirrorY');
      }
    }

    if (n == slides.length) {
      prev.style.backgroundImage = 'url(./img/navigation/Shape.png)';
      prev.classList.add('mirrorY');
      next.style.backgroundImage = 'url(./img/navigation/ShapeCopy.png)';
      next.classList.add('mirrorY');
    }

    slides.forEach(function (item) {
      return item.style.display = 'none';
    });
    dots.forEach(function (item) {
      return item.classList.remove('dot-active');
    });
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  } // определяем текущий слайд и устанавливаем его


  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  prev.addEventListener('click', function () {
    if (slideIndex > 1 && slideIndex <= slides.length) {
      plusSlides(-1);
    }
  });
  next.addEventListener('click', function () {
    if (slideIndex >= 1 && slideIndex < slides.length) {
      plusSlides(1);
    }
  });
  dotsWrap.addEventListener('click', function (event) {
    for (var i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  }); // реализация свайпа

  var touchstartX = 0;
  var touchendX = 0;
  var gestureZone = document.querySelector('.slider');
  gestureZone.addEventListener('touchstart', function (event) {
    touchstartX = event.changedTouches[0].screenX;
  }, false);
  gestureZone.addEventListener('touchend', function (event) {
    touchendX = event.changedTouches[0].screenX;
    handleGesture();
  }, false);

  function handleGesture() {
    if (touchendX <= touchstartX) {
      if (slideIndex >= 1 && slideIndex < slides.length) {
        plusSlides(1);
      }
    }

    if (touchendX >= touchstartX) {
      if (slideIndex > 1 && slideIndex <= slides.length) {
        plusSlides(-1);
      }
    }
  }
}

module.exports = slider;

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
  var tab = document.querySelectorAll('.services-header__tab'),
      info = document.querySelector('.services-header'),
      tabContent = document.querySelectorAll('.services-tabcontent');

  var hideTabContent = function hideTabContent() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    for (var i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  };

  hideTabContent(1);

  var showTabContent = function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  };

  info.addEventListener('click', function (event) {
    var target = event.target;

    if (target && target.classList.contains('services-header__tab')) {
      for (var i = 0; i < tab.length; i++) {
        if (tab[i].classList.contains('services-header__tab-active')) {
          tab[i].classList.remove('services-header__tab-active');
        }
      }

      target.classList.add('services-header__tab-active');

      for (var _i = 0; _i < tab.length; _i++) {
        if (target == tab[_i]) {
          hideTabContent(0);
          showTabContent(_i);
          break;
        }
      }
    }
  });
}

module.exports = tabs;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! nodelist-foreach-polyfill */ "./node_modules/nodelist-foreach-polyfill/index.js");

__webpack_require__(/*! classlist-polyfill */ "./node_modules/classlist-polyfill/src/index.js");

window.addEventListener('DOMContentLoaded', function () {
  var tabs = __webpack_require__(/*! ./parts/tabs.js */ "./src/js/parts/tabs.js"),
      slider = __webpack_require__(/*! ./parts/slider.js */ "./src/js/parts/slider.js"),
      hideHeader = __webpack_require__(/*! ./parts/hideHeader.js */ "./src/js/parts/hideHeader.js"),
      principles = __webpack_require__(/*! ./parts/principles.js */ "./src/js/parts/principles.js"),
      menu = __webpack_require__(/*! ./parts/menu.js */ "./src/js/parts/menu.js");

  tabs();
  slider();
  hideHeader();
  menu();

  if (window.innerWidth <= 1260) {
    principles();
  }
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map