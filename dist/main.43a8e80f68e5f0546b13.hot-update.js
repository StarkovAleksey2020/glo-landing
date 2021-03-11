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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validateFormFields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validateFormFields */ \"./src/modules/validateFormFields.js\");\n/* harmony import */ var _validateEmail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validateEmail */ \"./src/modules/validateEmail.js\");\n/* harmony import */ var _validatePhone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validatePhone */ \"./src/modules/validatePhone.js\");\n\n\n\n\nvar blurHandler = function blurHandler() {\n  var form = document.getElementById('form2');\n  var formInputs = form.querySelectorAll('input');\n  form.addEventListener('blur', function (e) {\n    (0,_validateFormFields__WEBPACK_IMPORTED_MODULE_0__.default)('form2-name');\n    (0,_validateEmail__WEBPACK_IMPORTED_MODULE_1__.default)();\n    (0,_validatePhone__WEBPACK_IMPORTED_MODULE_2__.default)('form2-phone');\n    formInputs.forEach(function (item) {\n      return formHandler(item);\n    });\n  }, true);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blurHandler);\n\n//# sourceURL=webpack://glo-landing/./src/modules/blurHandler.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("47a2683529347e574bf8")
/******/ 	})();
/******/ 	
/******/ }
);