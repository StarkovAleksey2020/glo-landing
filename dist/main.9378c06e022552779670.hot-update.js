/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateglo_landing"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/togglePopUp */ \"./src/modules/togglePopUp.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_addDots__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/addDots */ \"./src/modules/addDots.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_changeImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/changeImage */ \"./src/modules/changeImage.js\");\n/* harmony import */ var _modules_validateCalculatorFields__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/validateCalculatorFields */ \"./src/modules/validateCalculatorFields.js\");\n/* harmony import */ var _modules_validateFormFields__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/validateFormFields */ \"./src/modules/validateFormFields.js\");\n/* harmony import */ var _modules_validateEmail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/validateEmail */ \"./src/modules/validateEmail.js\");\n/* harmony import */ var _modules_validatePhone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/validatePhone */ \"./src/modules/validatePhone.js\");\n/* harmony import */ var _modules_blurHandler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/blurHandler */ \"./src/modules/blurHandler.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__.default)('15 March 2021'); // menu\n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__.default)(); //popup\n\n(0,_modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__.default)(); // scrolling\n\nvar anchors = document.querySelectorAll('a[href]');\nanchors.forEach(function (item) {\n  item.addEventListener('click', function (e) {\n    e.preventDefault();\n    var blockId = item.getAttribute('href').substr(1);\n\n    if (blockId !== 'close' && blockId !== '') {\n      document.getElementById(blockId).scrollIntoView({\n        behavior: 'smooth',\n        block: 'start'\n      });\n    }\n  });\n}); // tabs\n\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__.default)(); // add dots\n\n(0,_modules_addDots__WEBPACK_IMPORTED_MODULE_4__.default)(); // slider\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__.default)(); // mouse over/out change image\n\n(0,_modules_changeImage__WEBPACK_IMPORTED_MODULE_6__.default)(); // numbers allow only (in calculator fields)\n\n(0,_modules_validateCalculatorFields__WEBPACK_IMPORTED_MODULE_7__.default)(); // cyrillic allow only (in name&message fields)\n\n(0,_modules_validateFormFields__WEBPACK_IMPORTED_MODULE_8__.default)('form1-name');\n(0,_modules_validateFormFields__WEBPACK_IMPORTED_MODULE_8__.default)('form2-name');\n(0,_modules_validateFormFields__WEBPACK_IMPORTED_MODULE_8__.default)('form3-name'); // email field validation\n\n(0,_modules_validateEmail__WEBPACK_IMPORTED_MODULE_9__.default)(); // phone field validation\n\n(0,_modules_validatePhone__WEBPACK_IMPORTED_MODULE_10__.default)('form1-phone');\n(0,_modules_validatePhone__WEBPACK_IMPORTED_MODULE_10__.default)('form2-phone');\n(0,_modules_validatePhone__WEBPACK_IMPORTED_MODULE_10__.default)('form3-phone'); // blur handling\n\n(0,_modules_blurHandler__WEBPACK_IMPORTED_MODULE_11__.default)(); // calculator\n\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_12__.default)(100); // send-ajax-form\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_13__.default)('form1');\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_13__.default)('form2');\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_13__.default)('form3');\n\n//# sourceURL=webpack://glo-landing/./src/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("0f5a3547ea0dbfaccacf")
/******/ 	})();
/******/ 	
/******/ }
);