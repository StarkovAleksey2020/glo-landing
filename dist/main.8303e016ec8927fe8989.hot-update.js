/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateglo_landing"]("main",{

/***/ "./src/modules/blurHandler.js":
/*!************************************!*\
  !*** ./src/modules/blurHandler.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar blurHandler = function blurHandler() {\n  var form = document.getElementById('form2');\n  var formInputs = form.querySelectorAll('input');\n  form.addEventListener('blur', function (e) {\n    //validate name & message;\n    var customerName = document.getElementById('form2-name');\n    var customerMessage = document.getElementById('form2-message');\n    customerName.addEventListener('input', function (e) {\n      var nameInput = e.target.value;\n      e.target.value = nameInput.replace(/[^А-Яа-яЁё ]/g, '').toUpperCase();\n    });\n    customerMessage.addEventListener('input', function (e) {\n      var messageInput = e.target.value;\n      e.target.value = messageInput.replace(/[^А-Яа-яЁё 0-9.,!;:\\-_()\\?]/g, '').toUpperCase();\n    }); //validate email;\n\n    var email = document.getElementById('form2-email');\n    email.addEventListener('input', function (e) {\n      var emailInput = e.target.value;\n      e.target.value = emailInput.replace(/[^A-Za-z@\\-_.!~*']/g, '');\n    }); //validate phone;\n\n    var phone = document.getElementById('form2-phone');\n    phone.addEventListener('input', function (e) {\n      var first = true;\n      var phoneInput = e.target.value;\n      e.target.value = phoneInput.replace(/[^0-9\\+]/g, '').replace(/(\\+)+/g, function (match, p1) {\n        if (first) {\n          first = false;\n          return p1;\n        } else return '';\n      });\n    });\n    formInputs.forEach(function (item) {\n      var elementValue = item.value;\n      elementValue = elementValue.replace(/[ ]+/g, ' ');\n      elementValue = elementValue.replace(/[-]+/g, '-');\n      elementValue = elementValue.replace(/^[ ]+/g, '');\n      elementValue = elementValue.replace(/^[-]+/g, '');\n      elementValue = elementValue.replace(/[ ]+$/g, '');\n      elementValue = elementValue.replace(/[-]+$/g, '');\n\n      if (item.id === 'form2-name') {\n        elementValue = elementValue.substring(0, 1).toUpperCase() + elementValue.substring(1).toLowerCase();\n      }\n\n      item.value = elementValue;\n    });\n  }, true);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blurHandler);\n\n//# sourceURL=webpack://glo-landing/./src/modules/blurHandler.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("dbb3b90a200072a42623")
/******/ 	})();
/******/ 	
/******/ }
);